"use strict";(self.webpackChunkstakeworld_io=self.webpackChunkstakeworld_io||[]).push([[158],{5852:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>i,contentTitle:()=>d,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>l});const a=JSON.parse('{"id":"snapshot","title":"Snapshot","description":"Polkadot and Kusama snapshots in paritydb and rocksdb format","source":"@site/docs/snapshot.mdx","sourceDirName":".","slug":"/snapshot","permalink":"/docs/snapshot","draft":false,"unlisted":false,"editUrl":"https://github.com/stakeworld/website/edit/master/docs/snapshot.mdx","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"id":"snapshot","title":"Snapshot","description":"Polkadot and Kusama snapshots in paritydb and rocksdb format","slug":"/snapshot","sidebar_position":3,"keywords":["snapshots","snapshot","kusama snapshot","polkadot snapshot","rocksdb","paritydb","pruning","polkadot","kusama"]},"sidebar":"tutorialSidebar","previous":{"title":"Pool","permalink":"/docs/pool"},"next":{"title":"Database sizes","permalink":"/docs/dbsize"}}');var o=s(4848),n=s(8453);const r={id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",slug:"/snapshot",sidebar_position:3,keywords:["snapshots","snapshot","kusama snapshot","polkadot snapshot","rocksdb","paritydb","pruning","polkadot","kusama"]},d=void 0,i={},l=[{value:"Automatic install",id:"automatic-install",level:2},{value:"Manual install",id:"manual-install",level:2},{value:"Setup a validator node",id:"setup-a-validator-node",level:3},{value:"Install the database",id:"install-the-database",level:3},{value:"Edit the systemctl startup script",id:"edit-the-systemctl-startup-script",level:3},{value:"Restore:",id:"restore",level:2},{value:"Generic command",id:"generic-command",level:3}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"Last update: Tue 04 Feb"}),"\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{}),(0,o.jsx)(t.th,{children:"Chain"}),(0,o.jsx)(t.th,{children:"Database"}),(0,o.jsx)(t.th,{children:"Format"}),(0,o.jsx)(t.th,{children:"Blockheight"}),(0,o.jsx)(t.th,{children:"Snapshot"}),(0,o.jsx)(t.th,{children:"Full"})]})}),(0,o.jsxs)(t.tbody,{children:[(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.a,{href:"http://snapshot.stakeworld.io/paritydb-polkadot.lz4",children:"direct link"})}),(0,o.jsx)(t.td,{children:"polkadot"}),(0,o.jsx)(t.td,{children:"paritydb"}),(0,o.jsx)(t.td,{children:"pruned"}),(0,o.jsx)(t.td,{children:"24578446"}),(0,o.jsx)(t.td,{children:"540G"}),(0,o.jsx)(t.td,{children:"563G"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.a,{href:"http://snapshot.stakeworld.io/paritydb-paseo.lz4",children:"direct link"})}),(0,o.jsx)(t.td,{children:"paseo"}),(0,o.jsx)(t.td,{children:"paritydb"}),(0,o.jsx)(t.td,{children:"pruned"}),(0,o.jsx)(t.td,{children:"4993928"}),(0,o.jsx)(t.td,{children:"72G"}),(0,o.jsx)(t.td,{children:"77G"})]})]})]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"snapsize",src:s(3996).A+"",width:"800",height:"300"})}),"\n",(0,o.jsxs)(t.admonition,{type:"info",children:[(0,o.jsx)(t.p,{children:"Snapshots are compressed backups of the database directory of a polkadot or kusama node. If you start a node for the first time it will start building the database from scratch, which will take a few days, depending on network speed. If you download an up to date database snapshot your node will be up and running quicker; under an hour or a few hours, depending on network speed."}),(0,o.jsxs)(t.p,{children:["Recently the warp sync option is becoming more developed and popular. If you start the node with an empty database and the option ",(0,o.jsx)(t.code,{children:"--sync warp"})," the node will first download the finality proofs after which it will be ready to validate and in the background download the remaining blocks."]}),(0,o.jsx)(t.p,{children:'With the "beefy" update warp sync got temporarily disabled so for the time being the snapshot service is re-enabled.'}),(0,o.jsxs)(t.p,{children:["For now the snapshots are available for kusama ",(0,o.jsx)(t.code,{children:"--chain ksmcc3"})," and polkadot ",(0,o.jsx)(t.code,{children:"--chain polkadot"})," in the paritydb ",(0,o.jsx)(t.code,{children:"--database paritydb"})," database format and the rocksdb ",(0,o.jsx)(t.code,{children:"--database rocksdb"})," format. They are pruned with ",(0,o.jsx)(t.code,{children:"--state-pruning 256"})," (default), which is sufficient for a validator node."]})]}),"\n",(0,o.jsx)(t.h2,{id:"automatic-install",children:"Automatic install"}),"\n",(0,o.jsxs)(t.p,{children:["The following script can restore a snapshot for a quickstart. If you want you can first review it on ",(0,o.jsx)(t.a,{href:"https://github.com/stakeworld/stakeworld-scripts/blob/master/node-install.sh",children:"github"}),'. You can choose "snapinstall" for a snapshot restore or "nodeinstall" to install a complete node. The script will ask some questions and create an install or restore script which you can review before executing.']}),"\n",(0,o.jsx)(t.p,{children:"The script is for ubuntu/debian flavoured servers."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"curl -o- -L https://raw.githubusercontent.com/stakeworld/stakeworld-scripts/master/node-install.sh | bash\n"})}),"\n",(0,o.jsx)(t.h2,{id:"manual-install",children:"Manual install"}),"\n",(0,o.jsx)(t.h3,{id:"setup-a-validator-node",children:"Setup a validator node"}),"\n",(0,o.jsxs)(t.p,{children:["Setting up a validator node is covered ",(0,o.jsx)(t.a,{href:"./validate",children:"here"}),". The default apt install creates an user polkadot with a home directory ",(0,o.jsx)(t.code,{children:"/home/polkadot"})," and a default service script ",(0,o.jsx)(t.code,{children:"/usr/lib/systemd/system/polkadot.service"}),"."]}),"\n",(0,o.jsx)(t.h3,{id:"install-the-database",children:"Install the database"}),"\n",(0,o.jsxs)(t.p,{children:["Database location: By default the polkadot binary runs as user polkadot and creates ",(0,o.jsx)(t.code,{children:".local/share/polkadot"})," in the users homedirectory. So for user polkadot (the default when installing from apt) that is ",(0,o.jsx)(t.code,{children:"/home/polkadot/.local/share/polkadot"}),"."]}),"\n",(0,o.jsxs)(t.p,{children:["This can be changed with ",(0,o.jsx)(t.code,{children:"--base-path"})," so for example ",(0,o.jsx)(t.code,{children:"--base-path /home/polkadot"})," or ",(0,o.jsx)(t.code,{children:"--base-path /home/polkadot/myvalidator"})," or whatever you prefer."]}),"\n",(0,o.jsx)(t.p,{children:"To delete the old database, restore a new kusama paritydb database snapshot for your node with a default install:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"su - polkadot -s /bin/bash\nrm -fr /home/polkadot/.local/share/polkadot/chains/ksmcc3\nmkdir -p /home/polkadot/.local/share/polkadot/chains/ksmcc3\ncurl -o - -L http://snapshot.stakeworld.io/paritydb-ksmcc3.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/ksmcc3\n"})}),"\n",(0,o.jsx)(t.p,{children:"You can check the startup by running the binary as user polkadot and see if it accepts the database or throws any errors:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"su - polkadot -s /bin/bash\npolkadot --chain kusama --database paritydb \n"})}),"\n",(0,o.jsx)(t.h3,{id:"edit-the-systemctl-startup-script",children:"Edit the systemctl startup script"}),"\n",(0,o.jsxs)(t.p,{children:["Edit the default service script and add for example ",(0,o.jsx)(t.code,{children:"--database paritydb --chain kusama"}),":"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:'su -\nvi /usr/lib/systemd/system/polkadot.service"\nsystemctl daemon-reload\nsystemctl retart polkadot\nsystemctl enable polkadot\n'})}),"\n",(0,o.jsx)(t.p,{children:"Or create a new script by copying the default service script:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"su -\ncp /usr/lib/systemd/system/polkadot.service /etc/systemd/system/validator.service\nvi /etc/systemd/system/validator.service\n"})}),"\n",(0,o.jsx)(t.p,{children:"You can edit settings at wish, changing ports and settings at will."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-config",children:"[Service]\nExecStart=/usr/bin/polkadot --chain kusama --name validator --validator --prometheus-external --base-path /home/polkadot --database paritydb --telemetry-url 'wss://telemetry.polkadot.io/submit/ 1' \n"})}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"systemctl daemon-reload\nsystemctl start validator\nsystemctl enable validator\n"})}),"\n",(0,o.jsx)(t.admonition,{type:"caution",children:(0,o.jsxs)(t.p,{children:['If you installed as root you will get an error "failed to create a test file: Permission denied". You can solve this by running ',(0,o.jsx)(t.code,{children:"chown -R polkadot:polkadot DBDIR"})]})}),"\n",(0,o.jsx)(t.h2,{id:"restore",children:"Restore:"}),"\n",(0,o.jsxs)(t.p,{children:["Best run the commands as user polkadot (",(0,o.jsx)(t.code,{children:"su - polkadot -s /bin/bash"}),") or when running as root do a ",(0,o.jsx)(t.code,{children:"chown polkadot:polkadot <dbdir>"}),"). Of course change the part after ",(0,o.jsx)(t.code,{children:"-C"})," to your location."]}),"\n",(0,o.jsx)(t.h3,{id:"generic-command",children:"Generic command"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"curl -o - -L http://snapshot.stakeworld.io/<link> | lz4 -c -d - | tar -x -C <location>\n"})}),"\n",(0,o.jsx)(t.p,{children:"For example paritydb kusama"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"curl -o - -L http://snapshot.stakeworld.io/paritydb-ksmcc3.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/ksmcc3\n"})}),"\n",(0,o.jsx)(t.p,{children:"For example rocksdb polkadot"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"curl -o - -L http://snapshot.stakeworld.io/rocksdb-polkadot.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/polkadot\n"})})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},3996:(e,t,s)=>{s.d(t,{A:()=>a});const a="data:image/png;base64,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"},8453:(e,t,s)=>{s.d(t,{R:()=>r,x:()=>d});var a=s(6540);const o={},n=a.createContext(o);function r(e){const t=a.useContext(n);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),a.createElement(n.Provider,{value:t},e.children)}}}]);