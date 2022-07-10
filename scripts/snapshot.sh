#!/bin/bash
# STAKEWORLD 2022
# Make a snapshots of kusama and polkadot nodes
# Run this script in crontab

# Error handling
error() {
    echo "Error on line $1"
    echo "Exiting..."
    exit 1
}

trap 'error $LINENO' ERR

# Variables
ksmdir="/home/polkadot/stakeworld-00k"
dotdir="/home/polkadot/stakeworld-00p"
ksmservice="stakeworld-00k"
dotservice="stakeworld-00p"
ksmport="9600"
dotport="9610"
snapshotdir="/var/www/snapshot"
workdir="/root/stakeworld"

echo "`date` Starting..."

# KUSAMA
# Get block height from prometheus metrics
ksmblock=`wget -q localhost:$ksmport/metrics -O - | grep best | cut -d " " -f2`
ksmdate=`date +"%a %d %b @ %H:%M"`
systemctl stop $ksmservice
sleep 5
echo "snapshot of node $ksmservice at block $ksmblock on $ksmdate"
cd $ksmdir/chains/ksmcc3
tar cf - paritydb/full | lz4 > $snapshotdir/paritydb-ksm.lz4
ksmsize=`du -sh $snapshotdir/paritydb-ksm.lz4 | cut -f1`
ksmfullsize=`du -sh "$ksmdir/chains/ksmcc3/paritydb/full/" | cut -f1`
systemctl start $ksmservice

# POLKADOT
# Get block height from prometheus metrics
echo "Starting node snapshot"
dotblock=`wget -q localhost:$dotport/metrics -O - | grep best | cut -d " " -f2`
dotdate=`date +"%a %d %b @ %H:%M"`
systemctl stop $dotservice
sleep 5
echo "snapshot of node $dotservice at block $dotblock on $dotdate"
cd $dotdir/chains/polkadot
tar cf - paritydb/full | lz4 > $snapshotdir/paritydb-dot.lz4
dotsize=`du -sh $snapshotdir/paritydb-dot.lz4 | cut -f1`
dotfullsize=`du -sh "$dotdir/chains/polkadot/paritydb/full/" | cut -f1`
systemctl start $dotservice

echo "Updating website"
cd $workdir/docs/validate
cat snapshot.mdx.header > snapshot.mdx
cat << EOF >> snapshot.mdx
| Database    | Format   | Pruning | Blockheight | Size       | Full         | Date     |
| ----------- | -------- | ------- | ----------- | ---------- | ------------ | -------- |
| Polkadot    | Paritydb | Pruned  | $dotblock   | $dotsize   | $dotfullsize | $dotdate |
| Kusama      | Paritydb | Pruned  | $ksmblock   | $ksmsize   | $ksmfullsize | $ksmdate |
EOF
cat snapshot.mdx.body >> snapshot.mdx

echo "Deploying website"
cd $workdir
scripts/deploy.sh
echo "Script finished"
