"use strict";(self.webpackChunkstakeworld_io=self.webpackChunkstakeworld_io||[]).push([[669],{8981:(a,e,s)=>{s.r(e),s.d(e,{assets:()=>i,contentTitle:()=>n,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var t=s(5893),d=s(1151);const o={id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",slug:"/snapshot",sidebar_position:3,keywords:["snapshots","snapshot","kusama snapshot","polkadot snapshot","rocksdb","paritydb","pruning","polkadot","kusama"]},n=void 0,r={id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",source:"@site/docs/snapshot.mdx",sourceDirName:".",slug:"/snapshot",permalink:"/docs/snapshot",draft:!1,unlisted:!1,editUrl:"https://github.com/stakeworld/website/edit/master/docs/snapshot.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",slug:"/snapshot",sidebar_position:3,keywords:["snapshots","snapshot","kusama snapshot","polkadot snapshot","rocksdb","paritydb","pruning","polkadot","kusama"]},sidebar:"tutorialSidebar",previous:{title:"Pool",permalink:"/docs/pool"},next:{title:"Bootnodes",permalink:"/docs/bootnode"}},i={},l=[{value:"Automatic install",id:"automatic-install",level:2},{value:"Manual install",id:"manual-install",level:2},{value:"Setup a validator node",id:"setup-a-validator-node",level:3},{value:"Install the database",id:"install-the-database",level:3},{value:"Edit the systemctl startup script",id:"edit-the-systemctl-startup-script",level:3},{value:"Different databases:",id:"different-databases",level:2},{value:"Paritydb kusama",id:"paritydb-kusama",level:3},{value:"Paritydb polkadot",id:"paritydb-polkadot",level:3},{value:"Rocksdb kusama",id:"rocksdb-kusama",level:3},{value:"Rocksdb polkadot",id:"rocksdb-polkadot",level:3}];function c(a){const e={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...a.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.p,{children:"Last update: Tue 30 Jan"}),"\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{}),(0,t.jsx)(e.th,{children:"Chain"}),(0,t.jsx)(e.th,{children:"Database"}),(0,t.jsx)(e.th,{children:"Format"}),(0,t.jsx)(e.th,{children:"Blockheight"}),(0,t.jsx)(e.th,{children:"Snapshot"}),(0,t.jsx)(e.th,{children:"Full"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.a,{href:"http://snapshot.stakeworld.io/paritydb-ksmcc3.lz4",children:"direct link"})}),(0,t.jsx)(e.td,{children:"ksmcc3"}),(0,t.jsx)(e.td,{children:"paritydb"}),(0,t.jsx)(e.td,{children:"pruned"}),(0,t.jsx)(e.td,{children:"21652136"}),(0,t.jsx)(e.td,{children:"364G"}),(0,t.jsx)(e.td,{children:"378G"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.a,{href:"http://snapshot.stakeworld.io/paritydb-polkadot.lz4",children:"direct link"})}),(0,t.jsx)(e.td,{children:"polkadot"}),(0,t.jsx)(e.td,{children:"paritydb"}),(0,t.jsx)(e.td,{children:"pruned"}),(0,t.jsx)(e.td,{children:"19260717"}),(0,t.jsx)(e.td,{children:"303G"}),(0,t.jsx)(e.td,{children:"315G"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.a,{href:"http://snapshot.stakeworld.io/rocksdb-polkadot.lz4",children:"direct link"})}),(0,t.jsx)(e.td,{children:"polkadot"}),(0,t.jsx)(e.td,{children:"rocksdb"}),(0,t.jsx)(e.td,{children:"pruned"}),(0,t.jsx)(e.td,{children:"19261125"}),(0,t.jsx)(e.td,{children:"303G"}),(0,t.jsx)(e.td,{children:"317G"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.a,{href:"http://snapshot.stakeworld.io/rocksdb-ksmcc3.lz4",children:"direct link"})}),(0,t.jsx)(e.td,{children:"ksmcc3"}),(0,t.jsx)(e.td,{children:"rocksdb"}),(0,t.jsx)(e.td,{children:"pruned"}),(0,t.jsx)(e.td,{children:"21653533"}),(0,t.jsx)(e.td,{children:"356G"}),(0,t.jsx)(e.td,{children:"377G"})]})]})]}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{alt:"snapsize",src:s(9735).Z+"",width:"800",height:"300"})}),"\n",(0,t.jsxs)(e.admonition,{type:"info",children:[(0,t.jsx)(e.p,{children:"Snapshots are compressed backups of the database directory of a polkadot or kusama node. If you start a node for the first time it will start building the database from scratch, which will take a few days, depending on network speed. If you download an up to date database snapshot your node will be up and running quicker; under an hour or a few hours, depending on network speed."}),(0,t.jsxs)(e.p,{children:["Recently the warp sync option is becoming more developed and popular. If you start the node with an empty database and the option ",(0,t.jsx)(e.code,{children:"--sync warp"})," the node will first download the finality proofs after which it will be ready to validate and in the background download the remaining blocks."]}),(0,t.jsx)(e.p,{children:'With the "beefy" update warp sync got temporarily disabled and now so for the time being the snapshot service is re-enabled.'}),(0,t.jsxs)(e.p,{children:["For now the snapshots are available for kusama ",(0,t.jsx)(e.code,{children:"--chain ksmcc3"})," and polkadot ",(0,t.jsx)(e.code,{children:"--chain polkadot"})," in the paritydb ",(0,t.jsx)(e.code,{children:"--database paritydb"})," database format and the rocksdb ",(0,t.jsx)(e.code,{children:"--database rocksdb"})," format. They are pruned with ",(0,t.jsx)(e.code,{children:"--state-pruning 256"})," (default), which is sufficient for a validator node."]})]}),"\n",(0,t.jsx)(e.h2,{id:"automatic-install",children:"Automatic install"}),"\n",(0,t.jsxs)(e.p,{children:["The following script can restore a snapshot for a quickstart. If you want you can first review it on ",(0,t.jsx)(e.a,{href:"https://github.com/stakeworld/stakeworld-scripts/blob/master/node-install.sh",children:"github"}),'. You can choose "snapinstall" for a snapshot restore or "nodeinstall" to install a complete node. The script will ask some questions and create an install or restore script which you can review before executing.']}),"\n",(0,t.jsx)(e.p,{children:"The script is for ubuntu/debian flavoured servers."}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"curl -o- -L https://raw.githubusercontent.com/stakeworld/stakeworld-scripts/master/node-install.sh | bash\n"})}),"\n",(0,t.jsx)(e.h2,{id:"manual-install",children:"Manual install"}),"\n",(0,t.jsx)(e.h3,{id:"setup-a-validator-node",children:"Setup a validator node"}),"\n",(0,t.jsxs)(e.p,{children:["Setting up a validator node is covered ",(0,t.jsx)(e.a,{href:"./validate",children:"here"}),". The default apt install creates an user polkadot with a home directory ",(0,t.jsx)(e.code,{children:"/home/polkadot"})," and a default service script ",(0,t.jsx)(e.code,{children:"/usr/lib/systemd/system/polkadot.service"}),"."]}),"\n",(0,t.jsx)(e.h3,{id:"install-the-database",children:"Install the database"}),"\n",(0,t.jsxs)(e.p,{children:["Database location: By default the polkadot binary runs as user polkadot and creates ",(0,t.jsx)(e.code,{children:".local/share/polkadot"})," in the users homedirectory. So for user polkadot (the default when installing from apt) that is ",(0,t.jsx)(e.code,{children:"/home/polkadot/.local/share/polkadot"}),"."]}),"\n",(0,t.jsxs)(e.p,{children:["This can be changed with ",(0,t.jsx)(e.code,{children:"--base-path"})," so for example ",(0,t.jsx)(e.code,{children:"--base-path /home/polkadot"})," or ",(0,t.jsx)(e.code,{children:"--base-path /home/polkadot/myvalidator"})," or whatever you prefer."]}),"\n",(0,t.jsx)(e.p,{children:"To delete the old database, restore a new kusama paritydb database snapshot for your node with a default install:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"su - polkadot -s /bin/bash\nrm -fr /home/polkadot/.local/share/polkadot/chains/ksmcc3\nmkdir -p /home/polkadot/.local/share/polkadot/chains/ksmcc3\ncurl -o - -L http://snapshot.stakeworld.io/paritydb-ksmcc3.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/ksmcc3\n"})}),"\n",(0,t.jsx)(e.p,{children:"You can check the startup by running the binary as user polkadot and see if it accepts the database or throws any errors:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"su - polkadot -s /bin/bash\npolkadot --chain kusama --database paritydb \n"})}),"\n",(0,t.jsx)(e.h3,{id:"edit-the-systemctl-startup-script",children:"Edit the systemctl startup script"}),"\n",(0,t.jsxs)(e.p,{children:["Edit the default service script and add for example ",(0,t.jsx)(e.code,{children:"--database paritydb --chain kusama"}),":"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:'su -\nvi /usr/lib/systemd/system/polkadot.service"\nsystemctl daemon-reload\nsystemctl retart polkadot\nsystemctl enable polkadot\n'})}),"\n",(0,t.jsx)(e.p,{children:"Or create a new script by copying the default service script:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"su -\ncp /usr/lib/systemd/system/polkadot.service /etc/systemd/system/validator.service\nvi /etc/systemd/system/validator.service\n"})}),"\n",(0,t.jsx)(e.p,{children:"You can edit settings at wish, changing ports and settings at will."}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-config",children:"[Service]\nExecStart=/usr/bin/polkadot --chain kusama --name validator --validator --prometheus-external --base-path /home/polkadot --database paritydb --telemetry-url 'wss://telemetry.polkadot.io/submit/ 1' \n"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"systemctl daemon-reload\nsystemctl start validator\nsystemctl enable validator\n"})}),"\n",(0,t.jsx)(e.admonition,{type:"caution",children:(0,t.jsxs)(e.p,{children:['If you installed as root you will get an error "failed to create a test file: Permission denied". You can solve this by running ',(0,t.jsx)(e.code,{children:"chown -R polkadot:polkadot DBDIR"})]})}),"\n",(0,t.jsx)(e.h2,{id:"different-databases",children:"Different databases:"}),"\n",(0,t.jsxs)(e.p,{children:["Below restore commands for different databases to the default directory. Best run them as user polkadot (",(0,t.jsx)(e.code,{children:"su - polkadot -s /bin/bash"}),") or when running as root do a ",(0,t.jsx)(e.code,{children:"chown polkadot:polkadot <dbdir>"}),") or when running as root do a ",(0,t.jsx)(e.code,{children:"chown polkadot:polkadot <dbdir>"}),". Of course change the part after ",(0,t.jsx)(e.code,{children:"-C"})," when installing to another location."]}),"\n",(0,t.jsx)(e.h3,{id:"paritydb-kusama",children:"Paritydb kusama"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"curl -o - -L http://snapshot.stakeworld.io/paritydb-ksmcc3.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/ksmcc3\n"})}),"\n",(0,t.jsx)(e.h3,{id:"paritydb-polkadot",children:"Paritydb polkadot"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"curl -o - -L http://snapshot.stakeworld.io/paritydb-polkadot.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/polkadot\n"})}),"\n",(0,t.jsx)(e.h3,{id:"rocksdb-kusama",children:"Rocksdb kusama"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"curl -o - -L http://snapshot.stakeworld.io/rocksdb-ksmcc3.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/ksmcc3\n"})}),"\n",(0,t.jsx)(e.h3,{id:"rocksdb-polkadot",children:"Rocksdb polkadot"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"curl -o - -L http://snapshot.stakeworld.io/rocksdb-polkadot.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/polkadot\n"})})]})}function h(a={}){const{wrapper:e}={...(0,d.a)(),...a.components};return e?(0,t.jsx)(e,{...a,children:(0,t.jsx)(c,{...a})}):c(a)}},9735:(a,e,s)=>{s.d(e,{Z:()=>t});const t="data:image/png;base64,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"},1151:(a,e,s)=>{s.d(e,{Z:()=>r,a:()=>n});var t=s(7294);const d={},o=t.createContext(d);function n(a){const e=t.useContext(o);return t.useMemo((function(){return"function"==typeof a?a(e):{...e,...a}}),[e,a])}function r(a){let e;return e=a.disableParentContext?"function"==typeof a.components?a.components(d):a.components||d:n(a.components),t.createElement(o.Provider,{value:e},a.children)}}}]);