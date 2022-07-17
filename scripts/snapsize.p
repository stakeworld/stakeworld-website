set terminal png size 800,300
set style data fsteps
#set style data line
set datafile separator ","
set output '/var/www/snapshot/snapsize.png'
set title 'Full database sizes'
set timefmt "%d/%m/%Y"
set xdata time
# https://stackoverflow.com/questions/13785832/month-tics-how-to-set
set xtics "01/01/2022", 100000, "31/12/2022"
set ylabel "Size in GB"
set yrange [0:200]
set format x "%d/%m"
set key reverse Left outside
#set grid
plot "snapsize.ksmcc3.rocksdb.dat" using 1:2 title "Kusama Rocksdb", \
     "snapsize.ksmcc3.paritydb.dat" using 1:2 title "Kusama Paritydb", \
     "snapsize.polkadot.rocksdb.dat" using 1:2 title "Polkadot Rocksdb", \
     "snapsize.polkadot.paritydb.dat" using 1:2 title "Polkadot Paritydb"
