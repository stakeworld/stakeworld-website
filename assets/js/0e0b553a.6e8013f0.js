"use strict";(self.webpackChunkstakeworld=self.webpackChunkstakeworld||[]).push([[669],{3905:(t,a,e)=>{e.d(a,{Zo:()=>p,kt:()=>c});var r=e(7294);function n(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}function o(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,r)}return e}function i(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?o(Object(e),!0).forEach((function(a){n(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):o(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function l(t,a){if(null==t)return{};var e,r,n=function(t,a){if(null==t)return{};var e,r,n={},o=Object.keys(t);for(r=0;r<o.length;r++)e=o[r],a.indexOf(e)>=0||(n[e]=t[e]);return n}(t,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)e=o[r],a.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(n[e]=t[e])}return n}var s=r.createContext({}),A=function(t){var a=r.useContext(s),e=a;return t&&(e="function"==typeof t?t(a):i(i({},a),t)),e},p=function(t){var a=A(t.components);return r.createElement(s.Provider,{value:a},t.children)},d={inlineCode:"code",wrapper:function(t){var a=t.children;return r.createElement(r.Fragment,{},a)}},u=r.forwardRef((function(t,a){var e=t.components,n=t.mdxType,o=t.originalType,s=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),u=A(e),c=n,k=u["".concat(s,".").concat(c)]||u[c]||d[c]||o;return e?r.createElement(k,i(i({ref:a},p),{},{components:e})):r.createElement(k,i({ref:a},p))}));function c(t,a){var e=arguments,n=a&&a.mdxType;if("string"==typeof t||n){var o=e.length,i=new Array(o);i[0]=u;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=t,l.mdxType="string"==typeof t?t:n,i[1]=l;for(var A=2;A<o;A++)i[A]=e[A];return r.createElement.apply(null,i)}return r.createElement.apply(null,e)}u.displayName="MDXCreateElement"},3025:(t,a,e)=>{e.r(a),e.d(a,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>A});var r=e(3117),n=(e(7294),e(3905));const o={id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb format",slug:"/snapshot",sidebar_position:3,keywords:["validator setup","validator","validate","snapshot","rocksdb","paritydb","pruning","polkadot","kusama"]},i=void 0,l={unversionedId:"snapshot",id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb format",source:"@site/docs/snapshot.mdx",sourceDirName:".",slug:"/snapshot",permalink:"/docs/snapshot",draft:!1,editUrl:"https://github.com/stakeworld/website/edit/master/docs/snapshot.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb format",slug:"/snapshot",sidebar_position:3,keywords:["validator setup","validator","validate","snapshot","rocksdb","paritydb","pruning","polkadot","kusama"]},sidebar:"tutorialSidebar",previous:{title:"Pool",permalink:"/docs/pool"},next:{title:"RPC node",permalink:"/docs/rpc"}},s={},A=[{value:"Automatic install",id:"automatic-install",level:2},{value:"Install the database directly",id:"install-the-database-directly",level:2},{value:"Paritydb kusama",id:"paritydb-kusama",level:3},{value:"Paritydb polkadot",id:"paritydb-polkadot",level:3}],p={toc:A};function d(t){let{components:a,...o}=t;return(0,n.kt)("wrapper",(0,r.Z)({},p,o,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null}),(0,n.kt)("th",{parentName:"tr",align:null},"Chain"),(0,n.kt)("th",{parentName:"tr",align:null},"Database"),(0,n.kt)("th",{parentName:"tr",align:null},"Format"),(0,n.kt)("th",{parentName:"tr",align:null},"Blockheight"),(0,n.kt)("th",{parentName:"tr",align:null},"Size"),(0,n.kt)("th",{parentName:"tr",align:null},"Full"),(0,n.kt)("th",{parentName:"tr",align:null},"Creation date"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"http://snapshot.stakeworld.nl/paritydb-polkadot.lz4"},"direct link")),(0,n.kt)("td",{parentName:"tr",align:null},"polkadot"),(0,n.kt)("td",{parentName:"tr",align:null},"paritydb"),(0,n.kt)("td",{parentName:"tr",align:null},"pruned"),(0,n.kt)("td",{parentName:"tr",align:null},"12468682"),(0,n.kt)("td",{parentName:"tr",align:null},"105G"),(0,n.kt)("td",{parentName:"tr",align:null},"127G"),(0,n.kt)("td",{parentName:"tr",align:null},"Fri 14 Oct @ 01:20")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"http://snapshot.stakeworld.nl/paritydb-ksmcc3.lz4"},"direct link")),(0,n.kt)("td",{parentName:"tr",align:null},"ksmcc3"),(0,n.kt)("td",{parentName:"tr",align:null},"paritydb"),(0,n.kt)("td",{parentName:"tr",align:null},"pruned"),(0,n.kt)("td",{parentName:"tr",align:null},"14870627"),(0,n.kt)("td",{parentName:"tr",align:null},"160G"),(0,n.kt)("td",{parentName:"tr",align:null},"183G"),(0,n.kt)("td",{parentName:"tr",align:null},"Fri 14 Oct @ 01:37")))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"snapsize",src:e(2307).Z,width:"800",height:"300"})),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Snapshots are compressed backups of the database directory of a polkadot or kusama node. If you start a node for the first time it will start building from start (genesis), which will take a while. If you download an up to date database your node will be up and running quicker."),(0,n.kt)("p",{parentName:"admonition"},"The snapshots are available for kusama ",(0,n.kt)("inlineCode",{parentName:"p"},"--chain ksmcc3")," and polkadot ",(0,n.kt)("inlineCode",{parentName:"p"},"--chain polkadot")," in the paritydb ",(0,n.kt)("inlineCode",{parentName:"p"},"--database paritydb")," database format. They are pruned with ",(0,n.kt)("inlineCode",{parentName:"p"},"--pruning 1000"),", which is sufficient for a validator node.")),(0,n.kt)("h2",{id:"automatic-install"},"Automatic install"),(0,n.kt)("p",null,"The following script can restore a snapshot for a quickstart. If you want you can first review it on ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/stakeworld/stakeworld-scripts/blob/master/node-install.sh"},"github"),'. You can choose "snapinstall" for a snapshot restore. The script will ask some questions and create an restore script which you can review before executing.'),(0,n.kt)("p",null,"The script is for ubuntu/debian flavoured servers."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o- -L https://raw.githubusercontent.com/stakeworld/stakeworld-scripts/master/node-install.sh | bash\n")),(0,n.kt)("h2",{id:"install-the-database-directly"},"Install the database directly"),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},'The default binary/systemctl from the apt repository will run as user "polkadot". If you install as root you will get an error "failed to create a test file: Permission denied". You can solve this by running ',(0,n.kt)("inlineCode",{parentName:"p"},"chown -R polkadot:polkadot paritydb"))),(0,n.kt)("p",null,"Install to ",(0,n.kt)("inlineCode",{parentName:"p"},"/root/.local/share/polkadot/chains/<chain>")," or change to your target directory."),(0,n.kt)("h3",{id:"paritydb-kusama"},"Paritydb kusama"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o - -L http://snapshot.stakeworld.nl/paritydb-ksmcc3.lz4 | lz4 -c -d - | tar -x -C /root/.local/share/polkadot/chains/ksmcc3\n")),(0,n.kt)("h3",{id:"paritydb-polkadot"},"Paritydb polkadot"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o - -L http://snapshot.stakeworld.nl/paritydb-polkadot.lz4 | lz4 -c -d - | tar -x -C /root/.local/share/polkadot/chains/polkadot\n")))}d.isMDXComponent=!0},2307:(t,a,e)=>{e.d(a,{Z:()=>r});const r="data:image/png;base64,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"}}]);