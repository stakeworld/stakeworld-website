set terminal png size 800,300
set style data fsteps
set datafile separator ","
set output '../static/img/prunedsize.png'
set title 'Pruned database sizes'
set timefmt "%d/%m/%Y"
set xdata time
set xtics 2000000
# https://stackoverflow.com/questions/13785832/month-tics-how-to-set
# set xtics "01/01/2022", 100000, "31/12/2022"
set ylabel "Size in GB"
set format y "%.b %B"
#set format y '%.s%cB'
# set yrange [0:200]
set format x "%d/%m"
set xrange ["11/05/2023":]
set key reverse right outside
set grid
plot "../var/snapsize.ksmcc3.paritydb.pruned.dat" using 1:2 title "Kusama Paritydb Pruned" with linespoints pointtype 20 linewidth 2, \
     "../var/snapsize.polkadot.paritydb.pruned.dat" using 1:2 title "Polkadot Paritydb Pruned" with linespoints pointtype 20 linewidth 2
