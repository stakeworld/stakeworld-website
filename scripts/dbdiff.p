set terminal png size 800,300
set style data fsteps
set datafile separator ","
set output '../static/img/dbdiff.png'
set title 'Daily database growth'
set timefmt "%d/%m/%Y"
set xdata time
set xtics 3000000
# https://stackoverflow.com/questions/13785832/month-tics-how-to-set
# set xtics "01/01/2022", 100000, "31/12/2022"
set ylabel "Change"
set format y "%.b %B"
#set format y '%.s%cB'
# set yrange [0:200]
set format x "%d/%m"
set key reverse right outside
set grid
plot "../var/snapsize.polkadot.paritydb.archive.dbdiff.dat" using 1:2 title "Polkadot Paritydb Archive" with linespoints pointtype 19 linewidth 1, \
     "../var/snapsize.ksmcc3.paritydb.archive.dbdiff.dat" using 1:2 title "Kusama Paritydb Archive" with linespoints pointtype 19 linewidth 1, \
     "../var/snapsize.westend2.paritydb.archive.dbdiff.dat" using 1:2 title "Westend Paritydb Archive" with linespoints pointtype 19 linewidth 1, \
"../var/snapsize.ksmcc3.paritydb.pruned.dbdiff.dat" using 1:2 title "Kusama Paritydb Pruned" with linespoints pointtype 20 linewidth 2, \
     "../var/snapsize.polkadot.paritydb.pruned.dbdiff.dat" using 1:2 title "Polkadot Paritydb Pruned" with linespoints pointtype 20 linewidth 2, \
"../var/snapsize.statemine.paritydb.archive.dbdiff.dat" using 1:2 title "AssetHub Kusama Paritydb Archive" with linespoints pointtype 20 linewidth 1, \
     "../var/snapsize.statemint.paritydb.archive.dbdiff.dat" using 1:2 title "AssetHub Polkadot Paritydb Archive" with linespoints pointtype 20 linewidth 1, \
     "../var/snapsize.westmint.paritydb.archive.dbdiff.dat" using 1:2 title "AssetHub Westend Paritydb Archive" with linespoints pointtype 20 linewidth 1, \
     "../var/snapsize.bridge-hub-kusama.paritydb.archive.dbdiff.dat" using 1:2 title "BridgeHub Kusama Paritydb Archive" with linespoints pointtype 20 linewidth 1, \
     "../var/snapsize.bridge-hub-polkadot.paritydb.archive.dbdiff.dat" using 1:2 title "BridgeHub Polkadot Paritydb Archive" with linespoints pointtype 20 linewidth 1, \
     "../var/snapsize.collectives-polkadot.paritydb.archive.dbdiff.dat" using 1:2 title "Collectives Polkadot Paritydb Archive" with linespoints pointtype 20 linewidth 1
