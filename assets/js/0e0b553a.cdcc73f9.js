"use strict";(self.webpackChunkstakeworld=self.webpackChunkstakeworld||[]).push([[669],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>m});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},o=Object.keys(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var i=n.createContext({}),p=function(t){var e=n.useContext(i),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},d=function(t){var e=p(t.components);return n.createElement(i.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,o=t.originalType,i=t.parentName,d=s(t,["components","mdxType","originalType","parentName"]),c=p(a),m=r,k=c["".concat(i,".").concat(m)]||c[m]||u[m]||o;return a?n.createElement(k,l(l({ref:e},d),{},{components:a})):n.createElement(k,l({ref:e},d))}));function m(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=a.length,l=new Array(o);l[0]=c;var s={};for(var i in e)hasOwnProperty.call(e,i)&&(s[i]=e[i]);s.originalType=t,s.mdxType="string"==typeof t?t:r,l[1]=s;for(var p=2;p<o;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},3025:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=a(3117),r=(a(7294),a(3905));const o={id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",slug:"/snapshot",sidebar_position:3,keywords:["snapshots","snapshot","kusama snapshot","polkadot snapshot","rocksdb","paritydb","pruning","polkadot","kusama"]},l=void 0,s={unversionedId:"snapshot",id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",source:"@site/docs/snapshot.mdx",sourceDirName:".",slug:"/snapshot",permalink:"/docs/snapshot",draft:!1,editUrl:"https://github.com/stakeworld/website/edit/master/docs/snapshot.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",slug:"/snapshot",sidebar_position:3,keywords:["snapshots","snapshot","kusama snapshot","polkadot snapshot","rocksdb","paritydb","pruning","polkadot","kusama"]},sidebar:"tutorialSidebar",previous:{title:"Pool",permalink:"/docs/pool"},next:{title:"Bootnodes",permalink:"/docs/bootnode"}},i={},p=[{value:"Automatic install",id:"automatic-install",level:2},{value:"Manual install",id:"manual-install",level:2},{value:"Setup a validator node",id:"setup-a-validator-node",level:3},{value:"Install the database",id:"install-the-database",level:3},{value:"Edit the systemctl startup script",id:"edit-the-systemctl-startup-script",level:3},{value:"Different databases:",id:"different-databases",level:2},{value:"Paritydb kusama",id:"paritydb-kusama",level:3},{value:"Paritydb polkadot",id:"paritydb-polkadot",level:3}],d={toc:p};function u(t){let{components:e,...o}=t;return(0,r.kt)("wrapper",(0,n.Z)({},d,o,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Last update: Sat 08 Jul"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},"Chain"),(0,r.kt)("th",{parentName:"tr",align:null},"Database"),(0,r.kt)("th",{parentName:"tr",align:null},"Format"),(0,r.kt)("th",{parentName:"tr",align:null},"Blockheight"),(0,r.kt)("th",{parentName:"tr",align:null},"Snapshot"),(0,r.kt)("th",{parentName:"tr",align:null},"Full"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://snapshot.stakeworld.io/paritydb-ksmcc3.lz4"},"direct link")),(0,r.kt)("td",{parentName:"tr",align:null},"ksmcc3"),(0,r.kt)("td",{parentName:"tr",align:null},"paritydb"),(0,r.kt)("td",{parentName:"tr",align:null},"pruned"),(0,r.kt)("td",{parentName:"tr",align:null},"18689778"),(0,r.kt)("td",{parentName:"tr",align:null},"261G"),(0,r.kt)("td",{parentName:"tr",align:null},"271G")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://snapshot.stakeworld.io/paritydb-polkadot.lz4"},"direct link")),(0,r.kt)("td",{parentName:"tr",align:null},"polkadot"),(0,r.kt)("td",{parentName:"tr",align:null},"paritydb"),(0,r.kt)("td",{parentName:"tr",align:null},"pruned"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"201G"),(0,r.kt)("td",{parentName:"tr",align:null},"207G")))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"snapsize",src:a(2307).Z,width:"800",height:"300"})),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Snapshots are compressed backups of the database directory of a polkadot or kusama node. If you start a node for the first time it will start building the database from scratch, which will take a few days, depending on network speed. If you download an up to date database snapshot your node will be up and running quicker; under an hour or a few hours, depending on network speed."),(0,r.kt)("p",{parentName:"admonition"},"Recently the warp sync option is becoming more developed and popular. If you start the node with an empty database and the option ",(0,r.kt)("inlineCode",{parentName:"p"},"--sync warp")," the node will first download the finality proofs after which it will be ready to validate and in the background download the remaining blocks. "),(0,r.kt)("p",{parentName:"admonition"},"In the future this will probably become the default for syncing a database and snapshots may become obsolete."),(0,r.kt)("p",{parentName:"admonition"},"For now the snapshots are available for kusama ",(0,r.kt)("inlineCode",{parentName:"p"},"--chain ksmcc3")," and polkadot ",(0,r.kt)("inlineCode",{parentName:"p"},"--chain polkadot")," in the paritydb ",(0,r.kt)("inlineCode",{parentName:"p"},"--database paritydb")," database format. They are pruned with ",(0,r.kt)("inlineCode",{parentName:"p"},"--state-pruning 256")," (default), which is sufficient for a validator node.")),(0,r.kt)("h2",{id:"automatic-install"},"Automatic install"),(0,r.kt)("p",null,"The following script can restore a snapshot for a quickstart. If you want you can first review it on ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/stakeworld/stakeworld-scripts/blob/master/node-install.sh"},"github"),'. You can choose "snapinstall" for a snapshot restore or "nodeinstall" to install a complete node. The script will ask some questions and create an install or restore script which you can review before executing.'),(0,r.kt)("p",null,"The script is for ubuntu/debian flavoured servers."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o- -L https://raw.githubusercontent.com/stakeworld/stakeworld-scripts/master/node-install.sh | bash\n")),(0,r.kt)("h2",{id:"manual-install"},"Manual install"),(0,r.kt)("h3",{id:"setup-a-validator-node"},"Setup a validator node"),(0,r.kt)("p",null,"Setting up a validator node is covered ",(0,r.kt)("a",{parentName:"p",href:"./validate"},"here"),". The default apt install creates an user polkadot with a home directory ",(0,r.kt)("inlineCode",{parentName:"p"},"/home/polkadot")," and a default service script ",(0,r.kt)("inlineCode",{parentName:"p"},"/usr/lib/systemd/system/polkadot.service"),"."),(0,r.kt)("h3",{id:"install-the-database"},"Install the database"),(0,r.kt)("p",null,"Database location: By default the polkadot binary runs as user polkadot and creates ",(0,r.kt)("inlineCode",{parentName:"p"},".local/share/polkadot")," in the users homedirectory. So for user polkadot (the default when installing from apt) that is ",(0,r.kt)("inlineCode",{parentName:"p"},"/home/polkadot/.local/share/polkadot"),"."),(0,r.kt)("p",null,"This can be changed with ",(0,r.kt)("inlineCode",{parentName:"p"},"--base-path")," so for example ",(0,r.kt)("inlineCode",{parentName:"p"},"--base-path /home/polkadot")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"--base-path /home/polkadot/myvalidator")," or whatever you prefer."),(0,r.kt)("p",null,"To delete the old database, restore a new kusama paritydb database snapshot for your node with a default install:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"su - polkadot -s /bin/bash\nrm -fr /home/polkadot/.local/share/polkadot/chains/ksmcc3\nmkdir -p /home/polkadot/.local/share/polkadot/chains/ksmcc3\ncurl -o - -L http://snapshot.stakeworld.io/paritydb-ksmcc3.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/ksmcc3\n")),(0,r.kt)("p",null,"You can check the startup by running the binary as user polkadot and see if it accepts the database or throws any errors:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"su - polkadot -s /bin/bash\npolkadot --chain kusama --database paritydb \n")),(0,r.kt)("h3",{id:"edit-the-systemctl-startup-script"},"Edit the systemctl startup script"),(0,r.kt)("p",null,"Edit the default service script and add for example ",(0,r.kt)("inlineCode",{parentName:"p"},"--database paritydb --chain kusama"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'su -\nvi /usr/lib/systemd/system/polkadot.service"\nsystemctl daemon-reload\nsystemctl retart polkadot\nsystemctl enable polkadot\n')),(0,r.kt)("p",null,"Or create a new script by copying the default service script:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"su -\ncp /usr/lib/systemd/system/polkadot.service /etc/systemd/system/validator.service\nvi /etc/systemd/system/validator.service\n")),(0,r.kt)("p",null,"You can edit settings at wish, changing ports and settings at will."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-config"},"[Service]\nExecStart=/usr/bin/polkadot --chain kusama --name validator --validator --state-pruning 1000 --prometheus-external --base-path /home/polkadot --database paritydb --telemetry-url 'wss://telemetry.polkadot.io/submit/ 1' \n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl daemon-reload\nsystemctl start validator\nsystemctl enable validator\n")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},'If you installed as root you will get an error "failed to create a test file: Permission denied". You can solve this by running ',(0,r.kt)("inlineCode",{parentName:"p"},"chown -R polkadot:polkadot DBDIR"))),(0,r.kt)("h2",{id:"different-databases"},"Different databases:"),(0,r.kt)("p",null,"Below restore commands for different databases to the default directory. Best run them as user polkadot (",(0,r.kt)("inlineCode",{parentName:"p"},"su - polkadot -s /bin/bash"),") or when running as root do a ",(0,r.kt)("inlineCode",{parentName:"p"},"chown polkadot:polkadot <dbdir>"),") or when running as root do a ",(0,r.kt)("inlineCode",{parentName:"p"},"chown polkadot:polkadot <dbdir>"),". Of course change the part after ",(0,r.kt)("inlineCode",{parentName:"p"},"-C")," when installing to another location."),(0,r.kt)("h3",{id:"paritydb-kusama"},"Paritydb kusama"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o - -L http://snapshot.stakeworld.io/paritydb-ksmcc3.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/ksmcc3\n")),(0,r.kt)("h3",{id:"paritydb-polkadot"},"Paritydb polkadot"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o - -L http://snapshot.stakeworld.io/paritydb-polkadot.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/polkadot\n")))}u.isMDXComponent=!0},2307:(t,e,a)=>{a.d(e,{Z:()=>n});const n="data:image/png;base64,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"}}]);