"use strict";(self.webpackChunkstakeworld_io=self.webpackChunkstakeworld_io||[]).push([[669],{8981:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>n,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>i});var s=a(5893),d=a(1151);const o={id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",slug:"/snapshot",sidebar_position:3,keywords:["snapshots","snapshot","kusama snapshot","polkadot snapshot","rocksdb","paritydb","pruning","polkadot","kusama"]},n=void 0,r={id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",source:"@site/docs/snapshot.mdx",sourceDirName:".",slug:"/snapshot",permalink:"/docs/snapshot",draft:!1,unlisted:!1,editUrl:"https://github.com/stakeworld/website/edit/master/docs/snapshot.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",slug:"/snapshot",sidebar_position:3,keywords:["snapshots","snapshot","kusama snapshot","polkadot snapshot","rocksdb","paritydb","pruning","polkadot","kusama"]},sidebar:"tutorialSidebar",previous:{title:"Pool",permalink:"/docs/pool"},next:{title:"Bootnodes",permalink:"/docs/bootnode"}},l={},i=[{value:"Automatic install",id:"automatic-install",level:2},{value:"Manual install",id:"manual-install",level:2},{value:"Setup a validator node",id:"setup-a-validator-node",level:3},{value:"Install the database",id:"install-the-database",level:3},{value:"Edit the systemctl startup script",id:"edit-the-systemctl-startup-script",level:3},{value:"Different databases:",id:"different-databases",level:2},{value:"Paritydb kusama",id:"paritydb-kusama",level:3},{value:"Paritydb polkadot",id:"paritydb-polkadot",level:3},{value:"Rocksdb kusama",id:"rocksdb-kusama",level:3},{value:"Paritydb polkadot",id:"paritydb-polkadot-1",level:3}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"Last update: Sat 09 Dec"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{children:"Chain"}),(0,s.jsx)(t.th,{children:"Database"}),(0,s.jsx)(t.th,{children:"Format"}),(0,s.jsx)(t.th,{children:"Blockheight"}),(0,s.jsx)(t.th,{children:"Snapshot"}),(0,s.jsx)(t.th,{children:"Full"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"http://snapshot.stakeworld.io/paritydb-ksmcc3.lz4",children:"direct link"})}),(0,s.jsx)(t.td,{children:"ksmcc3"}),(0,s.jsx)(t.td,{children:"paritydb"}),(0,s.jsx)(t.td,{children:"pruned"}),(0,s.jsx)(t.td,{children:"20905413"}),(0,s.jsx)(t.td,{children:"340G"}),(0,s.jsx)(t.td,{children:"353G"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"http://snapshot.stakeworld.io/paritydb-polkadot.lz4",children:"direct link"})}),(0,s.jsx)(t.td,{children:"polkadot"}),(0,s.jsx)(t.td,{children:"paritydb"}),(0,s.jsx)(t.td,{children:"pruned"}),(0,s.jsx)(t.td,{children:"18516642"}),(0,s.jsx)(t.td,{children:"274G"}),(0,s.jsx)(t.td,{children:"284G"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"http://snapshot.stakeworld.io/rocksdb-polkadot.lz4",children:"direct link"})}),(0,s.jsx)(t.td,{children:"polkadot"}),(0,s.jsx)(t.td,{children:"rocksdb"}),(0,s.jsx)(t.td,{children:"pruned"}),(0,s.jsx)(t.td,{children:"18458743"}),(0,s.jsx)(t.td,{children:"273G"}),(0,s.jsx)(t.td,{children:"285G"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"http://snapshot.stakeworld.io/rocksdb-ksmcc3.lz4",children:"direct link"})}),(0,s.jsx)(t.td,{children:"ksmcc3"}),(0,s.jsx)(t.td,{children:"rocksdb"}),(0,s.jsx)(t.td,{children:"pruned"}),(0,s.jsx)(t.td,{children:"20847260"}),(0,s.jsx)(t.td,{children:"330G"}),(0,s.jsx)(t.td,{children:"348G"})]})]})]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"snapsize",src:a(2307).Z+"",width:"800",height:"300"})}),"\n",(0,s.jsxs)(t.admonition,{type:"info",children:[(0,s.jsx)(t.p,{children:"Snapshots are compressed backups of the database directory of a polkadot or kusama node. If you start a node for the first time it will start building the database from scratch, which will take a few days, depending on network speed. If you download an up to date database snapshot your node will be up and running quicker; under an hour or a few hours, depending on network speed."}),(0,s.jsxs)(t.p,{children:["Recently the warp sync option is becoming more developed and popular. If you start the node with an empty database and the option ",(0,s.jsx)(t.code,{children:"--sync warp"})," the node will first download the finality proofs after which it will be ready to validate and in the background download the remaining blocks."]}),(0,s.jsx)(t.p,{children:'With the "beefy" update warp sync got temporarily disabled and now so for the time being the snapshot service is re-enabled.'}),(0,s.jsxs)(t.p,{children:["For now the snapshots are available for kusama ",(0,s.jsx)(t.code,{children:"--chain ksmcc3"})," and polkadot ",(0,s.jsx)(t.code,{children:"--chain polkadot"})," in the paritydb ",(0,s.jsx)(t.code,{children:"--database paritydb"})," database format and the rocksdb ",(0,s.jsx)(t.code,{children:"--database rocksdb"})," format. They are pruned with ",(0,s.jsx)(t.code,{children:"--state-pruning 256"})," (default), which is sufficient for a validator node."]})]}),"\n",(0,s.jsx)(t.h2,{id:"automatic-install",children:"Automatic install"}),"\n",(0,s.jsxs)(t.p,{children:["The following script can restore a snapshot for a quickstart. If you want you can first review it on ",(0,s.jsx)(t.a,{href:"https://github.com/stakeworld/stakeworld-scripts/blob/master/node-install.sh",children:"github"}),'. You can choose "snapinstall" for a snapshot restore or "nodeinstall" to install a complete node. The script will ask some questions and create an install or restore script which you can review before executing.']}),"\n",(0,s.jsx)(t.p,{children:"The script is for ubuntu/debian flavoured servers."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"curl -o- -L https://raw.githubusercontent.com/stakeworld/stakeworld-scripts/master/node-install.sh | bash\n"})}),"\n",(0,s.jsx)(t.h2,{id:"manual-install",children:"Manual install"}),"\n",(0,s.jsx)(t.h3,{id:"setup-a-validator-node",children:"Setup a validator node"}),"\n",(0,s.jsxs)(t.p,{children:["Setting up a validator node is covered ",(0,s.jsx)(t.a,{href:"./validate",children:"here"}),". The default apt install creates an user polkadot with a home directory ",(0,s.jsx)(t.code,{children:"/home/polkadot"})," and a default service script ",(0,s.jsx)(t.code,{children:"/usr/lib/systemd/system/polkadot.service"}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"install-the-database",children:"Install the database"}),"\n",(0,s.jsxs)(t.p,{children:["Database location: By default the polkadot binary runs as user polkadot and creates ",(0,s.jsx)(t.code,{children:".local/share/polkadot"})," in the users homedirectory. So for user polkadot (the default when installing from apt) that is ",(0,s.jsx)(t.code,{children:"/home/polkadot/.local/share/polkadot"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["This can be changed with ",(0,s.jsx)(t.code,{children:"--base-path"})," so for example ",(0,s.jsx)(t.code,{children:"--base-path /home/polkadot"})," or ",(0,s.jsx)(t.code,{children:"--base-path /home/polkadot/myvalidator"})," or whatever you prefer."]}),"\n",(0,s.jsx)(t.p,{children:"To delete the old database, restore a new kusama paritydb database snapshot for your node with a default install:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"su - polkadot -s /bin/bash\nrm -fr /home/polkadot/.local/share/polkadot/chains/ksmcc3\nmkdir -p /home/polkadot/.local/share/polkadot/chains/ksmcc3\ncurl -o - -L http://snapshot.stakeworld.io/paritydb-ksmcc3.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/ksmcc3\n"})}),"\n",(0,s.jsx)(t.p,{children:"You can check the startup by running the binary as user polkadot and see if it accepts the database or throws any errors:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"su - polkadot -s /bin/bash\npolkadot --chain kusama --database paritydb \n"})}),"\n",(0,s.jsx)(t.h3,{id:"edit-the-systemctl-startup-script",children:"Edit the systemctl startup script"}),"\n",(0,s.jsxs)(t.p,{children:["Edit the default service script and add for example ",(0,s.jsx)(t.code,{children:"--database paritydb --chain kusama"}),":"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:'su -\nvi /usr/lib/systemd/system/polkadot.service"\nsystemctl daemon-reload\nsystemctl retart polkadot\nsystemctl enable polkadot\n'})}),"\n",(0,s.jsx)(t.p,{children:"Or create a new script by copying the default service script:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"su -\ncp /usr/lib/systemd/system/polkadot.service /etc/systemd/system/validator.service\nvi /etc/systemd/system/validator.service\n"})}),"\n",(0,s.jsx)(t.p,{children:"You can edit settings at wish, changing ports and settings at will."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-config",children:"[Service]\nExecStart=/usr/bin/polkadot --chain kusama --name validator --validator --prometheus-external --base-path /home/polkadot --database paritydb --telemetry-url 'wss://telemetry.polkadot.io/submit/ 1' \n"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"systemctl daemon-reload\nsystemctl start validator\nsystemctl enable validator\n"})}),"\n",(0,s.jsx)(t.admonition,{type:"caution",children:(0,s.jsxs)(t.p,{children:['If you installed as root you will get an error "failed to create a test file: Permission denied". You can solve this by running ',(0,s.jsx)(t.code,{children:"chown -R polkadot:polkadot DBDIR"})]})}),"\n",(0,s.jsx)(t.h2,{id:"different-databases",children:"Different databases:"}),"\n",(0,s.jsxs)(t.p,{children:["Below restore commands for different databases to the default directory. Best run them as user polkadot (",(0,s.jsx)(t.code,{children:"su - polkadot -s /bin/bash"}),") or when running as root do a ",(0,s.jsx)(t.code,{children:"chown polkadot:polkadot <dbdir>"}),") or when running as root do a ",(0,s.jsx)(t.code,{children:"chown polkadot:polkadot <dbdir>"}),". Of course change the part after ",(0,s.jsx)(t.code,{children:"-C"})," when installing to another location."]}),"\n",(0,s.jsx)(t.h3,{id:"paritydb-kusama",children:"Paritydb kusama"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"curl -o - -L http://snapshot.stakeworld.io/paritydb-ksmcc3.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/ksmcc3\n"})}),"\n",(0,s.jsx)(t.h3,{id:"paritydb-polkadot",children:"Paritydb polkadot"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"curl -o - -L http://snapshot.stakeworld.io/paritydb-polkadot.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/polkadot\n"})}),"\n",(0,s.jsx)(t.h3,{id:"rocksdb-kusama",children:"Rocksdb kusama"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"curl -o - -L http://snapshot.stakeworld.io/rocksdb-ksmcc3.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/ksmcc3\n"})}),"\n",(0,s.jsx)(t.h3,{id:"paritydb-polkadot-1",children:"Paritydb polkadot"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"curl -o - -L http://snapshot.stakeworld.io/rocksdb-polkadot.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/polkadot\n"})})]})}function h(e={}){const{wrapper:t}={...(0,d.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},2307:(e,t,a)=>{a.d(t,{Z:()=>s});const s="data:image/png;base64,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"},1151:(e,t,a)=>{a.d(t,{Z:()=>r,a:()=>n});var s=a(7294);const d={},o=s.createContext(d);function n(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:n(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);