#!/bin/bash
#STAKEWORLD 2022

if [[ "$EUID" -ne 0 ]]; then
	echo "Need superuser privileges."
	exit
fi

install_base () {
	echo "Installing base on $hostname.$hostdomain"
	echo "Setting hostname"
	echo $hostname.$hostdomain > /etc/hostname
	hostname $hostname.$hostdomain
	echo "Installing base packages"
	apt update; apt install curl wget ufw vim net-tools
	echo "Enabling firewall and setting ports"
	ufw allow openssh
	ufw enable
	echo "Disabling kernel updates, only do this planned"
	apt-mark hold linux-generic linux-headers-generic linux-image-generic
}

new_node () {
	echo "Installing $chain node $nodename"
	echo "Installing polkadot binary"
	gpg --recv-keys --keyserver hkps://keys.mailvelope.com 9D4B2B6EB8F97156D19669A9FF0812D491B96798
	gpg --export 9D4B2B6EB8F97156D19669A9FF0812D491B96798 > /usr/share/keyrings/parity.gpg
	echo 'deb [signed-by=/usr/share/keyrings/parity.gpg] https://releases.parity.io/deb release main' > /etc/apt/sources.list.d/parity.list
	apt update
	apt install parity-keyring
	apt install polkadot
}

install_db () {
echo ""
echo "Basedir?"
read -p "Basedir [/home/polkadot]: " nodepath
}

new_monitor () {
	echo "Installing monitor"
}

echo "STAKEWORLD node/monitor installer for polkadot/kusam node or monitor."

echo "What would you like to install?"
echo "   1) monitor"
echo "   2) kusama node"
echo "   3) polkadot node"
echo "   4) download database"
read -p "Install [4]: " install
until [[ -z "$install" || "$install" =~ ^[1234]$ ]]; do
	echo "$install: invalid selection."
	read -p "Install [4]: " install
done


get_info () {
echo ""
echo "What is the name of node/monitor?"
read -p "Name [myhost]: " nodename

echo ""
echo "What is the domain of node/monitor?"
read -p "Name [mydomain]: " nodedomain

echo ""
echo "Basedir?"
read -p "Basedir [/home/polkadot]: " nodepath

}

case "$install" in
	1|"") 
	target=monitor
	get_info
	install_base
	new_monitor
	;;
	2) 
	target=node
	chain=kusama
	get_info
	install_base
	new_node
	;;
	3) 
	target=node
	chain=polkadot
	get_info
	install_base
	new_node
	;;
	4)
	install_db
	;;
esac



exit

