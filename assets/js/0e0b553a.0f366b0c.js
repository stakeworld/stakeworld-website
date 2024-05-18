"use strict";(self.webpackChunkstakeworld_io=self.webpackChunkstakeworld_io||[]).push([[669],{8981:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>i,contentTitle:()=>n,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var a=s(5893),d=s(1151);const o={id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",slug:"/snapshot",sidebar_position:3,keywords:["snapshots","snapshot","kusama snapshot","polkadot snapshot","rocksdb","paritydb","pruning","polkadot","kusama"]},n=void 0,r={id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",source:"@site/docs/snapshot.mdx",sourceDirName:".",slug:"/snapshot",permalink:"/docs/snapshot",draft:!1,unlisted:!1,editUrl:"https://github.com/stakeworld/website/edit/master/docs/snapshot.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",slug:"/snapshot",sidebar_position:3,keywords:["snapshots","snapshot","kusama snapshot","polkadot snapshot","rocksdb","paritydb","pruning","polkadot","kusama"]},sidebar:"tutorialSidebar",previous:{title:"Pool",permalink:"/docs/pool"},next:{title:"Bootnodes",permalink:"/docs/bootnode"}},i={},l=[{value:"Automatic install",id:"automatic-install",level:2},{value:"Manual install",id:"manual-install",level:2},{value:"Setup a validator node",id:"setup-a-validator-node",level:3},{value:"Install the database",id:"install-the-database",level:3},{value:"Edit the systemctl startup script",id:"edit-the-systemctl-startup-script",level:3},{value:"Restore:",id:"restore",level:2},{value:"Generic command",id:"generic-command",level:3}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"Last update: Sat 18 May"}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{}),(0,a.jsx)(t.th,{children:"Chain"}),(0,a.jsx)(t.th,{children:"Database"}),(0,a.jsx)(t.th,{children:"Format"}),(0,a.jsx)(t.th,{children:"Blockheight"}),(0,a.jsx)(t.th,{children:"Snapshot"}),(0,a.jsx)(t.th,{children:"Full"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.a,{href:"http://snapshot.stakeworld.io/paritydb-ksmcc3.lz4",children:"direct link"})}),(0,a.jsx)(t.td,{children:"ksmcc3"}),(0,a.jsx)(t.td,{children:"paritydb"}),(0,a.jsx)(t.td,{children:"pruned"}),(0,a.jsx)(t.td,{children:"23215153"}),(0,a.jsx)(t.td,{children:"418G"}),(0,a.jsx)(t.td,{children:"434G"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.a,{href:"http://snapshot.stakeworld.io/paritydb-polkadot.lz4",children:"direct link"})}),(0,a.jsx)(t.td,{children:"polkadot"}),(0,a.jsx)(t.td,{children:"paritydb"}),(0,a.jsx)(t.td,{children:"pruned"}),(0,a.jsx)(t.td,{children:"20819882"}),(0,a.jsx)(t.td,{children:"362G"}),(0,a.jsx)(t.td,{children:"377G"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.a,{href:"http://snapshot.stakeworld.io/rocksdb-polkadot.lz4",children:"direct link"})}),(0,a.jsx)(t.td,{children:"polkadot"}),(0,a.jsx)(t.td,{children:"rocksdb"}),(0,a.jsx)(t.td,{children:"pruned"}),(0,a.jsx)(t.td,{children:"20820305"}),(0,a.jsx)(t.td,{children:"360G"}),(0,a.jsx)(t.td,{children:"378G"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.a,{href:"http://snapshot.stakeworld.io/rocksdb-ksmcc3.lz4",children:"direct link"})}),(0,a.jsx)(t.td,{children:"ksmcc3"}),(0,a.jsx)(t.td,{children:"rocksdb"}),(0,a.jsx)(t.td,{children:"pruned"}),(0,a.jsx)(t.td,{children:"23216484"}),(0,a.jsx)(t.td,{children:"410G"}),(0,a.jsx)(t.td,{children:"437G"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.a,{href:"http://snapshot.stakeworld.io/paritydb-paseo.lz4",children:"direct link"})}),(0,a.jsx)(t.td,{children:"paseo"}),(0,a.jsx)(t.td,{children:"paritydb"}),(0,a.jsx)(t.td,{children:"pruned"}),(0,a.jsx)(t.td,{children:"1259884"}),(0,a.jsx)(t.td,{children:"21G"}),(0,a.jsx)(t.td,{children:"36G"})]})]})]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"snapsize",src:s(9735).Z+"",width:"800",height:"300"})}),"\n",(0,a.jsxs)(t.admonition,{type:"info",children:[(0,a.jsx)(t.p,{children:"Snapshots are compressed backups of the database directory of a polkadot or kusama node. If you start a node for the first time it will start building the database from scratch, which will take a few days, depending on network speed. If you download an up to date database snapshot your node will be up and running quicker; under an hour or a few hours, depending on network speed."}),(0,a.jsxs)(t.p,{children:["Recently the warp sync option is becoming more developed and popular. If you start the node with an empty database and the option ",(0,a.jsx)(t.code,{children:"--sync warp"})," the node will first download the finality proofs after which it will be ready to validate and in the background download the remaining blocks."]}),(0,a.jsx)(t.p,{children:'With the "beefy" update warp sync got temporarily disabled so for the time being the snapshot service is re-enabled.'}),(0,a.jsxs)(t.p,{children:["For now the snapshots are available for kusama ",(0,a.jsx)(t.code,{children:"--chain ksmcc3"})," and polkadot ",(0,a.jsx)(t.code,{children:"--chain polkadot"})," in the paritydb ",(0,a.jsx)(t.code,{children:"--database paritydb"})," database format and the rocksdb ",(0,a.jsx)(t.code,{children:"--database rocksdb"})," format. They are pruned with ",(0,a.jsx)(t.code,{children:"--state-pruning 256"})," (default), which is sufficient for a validator node."]})]}),"\n",(0,a.jsx)(t.h2,{id:"automatic-install",children:"Automatic install"}),"\n",(0,a.jsxs)(t.p,{children:["The following script can restore a snapshot for a quickstart. If you want you can first review it on ",(0,a.jsx)(t.a,{href:"https://github.com/stakeworld/stakeworld-scripts/blob/master/node-install.sh",children:"github"}),'. You can choose "snapinstall" for a snapshot restore or "nodeinstall" to install a complete node. The script will ask some questions and create an install or restore script which you can review before executing.']}),"\n",(0,a.jsx)(t.p,{children:"The script is for ubuntu/debian flavoured servers."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"curl -o- -L https://raw.githubusercontent.com/stakeworld/stakeworld-scripts/master/node-install.sh | bash\n"})}),"\n",(0,a.jsx)(t.h2,{id:"manual-install",children:"Manual install"}),"\n",(0,a.jsx)(t.h3,{id:"setup-a-validator-node",children:"Setup a validator node"}),"\n",(0,a.jsxs)(t.p,{children:["Setting up a validator node is covered ",(0,a.jsx)(t.a,{href:"./validate",children:"here"}),". The default apt install creates an user polkadot with a home directory ",(0,a.jsx)(t.code,{children:"/home/polkadot"})," and a default service script ",(0,a.jsx)(t.code,{children:"/usr/lib/systemd/system/polkadot.service"}),"."]}),"\n",(0,a.jsx)(t.h3,{id:"install-the-database",children:"Install the database"}),"\n",(0,a.jsxs)(t.p,{children:["Database location: By default the polkadot binary runs as user polkadot and creates ",(0,a.jsx)(t.code,{children:".local/share/polkadot"})," in the users homedirectory. So for user polkadot (the default when installing from apt) that is ",(0,a.jsx)(t.code,{children:"/home/polkadot/.local/share/polkadot"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["This can be changed with ",(0,a.jsx)(t.code,{children:"--base-path"})," so for example ",(0,a.jsx)(t.code,{children:"--base-path /home/polkadot"})," or ",(0,a.jsx)(t.code,{children:"--base-path /home/polkadot/myvalidator"})," or whatever you prefer."]}),"\n",(0,a.jsx)(t.p,{children:"To delete the old database, restore a new kusama paritydb database snapshot for your node with a default install:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"su - polkadot -s /bin/bash\nrm -fr /home/polkadot/.local/share/polkadot/chains/ksmcc3\nmkdir -p /home/polkadot/.local/share/polkadot/chains/ksmcc3\ncurl -o - -L http://snapshot.stakeworld.io/paritydb-ksmcc3.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/ksmcc3\n"})}),"\n",(0,a.jsx)(t.p,{children:"You can check the startup by running the binary as user polkadot and see if it accepts the database or throws any errors:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"su - polkadot -s /bin/bash\npolkadot --chain kusama --database paritydb \n"})}),"\n",(0,a.jsx)(t.h3,{id:"edit-the-systemctl-startup-script",children:"Edit the systemctl startup script"}),"\n",(0,a.jsxs)(t.p,{children:["Edit the default service script and add for example ",(0,a.jsx)(t.code,{children:"--database paritydb --chain kusama"}),":"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:'su -\nvi /usr/lib/systemd/system/polkadot.service"\nsystemctl daemon-reload\nsystemctl retart polkadot\nsystemctl enable polkadot\n'})}),"\n",(0,a.jsx)(t.p,{children:"Or create a new script by copying the default service script:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"su -\ncp /usr/lib/systemd/system/polkadot.service /etc/systemd/system/validator.service\nvi /etc/systemd/system/validator.service\n"})}),"\n",(0,a.jsx)(t.p,{children:"You can edit settings at wish, changing ports and settings at will."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-config",children:"[Service]\nExecStart=/usr/bin/polkadot --chain kusama --name validator --validator --prometheus-external --base-path /home/polkadot --database paritydb --telemetry-url 'wss://telemetry.polkadot.io/submit/ 1' \n"})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"systemctl daemon-reload\nsystemctl start validator\nsystemctl enable validator\n"})}),"\n",(0,a.jsx)(t.admonition,{type:"caution",children:(0,a.jsxs)(t.p,{children:['If you installed as root you will get an error "failed to create a test file: Permission denied". You can solve this by running ',(0,a.jsx)(t.code,{children:"chown -R polkadot:polkadot DBDIR"})]})}),"\n",(0,a.jsx)(t.h2,{id:"restore",children:"Restore:"}),"\n",(0,a.jsxs)(t.p,{children:["Best run the commands as user polkadot (",(0,a.jsx)(t.code,{children:"su - polkadot -s /bin/bash"}),") or when running as root do a ",(0,a.jsx)(t.code,{children:"chown polkadot:polkadot <dbdir>"}),"). Of course change the part after ",(0,a.jsx)(t.code,{children:"-C"})," to your location."]}),"\n",(0,a.jsx)(t.h3,{id:"generic-command",children:"Generic command"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"curl -o - -L http://snapshot.stakeworld.io/<link> | lz4 -c -d - | tar -x -C <location>\n"})}),"\n",(0,a.jsx)(t.p,{children:"For example paritydb kusama"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"curl -o - -L http://snapshot.stakeworld.io/paritydb-ksmcc3.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/ksmcc3\n"})}),"\n",(0,a.jsx)(t.p,{children:"For example rocksdb polkadot"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"curl -o - -L http://snapshot.stakeworld.io/rocksdb-polkadot.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/polkadot\n"})})]})}function h(e={}){const{wrapper:t}={...(0,d.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},9735:(e,t,s)=>{s.d(t,{Z:()=>a});const a="data:image/png;base64,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"},1151:(e,t,s)=>{s.d(t,{Z:()=>r,a:()=>n});var a=s(7294);const d={},o=a.createContext(d);function n(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:n(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);