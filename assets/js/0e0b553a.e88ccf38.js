"use strict";(self.webpackChunkstakeworld_io=self.webpackChunkstakeworld_io||[]).push([[669],{8981:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>n,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>i});var s=t(5893),d=t(1151);const o={id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",slug:"/snapshot",sidebar_position:3,keywords:["snapshots","snapshot","kusama snapshot","polkadot snapshot","rocksdb","paritydb","pruning","polkadot","kusama"]},n=void 0,r={id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",source:"@site/docs/snapshot.mdx",sourceDirName:".",slug:"/snapshot",permalink:"/docs/snapshot",draft:!1,unlisted:!1,editUrl:"https://github.com/stakeworld/website/edit/master/docs/snapshot.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",slug:"/snapshot",sidebar_position:3,keywords:["snapshots","snapshot","kusama snapshot","polkadot snapshot","rocksdb","paritydb","pruning","polkadot","kusama"]},sidebar:"tutorialSidebar",previous:{title:"Pool",permalink:"/docs/pool"},next:{title:"Bootnodes",permalink:"/docs/bootnode"}},l={},i=[{value:"Automatic install",id:"automatic-install",level:2},{value:"Manual install",id:"manual-install",level:2},{value:"Setup a validator node",id:"setup-a-validator-node",level:3},{value:"Install the database",id:"install-the-database",level:3},{value:"Edit the systemctl startup script",id:"edit-the-systemctl-startup-script",level:3},{value:"Different databases:",id:"different-databases",level:2},{value:"Paritydb kusama",id:"paritydb-kusama",level:3},{value:"Paritydb polkadot",id:"paritydb-polkadot",level:3},{value:"Rocksdb kusama",id:"rocksdb-kusama",level:3},{value:"Rocksdb polkadot",id:"rocksdb-polkadot",level:3}];function c(e){const a={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.p,{children:"Last update: Tue 20 Feb"}),"\n",(0,s.jsxs)(a.table,{children:[(0,s.jsx)(a.thead,{children:(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.th,{}),(0,s.jsx)(a.th,{children:"Chain"}),(0,s.jsx)(a.th,{children:"Database"}),(0,s.jsx)(a.th,{children:"Format"}),(0,s.jsx)(a.th,{children:"Blockheight"}),(0,s.jsx)(a.th,{children:"Snapshot"}),(0,s.jsx)(a.th,{children:"Full"})]})}),(0,s.jsxs)(a.tbody,{children:[(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:(0,s.jsx)(a.a,{href:"http://snapshot.stakeworld.io/paritydb-ksmcc3.lz4",children:"direct link"})}),(0,s.jsx)(a.td,{children:"ksmcc3"}),(0,s.jsx)(a.td,{children:"paritydb"}),(0,s.jsx)(a.td,{children:"pruned"}),(0,s.jsx)(a.td,{children:"21953363"}),(0,s.jsx)(a.td,{children:"374G"}),(0,s.jsx)(a.td,{children:"388G"})]}),(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:(0,s.jsx)(a.a,{href:"http://snapshot.stakeworld.io/paritydb-polkadot.lz4",children:"direct link"})}),(0,s.jsx)(a.td,{children:"polkadot"}),(0,s.jsx)(a.td,{children:"paritydb"}),(0,s.jsx)(a.td,{children:"pruned"}),(0,s.jsx)(a.td,{children:"19560987"}),(0,s.jsx)(a.td,{children:"315G"}),(0,s.jsx)(a.td,{children:"327G"})]}),(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:(0,s.jsx)(a.a,{href:"http://snapshot.stakeworld.io/rocksdb-polkadot.lz4",children:"direct link"})}),(0,s.jsx)(a.td,{children:"polkadot"}),(0,s.jsx)(a.td,{children:"rocksdb"}),(0,s.jsx)(a.td,{children:"pruned"}),(0,s.jsx)(a.td,{children:"19561395"}),(0,s.jsx)(a.td,{children:"314G"}),(0,s.jsx)(a.td,{children:"329G"})]}),(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:(0,s.jsx)(a.a,{href:"http://snapshot.stakeworld.io/rocksdb-ksmcc3.lz4",children:"direct link"})}),(0,s.jsx)(a.td,{children:"ksmcc3"}),(0,s.jsx)(a.td,{children:"rocksdb"}),(0,s.jsx)(a.td,{children:"pruned"}),(0,s.jsx)(a.td,{children:"21954765"}),(0,s.jsx)(a.td,{children:"366G"}),(0,s.jsx)(a.td,{children:"388G"})]})]})]}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.img,{alt:"snapsize",src:t(9735).Z+"",width:"800",height:"300"})}),"\n",(0,s.jsxs)(a.admonition,{type:"info",children:[(0,s.jsx)(a.p,{children:"Snapshots are compressed backups of the database directory of a polkadot or kusama node. If you start a node for the first time it will start building the database from scratch, which will take a few days, depending on network speed. If you download an up to date database snapshot your node will be up and running quicker; under an hour or a few hours, depending on network speed."}),(0,s.jsxs)(a.p,{children:["Recently the warp sync option is becoming more developed and popular. If you start the node with an empty database and the option ",(0,s.jsx)(a.code,{children:"--sync warp"})," the node will first download the finality proofs after which it will be ready to validate and in the background download the remaining blocks."]}),(0,s.jsx)(a.p,{children:'With the "beefy" update warp sync got temporarily disabled so for the time being the snapshot service is re-enabled.'}),(0,s.jsxs)(a.p,{children:["For now the snapshots are available for kusama ",(0,s.jsx)(a.code,{children:"--chain ksmcc3"})," and polkadot ",(0,s.jsx)(a.code,{children:"--chain polkadot"})," in the paritydb ",(0,s.jsx)(a.code,{children:"--database paritydb"})," database format and the rocksdb ",(0,s.jsx)(a.code,{children:"--database rocksdb"})," format. They are pruned with ",(0,s.jsx)(a.code,{children:"--state-pruning 256"})," (default), which is sufficient for a validator node."]})]}),"\n",(0,s.jsx)(a.h2,{id:"automatic-install",children:"Automatic install"}),"\n",(0,s.jsxs)(a.p,{children:["The following script can restore a snapshot for a quickstart. If you want you can first review it on ",(0,s.jsx)(a.a,{href:"https://github.com/stakeworld/stakeworld-scripts/blob/master/node-install.sh",children:"github"}),'. You can choose "snapinstall" for a snapshot restore or "nodeinstall" to install a complete node. The script will ask some questions and create an install or restore script which you can review before executing.']}),"\n",(0,s.jsx)(a.p,{children:"The script is for ubuntu/debian flavoured servers."}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"curl -o- -L https://raw.githubusercontent.com/stakeworld/stakeworld-scripts/master/node-install.sh | bash\n"})}),"\n",(0,s.jsx)(a.h2,{id:"manual-install",children:"Manual install"}),"\n",(0,s.jsx)(a.h3,{id:"setup-a-validator-node",children:"Setup a validator node"}),"\n",(0,s.jsxs)(a.p,{children:["Setting up a validator node is covered ",(0,s.jsx)(a.a,{href:"./validate",children:"here"}),". The default apt install creates an user polkadot with a home directory ",(0,s.jsx)(a.code,{children:"/home/polkadot"})," and a default service script ",(0,s.jsx)(a.code,{children:"/usr/lib/systemd/system/polkadot.service"}),"."]}),"\n",(0,s.jsx)(a.h3,{id:"install-the-database",children:"Install the database"}),"\n",(0,s.jsxs)(a.p,{children:["Database location: By default the polkadot binary runs as user polkadot and creates ",(0,s.jsx)(a.code,{children:".local/share/polkadot"})," in the users homedirectory. So for user polkadot (the default when installing from apt) that is ",(0,s.jsx)(a.code,{children:"/home/polkadot/.local/share/polkadot"}),"."]}),"\n",(0,s.jsxs)(a.p,{children:["This can be changed with ",(0,s.jsx)(a.code,{children:"--base-path"})," so for example ",(0,s.jsx)(a.code,{children:"--base-path /home/polkadot"})," or ",(0,s.jsx)(a.code,{children:"--base-path /home/polkadot/myvalidator"})," or whatever you prefer."]}),"\n",(0,s.jsx)(a.p,{children:"To delete the old database, restore a new kusama paritydb database snapshot for your node with a default install:"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"su - polkadot -s /bin/bash\nrm -fr /home/polkadot/.local/share/polkadot/chains/ksmcc3\nmkdir -p /home/polkadot/.local/share/polkadot/chains/ksmcc3\ncurl -o - -L http://snapshot.stakeworld.io/paritydb-ksmcc3.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/ksmcc3\n"})}),"\n",(0,s.jsx)(a.p,{children:"You can check the startup by running the binary as user polkadot and see if it accepts the database or throws any errors:"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"su - polkadot -s /bin/bash\npolkadot --chain kusama --database paritydb \n"})}),"\n",(0,s.jsx)(a.h3,{id:"edit-the-systemctl-startup-script",children:"Edit the systemctl startup script"}),"\n",(0,s.jsxs)(a.p,{children:["Edit the default service script and add for example ",(0,s.jsx)(a.code,{children:"--database paritydb --chain kusama"}),":"]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:'su -\nvi /usr/lib/systemd/system/polkadot.service"\nsystemctl daemon-reload\nsystemctl retart polkadot\nsystemctl enable polkadot\n'})}),"\n",(0,s.jsx)(a.p,{children:"Or create a new script by copying the default service script:"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"su -\ncp /usr/lib/systemd/system/polkadot.service /etc/systemd/system/validator.service\nvi /etc/systemd/system/validator.service\n"})}),"\n",(0,s.jsx)(a.p,{children:"You can edit settings at wish, changing ports and settings at will."}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-config",children:"[Service]\nExecStart=/usr/bin/polkadot --chain kusama --name validator --validator --prometheus-external --base-path /home/polkadot --database paritydb --telemetry-url 'wss://telemetry.polkadot.io/submit/ 1' \n"})}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"systemctl daemon-reload\nsystemctl start validator\nsystemctl enable validator\n"})}),"\n",(0,s.jsx)(a.admonition,{type:"caution",children:(0,s.jsxs)(a.p,{children:['If you installed as root you will get an error "failed to create a test file: Permission denied". You can solve this by running ',(0,s.jsx)(a.code,{children:"chown -R polkadot:polkadot DBDIR"})]})}),"\n",(0,s.jsx)(a.h2,{id:"different-databases",children:"Different databases:"}),"\n",(0,s.jsxs)(a.p,{children:["Below restore commands for different databases to the default directory. Best run them as user polkadot (",(0,s.jsx)(a.code,{children:"su - polkadot -s /bin/bash"}),") or when running as root do a ",(0,s.jsx)(a.code,{children:"chown polkadot:polkadot <dbdir>"}),") or when running as root do a ",(0,s.jsx)(a.code,{children:"chown polkadot:polkadot <dbdir>"}),". Of course change the part after ",(0,s.jsx)(a.code,{children:"-C"})," when installing to another location."]}),"\n",(0,s.jsx)(a.h3,{id:"paritydb-kusama",children:"Paritydb kusama"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"curl -o - -L http://snapshot.stakeworld.io/paritydb-ksmcc3.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/ksmcc3\n"})}),"\n",(0,s.jsx)(a.h3,{id:"paritydb-polkadot",children:"Paritydb polkadot"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"curl -o - -L http://snapshot.stakeworld.io/paritydb-polkadot.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/polkadot\n"})}),"\n",(0,s.jsx)(a.h3,{id:"rocksdb-kusama",children:"Rocksdb kusama"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"curl -o - -L http://snapshot.stakeworld.io/rocksdb-ksmcc3.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/ksmcc3\n"})}),"\n",(0,s.jsx)(a.h3,{id:"rocksdb-polkadot",children:"Rocksdb polkadot"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"curl -o - -L http://snapshot.stakeworld.io/rocksdb-polkadot.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/polkadot\n"})})]})}function h(e={}){const{wrapper:a}={...(0,d.a)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},9735:(e,a,t)=>{t.d(a,{Z:()=>s});const s="data:image/png;base64,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"},1151:(e,a,t)=>{t.d(a,{Z:()=>r,a:()=>n});var s=t(7294);const d={},o=s.createContext(d);function n(e){const a=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function r(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:n(e.components),s.createElement(o.Provider,{value:a},e.children)}}}]);