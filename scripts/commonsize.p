set terminal svg size 800,300 mouse enhanced standalone font "Helvetica,10"
set output '../static/img/commonsize.svg'

set datafile separator ","
set title 'Commons database sizes'
set timefmt "%d/%m/%Y"
set xdata time
set xrange ["01/06/2023":]
set format x "%d/%m"
set grid
set key below
set ylabel "Size (GiB)"
set ytics format "%.0f"
set xtics
set ytics

fileSMN = "../var/snapsize.statemine.paritydb.archive.dat"
filePAS = "../var/snapsize.asset-hub-paseo.paritydb.archive.dat"
fileSMT = "../var/snapsize.statemint.paritydb.archive.dat"
fileWMT = "../var/snapsize.westmint.paritydb.archive.dat"
fileBHK = "../var/snapsize.bridge-hub-kusama.paritydb.archive.dat"
fileBHP = "../var/snapsize.bridge-hub-polkadot.paritydb.archive.dat"
fileCOL = "../var/snapsize.collectives-polkadot.paritydb.archive.dat"

plot \
  fileSMN using 1:($2 / 1024.0**3) title "AssetHub Kusama" with lines lw 0.8 lt rgb "#e6007a", \
  '' using 1:($2 / 1024.0**3):(sprintf("%s: %.1f GiB", strcol(1), $2 / 1024.0**3)) with labels hypertext point pt 7 ps 0.5 lc rgb "#e6007a" notitle, \
  filePAS using 1:($2 / 1024.0**3) title "AssetHub Paseo" with lines lw 0.8 lt rgb "#ff7f00", \
  '' using 1:($2 / 1024.0**3):(sprintf("%s: %.1f GiB", strcol(1), $2 / 1024.0**3)) with labels hypertext point pt 7 ps 0.5 lc rgb "#ff7f00" notitle, \
  fileSMT using 1:($2 / 1024.0**3) title "AssetHub Polkadot" with lines lw 0.8 lt rgb "#0057b8", \
  '' using 1:($2 / 1024.0**3):(sprintf("%s: %.1f GiB", strcol(1), $2 / 1024.0**3)) with labels hypertext point pt 7 ps 0.5 lc rgb "#0057b8" notitle, \
  fileWMT using 1:($2 / 1024.0**3) title "AssetHub Westend" with lines lw 0.8 lt rgb "#33a02c", \
  '' using 1:($2 / 1024.0**3):(sprintf("%s: %.1f GiB", strcol(1), $2 / 1024.0**3)) with labels hypertext point pt 7 ps 0.5 lc rgb "#33a02c" notitle, \
  fileBHK using 1:($2 / 1024.0**3) title "BridgeHub Kusama" with lines lw 0.8 lt rgb "#6a3d9a", \
  '' using 1:($2 / 1024.0**3):(sprintf("%s: %.1f GiB", strcol(1), $2 / 1024.0**3)) with labels hypertext point pt 7 ps 0.5 lc rgb "#6a3d9a" notitle, \
  fileBHP using 1:($2 / 1024.0**3) title "BridgeHub Polkadot" with lines lw 0.8 lt rgb "#1f78b4", \
  '' using 1:($2 / 1024.0**3):(sprintf("%s: %.1f GiB", strcol(1), $2 / 1024.0**3)) with labels hypertext point pt 7 ps 0.5 lc rgb "#1f78b4" notitle, \
  fileCOL using 1:($2 / 1024.0**3) title "Collectives Polkadot" with lines lw 0.8 lt rgb "#b15928", \
  '' using 1:($2 / 1024.0**3):(sprintf("%s: %.1f GiB", strcol(1), $2 / 1024.0**3)) with labels hypertext point pt 7 ps 0.5 lc rgb "#b15928" notitle

