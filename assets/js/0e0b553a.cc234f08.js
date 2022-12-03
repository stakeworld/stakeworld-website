"use strict";(self.webpackChunkstakeworld=self.webpackChunkstakeworld||[]).push([[669],{3905:(t,a,e)=>{e.d(a,{Zo:()=>p,kt:()=>c});var n=e(7294);function r(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}function l(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,n)}return e}function o(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?l(Object(e),!0).forEach((function(a){r(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):l(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function i(t,a){if(null==t)return{};var e,n,r=function(t,a){if(null==t)return{};var e,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)e=l[n],a.indexOf(e)>=0||(r[e]=t[e]);return r}(t,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)e=l[n],a.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}var s=n.createContext({}),d=function(t){var a=n.useContext(s),e=a;return t&&(e="function"==typeof t?t(a):o(o({},a),t)),e},p=function(t){var a=d(t.components);return n.createElement(s.Provider,{value:a},t.children)},A={inlineCode:"code",wrapper:function(t){var a=t.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(t,a){var e=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),u=d(e),c=r,k=u["".concat(s,".").concat(c)]||u[c]||A[c]||l;return e?n.createElement(k,o(o({ref:a},p),{},{components:e})):n.createElement(k,o({ref:a},p))}));function c(t,a){var e=arguments,r=a&&a.mdxType;if("string"==typeof t||r){var l=e.length,o=new Array(l);o[0]=u;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var d=2;d<l;d++)o[d]=e[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,e)}u.displayName="MDXCreateElement"},3025:(t,a,e)=>{e.r(a),e.d(a,{assets:()=>s,contentTitle:()=>o,default:()=>A,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var n=e(3117),r=(e(7294),e(3905));const l={id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",slug:"/snapshot",sidebar_position:3,keywords:["validator setup","validator","validate","snapshot","rocksdb","paritydb","pruning","polkadot","kusama"]},o=void 0,i={unversionedId:"snapshot",id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",source:"@site/docs/snapshot.mdx",sourceDirName:".",slug:"/snapshot",permalink:"/docs/snapshot",draft:!1,editUrl:"https://github.com/stakeworld/website/edit/master/docs/snapshot.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",slug:"/snapshot",sidebar_position:3,keywords:["validator setup","validator","validate","snapshot","rocksdb","paritydb","pruning","polkadot","kusama"]},sidebar:"tutorialSidebar",previous:{title:"Pool",permalink:"/docs/pool"},next:{title:"RPC node",permalink:"/docs/rpc"}},s={},d=[{value:"Snapshots",id:"snapshots",level:2},{value:"Automatic install",id:"automatic-install",level:2},{value:"Install the database directly",id:"install-the-database-directly",level:2},{value:"Paritydb kusama",id:"paritydb-kusama",level:3},{value:"Paritydb polkadot",id:"paritydb-polkadot",level:3},{value:"Rocksdb kusama",id:"rocksdb-kusama",level:3},{value:"Rocksdb polkadot",id:"rocksdb-polkadot",level:3}],p={toc:d};function A(t){let{components:a,...l}=t;return(0,r.kt)("wrapper",(0,n.Z)({},p,l,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Snapshots are compressed backups of the database directory of a polkadot or kusama node. If you start a node for the first time it will start building the database from scratch, which will take a few days, depending on network speed. If you download an up to date database snapshot your node will be up and running quicker; under an hour or a few hours, depending on network speed.")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"In principle building from scratch is the safest and cleanest; if there is an error in the snapshot database, this will propagate to the nodes who download the database. Also the database size increases with extended usage. STAKEWORLD checks for errors and periodically rebuilds its databases to ensure error free databases with minimum disk usage.")),(0,r.kt)("h2",{id:"snapshots"},"Snapshots"),(0,r.kt)("p",null,"The snapshots are available for kusama ",(0,r.kt)("inlineCode",{parentName:"p"},"--chain ksmcc3")," and polkadot ",(0,r.kt)("inlineCode",{parentName:"p"},"--chain polkadot")," in the paritydb ",(0,r.kt)("inlineCode",{parentName:"p"},"--database paritydb")," and the rocksdb ",(0,r.kt)("inlineCode",{parentName:"p"},"--database rocksdb")," database format. They are pruned with ",(0,r.kt)("inlineCode",{parentName:"p"},"--state-pruning 1000 --blocks-pruning 1000"),", which is sufficient for a validator node."),(0,r.kt)("p",null,"An example systemctl service file can be found here: ",(0,r.kt)("a",{target:"_blank",href:e(9418).Z},(0,r.kt)("code",null,"yourvalidator.service")),". "),(0,r.kt)("p",null,"Copy to ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/systemd/system")," and of course change ",(0,r.kt)("inlineCode",{parentName:"p"},"--name"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"--chain")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"--database")," to your preference."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},"Chain"),(0,r.kt)("th",{parentName:"tr",align:null},"Database"),(0,r.kt)("th",{parentName:"tr",align:null},"Format"),(0,r.kt)("th",{parentName:"tr",align:null},"Blockheight"),(0,r.kt)("th",{parentName:"tr",align:null},"Size"),(0,r.kt)("th",{parentName:"tr",align:null},"Full"),(0,r.kt)("th",{parentName:"tr",align:null},"Creation date"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://snapshot.stakeworld.nl/rocksdb-ksmcc3.lz4"},"direct link")),(0,r.kt)("td",{parentName:"tr",align:null},"ksmcc3"),(0,r.kt)("td",{parentName:"tr",align:null},"rocksdb"),(0,r.kt)("td",{parentName:"tr",align:null},"pruned"),(0,r.kt)("td",{parentName:"tr",align:null},"15590773"),(0,r.kt)("td",{parentName:"tr",align:null},"154G"),(0,r.kt)("td",{parentName:"tr",align:null},"161G"),(0,r.kt)("td",{parentName:"tr",align:null},"Sat 03 Dec @ 03:22")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://snapshot.stakeworld.nl/paritydb-ksmcc3.lz4"},"direct link")),(0,r.kt)("td",{parentName:"tr",align:null},"ksmcc3"),(0,r.kt)("td",{parentName:"tr",align:null},"paritydb"),(0,r.kt)("td",{parentName:"tr",align:null},"pruned"),(0,r.kt)("td",{parentName:"tr",align:null},"15590857"),(0,r.kt)("td",{parentName:"tr",align:null},"154G"),(0,r.kt)("td",{parentName:"tr",align:null},"160G"),(0,r.kt)("td",{parentName:"tr",align:null},"Sat 03 Dec @ 03:30")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://snapshot.stakeworld.nl/rocksdb-polkadot.lz4"},"direct link")),(0,r.kt)("td",{parentName:"tr",align:null},"polkadot"),(0,r.kt)("td",{parentName:"tr",align:null},"rocksdb"),(0,r.kt)("td",{parentName:"tr",align:null},"pruned"),(0,r.kt)("td",{parentName:"tr",align:null},"13188699"),(0,r.kt)("td",{parentName:"tr",align:null},"110G"),(0,r.kt)("td",{parentName:"tr",align:null},"114G"),(0,r.kt)("td",{parentName:"tr",align:null},"Sat 03 Dec @ 03:37")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://snapshot.stakeworld.nl/paritydb-polkadot.lz4"},"direct link")),(0,r.kt)("td",{parentName:"tr",align:null},"polkadot"),(0,r.kt)("td",{parentName:"tr",align:null},"paritydb"),(0,r.kt)("td",{parentName:"tr",align:null},"pruned"),(0,r.kt)("td",{parentName:"tr",align:null},"13188765"),(0,r.kt)("td",{parentName:"tr",align:null},"110G"),(0,r.kt)("td",{parentName:"tr",align:null},"114G"),(0,r.kt)("td",{parentName:"tr",align:null},"Sat 03 Dec @ 03:43")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"ksmcc3"),(0,r.kt)("td",{parentName:"tr",align:null},"paritydb"),(0,r.kt)("td",{parentName:"tr",align:null},"archive"),(0,r.kt)("td",{parentName:"tr",align:null},"15591045"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"1.2T"),(0,r.kt)("td",{parentName:"tr",align:null},"Sat 03 Dec @ 03:49")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"polkadot"),(0,r.kt)("td",{parentName:"tr",align:null},"paritydb"),(0,r.kt)("td",{parentName:"tr",align:null},"archive"),(0,r.kt)("td",{parentName:"tr",align:null},"13188819"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"698G"),(0,r.kt)("td",{parentName:"tr",align:null},"Sat 03 Dec @ 03:49")))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"snapsize",src:e(2307).Z,width:"800",height:"300"})),(0,r.kt)("h2",{id:"automatic-install"},"Automatic install"),(0,r.kt)("p",null,"The following script can restore a snapshot for a quickstart. If you want you can first review it on ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/stakeworld/stakeworld-scripts/blob/master/node-install.sh"},"github"),'. You can choose "snapinstall" for a snapshot restore or "nodeinstall" to install a complete node. The script will ask some questions and create an install or restore script which you can review before executing.'),(0,r.kt)("p",null,"The script is for ubuntu/debian flavoured servers."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o- -L https://raw.githubusercontent.com/stakeworld/stakeworld-scripts/master/node-install.sh | bash\n")),(0,r.kt)("h2",{id:"install-the-database-directly"},"Install the database directly"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},'The default binary/systemctl from the apt repository will run as user "polkadot". If you install as root you will get an error "failed to create a test file: Permission denied". You can solve this by running ',(0,r.kt)("inlineCode",{parentName:"p"},"chown -R polkadot:polkadot <dbdir>"))),(0,r.kt)("p",null,"Install to ",(0,r.kt)("inlineCode",{parentName:"p"},"/root/.local/share/polkadot/chains/<chain>")," or change to your target directory."),(0,r.kt)("h3",{id:"paritydb-kusama"},"Paritydb kusama"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o - -L http://snapshot.stakeworld.nl/paritydb-ksmcc3.lz4 | lz4 -c -d - | tar -x -C /root/.local/share/polkadot/chains/ksmcc3\n")),(0,r.kt)("h3",{id:"paritydb-polkadot"},"Paritydb polkadot"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o - -L http://snapshot.stakeworld.nl/paritydb-polkadot.lz4 | lz4 -c -d - | tar -x -C /root/.local/share/polkadot/chains/polkadot\n")),(0,r.kt)("h3",{id:"rocksdb-kusama"},"Rocksdb kusama"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o - -L http://snapshot.stakeworld.nl/rocksdb-ksmcc3.lz4 | lz4 -c -d - | tar -x -C /root/.local/share/polkadot/chains/ksmcc3\n")),(0,r.kt)("h3",{id:"rocksdb-polkadot"},"Rocksdb polkadot"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o - -L http://snapshot.stakeworld.nl/rocksdb-polkadot.lz4 | lz4 -c -d - | tar -x -C /root/.local/share/polkadot/chains/polkadot\n")))}A.isMDXComponent=!0},9418:(t,a,e)=>{e.d(a,{Z:()=>n});const n=e.p+"assets/files/yourvalidator-bb75e2b610b99850dea2ae3746ea5d53.service"},2307:(t,a,e)=>{e.d(a,{Z:()=>n});const n="data:image/png;base64,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"}}]);