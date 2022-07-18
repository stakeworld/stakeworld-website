"use strict";(self.webpackChunkstakeworld=self.webpackChunkstakeworld||[]).push([[158],{3905:(t,a,e)=>{e.d(a,{Zo:()=>k,kt:()=>u});var n=e(7294);function r(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}function l(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,n)}return e}function o(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?l(Object(e),!0).forEach((function(a){r(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):l(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function d(t,a){if(null==t)return{};var e,n,r=function(t,a){if(null==t)return{};var e,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)e=l[n],a.indexOf(e)>=0||(r[e]=t[e]);return r}(t,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)e=l[n],a.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}var p=n.createContext({}),i=function(t){var a=n.useContext(p),e=a;return t&&(e="function"==typeof t?t(a):o(o({},a),t)),e},k=function(t){var a=i(t.components);return n.createElement(p.Provider,{value:a},t.children)},s={inlineCode:"code",wrapper:function(t){var a=t.children;return n.createElement(n.Fragment,{},a)}},A=n.forwardRef((function(t,a){var e=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,k=d(t,["components","mdxType","originalType","parentName"]),A=i(e),u=r,c=A["".concat(p,".").concat(u)]||A[u]||s[u]||l;return e?n.createElement(c,o(o({ref:a},k),{},{components:e})):n.createElement(c,o({ref:a},k))}));function u(t,a){var e=arguments,r=a&&a.mdxType;if("string"==typeof t||r){var l=e.length,o=new Array(l);o[0]=A;var d={};for(var p in a)hasOwnProperty.call(a,p)&&(d[p]=a[p]);d.originalType=t,d.mdxType="string"==typeof t?t:r,o[1]=d;for(var i=2;i<l;i++)o[i]=e[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,e)}A.displayName="MDXCreateElement"},6152:(t,a,e)=>{e.r(a),e.d(a,{assets:()=>p,contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>d,toc:()=>i});var n=e(3117),r=(e(7294),e(3905));const l={id:"snapshot",title:"Snapshots",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",slug:"/snapshot",sidebar_position:2,keywords:["validator setup","validator","validate","snapshot","rocksdb","paritydb","pruning","polkadot","kusama"]},o=void 0,d={unversionedId:"validate/snapshot",id:"validate/snapshot",title:"Snapshots",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",source:"@site/docs/validate/snapshot.mdx",sourceDirName:"validate",slug:"/snapshot",permalink:"/docs/snapshot",draft:!1,editUrl:"https://github.com/stakeworld/website/edit/master/docs/validate/snapshot.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"snapshot",title:"Snapshots",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",slug:"/snapshot",sidebar_position:2,keywords:["validator setup","validator","validate","snapshot","rocksdb","paritydb","pruning","polkadot","kusama"]},sidebar:"tutorialSidebar",previous:{title:"Setting up a validator node",permalink:"/docs/validate"},next:{title:"Monitoring a validator node",permalink:"/docs/monitor"}},p={},i=[{value:"Download the database",id:"download-the-database",level:2},{value:"Paritydb kusama",id:"paritydb-kusama",level:3},{value:"Paritydb polkadot",id:"paritydb-polkadot",level:3},{value:"Rocksdb polkadot",id:"rocksdb-polkadot",level:3},{value:"Rocksdb polkadot",id:"rocksdb-polkadot-1",level:3},{value:"Install the database directly",id:"install-the-database-directly",level:2},{value:"Paritydb kusama",id:"paritydb-kusama-1",level:3},{value:"Paritydb polkadot",id:"paritydb-polkadot-1",level:3},{value:"Rocksdb kusama",id:"rocksdb-kusama",level:3},{value:"Rocksdb polkadot",id:"rocksdb-polkadot-2",level:3}],k={toc:i};function s(t){let{components:a,...l}=t;return(0,r.kt)("wrapper",(0,n.Z)({},k,l,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},"Chain"),(0,r.kt)("th",{parentName:"tr",align:null},"Database"),(0,r.kt)("th",{parentName:"tr",align:null},"Format"),(0,r.kt)("th",{parentName:"tr",align:null},"Blockheight"),(0,r.kt)("th",{parentName:"tr",align:null},"Size"),(0,r.kt)("th",{parentName:"tr",align:null},"Full"),(0,r.kt)("th",{parentName:"tr",align:null},"Backup date"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://snapshot.stakeworld.nl/paritydb-polkadot.lz4"},"direct link")),(0,r.kt)("td",{parentName:"tr",align:null},"polkadot"),(0,r.kt)("td",{parentName:"tr",align:null},"paritydb"),(0,r.kt)("td",{parentName:"tr",align:null},"pruned"),(0,r.kt)("td",{parentName:"tr",align:null},"11221122"),(0,r.kt)("td",{parentName:"tr",align:null},"78G"),(0,r.kt)("td",{parentName:"tr",align:null},"92G"),(0,r.kt)("td",{parentName:"tr",align:null},"Mon 18 Jul @ 21:58")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://snapshot.stakeworld.nl/rocksdb-polkadot.lz4"},"direct link")),(0,r.kt)("td",{parentName:"tr",align:null},"polkadot"),(0,r.kt)("td",{parentName:"tr",align:null},"rocksdb"),(0,r.kt)("td",{parentName:"tr",align:null},"pruned"),(0,r.kt)("td",{parentName:"tr",align:null},"11221251"),(0,r.kt)("td",{parentName:"tr",align:null},"77G"),(0,r.kt)("td",{parentName:"tr",align:null},"93G"),(0,r.kt)("td",{parentName:"tr",align:null},"Mon 18 Jul @ 22:11")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://snapshot.stakeworld.nl/paritydb-ksmcc3.lz4"},"direct link")),(0,r.kt)("td",{parentName:"tr",align:null},"ksmcc3"),(0,r.kt)("td",{parentName:"tr",align:null},"paritydb"),(0,r.kt)("td",{parentName:"tr",align:null},"pruned"),(0,r.kt)("td",{parentName:"tr",align:null},"13619474"),(0,r.kt)("td",{parentName:"tr",align:null},"128G"),(0,r.kt)("td",{parentName:"tr",align:null},"143G"),(0,r.kt)("td",{parentName:"tr",align:null},"Mon 18 Jul @ 22:17")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://snapshot.stakeworld.nl/rocksdb-ksmcc3.lz4"},"direct link")),(0,r.kt)("td",{parentName:"tr",align:null},"ksmcc3"),(0,r.kt)("td",{parentName:"tr",align:null},"rocksdb"),(0,r.kt)("td",{parentName:"tr",align:null},"pruned"),(0,r.kt)("td",{parentName:"tr",align:null},"13619528"),(0,r.kt)("td",{parentName:"tr",align:null},"130G"),(0,r.kt)("td",{parentName:"tr",align:null},"146G"),(0,r.kt)("td",{parentName:"tr",align:null},"Mon 18 Jul @ 22:22")))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"snapsize",src:e(2307).Z,width:"800",height:"300"})),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Snapshots are compressed backups of the database directory of a polkadot or kusama node. If you start a node for the first time it will start building from start (genesis), which will take a while. If you download an up to date database your node will be up and running quicker."),(0,r.kt)("p",{parentName:"admonition"},"The snapshots are available for kusama ",(0,r.kt)("inlineCode",{parentName:"p"},"--chain ksmcc3")," and polkadot ",(0,r.kt)("inlineCode",{parentName:"p"},"--chain polkadot")," in the paritydb ",(0,r.kt)("inlineCode",{parentName:"p"},"--database paritydb")," and rocksdb ",(0,r.kt)("inlineCode",{parentName:"p"},"--database rocksdb")," format (rocksdb being the default). They are pruned with ",(0,r.kt)("inlineCode",{parentName:"p"},"--pruning 1000"),", which is sufficient for a validator node.")),(0,r.kt)("h2",{id:"download-the-database"},"Download the database"),(0,r.kt)("h3",{id:"paritydb-kusama"},"Paritydb kusama"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"wget http://snapshot.stakeworld.nl/paritydb-ksmcc3.lz4\n")),(0,r.kt)("h3",{id:"paritydb-polkadot"},"Paritydb polkadot"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"wget http://snapshot.stakeworld.nl/paritydb-polkadot.lz4\n")),(0,r.kt)("h3",{id:"rocksdb-polkadot"},"Rocksdb polkadot"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"wget http://snapshot.stakeworld.nl/rocksdb-ksmcc3.lz4\n")),(0,r.kt)("h3",{id:"rocksdb-polkadot-1"},"Rocksdb polkadot"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"wget http://snapshot.stakeworld.nl/rocksdb-polkadot.lz4\n")),(0,r.kt)("h2",{id:"install-the-database-directly"},"Install the database directly"),(0,r.kt)("p",null,"Install to ",(0,r.kt)("inlineCode",{parentName:"p"},"/home/polkadot/.local/share/polkadot/chains/<chain>")," or change to your target directory."),(0,r.kt)("h3",{id:"paritydb-kusama-1"},"Paritydb kusama"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o - -L http://snapshot.stakeworld.nl/paritydb-ksmcc3.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/ksmcc3\n")),(0,r.kt)("h3",{id:"paritydb-polkadot-1"},"Paritydb polkadot"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o - -L http://snapshot.stakeworld.nl/paritydb-polkadot.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/polkadot\n")),(0,r.kt)("h3",{id:"rocksdb-kusama"},"Rocksdb kusama"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o - -L http://snapshot.stakeworld.nl/rocksdb-ksmcc3.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/ksmcc3\n")),(0,r.kt)("h3",{id:"rocksdb-polkadot-2"},"Rocksdb polkadot"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o - -L http://snapshot.stakeworld.nl/rocksdb-polkadot.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/polkadot\n")))}s.isMDXComponent=!0},2307:(t,a,e)=>{e.d(a,{Z:()=>n});const n="data:image/png;base64,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"}}]);