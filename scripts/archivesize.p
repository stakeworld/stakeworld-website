set terminal png size 800,300
set style data fsteps
set datafile separator ","
set output '../static/img/archivesize.png'
set title 'Relay chain database sizes'
set timefmt "%d/%m/%Y"
set xdata time
# https://stackoverflow.com/questions/13785832/month-tics-how-to-set
# set xtics "01/01/2022", 100000, "31/12/2022"
set ylabel "Size in GB"
set format y "%.b %B"
#set format y '%.s%cB'
# set yrange [0:200]
set xrange ["11/05/2023":]
set format x "%d/%m"
set key reverse right outside
set grid
plot "../var/snapsize.polkadot.paritydb.archive.dat" using 1:2 title "Polkadot Paritydb Archive" with linespoints pointtype 19 linewidth 1, \
     "../var/snapsize.ksmcc3.paritydb.archive.dat" using 1:2 title "Kusama Paritydb Archive" with linespoints pointtype 19 linewidth 1, \
     "../var/snapsize.westend2.paritydb.archive.dat" using 1:2 title "Westend Paritydb Archive" with linespoints pointtype 19 linewidth 1
