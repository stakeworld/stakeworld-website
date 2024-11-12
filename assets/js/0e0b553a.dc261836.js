"use strict";(self.webpackChunkstakeworld_io=self.webpackChunkstakeworld_io||[]).push([[158],{3482:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>h,frontMatter:()=>n,metadata:()=>r,toc:()=>l});var s=a(4848),d=a(8453);const n={id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",slug:"/snapshot",sidebar_position:3,keywords:["snapshots","snapshot","kusama snapshot","polkadot snapshot","rocksdb","paritydb","pruning","polkadot","kusama"]},o=void 0,r={id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",source:"@site/docs/snapshot.mdx",sourceDirName:".",slug:"/snapshot",permalink:"/docs/snapshot",draft:!1,unlisted:!1,editUrl:"https://github.com/stakeworld/website/edit/master/docs/snapshot.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",slug:"/snapshot",sidebar_position:3,keywords:["snapshots","snapshot","kusama snapshot","polkadot snapshot","rocksdb","paritydb","pruning","polkadot","kusama"]},sidebar:"tutorialSidebar",previous:{title:"Pool",permalink:"/docs/pool"},next:{title:"Bootnodes",permalink:"/docs/bootnode"}},i={},l=[{value:"Automatic install",id:"automatic-install",level:2},{value:"Manual install",id:"manual-install",level:2},{value:"Setup a validator node",id:"setup-a-validator-node",level:3},{value:"Install the database",id:"install-the-database",level:3},{value:"Edit the systemctl startup script",id:"edit-the-systemctl-startup-script",level:3},{value:"Restore:",id:"restore",level:2},{value:"Generic command",id:"generic-command",level:3}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"Last update: Tue 12 Nov"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{children:"Chain"}),(0,s.jsx)(t.th,{children:"Database"}),(0,s.jsx)(t.th,{children:"Format"}),(0,s.jsx)(t.th,{children:"Blockheight"}),(0,s.jsx)(t.th,{children:"Snapshot"}),(0,s.jsx)(t.th,{children:"Full"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"http://snapshot.stakeworld.io/paritydb-ksmcc3.lz4",children:"direct link"})}),(0,s.jsx)(t.td,{children:"ksmcc3"}),(0,s.jsx)(t.td,{children:"paritydb"}),(0,s.jsx)(t.td,{children:"pruned"}),(0,s.jsx)(t.td,{children:"25749983"}),(0,s.jsx)(t.td,{children:"535G"}),(0,s.jsx)(t.td,{children:"557G"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"http://snapshot.stakeworld.io/paritydb-polkadot.lz4",children:"direct link"})}),(0,s.jsx)(t.td,{children:"polkadot"}),(0,s.jsx)(t.td,{children:"paritydb"}),(0,s.jsx)(t.td,{children:"pruned"}),(0,s.jsx)(t.td,{children:"23381762"}),(0,s.jsx)(t.td,{children:"470G"}),(0,s.jsx)(t.td,{children:"491G"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"http://snapshot.stakeworld.io/paritydb-paseo.lz4",children:"direct link"})}),(0,s.jsx)(t.td,{children:"paseo"}),(0,s.jsx)(t.td,{children:"paritydb"}),(0,s.jsx)(t.td,{children:"pruned"}),(0,s.jsx)(t.td,{children:"3799527"}),(0,s.jsx)(t.td,{children:"174G"}),(0,s.jsx)(t.td,{children:"266G"})]})]})]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"snapsize",src:a(3996).A+"",width:"800",height:"300"})}),"\n",(0,s.jsxs)(t.admonition,{type:"info",children:[(0,s.jsx)(t.p,{children:"Snapshots are compressed backups of the database directory of a polkadot or kusama node. If you start a node for the first time it will start building the database from scratch, which will take a few days, depending on network speed. If you download an up to date database snapshot your node will be up and running quicker; under an hour or a few hours, depending on network speed."}),(0,s.jsxs)(t.p,{children:["Recently the warp sync option is becoming more developed and popular. If you start the node with an empty database and the option ",(0,s.jsx)(t.code,{children:"--sync warp"})," the node will first download the finality proofs after which it will be ready to validate and in the background download the remaining blocks."]}),(0,s.jsx)(t.p,{children:'With the "beefy" update warp sync got temporarily disabled so for the time being the snapshot service is re-enabled.'}),(0,s.jsxs)(t.p,{children:["For now the snapshots are available for kusama ",(0,s.jsx)(t.code,{children:"--chain ksmcc3"})," and polkadot ",(0,s.jsx)(t.code,{children:"--chain polkadot"})," in the paritydb ",(0,s.jsx)(t.code,{children:"--database paritydb"})," database format and the rocksdb ",(0,s.jsx)(t.code,{children:"--database rocksdb"})," format. They are pruned with ",(0,s.jsx)(t.code,{children:"--state-pruning 256"})," (default), which is sufficient for a validator node."]})]}),"\n",(0,s.jsx)(t.h2,{id:"automatic-install",children:"Automatic install"}),"\n",(0,s.jsxs)(t.p,{children:["The following script can restore a snapshot for a quickstart. If you want you can first review it on ",(0,s.jsx)(t.a,{href:"https://github.com/stakeworld/stakeworld-scripts/blob/master/node-install.sh",children:"github"}),'. You can choose "snapinstall" for a snapshot restore or "nodeinstall" to install a complete node. The script will ask some questions and create an install or restore script which you can review before executing.']}),"\n",(0,s.jsx)(t.p,{children:"The script is for ubuntu/debian flavoured servers."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"curl -o- -L https://raw.githubusercontent.com/stakeworld/stakeworld-scripts/master/node-install.sh | bash\n"})}),"\n",(0,s.jsx)(t.h2,{id:"manual-install",children:"Manual install"}),"\n",(0,s.jsx)(t.h3,{id:"setup-a-validator-node",children:"Setup a validator node"}),"\n",(0,s.jsxs)(t.p,{children:["Setting up a validator node is covered ",(0,s.jsx)(t.a,{href:"./validate",children:"here"}),". The default apt install creates an user polkadot with a home directory ",(0,s.jsx)(t.code,{children:"/home/polkadot"})," and a default service script ",(0,s.jsx)(t.code,{children:"/usr/lib/systemd/system/polkadot.service"}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"install-the-database",children:"Install the database"}),"\n",(0,s.jsxs)(t.p,{children:["Database location: By default the polkadot binary runs as user polkadot and creates ",(0,s.jsx)(t.code,{children:".local/share/polkadot"})," in the users homedirectory. So for user polkadot (the default when installing from apt) that is ",(0,s.jsx)(t.code,{children:"/home/polkadot/.local/share/polkadot"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["This can be changed with ",(0,s.jsx)(t.code,{children:"--base-path"})," so for example ",(0,s.jsx)(t.code,{children:"--base-path /home/polkadot"})," or ",(0,s.jsx)(t.code,{children:"--base-path /home/polkadot/myvalidator"})," or whatever you prefer."]}),"\n",(0,s.jsx)(t.p,{children:"To delete the old database, restore a new kusama paritydb database snapshot for your node with a default install:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"su - polkadot -s /bin/bash\nrm -fr /home/polkadot/.local/share/polkadot/chains/ksmcc3\nmkdir -p /home/polkadot/.local/share/polkadot/chains/ksmcc3\ncurl -o - -L http://snapshot.stakeworld.io/paritydb-ksmcc3.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/ksmcc3\n"})}),"\n",(0,s.jsx)(t.p,{children:"You can check the startup by running the binary as user polkadot and see if it accepts the database or throws any errors:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"su - polkadot -s /bin/bash\npolkadot --chain kusama --database paritydb \n"})}),"\n",(0,s.jsx)(t.h3,{id:"edit-the-systemctl-startup-script",children:"Edit the systemctl startup script"}),"\n",(0,s.jsxs)(t.p,{children:["Edit the default service script and add for example ",(0,s.jsx)(t.code,{children:"--database paritydb --chain kusama"}),":"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:'su -\nvi /usr/lib/systemd/system/polkadot.service"\nsystemctl daemon-reload\nsystemctl retart polkadot\nsystemctl enable polkadot\n'})}),"\n",(0,s.jsx)(t.p,{children:"Or create a new script by copying the default service script:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"su -\ncp /usr/lib/systemd/system/polkadot.service /etc/systemd/system/validator.service\nvi /etc/systemd/system/validator.service\n"})}),"\n",(0,s.jsx)(t.p,{children:"You can edit settings at wish, changing ports and settings at will."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-config",children:"[Service]\nExecStart=/usr/bin/polkadot --chain kusama --name validator --validator --prometheus-external --base-path /home/polkadot --database paritydb --telemetry-url 'wss://telemetry.polkadot.io/submit/ 1' \n"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"systemctl daemon-reload\nsystemctl start validator\nsystemctl enable validator\n"})}),"\n",(0,s.jsx)(t.admonition,{type:"caution",children:(0,s.jsxs)(t.p,{children:['If you installed as root you will get an error "failed to create a test file: Permission denied". You can solve this by running ',(0,s.jsx)(t.code,{children:"chown -R polkadot:polkadot DBDIR"})]})}),"\n",(0,s.jsx)(t.h2,{id:"restore",children:"Restore:"}),"\n",(0,s.jsxs)(t.p,{children:["Best run the commands as user polkadot (",(0,s.jsx)(t.code,{children:"su - polkadot -s /bin/bash"}),") or when running as root do a ",(0,s.jsx)(t.code,{children:"chown polkadot:polkadot <dbdir>"}),"). Of course change the part after ",(0,s.jsx)(t.code,{children:"-C"})," to your location."]}),"\n",(0,s.jsx)(t.h3,{id:"generic-command",children:"Generic command"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"curl -o - -L http://snapshot.stakeworld.io/<link> | lz4 -c -d - | tar -x -C <location>\n"})}),"\n",(0,s.jsx)(t.p,{children:"For example paritydb kusama"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"curl -o - -L http://snapshot.stakeworld.io/paritydb-ksmcc3.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/ksmcc3\n"})}),"\n",(0,s.jsx)(t.p,{children:"For example rocksdb polkadot"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"curl -o - -L http://snapshot.stakeworld.io/rocksdb-polkadot.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/polkadot\n"})})]})}function h(e={}){const{wrapper:t}={...(0,d.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},3996:(e,t,a)=>{a.d(t,{A:()=>s});const s="data:image/png;base64,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"},8453:(e,t,a)=>{a.d(t,{R:()=>o,x:()=>r});var s=a(6540);const d={},n=s.createContext(d);function o(e){const t=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:o(e.components),s.createElement(n.Provider,{value:t},e.children)}}}]);