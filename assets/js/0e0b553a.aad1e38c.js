"use strict";(self.webpackChunkstakeworld_io=self.webpackChunkstakeworld_io||[]).push([[158],{2711:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>i,contentTitle:()=>r,default:()=>c,frontMatter:()=>n,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"snapshot","title":"Snapshot","description":"Polkadot and Kusama snapshots in paritydb and rocksdb format","source":"@site/docs/snapshot.mdx","sourceDirName":".","slug":"/snapshot","permalink":"/docs/snapshot","draft":false,"unlisted":false,"editUrl":"https://github.com/stakeworld/website/edit/master/docs/snapshot.mdx","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"id":"snapshot","title":"Snapshot","description":"Polkadot and Kusama snapshots in paritydb and rocksdb format","slug":"/snapshot","sidebar_position":3,"keywords":["snapshots","snapshot","kusama snapshot","polkadot snapshot","rocksdb","paritydb","pruning","polkadot","kusama"]},"sidebar":"tutorialSidebar","previous":{"title":"Validators","permalink":"/docs/validate"},"next":{"title":"Database sizes","permalink":"/docs/dbsize"}}');var o=s(4848),d=s(8453);const n={id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",slug:"/snapshot",sidebar_position:3,keywords:["snapshots","snapshot","kusama snapshot","polkadot snapshot","rocksdb","paritydb","pruning","polkadot","kusama"]},r=void 0,i={},l=[{value:"Setup a validator node",id:"setup-a-validator-node",level:3},{value:"Install the database",id:"install-the-database",level:3},{value:"Edit the systemctl startup script",id:"edit-the-systemctl-startup-script",level:3},{value:"Restore:",id:"restore",level:2},{value:"Generic command",id:"generic-command",level:3}];function h(e){const a={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a.p,{children:"Last update: Mon 07 Apr"}),"\n",(0,o.jsxs)(a.table,{children:[(0,o.jsx)(a.thead,{children:(0,o.jsxs)(a.tr,{children:[(0,o.jsx)(a.th,{}),(0,o.jsx)(a.th,{children:"Chain"}),(0,o.jsx)(a.th,{children:"Database"}),(0,o.jsx)(a.th,{children:"Format"}),(0,o.jsx)(a.th,{children:"Blockheight"}),(0,o.jsx)(a.th,{children:"Snapshot"}),(0,o.jsx)(a.th,{children:"Full"})]})}),(0,o.jsx)(a.tbody,{children:(0,o.jsxs)(a.tr,{children:[(0,o.jsx)(a.td,{children:(0,o.jsx)(a.a,{href:"http://snapshot.stakeworld.io/paritydb-paseo.lz4",children:"direct link"})}),(0,o.jsx)(a.td,{children:"paseo"}),(0,o.jsx)(a.td,{children:"paritydb"}),(0,o.jsx)(a.td,{children:"pruned"}),(0,o.jsx)(a.td,{children:"5880917"}),(0,o.jsx)(a.td,{children:"92G"}),(0,o.jsx)(a.td,{children:"97G"})]})})]}),"\n",(0,o.jsx)(a.p,{children:(0,o.jsx)(a.img,{alt:"snapsize",src:s(3996).A+"",width:"800",height:"300"})}),"\n",(0,o.jsxs)(a.admonition,{type:"info",children:[(0,o.jsx)(a.p,{children:"Snapshots are compressed backups of the database directory of a polkadot node. If you start a node for the first time it will start building the database from scratch, which will take a few days, depending on network speed. If you download an up to date database snapshot your node will be up and running quicker; under an hour or a few hours, depending on network speed."}),(0,o.jsxs)(a.p,{children:["The warp sync option is becoming more developed and popular. If you start the node with an empty database and the option ",(0,o.jsx)(a.code,{children:"--sync warp"})," the node will first download the finality proofs after which it will be ready to validate and in the background download the remaining blocks. Therefore snapshots are being decommissioned."]}),(0,o.jsxs)(a.p,{children:["For now the snapshots are available for polkadot ",(0,o.jsx)(a.code,{children:"--chain polkadot"})," and paseo ",(0,o.jsx)(a.code,{children:"--chain paseo"})," in the paritydb ",(0,o.jsx)(a.code,{children:"--database paritydb"})," database format. They are pruned with ",(0,o.jsx)(a.code,{children:"--state-pruning 256"})," (default), which is sufficient for a validator node."]})]}),"\n",(0,o.jsx)(a.h3,{id:"setup-a-validator-node",children:"Setup a validator node"}),"\n",(0,o.jsxs)(a.p,{children:["Setting up a validator node is covered ",(0,o.jsx)(a.a,{href:"./validate",children:"here"}),". The default apt install creates an user polkadot with a home directory ",(0,o.jsx)(a.code,{children:"/home/polkadot"})," and a default service script ",(0,o.jsx)(a.code,{children:"/usr/lib/systemd/system/polkadot.service"}),"."]}),"\n",(0,o.jsx)(a.h3,{id:"install-the-database",children:"Install the database"}),"\n",(0,o.jsxs)(a.p,{children:["Database location: By default the polkadot binary runs as user polkadot and creates ",(0,o.jsx)(a.code,{children:".local/share/polkadot"})," in the users homedirectory. So for user polkadot (the default when installing from apt) that is ",(0,o.jsx)(a.code,{children:"/home/polkadot/.local/share/polkadot"}),"."]}),"\n",(0,o.jsxs)(a.p,{children:["This can be changed with ",(0,o.jsx)(a.code,{children:"--base-path"})," so for example ",(0,o.jsx)(a.code,{children:"--base-path /home/polkadot"})," or ",(0,o.jsx)(a.code,{children:"--base-path /home/polkadot/myvalidator"})," or whatever you prefer."]}),"\n",(0,o.jsx)(a.p,{children:"To delete the old database, restore a new kusama paritydb database snapshot for your node with a default install:"}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-bash",children:"su - polkadot -s /bin/bash\nrm -fr /home/polkadot/.local/share/polkadot/chains/ksmcc3\nmkdir -p /home/polkadot/.local/share/polkadot/chains/ksmcc3\ncurl -o - -L http://snapshot.stakeworld.io/paritydb-ksmcc3.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/ksmcc3\n"})}),"\n",(0,o.jsx)(a.p,{children:"You can check the startup by running the binary as user polkadot and see if it accepts the database or throws any errors:"}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-bash",children:"su - polkadot -s /bin/bash\npolkadot --chain kusama --database paritydb \n"})}),"\n",(0,o.jsx)(a.h3,{id:"edit-the-systemctl-startup-script",children:"Edit the systemctl startup script"}),"\n",(0,o.jsxs)(a.p,{children:["Edit the default service script and add for example ",(0,o.jsx)(a.code,{children:"--database paritydb --chain kusama"}),":"]}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-bash",children:'su -\nvi /usr/lib/systemd/system/polkadot.service"\nsystemctl daemon-reload\nsystemctl retart polkadot\nsystemctl enable polkadot\n'})}),"\n",(0,o.jsx)(a.p,{children:"Or create a new script by copying the default service script:"}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-bash",children:"su -\ncp /usr/lib/systemd/system/polkadot.service /etc/systemd/system/validator.service\nvi /etc/systemd/system/validator.service\n"})}),"\n",(0,o.jsx)(a.p,{children:"You can edit settings at wish, changing ports and settings at will."}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-config",children:"[Service]\nExecStart=/usr/bin/polkadot --chain kusama --name validator --validator --prometheus-external --base-path /home/polkadot --database paritydb --telemetry-url 'wss://telemetry.polkadot.io/submit/ 1' \n"})}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-bash",children:"systemctl daemon-reload\nsystemctl start validator\nsystemctl enable validator\n"})}),"\n",(0,o.jsx)(a.admonition,{type:"caution",children:(0,o.jsxs)(a.p,{children:['If you installed as root you will get an error "failed to create a test file: Permission denied". You can solve this by running ',(0,o.jsx)(a.code,{children:"chown -R polkadot:polkadot DBDIR"})]})}),"\n",(0,o.jsx)(a.h2,{id:"restore",children:"Restore:"}),"\n",(0,o.jsxs)(a.p,{children:["Best run the commands as user polkadot (",(0,o.jsx)(a.code,{children:"su - polkadot -s /bin/bash"}),") or when running as root do a ",(0,o.jsx)(a.code,{children:"chown polkadot:polkadot <dbdir>"}),"). Of course change the part after ",(0,o.jsx)(a.code,{children:"-C"})," to your location."]}),"\n",(0,o.jsx)(a.h3,{id:"generic-command",children:"Generic command"}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-bash",children:"curl -o - -L http://snapshot.stakeworld.io/<link> | lz4 -c -d - | tar -x -C <location>\n"})}),"\n",(0,o.jsx)(a.p,{children:"For example paritydb polkadot"}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-bash",children:"curl -o - -L http://snapshot.stakeworld.io/paritydb-polkadot.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/polkadot\n"})})]})}function c(e={}){const{wrapper:a}={...(0,d.R)(),...e.components};return a?(0,o.jsx)(a,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},3996:(e,a,s)=>{s.d(a,{A:()=>t});const t="data:image/png;base64,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"},8453:(e,a,s)=>{s.d(a,{R:()=>n,x:()=>r});var t=s(6540);const o={},d=t.createContext(o);function n(e){const a=t.useContext(d);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function r(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:n(e.components),t.createElement(d.Provider,{value:a},e.children)}}}]);