"use strict";(self.webpackChunkstakeworld_io=self.webpackChunkstakeworld_io||[]).push([[669],{8981:(a,e,t)=>{t.r(e),t.d(e,{assets:()=>r,contentTitle:()=>d,default:()=>h,frontMatter:()=>n,metadata:()=>i,toc:()=>l});var s=t(5893),o=t(1151);const n={id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",slug:"/snapshot",sidebar_position:3,keywords:["snapshots","snapshot","kusama snapshot","polkadot snapshot","rocksdb","paritydb","pruning","polkadot","kusama"]},d=void 0,i={id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",source:"@site/docs/snapshot.mdx",sourceDirName:".",slug:"/snapshot",permalink:"/docs/snapshot",draft:!1,unlisted:!1,editUrl:"https://github.com/stakeworld/website/edit/master/docs/snapshot.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",slug:"/snapshot",sidebar_position:3,keywords:["snapshots","snapshot","kusama snapshot","polkadot snapshot","rocksdb","paritydb","pruning","polkadot","kusama"]},sidebar:"tutorialSidebar",previous:{title:"Pool",permalink:"/docs/pool"},next:{title:"Bootnodes",permalink:"/docs/bootnode"}},r={},l=[{value:"Automatic install",id:"automatic-install",level:2},{value:"Manual install",id:"manual-install",level:2},{value:"Setup a validator node",id:"setup-a-validator-node",level:3},{value:"Install the database",id:"install-the-database",level:3},{value:"Edit the systemctl startup script",id:"edit-the-systemctl-startup-script",level:3},{value:"Different databases:",id:"different-databases",level:2},{value:"Paritydb kusama",id:"paritydb-kusama",level:3},{value:"Paritydb polkadot",id:"paritydb-polkadot",level:3},{value:"Rocksdb kusama",id:"rocksdb-kusama",level:3},{value:"Rocksdb polkadot",id:"rocksdb-polkadot",level:3}];function c(a){const e={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...a.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.p,{children:"Last update: Sun 31 Mar"}),"\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{}),(0,s.jsx)(e.th,{children:"Chain"}),(0,s.jsx)(e.th,{children:"Database"}),(0,s.jsx)(e.th,{children:"Format"}),(0,s.jsx)(e.th,{children:"Blockheight"}),(0,s.jsx)(e.th,{children:"Snapshot"}),(0,s.jsx)(e.th,{children:"Full"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.a,{href:"http://snapshot.stakeworld.io/paritydb-ksmcc3.lz4",children:"direct link"})}),(0,s.jsx)(e.td,{children:"ksmcc3"}),(0,s.jsx)(e.td,{children:"paritydb"}),(0,s.jsx)(e.td,{children:"pruned"}),(0,s.jsx)(e.td,{children:"22527092"}),(0,s.jsx)(e.td,{children:"393G"}),(0,s.jsx)(e.td,{children:"408G"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.a,{href:"http://snapshot.stakeworld.io/paritydb-polkadot.lz4",children:"direct link"})}),(0,s.jsx)(e.td,{children:"polkadot"}),(0,s.jsx)(e.td,{children:"paritydb"}),(0,s.jsx)(e.td,{children:"pruned"}),(0,s.jsx)(e.td,{children:"20132869"}),(0,s.jsx)(e.td,{children:"336G"}),(0,s.jsx)(e.td,{children:"349G"})]})]})]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{alt:"snapsize",src:t(9735).Z+"",width:"800",height:"300"})}),"\n",(0,s.jsxs)(e.admonition,{type:"info",children:[(0,s.jsx)(e.p,{children:"Snapshots are compressed backups of the database directory of a polkadot or kusama node. If you start a node for the first time it will start building the database from scratch, which will take a few days, depending on network speed. If you download an up to date database snapshot your node will be up and running quicker; under an hour or a few hours, depending on network speed."}),(0,s.jsxs)(e.p,{children:["Recently the warp sync option is becoming more developed and popular. If you start the node with an empty database and the option ",(0,s.jsx)(e.code,{children:"--sync warp"})," the node will first download the finality proofs after which it will be ready to validate and in the background download the remaining blocks."]}),(0,s.jsx)(e.p,{children:'With the "beefy" update warp sync got temporarily disabled so for the time being the snapshot service is re-enabled.'}),(0,s.jsxs)(e.p,{children:["For now the snapshots are available for kusama ",(0,s.jsx)(e.code,{children:"--chain ksmcc3"})," and polkadot ",(0,s.jsx)(e.code,{children:"--chain polkadot"})," in the paritydb ",(0,s.jsx)(e.code,{children:"--database paritydb"})," database format and the rocksdb ",(0,s.jsx)(e.code,{children:"--database rocksdb"})," format. They are pruned with ",(0,s.jsx)(e.code,{children:"--state-pruning 256"})," (default), which is sufficient for a validator node."]})]}),"\n",(0,s.jsx)(e.h2,{id:"automatic-install",children:"Automatic install"}),"\n",(0,s.jsxs)(e.p,{children:["The following script can restore a snapshot for a quickstart. If you want you can first review it on ",(0,s.jsx)(e.a,{href:"https://github.com/stakeworld/stakeworld-scripts/blob/master/node-install.sh",children:"github"}),'. You can choose "snapinstall" for a snapshot restore or "nodeinstall" to install a complete node. The script will ask some questions and create an install or restore script which you can review before executing.']}),"\n",(0,s.jsx)(e.p,{children:"The script is for ubuntu/debian flavoured servers."}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"curl -o- -L https://raw.githubusercontent.com/stakeworld/stakeworld-scripts/master/node-install.sh | bash\n"})}),"\n",(0,s.jsx)(e.h2,{id:"manual-install",children:"Manual install"}),"\n",(0,s.jsx)(e.h3,{id:"setup-a-validator-node",children:"Setup a validator node"}),"\n",(0,s.jsxs)(e.p,{children:["Setting up a validator node is covered ",(0,s.jsx)(e.a,{href:"./validate",children:"here"}),". The default apt install creates an user polkadot with a home directory ",(0,s.jsx)(e.code,{children:"/home/polkadot"})," and a default service script ",(0,s.jsx)(e.code,{children:"/usr/lib/systemd/system/polkadot.service"}),"."]}),"\n",(0,s.jsx)(e.h3,{id:"install-the-database",children:"Install the database"}),"\n",(0,s.jsxs)(e.p,{children:["Database location: By default the polkadot binary runs as user polkadot and creates ",(0,s.jsx)(e.code,{children:".local/share/polkadot"})," in the users homedirectory. So for user polkadot (the default when installing from apt) that is ",(0,s.jsx)(e.code,{children:"/home/polkadot/.local/share/polkadot"}),"."]}),"\n",(0,s.jsxs)(e.p,{children:["This can be changed with ",(0,s.jsx)(e.code,{children:"--base-path"})," so for example ",(0,s.jsx)(e.code,{children:"--base-path /home/polkadot"})," or ",(0,s.jsx)(e.code,{children:"--base-path /home/polkadot/myvalidator"})," or whatever you prefer."]}),"\n",(0,s.jsx)(e.p,{children:"To delete the old database, restore a new kusama paritydb database snapshot for your node with a default install:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"su - polkadot -s /bin/bash\nrm -fr /home/polkadot/.local/share/polkadot/chains/ksmcc3\nmkdir -p /home/polkadot/.local/share/polkadot/chains/ksmcc3\ncurl -o - -L http://snapshot.stakeworld.io/paritydb-ksmcc3.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/ksmcc3\n"})}),"\n",(0,s.jsx)(e.p,{children:"You can check the startup by running the binary as user polkadot and see if it accepts the database or throws any errors:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"su - polkadot -s /bin/bash\npolkadot --chain kusama --database paritydb \n"})}),"\n",(0,s.jsx)(e.h3,{id:"edit-the-systemctl-startup-script",children:"Edit the systemctl startup script"}),"\n",(0,s.jsxs)(e.p,{children:["Edit the default service script and add for example ",(0,s.jsx)(e.code,{children:"--database paritydb --chain kusama"}),":"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:'su -\nvi /usr/lib/systemd/system/polkadot.service"\nsystemctl daemon-reload\nsystemctl retart polkadot\nsystemctl enable polkadot\n'})}),"\n",(0,s.jsx)(e.p,{children:"Or create a new script by copying the default service script:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"su -\ncp /usr/lib/systemd/system/polkadot.service /etc/systemd/system/validator.service\nvi /etc/systemd/system/validator.service\n"})}),"\n",(0,s.jsx)(e.p,{children:"You can edit settings at wish, changing ports and settings at will."}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-config",children:"[Service]\nExecStart=/usr/bin/polkadot --chain kusama --name validator --validator --prometheus-external --base-path /home/polkadot --database paritydb --telemetry-url 'wss://telemetry.polkadot.io/submit/ 1' \n"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"systemctl daemon-reload\nsystemctl start validator\nsystemctl enable validator\n"})}),"\n",(0,s.jsx)(e.admonition,{type:"caution",children:(0,s.jsxs)(e.p,{children:['If you installed as root you will get an error "failed to create a test file: Permission denied". You can solve this by running ',(0,s.jsx)(e.code,{children:"chown -R polkadot:polkadot DBDIR"})]})}),"\n",(0,s.jsx)(e.h2,{id:"different-databases",children:"Different databases:"}),"\n",(0,s.jsxs)(e.p,{children:["Below restore commands for different databases to the default directory. Best run them as user polkadot (",(0,s.jsx)(e.code,{children:"su - polkadot -s /bin/bash"}),") or when running as root do a ",(0,s.jsx)(e.code,{children:"chown polkadot:polkadot <dbdir>"}),") or when running as root do a ",(0,s.jsx)(e.code,{children:"chown polkadot:polkadot <dbdir>"}),". Of course change the part after ",(0,s.jsx)(e.code,{children:"-C"})," when installing to another location."]}),"\n",(0,s.jsx)(e.h3,{id:"paritydb-kusama",children:"Paritydb kusama"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"curl -o - -L http://snapshot.stakeworld.io/paritydb-ksmcc3.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/ksmcc3\n"})}),"\n",(0,s.jsx)(e.h3,{id:"paritydb-polkadot",children:"Paritydb polkadot"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"curl -o - -L http://snapshot.stakeworld.io/paritydb-polkadot.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/polkadot\n"})}),"\n",(0,s.jsx)(e.h3,{id:"rocksdb-kusama",children:"Rocksdb kusama"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"curl -o - -L http://snapshot.stakeworld.io/rocksdb-ksmcc3.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/ksmcc3\n"})}),"\n",(0,s.jsx)(e.h3,{id:"rocksdb-polkadot",children:"Rocksdb polkadot"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"curl -o - -L http://snapshot.stakeworld.io/rocksdb-polkadot.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/polkadot\n"})})]})}function h(a={}){const{wrapper:e}={...(0,o.a)(),...a.components};return e?(0,s.jsx)(e,{...a,children:(0,s.jsx)(c,{...a})}):c(a)}},9735:(a,e,t)=>{t.d(e,{Z:()=>s});const s="data:image/png;base64,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"},1151:(a,e,t)=>{t.d(e,{Z:()=>i,a:()=>d});var s=t(7294);const o={},n=s.createContext(o);function d(a){const e=s.useContext(n);return s.useMemo((function(){return"function"==typeof a?a(e):{...e,...a}}),[e,a])}function i(a){let e;return e=a.disableParentContext?"function"==typeof a.components?a.components(o):a.components||o:d(a.components),s.createElement(n.Provider,{value:e},a.children)}}}]);