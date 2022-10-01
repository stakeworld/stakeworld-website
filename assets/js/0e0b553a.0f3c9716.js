"use strict";(self.webpackChunkstakeworld=self.webpackChunkstakeworld||[]).push([[669],{3905:(t,a,e)=>{e.d(a,{Zo:()=>d,kt:()=>k});var r=e(7294);function n(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}function l(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,r)}return e}function o(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?l(Object(e),!0).forEach((function(a){n(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):l(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function i(t,a){if(null==t)return{};var e,r,n=function(t,a){if(null==t)return{};var e,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)e=l[r],a.indexOf(e)>=0||(n[e]=t[e]);return n}(t,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)e=l[r],a.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(n[e]=t[e])}return n}var s=r.createContext({}),p=function(t){var a=r.useContext(s),e=a;return t&&(e="function"==typeof t?t(a):o(o({},a),t)),e},d=function(t){var a=p(t.components);return r.createElement(s.Provider,{value:a},t.children)},A={inlineCode:"code",wrapper:function(t){var a=t.children;return r.createElement(r.Fragment,{},a)}},u=r.forwardRef((function(t,a){var e=t.components,n=t.mdxType,l=t.originalType,s=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),u=p(e),k=n,c=u["".concat(s,".").concat(k)]||u[k]||A[k]||l;return e?r.createElement(c,o(o({ref:a},d),{},{components:e})):r.createElement(c,o({ref:a},d))}));function k(t,a){var e=arguments,n=a&&a.mdxType;if("string"==typeof t||n){var l=e.length,o=new Array(l);o[0]=u;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=t,i.mdxType="string"==typeof t?t:n,o[1]=i;for(var p=2;p<l;p++)o[p]=e[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,e)}u.displayName="MDXCreateElement"},3025:(t,a,e)=>{e.r(a),e.d(a,{assets:()=>s,contentTitle:()=>o,default:()=>A,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var r=e(3117),n=(e(7294),e(3905));const l={id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb format",slug:"/snapshot",sidebar_position:3,keywords:["validator setup","validator","validate","snapshot","rocksdb","paritydb","pruning","polkadot","kusama"]},o=void 0,i={unversionedId:"snapshot",id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb format",source:"@site/docs/snapshot.mdx",sourceDirName:".",slug:"/snapshot",permalink:"/docs/snapshot",draft:!1,editUrl:"https://github.com/stakeworld/website/edit/master/docs/snapshot.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb format",slug:"/snapshot",sidebar_position:3,keywords:["validator setup","validator","validate","snapshot","rocksdb","paritydb","pruning","polkadot","kusama"]},sidebar:"tutorialSidebar",previous:{title:"Pool",permalink:"/docs/pool"},next:{title:"Validate",permalink:"/docs/category/validate"}},s={},p=[{value:"Automatic install",id:"automatic-install",level:2},{value:"Install the database directly",id:"install-the-database-directly",level:2},{value:"Paritydb kusama",id:"paritydb-kusama",level:3},{value:"Paritydb polkadot",id:"paritydb-polkadot",level:3}],d={toc:p};function A(t){let{components:a,...l}=t;return(0,n.kt)("wrapper",(0,r.Z)({},d,l,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null}),(0,n.kt)("th",{parentName:"tr",align:null},"Chain"),(0,n.kt)("th",{parentName:"tr",align:null},"Database"),(0,n.kt)("th",{parentName:"tr",align:null},"Format"),(0,n.kt)("th",{parentName:"tr",align:null},"Blockheight"),(0,n.kt)("th",{parentName:"tr",align:null},"Size"),(0,n.kt)("th",{parentName:"tr",align:null},"Full"),(0,n.kt)("th",{parentName:"tr",align:null},"Creation date"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"http://snapshot.stakeworld.nl/paritydb-polkadot.lz4"},"direct link")),(0,n.kt)("td",{parentName:"tr",align:null},"polkadot"),(0,n.kt)("td",{parentName:"tr",align:null},"paritydb"),(0,n.kt)("td",{parentName:"tr",align:null},"pruned"),(0,n.kt)("td",{parentName:"tr",align:null},"12281597"),(0,n.kt)("td",{parentName:"tr",align:null},"100G"),(0,n.kt)("td",{parentName:"tr",align:null},"121G"),(0,n.kt)("td",{parentName:"tr",align:null},"Sat 01 Oct @ 01:20")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"http://snapshot.stakeworld.nl/paritydb-ksmcc3.lz4"},"direct link")),(0,n.kt)("td",{parentName:"tr",align:null},"ksmcc3"),(0,n.kt)("td",{parentName:"tr",align:null},"paritydb"),(0,n.kt)("td",{parentName:"tr",align:null},"pruned"),(0,n.kt)("td",{parentName:"tr",align:null},"14683600"),(0,n.kt)("td",{parentName:"tr",align:null},"155G"),(0,n.kt)("td",{parentName:"tr",align:null},"176G"),(0,n.kt)("td",{parentName:"tr",align:null},"Sat 01 Oct @ 01:37")))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"snapsize",src:e(2307).Z,width:"800",height:"300"})),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Snapshots are compressed backups of the database directory of a polkadot or kusama node. If you start a node for the first time it will start building from start (genesis), which will take a while. If you download an up to date database your node will be up and running quicker."),(0,n.kt)("p",{parentName:"admonition"},"The snapshots are available for kusama ",(0,n.kt)("inlineCode",{parentName:"p"},"--chain ksmcc3")," and polkadot ",(0,n.kt)("inlineCode",{parentName:"p"},"--chain polkadot")," in the paritydb ",(0,n.kt)("inlineCode",{parentName:"p"},"--database paritydb")," database format. They are pruned with ",(0,n.kt)("inlineCode",{parentName:"p"},"--pruning 1000"),", which is sufficient for a validator node.")),(0,n.kt)("h2",{id:"automatic-install"},"Automatic install"),(0,n.kt)("p",null,"The following script can restore a snapshot for a quickstart. If you want you can first review it on ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/stakeworld/stakeworld-scripts/blob/master/node-install.sh"},"github"),'. You can choose "snapinstall" for a snapshot restore. The script will ask some questions and create an restore script which you can review before executing.'),(0,n.kt)("p",null,"The script is for ubuntu/debian flavoured servers."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o- -L https://raw.githubusercontent.com/stakeworld/stakeworld-scripts/master/node-install.sh | bash\n")),(0,n.kt)("h2",{id:"install-the-database-directly"},"Install the database directly"),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},'The default binary/systemctl from the apt repository will run as user "polkadot". If you install as root you will get an error "failed to create a test file: Permission denied". You can solve this by running ',(0,n.kt)("inlineCode",{parentName:"p"},"chown -R polkadot:polkadot paritydb"))),(0,n.kt)("p",null,"Install to ",(0,n.kt)("inlineCode",{parentName:"p"},"/root/.local/share/polkadot/chains/<chain>")," or change to your target directory."),(0,n.kt)("h3",{id:"paritydb-kusama"},"Paritydb kusama"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o - -L http://snapshot.stakeworld.nl/paritydb-ksmcc3.lz4 | lz4 -c -d - | tar -x -C /root/.local/share/polkadot/chains/ksmcc3\n")),(0,n.kt)("h3",{id:"paritydb-polkadot"},"Paritydb polkadot"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o - -L http://snapshot.stakeworld.nl/paritydb-polkadot.lz4 | lz4 -c -d - | tar -x -C /root/.local/share/polkadot/chains/polkadot\n")))}A.isMDXComponent=!0},2307:(t,a,e)=>{e.d(a,{Z:()=>r});const r="data:image/png;base64,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"}}]);