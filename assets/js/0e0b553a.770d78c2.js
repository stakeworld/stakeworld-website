"use strict";(self.webpackChunkstakeworld=self.webpackChunkstakeworld||[]).push([[669],{3905:(t,a,e)=>{e.d(a,{Zo:()=>A,kt:()=>c});var n=e(7294);function r(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}function o(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,n)}return e}function i(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?o(Object(e),!0).forEach((function(a){r(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):o(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function l(t,a){if(null==t)return{};var e,n,r=function(t,a){if(null==t)return{};var e,n,r={},o=Object.keys(t);for(n=0;n<o.length;n++)e=o[n],a.indexOf(e)>=0||(r[e]=t[e]);return r}(t,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)e=o[n],a.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}var s=n.createContext({}),p=function(t){var a=n.useContext(s),e=a;return t&&(e="function"==typeof t?t(a):i(i({},a),t)),e},A=function(t){var a=p(t.components);return n.createElement(s.Provider,{value:a},t.children)},d={inlineCode:"code",wrapper:function(t){var a=t.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(t,a){var e=t.components,r=t.mdxType,o=t.originalType,s=t.parentName,A=l(t,["components","mdxType","originalType","parentName"]),u=p(e),c=r,k=u["".concat(s,".").concat(c)]||u[c]||d[c]||o;return e?n.createElement(k,i(i({ref:a},A),{},{components:e})):n.createElement(k,i({ref:a},A))}));function c(t,a){var e=arguments,r=a&&a.mdxType;if("string"==typeof t||r){var o=e.length,i=new Array(o);i[0]=u;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=t,l.mdxType="string"==typeof t?t:r,i[1]=l;for(var p=2;p<o;p++)i[p]=e[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,e)}u.displayName="MDXCreateElement"},3025:(t,a,e)=>{e.r(a),e.d(a,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=e(3117),r=(e(7294),e(3905));const o={id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",slug:"/snapshot",sidebar_position:3,keywords:["validator setup","validator","validate","snapshot","rocksdb","paritydb","pruning","polkadot","kusama"]},i=void 0,l={unversionedId:"snapshot",id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",source:"@site/docs/snapshot.mdx",sourceDirName:".",slug:"/snapshot",permalink:"/docs/snapshot",draft:!1,editUrl:"https://github.com/stakeworld/website/edit/master/docs/snapshot.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",slug:"/snapshot",sidebar_position:3,keywords:["validator setup","validator","validate","snapshot","rocksdb","paritydb","pruning","polkadot","kusama"]},sidebar:"tutorialSidebar",previous:{title:"Pool",permalink:"/docs/pool"},next:{title:"Validate",permalink:"/docs/category/validate"}},s={},p=[{value:"Automatic install",id:"automatic-install",level:2},{value:"Install the database directly",id:"install-the-database-directly",level:2},{value:"Paritydb kusama",id:"paritydb-kusama",level:3},{value:"Paritydb polkadot",id:"paritydb-polkadot",level:3}],A={toc:p};function d(t){let{components:a,...o}=t;return(0,r.kt)("wrapper",(0,n.Z)({},A,o,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},"Chain"),(0,r.kt)("th",{parentName:"tr",align:null},"Database"),(0,r.kt)("th",{parentName:"tr",align:null},"Format"),(0,r.kt)("th",{parentName:"tr",align:null},"Blockheight"),(0,r.kt)("th",{parentName:"tr",align:null},"Size"),(0,r.kt)("th",{parentName:"tr",align:null},"Full"),(0,r.kt)("th",{parentName:"tr",align:null},"Creation date"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://snapshot.stakeworld.nl/paritydb-polkadot.lz4"},"direct link")),(0,r.kt)("td",{parentName:"tr",align:null},"polkadot"),(0,r.kt)("td",{parentName:"tr",align:null},"paritydb"),(0,r.kt)("td",{parentName:"tr",align:null},"pruned"),(0,r.kt)("td",{parentName:"tr",align:null},"12225278"),(0,r.kt)("td",{parentName:"tr",align:null},"99G"),(0,r.kt)("td",{parentName:"tr",align:null},"119G"),(0,r.kt)("td",{parentName:"tr",align:null},"Tue 27 Sep @ 01:20")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://snapshot.stakeworld.nl/paritydb-ksmcc3.lz4"},"direct link")),(0,r.kt)("td",{parentName:"tr",align:null},"ksmcc3"),(0,r.kt)("td",{parentName:"tr",align:null},"paritydb"),(0,r.kt)("td",{parentName:"tr",align:null},"pruned"),(0,r.kt)("td",{parentName:"tr",align:null},"14627270"),(0,r.kt)("td",{parentName:"tr",align:null},"153G"),(0,r.kt)("td",{parentName:"tr",align:null},"174G"),(0,r.kt)("td",{parentName:"tr",align:null},"Tue 27 Sep @ 01:35")))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"snapsize",src:e(2307).Z,width:"800",height:"300"})),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Snapshots are compressed backups of the database directory of a polkadot or kusama node. If you start a node for the first time it will start building from start (genesis), which will take a while. If you download an up to date database your node will be up and running quicker."),(0,r.kt)("p",{parentName:"admonition"},"The snapshots are available for kusama ",(0,r.kt)("inlineCode",{parentName:"p"},"--chain ksmcc3")," and polkadot ",(0,r.kt)("inlineCode",{parentName:"p"},"--chain polkadot")," in the paritydb ",(0,r.kt)("inlineCode",{parentName:"p"},"--database paritydb")," database format. They are pruned with ",(0,r.kt)("inlineCode",{parentName:"p"},"--pruning 1000"),", which is sufficient for a validator node.")),(0,r.kt)("h2",{id:"automatic-install"},"Automatic install"),(0,r.kt)("p",null,"The following script can restore a snapshot for a quickstart. If you want you can first review it on ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/stakeworld/stakeworld-scripts/blob/master/node-install.sh"},"github"),'. You can choose "snapinstall" for a snapshot restore. The script will ask some questions and create an restore script which you can review before executing.'),(0,r.kt)("p",null,"The script is for ubuntu/debian flavoured servers."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o- -L https://raw.githubusercontent.com/stakeworld/stakeworld-scripts/master/node-install.sh | bash\n")),(0,r.kt)("h2",{id:"install-the-database-directly"},"Install the database directly"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},'The default binary/systemctl from the apt repository will run as user "polkadot". If you install as root you will get an error "failed to create a test file: Permission denied". You can solve this by running ',(0,r.kt)("inlineCode",{parentName:"p"},"chown -R polkadot:polkadot paritydb"))),(0,r.kt)("p",null,"Install to ",(0,r.kt)("inlineCode",{parentName:"p"},"/root/.local/share/polkadot/chains/<chain>")," or change to your target directory."),(0,r.kt)("h3",{id:"paritydb-kusama"},"Paritydb kusama"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o - -L http://snapshot.stakeworld.nl/paritydb-ksmcc3.lz4 | lz4 -c -d - | tar -x -C /root/.local/share/polkadot/chains/ksmcc3\n")),(0,r.kt)("h3",{id:"paritydb-polkadot"},"Paritydb polkadot"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o - -L http://snapshot.stakeworld.nl/paritydb-polkadot.lz4 | lz4 -c -d - | tar -x -C /root/.local/share/polkadot/chains/polkadot\n")))}d.isMDXComponent=!0},2307:(t,a,e)=>{e.d(a,{Z:()=>n});const n="data:image/png;base64,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"}}]);