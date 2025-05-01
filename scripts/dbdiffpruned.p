set terminal svg size 800,300 mouse enhanced standalone font "Helvetica,10"
set output '../static/img/dbdiffpruned.svg'

set datafile separator ","
set title 'Pruned daily database growth'
set timefmt "%d/%m/%Y"
set xdata time
set xrange ["11/05/2023":]
set format x "%d/%m"
set grid
set key below
set ylabel "Change (GiB)"
set ytics format "%.1f"
set yrange [0:2]
set xtics
set ytics

fileKSM = "../var/snapsize.ksmcc3.paritydb.pruned.dbdiff.dat"
fileDOT = "../var/snapsize.polkadot.paritydb.pruned.dbdiff.dat"

plot \
  fileKSM using 1:($2 / 1024.0**3) title "Kusama Paritydb Pruned" with lines lw 0.8 lt rgb "#e6007a", \
  ''     using 1:($2 / 1024.0**3):(sprintf("%s: %.1f GiB", strcol(1), $2 / 1024.0**3)) \
         with labels hypertext point pt 7 ps 0.5 lc rgb "#e6007a" tc rgb "#e6007a" notitle, \
  fileDOT using 1:($2 / 1024.0**3) title "Polkadot Paritydb Pruned" with lines lw 0.8 lt rgb "#0057b8", \
  ''     using 1:($2 / 1024.0**3):(sprintf("%s: %.1f GiB", strcol(1), $2 / 1024.0**3)) \
         with labels hypertext point pt 7 ps 0.5 lc rgb "#0057b8" tc rgb "#0057b8" notitle

