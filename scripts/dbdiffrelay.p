set terminal png size 800,300
set style data fsteps
set datafile separator ","
set output '../static/img/dbdiffrelay.png'
set title 'Relay chain daily database growth'
set timefmt "%d/%m/%Y"
set xdata time
set xtics auto
# https://stackoverflow.com/questions/13785832/month-tics-how-to-set
# set xtics "01/01/2022", 100000, "31/12/2022"
set ylabel "Change"
set format y "%.b %B"
#set format y '%.s%cB'
set yrange [0:5000000000]
set format x "%d/%m"
set key below
set grid
plot "../var/snapsize.polkadot.paritydb.archive.dbdiff.dat" using 1:2 title "Polkadot Paritydb Archive" with linespoints pointtype 19 linewidth 1, \
     "../var/snapsize.ksmcc3.paritydb.archive.dbdiff.dat" using 1:2 title "Kusama Paritydb Archive" with linespoints pointtype 19 linewidth 1, \
     "../var/snapsize.paseo.paritydb.archive.dbdiff.dat" using 1:2 title "Paseo Paritydb Archive" with linespoints pointtype 19 linewidth 1, \
     "../var/snapsize.westend2.paritydb.archive.dbdiff.dat" using 1:2 title "Westend Paritydb Archive" with linespoints pointtype 19 linewidth 1
