set terminal png size 800,300
set style data fsteps
set datafile separator ","
set output '../static/img/commonsize.png'
set title 'Commons database sizes'
set timefmt "%d/%m/%Y"
set xdata time
set xtics auto
# https://stackoverflow.com/questions/13785832/month-tics-how-to-set
# set xtics "01/01/2022", 100000, "31/12/2022"
set ylabel "Size in GB"
set format y "%.b %B"
#set format y '%.s%cB'
# set yrange [0:200]
set xrange ["01/06/2023":]
set format x "%d/%m"
set key below
set grid
plot "../var/snapsize.statemine.paritydb.archive.dat" using 1:2 title "AssetHub Kusama Paritydb Archive" with linespoints pointtype 20 linewidth 1, \
     "../var/snapsize.statemint.paritydb.archive.dat" using 1:2 title "AssetHub Polkadot Paritydb Archive" with linespoints pointtype 20 linewidth 1, \
     "../var/snapsize.westmint.paritydb.archive.dat" using 1:2 title "AssetHub Westend Paritydb Archive" with linespoints pointtype 20 linewidth 1, \
     "../var/snapsize.bridge-hub-kusama.paritydb.archive.dat" using 1:2 title "BridgeHub Kusama Paritydb Archive" with linespoints pointtype 20 linewidth 1, \
     "../var/snapsize.bridge-hub-polkadot.paritydb.archive.dat" using 1:2 title "BridgeHub Polkadot Paritydb Archive" with linespoints pointtype 20 linewidth 1, \
     "../var/snapsize.collectives-polkadot.paritydb.archive.dat" using 1:2 title "Collectives Polkadot Paritydb Archive" with linespoints pointtype 20 linewidth 1
