#!/bin/bash
# STAKEWORLD 2023
# Make snapshots of substrate nodes
# Run this script in crontab

workdir="/opt/stakeworld-website"
source $workdir/scripts/snapshot.conf

# Error handling
error() {
    echo "Error on line $1"
    echo "Exiting"
    tail -n100 $workdir/var/snapshot.log | mail -s "snapshot error" $email
    exit 1
}

trap 'error $LINENO' ERR

# STDOUT logfile
exec 1>>$workdir/var/snapshot.log

# START
echo `date` "Starting snapshot run for $targets"

# Check directories
if [ ! -d $datadir ]
then
    echo "$datadir does not exist"
    exit 1
fi 

if [ ! -d $snapshotdir ]
then
    echo "$snapshotdir does not exist"
    exit 1
fi 

# Main snapshot function
function snapshot {
	chilled=false
	status="$(systemctl is-active $i)"
	echo "--------------------------------------------------------------"
	echo "Snapshot of $i db=$db chain=$chain, port=$port, status=$status"
	if [[ "$status" == "inactive" ]]; then
		echo "Node seems chilled, activating $i and waiting for sync"
		systemctl start $i
		chilled=true
		sleep 30m
	fi
	# Get block height from prometheus metrics
	blockheight=`wget -q localhost:$port/metrics -O - | grep block_height | grep best | cut -d " " -f2`
	date=`date +"%a %d %b"`
	echo "Restart $i and wait 1 minute for db to settle"
	systemctl restart $i
	sleep 60
	echo "Stopping $i and wait 1 minute for db to settle"
	systemctl stop $i
	sleep 60
	cd $datadir/$1/chains/$chain
	if [[ "$db" == "rocksdb" ]]; then
    		dbdir="db/full"
	elif [[ "$db" == "paritydb" ]]; then
    		dbdir="paritydb/full"
	fi
	
	echo "Making $i tar backup"
	tar --exclude='parachains' -cf - $dbdir | lz4 > $snapshotdir/$db-$chain.lz4
	dbsize=`du --exclude='parachains' -sb $dbdir | cut -f1`
	humansnapsize=`du -sh $snapshotdir/$db-$chain.lz4 | cut -f1`
	humandbsize=`du --exclude='parachains' -sh $dbdir | cut -f1`
	snapdate=`date "+%d/%m/%Y"`
	if [[ "$chilled" == "false" ]]; then
		echo "Node not chilled, activating $i again"
		systemctl start $i
	fi
	echo "| [direct link](http://snapshot.stakeworld.io/$db-$chain.lz4) | $chain | $db | pruned | $blockheight | $humansnapsize | $humandbsize |" >> $workdir/docs/snapshot.mdx
	echo "Snapshot of $i fullsize=$humansnapsize, tarsize=$humandbsize, block=$blockheight finished"
}

echo "Starting snapshot service..."

date=`date +"%a %d %b"`

echo "Setting snapshot header"
cat $workdir/docs/snapshot.mdx.header > $workdir/docs/snapshot.mdx
echo "Last update: $date" >> $workdir/docs/snapshot.mdx
echo "" >> $workdir/docs/snapshot.mdx
cat << EOF >> $workdir/docs/snapshot.mdx
|  | Chain    | Database   | Format | Blockheight | Snapshot | Full         | 
| ------------------------| ----------- | -------- | ------- | ----------- | ---------- | ------------ |
EOF

# Process all targets
for i in "${targets[@]}"
do
	db=unknown
	chain=unknown

	if grep -q paritydb "/etc/systemd/system/$i.service"; then
  		db="paritydb"
	fi
	if grep -q rocksdb "/etc/systemd/system/$i.service"; then
  		db="rocksdb"
	fi
	if grep -q 'chain kusama' "/etc/systemd/system/$i.service"; then
  		chain="ksmcc3"
	fi
	if grep -q 'chain polkadot' "/etc/systemd/system/$i.service"; then
  		chain="polkadot"
	fi
	if grep -q 'chain westend' "/etc/systemd/system/$i.service"; then
  		chain="westend2"
	fi

	port=`cat /etc/systemd/system/$i.service | grep -o -P  'prometheus-port.{0,5}' | cut -d " " -f2`

	snapshot "$i"
done

echo "Setting snapshot body"
cat $workdir/docs/snapshot.mdx.body >> $workdir/docs/snapshot.mdx

# Change to workdir
cd $workdir/scripts

# Make graph
echo "Making snapsize graph"
./snapsize.sh

# Commit (with deploy workflow)
git commit ../docs/snapshot.mdx -m "Snapshot page deploy"
git push

# The end
echo "Finished"
