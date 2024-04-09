#!/bin/bash
# STAKEWORLD 2023
# Make snapshots of substrate nodes
# Run this script in crontab

workdir="/opt/stakeworld-website"
email="info@stakeworld.io"

# Error handling
error() {
    echo "Error on line $1"
    echo "Exiting"
    tail -n100 $workdir/var/deploy.log | mail -s "deploy error" $email
    exit 1
}

trap 'error $LINENO' ERR

# STDOUT logfile
exec 1>>$workdir/var/deploy.log

# START
echo `date` "Starting deploy"

# Change to workdir
cd $workdir

# Commit (with deploy workflow)
git pull
git push 2>/dev/null 

# The end
echo "Finished"
