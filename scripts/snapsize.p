# ─── Terminal ───────────────────────────────────────────────
set terminal svg size 800,300 dynamic mouse enhanced standalone font "Helvetica,10"
set output '../static/img/snapsize.png'

# ─── Layout ─────────────────────────────────────────────────
set datafile separator ","
set title 'Pruned database sizes'
set timefmt "%d/%m/%Y"
set xdata time
set format x "%d/%m"
set xrange ["11/05/2023":]
set grid
set key below
set ylabel "Size in GiB"
set format y "%.1f GiB"

# ─── Data ───────────────────────────────────────────────────
fileK = "../var/snapsize.ksmcc3.paritydb.pruned.dat"
fileD = "../var/snapsize.polkadot.paritydb.pruned.dat"
GiB(x) = x / 1024.0**3

plot \
  fileK using 1:($2/1024.0**3) title "Kusama Paritydb Pruned" with lines lt rgb "#0064c8", \
  ''    using 1:($2/1024.0**3):(sprintf("%.1f GiB", $2/1024.0**3)) \
        with labels hypertext point pt 7 ps 0.2 lc rgb "#0064c8" tc rgb "#0064c8" notitle, \
  fileD using 1:($2/1024.0**3) title "Polkadot Paritydb Pruned" with lines lt rgb "#cc0000", \
  ''    using 1:($2/1024.0**3):(sprintf("%.1f GiB", $2/1024.0**3)) \
        with labels hypertext point pt 7 ps 0.2 lc rgb "#cc0000" tc rgb "#cc0000" notitle
