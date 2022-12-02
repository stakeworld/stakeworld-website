"use strict";(self.webpackChunkstakeworld=self.webpackChunkstakeworld||[]).push([[669],{3905:(t,a,e)=>{e.d(a,{Zo:()=>p,kt:()=>k});var n=e(7294);function r(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}function l(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,n)}return e}function o(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?l(Object(e),!0).forEach((function(a){r(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):l(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function d(t,a){if(null==t)return{};var e,n,r=function(t,a){if(null==t)return{};var e,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)e=l[n],a.indexOf(e)>=0||(r[e]=t[e]);return r}(t,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)e=l[n],a.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}var s=n.createContext({}),i=function(t){var a=n.useContext(s),e=a;return t&&(e="function"==typeof t?t(a):o(o({},a),t)),e},p=function(t){var a=i(t.components);return n.createElement(s.Provider,{value:a},t.children)},u={inlineCode:"code",wrapper:function(t){var a=t.children;return n.createElement(n.Fragment,{},a)}},A=n.forwardRef((function(t,a){var e=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,p=d(t,["components","mdxType","originalType","parentName"]),A=i(e),k=r,c=A["".concat(s,".").concat(k)]||A[k]||u[k]||l;return e?n.createElement(c,o(o({ref:a},p),{},{components:e})):n.createElement(c,o({ref:a},p))}));function k(t,a){var e=arguments,r=a&&a.mdxType;if("string"==typeof t||r){var l=e.length,o=new Array(l);o[0]=A;var d={};for(var s in a)hasOwnProperty.call(a,s)&&(d[s]=a[s]);d.originalType=t,d.mdxType="string"==typeof t?t:r,o[1]=d;for(var i=2;i<l;i++)o[i]=e[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,e)}A.displayName="MDXCreateElement"},3025:(t,a,e)=>{e.r(a),e.d(a,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>d,toc:()=>i});var n=e(3117),r=(e(7294),e(3905));const l={id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",slug:"/snapshot",sidebar_position:3,keywords:["validator setup","validator","validate","snapshot","rocksdb","paritydb","pruning","polkadot","kusama"]},o=void 0,d={unversionedId:"snapshot",id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",source:"@site/docs/snapshot.mdx",sourceDirName:".",slug:"/snapshot",permalink:"/docs/snapshot",draft:!1,editUrl:"https://github.com/stakeworld/website/edit/master/docs/snapshot.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",slug:"/snapshot",sidebar_position:3,keywords:["validator setup","validator","validate","snapshot","rocksdb","paritydb","pruning","polkadot","kusama"]},sidebar:"tutorialSidebar",previous:{title:"Pool",permalink:"/docs/pool"},next:{title:"RPC node",permalink:"/docs/rpc"}},s={},i=[{value:"Snapshots",id:"snapshots",level:2},{value:"Automatic install",id:"automatic-install",level:2},{value:"Install the database directly",id:"install-the-database-directly",level:2},{value:"Paritydb kusama",id:"paritydb-kusama",level:3},{value:"Paritydb polkadot",id:"paritydb-polkadot",level:3},{value:"Rocksdb kusama",id:"rocksdb-kusama",level:3},{value:"Rocksdb polkadot",id:"rocksdb-polkadot",level:3}],p={toc:i};function u(t){let{components:a,...l}=t;return(0,r.kt)("wrapper",(0,n.Z)({},p,l,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Snapshots are compressed backups of the database directory of a polkadot or kusama node. If you start a node for the first time it will start building the database from scratch, which will take a few days, depending on network speed. If you download an up to date database snapshot your node will be up and running quicker; under an hour or a few hours, depending on network speed. ")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"In principle building from scratch is the safest and cleanest; if there is an error in the snapshot database, this will propagate to the nodes who download the database. Also the database size increases with extended usage. STAKEWORLD checks for errors and periodically rebuilds its databases to ensure error free databases with minimum disk usage.")),(0,r.kt)("h2",{id:"snapshots"},"Snapshots"),(0,r.kt)("p",null,"The snapshots are available for kusama ",(0,r.kt)("inlineCode",{parentName:"p"},"--chain ksmcc3")," and polkadot ",(0,r.kt)("inlineCode",{parentName:"p"},"--chain polkadot")," in the paritydb ",(0,r.kt)("inlineCode",{parentName:"p"},"--database paritydb")," and the rocksdb ",(0,r.kt)("inlineCode",{parentName:"p"},"--database rocksdb")," database format. They are pruned with ",(0,r.kt)("inlineCode",{parentName:"p"},"--state-pruning 1000 --blocks-pruning 1000"),", which is sufficient for a validator node."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},"Chain"),(0,r.kt)("th",{parentName:"tr",align:null},"Database"),(0,r.kt)("th",{parentName:"tr",align:null},"Format"),(0,r.kt)("th",{parentName:"tr",align:null},"Blockheight"),(0,r.kt)("th",{parentName:"tr",align:null},"Size"),(0,r.kt)("th",{parentName:"tr",align:null},"Full"),(0,r.kt)("th",{parentName:"tr",align:null},"Creation date"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://snapshot.stakeworld.nl/rocksdb-ksmcc3.lz4"},"direct link")),(0,r.kt)("td",{parentName:"tr",align:null},"ksmcc3"),(0,r.kt)("td",{parentName:"tr",align:null},"rocksdb"),(0,r.kt)("td",{parentName:"tr",align:null},"pruned"),(0,r.kt)("td",{parentName:"tr",align:null},"15578927"),(0,r.kt)("td",{parentName:"tr",align:null},"154G"),(0,r.kt)("td",{parentName:"tr",align:null},"164G"),(0,r.kt)("td",{parentName:"tr",align:null},"Fri 02 Dec @ 07:30")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://snapshot.stakeworld.nl/paritydb-ksmcc3.lz4"},"direct link")),(0,r.kt)("td",{parentName:"tr",align:null},"ksmcc3"),(0,r.kt)("td",{parentName:"tr",align:null},"paritydb"),(0,r.kt)("td",{parentName:"tr",align:null},"pruned"),(0,r.kt)("td",{parentName:"tr",align:null},"15578926"),(0,r.kt)("td",{parentName:"tr",align:null},"154G"),(0,r.kt)("td",{parentName:"tr",align:null},"160G"),(0,r.kt)("td",{parentName:"tr",align:null},"Fri 02 Dec @ 07:30")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://snapshot.stakeworld.nl/rocksdb-polkadot.lz4"},"direct link")),(0,r.kt)("td",{parentName:"tr",align:null},"polkadot"),(0,r.kt)("td",{parentName:"tr",align:null},"rocksdb"),(0,r.kt)("td",{parentName:"tr",align:null},"pruned"),(0,r.kt)("td",{parentName:"tr",align:null},"13176663"),(0,r.kt)("td",{parentName:"tr",align:null},"110G"),(0,r.kt)("td",{parentName:"tr",align:null},"116G"),(0,r.kt)("td",{parentName:"tr",align:null},"Fri 02 Dec @ 07:30")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://snapshot.stakeworld.nl/paritydb-polkadot.lz4"},"direct link")),(0,r.kt)("td",{parentName:"tr",align:null},"polkadot"),(0,r.kt)("td",{parentName:"tr",align:null},"paritydb"),(0,r.kt)("td",{parentName:"tr",align:null},"pruned"),(0,r.kt)("td",{parentName:"tr",align:null},"13176663"),(0,r.kt)("td",{parentName:"tr",align:null},"110G"),(0,r.kt)("td",{parentName:"tr",align:null},"114G"),(0,r.kt)("td",{parentName:"tr",align:null},"Fri 02 Dec @ 07:30")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"ksmcc3"),(0,r.kt)("td",{parentName:"tr",align:null},"paritydb"),(0,r.kt)("td",{parentName:"tr",align:null},"archive"),(0,r.kt)("td",{parentName:"tr",align:null},"15489825"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"1.1T"),(0,r.kt)("td",{parentName:"tr",align:null},"Fri 02 Dec @ 07:30")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"polkadot"),(0,r.kt)("td",{parentName:"tr",align:null},"paritydb"),(0,r.kt)("td",{parentName:"tr",align:null},"archive"),(0,r.kt)("td",{parentName:"tr",align:null},"13176663"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"696G"),(0,r.kt)("td",{parentName:"tr",align:null},"Fri 02 Dec @ 07:30")))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"snapsize",src:e(2307).Z,width:"800",height:"300"})),(0,r.kt)("h2",{id:"automatic-install"},"Automatic install"),(0,r.kt)("p",null,"The following script can restore a snapshot for a quickstart. If you want you can first review it on ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/stakeworld/stakeworld-scripts/blob/master/node-install.sh"},"github"),'. You can choose "snapinstall" for a snapshot restore or "nodeinstall" to install a complete node. The script will ask some questions and create an install or restore script which you can review before executing.'),(0,r.kt)("p",null,"The script is for ubuntu/debian flavoured servers."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o- -L https://raw.githubusercontent.com/stakeworld/stakeworld-scripts/master/node-install.sh | bash\n")),(0,r.kt)("h2",{id:"install-the-database-directly"},"Install the database directly"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},'The default binary/systemctl from the apt repository will run as user "polkadot". If you install as root you will get an error "failed to create a test file: Permission denied". You can solve this by running ',(0,r.kt)("inlineCode",{parentName:"p"},"chown -R polkadot:polkadot <dbdir>"))),(0,r.kt)("p",null,"Install to ",(0,r.kt)("inlineCode",{parentName:"p"},"/root/.local/share/polkadot/chains/<chain>")," or change to your target directory."),(0,r.kt)("h3",{id:"paritydb-kusama"},"Paritydb kusama"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o - -L http://snapshot.stakeworld.nl/paritydb-ksmcc3.lz4 | lz4 -c -d - | tar -x -C /root/.local/share/polkadot/chains/ksmcc3\n")),(0,r.kt)("h3",{id:"paritydb-polkadot"},"Paritydb polkadot"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o - -L http://snapshot.stakeworld.nl/paritydb-polkadot.lz4 | lz4 -c -d - | tar -x -C /root/.local/share/polkadot/chains/polkadot\n")),(0,r.kt)("h3",{id:"rocksdb-kusama"},"Rocksdb kusama"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o - -L http://snapshot.stakeworld.nl/rocksdb-ksmcc3.lz4 | lz4 -c -d - | tar -x -C /root/.local/share/polkadot/chains/ksmcc3\n")),(0,r.kt)("h3",{id:"rocksdb-polkadot"},"Rocksdb polkadot"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o - -L http://snapshot.stakeworld.nl/rocksdb-polkadot.lz4 | lz4 -c -d - | tar -x -C /root/.local/share/polkadot/chains/polkadot\n")))}u.isMDXComponent=!0},2307:(t,a,e)=>{e.d(a,{Z:()=>n});const n="data:image/png;base64,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"}}]);