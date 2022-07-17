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

gnuplot snapsize.p
