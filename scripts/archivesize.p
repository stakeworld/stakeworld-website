# ─── Terminal ───────────────────────────────────────────────
set terminal svg size 800,300 mouse enhanced standalone font "Helvetica,10"
set output '../static/img/archivesize.svg'

# ─── Layout ─────────────────────────────────────────────────
set datafile separator ","
set title 'Relay chain database sizes'
set timefmt "%d/%m/%Y"
set xdata time
set xrange ["11/05/2023":]
set format x "%d/%m"
set grid
set key below
set ylabel "Size (TiB)"
set ytics format "%.2f"
set xtics
set ytics

# ─── Data-bestanden ─────────────────────────────────────────
fileDOT = "../var/snapsize.polkadot.paritydb.archive.dat"
fileKSM = "../var/snapsize.ksmcc3.paritydb.archive.dat"
filePAS = "../var/snapsize.paseo.paritydb.archive.dat"
fileWES = "../var/snapsize.westend2.paritydb.archive.dat"

# ─── Plot ───────────────────────────────────────────────────
plot \
  fileDOT using 1:($2 / 1024.0**4) title "Polkadot Paritydb Archive" with lines lw 0.8 lt rgb "#0057b8", \
  ''      using 1:($2 / 1024.0**4):(sprintf("%s: %.2f TiB", strcol(1), $2 / 1024.0**4)) \
          with labels hypertext point pt 7 ps 0.5 lc rgb "#0057b8" tc rgb "#0057b8" notitle, \
  fileKSM using 1:($2 / 1024.0**4) title "Kusama Paritydb Archive" with lines lw 0.8 lt rgb "#e6007a", \
  ''      using 1:($2 / 1024.0**4):(sprintf("%s: %.2f TiB", strcol(1), $2 / 1024.0**4)) \
          with labels hypertext point pt 7 ps 0.5 lc rgb "#e6007a" tc rgb "#e6007a" notitle, \
  filePAS using 1:($2 / 1024.0**4) title "Paseo Paritydb Archive" with lines lw 0.8 lt rgb "#ff7f00", \
  ''      using 1:($2 / 1024.0**4):(sprintf("%s: %.2f TiB", strcol(1), $2 / 1024.0**4)) \
          with labels hypertext point pt 7 ps 0.5 lc rgb "#ff7f00" tc rgb "#ff7f00" notitle, \
  fileWES using 1:($2 / 1024.0**4) title "Westend Paritydb Archive" with lines lw 0.8 lt rgb "#33a02c", \
  ''      using 1:($2 / 1024.0**4):(sprintf("%s: %.2f TiB", strcol(1), $2 / 1024.0**4)) \
          with labels hypertext point pt 7 ps 0.5 lc rgb "#33a02c" tc rgb "#33a02c" notitle

