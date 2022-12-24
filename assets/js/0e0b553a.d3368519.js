"use strict";(self.webpackChunkstakeworld=self.webpackChunkstakeworld||[]).push([[669],{3905:(t,a,e)=>{e.d(a,{Zo:()=>p,kt:()=>c});var n=e(7294);function r(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}function o(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,n)}return e}function l(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?o(Object(e),!0).forEach((function(a){r(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):o(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function d(t,a){if(null==t)return{};var e,n,r=function(t,a){if(null==t)return{};var e,n,r={},o=Object.keys(t);for(n=0;n<o.length;n++)e=o[n],a.indexOf(e)>=0||(r[e]=t[e]);return r}(t,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)e=o[n],a.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}var i=n.createContext({}),s=function(t){var a=n.useContext(i),e=a;return t&&(e="function"==typeof t?t(a):l(l({},a),t)),e},p=function(t){var a=s(t.components);return n.createElement(i.Provider,{value:a},t.children)},A={inlineCode:"code",wrapper:function(t){var a=t.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(t,a){var e=t.components,r=t.mdxType,o=t.originalType,i=t.parentName,p=d(t,["components","mdxType","originalType","parentName"]),u=s(e),c=r,k=u["".concat(i,".").concat(c)]||u[c]||A[c]||o;return e?n.createElement(k,l(l({ref:a},p),{},{components:e})):n.createElement(k,l({ref:a},p))}));function c(t,a){var e=arguments,r=a&&a.mdxType;if("string"==typeof t||r){var o=e.length,l=new Array(o);l[0]=u;var d={};for(var i in a)hasOwnProperty.call(a,i)&&(d[i]=a[i]);d.originalType=t,d.mdxType="string"==typeof t?t:r,l[1]=d;for(var s=2;s<o;s++)l[s]=e[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,e)}u.displayName="MDXCreateElement"},3025:(t,a,e)=>{e.r(a),e.d(a,{assets:()=>i,contentTitle:()=>l,default:()=>A,frontMatter:()=>o,metadata:()=>d,toc:()=>s});var n=e(3117),r=(e(7294),e(3905));const o={id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",slug:"/snapshot",sidebar_position:3,keywords:["validator setup","validator","validate","snapshot","rocksdb","paritydb","pruning","polkadot","kusama"]},l=void 0,d={unversionedId:"snapshot",id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",source:"@site/docs/snapshot.mdx",sourceDirName:".",slug:"/snapshot",permalink:"/docs/snapshot",draft:!1,editUrl:"https://github.com/stakeworld/website/edit/master/docs/snapshot.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",slug:"/snapshot",sidebar_position:3,keywords:["validator setup","validator","validate","snapshot","rocksdb","paritydb","pruning","polkadot","kusama"]},sidebar:"tutorialSidebar",previous:{title:"Pool",permalink:"/docs/pool"},next:{title:"RPC node",permalink:"/docs/rpc"}},i={},s=[{value:"Snapshots",id:"snapshots",level:2},{value:"Database size",id:"database-size",level:2},{value:"Automatic install",id:"automatic-install",level:2},{value:"Install the database directly",id:"install-the-database-directly",level:2},{value:"Paritydb kusama",id:"paritydb-kusama",level:3},{value:"Paritydb polkadot",id:"paritydb-polkadot",level:3},{value:"Rocksdb kusama",id:"rocksdb-kusama",level:3},{value:"Rocksdb polkadot",id:"rocksdb-polkadot",level:3}],p={toc:s};function A(t){let{components:a,...o}=t;return(0,r.kt)("wrapper",(0,n.Z)({},p,o,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Snapshots are compressed backups of the database directory of a polkadot or kusama node. If you start a node for the first time it will start building the database from scratch, which will take a few days, depending on network speed. If you download an up to date database snapshot your node will be up and running quicker; under an hour or a few hours, depending on network speed.")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"In principle building from scratch is the safest and cleanest; if there is an error in the snapshot database, this will propagate to the nodes who download the database. Also the database size increases with extended usage. STAKEWORLD checks for errors and periodically rebuilds its databases to ensure error free databases with minimum disk usage.")),(0,r.kt)("h2",{id:"snapshots"},"Snapshots"),(0,r.kt)("p",null,"The snapshots are available for kusama ",(0,r.kt)("inlineCode",{parentName:"p"},"--chain ksmcc3")," and polkadot ",(0,r.kt)("inlineCode",{parentName:"p"},"--chain polkadot")," in the paritydb ",(0,r.kt)("inlineCode",{parentName:"p"},"--database paritydb")," and the rocksdb ",(0,r.kt)("inlineCode",{parentName:"p"},"--database rocksdb")," database format. They are pruned with ",(0,r.kt)("inlineCode",{parentName:"p"},"--state-pruning 1000"),", which is sufficient for a validator node."),(0,r.kt)("p",null,"An example systemctl service file can be found here: ",(0,r.kt)("a",{target:"_blank",href:e(9418).Z},(0,r.kt)("code",null,"yourvalidator.service")),". Copy to ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/systemd/system")," and of course change ",(0,r.kt)("inlineCode",{parentName:"p"},"--name"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"--chain")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"--database")," to your preference."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},"Chain"),(0,r.kt)("th",{parentName:"tr",align:null},"Database"),(0,r.kt)("th",{parentName:"tr",align:null},"Format"),(0,r.kt)("th",{parentName:"tr",align:null},"Blockheight"),(0,r.kt)("th",{parentName:"tr",align:null},"Size"),(0,r.kt)("th",{parentName:"tr",align:null},"Full"),(0,r.kt)("th",{parentName:"tr",align:null},"Creation date"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://snapshot.stakeworld.nl/rocksdb-ksmcc3.lz4"},"direct link")),(0,r.kt)("td",{parentName:"tr",align:null},"ksmcc3"),(0,r.kt)("td",{parentName:"tr",align:null},"rocksdb"),(0,r.kt)("td",{parentName:"tr",align:null},"pruned"),(0,r.kt)("td",{parentName:"tr",align:null},"15878888"),(0,r.kt)("td",{parentName:"tr",align:null},"182G"),(0,r.kt)("td",{parentName:"tr",align:null},"189G"),(0,r.kt)("td",{parentName:"tr",align:null},"Sat 24 Dec @ 02:22")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://snapshot.stakeworld.nl/paritydb-ksmcc3.lz4"},"direct link")),(0,r.kt)("td",{parentName:"tr",align:null},"ksmcc3"),(0,r.kt)("td",{parentName:"tr",align:null},"paritydb"),(0,r.kt)("td",{parentName:"tr",align:null},"pruned"),(0,r.kt)("td",{parentName:"tr",align:null},"15878991"),(0,r.kt)("td",{parentName:"tr",align:null},"156G"),(0,r.kt)("td",{parentName:"tr",align:null},"163G"),(0,r.kt)("td",{parentName:"tr",align:null},"Sat 24 Dec @ 02:32")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://snapshot.stakeworld.nl/rocksdb-polkadot.lz4"},"direct link")),(0,r.kt)("td",{parentName:"tr",align:null},"polkadot"),(0,r.kt)("td",{parentName:"tr",align:null},"rocksdb"),(0,r.kt)("td",{parentName:"tr",align:null},"pruned"),(0,r.kt)("td",{parentName:"tr",align:null},"13489453"),(0,r.kt)("td",{parentName:"tr",align:null},"110G"),(0,r.kt)("td",{parentName:"tr",align:null},"115G"),(0,r.kt)("td",{parentName:"tr",align:null},"Sat 24 Dec @ 02:40")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://snapshot.stakeworld.nl/paritydb-polkadot.lz4"},"direct link")),(0,r.kt)("td",{parentName:"tr",align:null},"polkadot"),(0,r.kt)("td",{parentName:"tr",align:null},"paritydb"),(0,r.kt)("td",{parentName:"tr",align:null},"pruned"),(0,r.kt)("td",{parentName:"tr",align:null},"13489522"),(0,r.kt)("td",{parentName:"tr",align:null},"110G"),(0,r.kt)("td",{parentName:"tr",align:null},"114G"),(0,r.kt)("td",{parentName:"tr",align:null},"Sat 24 Dec @ 02:46")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"ksmcc3"),(0,r.kt)("td",{parentName:"tr",align:null},"paritydb"),(0,r.kt)("td",{parentName:"tr",align:null},"archive"),(0,r.kt)("td",{parentName:"tr",align:null},"15879194"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"1.2T"),(0,r.kt)("td",{parentName:"tr",align:null},"Sat 24 Dec @ 02:52")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"polkadot"),(0,r.kt)("td",{parentName:"tr",align:null},"paritydb"),(0,r.kt)("td",{parentName:"tr",align:null},"archive"),(0,r.kt)("td",{parentName:"tr",align:null},"13489581"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"739G"),(0,r.kt)("td",{parentName:"tr",align:null},"Sat 24 Dec @ 02:52")))),(0,r.kt)("h2",{id:"database-size"},"Database size"),(0,r.kt)("p",null,"Below a overview of database sizes, you can also view only ",(0,r.kt)("a",{target:"_blank",href:e(3993).Z},"pruned")," or ",(0,r.kt)("a",{target:"_blank",href:e(9319).Z},"archive")," database size.\n",(0,r.kt)("img",{alt:"snapsize",src:e(2307).Z,width:"800",height:"300"})),(0,r.kt)("h2",{id:"automatic-install"},"Automatic install"),(0,r.kt)("p",null,"The following script can restore a snapshot for a quickstart. If you want you can first review it on ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/stakeworld/stakeworld-scripts/blob/master/node-install.sh"},"github"),'. You can choose "snapinstall" for a snapshot restore or "nodeinstall" to install a complete node. The script will ask some questions and create an install or restore script which you can review before executing.'),(0,r.kt)("p",null,"The script is for ubuntu/debian flavoured servers."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o- -L https://raw.githubusercontent.com/stakeworld/stakeworld-scripts/master/node-install.sh | bash\n")),(0,r.kt)("h2",{id:"install-the-database-directly"},"Install the database directly"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},'The default binary/systemctl from the apt repository will run as user "polkadot". If you install as root you will get an error "failed to create a test file: Permission denied". You can solve this by running ',(0,r.kt)("inlineCode",{parentName:"p"},"chown -R polkadot:polkadot <dbdir>"))),(0,r.kt)("p",null,"Install to ",(0,r.kt)("inlineCode",{parentName:"p"},"/root/.local/share/polkadot/chains/<chain>")," or change to your target directory."),(0,r.kt)("h3",{id:"paritydb-kusama"},"Paritydb kusama"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o - -L http://snapshot.stakeworld.io/paritydb-ksmcc3.lz4 | lz4 -c -d - | tar -x -C /root/.local/share/polkadot/chains/ksmcc3\n")),(0,r.kt)("h3",{id:"paritydb-polkadot"},"Paritydb polkadot"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o - -L http://snapshot.stakeworld.io/paritydb-polkadot.lz4 | lz4 -c -d - | tar -x -C /root/.local/share/polkadot/chains/polkadot\n")),(0,r.kt)("h3",{id:"rocksdb-kusama"},"Rocksdb kusama"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o - -L http://snapshot.stakeworld.io/rocksdb-ksmcc3.lz4 | lz4 -c -d - | tar -x -C /root/.local/share/polkadot/chains/ksmcc3\n")),(0,r.kt)("h3",{id:"rocksdb-polkadot"},"Rocksdb polkadot"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o - -L http://snapshot.stakeworld.io/rocksdb-polkadot.lz4 | lz4 -c -d - | tar -x -C /root/.local/share/polkadot/chains/polkadot\n")))}A.isMDXComponent=!0},9418:(t,a,e)=>{e.d(a,{Z:()=>n});const n=e.p+"assets/files/yourvalidator-bb75e2b610b99850dea2ae3746ea5d53.service"},9319:(t,a,e)=>{e.d(a,{Z:()=>n});const n=e.p+"assets/files/archivesize-dc21813a8a4d0a00058ec72c41fb0851.png"},3993:(t,a,e)=>{e.d(a,{Z:()=>n});const n=e.p+"assets/files/prunedsize-2f2c7efad49c9c1fa24e780039107997.png"},2307:(t,a,e)=>{e.d(a,{Z:()=>n});const n="data:image/png;base64,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"}}]);