#!/bin/bash
# STAKEWORLD 2022
# Make a snapshots of kusama and polkadot nodes
# Run this script in crontab

# Error handling
error() {
    echo "Error on line $1"
    echo "Exiting"
    tail -n100 $workdir/var/snapshot.log | mail -s "snapshot error" info@stakeworld.nl
    exit 1
}

trap 'error $LINENO' ERR

# Setup variables
#snapshotdir="/var/www/snapshot"
snapshotdir="/backup/snapshot"
datadir="/home/snapshots"
workdir="/opt/stakeworld-website"

# STDOUT logfile
exec 1>>$workdir/var/snapshot.log

# Snaphot targets
targets=(stakeworld-04k stakeworld-00k stakeworld-04p stakeworld-00p)

# START
echo `date` "Starting snapshot run for $targets"

# Check directories
if [ ! -d $datadir ]
then
    echo "$datadir does not exist"
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
		sleep 10m
	fi
	# Get block height from prometheus metrics
	blockheight=`wget -q localhost:$port/metrics -O - | grep best | cut -d " " -f2`
	date=`date +"%a %d %b @ %H:%M"`
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
	
	# Backup the existing tar
	#rm $snapshotdir/$db-$chain-1.lz4
	#mv $snapshotdir/$db-$chain.lz4 $snapshotdir/$db-$chain-1.lz4

	echo "Making $i tar backup"
	tar --exclude='parachains' -cf - $dbdir | lz4 > $snapshotdir/$db-$chain.lz4
	size=`du -sh $snapshotdir/$db-$chain.lz4 | cut -f1`
	fullsize=`du --exclude='parachains' -sh $dbdir | cut -f1`
	if [[ "$chilled" == "false" ]]; then
		echo "Node not chilled, activating $i again"
		systemctl start $i
	fi
	echo "| [direct link](http://snapshot.stakeworld.nl/$db-$chain.lz4) | $chain | $db | pruned | $blockheight | $size | $fullsize | $date |" >> $workdir/docs/snapshot.mdx
	snapdate=`date "+%d/%m/%Y"`
	snapsize=`du --exclude='parachains' -sb $dbdir | cut -f1`
	echo "$snapdate,$snapsize" >> $workdir/var/snapsize.$chain.$db.dat
	echo "Snapshot of $i fullsize=$fullsize, tarsize=$size, snapsize=$snapsize finished"
}

echo "Starting snapshot service..."

echo "Setting website header"
cat $workdir/docs/snapshot.mdx.header > $workdir/docs/snapshot.mdx
cat << EOF >> $workdir/docs/snapshot.mdx
|  | Chain    | Database   | Format | Blockheight | Size       | Full         | Creation date     |
| ------------------------| ----------- | -------- | ------- | ----------- | ---------- | ------------ | -------- |
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

	port=`cat /etc/systemd/system/$i.service | grep -o -P  'prometheus-port.{0,5}' | cut -d " " -f2`

	snapshot "$i"
done

echo "Setting website body"
cat $workdir/docs/snapshot.mdx.body >> $workdir/docs/snapshot.mdx

# Change to workdir
cd $workdir/scripts

# Make graph
echo "Making snapsize graph"
./snapsize.sh

# echo "Publishing website"
./deploy.sh

echo Finished
