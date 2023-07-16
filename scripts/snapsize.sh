#!/bin/bash
# STAKEWORLD 2022
# Display the snapshot size of kusama and polkadot nodes

# Error handling
error() {
    echo "Error on line $1"
    echo "Exiting"
    exit 1
}

trap 'error $LINENO' ERR

# Setup variables
snapshotdir="/var/www/snapshot"
datadir="/home/polkadot"
workdir="/opt/stakeworld-website"

# STDOUT to logfile
exec 1>>$workdir/var/snapsize.log

# Start 
echo `date` "Plotting size graph"

gnuplot snapsize.p
cp $workdir/static/img/snapsize.png /var/www/dev/
gnuplot prunedsize.p
cp $workdir/static/img/prunedsize.png /var/www/dev/
gnuplot archivesize.p
cp $workdir/static/img/archivesize.png /var/www/dev/
gnuplot commonsize.p
cp $workdir/static/img/commonsize.png /var/www/dev/
