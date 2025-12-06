set terminal svg size 800,300 mouse enhanced standalone font "Helvetica,10"
set output '../static/img/dbdiffcommon.svg'

set datafile separator ","
set title 'Commons daily database growth'
set timefmt "%d/%m/%Y"
set xdata time
set xrange ["01/06/2023":]
set format x "%d/%m"
set grid
set key below
set ylabel "Change (GiB)"
set ytics format "%.1f"
set yrange [0:1]
set xtics
set ytics

fileSMN = "../var/snapsize.statemine.paritydb.archive.dbdiff.dat"
fileSMT = "../var/snapsize.statemint.paritydb.archive.dbdiff.dat"
filePAS = "../var/snapsize.asset-hub-paseo.paritydb.archive.dbdiff.dat"
fileBHK = "../var/snapsize.bridge-hub-kusama.paritydb.archive.dbdiff.dat"
fileBHP = "../var/snapsize.bridge-hub-polkadot.paritydb.archive.dbdiff.dat"
fileCOL = "../var/snapsize.collectives-polkadot.paritydb.archive.dbdiff.dat"

plot \
  fileSMN using 1:($2 / 1024.0**3) title "AssetHub Kusama" with lines lw 0.8 lt rgb "#e6007a", \
  '' using 1:($2 / 1024.0**3):(sprintf("%s: %.1f GiB", strcol(1), $2 / 1024.0**3)) with labels hypertext point pt 7 ps 0.5 lc rgb "#e6007a" notitle, \
  fileSMT using 1:($2 / 1024.0**3) title "AssetHub Polkadot" with lines lw 0.8 lt rgb "#0057b8", \
  '' using 1:($2 / 1024.0**3):(sprintf("%s: %.1f GiB", strcol(1), $2 / 1024.0**3)) with labels hypertext point pt 7 ps 0.5 lc rgb "#0057b8" notitle, \
  filePAS using 1:($2 / 1024.0**3) title "AssetHub Paseo" with lines lw 0.8 lt rgb "#ff7f00", \
  '' using 1:($2 / 1024.0**3):(sprintf("%s: %.1f GiB", strcol(1), $2 / 1024.0**3)) with labels hypertext point pt 7 ps 0.5 lc rgb "#ff7f00" notitle, \
  fileBHK using 1:($2 / 1024.0**3) title "BridgeHub Kusama" with lines lw 0.8 lt rgb "#6a3d9a", \
  '' using 1:($2 / 1024.0**3):(sprintf("%s: %.1f GiB", strcol(1), $2 / 1024.0**3)) with labels hypertext point pt 7 ps 0.5 lc rgb "#6a3d9a" notitle, \
  fileBHP using 1:($2 / 1024.0**3) title "BridgeHub Polkadot" with lines lw 0.8 lt rgb "#1f78b4", \
  '' using 1:($2 / 1024.0**3):(sprintf("%s: %.1f GiB", strcol(1), $2 / 1024.0**3)) with labels hypertext point pt 7 ps 0.5 lc rgb "#1f78b4" notitle, \
  fileCOL using 1:($2 / 1024.0**3) title "Collectives Polkadot" with lines lw 0.8 lt rgb "#b15928", \
  '' using 1:($2 / 1024.0**3):(sprintf("%s: %.1f GiB", strcol(1), $2 / 1024.0**3)) with labels hypertext point pt 7 ps 0.5 lc rgb "#b15928" notitle

