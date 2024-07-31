"use strict";(self.webpackChunkstakeworld_io=self.webpackChunkstakeworld_io||[]).push([[669],{8981:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>r,contentTitle:()=>d,default:()=>h,frontMatter:()=>n,metadata:()=>i,toc:()=>l});var t=a(5893),o=a(1151);const n={id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",slug:"/snapshot",sidebar_position:3,keywords:["snapshots","snapshot","kusama snapshot","polkadot snapshot","rocksdb","paritydb","pruning","polkadot","kusama"]},d=void 0,i={id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",source:"@site/docs/snapshot.mdx",sourceDirName:".",slug:"/snapshot",permalink:"/docs/snapshot",draft:!1,unlisted:!1,editUrl:"https://github.com/stakeworld/website/edit/master/docs/snapshot.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",slug:"/snapshot",sidebar_position:3,keywords:["snapshots","snapshot","kusama snapshot","polkadot snapshot","rocksdb","paritydb","pruning","polkadot","kusama"]},sidebar:"tutorialSidebar",previous:{title:"Pool",permalink:"/docs/pool"},next:{title:"Bootnodes",permalink:"/docs/bootnode"}},r={},l=[{value:"Automatic install",id:"automatic-install",level:2},{value:"Manual install",id:"manual-install",level:2},{value:"Setup a validator node",id:"setup-a-validator-node",level:3},{value:"Install the database",id:"install-the-database",level:3},{value:"Edit the systemctl startup script",id:"edit-the-systemctl-startup-script",level:3},{value:"Restore:",id:"restore",level:2},{value:"Generic command",id:"generic-command",level:3}];function c(e){const s={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.p,{children:"Last update: Wed 31 Jul"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{}),(0,t.jsx)(s.th,{children:"Chain"}),(0,t.jsx)(s.th,{children:"Database"}),(0,t.jsx)(s.th,{children:"Format"}),(0,t.jsx)(s.th,{children:"Blockheight"}),(0,t.jsx)(s.th,{children:"Snapshot"}),(0,t.jsx)(s.th,{children:"Full"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"http://snapshot.stakeworld.io/paritydb-ksmcc3.lz4",children:"direct link"})}),(0,t.jsx)(s.td,{children:"ksmcc3"}),(0,t.jsx)(s.td,{children:"paritydb"}),(0,t.jsx)(s.td,{children:"pruned"}),(0,t.jsx)(s.td,{children:"24273263"}),(0,t.jsx)(s.td,{children:"463G"}),(0,t.jsx)(s.td,{children:"481G"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"http://snapshot.stakeworld.io/paritydb-polkadot.lz4",children:"direct link"})}),(0,t.jsx)(s.td,{children:"polkadot"}),(0,t.jsx)(s.td,{children:"paritydb"}),(0,t.jsx)(s.td,{children:"pruned"}),(0,t.jsx)(s.td,{children:"21879766"}),(0,t.jsx)(s.td,{children:"402G"}),(0,t.jsx)(s.td,{children:"419G"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"http://snapshot.stakeworld.io/rocksdb-polkadot.lz4",children:"direct link"})}),(0,t.jsx)(s.td,{children:"polkadot"}),(0,t.jsx)(s.td,{children:"rocksdb"}),(0,t.jsx)(s.td,{children:"pruned"}),(0,t.jsx)(s.td,{children:"21880204"}),(0,t.jsx)(s.td,{children:"400G"}),(0,t.jsx)(s.td,{children:"422G"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"http://snapshot.stakeworld.io/rocksdb-ksmcc3.lz4",children:"direct link"})}),(0,t.jsx)(s.td,{children:"ksmcc3"}),(0,t.jsx)(s.td,{children:"rocksdb"}),(0,t.jsx)(s.td,{children:"pruned"}),(0,t.jsx)(s.td,{children:"24274638"}),(0,t.jsx)(s.td,{children:"454G"}),(0,t.jsx)(s.td,{children:"488G"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"http://snapshot.stakeworld.io/paritydb-paseo.lz4",children:"direct link"})}),(0,t.jsx)(s.td,{children:"paseo"}),(0,t.jsx)(s.td,{children:"paritydb"}),(0,t.jsx)(s.td,{children:"pruned"}),(0,t.jsx)(s.td,{children:"2297667"}),(0,t.jsx)(s.td,{children:"62G"}),(0,t.jsx)(s.td,{children:"103G"})]})]})]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"snapsize",src:a(9735).Z+"",width:"800",height:"300"})}),"\n",(0,t.jsxs)(s.admonition,{type:"info",children:[(0,t.jsx)(s.p,{children:"Snapshots are compressed backups of the database directory of a polkadot or kusama node. If you start a node for the first time it will start building the database from scratch, which will take a few days, depending on network speed. If you download an up to date database snapshot your node will be up and running quicker; under an hour or a few hours, depending on network speed."}),(0,t.jsxs)(s.p,{children:["Recently the warp sync option is becoming more developed and popular. If you start the node with an empty database and the option ",(0,t.jsx)(s.code,{children:"--sync warp"})," the node will first download the finality proofs after which it will be ready to validate and in the background download the remaining blocks."]}),(0,t.jsx)(s.p,{children:'With the "beefy" update warp sync got temporarily disabled so for the time being the snapshot service is re-enabled.'}),(0,t.jsxs)(s.p,{children:["For now the snapshots are available for kusama ",(0,t.jsx)(s.code,{children:"--chain ksmcc3"})," and polkadot ",(0,t.jsx)(s.code,{children:"--chain polkadot"})," in the paritydb ",(0,t.jsx)(s.code,{children:"--database paritydb"})," database format and the rocksdb ",(0,t.jsx)(s.code,{children:"--database rocksdb"})," format. They are pruned with ",(0,t.jsx)(s.code,{children:"--state-pruning 256"})," (default), which is sufficient for a validator node."]})]}),"\n",(0,t.jsx)(s.h2,{id:"automatic-install",children:"Automatic install"}),"\n",(0,t.jsxs)(s.p,{children:["The following script can restore a snapshot for a quickstart. If you want you can first review it on ",(0,t.jsx)(s.a,{href:"https://github.com/stakeworld/stakeworld-scripts/blob/master/node-install.sh",children:"github"}),'. You can choose "snapinstall" for a snapshot restore or "nodeinstall" to install a complete node. The script will ask some questions and create an install or restore script which you can review before executing.']}),"\n",(0,t.jsx)(s.p,{children:"The script is for ubuntu/debian flavoured servers."}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"curl -o- -L https://raw.githubusercontent.com/stakeworld/stakeworld-scripts/master/node-install.sh | bash\n"})}),"\n",(0,t.jsx)(s.h2,{id:"manual-install",children:"Manual install"}),"\n",(0,t.jsx)(s.h3,{id:"setup-a-validator-node",children:"Setup a validator node"}),"\n",(0,t.jsxs)(s.p,{children:["Setting up a validator node is covered ",(0,t.jsx)(s.a,{href:"./validate",children:"here"}),". The default apt install creates an user polkadot with a home directory ",(0,t.jsx)(s.code,{children:"/home/polkadot"})," and a default service script ",(0,t.jsx)(s.code,{children:"/usr/lib/systemd/system/polkadot.service"}),"."]}),"\n",(0,t.jsx)(s.h3,{id:"install-the-database",children:"Install the database"}),"\n",(0,t.jsxs)(s.p,{children:["Database location: By default the polkadot binary runs as user polkadot and creates ",(0,t.jsx)(s.code,{children:".local/share/polkadot"})," in the users homedirectory. So for user polkadot (the default when installing from apt) that is ",(0,t.jsx)(s.code,{children:"/home/polkadot/.local/share/polkadot"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:["This can be changed with ",(0,t.jsx)(s.code,{children:"--base-path"})," so for example ",(0,t.jsx)(s.code,{children:"--base-path /home/polkadot"})," or ",(0,t.jsx)(s.code,{children:"--base-path /home/polkadot/myvalidator"})," or whatever you prefer."]}),"\n",(0,t.jsx)(s.p,{children:"To delete the old database, restore a new kusama paritydb database snapshot for your node with a default install:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"su - polkadot -s /bin/bash\nrm -fr /home/polkadot/.local/share/polkadot/chains/ksmcc3\nmkdir -p /home/polkadot/.local/share/polkadot/chains/ksmcc3\ncurl -o - -L http://snapshot.stakeworld.io/paritydb-ksmcc3.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/ksmcc3\n"})}),"\n",(0,t.jsx)(s.p,{children:"You can check the startup by running the binary as user polkadot and see if it accepts the database or throws any errors:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"su - polkadot -s /bin/bash\npolkadot --chain kusama --database paritydb \n"})}),"\n",(0,t.jsx)(s.h3,{id:"edit-the-systemctl-startup-script",children:"Edit the systemctl startup script"}),"\n",(0,t.jsxs)(s.p,{children:["Edit the default service script and add for example ",(0,t.jsx)(s.code,{children:"--database paritydb --chain kusama"}),":"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:'su -\nvi /usr/lib/systemd/system/polkadot.service"\nsystemctl daemon-reload\nsystemctl retart polkadot\nsystemctl enable polkadot\n'})}),"\n",(0,t.jsx)(s.p,{children:"Or create a new script by copying the default service script:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"su -\ncp /usr/lib/systemd/system/polkadot.service /etc/systemd/system/validator.service\nvi /etc/systemd/system/validator.service\n"})}),"\n",(0,t.jsx)(s.p,{children:"You can edit settings at wish, changing ports and settings at will."}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-config",children:"[Service]\nExecStart=/usr/bin/polkadot --chain kusama --name validator --validator --prometheus-external --base-path /home/polkadot --database paritydb --telemetry-url 'wss://telemetry.polkadot.io/submit/ 1' \n"})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"systemctl daemon-reload\nsystemctl start validator\nsystemctl enable validator\n"})}),"\n",(0,t.jsx)(s.admonition,{type:"caution",children:(0,t.jsxs)(s.p,{children:['If you installed as root you will get an error "failed to create a test file: Permission denied". You can solve this by running ',(0,t.jsx)(s.code,{children:"chown -R polkadot:polkadot DBDIR"})]})}),"\n",(0,t.jsx)(s.h2,{id:"restore",children:"Restore:"}),"\n",(0,t.jsxs)(s.p,{children:["Best run the commands as user polkadot (",(0,t.jsx)(s.code,{children:"su - polkadot -s /bin/bash"}),") or when running as root do a ",(0,t.jsx)(s.code,{children:"chown polkadot:polkadot <dbdir>"}),"). Of course change the part after ",(0,t.jsx)(s.code,{children:"-C"})," to your location."]}),"\n",(0,t.jsx)(s.h3,{id:"generic-command",children:"Generic command"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"curl -o - -L http://snapshot.stakeworld.io/<link> | lz4 -c -d - | tar -x -C <location>\n"})}),"\n",(0,t.jsx)(s.p,{children:"For example paritydb kusama"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"curl -o - -L http://snapshot.stakeworld.io/paritydb-ksmcc3.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/ksmcc3\n"})}),"\n",(0,t.jsx)(s.p,{children:"For example rocksdb polkadot"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"curl -o - -L http://snapshot.stakeworld.io/rocksdb-polkadot.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/polkadot\n"})})]})}function h(e={}){const{wrapper:s}={...(0,o.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},9735:(e,s,a)=>{a.d(s,{Z:()=>t});const t="data:image/png;base64,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"},1151:(e,s,a)=>{a.d(s,{Z:()=>i,a:()=>d});var t=a(7294);const o={},n=t.createContext(o);function d(e){const s=t.useContext(n);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:d(e.components),t.createElement(n.Provider,{value:s},e.children)}}}]);