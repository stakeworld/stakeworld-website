"use strict";(self.webpackChunkstakeworld=self.webpackChunkstakeworld||[]).push([[669],{3905:(t,a,e)=>{e.d(a,{Zo:()=>p,kt:()=>c});var r=e(7294);function n(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}function o(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,r)}return e}function l(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?o(Object(e),!0).forEach((function(a){n(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):o(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function i(t,a){if(null==t)return{};var e,r,n=function(t,a){if(null==t)return{};var e,r,n={},o=Object.keys(t);for(r=0;r<o.length;r++)e=o[r],a.indexOf(e)>=0||(n[e]=t[e]);return n}(t,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)e=o[r],a.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(n[e]=t[e])}return n}var d=r.createContext({}),s=function(t){var a=r.useContext(d),e=a;return t&&(e="function"==typeof t?t(a):l(l({},a),t)),e},p=function(t){var a=s(t.components);return r.createElement(d.Provider,{value:a},t.children)},A={inlineCode:"code",wrapper:function(t){var a=t.children;return r.createElement(r.Fragment,{},a)}},u=r.forwardRef((function(t,a){var e=t.components,n=t.mdxType,o=t.originalType,d=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),u=s(e),c=n,k=u["".concat(d,".").concat(c)]||u[c]||A[c]||o;return e?r.createElement(k,l(l({ref:a},p),{},{components:e})):r.createElement(k,l({ref:a},p))}));function c(t,a){var e=arguments,n=a&&a.mdxType;if("string"==typeof t||n){var o=e.length,l=new Array(o);l[0]=u;var i={};for(var d in a)hasOwnProperty.call(a,d)&&(i[d]=a[d]);i.originalType=t,i.mdxType="string"==typeof t?t:n,l[1]=i;for(var s=2;s<o;s++)l[s]=e[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,e)}u.displayName="MDXCreateElement"},3025:(t,a,e)=>{e.r(a),e.d(a,{assets:()=>d,contentTitle:()=>l,default:()=>A,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=e(3117),n=(e(7294),e(3905));const o={id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",slug:"/snapshot",sidebar_position:3,keywords:["validator setup","validator","validate","snapshot","rocksdb","paritydb","pruning","polkadot","kusama"]},l=void 0,i={unversionedId:"snapshot",id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",source:"@site/docs/snapshot.mdx",sourceDirName:".",slug:"/snapshot",permalink:"/docs/snapshot",draft:!1,editUrl:"https://github.com/stakeworld/website/edit/master/docs/snapshot.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",slug:"/snapshot",sidebar_position:3,keywords:["validator setup","validator","validate","snapshot","rocksdb","paritydb","pruning","polkadot","kusama"]},sidebar:"tutorialSidebar",previous:{title:"Pool",permalink:"/docs/pool"},next:{title:"RPC node",permalink:"/docs/rpc"}},d={},s=[{value:"Automatic install",id:"automatic-install",level:2},{value:"Install the database directly",id:"install-the-database-directly",level:2},{value:"Paritydb kusama",id:"paritydb-kusama",level:3},{value:"Paritydb polkadot",id:"paritydb-polkadot",level:3},{value:"Rocksdb kusama",id:"rocksdb-kusama",level:3},{value:"Rocksdb polkadot",id:"rocksdb-polkadot",level:3}],p={toc:s};function A(t){let{components:a,...o}=t;return(0,n.kt)("wrapper",(0,r.Z)({},p,o,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Snapshots are compressed backups of the database directory of a polkadot or kusama node. If you start a node for the first time it will start building the database from scratch, which will take a few days, depending on network speed. If you download an up to date database snapshot your node will be up and running quicker; under an hour or a few hours, depending on network speed. "),(0,n.kt)("p",{parentName:"admonition"},"In principle building from scratch is the safest and cleanest; if there is an error in the snapshot database, this will propagate to the nodes who download the database. Also the database size increases with extended usage. STAKEWORLD checks for errors and periodically rebuilds its databases to ensure error free databases with minimum disk usage."),(0,n.kt)("p",{parentName:"admonition"},"The snapshots are available for kusama ",(0,n.kt)("inlineCode",{parentName:"p"},"--chain ksmcc3")," and polkadot ",(0,n.kt)("inlineCode",{parentName:"p"},"--chain polkadot")," in the paritydb ",(0,n.kt)("inlineCode",{parentName:"p"},"--database paritydb")," and the rocksdb ",(0,n.kt)("inlineCode",{parentName:"p"},"--database rocksdb")," database format. They are pruned with ",(0,n.kt)("inlineCode",{parentName:"p"},"--pruning 1000"),", which is sufficient for a validator node.")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null}),(0,n.kt)("th",{parentName:"tr",align:null},"Chain"),(0,n.kt)("th",{parentName:"tr",align:null},"Database"),(0,n.kt)("th",{parentName:"tr",align:null},"Format"),(0,n.kt)("th",{parentName:"tr",align:null},"Blockheight"),(0,n.kt)("th",{parentName:"tr",align:null},"Size"),(0,n.kt)("th",{parentName:"tr",align:null},"Full"),(0,n.kt)("th",{parentName:"tr",align:null},"Creation date"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"http://snapshot.stakeworld.nl/rocksdb-ksmcc3.lz4"},"direct link")),(0,n.kt)("td",{parentName:"tr",align:null},"ksmcc3"),(0,n.kt)("td",{parentName:"tr",align:null},"rocksdb"),(0,n.kt)("td",{parentName:"tr",align:null},"pruned"),(0,n.kt)("td",{parentName:"tr",align:null},"15211545"),(0,n.kt)("td",{parentName:"tr",align:null},"154G"),(0,n.kt)("td",{parentName:"tr",align:null},"161G"),(0,n.kt)("td",{parentName:"tr",align:null},"Sun 06 Nov @ 17:31")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"http://snapshot.stakeworld.nl/paritydb-ksmcc3.lz4"},"direct link")),(0,n.kt)("td",{parentName:"tr",align:null},"ksmcc3"),(0,n.kt)("td",{parentName:"tr",align:null},"paritydb"),(0,n.kt)("td",{parentName:"tr",align:null},"pruned"),(0,n.kt)("td",{parentName:"tr",align:null},"15211688"),(0,n.kt)("td",{parentName:"tr",align:null},"154G"),(0,n.kt)("td",{parentName:"tr",align:null},"160G"),(0,n.kt)("td",{parentName:"tr",align:null},"Sun 06 Nov @ 17:45")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"http://snapshot.stakeworld.nl/rocksdb-polkadot.lz4"},"direct link")),(0,n.kt)("td",{parentName:"tr",align:null},"polkadot"),(0,n.kt)("td",{parentName:"tr",align:null},"rocksdb"),(0,n.kt)("td",{parentName:"tr",align:null},"pruned"),(0,n.kt)("td",{parentName:"tr",align:null},"12808951"),(0,n.kt)("td",{parentName:"tr",align:null},"110G"),(0,n.kt)("td",{parentName:"tr",align:null},"114G"),(0,n.kt)("td",{parentName:"tr",align:null},"Sun 06 Nov @ 17:54")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"http://snapshot.stakeworld.nl/paritydb-polkadot.lz4"},"direct link")),(0,n.kt)("td",{parentName:"tr",align:null},"polkadot"),(0,n.kt)("td",{parentName:"tr",align:null},"paritydb"),(0,n.kt)("td",{parentName:"tr",align:null},"pruned"),(0,n.kt)("td",{parentName:"tr",align:null},"12809052"),(0,n.kt)("td",{parentName:"tr",align:null},"110G"),(0,n.kt)("td",{parentName:"tr",align:null},"114G"),(0,n.kt)("td",{parentName:"tr",align:null},"Sun 06 Nov @ 18:04")))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"snapsize",src:e(2307).Z,width:"800",height:"300"})),(0,n.kt)("h2",{id:"automatic-install"},"Automatic install"),(0,n.kt)("p",null,"The following script can restore a snapshot for a quickstart. If you want you can first review it on ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/stakeworld/stakeworld-scripts/blob/master/node-install.sh"},"github"),'. You can choose "snapinstall" for a snapshot restore or "nodeinstall" to install a complete node. The script will ask some questions and create an install or restore script which you can review before executing.'),(0,n.kt)("p",null,"The script is for ubuntu/debian flavoured servers."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o- -L https://raw.githubusercontent.com/stakeworld/stakeworld-scripts/master/node-install.sh | bash\n")),(0,n.kt)("h2",{id:"install-the-database-directly"},"Install the database directly"),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},'The default binary/systemctl from the apt repository will run as user "polkadot". If you install as root you will get an error "failed to create a test file: Permission denied". You can solve this by running ',(0,n.kt)("inlineCode",{parentName:"p"},"chown -R polkadot:polkadot <dbdir>"))),(0,n.kt)("p",null,"Install to ",(0,n.kt)("inlineCode",{parentName:"p"},"/root/.local/share/polkadot/chains/<chain>")," or change to your target directory."),(0,n.kt)("h3",{id:"paritydb-kusama"},"Paritydb kusama"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o - -L http://snapshot.stakeworld.nl/paritydb-ksmcc3.lz4 | lz4 -c -d - | tar -x -C /root/.local/share/polkadot/chains/ksmcc3\n")),(0,n.kt)("h3",{id:"paritydb-polkadot"},"Paritydb polkadot"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o - -L http://snapshot.stakeworld.nl/paritydb-polkadot.lz4 | lz4 -c -d - | tar -x -C /root/.local/share/polkadot/chains/polkadot\n")),(0,n.kt)("h3",{id:"rocksdb-kusama"},"Rocksdb kusama"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o - -L http://snapshot.stakeworld.nl/rocksdb-ksmcc3.lz4 | lz4 -c -d - | tar -x -C /root/.local/share/polkadot/chains/ksmcc3\n")),(0,n.kt)("h3",{id:"rocksdb-polkadot"},"Rocksdb polkadot"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o - -L http://snapshot.stakeworld.nl/rocksdb-polkadot.lz4 | lz4 -c -d - | tar -x -C /root/.local/share/polkadot/chains/polkadot\n")))}A.isMDXComponent=!0},2307:(t,a,e)=>{e.d(a,{Z:()=>r});const r="data:image/png;base64,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"}}]);