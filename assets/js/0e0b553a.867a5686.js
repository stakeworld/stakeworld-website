"use strict";(self.webpackChunkstakeworld_io=self.webpackChunkstakeworld_io||[]).push([[669],{8981:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>d,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var s=a(5893),n=a(1151);const o={id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",slug:"/snapshot",sidebar_position:3,keywords:["snapshots","snapshot","kusama snapshot","polkadot snapshot","rocksdb","paritydb","pruning","polkadot","kusama"]},d=void 0,r={id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",source:"@site/docs/snapshot.mdx",sourceDirName:".",slug:"/snapshot",permalink:"/docs/snapshot",draft:!1,unlisted:!1,editUrl:"https://github.com/stakeworld/website/edit/master/docs/snapshot.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",slug:"/snapshot",sidebar_position:3,keywords:["snapshots","snapshot","kusama snapshot","polkadot snapshot","rocksdb","paritydb","pruning","polkadot","kusama"]},sidebar:"tutorialSidebar",previous:{title:"Pool",permalink:"/docs/pool"},next:{title:"Bootnodes",permalink:"/docs/bootnode"}},i={},l=[{value:"Automatic install",id:"automatic-install",level:2},{value:"Manual install",id:"manual-install",level:2},{value:"Setup a validator node",id:"setup-a-validator-node",level:3},{value:"Install the database",id:"install-the-database",level:3},{value:"Edit the systemctl startup script",id:"edit-the-systemctl-startup-script",level:3},{value:"Different databases:",id:"different-databases",level:2},{value:"Paritydb kusama",id:"paritydb-kusama",level:3},{value:"Paritydb polkadot",id:"paritydb-polkadot",level:3}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"Last update: Sat 25 Nov"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{children:"Chain"}),(0,s.jsx)(t.th,{children:"Database"}),(0,s.jsx)(t.th,{children:"Format"}),(0,s.jsx)(t.th,{children:"Snapshot"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"http://snapshot.stakeworld.io/paritydb-ksmcc3.lz4",children:"direct link"})}),(0,s.jsx)(t.td,{children:"ksmcc3"}),(0,s.jsx)(t.td,{children:"paritydb"}),(0,s.jsx)(t.td,{children:"pruned"}),(0,s.jsx)(t.td,{children:"333G"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"http://snapshot.stakeworld.io/paritydb-polkadot.lz4",children:"direct link"})}),(0,s.jsx)(t.td,{children:"polkadot"}),(0,s.jsx)(t.td,{children:"paritydb"}),(0,s.jsx)(t.td,{children:"pruned"}),(0,s.jsx)(t.td,{children:"267G"})]})]})]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"snapsize",src:a(2307).Z+"",width:"800",height:"300"})}),"\n",(0,s.jsxs)(t.admonition,{type:"info",children:[(0,s.jsx)(t.p,{children:"Snapshots are compressed backups of the database directory of a polkadot or kusama node. If you start a node for the first time it will start building the database from scratch, which will take a few days, depending on network speed. If you download an up to date database snapshot your node will be up and running quicker; under an hour or a few hours, depending on network speed."}),(0,s.jsxs)(t.p,{children:["Recently the warp sync option is becoming more developed and popular. If you start the node with an empty database and the option ",(0,s.jsx)(t.code,{children:"--sync warp"})," the node will first download the finality proofs after which it will be ready to validate and in the background download the remaining blocks."]}),(0,s.jsx)(t.p,{children:"In the future this will probably become the default for syncing a database and snapshots may become obsolete."}),(0,s.jsxs)(t.p,{children:["For now the snapshots are available for kusama ",(0,s.jsx)(t.code,{children:"--chain ksmcc3"})," and polkadot ",(0,s.jsx)(t.code,{children:"--chain polkadot"})," in the paritydb ",(0,s.jsx)(t.code,{children:"--database paritydb"})," database format. They are pruned with ",(0,s.jsx)(t.code,{children:"--state-pruning 256"})," (default), which is sufficient for a validator node."]})]}),"\n",(0,s.jsx)(t.h2,{id:"automatic-install",children:"Automatic install"}),"\n",(0,s.jsxs)(t.p,{children:["The following script can restore a snapshot for a quickstart. If you want you can first review it on ",(0,s.jsx)(t.a,{href:"https://github.com/stakeworld/stakeworld-scripts/blob/master/node-install.sh",children:"github"}),'. You can choose "snapinstall" for a snapshot restore or "nodeinstall" to install a complete node. The script will ask some questions and create an install or restore script which you can review before executing.']}),"\n",(0,s.jsx)(t.p,{children:"The script is for ubuntu/debian flavoured servers."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"curl -o- -L https://raw.githubusercontent.com/stakeworld/stakeworld-scripts/master/node-install.sh | bash\n"})}),"\n",(0,s.jsx)(t.h2,{id:"manual-install",children:"Manual install"}),"\n",(0,s.jsx)(t.h3,{id:"setup-a-validator-node",children:"Setup a validator node"}),"\n",(0,s.jsxs)(t.p,{children:["Setting up a validator node is covered ",(0,s.jsx)(t.a,{href:"./validate",children:"here"}),". The default apt install creates an user polkadot with a home directory ",(0,s.jsx)(t.code,{children:"/home/polkadot"})," and a default service script ",(0,s.jsx)(t.code,{children:"/usr/lib/systemd/system/polkadot.service"}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"install-the-database",children:"Install the database"}),"\n",(0,s.jsxs)(t.p,{children:["Database location: By default the polkadot binary runs as user polkadot and creates ",(0,s.jsx)(t.code,{children:".local/share/polkadot"})," in the users homedirectory. So for user polkadot (the default when installing from apt) that is ",(0,s.jsx)(t.code,{children:"/home/polkadot/.local/share/polkadot"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["This can be changed with ",(0,s.jsx)(t.code,{children:"--base-path"})," so for example ",(0,s.jsx)(t.code,{children:"--base-path /home/polkadot"})," or ",(0,s.jsx)(t.code,{children:"--base-path /home/polkadot/myvalidator"})," or whatever you prefer."]}),"\n",(0,s.jsx)(t.p,{children:"To delete the old database, restore a new kusama paritydb database snapshot for your node with a default install:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"su - polkadot -s /bin/bash\nrm -fr /home/polkadot/.local/share/polkadot/chains/ksmcc3\nmkdir -p /home/polkadot/.local/share/polkadot/chains/ksmcc3\ncurl -o - -L http://snapshot.stakeworld.io/paritydb-ksmcc3.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/ksmcc3\n"})}),"\n",(0,s.jsx)(t.p,{children:"You can check the startup by running the binary as user polkadot and see if it accepts the database or throws any errors:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"su - polkadot -s /bin/bash\npolkadot --chain kusama --database paritydb \n"})}),"\n",(0,s.jsx)(t.h3,{id:"edit-the-systemctl-startup-script",children:"Edit the systemctl startup script"}),"\n",(0,s.jsxs)(t.p,{children:["Edit the default service script and add for example ",(0,s.jsx)(t.code,{children:"--database paritydb --chain kusama"}),":"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:'su -\nvi /usr/lib/systemd/system/polkadot.service"\nsystemctl daemon-reload\nsystemctl retart polkadot\nsystemctl enable polkadot\n'})}),"\n",(0,s.jsx)(t.p,{children:"Or create a new script by copying the default service script:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"su -\ncp /usr/lib/systemd/system/polkadot.service /etc/systemd/system/validator.service\nvi /etc/systemd/system/validator.service\n"})}),"\n",(0,s.jsx)(t.p,{children:"You can edit settings at wish, changing ports and settings at will."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-config",children:"[Service]\nExecStart=/usr/bin/polkadot --chain kusama --name validator --validator --state-pruning 256 --prometheus-external --base-path /home/polkadot --database paritydb --telemetry-url 'wss://telemetry.polkadot.io/submit/ 1' \n"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"systemctl daemon-reload\nsystemctl start validator\nsystemctl enable validator\n"})}),"\n",(0,s.jsx)(t.admonition,{type:"caution",children:(0,s.jsxs)(t.p,{children:['If you installed as root you will get an error "failed to create a test file: Permission denied". You can solve this by running ',(0,s.jsx)(t.code,{children:"chown -R polkadot:polkadot DBDIR"})]})}),"\n",(0,s.jsx)(t.h2,{id:"different-databases",children:"Different databases:"}),"\n",(0,s.jsxs)(t.p,{children:["Below restore commands for different databases to the default directory. Best run them as user polkadot (",(0,s.jsx)(t.code,{children:"su - polkadot -s /bin/bash"}),") or when running as root do a ",(0,s.jsx)(t.code,{children:"chown polkadot:polkadot <dbdir>"}),") or when running as root do a ",(0,s.jsx)(t.code,{children:"chown polkadot:polkadot <dbdir>"}),". Of course change the part after ",(0,s.jsx)(t.code,{children:"-C"})," when installing to another location."]}),"\n",(0,s.jsx)(t.h3,{id:"paritydb-kusama",children:"Paritydb kusama"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"curl -o - -L http://snapshot.stakeworld.io/paritydb-ksmcc3.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/ksmcc3\n"})}),"\n",(0,s.jsx)(t.h3,{id:"paritydb-polkadot",children:"Paritydb polkadot"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"curl -o - -L http://snapshot.stakeworld.io/paritydb-polkadot.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/polkadot\n"})})]})}function h(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},2307:(e,t,a)=>{a.d(t,{Z:()=>s});const s="data:image/png;base64,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"},1151:(e,t,a)=>{a.d(t,{Z:()=>r,a:()=>d});var s=a(7294);const n={},o=s.createContext(n);function d(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);