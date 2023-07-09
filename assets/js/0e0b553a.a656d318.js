"use strict";(self.webpackChunkstakeworld=self.webpackChunkstakeworld||[]).push([[669],{3905:(t,a,e)=>{e.d(a,{Zo:()=>p,kt:()=>m});var n=e(7294);function o(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}function r(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,n)}return e}function l(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?r(Object(e),!0).forEach((function(a){o(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):r(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function s(t,a){if(null==t)return{};var e,n,o=function(t,a){if(null==t)return{};var e,n,o={},r=Object.keys(t);for(n=0;n<r.length;n++)e=r[n],a.indexOf(e)>=0||(o[e]=t[e]);return o}(t,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)e=r[n],a.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(o[e]=t[e])}return o}var i=n.createContext({}),d=function(t){var a=n.useContext(i),e=a;return t&&(e="function"==typeof t?t(a):l(l({},a),t)),e},p=function(t){var a=d(t.components);return n.createElement(i.Provider,{value:a},t.children)},c={inlineCode:"code",wrapper:function(t){var a=t.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(t,a){var e=t.components,o=t.mdxType,r=t.originalType,i=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),u=d(e),m=o,k=u["".concat(i,".").concat(m)]||u[m]||c[m]||r;return e?n.createElement(k,l(l({ref:a},p),{},{components:e})):n.createElement(k,l({ref:a},p))}));function m(t,a){var e=arguments,o=a&&a.mdxType;if("string"==typeof t||o){var r=e.length,l=new Array(r);l[0]=u;var s={};for(var i in a)hasOwnProperty.call(a,i)&&(s[i]=a[i]);s.originalType=t,s.mdxType="string"==typeof t?t:o,l[1]=s;for(var d=2;d<r;d++)l[d]=e[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,e)}u.displayName="MDXCreateElement"},3025:(t,a,e)=>{e.r(a),e.d(a,{assets:()=>i,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var n=e(3117),o=(e(7294),e(3905));const r={id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",slug:"/snapshot",sidebar_position:3,keywords:["snapshots","snapshot","kusama snapshot","polkadot snapshot","rocksdb","paritydb","pruning","polkadot","kusama"]},l=void 0,s={unversionedId:"snapshot",id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",source:"@site/docs/snapshot.mdx",sourceDirName:".",slug:"/snapshot",permalink:"/docs/snapshot",draft:!1,editUrl:"https://github.com/stakeworld/website/edit/master/docs/snapshot.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",slug:"/snapshot",sidebar_position:3,keywords:["snapshots","snapshot","kusama snapshot","polkadot snapshot","rocksdb","paritydb","pruning","polkadot","kusama"]},sidebar:"tutorialSidebar",previous:{title:"Pool",permalink:"/docs/pool"},next:{title:"Bootnodes",permalink:"/docs/bootnode"}},i={},d=[{value:"Automatic install",id:"automatic-install",level:2},{value:"Manual install",id:"manual-install",level:2},{value:"Setup a validator node",id:"setup-a-validator-node",level:3},{value:"Install the database",id:"install-the-database",level:3},{value:"Edit the systemctl startup script",id:"edit-the-systemctl-startup-script",level:3},{value:"Different databases:",id:"different-databases",level:2},{value:"Paritydb kusama",id:"paritydb-kusama",level:3},{value:"Paritydb polkadot",id:"paritydb-polkadot",level:3}],p={toc:d};function c(t){let{components:a,...e}=t;return(0,o.kt)("wrapper",(0,n.Z)({},p,e,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Last update: Sat 08 Jul"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null}),(0,o.kt)("th",{parentName:"tr",align:null},"Chain"),(0,o.kt)("th",{parentName:"tr",align:null},"Database"),(0,o.kt)("th",{parentName:"tr",align:null},"Format"),(0,o.kt)("th",{parentName:"tr",align:null},"Snapshot"),(0,o.kt)("th",{parentName:"tr",align:null},"Full"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"http://snapshot.stakeworld.io/paritydb-ksmcc3.lz4"},"direct link")),(0,o.kt)("td",{parentName:"tr",align:null},"ksmcc3"),(0,o.kt)("td",{parentName:"tr",align:null},"paritydb"),(0,o.kt)("td",{parentName:"tr",align:null},"pruned"),(0,o.kt)("td",{parentName:"tr",align:null},"261G"),(0,o.kt)("td",{parentName:"tr",align:null},"271G")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"http://snapshot.stakeworld.io/paritydb-polkadot.lz4"},"direct link")),(0,o.kt)("td",{parentName:"tr",align:null},"polkadot"),(0,o.kt)("td",{parentName:"tr",align:null},"paritydb"),(0,o.kt)("td",{parentName:"tr",align:null},"pruned"),(0,o.kt)("td",{parentName:"tr",align:null},"201G"),(0,o.kt)("td",{parentName:"tr",align:null},"207G")))),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Snapshots are compressed backups of the database directory of a polkadot or kusama node. If you start a node for the first time it will start building the database from scratch, which will take a few days, depending on network speed. If you download an up to date database snapshot your node will be up and running quicker; under an hour or a few hours, depending on network speed."),(0,o.kt)("p",{parentName:"admonition"},"Recently the warp sync option is becoming more developed and popular. If you start the node with an empty database and the option ",(0,o.kt)("inlineCode",{parentName:"p"},"--sync warp")," the node will first download the finality proofs after which it will be ready to validate and in the background download the remaining blocks. "),(0,o.kt)("p",{parentName:"admonition"},"In the future this will probably become the default for syncing a database and snapshots may become obsolete."),(0,o.kt)("p",{parentName:"admonition"},"For now the snapshots are available for kusama ",(0,o.kt)("inlineCode",{parentName:"p"},"--chain ksmcc3")," and polkadot ",(0,o.kt)("inlineCode",{parentName:"p"},"--chain polkadot")," in the paritydb ",(0,o.kt)("inlineCode",{parentName:"p"},"--database paritydb")," database format. They are pruned with ",(0,o.kt)("inlineCode",{parentName:"p"},"--state-pruning 256")," (default), which is sufficient for a validator node.")),(0,o.kt)("h2",{id:"automatic-install"},"Automatic install"),(0,o.kt)("p",null,"The following script can restore a snapshot for a quickstart. If you want you can first review it on ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/stakeworld/stakeworld-scripts/blob/master/node-install.sh"},"github"),'. You can choose "snapinstall" for a snapshot restore or "nodeinstall" to install a complete node. The script will ask some questions and create an install or restore script which you can review before executing.'),(0,o.kt)("p",null,"The script is for ubuntu/debian flavoured servers."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o- -L https://raw.githubusercontent.com/stakeworld/stakeworld-scripts/master/node-install.sh | bash\n")),(0,o.kt)("h2",{id:"manual-install"},"Manual install"),(0,o.kt)("h3",{id:"setup-a-validator-node"},"Setup a validator node"),(0,o.kt)("p",null,"Setting up a validator node is covered ",(0,o.kt)("a",{parentName:"p",href:"./validate"},"here"),". The default apt install creates an user polkadot with a home directory ",(0,o.kt)("inlineCode",{parentName:"p"},"/home/polkadot")," and a default service script ",(0,o.kt)("inlineCode",{parentName:"p"},"/usr/lib/systemd/system/polkadot.service"),"."),(0,o.kt)("h3",{id:"install-the-database"},"Install the database"),(0,o.kt)("p",null,"Database location: By default the polkadot binary runs as user polkadot and creates ",(0,o.kt)("inlineCode",{parentName:"p"},".local/share/polkadot")," in the users homedirectory. So for user polkadot (the default when installing from apt) that is ",(0,o.kt)("inlineCode",{parentName:"p"},"/home/polkadot/.local/share/polkadot"),"."),(0,o.kt)("p",null,"This can be changed with ",(0,o.kt)("inlineCode",{parentName:"p"},"--base-path")," so for example ",(0,o.kt)("inlineCode",{parentName:"p"},"--base-path /home/polkadot")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"--base-path /home/polkadot/myvalidator")," or whatever you prefer."),(0,o.kt)("p",null,"To delete the old database, restore a new kusama paritydb database snapshot for your node with a default install:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"su - polkadot -s /bin/bash\nrm -fr /home/polkadot/.local/share/polkadot/chains/ksmcc3\nmkdir -p /home/polkadot/.local/share/polkadot/chains/ksmcc3\ncurl -o - -L http://snapshot.stakeworld.io/paritydb-ksmcc3.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/ksmcc3\n")),(0,o.kt)("p",null,"You can check the startup by running the binary as user polkadot and see if it accepts the database or throws any errors:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"su - polkadot -s /bin/bash\npolkadot --chain kusama --database paritydb \n")),(0,o.kt)("h3",{id:"edit-the-systemctl-startup-script"},"Edit the systemctl startup script"),(0,o.kt)("p",null,"Edit the default service script and add for example ",(0,o.kt)("inlineCode",{parentName:"p"},"--database paritydb --chain kusama"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'su -\nvi /usr/lib/systemd/system/polkadot.service"\nsystemctl daemon-reload\nsystemctl retart polkadot\nsystemctl enable polkadot\n')),(0,o.kt)("p",null,"Or create a new script by copying the default service script:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"su -\ncp /usr/lib/systemd/system/polkadot.service /etc/systemd/system/validator.service\nvi /etc/systemd/system/validator.service\n")),(0,o.kt)("p",null,"You can edit settings at wish, changing ports and settings at will."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-config"},"[Service]\nExecStart=/usr/bin/polkadot --chain kusama --name validator --validator --state-pruning 1000 --prometheus-external --base-path /home/polkadot --database paritydb --telemetry-url 'wss://telemetry.polkadot.io/submit/ 1' \n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl daemon-reload\nsystemctl start validator\nsystemctl enable validator\n")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},'If you installed as root you will get an error "failed to create a test file: Permission denied". You can solve this by running ',(0,o.kt)("inlineCode",{parentName:"p"},"chown -R polkadot:polkadot DBDIR"))),(0,o.kt)("h2",{id:"different-databases"},"Different databases:"),(0,o.kt)("p",null,"Below restore commands for different databases to the default directory. Best run them as user polkadot (",(0,o.kt)("inlineCode",{parentName:"p"},"su - polkadot -s /bin/bash"),") or when running as root do a ",(0,o.kt)("inlineCode",{parentName:"p"},"chown polkadot:polkadot <dbdir>"),") or when running as root do a ",(0,o.kt)("inlineCode",{parentName:"p"},"chown polkadot:polkadot <dbdir>"),". Of course change the part after ",(0,o.kt)("inlineCode",{parentName:"p"},"-C")," when installing to another location."),(0,o.kt)("h3",{id:"paritydb-kusama"},"Paritydb kusama"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o - -L http://snapshot.stakeworld.io/paritydb-ksmcc3.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/ksmcc3\n")),(0,o.kt)("h3",{id:"paritydb-polkadot"},"Paritydb polkadot"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o - -L http://snapshot.stakeworld.io/paritydb-polkadot.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/polkadot\n")))}c.isMDXComponent=!0}}]);