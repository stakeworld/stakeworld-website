"use strict";(self.webpackChunkstakeworld_io=self.webpackChunkstakeworld_io||[]).push([[158],{2711:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>i,contentTitle:()=>r,default:()=>h,frontMatter:()=>d,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"snapshot","title":"Snapshot","description":"Polkadot and Kusama snapshots in paritydb and rocksdb format","source":"@site/docs/snapshot.mdx","sourceDirName":".","slug":"/snapshot","permalink":"/docs/snapshot","draft":false,"unlisted":false,"editUrl":"https://github.com/stakeworld/website/edit/master/docs/snapshot.mdx","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"id":"snapshot","title":"Snapshot","description":"Polkadot and Kusama snapshots in paritydb and rocksdb format","slug":"/snapshot","sidebar_position":3,"keywords":["snapshots","snapshot","kusama snapshot","polkadot snapshot","rocksdb","paritydb","pruning","polkadot","kusama"]},"sidebar":"tutorialSidebar","previous":{"title":"Pool","permalink":"/docs/pool"},"next":{"title":"Database sizes","permalink":"/docs/dbsize"}}');var o=t(4848),n=t(8453);const d={id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",slug:"/snapshot",sidebar_position:3,keywords:["snapshots","snapshot","kusama snapshot","polkadot snapshot","rocksdb","paritydb","pruning","polkadot","kusama"]},r=void 0,i={},l=[{value:"Automatic install",id:"automatic-install",level:2},{value:"Manual install",id:"manual-install",level:2},{value:"Setup a validator node",id:"setup-a-validator-node",level:3},{value:"Install the database",id:"install-the-database",level:3},{value:"Edit the systemctl startup script",id:"edit-the-systemctl-startup-script",level:3},{value:"Restore:",id:"restore",level:2},{value:"Generic command",id:"generic-command",level:3}];function c(e){const a={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a.p,{children:"Last update: Mon 10 Feb"}),"\n",(0,o.jsxs)(a.table,{children:[(0,o.jsx)(a.thead,{children:(0,o.jsxs)(a.tr,{children:[(0,o.jsx)(a.th,{}),(0,o.jsx)(a.th,{children:"Chain"}),(0,o.jsx)(a.th,{children:"Database"}),(0,o.jsx)(a.th,{children:"Format"}),(0,o.jsx)(a.th,{children:"Blockheight"}),(0,o.jsx)(a.th,{children:"Snapshot"}),(0,o.jsx)(a.th,{children:"Full"})]})}),(0,o.jsxs)(a.tbody,{children:[(0,o.jsxs)(a.tr,{children:[(0,o.jsx)(a.td,{children:(0,o.jsx)(a.a,{href:"http://snapshot.stakeworld.io/paritydb-polkadot.lz4",children:"direct link"})}),(0,o.jsx)(a.td,{children:"polkadot"}),(0,o.jsx)(a.td,{children:"paritydb"}),(0,o.jsx)(a.td,{children:"pruned"}),(0,o.jsx)(a.td,{children:"24664696"}),(0,o.jsx)(a.td,{children:"545G"}),(0,o.jsx)(a.td,{children:"568G"})]}),(0,o.jsxs)(a.tr,{children:[(0,o.jsx)(a.td,{children:(0,o.jsx)(a.a,{href:"http://snapshot.stakeworld.io/paritydb-paseo.lz4",children:"direct link"})}),(0,o.jsx)(a.td,{children:"paseo"}),(0,o.jsx)(a.td,{children:"paritydb"}),(0,o.jsx)(a.td,{children:"pruned"}),(0,o.jsx)(a.td,{children:"5080310"}),(0,o.jsx)(a.td,{children:"74G"}),(0,o.jsx)(a.td,{children:"79G"})]})]})]}),"\n",(0,o.jsx)(a.p,{children:(0,o.jsx)(a.img,{alt:"snapsize",src:t(3996).A+"",width:"800",height:"300"})}),"\n",(0,o.jsxs)(a.admonition,{type:"info",children:[(0,o.jsx)(a.p,{children:"Snapshots are compressed backups of the database directory of a polkadot or kusama node. If you start a node for the first time it will start building the database from scratch, which will take a few days, depending on network speed. If you download an up to date database snapshot your node will be up and running quicker; under an hour or a few hours, depending on network speed."}),(0,o.jsxs)(a.p,{children:["Recently the warp sync option is becoming more developed and popular. If you start the node with an empty database and the option ",(0,o.jsx)(a.code,{children:"--sync warp"})," the node will first download the finality proofs after which it will be ready to validate and in the background download the remaining blocks."]}),(0,o.jsx)(a.p,{children:'With the "beefy" update warp sync got temporarily disabled so for the time being the snapshot service is re-enabled.'}),(0,o.jsxs)(a.p,{children:["For now the snapshots are available for kusama ",(0,o.jsx)(a.code,{children:"--chain ksmcc3"})," and polkadot ",(0,o.jsx)(a.code,{children:"--chain polkadot"})," in the paritydb ",(0,o.jsx)(a.code,{children:"--database paritydb"})," database format and the rocksdb ",(0,o.jsx)(a.code,{children:"--database rocksdb"})," format. They are pruned with ",(0,o.jsx)(a.code,{children:"--state-pruning 256"})," (default), which is sufficient for a validator node."]})]}),"\n",(0,o.jsx)(a.h2,{id:"automatic-install",children:"Automatic install"}),"\n",(0,o.jsxs)(a.p,{children:["The following script can restore a snapshot for a quickstart. If you want you can first review it on ",(0,o.jsx)(a.a,{href:"https://github.com/stakeworld/stakeworld-scripts/blob/master/node-install.sh",children:"github"}),'. You can choose "snapinstall" for a snapshot restore or "nodeinstall" to install a complete node. The script will ask some questions and create an install or restore script which you can review before executing.']}),"\n",(0,o.jsx)(a.p,{children:"The script is for ubuntu/debian flavoured servers."}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-bash",children:"curl -o- -L https://raw.githubusercontent.com/stakeworld/stakeworld-scripts/master/node-install.sh | bash\n"})}),"\n",(0,o.jsx)(a.h2,{id:"manual-install",children:"Manual install"}),"\n",(0,o.jsx)(a.h3,{id:"setup-a-validator-node",children:"Setup a validator node"}),"\n",(0,o.jsxs)(a.p,{children:["Setting up a validator node is covered ",(0,o.jsx)(a.a,{href:"./validate",children:"here"}),". The default apt install creates an user polkadot with a home directory ",(0,o.jsx)(a.code,{children:"/home/polkadot"})," and a default service script ",(0,o.jsx)(a.code,{children:"/usr/lib/systemd/system/polkadot.service"}),"."]}),"\n",(0,o.jsx)(a.h3,{id:"install-the-database",children:"Install the database"}),"\n",(0,o.jsxs)(a.p,{children:["Database location: By default the polkadot binary runs as user polkadot and creates ",(0,o.jsx)(a.code,{children:".local/share/polkadot"})," in the users homedirectory. So for user polkadot (the default when installing from apt) that is ",(0,o.jsx)(a.code,{children:"/home/polkadot/.local/share/polkadot"}),"."]}),"\n",(0,o.jsxs)(a.p,{children:["This can be changed with ",(0,o.jsx)(a.code,{children:"--base-path"})," so for example ",(0,o.jsx)(a.code,{children:"--base-path /home/polkadot"})," or ",(0,o.jsx)(a.code,{children:"--base-path /home/polkadot/myvalidator"})," or whatever you prefer."]}),"\n",(0,o.jsx)(a.p,{children:"To delete the old database, restore a new kusama paritydb database snapshot for your node with a default install:"}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-bash",children:"su - polkadot -s /bin/bash\nrm -fr /home/polkadot/.local/share/polkadot/chains/ksmcc3\nmkdir -p /home/polkadot/.local/share/polkadot/chains/ksmcc3\ncurl -o - -L http://snapshot.stakeworld.io/paritydb-ksmcc3.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/ksmcc3\n"})}),"\n",(0,o.jsx)(a.p,{children:"You can check the startup by running the binary as user polkadot and see if it accepts the database or throws any errors:"}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-bash",children:"su - polkadot -s /bin/bash\npolkadot --chain kusama --database paritydb \n"})}),"\n",(0,o.jsx)(a.h3,{id:"edit-the-systemctl-startup-script",children:"Edit the systemctl startup script"}),"\n",(0,o.jsxs)(a.p,{children:["Edit the default service script and add for example ",(0,o.jsx)(a.code,{children:"--database paritydb --chain kusama"}),":"]}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-bash",children:'su -\nvi /usr/lib/systemd/system/polkadot.service"\nsystemctl daemon-reload\nsystemctl retart polkadot\nsystemctl enable polkadot\n'})}),"\n",(0,o.jsx)(a.p,{children:"Or create a new script by copying the default service script:"}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-bash",children:"su -\ncp /usr/lib/systemd/system/polkadot.service /etc/systemd/system/validator.service\nvi /etc/systemd/system/validator.service\n"})}),"\n",(0,o.jsx)(a.p,{children:"You can edit settings at wish, changing ports and settings at will."}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-config",children:"[Service]\nExecStart=/usr/bin/polkadot --chain kusama --name validator --validator --prometheus-external --base-path /home/polkadot --database paritydb --telemetry-url 'wss://telemetry.polkadot.io/submit/ 1' \n"})}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-bash",children:"systemctl daemon-reload\nsystemctl start validator\nsystemctl enable validator\n"})}),"\n",(0,o.jsx)(a.admonition,{type:"caution",children:(0,o.jsxs)(a.p,{children:['If you installed as root you will get an error "failed to create a test file: Permission denied". You can solve this by running ',(0,o.jsx)(a.code,{children:"chown -R polkadot:polkadot DBDIR"})]})}),"\n",(0,o.jsx)(a.h2,{id:"restore",children:"Restore:"}),"\n",(0,o.jsxs)(a.p,{children:["Best run the commands as user polkadot (",(0,o.jsx)(a.code,{children:"su - polkadot -s /bin/bash"}),") or when running as root do a ",(0,o.jsx)(a.code,{children:"chown polkadot:polkadot <dbdir>"}),"). Of course change the part after ",(0,o.jsx)(a.code,{children:"-C"})," to your location."]}),"\n",(0,o.jsx)(a.h3,{id:"generic-command",children:"Generic command"}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-bash",children:"curl -o - -L http://snapshot.stakeworld.io/<link> | lz4 -c -d - | tar -x -C <location>\n"})}),"\n",(0,o.jsx)(a.p,{children:"For example paritydb kusama"}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-bash",children:"curl -o - -L http://snapshot.stakeworld.io/paritydb-ksmcc3.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/ksmcc3\n"})}),"\n",(0,o.jsx)(a.p,{children:"For example rocksdb polkadot"}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-bash",children:"curl -o - -L http://snapshot.stakeworld.io/rocksdb-polkadot.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/polkadot\n"})})]})}function h(e={}){const{wrapper:a}={...(0,n.R)(),...e.components};return a?(0,o.jsx)(a,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},3996:(e,a,t)=>{t.d(a,{A:()=>s});const s="data:image/png;base64,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"},8453:(e,a,t)=>{t.d(a,{R:()=>d,x:()=>r});var s=t(6540);const o={},n=s.createContext(o);function d(e){const a=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function r(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:d(e.components),s.createElement(n.Provider,{value:a},e.children)}}}]);