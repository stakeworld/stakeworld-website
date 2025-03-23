"use strict";(self.webpackChunkstakeworld_io=self.webpackChunkstakeworld_io||[]).push([[158],{2711:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>i,contentTitle:()=>r,default:()=>h,frontMatter:()=>d,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"snapshot","title":"Snapshot","description":"Polkadot and Kusama snapshots in paritydb and rocksdb format","source":"@site/docs/snapshot.mdx","sourceDirName":".","slug":"/snapshot","permalink":"/docs/snapshot","draft":false,"unlisted":false,"editUrl":"https://github.com/stakeworld/website/edit/master/docs/snapshot.mdx","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"id":"snapshot","title":"Snapshot","description":"Polkadot and Kusama snapshots in paritydb and rocksdb format","slug":"/snapshot","sidebar_position":3,"keywords":["snapshots","snapshot","kusama snapshot","polkadot snapshot","rocksdb","paritydb","pruning","polkadot","kusama"]},"sidebar":"tutorialSidebar","previous":{"title":"Validators","permalink":"/docs/validate"},"next":{"title":"Database sizes","permalink":"/docs/dbsize"}}');var o=s(4848),n=s(8453);const d={id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",slug:"/snapshot",sidebar_position:3,keywords:["snapshots","snapshot","kusama snapshot","polkadot snapshot","rocksdb","paritydb","pruning","polkadot","kusama"]},r=void 0,i={},l=[{value:"Setup a validator node",id:"setup-a-validator-node",level:3},{value:"Install the database",id:"install-the-database",level:3},{value:"Edit the systemctl startup script",id:"edit-the-systemctl-startup-script",level:3},{value:"Restore:",id:"restore",level:2},{value:"Generic command",id:"generic-command",level:3}];function c(e){const a={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a.p,{children:"Last update: Sun 23 Mar"}),"\n",(0,o.jsxs)(a.table,{children:[(0,o.jsx)(a.thead,{children:(0,o.jsxs)(a.tr,{children:[(0,o.jsx)(a.th,{}),(0,o.jsx)(a.th,{children:"Chain"}),(0,o.jsx)(a.th,{children:"Database"}),(0,o.jsx)(a.th,{children:"Format"}),(0,o.jsx)(a.th,{children:"Blockheight"}),(0,o.jsx)(a.th,{children:"Snapshot"}),(0,o.jsx)(a.th,{children:"Full"})]})}),(0,o.jsx)(a.tbody,{children:(0,o.jsxs)(a.tr,{children:[(0,o.jsx)(a.td,{children:(0,o.jsx)(a.a,{href:"http://snapshot.stakeworld.io/paritydb-paseo.lz4",children:"direct link"})}),(0,o.jsx)(a.td,{children:"paseo"}),(0,o.jsx)(a.td,{children:"paritydb"}),(0,o.jsx)(a.td,{children:"pruned"}),(0,o.jsx)(a.td,{children:"5666845"}),(0,o.jsx)(a.td,{children:"87G"}),(0,o.jsx)(a.td,{children:"92G"})]})})]}),"\n",(0,o.jsx)(a.p,{children:(0,o.jsx)(a.img,{alt:"snapsize",src:s(3996).A+"",width:"800",height:"300"})}),"\n",(0,o.jsxs)(a.admonition,{type:"info",children:[(0,o.jsx)(a.p,{children:"Snapshots are compressed backups of the database directory of a polkadot node. If you start a node for the first time it will start building the database from scratch, which will take a few days, depending on network speed. If you download an up to date database snapshot your node will be up and running quicker; under an hour or a few hours, depending on network speed."}),(0,o.jsxs)(a.p,{children:["The warp sync option is becoming more developed and popular. If you start the node with an empty database and the option ",(0,o.jsx)(a.code,{children:"--sync warp"})," the node will first download the finality proofs after which it will be ready to validate and in the background download the remaining blocks. Therefore snapshots are being decommissioned."]}),(0,o.jsxs)(a.p,{children:["For now the snapshots are available for polkadot ",(0,o.jsx)(a.code,{children:"--chain polkadot"})," and paseo ",(0,o.jsx)(a.code,{children:"--chain paseo"})," in the paritydb ",(0,o.jsx)(a.code,{children:"--database paritydb"})," database format. They are pruned with ",(0,o.jsx)(a.code,{children:"--state-pruning 256"})," (default), which is sufficient for a validator node."]})]}),"\n",(0,o.jsx)(a.h3,{id:"setup-a-validator-node",children:"Setup a validator node"}),"\n",(0,o.jsxs)(a.p,{children:["Setting up a validator node is covered ",(0,o.jsx)(a.a,{href:"./validate",children:"here"}),". The default apt install creates an user polkadot with a home directory ",(0,o.jsx)(a.code,{children:"/home/polkadot"})," and a default service script ",(0,o.jsx)(a.code,{children:"/usr/lib/systemd/system/polkadot.service"}),"."]}),"\n",(0,o.jsx)(a.h3,{id:"install-the-database",children:"Install the database"}),"\n",(0,o.jsxs)(a.p,{children:["Database location: By default the polkadot binary runs as user polkadot and creates ",(0,o.jsx)(a.code,{children:".local/share/polkadot"})," in the users homedirectory. So for user polkadot (the default when installing from apt) that is ",(0,o.jsx)(a.code,{children:"/home/polkadot/.local/share/polkadot"}),"."]}),"\n",(0,o.jsxs)(a.p,{children:["This can be changed with ",(0,o.jsx)(a.code,{children:"--base-path"})," so for example ",(0,o.jsx)(a.code,{children:"--base-path /home/polkadot"})," or ",(0,o.jsx)(a.code,{children:"--base-path /home/polkadot/myvalidator"})," or whatever you prefer."]}),"\n",(0,o.jsx)(a.p,{children:"To delete the old database, restore a new kusama paritydb database snapshot for your node with a default install:"}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-bash",children:"su - polkadot -s /bin/bash\nrm -fr /home/polkadot/.local/share/polkadot/chains/ksmcc3\nmkdir -p /home/polkadot/.local/share/polkadot/chains/ksmcc3\ncurl -o - -L http://snapshot.stakeworld.io/paritydb-ksmcc3.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/ksmcc3\n"})}),"\n",(0,o.jsx)(a.p,{children:"You can check the startup by running the binary as user polkadot and see if it accepts the database or throws any errors:"}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-bash",children:"su - polkadot -s /bin/bash\npolkadot --chain kusama --database paritydb \n"})}),"\n",(0,o.jsx)(a.h3,{id:"edit-the-systemctl-startup-script",children:"Edit the systemctl startup script"}),"\n",(0,o.jsxs)(a.p,{children:["Edit the default service script and add for example ",(0,o.jsx)(a.code,{children:"--database paritydb --chain kusama"}),":"]}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-bash",children:'su -\nvi /usr/lib/systemd/system/polkadot.service"\nsystemctl daemon-reload\nsystemctl retart polkadot\nsystemctl enable polkadot\n'})}),"\n",(0,o.jsx)(a.p,{children:"Or create a new script by copying the default service script:"}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-bash",children:"su -\ncp /usr/lib/systemd/system/polkadot.service /etc/systemd/system/validator.service\nvi /etc/systemd/system/validator.service\n"})}),"\n",(0,o.jsx)(a.p,{children:"You can edit settings at wish, changing ports and settings at will."}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-config",children:"[Service]\nExecStart=/usr/bin/polkadot --chain kusama --name validator --validator --prometheus-external --base-path /home/polkadot --database paritydb --telemetry-url 'wss://telemetry.polkadot.io/submit/ 1' \n"})}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-bash",children:"systemctl daemon-reload\nsystemctl start validator\nsystemctl enable validator\n"})}),"\n",(0,o.jsx)(a.admonition,{type:"caution",children:(0,o.jsxs)(a.p,{children:['If you installed as root you will get an error "failed to create a test file: Permission denied". You can solve this by running ',(0,o.jsx)(a.code,{children:"chown -R polkadot:polkadot DBDIR"})]})}),"\n",(0,o.jsx)(a.h2,{id:"restore",children:"Restore:"}),"\n",(0,o.jsxs)(a.p,{children:["Best run the commands as user polkadot (",(0,o.jsx)(a.code,{children:"su - polkadot -s /bin/bash"}),") or when running as root do a ",(0,o.jsx)(a.code,{children:"chown polkadot:polkadot <dbdir>"}),"). Of course change the part after ",(0,o.jsx)(a.code,{children:"-C"})," to your location."]}),"\n",(0,o.jsx)(a.h3,{id:"generic-command",children:"Generic command"}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-bash",children:"curl -o - -L http://snapshot.stakeworld.io/<link> | lz4 -c -d - | tar -x -C <location>\n"})}),"\n",(0,o.jsx)(a.p,{children:"For example paritydb polkadot"}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-bash",children:"curl -o - -L http://snapshot.stakeworld.io/paritydb-polkadot.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/polkadot\n"})})]})}function h(e={}){const{wrapper:a}={...(0,n.R)(),...e.components};return a?(0,o.jsx)(a,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},3996:(e,a,s)=>{s.d(a,{A:()=>t});const t="data:image/png;base64,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"},8453:(e,a,s)=>{s.d(a,{R:()=>d,x:()=>r});var t=s(6540);const o={},n=t.createContext(o);function d(e){const a=t.useContext(n);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function r(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:d(e.components),t.createElement(n.Provider,{value:a},e.children)}}}]);