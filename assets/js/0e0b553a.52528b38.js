"use strict";(self.webpackChunkstakeworld=self.webpackChunkstakeworld||[]).push([[669],{3905:(t,a,e)=>{e.d(a,{Zo:()=>p,kt:()=>m});var n=e(7294);function r(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}function l(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?l(Object(e),!0).forEach((function(a){r(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):l(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function o(t,a){if(null==t)return{};var e,n,r=function(t,a){if(null==t)return{};var e,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)e=l[n],a.indexOf(e)>=0||(r[e]=t[e]);return r}(t,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)e=l[n],a.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}var s=n.createContext({}),i=function(t){var a=n.useContext(s),e=a;return t&&(e="function"==typeof t?t(a):d(d({},a),t)),e},p=function(t){var a=i(t.components);return n.createElement(s.Provider,{value:a},t.children)},u={inlineCode:"code",wrapper:function(t){var a=t.children;return n.createElement(n.Fragment,{},a)}},c=n.forwardRef((function(t,a){var e=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),c=i(e),m=r,k=c["".concat(s,".").concat(m)]||c[m]||u[m]||l;return e?n.createElement(k,d(d({ref:a},p),{},{components:e})):n.createElement(k,d({ref:a},p))}));function m(t,a){var e=arguments,r=a&&a.mdxType;if("string"==typeof t||r){var l=e.length,d=new Array(l);d[0]=c;var o={};for(var s in a)hasOwnProperty.call(a,s)&&(o[s]=a[s]);o.originalType=t,o.mdxType="string"==typeof t?t:r,d[1]=o;for(var i=2;i<l;i++)d[i]=e[i];return n.createElement.apply(null,d)}return n.createElement.apply(null,e)}c.displayName="MDXCreateElement"},3025:(t,a,e)=>{e.r(a),e.d(a,{assets:()=>s,contentTitle:()=>d,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>i});var n=e(3117),r=(e(7294),e(3905));const l={id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",slug:"/snapshot",sidebar_position:3,keywords:["snapshots","snapshot","kusama snapshot","polkadot snapshot","rocksdb","paritydb","pruning","polkadot","kusama"]},d=void 0,o={unversionedId:"snapshot",id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",source:"@site/docs/snapshot.mdx",sourceDirName:".",slug:"/snapshot",permalink:"/docs/snapshot",draft:!1,editUrl:"https://github.com/stakeworld/website/edit/master/docs/snapshot.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",slug:"/snapshot",sidebar_position:3,keywords:["snapshots","snapshot","kusama snapshot","polkadot snapshot","rocksdb","paritydb","pruning","polkadot","kusama"]},sidebar:"tutorialSidebar",previous:{title:"Pool",permalink:"/docs/pool"},next:{title:"Bootnodes",permalink:"/docs/bootnode"}},s={},i=[{value:"Database size",id:"database-size",level:2},{value:"Automatic install",id:"automatic-install",level:2},{value:"Manual install",id:"manual-install",level:2},{value:"Setup a validator node",id:"setup-a-validator-node",level:3},{value:"Install the database",id:"install-the-database",level:3},{value:"Edit the systemctl startup script",id:"edit-the-systemctl-startup-script",level:3},{value:"Different databases:",id:"different-databases",level:2},{value:"Paritydb kusama",id:"paritydb-kusama",level:3},{value:"Paritydb polkadot",id:"paritydb-polkadot",level:3}],p={toc:i};function u(t){let{components:a,...l}=t;return(0,r.kt)("wrapper",(0,n.Z)({},p,l,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Last update: Wed 07 Jun"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},"Chain"),(0,r.kt)("th",{parentName:"tr",align:null},"Database"),(0,r.kt)("th",{parentName:"tr",align:null},"Format"),(0,r.kt)("th",{parentName:"tr",align:null},"Blockheight"),(0,r.kt)("th",{parentName:"tr",align:null},"Snapshot"),(0,r.kt)("th",{parentName:"tr",align:null},"Full"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://snapshot.stakeworld.io/paritydb-ksmcc3.lz4"},"direct link")),(0,r.kt)("td",{parentName:"tr",align:null},"ksmcc3"),(0,r.kt)("td",{parentName:"tr",align:null},"paritydb"),(0,r.kt)("td",{parentName:"tr",align:null},"pruned"),(0,r.kt)("td",{parentName:"tr",align:null},"18245630"),(0,r.kt)("td",{parentName:"tr",align:null},"245G"),(0,r.kt)("td",{parentName:"tr",align:null},"254G")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://snapshot.stakeworld.io/paritydb-polkadot.lz4"},"direct link")),(0,r.kt)("td",{parentName:"tr",align:null},"polkadot"),(0,r.kt)("td",{parentName:"tr",align:null},"paritydb"),(0,r.kt)("td",{parentName:"tr",align:null},"pruned"),(0,r.kt)("td",{parentName:"tr",align:null},"15856412"),(0,r.kt)("td",{parentName:"tr",align:null},"188G"),(0,r.kt)("td",{parentName:"tr",align:null},"194G")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"ksmcc3"),(0,r.kt)("td",{parentName:"tr",align:null},"paritydb"),(0,r.kt)("td",{parentName:"tr",align:null},"archive"),(0,r.kt)("td",{parentName:"tr",align:null},"18246089"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"1.6T")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"polkadot"),(0,r.kt)("td",{parentName:"tr",align:null},"paritydb"),(0,r.kt)("td",{parentName:"tr",align:null},"archive"),(0,r.kt)("td",{parentName:"tr",align:null},"15856614"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"1.1T")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"westend2"),(0,r.kt)("td",{parentName:"tr",align:null},"paritydb"),(0,r.kt)("td",{parentName:"tr",align:null},"archive"),(0,r.kt)("td",{parentName:"tr",align:null},"16155265"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"281G")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"statemine"),(0,r.kt)("td",{parentName:"tr",align:null},"paritydb"),(0,r.kt)("td",{parentName:"tr",align:null},"archive"),(0,r.kt)("td",{parentName:"tr",align:null},"4646730"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"91G")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"statemint"),(0,r.kt)("td",{parentName:"tr",align:null},"paritydb"),(0,r.kt)("td",{parentName:"tr",align:null},"archive"),(0,r.kt)("td",{parentName:"tr",align:null},"3924063"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"63G")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"westmint"),(0,r.kt)("td",{parentName:"tr",align:null},"paritydb"),(0,r.kt)("td",{parentName:"tr",align:null},"archive"),(0,r.kt)("td",{parentName:"tr",align:null},"4700668"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"63G")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"bridge-hub-kusama"),(0,r.kt)("td",{parentName:"tr",align:null},"paritydb"),(0,r.kt)("td",{parentName:"tr",align:null},"archive"),(0,r.kt)("td",{parentName:"tr",align:null},"970194"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"16G")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"unknown"),(0,r.kt)("td",{parentName:"tr",align:null},"paritydb"),(0,r.kt)("td",{parentName:"tr",align:null},"archive"),(0,r.kt)("td",{parentName:"tr",align:null},"182577"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"16G")))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Snapshots are compressed backups of the database directory of a polkadot or kusama node. If you start a node for the first time it will start building the database from scratch, which will take a few days, depending on network speed. If you download an up to date database snapshot your node will be up and running quicker; under an hour or a few hours, depending on network speed."),(0,r.kt)("p",{parentName:"admonition"},"Recently the warp sync option is becoming more developed and popular. If you start the node with an empty database and the option ",(0,r.kt)("inlineCode",{parentName:"p"},"--sync warp")," the node will first download the finality proofs after which it will be ready to validate and in the background download the remaining blocks. "),(0,r.kt)("p",{parentName:"admonition"},"In the future this will probably become the default for syncing a database and snapshots may become obsolete."),(0,r.kt)("p",{parentName:"admonition"},"For now the snapshots are available for kusama ",(0,r.kt)("inlineCode",{parentName:"p"},"--chain ksmcc3")," and polkadot ",(0,r.kt)("inlineCode",{parentName:"p"},"--chain polkadot")," in the paritydb ",(0,r.kt)("inlineCode",{parentName:"p"},"--database paritydb")," database format. They are pruned with ",(0,r.kt)("inlineCode",{parentName:"p"},"--state-pruning 1000"),", which is sufficient for a validator node.")),(0,r.kt)("h2",{id:"database-size"},"Database size"),(0,r.kt)("p",null,"Below a overview of database sizes.\n",(0,r.kt)("img",{alt:"snapsize",src:e(2307).Z,width:"800",height:"300"})),(0,r.kt)("h2",{id:"automatic-install"},"Automatic install"),(0,r.kt)("p",null,"The following script can restore a snapshot for a quickstart. If you want you can first review it on ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/stakeworld/stakeworld-scripts/blob/master/node-install.sh"},"github"),'. You can choose "snapinstall" for a snapshot restore or "nodeinstall" to install a complete node. The script will ask some questions and create an install or restore script which you can review before executing.'),(0,r.kt)("p",null,"The script is for ubuntu/debian flavoured servers."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o- -L https://raw.githubusercontent.com/stakeworld/stakeworld-scripts/master/node-install.sh | bash\n")),(0,r.kt)("h2",{id:"manual-install"},"Manual install"),(0,r.kt)("h3",{id:"setup-a-validator-node"},"Setup a validator node"),(0,r.kt)("p",null,"Setting up a validator node is covered ",(0,r.kt)("a",{parentName:"p",href:"./validate"},"here"),". The default apt install creates an user polkadot with a home directory ",(0,r.kt)("inlineCode",{parentName:"p"},"/home/polkadot")," and a default service script ",(0,r.kt)("inlineCode",{parentName:"p"},"/usr/lib/systemd/system/polkadot.service"),"."),(0,r.kt)("h3",{id:"install-the-database"},"Install the database"),(0,r.kt)("p",null,"Database location: By default the polkadot binary runs as user polkadot and creates ",(0,r.kt)("inlineCode",{parentName:"p"},".local/share/polkadot")," in the users homedirectory. So for user polkadot (the default when installing from apt) that is ",(0,r.kt)("inlineCode",{parentName:"p"},"/home/polkadot/.local/share/polkadot"),"."),(0,r.kt)("p",null,"This can be changed with ",(0,r.kt)("inlineCode",{parentName:"p"},"--base-path")," so for example ",(0,r.kt)("inlineCode",{parentName:"p"},"--base-path /home/polkadot")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"--base-path /home/polkadot/myvalidator")," or whatever you prefer."),(0,r.kt)("p",null,"To delete the old database, restore a new kusama paritydb database snapshot for your node with a default install:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"su - polkadot -s /bin/bash\nrm -fr /home/polkadot/.local/share/polkadot/chains/ksmcc3\nmkdir -p /home/polkadot/.local/share/polkadot/chains/ksmcc3\ncurl -o - -L http://snapshot.stakeworld.io/paritydb-ksmcc3.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/ksmcc3\n")),(0,r.kt)("p",null,"You can check the startup by running the binary as user polkadot and see if it accepts the database or throws any errors:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"su - polkadot -s /bin/bash\npolkadot --chain kusama --database paritydb \n")),(0,r.kt)("h3",{id:"edit-the-systemctl-startup-script"},"Edit the systemctl startup script"),(0,r.kt)("p",null,"Edit the default service script and add for example ",(0,r.kt)("inlineCode",{parentName:"p"},"--database paritydb --chain kusama"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'su -\nvi /usr/lib/systemd/system/polkadot.service"\nsystemctl daemon-reload\nsystemctl retart polkadot\nsystemctl enable polkadot\n')),(0,r.kt)("p",null,"Or create a new script by copying the default service script:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"su -\ncp /usr/lib/systemd/system/polkadot.service /etc/systemd/system/validator.service\nvi /etc/systemd/system/validator.service\n")),(0,r.kt)("p",null,"You can edit settings at wish, changing ports and settings at will."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-config"},"[Service]\nExecStart=/usr/bin/polkadot --chain kusama --name validator --validator --state-pruning 1000 --prometheus-external --base-path /home/polkadot --database paritydb --telemetry-url 'wss://telemetry.polkadot.io/submit/ 1' \n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl daemon-reload\nsystemctl start validator\nsystemctl enable validator\n")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},'If you installed as root you will get an error "failed to create a test file: Permission denied". You can solve this by running ',(0,r.kt)("inlineCode",{parentName:"p"},"chown -R polkadot:polkadot DBDIR"))),(0,r.kt)("h2",{id:"different-databases"},"Different databases:"),(0,r.kt)("p",null,"Below restore commands for different databases to the default directory. Best run them as user polkadot (",(0,r.kt)("inlineCode",{parentName:"p"},"su - polkadot -s /bin/bash"),") or when running as root do a ",(0,r.kt)("inlineCode",{parentName:"p"},"chown polkadot:polkadot <dbdir>"),") or when running as root do a ",(0,r.kt)("inlineCode",{parentName:"p"},"chown polkadot:polkadot <dbdir>"),". Of course change the part after ",(0,r.kt)("inlineCode",{parentName:"p"},"-C")," when installing to another location."),(0,r.kt)("h3",{id:"paritydb-kusama"},"Paritydb kusama"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o - -L http://snapshot.stakeworld.io/paritydb-ksmcc3.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/ksmcc3\n")),(0,r.kt)("h3",{id:"paritydb-polkadot"},"Paritydb polkadot"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o - -L http://snapshot.stakeworld.io/paritydb-polkadot.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/polkadot\n")))}u.isMDXComponent=!0},2307:(t,a,e)=>{e.d(a,{Z:()=>n});const n="data:image/png;base64,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"}}]);