set terminal svg size 800,300 mouse enhanced standalone font "Helvetica,10"
set output '../static/img/dbdiffrelay.svg'

set datafile separator ","
set title 'Relay chain daily database growth'
set timefmt "%d/%m/%Y"
set xdata time
set xrange ["11/05/2023":]

set yrange [0:5]
set format x "%d/%m"
set grid
set key below
set ylabel "Change (GiB)"
set ytics format "%.1f"
set xtics
set ytics

fileDOT = "../var/snapsize.polkadot.paritydb.archive.dbdiff.dat"
fileKSM = "../var/snapsize.ksmcc3.paritydb.archive.dbdiff.dat"
filePAS = "../var/snapsize.paseo.paritydb.archive.dbdiff.dat"
fileWES = "../var/snapsize.westend2.paritydb.archive.dbdiff.dat"

plot \
  fileDOT using 1:($2 / 1024.0**3) title "Polkadot Paritydb Archive" with lines lw 0.8 lt rgb "#0057b8", \
  ''      using 1:($2 / 1024.0**3):(sprintf("%s: %.1f GiB", strcol(1), $2 / 1024.0**3)) \
          with labels hypertext point pt 7 ps 0.5 lc rgb "#0057b8" tc rgb "#0057b8" notitle, \
  fileKSM using 1:($2 / 1024.0**3) title "Kusama Paritydb Archive" with lines lw 0.8 lt rgb "#e6007a", \
  ''      using 1:($2 / 1024.0**3):(sprintf("%s: %.1f GiB", strcol(1), $2 / 1024.0**3)) \
          with labels hypertext point pt 7 ps 0.5 lc rgb "#e6007a" tc rgb "#e6007a" notitle, \
  filePAS using 1:($2 / 1024.0**3) title "Paseo Paritydb Archive" with lines lw 0.8 lt rgb "#ff7f00", \
  ''      using 1:($2 / 1024.0**3):(sprintf("%s: %.1f GiB", strcol(1), $2 / 1024.0**3)) \
          with labels hypertext point pt 7 ps 0.5 lc rgb "#ff7f00" tc rgb "#ff7f00" notitle, \
  fileWES using 1:($2 / 1024.0**3) title "Westend Paritydb Archive" with lines lw 0.8 lt rgb "#33a02c", \
  ''      using 1:($2 / 1024.0**3):(sprintf("%s: %.1f GiB", strcol(1), $2 / 1024.0**3)) \
          with labels hypertext point pt 7 ps 0.5 lc rgb "#33a02c" tc rgb "#33a02c" notitle

