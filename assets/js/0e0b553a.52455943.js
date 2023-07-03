"use strict";(self.webpackChunkstakeworld=self.webpackChunkstakeworld||[]).push([[669],{3905:(t,a,e)=>{e.d(a,{Zo:()=>p,kt:()=>A});var n=e(7294);function o(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}function r(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,n)}return e}function l(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?r(Object(e),!0).forEach((function(a){o(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):r(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function s(t,a){if(null==t)return{};var e,n,o=function(t,a){if(null==t)return{};var e,n,o={},r=Object.keys(t);for(n=0;n<r.length;n++)e=r[n],a.indexOf(e)>=0||(o[e]=t[e]);return o}(t,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)e=r[n],a.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(o[e]=t[e])}return o}var i=n.createContext({}),d=function(t){var a=n.useContext(i),e=a;return t&&(e="function"==typeof t?t(a):l(l({},a),t)),e},p=function(t){var a=d(t.components);return n.createElement(i.Provider,{value:a},t.children)},u={inlineCode:"code",wrapper:function(t){var a=t.children;return n.createElement(n.Fragment,{},a)}},c=n.forwardRef((function(t,a){var e=t.components,o=t.mdxType,r=t.originalType,i=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),c=d(e),A=o,m=c["".concat(i,".").concat(A)]||c[A]||u[A]||r;return e?n.createElement(m,l(l({ref:a},p),{},{components:e})):n.createElement(m,l({ref:a},p))}));function A(t,a){var e=arguments,o=a&&a.mdxType;if("string"==typeof t||o){var r=e.length,l=new Array(r);l[0]=c;var s={};for(var i in a)hasOwnProperty.call(a,i)&&(s[i]=a[i]);s.originalType=t,s.mdxType="string"==typeof t?t:o,l[1]=s;for(var d=2;d<r;d++)l[d]=e[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,e)}c.displayName="MDXCreateElement"},3025:(t,a,e)=>{e.r(a),e.d(a,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var n=e(3117),o=(e(7294),e(3905));const r={id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",slug:"/snapshot",sidebar_position:3,keywords:["snapshots","snapshot","kusama snapshot","polkadot snapshot","rocksdb","paritydb","pruning","polkadot","kusama"]},l=void 0,s={unversionedId:"snapshot",id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",source:"@site/docs/snapshot.mdx",sourceDirName:".",slug:"/snapshot",permalink:"/docs/snapshot",draft:!1,editUrl:"https://github.com/stakeworld/website/edit/master/docs/snapshot.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",slug:"/snapshot",sidebar_position:3,keywords:["snapshots","snapshot","kusama snapshot","polkadot snapshot","rocksdb","paritydb","pruning","polkadot","kusama"]},sidebar:"tutorialSidebar",previous:{title:"Pool",permalink:"/docs/pool"},next:{title:"Bootnodes",permalink:"/docs/bootnode"}},i={},d=[{value:"Automatic install",id:"automatic-install",level:2},{value:"Manual install",id:"manual-install",level:2},{value:"Setup a validator node",id:"setup-a-validator-node",level:3},{value:"Install the database",id:"install-the-database",level:3},{value:"Edit the systemctl startup script",id:"edit-the-systemctl-startup-script",level:3},{value:"Different databases:",id:"different-databases",level:2},{value:"Paritydb kusama",id:"paritydb-kusama",level:3},{value:"Paritydb polkadot",id:"paritydb-polkadot",level:3}],p={toc:d};function u(t){let{components:a,...r}=t;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Last update: Mon 03 Jul"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null}),(0,o.kt)("th",{parentName:"tr",align:null},"Chain"),(0,o.kt)("th",{parentName:"tr",align:null},"Database"),(0,o.kt)("th",{parentName:"tr",align:null},"Format"),(0,o.kt)("th",{parentName:"tr",align:null},"Blockheight"),(0,o.kt)("th",{parentName:"tr",align:null},"Snapshot"),(0,o.kt)("th",{parentName:"tr",align:null},"Full"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"http://snapshot.stakeworld.io/paritydb-ksmcc3.lz4"},"direct link")),(0,o.kt)("td",{parentName:"tr",align:null},"ksmcc3"),(0,o.kt)("td",{parentName:"tr",align:null},"paritydb"),(0,o.kt)("td",{parentName:"tr",align:null},"pruned"),(0,o.kt)("td",{parentName:"tr",align:null},"18619251"),(0,o.kt)("td",{parentName:"tr",align:null},"259G"),(0,o.kt)("td",{parentName:"tr",align:null},"268G")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"http://snapshot.stakeworld.io/paritydb-polkadot.lz4"},"direct link")),(0,o.kt)("td",{parentName:"tr",align:null},"polkadot"),(0,o.kt)("td",{parentName:"tr",align:null},"paritydb"),(0,o.kt)("td",{parentName:"tr",align:null},"pruned"),(0,o.kt)("td",{parentName:"tr",align:null},"16230460"),(0,o.kt)("td",{parentName:"tr",align:null},"199G"),(0,o.kt)("td",{parentName:"tr",align:null},"205G")))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"snapsize",src:e(2307).Z,width:"800",height:"300"})),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Snapshots are compressed backups of the database directory of a polkadot or kusama node. If you start a node for the first time it will start building the database from scratch, which will take a few days, depending on network speed. If you download an up to date database snapshot your node will be up and running quicker; under an hour or a few hours, depending on network speed."),(0,o.kt)("p",{parentName:"admonition"},"Recently the warp sync option is becoming more developed and popular. If you start the node with an empty database and the option ",(0,o.kt)("inlineCode",{parentName:"p"},"--sync warp")," the node will first download the finality proofs after which it will be ready to validate and in the background download the remaining blocks. "),(0,o.kt)("p",{parentName:"admonition"},"In the future this will probably become the default for syncing a database and snapshots may become obsolete."),(0,o.kt)("p",{parentName:"admonition"},"For now the snapshots are available for kusama ",(0,o.kt)("inlineCode",{parentName:"p"},"--chain ksmcc3")," and polkadot ",(0,o.kt)("inlineCode",{parentName:"p"},"--chain polkadot")," in the paritydb ",(0,o.kt)("inlineCode",{parentName:"p"},"--database paritydb")," database format. They are pruned with ",(0,o.kt)("inlineCode",{parentName:"p"},"--state-pruning 256")," (default), which is sufficient for a validator node.")),(0,o.kt)("h2",{id:"automatic-install"},"Automatic install"),(0,o.kt)("p",null,"The following script can restore a snapshot for a quickstart. If you want you can first review it on ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/stakeworld/stakeworld-scripts/blob/master/node-install.sh"},"github"),'. You can choose "snapinstall" for a snapshot restore or "nodeinstall" to install a complete node. The script will ask some questions and create an install or restore script which you can review before executing.'),(0,o.kt)("p",null,"The script is for ubuntu/debian flavoured servers."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o- -L https://raw.githubusercontent.com/stakeworld/stakeworld-scripts/master/node-install.sh | bash\n")),(0,o.kt)("h2",{id:"manual-install"},"Manual install"),(0,o.kt)("h3",{id:"setup-a-validator-node"},"Setup a validator node"),(0,o.kt)("p",null,"Setting up a validator node is covered ",(0,o.kt)("a",{parentName:"p",href:"./validate"},"here"),". The default apt install creates an user polkadot with a home directory ",(0,o.kt)("inlineCode",{parentName:"p"},"/home/polkadot")," and a default service script ",(0,o.kt)("inlineCode",{parentName:"p"},"/usr/lib/systemd/system/polkadot.service"),"."),(0,o.kt)("h3",{id:"install-the-database"},"Install the database"),(0,o.kt)("p",null,"Database location: By default the polkadot binary runs as user polkadot and creates ",(0,o.kt)("inlineCode",{parentName:"p"},".local/share/polkadot")," in the users homedirectory. So for user polkadot (the default when installing from apt) that is ",(0,o.kt)("inlineCode",{parentName:"p"},"/home/polkadot/.local/share/polkadot"),"."),(0,o.kt)("p",null,"This can be changed with ",(0,o.kt)("inlineCode",{parentName:"p"},"--base-path")," so for example ",(0,o.kt)("inlineCode",{parentName:"p"},"--base-path /home/polkadot")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"--base-path /home/polkadot/myvalidator")," or whatever you prefer."),(0,o.kt)("p",null,"To delete the old database, restore a new kusama paritydb database snapshot for your node with a default install:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"su - polkadot -s /bin/bash\nrm -fr /home/polkadot/.local/share/polkadot/chains/ksmcc3\nmkdir -p /home/polkadot/.local/share/polkadot/chains/ksmcc3\ncurl -o - -L http://snapshot.stakeworld.io/paritydb-ksmcc3.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/ksmcc3\n")),(0,o.kt)("p",null,"You can check the startup by running the binary as user polkadot and see if it accepts the database or throws any errors:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"su - polkadot -s /bin/bash\npolkadot --chain kusama --database paritydb \n")),(0,o.kt)("h3",{id:"edit-the-systemctl-startup-script"},"Edit the systemctl startup script"),(0,o.kt)("p",null,"Edit the default service script and add for example ",(0,o.kt)("inlineCode",{parentName:"p"},"--database paritydb --chain kusama"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'su -\nvi /usr/lib/systemd/system/polkadot.service"\nsystemctl daemon-reload\nsystemctl retart polkadot\nsystemctl enable polkadot\n')),(0,o.kt)("p",null,"Or create a new script by copying the default service script:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"su -\ncp /usr/lib/systemd/system/polkadot.service /etc/systemd/system/validator.service\nvi /etc/systemd/system/validator.service\n")),(0,o.kt)("p",null,"You can edit settings at wish, changing ports and settings at will."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-config"},"[Service]\nExecStart=/usr/bin/polkadot --chain kusama --name validator --validator --state-pruning 1000 --prometheus-external --base-path /home/polkadot --database paritydb --telemetry-url 'wss://telemetry.polkadot.io/submit/ 1' \n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl daemon-reload\nsystemctl start validator\nsystemctl enable validator\n")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},'If you installed as root you will get an error "failed to create a test file: Permission denied". You can solve this by running ',(0,o.kt)("inlineCode",{parentName:"p"},"chown -R polkadot:polkadot DBDIR"))),(0,o.kt)("h2",{id:"different-databases"},"Different databases:"),(0,o.kt)("p",null,"Below restore commands for different databases to the default directory. Best run them as user polkadot (",(0,o.kt)("inlineCode",{parentName:"p"},"su - polkadot -s /bin/bash"),") or when running as root do a ",(0,o.kt)("inlineCode",{parentName:"p"},"chown polkadot:polkadot <dbdir>"),") or when running as root do a ",(0,o.kt)("inlineCode",{parentName:"p"},"chown polkadot:polkadot <dbdir>"),". Of course change the part after ",(0,o.kt)("inlineCode",{parentName:"p"},"-C")," when installing to another location."),(0,o.kt)("h3",{id:"paritydb-kusama"},"Paritydb kusama"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o - -L http://snapshot.stakeworld.io/paritydb-ksmcc3.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/ksmcc3\n")),(0,o.kt)("h3",{id:"paritydb-polkadot"},"Paritydb polkadot"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o - -L http://snapshot.stakeworld.io/paritydb-polkadot.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/polkadot\n")))}u.isMDXComponent=!0},2307:(t,a,e)=>{e.d(a,{Z:()=>n});const n="data:image/png;base64,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"}}]);