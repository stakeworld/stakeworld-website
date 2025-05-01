#!/bin/bash
# Make size graphs of substrate nodes
# Run this script in crontab

workdir="/opt/stakeworld-website"
source $workdir/scripts/sizeup.conf

# Error handling
error() {
    echo "Error on line $1"
    echo "Exiting"
    tail -n100 $workdir/var/sizeup.log | mail -s "sizeup error" $email
    exit 1
}

trap 'error $LINENO' ERR

# STDOUT logfile
exec 1>>$workdir/var/sizeup.log

# START
echo `date` "Starting sizeup run for $targets"

# Check directories
if [ ! -d $datadir ]
then
    echo "$datadir does not exist"
    exit 1
fi 

function sizeup {
	echo "Sizeup of $i chain=$chain, kind=$kind, port=$port, server=$server"
	# Get block height from prometheus metrics
	blockheight=`ssh $server "wget -q localhost:$port/metrics -O - | grep substrate_block_height | grep best | cut -d ' ' -f2"`
	date=`date +"%a %d %b"`
	if [[ "$db" == "rocksdb" ]]; then
    		dbdir="$archivedir/$1/chains/$chain/db/full"
	elif [[ "$db" == "paritydb" ]]; then
    		dbdir="$archivedir/$1/chains/$chain/paritydb/full"
	fi
	humandbsize=`ssh $server "du --exclude='parachains' -sh $dbdir | cut -f1"`
	dbsize=`ssh $server "du --exclude='parachains' -sb $dbdir | cut -f1"`
        previousdbsize=`tail -n1 $workdir/var/snapsize.$chain.$db.$kind.dat | cut -d , -f2`
        dbdiff=`expr $dbsize - $previousdbsize | numfmt --to iec`
        dbdiffraw=`expr $dbsize - $previousdbsize`
	snapdate=`date "+%d/%m/%Y"`
	echo "| $chain | $db | $kind | $blockheight | $humandbsize | $dbdiff |" >> $workdir/docs/dbsize.mdx
	echo "$snapdate,$dbsize" >> $workdir/var/snapsize.$chain.$db.$kind.dat
	echo "$snapdate,$dbdiffraw" >> $workdir/var/snapsize.$chain.$db.$kind.dbdiff.dat
	echo "Sizeup of $i fullsize=$humandbsize, diff=$dbdiff, height=$blockheight finished"
}

echo "Starting sizeup service..."

date=`date +"%a %d %b"`

echo "Setting dbsize header"
cat $workdir/docs/dbsize.mdx.header > $workdir/docs/dbsize.mdx
echo "Last update: $date" >> $workdir/docs/dbsize.mdx
echo "" >> $workdir/docs/dbsize.mdx
cat << EOF >> $workdir/docs/dbsize.mdx
| Chain    | Database   | Format | Blockheight | Full         | Daily growth |
| ------------------------| ----------- | -------- | ------- | ---------- | ----- | 
EOF

for i in "${!targets[@]}"
do
	db=paritydb
	chain=unknown
	kind=archive
        server=${targets[$i]}

        if [[ $i =~ "rpc" ]]; then
		kind="archive"
	else
		kind="pruned"
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
	if grep -q 'chain westmint' "/etc/systemd/system/$i.service"; then
  		chain="asset-hub-westend"
	fi
	if grep -q 'chain statemine' "/etc/systemd/system/$i.service"; then
  		chain="asset-hub-kusama"
	fi
	if grep -q 'chain statemint' "/etc/systemd/system/$i.service"; then
  		chain="asset-hub-polkadot"
	fi
	if grep -q 'chain bridge-hub-kusama' "/etc/systemd/system/$i.service"; then
  		chain="bridge-hub-kusama"
	fi
	if grep -q 'chain coretime-kusama' "/etc/systemd/system/$i.service"; then
  		chain="coretime-kusama"
	fi
	if grep -q 'people-kusama.json' "/etc/systemd/system/$i.service"; then
  		chain="people-kusama"
	fi
	if grep -q 'chain bridge-hub-polkadot' "/etc/systemd/system/$i.service"; then
  		chain="bridge-hub-polkadot"
	fi
	if grep -q 'chain collectives-polkadot' "/etc/systemd/system/$i.service"; then
  		chain="collectives-polkadot"
	fi
	if grep -q 'encointer-kusama' "/etc/systemd/system/$i.service"; then
  		chain="encointer-kusama"
	fi
        if grep -q 'chain paseo' "/etc/systemd/system/$i.service"; then
                chain="paseo"
        fi
        if grep -q 'paseo-asset-hub.json' "/etc/systemd/system/$i.service"; then
                chain="asset-hub-paseo"
        fi

	port=`cat /etc/systemd/system/$i.service | grep -o -P  'prometheus-port.{0,5}' | cut -d " " -f2 | head -n 1`

	sizeup "$i"
done

echo "Setting dbsize body"
cat $workdir/docs/dbsize.mdx.body >> $workdir/docs/dbsize.mdx


# Make graph
cd $workdir/scripts
echo "Making snapsize graph"
./snapsize.sh

# Change to workdir
cd $workdir

# Commit (with deploy workflow)
git pull 2>/dev/null 
git commit docs/dbsize.mdx static/img/*.png static/img/*.svg var/snapsize.*.dat -m "Automatic DBsize deploy"
# git push

#The end
echo "Finished"

