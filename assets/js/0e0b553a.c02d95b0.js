"use strict";(self.webpackChunkstakeworld_io=self.webpackChunkstakeworld_io||[]).push([[669],{8981:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>i,contentTitle:()=>d,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var t=a(5893),n=a(1151);const o={id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",slug:"/snapshot",sidebar_position:3,keywords:["snapshots","snapshot","kusama snapshot","polkadot snapshot","rocksdb","paritydb","pruning","polkadot","kusama"]},d=void 0,r={id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",source:"@site/docs/snapshot.mdx",sourceDirName:".",slug:"/snapshot",permalink:"/docs/snapshot",draft:!1,unlisted:!1,editUrl:"https://github.com/stakeworld/website/edit/master/docs/snapshot.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",slug:"/snapshot",sidebar_position:3,keywords:["snapshots","snapshot","kusama snapshot","polkadot snapshot","rocksdb","paritydb","pruning","polkadot","kusama"]},sidebar:"tutorialSidebar",previous:{title:"Pool",permalink:"/docs/pool"},next:{title:"Bootnodes",permalink:"/docs/bootnode"}},i={},l=[{value:"Automatic install",id:"automatic-install",level:2},{value:"Manual install",id:"manual-install",level:2},{value:"Setup a validator node",id:"setup-a-validator-node",level:3},{value:"Install the database",id:"install-the-database",level:3},{value:"Edit the systemctl startup script",id:"edit-the-systemctl-startup-script",level:3},{value:"Restore:",id:"restore",level:2},{value:"Generic command",id:"generic-command",level:3}];function c(e){const s={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.p,{children:"Last update: Tue 06 Aug"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{}),(0,t.jsx)(s.th,{children:"Chain"}),(0,t.jsx)(s.th,{children:"Database"}),(0,t.jsx)(s.th,{children:"Format"}),(0,t.jsx)(s.th,{children:"Blockheight"}),(0,t.jsx)(s.th,{children:"Snapshot"}),(0,t.jsx)(s.th,{children:"Full"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"http://snapshot.stakeworld.io/paritydb-ksmcc3.lz4",children:"direct link"})}),(0,t.jsx)(s.td,{children:"ksmcc3"}),(0,t.jsx)(s.td,{children:"paritydb"}),(0,t.jsx)(s.td,{children:"pruned"}),(0,t.jsx)(s.td,{children:"24358411"}),(0,t.jsx)(s.td,{children:"467G"}),(0,t.jsx)(s.td,{children:"485G"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"http://snapshot.stakeworld.io/paritydb-polkadot.lz4",children:"direct link"})}),(0,t.jsx)(s.td,{children:"polkadot"}),(0,t.jsx)(s.td,{children:"paritydb"}),(0,t.jsx)(s.td,{children:"pruned"}),(0,t.jsx)(s.td,{children:"21965696"}),(0,t.jsx)(s.td,{children:"406G"}),(0,t.jsx)(s.td,{children:"423G"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"http://snapshot.stakeworld.io/paritydb-paseo.lz4",children:"direct link"})}),(0,t.jsx)(s.td,{children:"paseo"}),(0,t.jsx)(s.td,{children:"paritydb"}),(0,t.jsx)(s.td,{children:"pruned"}),(0,t.jsx)(s.td,{children:"2382566"}),(0,t.jsx)(s.td,{children:"68G"}),(0,t.jsx)(s.td,{children:"111G"})]})]})]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"snapsize",src:a(9735).Z+"",width:"800",height:"300"})}),"\n",(0,t.jsxs)(s.admonition,{type:"info",children:[(0,t.jsx)(s.p,{children:"Snapshots are compressed backups of the database directory of a polkadot or kusama node. If you start a node for the first time it will start building the database from scratch, which will take a few days, depending on network speed. If you download an up to date database snapshot your node will be up and running quicker; under an hour or a few hours, depending on network speed."}),(0,t.jsxs)(s.p,{children:["Recently the warp sync option is becoming more developed and popular. If you start the node with an empty database and the option ",(0,t.jsx)(s.code,{children:"--sync warp"})," the node will first download the finality proofs after which it will be ready to validate and in the background download the remaining blocks."]}),(0,t.jsx)(s.p,{children:'With the "beefy" update warp sync got temporarily disabled so for the time being the snapshot service is re-enabled.'}),(0,t.jsxs)(s.p,{children:["For now the snapshots are available for kusama ",(0,t.jsx)(s.code,{children:"--chain ksmcc3"})," and polkadot ",(0,t.jsx)(s.code,{children:"--chain polkadot"})," in the paritydb ",(0,t.jsx)(s.code,{children:"--database paritydb"})," database format and the rocksdb ",(0,t.jsx)(s.code,{children:"--database rocksdb"})," format. They are pruned with ",(0,t.jsx)(s.code,{children:"--state-pruning 256"})," (default), which is sufficient for a validator node."]})]}),"\n",(0,t.jsx)(s.h2,{id:"automatic-install",children:"Automatic install"}),"\n",(0,t.jsxs)(s.p,{children:["The following script can restore a snapshot for a quickstart. If you want you can first review it on ",(0,t.jsx)(s.a,{href:"https://github.com/stakeworld/stakeworld-scripts/blob/master/node-install.sh",children:"github"}),'. You can choose "snapinstall" for a snapshot restore or "nodeinstall" to install a complete node. The script will ask some questions and create an install or restore script which you can review before executing.']}),"\n",(0,t.jsx)(s.p,{children:"The script is for ubuntu/debian flavoured servers."}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"curl -o- -L https://raw.githubusercontent.com/stakeworld/stakeworld-scripts/master/node-install.sh | bash\n"})}),"\n",(0,t.jsx)(s.h2,{id:"manual-install",children:"Manual install"}),"\n",(0,t.jsx)(s.h3,{id:"setup-a-validator-node",children:"Setup a validator node"}),"\n",(0,t.jsxs)(s.p,{children:["Setting up a validator node is covered ",(0,t.jsx)(s.a,{href:"./validate",children:"here"}),". The default apt install creates an user polkadot with a home directory ",(0,t.jsx)(s.code,{children:"/home/polkadot"})," and a default service script ",(0,t.jsx)(s.code,{children:"/usr/lib/systemd/system/polkadot.service"}),"."]}),"\n",(0,t.jsx)(s.h3,{id:"install-the-database",children:"Install the database"}),"\n",(0,t.jsxs)(s.p,{children:["Database location: By default the polkadot binary runs as user polkadot and creates ",(0,t.jsx)(s.code,{children:".local/share/polkadot"})," in the users homedirectory. So for user polkadot (the default when installing from apt) that is ",(0,t.jsx)(s.code,{children:"/home/polkadot/.local/share/polkadot"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:["This can be changed with ",(0,t.jsx)(s.code,{children:"--base-path"})," so for example ",(0,t.jsx)(s.code,{children:"--base-path /home/polkadot"})," or ",(0,t.jsx)(s.code,{children:"--base-path /home/polkadot/myvalidator"})," or whatever you prefer."]}),"\n",(0,t.jsx)(s.p,{children:"To delete the old database, restore a new kusama paritydb database snapshot for your node with a default install:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"su - polkadot -s /bin/bash\nrm -fr /home/polkadot/.local/share/polkadot/chains/ksmcc3\nmkdir -p /home/polkadot/.local/share/polkadot/chains/ksmcc3\ncurl -o - -L http://snapshot.stakeworld.io/paritydb-ksmcc3.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/ksmcc3\n"})}),"\n",(0,t.jsx)(s.p,{children:"You can check the startup by running the binary as user polkadot and see if it accepts the database or throws any errors:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"su - polkadot -s /bin/bash\npolkadot --chain kusama --database paritydb \n"})}),"\n",(0,t.jsx)(s.h3,{id:"edit-the-systemctl-startup-script",children:"Edit the systemctl startup script"}),"\n",(0,t.jsxs)(s.p,{children:["Edit the default service script and add for example ",(0,t.jsx)(s.code,{children:"--database paritydb --chain kusama"}),":"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:'su -\nvi /usr/lib/systemd/system/polkadot.service"\nsystemctl daemon-reload\nsystemctl retart polkadot\nsystemctl enable polkadot\n'})}),"\n",(0,t.jsx)(s.p,{children:"Or create a new script by copying the default service script:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"su -\ncp /usr/lib/systemd/system/polkadot.service /etc/systemd/system/validator.service\nvi /etc/systemd/system/validator.service\n"})}),"\n",(0,t.jsx)(s.p,{children:"You can edit settings at wish, changing ports and settings at will."}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-config",children:"[Service]\nExecStart=/usr/bin/polkadot --chain kusama --name validator --validator --prometheus-external --base-path /home/polkadot --database paritydb --telemetry-url 'wss://telemetry.polkadot.io/submit/ 1' \n"})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"systemctl daemon-reload\nsystemctl start validator\nsystemctl enable validator\n"})}),"\n",(0,t.jsx)(s.admonition,{type:"caution",children:(0,t.jsxs)(s.p,{children:['If you installed as root you will get an error "failed to create a test file: Permission denied". You can solve this by running ',(0,t.jsx)(s.code,{children:"chown -R polkadot:polkadot DBDIR"})]})}),"\n",(0,t.jsx)(s.h2,{id:"restore",children:"Restore:"}),"\n",(0,t.jsxs)(s.p,{children:["Best run the commands as user polkadot (",(0,t.jsx)(s.code,{children:"su - polkadot -s /bin/bash"}),") or when running as root do a ",(0,t.jsx)(s.code,{children:"chown polkadot:polkadot <dbdir>"}),"). Of course change the part after ",(0,t.jsx)(s.code,{children:"-C"})," to your location."]}),"\n",(0,t.jsx)(s.h3,{id:"generic-command",children:"Generic command"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"curl -o - -L http://snapshot.stakeworld.io/<link> | lz4 -c -d - | tar -x -C <location>\n"})}),"\n",(0,t.jsx)(s.p,{children:"For example paritydb kusama"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"curl -o - -L http://snapshot.stakeworld.io/paritydb-ksmcc3.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/ksmcc3\n"})}),"\n",(0,t.jsx)(s.p,{children:"For example rocksdb polkadot"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"curl -o - -L http://snapshot.stakeworld.io/rocksdb-polkadot.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/polkadot\n"})})]})}function h(e={}){const{wrapper:s}={...(0,n.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},9735:(e,s,a)=>{a.d(s,{Z:()=>t});const t="data:image/png;base64,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"},1151:(e,s,a)=>{a.d(s,{Z:()=>r,a:()=>d});var t=a(7294);const n={},o=t.createContext(n);function d(e){const s=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),t.createElement(o.Provider,{value:s},e.children)}}}]);