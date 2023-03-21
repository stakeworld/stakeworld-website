"use strict";(self.webpackChunkstakeworld=self.webpackChunkstakeworld||[]).push([[669],{3905:(t,a,e)=>{e.d(a,{Zo:()=>p,kt:()=>k});var n=e(7294);function r(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}function l(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,n)}return e}function o(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?l(Object(e),!0).forEach((function(a){r(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):l(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function s(t,a){if(null==t)return{};var e,n,r=function(t,a){if(null==t)return{};var e,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)e=l[n],a.indexOf(e)>=0||(r[e]=t[e]);return r}(t,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)e=l[n],a.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}var i=n.createContext({}),d=function(t){var a=n.useContext(i),e=a;return t&&(e="function"==typeof t?t(a):o(o({},a),t)),e},p=function(t){var a=d(t.components);return n.createElement(i.Provider,{value:a},t.children)},c={inlineCode:"code",wrapper:function(t){var a=t.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(t,a){var e=t.components,r=t.mdxType,l=t.originalType,i=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),u=d(e),k=r,m=u["".concat(i,".").concat(k)]||u[k]||c[k]||l;return e?n.createElement(m,o(o({ref:a},p),{},{components:e})):n.createElement(m,o({ref:a},p))}));function k(t,a){var e=arguments,r=a&&a.mdxType;if("string"==typeof t||r){var l=e.length,o=new Array(l);o[0]=u;var s={};for(var i in a)hasOwnProperty.call(a,i)&&(s[i]=a[i]);s.originalType=t,s.mdxType="string"==typeof t?t:r,o[1]=s;for(var d=2;d<l;d++)o[d]=e[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,e)}u.displayName="MDXCreateElement"},3025:(t,a,e)=>{e.r(a),e.d(a,{assets:()=>i,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var n=e(3117),r=(e(7294),e(3905));const l={id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",slug:"/snapshot",sidebar_position:3,keywords:["snapshots","snapshot","kusama snapshot","polkadot snapshot","rocksdb","paritydb","pruning","polkadot","kusama"]},o=void 0,s={unversionedId:"snapshot",id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",source:"@site/docs/snapshot.mdx",sourceDirName:".",slug:"/snapshot",permalink:"/docs/snapshot",draft:!1,editUrl:"https://github.com/stakeworld/website/edit/master/docs/snapshot.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",slug:"/snapshot",sidebar_position:3,keywords:["snapshots","snapshot","kusama snapshot","polkadot snapshot","rocksdb","paritydb","pruning","polkadot","kusama"]},sidebar:"tutorialSidebar",previous:{title:"Pool",permalink:"/docs/pool"},next:{title:"RPC server",permalink:"/docs/rpc"}},i={},d=[{value:"Database size",id:"database-size",level:2},{value:"Automatic install",id:"automatic-install",level:2},{value:"Manual install",id:"manual-install",level:2},{value:"Setup a validator node",id:"setup-a-validator-node",level:3},{value:"Install the database",id:"install-the-database",level:3},{value:"Edit the systemctl startup script",id:"edit-the-systemctl-startup-script",level:3},{value:"Different databases:",id:"different-databases",level:2},{value:"Paritydb kusama",id:"paritydb-kusama",level:3},{value:"Paritydb polkadot",id:"paritydb-polkadot",level:3},{value:"Rocksdb kusama",id:"rocksdb-kusama",level:3},{value:"Rocksdb polkadot",id:"rocksdb-polkadot",level:3}],p={toc:d};function c(t){let{components:a,...l}=t;return(0,r.kt)("wrapper",(0,n.Z)({},p,l,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},"Chain"),(0,r.kt)("th",{parentName:"tr",align:null},"Database"),(0,r.kt)("th",{parentName:"tr",align:null},"Format"),(0,r.kt)("th",{parentName:"tr",align:null},"Blockheight"),(0,r.kt)("th",{parentName:"tr",align:null},"Size"),(0,r.kt)("th",{parentName:"tr",align:null},"Full"),(0,r.kt)("th",{parentName:"tr",align:null},"Creation date"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://snapshot.stakeworld.nl/rocksdb-ksmcc3.lz4"},"direct link")),(0,r.kt)("td",{parentName:"tr",align:null},"ksmcc3"),(0,r.kt)("td",{parentName:"tr",align:null},"rocksdb"),(0,r.kt)("td",{parentName:"tr",align:null},"pruned"),(0,r.kt)("td",{parentName:"tr",align:null},"17128148"),(0,r.kt)("td",{parentName:"tr",align:null},"187G"),(0,r.kt)("td",{parentName:"tr",align:null},"217G"),(0,r.kt)("td",{parentName:"tr",align:null},"Tue 21 Mar @ 02:22")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://snapshot.stakeworld.nl/paritydb-ksmcc3.lz4"},"direct link")),(0,r.kt)("td",{parentName:"tr",align:null},"ksmcc3"),(0,r.kt)("td",{parentName:"tr",align:null},"paritydb"),(0,r.kt)("td",{parentName:"tr",align:null},"pruned"),(0,r.kt)("td",{parentName:"tr",align:null},"17128255"),(0,r.kt)("td",{parentName:"tr",align:null},"169G"),(0,r.kt)("td",{parentName:"tr",align:null},"176G"),(0,r.kt)("td",{parentName:"tr",align:null},"Tue 21 Mar @ 02:32")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://snapshot.stakeworld.nl/rocksdb-polkadot.lz4"},"direct link")),(0,r.kt)("td",{parentName:"tr",align:null},"polkadot"),(0,r.kt)("td",{parentName:"tr",align:null},"rocksdb"),(0,r.kt)("td",{parentName:"tr",align:null},"pruned"),(0,r.kt)("td",{parentName:"tr",align:null},"14734906"),(0,r.kt)("td",{parentName:"tr",align:null},"129G"),(0,r.kt)("td",{parentName:"tr",align:null},"135G"),(0,r.kt)("td",{parentName:"tr",align:null},"Tue 21 Mar @ 02:40")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://snapshot.stakeworld.nl/paritydb-polkadot.lz4"},"direct link")),(0,r.kt)("td",{parentName:"tr",align:null},"polkadot"),(0,r.kt)("td",{parentName:"tr",align:null},"paritydb"),(0,r.kt)("td",{parentName:"tr",align:null},"pruned"),(0,r.kt)("td",{parentName:"tr",align:null},"14734978"),(0,r.kt)("td",{parentName:"tr",align:null},"129G"),(0,r.kt)("td",{parentName:"tr",align:null},"134G"),(0,r.kt)("td",{parentName:"tr",align:null},"Tue 21 Mar @ 02:47")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"ksmcc3"),(0,r.kt)("td",{parentName:"tr",align:null},"paritydb"),(0,r.kt)("td",{parentName:"tr",align:null},"archive"),(0,r.kt)("td",{parentName:"tr",align:null},"17128471"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"1.4T"),(0,r.kt)("td",{parentName:"tr",align:null},"Tue 21 Mar @ 02:54")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"polkadot"),(0,r.kt)("td",{parentName:"tr",align:null},"paritydb"),(0,r.kt)("td",{parentName:"tr",align:null},"archive"),(0,r.kt)("td",{parentName:"tr",align:null},"14735043"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"913G"),(0,r.kt)("td",{parentName:"tr",align:null},"Tue 21 Mar @ 02:54")))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Snapshots are compressed backups of the database directory of a polkadot or kusama node. If you start a node for the first time it will start building the database from scratch, which will take a few days, depending on network speed. If you download an up to date database snapshot your node will be up and running quicker; under an hour or a few hours, depending on network speed."),(0,r.kt)("p",{parentName:"admonition"},"In principle building from scratch is the safest and cleanest; if there is an error in the snapshot database, this will propagate to the nodes who download the database. Also the database size increases with extended usage. Stakeworld checks for errors and periodically rebuilds its databases to ensure error free databases with minimum disk usage."),(0,r.kt)("p",{parentName:"admonition"},"The snapshots are available for kusama ",(0,r.kt)("inlineCode",{parentName:"p"},"--chain ksmcc3")," and polkadot ",(0,r.kt)("inlineCode",{parentName:"p"},"--chain polkadot")," in the paritydb ",(0,r.kt)("inlineCode",{parentName:"p"},"--database paritydb")," and the rocksdb ",(0,r.kt)("inlineCode",{parentName:"p"},"--database rocksdb")," database format. They are pruned with ",(0,r.kt)("inlineCode",{parentName:"p"},"--state-pruning 1000"),", which is sufficient for a validator node.")),(0,r.kt)("h2",{id:"database-size"},"Database size"),(0,r.kt)("p",null,"Below a overview of database sizes, you can also view only ",(0,r.kt)("a",{target:"_blank",href:e(3993).Z},"pruned")," or ",(0,r.kt)("a",{target:"_blank",href:e(9319).Z},"archive")," database size.\n",(0,r.kt)("img",{alt:"snapsize",src:e(2307).Z,width:"800",height:"300"})),(0,r.kt)("h2",{id:"automatic-install"},"Automatic install"),(0,r.kt)("p",null,"The following script can restore a snapshot for a quickstart. If you want you can first review it on ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/stakeworld/stakeworld-scripts/blob/master/node-install.sh"},"github"),'. You can choose "snapinstall" for a snapshot restore or "nodeinstall" to install a complete node. The script will ask some questions and create an install or restore script which you can review before executing.'),(0,r.kt)("p",null,"The script is for ubuntu/debian flavoured servers."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o- -L https://raw.githubusercontent.com/stakeworld/stakeworld-scripts/master/node-install.sh | bash\n")),(0,r.kt)("h2",{id:"manual-install"},"Manual install"),(0,r.kt)("h3",{id:"setup-a-validator-node"},"Setup a validator node"),(0,r.kt)("p",null,"Setting up a validator node is covered ",(0,r.kt)("a",{parentName:"p",href:"./validate"},"here"),". The default apt install creates an user polkadot with a home directory ",(0,r.kt)("inlineCode",{parentName:"p"},"/home/polkadot")," and a default service script ",(0,r.kt)("inlineCode",{parentName:"p"},"/usr/lib/systemd/system/polkadot.service"),"."),(0,r.kt)("h3",{id:"install-the-database"},"Install the database"),(0,r.kt)("p",null,"Database location: By default the polkadot binary runs as user polkadot and creates ",(0,r.kt)("inlineCode",{parentName:"p"},".local/share/polkadot")," in the users homedirectory. So for user polkadot (the default when installing from apt) that is ",(0,r.kt)("inlineCode",{parentName:"p"},"/home/polkadot/.local/share/polkadot"),"."),(0,r.kt)("p",null,"This can be changed with ",(0,r.kt)("inlineCode",{parentName:"p"},"--base-path")," so for example ",(0,r.kt)("inlineCode",{parentName:"p"},"--base-path /home/polkadot")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"--base-path /home/polkadot/myvalidator")," or whatever you prefer."),(0,r.kt)("p",null,"To delete the old database, restore a new kusama paritydb database snapshot for your node with a default install:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"su - polkadot -s /bin/bash\nrm -fr /home/polkadot/.local/share/polkadot/chains/ksmcc3\nmkdir -p /home/polkadot/.local/share/polkadot/chains/ksmcc3\ncurl -o - -L http://snapshot.stakeworld.io/paritydb-ksmcc3.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/ksmcc3\n")),(0,r.kt)("p",null,"You can check the startup by running the binary as user polkadot and see if it accepts the database or throws any errors:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"su - polkadot -s /bin/bash\npolkadot --chain kusama --database paritydb \n")),(0,r.kt)("h3",{id:"edit-the-systemctl-startup-script"},"Edit the systemctl startup script"),(0,r.kt)("p",null,"Edit the default service script and add for example ",(0,r.kt)("inlineCode",{parentName:"p"},"--database paritydb --chain kusama"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'su -\nvi /usr/lib/systemd/system/polkadot.service"\nsystemctl daemon-reload\nsystemctl retart polkadot\nsystemctl enable polkadot\n')),(0,r.kt)("p",null,"Or create a new script by copying the default service script:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"su -\ncp /usr/lib/systemd/system/polkadot.service /etc/systemd/system/validator.service\nvi /etc/systemd/system/validator.service\n")),(0,r.kt)("p",null,"You can edit settings at wish, changing ports and settings at will."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-config"},"[Service]\nExecStart=/usr/bin/polkadot --chain kusama --name validator --validator --state-pruning 1000 --prometheus-external --base-path /home/polkadot --database paritydb --telemetry-url 'wss://telemetry.polkadot.io/submit/ 1' \n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl daemon-reload\nsystemctl start validator\nsystemctl enable validator\n")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},'If you installed as root you will get an error "failed to create a test file: Permission denied". You can solve this by running ',(0,r.kt)("inlineCode",{parentName:"p"},"chown -R polkadot:polkadot DBDIR"))),(0,r.kt)("h2",{id:"different-databases"},"Different databases:"),(0,r.kt)("p",null,"Below restore commands for different databases to the default directory. Best run them as user polkadot (",(0,r.kt)("inlineCode",{parentName:"p"},"su - polkadot -s /bin/bash"),") or when running as root do a ",(0,r.kt)("inlineCode",{parentName:"p"},"chown polkadot:polkadot <dbdir>"),") or when running as root do a ",(0,r.kt)("inlineCode",{parentName:"p"},"chown polkadot:polkadot <dbdir>"),". Of course change the part after ",(0,r.kt)("inlineCode",{parentName:"p"},"-C")," when installing to another location."),(0,r.kt)("h3",{id:"paritydb-kusama"},"Paritydb kusama"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o - -L http://snapshot.stakeworld.io/paritydb-ksmcc3.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/ksmcc3\n")),(0,r.kt)("h3",{id:"paritydb-polkadot"},"Paritydb polkadot"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o - -L http://snapshot.stakeworld.io/paritydb-polkadot.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/polkadot\n")),(0,r.kt)("h3",{id:"rocksdb-kusama"},"Rocksdb kusama"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o - -L http://snapshot.stakeworld.io/rocksdb-ksmcc3.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/ksmcc3\n")),(0,r.kt)("h3",{id:"rocksdb-polkadot"},"Rocksdb polkadot"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o - -L http://snapshot.stakeworld.io/rocksdb-polkadot.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/polkadot\n")))}c.isMDXComponent=!0},9319:(t,a,e)=>{e.d(a,{Z:()=>n});const n=e.p+"assets/files/archivesize-2cd9c272ce5dfee5ef932b1c39f9a9f3.png"},3993:(t,a,e)=>{e.d(a,{Z:()=>n});const n=e.p+"assets/files/prunedsize-2350152d8ac3e34c6f08ce76e8ab38ae.png"},2307:(t,a,e)=>{e.d(a,{Z:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAyAAAAEsCAMAAAAM8ycIAAABRFBMVEX///8AAACgoKD/AAAAwAAAgP/AAP8A7u7AQADIyABBaeH/wCAAgEDAgP8wYICLAABAgAD/gP9//9SlKir//wBA4NAAAAAaGhozMzNNTU1mZmZ/f3+ZmZmzs7PAwMDMzMzl5eX////wMjKQ7pCt2ObwVfDg///u3YL/tsGv7u7/1wAA/wAAZAAA/38iiyIui1cAAP8AAIsZGXAAAIAAAM2HzusA////AP8AztH/FJP/f1DwgID/RQD6gHLplnrw5oy9t2u4hgv19dyggCD/pQDugu6UANPdoN2QUEBVay+AFACAFBSAQBSAQICAYMCAYP+AgAD/gED/oED/oGD/oHD/wMD//4D//8DNt57w//Cgts3B/8HNwLB8/0Cg/yC+vr4fHx+fn5+/v7/f399fX18/Pz8AnnNWtOnmnwAvLy/w5EIAcrIAyQ/OAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAaOklEQVR4nO2da5akqhKFtafhfGocKNrdt8/8/1954xNTAgFzf2t1V5apoVmwk0DDbdMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKBsWJd2fQBKZmpn2Mj9Zf3o/YIOD76ZiTUNH8a295aNEAgACiGQma7lDR9Zy3o1qAzml1kg8ysxwtglw7zCJF50eoHELGXd0Eq4W8FuAUBlaIE0bddME2/6dpiXzSOI/YWxjg/MXzKvOr/gs6iG+afp92apHnGmqXErmPcAqA0jENGhBVIKJsUSvzDxRte6JVyIRCC6fTPq7e1SJZCOcbeCfQ+A2lgLZPIFIl7IDj+Yr3+5ZM6i5DLxf2+lo5aa9Qd/BfMeALXhCURMMtpWC8T+Yju8XcLV1EJPNYx09FK5PtcbmRX4YrYCQD1ogfC24+08yTAjiPvFjCBuiVh9bIdhkziJpXJ9NRwtVpDvAVAbWiBjy2V/5noEcb+YOYhbIpnn3u12TJgXzQLp9KiyXGFndQBKRwpkEF/v8yDSDJP48hfplv2FiWxKzs31koEN+iwWE3mXVoxdKk7zaimYFex7ANSGdyW9Z+00J05s7tDtYH9pu7GV10HsknlCMb9q1GUOew3eLGVifUHvVrBbAAAAAAAAAAAAAAAAAAAAAAAAAACAc3BXNwCarjVq0BVJLYpYAdDwyQlEwMbDVQH4Pvqh2REIUiwADBAIACdAIACcAIEAcAIEAsAJ5wJpQVE83TvSs/ttLNz94r6mjT9gPAGB7G/zwdL9xfERnj6IuMMg+AjijVwCUVYy/d1LZNJHYG3Jr7koEGVFcN0vOa9APttBARFIelZMDJKenVkgt/Wh9TUYz78FVwUituXd5UMgEoiStvO3gUASxcghkJ8Zit02qnsqcyRlXzw5A3znqt+PbdvxUf5ml9rNGx1BGMdoN2RrbCnesPGmVvjzey79fohpmvcztd5xsH4OJCwCrTW/jfAEBA37q4AIFCGiYlDsfw7yQXP8aCh2LLrnoFIN2zGNAb7nqt83nTBL6vylZnOBsPIb2dAMQhTiRa+MLaXxq43HOO8Y81z6/RBCIGwhVCYDjJ41v43wBC+cFdZMPoFofdiOuTTAN6760sjS+eYve7dIsbgchoT3vkmWZhkwbyO1ghTIwqXfpVhyuSeQqXGKVdb8JsITQCBFcdgcP9e5s99pzl6Um77/ze0kYj2RRee0AnGm+yqTn/MlZX88aN9YAeuUMfLCgt/OQZxLv4wgH3g0Lo9DvOiYs+Z3EZ4AKRZNjEvb/mc4DJJNIO3AVx3TGOAvXfWNQOxStTlr1DPBtJ/rIJzEdc+f1xPvmnhqBU8ggxdCbbBM9ZxA9HzaRXgCCIQmRnDb/5YcBMk3gjR6EmI7ZqMM8Feu+logC2d907vFGGS+570RZBqMkJwF/84IwsyxHApEB6xuBAGn/LfLwco5BaJmwLI/6nRL6MFz1fcEsnLWN5dRBn8Ook+Vzpu52Xzbn85BzAaNdxxGIHZSgznIW9iXxqlCMp7FasQtdeIslDhF5CzzPVf9xQhilnqbyx/yLFbbmRfy6RMiqDXU985iKZf+RYjGCMQchxOI9e6v7SwWUqzttqfaOBRI1tO86geXFxm6yRngWw/9xRzELvU3l8LYuw4i5jcmntoBa5xLvx+iMQKxx2EFYq35bYQngEBoYthtw9IgEgjphUJwBFIsOq5qgybFAo+AFqHgI2mc6APNURxIsSJjfK6NY4F8mGJVQpp694pO836rQG5K42T8yCsQipL3g3r1fmOmsxFIvnL3c974lZUaemVYsgsksuT9oF59vCCQk833gEDKJKE4BLkFEl/yLh5I7NYWheusE6PDoC6aiDLI3Xp3t7naDOXupBHSp1iJlaEP4LPm+P37o9UD0JS8zz18sbYcKERNiiqhmgW4X+/uC0RslrXcnfaGqfcLJL00zAF80hy/JR/u4gSKkneXI5m1rUDkNUZ5aX631sTbXC5/rNw94M2LFOuUB4aNBXkFQlDybmfZcm1z/6pcSQSc/x1UK3qby80eKncPevNCIPvcV8ZNaSiOm+P3VW7vm6LkXbJc2wpESOG43t27n50tqorTlrsHvXmRYm1j5NFGc55iPSAQRlDyLrZYrm0FMr8Y2sM7pi4IJFG5OwRyOUbEsPH8PekJUqwmvuS90R2Yb0eQppvG8fCe27VAnit3Ty6Qd5Bt2FiQXSDRJe/ircXaUiCTekN+9+/Xu68F8ly5OwRyTsSwQX8wmU/zqh9RJe/Nem3x/8C0NMTv+/Xua4E8V+6OFOsISmVkSLHqo0xP6LA376+5dSP+/YrcPse/qGEj1XG1v97ozWvhT138/hCkWAsohw16XtwcnaoXKQ8IxBA1bDxDKc0hesh+QvT5MFB0ufsT3rwVzEHSK6PmOchOpfk1gfTLq+j77u4XBfLicveyBfLQoFG1QFizrjS/JpBxeQ1k3939qkC2B3FKRQIplfTDBj0fNcefGYqdeoW0xpLECESUv9vqdVtmrteSVex+BFUsf8/e/cXl7sVxXxkZpaH4oDn+aOJ36vqmtWbX/6Qtu61eNxfo7FrrMhN5Df2mvXtR5e4eb0uxYsQRcxjPp1jEAhHZjbNFVALhrrZ1fmVKPNxa006KddfePVu5e4DXCIRg2ChZIH+u8/FubaW5tWbXArFlJFILpkjQrbXj7n7b3j1TuXuQV6RYscoohzwCYfqFtWZXAjG27Lp63ZSZu7WWI4h0d79t756p3D1I3QIhGDbKIq9ArDW7EoiyZbfV68sRpF+MIDKCTIbu2rvnK3c/p94Ui14ZX5tiMf1iPQeRc2xbvR6cg/RqTTsH0Wdxr9m75yt3P6dGgaQaNkoWyJbbetjg+qa1ZjdnskTRua1eX5zFarum2XN3v2vvnq/c/ZzKUqxE0iiGzALZXAcR559s9botMzdr6Sr2pbv7TXv3fOXu51QjkFTDRllkuVAITig/xbqvjM9ddxJ9hOtBqvm++hoKFshzyjg9jPTbekEgkNIotEUeF0chFNQcVBXvaardazrNS8uXKkOTqzmIKt6PytU37u5bgaDcPRwhZtigSHG+OMUiqng/KlffuLvvCORs+8BBkFPcDVPxwwYEEgVZxbuIsHR3F64/81r/Ozd397ZXnvCPlbtX4M0bK44X8Vlz/P1LtV+yind5QXHh7q7XCpi7+wKRKnio3L0Kb14ow/JJc/yV0OyXqOLdS5Gsu7uR0bm5u7e9snR8qNy9r8Cbl0QcX5hikQqEqOLdTbKtu7sRyLm5u7f9ykA7ebn7WwSS9iBiYyQXyN+r3NozUcW7YunubgRybu7uba9653Pl7sXb/nxxRrUhu0AiK94FK3d3O1M5NXe/IpBE5e4VCyT3kT1P1jmIILLiXbByd7cCOTV33wjkRe7u0dkFhThen2JtSSKQ2Ir3ZuPuzsxap+buG4EU4+5egDfvWhmpvG9L//exNy/5aV5BXMW7YOnuLq+lMHWOWLy7X+2+EciL3N0J+NaMakMZzZGIuOKrZNQgEKB5cXOUae4Ob96HYmSYg9RFsebuASAQmhjvE0gZ5e52pVz5WUEtAr653F3UCu5snH3eAoEUxfeWuze83Ttz+waBIMUi2v+nKda/GYrdNiWUu8+TFOWepardnSWKLnY3ZWHmEC/fWRUJBEIT43mB/NNQ7LiAcndx/kgVN8q+b63hWaeuJrKul3+cOYKte38CpFhFkVUgWcvdRYGKdPfV1e46ji12nw9FR7B1748AgRTFYXP8u86d/RZQ7s50lZXcyLOGb9R1dJGpjV6E/qGeixSLJkbqFCu1QJh+kavcncthYWJr3fgCEZoQT6pqVxf3kgKB0MR4i0Bylbt3utcPq9tEfIHwduhb771HQIpVFNkFkqvcXU91xEzd3Q7SLAUyh5Hni5+an0sgkKLIfBaryVXubp6PME/TTbW7s4a3AunVGS5b9/4ESLFoYrzjNK8gS7m70dksLn1p0LOGtwLh+nYAU/f+BBAITYzKLxQ+Qvar4ndAilUUL26OMsvdg7y4RWrkvc3xSLk7F4/Zna4b/F4AKRZNjPeVu1MRVe7+UbU7Z2JO005T7Hlgf2cQCE2M+gViHsR58+v3rNx9U+2+J5D4aveR9T2bOnFCee9tPe2XpZT6RMDibtt+/ghsXGvrhV9ZNZNbIPdrAM/K3benZLcCIah2F08JlRce+U4kV/44p3ryDPXKlndi/fzGuB59IJCi+Kg5aI0uRA8fZP+2nm3DpKqrvPr1sW07Prqv4t7fvJHna5fV7qKeS1whnwLl7qbaXW+1rXZvguXu7fK/JeoCpSjlMqUu/cKWt9OX9McRKVaKGM+nWNTuehPTT6l1AhEvZD2JX7/eiUfVdv5Ss7n8Ma2q3U2VYajc3VS7q612qt2bYLn7qUBUgYq5cD+qJMwTiG/rDoHQx3iDQLQ+rED4It0w9etcVWcNbqnevPFTLFvtbgQSKHe31e5q8U61exMsd78wguhxwujaCYT72RaxQAAdh80RNDCONmyd5rzF+17Vj+ZwErHVh6KnWYEclbvbancrkPNyd1vtLrfarVUMlrvPsxjG1H87n08OSkzsbrKPyPEFsrrb2AY9+5sBakLlITkF0g589eQB7p34cfXrRiB2qdqcmUDLta1ATsvdXbW7vs13p9o9WO4+OfY+oJjxqL3bErD1CNJ7BcUapFg0MQLbXiu5PUmxnhhBGj0JsQJpRG+fdbOsX9cCcUvt5mqL5dpWIKfl7q7aXQtkbwQhKHc3hqVaKP4cxFaDrQRSgDfvm/8d1aTvrXvmzfuMQNTcV9UYmm/htl/Vr2uBuKVuc8FqbSeQs3J3V+2u97FX7X6t3H0Yht1L9v0gI/CON3sC6bTsNgI52xeI4sZdG3nPYjXict1gjdUHcWFBzqsX9et2BDFLvc2bTbW7O0F7Uu7uVburrXar3YPl7oOUj74Lcs38qUR8LuqAB7Y5izV/8lk6fN4Fh0BSc/+2puwCkf3XGKvPUxBxTndVv27mIHapv3mzXruRJ2q1NMTve+XuXrW73mqv2j1U7i7vfmyEBnaHmJHJDyMv04x8a8vby9MU+sy0BXMQmhhi2yu6OBXIh6UmlPJ4gtTl7mpQaUVXpwsKgVDE+EgaZAKpi/Tl7kzNKw5KTW7y4hZ5ghvKONZH8+bmeKDcXf3x+ob0z/jeFknMbWl8qUAewE4nOCMMGh/iq1KsSF2cy+PVKVZ67GV8zEGShDiPQaOM85vIIZAoejUJ0TXJRKBFgiTXhQeaI4apHbu+m9qdSyS3QYscQaKL69JQoDmiEBduWtqzyUixtjGopPGxKQ9SrGg4Jz5XBoF4MbIpw34ICKQ00CIZR4wtaI7S+O4WKUgaiu9ujhL5yhSLThdWGRQpHlKsAvkugVAqYzloQCAv5VtaJJEuqPmW5kgEHycmoQv58hah08UzRuovb47UTGzsJHQhX5tiPSwNpFglQPTcwjffMPWwLig/AgQSDTt+i3teKFzmYOqOQleW8nJv3lzKoOU1zZGHLlSlqLxaRnmf8LQs2XqrNy+lMPI/sKn65siLMHc/m4Mok6GeSfefZc3W27x5U+gi9p70aJBiRcIMB+9Pyvph2BHIa7x5aZWxGDIgkJej3LDm7i8F0o6Tq/yt35s3nS5KoprmqBJmLCOlQCZpkKUHjoq9eb9DGZrym6NcxKOlDLsryBmI/M84kFqLxSq9eWmVcUEaSLGqhoXmIFIWoz7dqzXgbLLr8eal1QXtsSX9d+bNC+Jx83ApFe2abRZV4M1Lq4zcn+YWJTXH63DTDCEQ3so5iNVCud68tLqoUxiGAprjtfClQJphWj7qsFBv3oKUgTkI2FC/QCgOIj4GBPJScrdIxgGjRHI3xwsoz9UkCihjQe7mqJ2eiROBO88OuU3uFItKF0ixgDhXO4qnGE6E1oo1CCT5QRDEgEBKQJyUetvzQb41mdone3PUTev9IwyZFQjDJ3tz1I146qh4UDSjC5k7xWo8ieQ8iNgYSLFKoGu7oR16SvvqAgSSxrTh4RgQSBF0fiEiCWiRokBzxDIMa9uFONAiRYHmiMJc/yjrCVNIsYj2jxQrFvMk3bLOYkEgRPuHQGJpJyYTrLIEAuhAc0TRivNYDQTyXtAcUchrIHOaVZZAkGIR7R8pViziz8ento/8MxZ1wxRNBAgENKY3d7u39hsrXmfJ263vKHy1N+87QHNEoXv3sFfNa0p8banvOE/oe2fF+1Zv3neB5kiGyZvMT3WL+qjdfl7nzZsgBFKsugkYx60FMsixwtr+vMabN10ICKRu2LlxnLHiNT/VCNItnBVNpLJsf4ADzZEMY8VrLXnlHIRZgVTrzftVoDnSYqx45c+RiTt06/XmfToEUqzaGWTSxPxzt+s1tB6sJa+1sa7Im/dr/8GbN45BXN3oxRxjTyHGitda8vZikm5P+tbgzQvQHDHIzi4eItVN2zeNFa+z5B0Zt3P0pmRvXuBAc0QgO7v4j7Odd40Vr7Pknecgk3dZsFBvXpoImIMA+cdTfg0oVkwRAgKpHCaeHSXSLM7ogqJFigLNEYGYfsjkqd+Zg9wFLVIUaI4IhnaS19D73bNYN0GKRRMDKVYB9JO0rW4JrXkhEKIYEEg5kD4AAS1SFGiO0kCLFAWaozSQYtHEQIr1UiAQmhgQyEtBixQFmqM00CJFgeYoDaRYNDGQYr0UCIQmBgTyUtAiRYHmKA20SFGgOUoDKRZNDKRYLwI3TNHHgEBKh49M+GHxVsHNAgu8eSsAzZEM8ViEwdjDCcfRxQJ489YBmiMZgyjyHZl6Le5c9xfAmzd1DKRYVaC9qqdutQDevKljQCA1oJ920FuzH/v4A3jz1gGaIyHzJFzdi2sEYBfAm7cW0BxJkabVznfULGjgzZs8BlKsKpDJlfXjbbxsC9685f+DN29CeCeUIPWgRg1vgQDevFWA5kgFZ9KTV4wTarrhLZDAm7cG0BzJkBfOhS2QmY/bBRp486aMgTnIS4FAaGJAIC8FLVIUaI7SQIsUBZqjNJBi0cRAivVSIBCaGBDIS0GLFAWaozTQIkWB5igNpFg0MZBivRQIhCYGBPJS0CJFgeYoDbRIUaA5SgMp1iLGz0y2/SPFKhAIxIvxoyHa/ypUODIEUh7f0CIX+rxaJUIg+yG9YNdif0Nz1MUrWmTR8Xa+t38WvXPbUX/WUBzPKh4EUid1p1iLnrjukmaFZdffUcFmpZ/NTo7Y+whn65+rBClWGbzlhqkL/fBCZ41k+xE+2Wz9d4BAEtIp76vOWPIO04u9eRN3++vcPJ6Dj1Vrc1QAn5RARjYoS17h9DOwd3rzpujpd7l5PPsfrM7mqIJ+aKRAtEq06+hg9FChNy95Vy6K/b8DBJKSpUB8L8UKvXlzd+DU7P8dIJCUSG10IsVivTA3mecgRha1efPm7r7p2f/chTbHS1AiGNu2HYUkpFKs9Whd3ry5u++K3xL9Y/XyaPnJKj+YpGdBCmQSz82ZdWHceNVbybx5KbthmqhBLnZ4UnCaNwdCBIM8TSUcR+WYMaT15v0xX65n/erqKpe76oVVPl/+LPDmzcFSINPYuBEkkTdvxi5WOUdNGNUc4ByZRolHE/JpElLp3RwkjTevP36AjzhqwpjmAGdM+um2zpK3Xz/lltyb9yd3NyudPwcc6ANzkPKAQD7lqNPv8ldjX8iX8xu7f08IpDyQYlk+6fZeh1/3/p2XW/YFghSrPGIn6R99nxbPeS8/7fKfcTCEQCDFEdcif/5c+Pa8uoqKdWvT6OWEff8auwJBilUekQJ5ul+9BgikEqJa5A8EchOkWLUQJ5Dc/axaMEmvBQjkEXCat1aQYt3i6rz/4GzZwd8TAikPTNK3BE+AfXDi+NHmAPTgNK//Mkmn/wQIpDRiW+SDL9Pyifg7wJv3pRR7T/rzIfB8ELAFLVIUaI7SQIsUBZqjNJBi0cRAivVSIBCaGBBIvQiz3v7oTbRIUaA5nkc6ybVHCkGLFAWa43mY8ls8eBcpFk0MpFi1onyArD/WGgiEJgYEUiu9lMawfuyBgaBF4kMUcRBxMUh6dguBPI+yjuMQSNoYEEit3BpBPlm6vzg+wtMHEXcYBB8BAsmC8yLdpQVF8WjfAAJmnqgDANgiroP0h9dBAPh2Tq+kAwAAAAAAAMCTEMxO4kMUcRBxMUhmeZgq5sbO1zv9WGgur4+Y365M5wMh3IubEeQDgO6FcIcfPohQjPPDiNn28odoOGPBIIASU/nOJyuJqXG/nRfGXwrhFt+NIJ/SG4ixH8Ie/oWDCMY4PYzAtuzCRwgGacRT81joUwBSTOV7P+hnqjfT/MP+dl4YfymEW3w7ghhNAtc190PYw79wEOEYZ4cR2Ha48BGCQcQj9AJtAYjxK991m+gSLflboDD+SojFi9sRQr1rP8Ti8IMCuRDj8DCubTtFHgBvBwjkWfy6RdUmg679kb8FyhqvhFi8uB1hTr5PY+yHWBx+UCAXYhwexpVt+9M/45Ug884hkGfxK9/1rEN/zWmBuLdvhli8uB1BPsX64xCLw78gkGCMw8MIbzu1wdqeUJBxCqa7gJjtl9ak+1HECLIIsXhxNwJngexkP0TsCLKOcXwYF/bvP6H+VpBBndEKfApAil/5LtvEjhbeHOSwMP5KiMWLmxGGNtC1DkIsDv/iHOQkxslhXNh/6O8YDDLq8vfw2WJAh1f5rsYMpt/wzmJdOYF0HKIJ981ABH6hT+yH8A//4lms4xinh3G+Le9Epw8J5MKHwAjyNF7lu2yT0XxJuusgocL4QIgm3DcDEabQ+HEYwj/8a9dBTmKcHsb5tpyNfE6xAnnihQ8BgTyOvkw7qeGbq0u25rePrqQfhHCxbkbg7YUI+yHs4V85iECMwGGc719eSR8Duw8FUa9DMQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABr+D4NmRrLh2VxoAAAAAElFTkSuQmCC"}}]);