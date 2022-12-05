"use strict";(self.webpackChunkstakeworld=self.webpackChunkstakeworld||[]).push([[669],{3905:(t,a,e)=>{e.d(a,{Zo:()=>p,kt:()=>c});var n=e(7294);function r(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}function l(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,n)}return e}function o(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?l(Object(e),!0).forEach((function(a){r(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):l(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function i(t,a){if(null==t)return{};var e,n,r=function(t,a){if(null==t)return{};var e,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)e=l[n],a.indexOf(e)>=0||(r[e]=t[e]);return r}(t,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)e=l[n],a.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}var d=n.createContext({}),s=function(t){var a=n.useContext(d),e=a;return t&&(e="function"==typeof t?t(a):o(o({},a),t)),e},p=function(t){var a=s(t.components);return n.createElement(d.Provider,{value:a},t.children)},A={inlineCode:"code",wrapper:function(t){var a=t.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(t,a){var e=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),u=s(e),c=r,k=u["".concat(d,".").concat(c)]||u[c]||A[c]||l;return e?n.createElement(k,o(o({ref:a},p),{},{components:e})):n.createElement(k,o({ref:a},p))}));function c(t,a){var e=arguments,r=a&&a.mdxType;if("string"==typeof t||r){var l=e.length,o=new Array(l);o[0]=u;var i={};for(var d in a)hasOwnProperty.call(a,d)&&(i[d]=a[d]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var s=2;s<l;s++)o[s]=e[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,e)}u.displayName="MDXCreateElement"},3025:(t,a,e)=>{e.r(a),e.d(a,{assets:()=>d,contentTitle:()=>o,default:()=>A,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var n=e(3117),r=(e(7294),e(3905));const l={id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",slug:"/snapshot",sidebar_position:3,keywords:["validator setup","validator","validate","snapshot","rocksdb","paritydb","pruning","polkadot","kusama"]},o=void 0,i={unversionedId:"snapshot",id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",source:"@site/docs/snapshot.mdx",sourceDirName:".",slug:"/snapshot",permalink:"/docs/snapshot",draft:!1,editUrl:"https://github.com/stakeworld/website/edit/master/docs/snapshot.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",slug:"/snapshot",sidebar_position:3,keywords:["validator setup","validator","validate","snapshot","rocksdb","paritydb","pruning","polkadot","kusama"]},sidebar:"tutorialSidebar",previous:{title:"Pool",permalink:"/docs/pool"},next:{title:"RPC node",permalink:"/docs/rpc"}},d={},s=[{value:"Snapshots",id:"snapshots",level:2},{value:"Database size",id:"database-size",level:2},{value:"Automatic install",id:"automatic-install",level:2},{value:"Install the database directly",id:"install-the-database-directly",level:2},{value:"Paritydb kusama",id:"paritydb-kusama",level:3},{value:"Paritydb polkadot",id:"paritydb-polkadot",level:3},{value:"Rocksdb kusama",id:"rocksdb-kusama",level:3},{value:"Rocksdb polkadot",id:"rocksdb-polkadot",level:3}],p={toc:s};function A(t){let{components:a,...l}=t;return(0,r.kt)("wrapper",(0,n.Z)({},p,l,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Snapshots are compressed backups of the database directory of a polkadot or kusama node. If you start a node for the first time it will start building the database from scratch, which will take a few days, depending on network speed. If you download an up to date database snapshot your node will be up and running quicker; under an hour or a few hours, depending on network speed.")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"In principle building from scratch is the safest and cleanest; if there is an error in the snapshot database, this will propagate to the nodes who download the database. Also the database size increases with extended usage. STAKEWORLD checks for errors and periodically rebuilds its databases to ensure error free databases with minimum disk usage.")),(0,r.kt)("h2",{id:"snapshots"},"Snapshots"),(0,r.kt)("p",null,"The snapshots are available for kusama ",(0,r.kt)("inlineCode",{parentName:"p"},"--chain ksmcc3")," and polkadot ",(0,r.kt)("inlineCode",{parentName:"p"},"--chain polkadot")," in the paritydb ",(0,r.kt)("inlineCode",{parentName:"p"},"--database paritydb")," and the rocksdb ",(0,r.kt)("inlineCode",{parentName:"p"},"--database rocksdb")," database format. They are pruned with ",(0,r.kt)("inlineCode",{parentName:"p"},"--state-pruning 1000 --blocks-pruning 1000"),", which is sufficient for a validator node."),(0,r.kt)("p",null,"An example systemctl service file can be found here: ",(0,r.kt)("a",{target:"_blank",href:e(9418).Z},(0,r.kt)("code",null,"yourvalidator.service")),". Copy to ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/systemd/system")," and of course change ",(0,r.kt)("inlineCode",{parentName:"p"},"--name"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"--chain")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"--database")," to your preference."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},"Chain"),(0,r.kt)("th",{parentName:"tr",align:null},"Database"),(0,r.kt)("th",{parentName:"tr",align:null},"Format"),(0,r.kt)("th",{parentName:"tr",align:null},"Blockheight"),(0,r.kt)("th",{parentName:"tr",align:null},"Size"),(0,r.kt)("th",{parentName:"tr",align:null},"Full"),(0,r.kt)("th",{parentName:"tr",align:null},"Creation date"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Rebuilding"),(0,r.kt)("td",{parentName:"tr",align:null},"ksmcc3"),(0,r.kt)("td",{parentName:"tr",align:null},"rocksdb"),(0,r.kt)("td",{parentName:"tr",align:null},"pruned"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"*"),(0,r.kt)("td",{parentName:"tr",align:null},"*"),(0,r.kt)("td",{parentName:"tr",align:null},"Mon 05 Dec @ 03:22")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://snapshot.stakeworld.nl/paritydb-ksmcc3.lz4"},"direct link")),(0,r.kt)("td",{parentName:"tr",align:null},"ksmcc3"),(0,r.kt)("td",{parentName:"tr",align:null},"paritydb"),(0,r.kt)("td",{parentName:"tr",align:null},"pruned"),(0,r.kt)("td",{parentName:"tr",align:null},"15619461"),(0,r.kt)("td",{parentName:"tr",align:null},"154G"),(0,r.kt)("td",{parentName:"tr",align:null},"160G"),(0,r.kt)("td",{parentName:"tr",align:null},"Mon 05 Dec @ 03:24")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://snapshot.stakeworld.nl/rocksdb-polkadot.lz4"},"direct link")),(0,r.kt)("td",{parentName:"tr",align:null},"polkadot"),(0,r.kt)("td",{parentName:"tr",align:null},"rocksdb"),(0,r.kt)("td",{parentName:"tr",align:null},"pruned"),(0,r.kt)("td",{parentName:"tr",align:null},"13217395"),(0,r.kt)("td",{parentName:"tr",align:null},"110G"),(0,r.kt)("td",{parentName:"tr",align:null},"114G"),(0,r.kt)("td",{parentName:"tr",align:null},"Mon 05 Dec @ 03:31")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://snapshot.stakeworld.nl/paritydb-polkadot.lz4"},"direct link")),(0,r.kt)("td",{parentName:"tr",align:null},"polkadot"),(0,r.kt)("td",{parentName:"tr",align:null},"paritydb"),(0,r.kt)("td",{parentName:"tr",align:null},"pruned"),(0,r.kt)("td",{parentName:"tr",align:null},"13217464"),(0,r.kt)("td",{parentName:"tr",align:null},"110G"),(0,r.kt)("td",{parentName:"tr",align:null},"114G"),(0,r.kt)("td",{parentName:"tr",align:null},"Mon 05 Dec @ 03:38")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"ksmcc3"),(0,r.kt)("td",{parentName:"tr",align:null},"paritydb"),(0,r.kt)("td",{parentName:"tr",align:null},"archive"),(0,r.kt)("td",{parentName:"tr",align:null},"15619659"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"1.2T"),(0,r.kt)("td",{parentName:"tr",align:null},"Mon 05 Dec @ 03:44")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"polkadot"),(0,r.kt)("td",{parentName:"tr",align:null},"paritydb"),(0,r.kt)("td",{parentName:"tr",align:null},"archive"),(0,r.kt)("td",{parentName:"tr",align:null},"13217524"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"702G"),(0,r.kt)("td",{parentName:"tr",align:null},"Mon 05 Dec @ 03:44")))),(0,r.kt)("h2",{id:"database-size"},"Database size"),(0,r.kt)("p",null,"Below a overview of database sizes, you can also view only ",(0,r.kt)("a",{target:"_blank",href:e(3993).Z},"pruned")," or ",(0,r.kt)("a",{target:"_blank",href:e(9319).Z},"archive")," database size.\n",(0,r.kt)("img",{alt:"snapsize",src:e(2307).Z,width:"800",height:"300"})),(0,r.kt)("h2",{id:"automatic-install"},"Automatic install"),(0,r.kt)("p",null,"The following script can restore a snapshot for a quickstart. If you want you can first review it on ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/stakeworld/stakeworld-scripts/blob/master/node-install.sh"},"github"),'. You can choose "snapinstall" for a snapshot restore or "nodeinstall" to install a complete node. The script will ask some questions and create an install or restore script which you can review before executing.'),(0,r.kt)("p",null,"The script is for ubuntu/debian flavoured servers."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o- -L https://raw.githubusercontent.com/stakeworld/stakeworld-scripts/master/node-install.sh | bash\n")),(0,r.kt)("h2",{id:"install-the-database-directly"},"Install the database directly"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},'The default binary/systemctl from the apt repository will run as user "polkadot". If you install as root you will get an error "failed to create a test file: Permission denied". You can solve this by running ',(0,r.kt)("inlineCode",{parentName:"p"},"chown -R polkadot:polkadot <dbdir>"))),(0,r.kt)("p",null,"Install to ",(0,r.kt)("inlineCode",{parentName:"p"},"/root/.local/share/polkadot/chains/<chain>")," or change to your target directory."),(0,r.kt)("h3",{id:"paritydb-kusama"},"Paritydb kusama"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o - -L http://snapshot.stakeworld.nl/paritydb-ksmcc3.lz4 | lz4 -c -d - | tar -x -C /root/.local/share/polkadot/chains/ksmcc3\n")),(0,r.kt)("h3",{id:"paritydb-polkadot"},"Paritydb polkadot"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o - -L http://snapshot.stakeworld.nl/paritydb-polkadot.lz4 | lz4 -c -d - | tar -x -C /root/.local/share/polkadot/chains/polkadot\n")),(0,r.kt)("h3",{id:"rocksdb-kusama"},"Rocksdb kusama"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o - -L http://snapshot.stakeworld.nl/rocksdb-ksmcc3.lz4 | lz4 -c -d - | tar -x -C /root/.local/share/polkadot/chains/ksmcc3\n")),(0,r.kt)("h3",{id:"rocksdb-polkadot"},"Rocksdb polkadot"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o - -L http://snapshot.stakeworld.nl/rocksdb-polkadot.lz4 | lz4 -c -d - | tar -x -C /root/.local/share/polkadot/chains/polkadot\n")))}A.isMDXComponent=!0},9418:(t,a,e)=>{e.d(a,{Z:()=>n});const n=e.p+"assets/files/yourvalidator-bb75e2b610b99850dea2ae3746ea5d53.service"},9319:(t,a,e)=>{e.d(a,{Z:()=>n});const n=e.p+"assets/files/archivesize-2492730c25273cb21e3ba14b85255204.png"},3993:(t,a,e)=>{e.d(a,{Z:()=>n});const n=e.p+"assets/files/prunedsize-9a874ef884069e534530ead2ae11180f.png"},2307:(t,a,e)=>{e.d(a,{Z:()=>n});const n="data:image/png;base64,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"}}]);