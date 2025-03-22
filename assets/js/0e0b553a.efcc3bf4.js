"use strict";(self.webpackChunkstakeworld_io=self.webpackChunkstakeworld_io||[]).push([[158],{2711:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>i,contentTitle:()=>r,default:()=>h,frontMatter:()=>n,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"snapshot","title":"Snapshot","description":"Polkadot and Kusama snapshots in paritydb and rocksdb format","source":"@site/docs/snapshot.mdx","sourceDirName":".","slug":"/snapshot","permalink":"/docs/snapshot","draft":false,"unlisted":false,"editUrl":"https://github.com/stakeworld/website/edit/master/docs/snapshot.mdx","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"id":"snapshot","title":"Snapshot","description":"Polkadot and Kusama snapshots in paritydb and rocksdb format","slug":"/snapshot","sidebar_position":3,"keywords":["snapshots","snapshot","kusama snapshot","polkadot snapshot","rocksdb","paritydb","pruning","polkadot","kusama"]},"sidebar":"tutorialSidebar","previous":{"title":"Validators","permalink":"/docs/validate"},"next":{"title":"Database sizes","permalink":"/docs/dbsize"}}');var d=t(4848),o=t(8453);const n={id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",slug:"/snapshot",sidebar_position:3,keywords:["snapshots","snapshot","kusama snapshot","polkadot snapshot","rocksdb","paritydb","pruning","polkadot","kusama"]},r=void 0,i={},l=[{value:"Setup a validator node",id:"setup-a-validator-node",level:3},{value:"Install the database",id:"install-the-database",level:3},{value:"Edit the systemctl startup script",id:"edit-the-systemctl-startup-script",level:3},{value:"Restore:",id:"restore",level:2},{value:"Generic command",id:"generic-command",level:3}];function c(e){const a={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(a.p,{children:"Last update: Sat 22 Mar"}),"\n",(0,d.jsxs)(a.table,{children:[(0,d.jsx)(a.thead,{children:(0,d.jsxs)(a.tr,{children:[(0,d.jsx)(a.th,{}),(0,d.jsx)(a.th,{children:"Chain"}),(0,d.jsx)(a.th,{children:"Database"}),(0,d.jsx)(a.th,{children:"Format"}),(0,d.jsx)(a.th,{children:"Blockheight"}),(0,d.jsx)(a.th,{children:"Snapshot"}),(0,d.jsx)(a.th,{children:"Full"})]})}),(0,d.jsx)(a.tbody,{children:(0,d.jsxs)(a.tr,{children:[(0,d.jsx)(a.td,{children:(0,d.jsx)(a.a,{href:"http://snapshot.stakeworld.io/paritydb-paseo.lz4",children:"direct link"})}),(0,d.jsx)(a.td,{children:"paseo"}),(0,d.jsx)(a.td,{children:"paritydb"}),(0,d.jsx)(a.td,{children:"pruned"}),(0,d.jsx)(a.td,{children:"5652533"}),(0,d.jsx)(a.td,{children:"87G"}),(0,d.jsx)(a.td,{children:"92G"})]})})]}),"\n",(0,d.jsx)(a.p,{children:(0,d.jsx)(a.img,{alt:"snapsize",src:t(3996).A+"",width:"800",height:"300"})}),"\n",(0,d.jsxs)(a.admonition,{type:"info",children:[(0,d.jsx)(a.p,{children:"Snapshots are compressed backups of the database directory of a polkadot node. If you start a node for the first time it will start building the database from scratch, which will take a few days, depending on network speed. If you download an up to date database snapshot your node will be up and running quicker; under an hour or a few hours, depending on network speed."}),(0,d.jsxs)(a.p,{children:["The warp sync option is becoming more developed and popular. If you start the node with an empty database and the option ",(0,d.jsx)(a.code,{children:"--sync warp"})," the node will first download the finality proofs after which it will be ready to validate and in the background download the remaining blocks. Therefore snapshots are being decommissioned."]}),(0,d.jsxs)(a.p,{children:["For now the snapshots are available for polkadot ",(0,d.jsx)(a.code,{children:"--chain polkadot"})," and paseo ",(0,d.jsx)(a.code,{children:"--chain paseo"})," in the paritydb ",(0,d.jsx)(a.code,{children:"--database paritydb"})," database format. They are pruned with ",(0,d.jsx)(a.code,{children:"--state-pruning 256"})," (default), which is sufficient for a validator node."]})]}),"\n",(0,d.jsx)(a.h3,{id:"setup-a-validator-node",children:"Setup a validator node"}),"\n",(0,d.jsxs)(a.p,{children:["Setting up a validator node is covered ",(0,d.jsx)(a.a,{href:"./validate",children:"here"}),". The default apt install creates an user polkadot with a home directory ",(0,d.jsx)(a.code,{children:"/home/polkadot"})," and a default service script ",(0,d.jsx)(a.code,{children:"/usr/lib/systemd/system/polkadot.service"}),"."]}),"\n",(0,d.jsx)(a.h3,{id:"install-the-database",children:"Install the database"}),"\n",(0,d.jsxs)(a.p,{children:["Database location: By default the polkadot binary runs as user polkadot and creates ",(0,d.jsx)(a.code,{children:".local/share/polkadot"})," in the users homedirectory. So for user polkadot (the default when installing from apt) that is ",(0,d.jsx)(a.code,{children:"/home/polkadot/.local/share/polkadot"}),"."]}),"\n",(0,d.jsxs)(a.p,{children:["This can be changed with ",(0,d.jsx)(a.code,{children:"--base-path"})," so for example ",(0,d.jsx)(a.code,{children:"--base-path /home/polkadot"})," or ",(0,d.jsx)(a.code,{children:"--base-path /home/polkadot/myvalidator"})," or whatever you prefer."]}),"\n",(0,d.jsx)(a.p,{children:"To delete the old database, restore a new kusama paritydb database snapshot for your node with a default install:"}),"\n",(0,d.jsx)(a.pre,{children:(0,d.jsx)(a.code,{className:"language-bash",children:"su - polkadot -s /bin/bash\nrm -fr /home/polkadot/.local/share/polkadot/chains/ksmcc3\nmkdir -p /home/polkadot/.local/share/polkadot/chains/ksmcc3\ncurl -o - -L http://snapshot.stakeworld.io/paritydb-ksmcc3.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/ksmcc3\n"})}),"\n",(0,d.jsx)(a.p,{children:"You can check the startup by running the binary as user polkadot and see if it accepts the database or throws any errors:"}),"\n",(0,d.jsx)(a.pre,{children:(0,d.jsx)(a.code,{className:"language-bash",children:"su - polkadot -s /bin/bash\npolkadot --chain kusama --database paritydb \n"})}),"\n",(0,d.jsx)(a.h3,{id:"edit-the-systemctl-startup-script",children:"Edit the systemctl startup script"}),"\n",(0,d.jsxs)(a.p,{children:["Edit the default service script and add for example ",(0,d.jsx)(a.code,{children:"--database paritydb --chain kusama"}),":"]}),"\n",(0,d.jsx)(a.pre,{children:(0,d.jsx)(a.code,{className:"language-bash",children:'su -\nvi /usr/lib/systemd/system/polkadot.service"\nsystemctl daemon-reload\nsystemctl retart polkadot\nsystemctl enable polkadot\n'})}),"\n",(0,d.jsx)(a.p,{children:"Or create a new script by copying the default service script:"}),"\n",(0,d.jsx)(a.pre,{children:(0,d.jsx)(a.code,{className:"language-bash",children:"su -\ncp /usr/lib/systemd/system/polkadot.service /etc/systemd/system/validator.service\nvi /etc/systemd/system/validator.service\n"})}),"\n",(0,d.jsx)(a.p,{children:"You can edit settings at wish, changing ports and settings at will."}),"\n",(0,d.jsx)(a.pre,{children:(0,d.jsx)(a.code,{className:"language-config",children:"[Service]\nExecStart=/usr/bin/polkadot --chain kusama --name validator --validator --prometheus-external --base-path /home/polkadot --database paritydb --telemetry-url 'wss://telemetry.polkadot.io/submit/ 1' \n"})}),"\n",(0,d.jsx)(a.pre,{children:(0,d.jsx)(a.code,{className:"language-bash",children:"systemctl daemon-reload\nsystemctl start validator\nsystemctl enable validator\n"})}),"\n",(0,d.jsx)(a.admonition,{type:"caution",children:(0,d.jsxs)(a.p,{children:['If you installed as root you will get an error "failed to create a test file: Permission denied". You can solve this by running ',(0,d.jsx)(a.code,{children:"chown -R polkadot:polkadot DBDIR"})]})}),"\n",(0,d.jsx)(a.h2,{id:"restore",children:"Restore:"}),"\n",(0,d.jsxs)(a.p,{children:["Best run the commands as user polkadot (",(0,d.jsx)(a.code,{children:"su - polkadot -s /bin/bash"}),") or when running as root do a ",(0,d.jsx)(a.code,{children:"chown polkadot:polkadot <dbdir>"}),"). Of course change the part after ",(0,d.jsx)(a.code,{children:"-C"})," to your location."]}),"\n",(0,d.jsx)(a.h3,{id:"generic-command",children:"Generic command"}),"\n",(0,d.jsx)(a.pre,{children:(0,d.jsx)(a.code,{className:"language-bash",children:"curl -o - -L http://snapshot.stakeworld.io/<link> | lz4 -c -d - | tar -x -C <location>\n"})}),"\n",(0,d.jsx)(a.p,{children:"For example paritydb polkadot"}),"\n",(0,d.jsx)(a.pre,{children:(0,d.jsx)(a.code,{className:"language-bash",children:"curl -o - -L http://snapshot.stakeworld.io/paritydb-polkadot.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/polkadot\n"})})]})}function h(e={}){const{wrapper:a}={...(0,o.R)(),...e.components};return a?(0,d.jsx)(a,{...e,children:(0,d.jsx)(c,{...e})}):c(e)}},3996:(e,a,t)=>{t.d(a,{A:()=>s});const s="data:image/png;base64,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"},8453:(e,a,t)=>{t.d(a,{R:()=>n,x:()=>r});var s=t(6540);const d={},o=s.createContext(d);function n(e){const a=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function r(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:n(e.components),s.createElement(o.Provider,{value:a},e.children)}}}]);