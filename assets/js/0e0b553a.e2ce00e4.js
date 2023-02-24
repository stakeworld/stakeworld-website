"use strict";(self.webpackChunkstakeworld=self.webpackChunkstakeworld||[]).push([[669],{3905:(t,a,e)=>{e.d(a,{Zo:()=>p,kt:()=>c});var n=e(7294);function r(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}function l(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,n)}return e}function o(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?l(Object(e),!0).forEach((function(a){r(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):l(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function s(t,a){if(null==t)return{};var e,n,r=function(t,a){if(null==t)return{};var e,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)e=l[n],a.indexOf(e)>=0||(r[e]=t[e]);return r}(t,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)e=l[n],a.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}var d=n.createContext({}),i=function(t){var a=n.useContext(d),e=a;return t&&(e="function"==typeof t?t(a):o(o({},a),t)),e},p=function(t){var a=i(t.components);return n.createElement(d.Provider,{value:a},t.children)},u={inlineCode:"code",wrapper:function(t){var a=t.children;return n.createElement(n.Fragment,{},a)}},k=n.forwardRef((function(t,a){var e=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),k=i(e),c=r,A=k["".concat(d,".").concat(c)]||k[c]||u[c]||l;return e?n.createElement(A,o(o({ref:a},p),{},{components:e})):n.createElement(A,o({ref:a},p))}));function c(t,a){var e=arguments,r=a&&a.mdxType;if("string"==typeof t||r){var l=e.length,o=new Array(l);o[0]=k;var s={};for(var d in a)hasOwnProperty.call(a,d)&&(s[d]=a[d]);s.originalType=t,s.mdxType="string"==typeof t?t:r,o[1]=s;for(var i=2;i<l;i++)o[i]=e[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,e)}k.displayName="MDXCreateElement"},3025:(t,a,e)=>{e.r(a),e.d(a,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>i});var n=e(3117),r=(e(7294),e(3905));const l={id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",slug:"/snapshot",sidebar_position:3,keywords:["snapshots","snapshot","kusama snapshot","polkadot snapshot","rocksdb","paritydb","pruning","polkadot","kusama"]},o=void 0,s={unversionedId:"snapshot",id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",source:"@site/docs/snapshot.mdx",sourceDirName:".",slug:"/snapshot",permalink:"/docs/snapshot",draft:!1,editUrl:"https://github.com/stakeworld/website/edit/master/docs/snapshot.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",slug:"/snapshot",sidebar_position:3,keywords:["snapshots","snapshot","kusama snapshot","polkadot snapshot","rocksdb","paritydb","pruning","polkadot","kusama"]},sidebar:"tutorialSidebar",previous:{title:"Pool",permalink:"/docs/pool"},next:{title:"RPC server",permalink:"/docs/rpc"}},d={},i=[{value:"Database size",id:"database-size",level:2},{value:"Automatic install",id:"automatic-install",level:2},{value:"Manual install",id:"manual-install",level:2},{value:"Setup a validator node",id:"setup-a-validator-node",level:3},{value:"Install the database",id:"install-the-database",level:3},{value:"Edit the systemctl startup script",id:"edit-the-systemctl-startup-script",level:3},{value:"Different databases:",id:"different-databases",level:2},{value:"Paritydb kusama",id:"paritydb-kusama",level:3},{value:"Paritydb polkadot",id:"paritydb-polkadot",level:3},{value:"Rocksdb kusama",id:"rocksdb-kusama",level:3},{value:"Rocksdb polkadot",id:"rocksdb-polkadot",level:3}],p={toc:i};function u(t){let{components:a,...l}=t;return(0,r.kt)("wrapper",(0,n.Z)({},p,l,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},"Chain"),(0,r.kt)("th",{parentName:"tr",align:null},"Database"),(0,r.kt)("th",{parentName:"tr",align:null},"Format"),(0,r.kt)("th",{parentName:"tr",align:null},"Blockheight"),(0,r.kt)("th",{parentName:"tr",align:null},"Size"),(0,r.kt)("th",{parentName:"tr",align:null},"Full"),(0,r.kt)("th",{parentName:"tr",align:null},"Creation date"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://snapshot.stakeworld.nl/rocksdb-ksmcc3.lz4"},"direct link")),(0,r.kt)("td",{parentName:"tr",align:null},"ksmcc3"),(0,r.kt)("td",{parentName:"tr",align:null},"rocksdb"),(0,r.kt)("td",{parentName:"tr",align:null},"pruned"),(0,r.kt)("td",{parentName:"tr",align:null},"16768989"),(0,r.kt)("td",{parentName:"tr",align:null},"206G"),(0,r.kt)("td",{parentName:"tr",align:null},"215G"),(0,r.kt)("td",{parentName:"tr",align:null},"Fri 24 Feb @ 02:22")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://snapshot.stakeworld.nl/paritydb-ksmcc3.lz4"},"direct link")),(0,r.kt)("td",{parentName:"tr",align:null},"ksmcc3"),(0,r.kt)("td",{parentName:"tr",align:null},"paritydb"),(0,r.kt)("td",{parentName:"tr",align:null},"pruned"),(0,r.kt)("td",{parentName:"tr",align:null},"16769091"),(0,r.kt)("td",{parentName:"tr",align:null},"167G"),(0,r.kt)("td",{parentName:"tr",align:null},"174G"),(0,r.kt)("td",{parentName:"tr",align:null},"Fri 24 Feb @ 02:32")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://snapshot.stakeworld.nl/rocksdb-polkadot.lz4"},"direct link")),(0,r.kt)("td",{parentName:"tr",align:null},"polkadot"),(0,r.kt)("td",{parentName:"tr",align:null},"rocksdb"),(0,r.kt)("td",{parentName:"tr",align:null},"pruned"),(0,r.kt)("td",{parentName:"tr",align:null},"14381536"),(0,r.kt)("td",{parentName:"tr",align:null},"120G"),(0,r.kt)("td",{parentName:"tr",align:null},"125G"),(0,r.kt)("td",{parentName:"tr",align:null},"Fri 24 Feb @ 02:39")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://snapshot.stakeworld.nl/paritydb-polkadot.lz4"},"direct link")),(0,r.kt)("td",{parentName:"tr",align:null},"polkadot"),(0,r.kt)("td",{parentName:"tr",align:null},"paritydb"),(0,r.kt)("td",{parentName:"tr",align:null},"pruned"),(0,r.kt)("td",{parentName:"tr",align:null},"14381545"),(0,r.kt)("td",{parentName:"tr",align:null},"121G"),(0,r.kt)("td",{parentName:"tr",align:null},"125G"),(0,r.kt)("td",{parentName:"tr",align:null},"Fri 24 Feb @ 02:46")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"ksmcc3"),(0,r.kt)("td",{parentName:"tr",align:null},"paritydb"),(0,r.kt)("td",{parentName:"tr",align:null},"archive"),(0,r.kt)("td",{parentName:"tr",align:null},"16769288"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"1.4T"),(0,r.kt)("td",{parentName:"tr",align:null},"Fri 24 Feb @ 02:52")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"polkadot"),(0,r.kt)("td",{parentName:"tr",align:null},"paritydb"),(0,r.kt)("td",{parentName:"tr",align:null},"archive"),(0,r.kt)("td",{parentName:"tr",align:null},"14381662"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"859G"),(0,r.kt)("td",{parentName:"tr",align:null},"Fri 24 Feb @ 02:52")))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Snapshots are compressed backups of the database directory of a polkadot or kusama node. If you start a node for the first time it will start building the database from scratch, which will take a few days, depending on network speed. If you download an up to date database snapshot your node will be up and running quicker; under an hour or a few hours, depending on network speed."),(0,r.kt)("p",{parentName:"admonition"},"In principle building from scratch is the safest and cleanest; if there is an error in the snapshot database, this will propagate to the nodes who download the database. Also the database size increases with extended usage. Stakeworld checks for errors and periodically rebuilds its databases to ensure error free databases with minimum disk usage."),(0,r.kt)("p",{parentName:"admonition"},"The snapshots are available for kusama ",(0,r.kt)("inlineCode",{parentName:"p"},"--chain ksmcc3")," and polkadot ",(0,r.kt)("inlineCode",{parentName:"p"},"--chain polkadot")," in the paritydb ",(0,r.kt)("inlineCode",{parentName:"p"},"--database paritydb")," and the rocksdb ",(0,r.kt)("inlineCode",{parentName:"p"},"--database rocksdb")," database format. They are pruned with ",(0,r.kt)("inlineCode",{parentName:"p"},"--state-pruning 1000"),", which is sufficient for a validator node.")),(0,r.kt)("h2",{id:"database-size"},"Database size"),(0,r.kt)("p",null,"Below a overview of database sizes, you can also view only ",(0,r.kt)("a",{target:"_blank",href:e(3993).Z},"pruned")," or ",(0,r.kt)("a",{target:"_blank",href:e(9319).Z},"archive")," database size.\n",(0,r.kt)("img",{alt:"snapsize",src:e(2307).Z,width:"800",height:"300"})),(0,r.kt)("h2",{id:"automatic-install"},"Automatic install"),(0,r.kt)("p",null,"The following script can restore a snapshot for a quickstart. If you want you can first review it on ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/stakeworld/stakeworld-scripts/blob/master/node-install.sh"},"github"),'. You can choose "snapinstall" for a snapshot restore or "nodeinstall" to install a complete node. The script will ask some questions and create an install or restore script which you can review before executing.'),(0,r.kt)("p",null,"The script is for ubuntu/debian flavoured servers."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o- -L https://raw.githubusercontent.com/stakeworld/stakeworld-scripts/master/node-install.sh | bash\n")),(0,r.kt)("h2",{id:"manual-install"},"Manual install"),(0,r.kt)("h3",{id:"setup-a-validator-node"},"Setup a validator node"),(0,r.kt)("p",null,"Setting up a validator node is covered ",(0,r.kt)("a",{parentName:"p",href:"./validate"},"here"),". The default apt install creates an user polkadot with a home directory ",(0,r.kt)("inlineCode",{parentName:"p"},"/home/polkadot")," and a default service script ",(0,r.kt)("inlineCode",{parentName:"p"},"/usr/lib/systemd/system/polkadot.service"),"."),(0,r.kt)("h3",{id:"install-the-database"},"Install the database"),(0,r.kt)("p",null,"Database location: By default the polkadot binary runs as user polkadot and creates ",(0,r.kt)("inlineCode",{parentName:"p"},".local/share/polkadot")," in the users homedirectory. So for user polkadot (the default when installing from apt) that is ",(0,r.kt)("inlineCode",{parentName:"p"},"/home/polkadot/.local/share/polkadot"),"."),(0,r.kt)("p",null,"This can be changed with ",(0,r.kt)("inlineCode",{parentName:"p"},"--base-path")," so for example ",(0,r.kt)("inlineCode",{parentName:"p"},"--base-path /home/polkadot")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"--base-path /home/polkadot/myvalidator")," or whatever you prefer."),(0,r.kt)("p",null,"To delete the old database, restore a new kusama paritydb database snapshot for your node with a default install:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"su - polkadot -s /bin/bash\nrm -fr /home/polkadot/.local/share/polkadot/chains/ksmcc3\nmkdir -p /home/polkadot/.local/share/polkadot/chains/ksmcc3\ncurl -o - -L http://snapshot.stakeworld.io/paritydb-ksmcc3.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/ksmcc3\n")),(0,r.kt)("p",null,"You can check the startup by running the binary as user polkadot and see if it accepts the database or throws any errors:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"su - polkadot -s /bin/bash\npolkadot --chain kusama --database paritydb \n")),(0,r.kt)("h3",{id:"edit-the-systemctl-startup-script"},"Edit the systemctl startup script"),(0,r.kt)("p",null,"Edit the default service script and add for example ",(0,r.kt)("inlineCode",{parentName:"p"},"--database paritydb --chain kusama"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'su -\nvi /usr/lib/systemd/system/polkadot.service"\nsystemctl daemon-reload\nsystemctl retart polkadot\nsystemctl enable polkadot\n')),(0,r.kt)("p",null,"Or create a new script by copying the default service script:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"su -\ncp /usr/lib/systemd/system/polkadot.service /etc/systemd/system/validator.service\nvi /etc/systemd/system/validator.service\n")),(0,r.kt)("p",null,"You can edit settings at wish, changing ports and settings at will."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-config"},"[Service]\nExecStart=/usr/bin/polkadot --chain kusama --name validator --validator --state-pruning 1000 --prometheus-external --base-path /home/polkadot --database paritydb --telemetry-url 'wss://telemetry.polkadot.io/submit/ 1' \n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl daemon-reload\nsystemctl start validator\nsystemctl enable validator\n")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},'If you installed as root you will get an error "failed to create a test file: Permission denied". You can solve this by running ',(0,r.kt)("inlineCode",{parentName:"p"},"chown -R polkadot:polkadot DBDIR"))),(0,r.kt)("h2",{id:"different-databases"},"Different databases:"),(0,r.kt)("p",null,"Below restore commands for different databases to the default directory. Best run them as user polkadot (",(0,r.kt)("inlineCode",{parentName:"p"},"su - polkadot -s /bin/bash"),") or when running as root do a ",(0,r.kt)("inlineCode",{parentName:"p"},"chown polkadot:polkadot <dbdir>"),") or when running as root do a ",(0,r.kt)("inlineCode",{parentName:"p"},"chown polkadot:polkadot <dbdir>"),". Of course change the part after ",(0,r.kt)("inlineCode",{parentName:"p"},"-C")," when installing to another location."),(0,r.kt)("h3",{id:"paritydb-kusama"},"Paritydb kusama"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o - -L http://snapshot.stakeworld.io/paritydb-ksmcc3.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/ksmcc3\n")),(0,r.kt)("h3",{id:"paritydb-polkadot"},"Paritydb polkadot"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o - -L http://snapshot.stakeworld.io/paritydb-polkadot.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/polkadot\n")),(0,r.kt)("h3",{id:"rocksdb-kusama"},"Rocksdb kusama"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o - -L http://snapshot.stakeworld.io/rocksdb-ksmcc3.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/ksmcc3\n")),(0,r.kt)("h3",{id:"rocksdb-polkadot"},"Rocksdb polkadot"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o - -L http://snapshot.stakeworld.io/rocksdb-polkadot.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/polkadot\n")))}u.isMDXComponent=!0},9319:(t,a,e)=>{e.d(a,{Z:()=>n});const n=e.p+"assets/files/archivesize-c9d3fa01dbeb74b9def1a35f58a26f90.png"},3993:(t,a,e)=>{e.d(a,{Z:()=>n});const n=e.p+"assets/files/prunedsize-37d986dcd532ea54c69597c5af24692a.png"},2307:(t,a,e)=>{e.d(a,{Z:()=>n});const n="data:image/png;base64,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"}}]);