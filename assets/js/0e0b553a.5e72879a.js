"use strict";(self.webpackChunkstakeworld=self.webpackChunkstakeworld||[]).push([[669],{3905:(t,a,e)=>{e.d(a,{Zo:()=>p,kt:()=>A});var n=e(7294);function r(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}function l(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,n)}return e}function o(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?l(Object(e),!0).forEach((function(a){r(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):l(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function i(t,a){if(null==t)return{};var e,n,r=function(t,a){if(null==t)return{};var e,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)e=l[n],a.indexOf(e)>=0||(r[e]=t[e]);return r}(t,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)e=l[n],a.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}var d=n.createContext({}),s=function(t){var a=n.useContext(d),e=a;return t&&(e="function"==typeof t?t(a):o(o({},a),t)),e},p=function(t){var a=s(t.components);return n.createElement(d.Provider,{value:a},t.children)},u={inlineCode:"code",wrapper:function(t){var a=t.children;return n.createElement(n.Fragment,{},a)}},k=n.forwardRef((function(t,a){var e=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),k=s(e),A=r,c=k["".concat(d,".").concat(A)]||k[A]||u[A]||l;return e?n.createElement(c,o(o({ref:a},p),{},{components:e})):n.createElement(c,o({ref:a},p))}));function A(t,a){var e=arguments,r=a&&a.mdxType;if("string"==typeof t||r){var l=e.length,o=new Array(l);o[0]=k;var i={};for(var d in a)hasOwnProperty.call(a,d)&&(i[d]=a[d]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var s=2;s<l;s++)o[s]=e[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,e)}k.displayName="MDXCreateElement"},3025:(t,a,e)=>{e.r(a),e.d(a,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var n=e(3117),r=(e(7294),e(3905));const l={id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",slug:"/snapshot",sidebar_position:3,keywords:["validator setup","validator","validate","snapshot","rocksdb","paritydb","pruning","polkadot","kusama"]},o=void 0,i={unversionedId:"snapshot",id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",source:"@site/docs/snapshot.mdx",sourceDirName:".",slug:"/snapshot",permalink:"/docs/snapshot",draft:!1,editUrl:"https://github.com/stakeworld/website/edit/master/docs/snapshot.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",slug:"/snapshot",sidebar_position:3,keywords:["validator setup","validator","validate","snapshot","rocksdb","paritydb","pruning","polkadot","kusama"]},sidebar:"tutorialSidebar",previous:{title:"Pool",permalink:"/docs/pool"},next:{title:"RPC node",permalink:"/docs/rpc"}},d={},s=[{value:"Automatic install",id:"automatic-install",level:2},{value:"Install the database directly",id:"install-the-database-directly",level:2},{value:"Paritydb kusama",id:"paritydb-kusama",level:3},{value:"Paritydb polkadot",id:"paritydb-polkadot",level:3},{value:"Rocksdb kusama",id:"rocksdb-kusama",level:3},{value:"Rocksdb polkadot",id:"rocksdb-polkadot",level:3}],p={toc:s};function u(t){let{components:a,...l}=t;return(0,r.kt)("wrapper",(0,n.Z)({},p,l,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Snapshots are compressed backups of the database directory of a polkadot or kusama node. If you start a node for the first time it will start building the database from scratch, which will take a few days, depending on network speed. If you download an up to date database snapshot your node will be up and running quicker; under an hour or a few hours, depending on network speed. "),(0,r.kt)("p",{parentName:"admonition"},"In principle building from scratch is the safest and cleanest; if there is an error in the snapshot database, this will propagate to the nodes who download the database. Also the database size increases with extended usage. STAKEWORLD checks for errors and periodically rebuilds its databases to ensure error free databases with minimum disk usage."),(0,r.kt)("p",{parentName:"admonition"},"The snapshots are available for kusama ",(0,r.kt)("inlineCode",{parentName:"p"},"--chain ksmcc3")," and polkadot ",(0,r.kt)("inlineCode",{parentName:"p"},"--chain polkadot")," in the paritydb ",(0,r.kt)("inlineCode",{parentName:"p"},"--database paritydb")," and the rocksdb ",(0,r.kt)("inlineCode",{parentName:"p"},"--database rocksdb")," database format. They are pruned with ",(0,r.kt)("inlineCode",{parentName:"p"},"--state-pruning 1000"),", which is sufficient for a validator node.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},"Chain"),(0,r.kt)("th",{parentName:"tr",align:null},"Database"),(0,r.kt)("th",{parentName:"tr",align:null},"Format"),(0,r.kt)("th",{parentName:"tr",align:null},"Blockheight"),(0,r.kt)("th",{parentName:"tr",align:null},"Size"),(0,r.kt)("th",{parentName:"tr",align:null},"Full"),(0,r.kt)("th",{parentName:"tr",align:null},"Creation date"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://snapshot.stakeworld.nl/rocksdb-ksmcc3.lz4"},"direct link")),(0,r.kt)("td",{parentName:"tr",align:null},"ksmcc3"),(0,r.kt)("td",{parentName:"tr",align:null},"rocksdb"),(0,r.kt)("td",{parentName:"tr",align:null},"pruned"),(0,r.kt)("td",{parentName:"tr",align:null},"15578927"),(0,r.kt)("td",{parentName:"tr",align:null},"154G"),(0,r.kt)("td",{parentName:"tr",align:null},"164G"),(0,r.kt)("td",{parentName:"tr",align:null},"Fri 02 Dec @ 07:30")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://snapshot.stakeworld.nl/paritydb-ksmcc3.lz4"},"direct link")),(0,r.kt)("td",{parentName:"tr",align:null},"ksmcc3"),(0,r.kt)("td",{parentName:"tr",align:null},"paritydb"),(0,r.kt)("td",{parentName:"tr",align:null},"pruned"),(0,r.kt)("td",{parentName:"tr",align:null},"15578926"),(0,r.kt)("td",{parentName:"tr",align:null},"154G"),(0,r.kt)("td",{parentName:"tr",align:null},"160G"),(0,r.kt)("td",{parentName:"tr",align:null},"Fri 02 Dec @ 07:30")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://snapshot.stakeworld.nl/rocksdb-polkadot.lz4"},"direct link")),(0,r.kt)("td",{parentName:"tr",align:null},"polkadot"),(0,r.kt)("td",{parentName:"tr",align:null},"rocksdb"),(0,r.kt)("td",{parentName:"tr",align:null},"pruned"),(0,r.kt)("td",{parentName:"tr",align:null},"13176663"),(0,r.kt)("td",{parentName:"tr",align:null},"110G"),(0,r.kt)("td",{parentName:"tr",align:null},"116G"),(0,r.kt)("td",{parentName:"tr",align:null},"Fri 02 Dec @ 07:30")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://snapshot.stakeworld.nl/paritydb-polkadot.lz4"},"direct link")),(0,r.kt)("td",{parentName:"tr",align:null},"polkadot"),(0,r.kt)("td",{parentName:"tr",align:null},"paritydb"),(0,r.kt)("td",{parentName:"tr",align:null},"pruned"),(0,r.kt)("td",{parentName:"tr",align:null},"13176663"),(0,r.kt)("td",{parentName:"tr",align:null},"110G"),(0,r.kt)("td",{parentName:"tr",align:null},"114G"),(0,r.kt)("td",{parentName:"tr",align:null},"Fri 02 Dec @ 07:30")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"ksmcc3"),(0,r.kt)("td",{parentName:"tr",align:null},"paritydb"),(0,r.kt)("td",{parentName:"tr",align:null},"archive"),(0,r.kt)("td",{parentName:"tr",align:null},"15489825"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"1.1T"),(0,r.kt)("td",{parentName:"tr",align:null},"Fri 02 Dec @ 07:30")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"polkadot"),(0,r.kt)("td",{parentName:"tr",align:null},"paritydb"),(0,r.kt)("td",{parentName:"tr",align:null},"archive"),(0,r.kt)("td",{parentName:"tr",align:null},"13176663"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"696G"),(0,r.kt)("td",{parentName:"tr",align:null},"Fri 02 Dec @ 07:30")))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"snapsize",src:e(2307).Z,width:"800",height:"300"})),(0,r.kt)("h2",{id:"automatic-install"},"Automatic install"),(0,r.kt)("p",null,"The following script can restore a snapshot for a quickstart. If you want you can first review it on ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/stakeworld/stakeworld-scripts/blob/master/node-install.sh"},"github"),'. You can choose "snapinstall" for a snapshot restore or "nodeinstall" to install a complete node. The script will ask some questions and create an install or restore script which you can review before executing.'),(0,r.kt)("p",null,"The script is for ubuntu/debian flavoured servers."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o- -L https://raw.githubusercontent.com/stakeworld/stakeworld-scripts/master/node-install.sh | bash\n")),(0,r.kt)("h2",{id:"install-the-database-directly"},"Install the database directly"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},'The default binary/systemctl from the apt repository will run as user "polkadot". If you install as root you will get an error "failed to create a test file: Permission denied". You can solve this by running ',(0,r.kt)("inlineCode",{parentName:"p"},"chown -R polkadot:polkadot <dbdir>"))),(0,r.kt)("p",null,"Install to ",(0,r.kt)("inlineCode",{parentName:"p"},"/root/.local/share/polkadot/chains/<chain>")," or change to your target directory."),(0,r.kt)("h3",{id:"paritydb-kusama"},"Paritydb kusama"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o - -L http://snapshot.stakeworld.nl/paritydb-ksmcc3.lz4 | lz4 -c -d - | tar -x -C /root/.local/share/polkadot/chains/ksmcc3\n")),(0,r.kt)("h3",{id:"paritydb-polkadot"},"Paritydb polkadot"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o - -L http://snapshot.stakeworld.nl/paritydb-polkadot.lz4 | lz4 -c -d - | tar -x -C /root/.local/share/polkadot/chains/polkadot\n")),(0,r.kt)("h3",{id:"rocksdb-kusama"},"Rocksdb kusama"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o - -L http://snapshot.stakeworld.nl/rocksdb-ksmcc3.lz4 | lz4 -c -d - | tar -x -C /root/.local/share/polkadot/chains/ksmcc3\n")),(0,r.kt)("h3",{id:"rocksdb-polkadot"},"Rocksdb polkadot"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o - -L http://snapshot.stakeworld.nl/rocksdb-polkadot.lz4 | lz4 -c -d - | tar -x -C /root/.local/share/polkadot/chains/polkadot\n")))}u.isMDXComponent=!0},2307:(t,a,e)=>{e.d(a,{Z:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAyAAAAEsCAMAAAAM8ycIAAABRFBMVEX///8AAACgoKD/AAAAwAAAgP/AAP8A7u7AQADIyABBaeH/wCAAgEDAgP8wYICLAABAgAD/gP9//9SlKir//wBA4NAAAAAaGhozMzNNTU1mZmZ/f3+ZmZmzs7PAwMDMzMzl5eX////wMjKQ7pCt2ObwVfDg///u3YL/tsGv7u7/1wAA/wAAZAAA/38iiyIui1cAAP8AAIsZGXAAAIAAAM2HzusA////AP8AztH/FJP/f1DwgID/RQD6gHLplnrw5oy9t2u4hgv19dyggCD/pQDugu6UANPdoN2QUEBVay+AFACAFBSAQBSAQICAYMCAYP+AgAD/gED/oED/oGD/oHD/wMD//4D//8DNt57w//Cgts3B/8HNwLB8/0Cg/yC+vr7f398/Pz+fn5+/v79fX18fHx/Dw8Onp6cAnnNWtOnmnwAvLy9qfngQAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAYRElEQVR4nO2d67qjLJCFtW/D+/muw+NM7577/z9yKkAx0VDR2rDe59ndxmCFACsWilVNAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATpbO/BHz8qroVdNv6PyHvS59XKsD+qE9Wd39B697aOf6wd1w8bPBr2VoDT3teS2QcQ5eXBXIe6agIq+5LJBu6ePaH5L8WqFAmuGUHVAAw26cvRbI/F2BLKdH3mWBqANmJoGc1zH45ZBAtP8xD7FAVrdk6dSI6OelXUZzwpnci0a91869f7uZ1gKD2ujsDo3bu3QTna+67RG6oHrHl272xaNaLePQmrc6/Q3mVtcmMhnWfFG197bM4U0TGoq+Vtgm6iPog3EKqYbXAhmWvu8W5VMMq3+iBpcaGfRiWbp+WsI9ysq4DuhufTG2Y2Bb7bVmh/VTqIB7T6MH36Z0XDyq1aLG87xMzaQrvb7StYlMUtXINSJbC0lObwX77dfaCoQ+OJwqgaJ5KZBeD8nFFdFSmIMXi5qsdq3f06uR6K3ZA2mvMasmA1SA3iOjm9Jx8bhW6vPNK1UJV5vYJNklgZCthebaeiveryxuBBI0B3ysWnCT9KRAJj3UyNsfQoGoDV2Mxores3pRdOBI0jF7XfkpLODea6hAVHpbPKqVGvfm1eTOOPrUE5qkqjmBBB9NftIS73dfayOQoDkSIgRF8vIMYvwUNwdZHXwzxOgFDXja0xs/foqvjdm9xo+3B7kCfTi70D/RYeld8ahWC/lSqhK+NtGExVXNC8TZ8pNxtbXZrwxtBOI/2J5MQPm8FAj9ZPbt6sm7M4h/4X5q/Z5Gjch2mnY/sGqv8eMHbzl8T0MXB1zpVPHgDNL5H/7gDBKa9FWLzyDhp4WGaD/OIEBBAjHezcEcRA+N3p5B/AvnrPs9mvWoxA/sums129mzSlzAvfJOjymdLB7MQbrUHCQy6avm5yA0NY8EEux3hsI2wRykTkggs75Cc3AVq19/S6dB/Zqvf/6Fu25Ee6ZlslexFuV32eFOe9VlXjsKXQF6z1YiKt3sike1MtXUV7Ha4CpWZNJXVgtkCG1tBOL3u8thYZvgKladkED0Nf4udR9EDYZxaYfVcVrPJUs70Qu680B7Vu9/3WrMPQX1jsbtXVR5xegL0BGKqe3D0s2+eFQrd1XM3Acxty+ajUmqmhGfuw+ibG0EQvvpa4VtQvdBOtwHAY9x/k564lj2+/qHwMMCz5Az8m4UCE4g4CEynPv7BILVvAAAAAAAAAAAAAAAAAAAHzfeAgNADJ2JQzMNbbyoyDIObbvMWFYN6qQfjED0elMlDFqWahiWsW+mGQ8egDoZgyfWmmnaPMdNT0LE67IBqIg2ek4nFki4rhUCAVXSmifi1jmIeYxBxa+xcunDOJkQCKgSIxCtC6WQ2UQX0ERRASAQUCVGICbWgAlxNjnPyu3WsQAhEFAlfg4ytb0Pz6FxUc36jUBaUCT3jrxPSf5Uz8u3nBwtEP102tg2G4F0FLdmI5B3m+9LfFr47uMqrVw2Js7AmIgsc+5wLVgfUSDkCYGoyB2TCeTZN/1AD6vNbbe+HpelPxIISxUEW0PlPkML5GN9WH1N+7j/zb0CMUJdTxijvYGu45AHuh2H9fUwbqpVTTezmyukcv8RRyWGpbEBk+hGmwt47wPzj3O7/gLP+hXtpcMba4EWdwTRLvUvurNHgfZdRPzHYe7mP4Kt1VQ5ZoHYFRkkEBfwPgjMP65e/DDpG9K01x2uUC4/Rc5XG6Nx9nUwWLLnA+3biPiP80tmc+AavAJxK5acQPYx9E1g/CiYPoUlJxfLR62k0JddH0bgjwPt+7CWTyKhDoCdw2797zzuEO2aG6sUXDgMeE9hldXwJoH4uP3G91/9JYqcT3GLl85MkqMo/jQHEREuDC6WDGt3uVifCKSdenM+IIG4gPdxYH4nENprDtexVdVYp8j5NPLXcvr8Yu3FgfabfczyB4BAZFiTLBA9SdcKoNWwJuD9JjC/FUgUnN+5WOocRHce/BlkmJyQfBT/os8gQAbcArHJ5Fx4evMZYxCYPxDIJji/u40yhXMQex1VZ0mZyB7mIOAmuC/zqvtoE4WndwHvg8D80RnE7Q0O1//RI0pmw6SkWI1SAP0oXWSRV7Eq8mJEV45fIHrwuvD0LuA9xbqP5iC0NzxcCyN1H0TNb5w9indPEfEfBwKRYU2wQOoGLlaRoFu5QEsWCbqVC7hYMqw95mI9x81LeT8EApFhTbBAOJa7m1WyO8bddarSBQJkIG25e98lj58hEPAI3ALJX+6u8hn70oPOiq1OLpO5YaKWQMpb697AxZJi7VEX6+/fV+/yLHdfdRCV1icKtR7FLMBaBShwrXsDgUix9qBA/mqO3+dY7u5dLFeaBKLvL+rb8vLWmTS3uli4JXUfvAJhWO5Ok3RdWr/nBKIMrn8SVyo2cgWSLnyLxr73IQeWv/CBx9369yx0BMdyd01cmgSipCB0rXvzfRcr6Pz05gHfEMifc5bDAm+rz3DctYY5B6tAOJa7qyPi0iSQdWNqZT4t1UgQyINjUMZx9wpkz3sXq8lf7t5YBfT7M0jTDfMs83nb5ksuVrLH/0vulSeQAxg+7xJ5PcAukOzl7jYxhy+tBTKYN/TJQ+Ba94ZTIO9GzYkx8elYerv5qeUHyesM5su85r+s5e7NtrT6d1qsNNRrgWvdm48EctCJwe77h1N53N6tDyLq1vmGPIGE/Xn/GCqUv3/Vv7d362P0lMRGCpmRFX1XXhJIloLMoNluHuxmKHz3cX7bzAgqEkinL27d80k6eLWJQtScTOKZJZBX7AZCk9w8VZgGTTh+/PZ/JzbPFz74kEubHIWz+LJA1LhK+0XXzwZ3rXp3STzp+vO5JJ5fEsiXxhLzGJRxXLD9lxAkkMR69XMCGeOb6ekA77cJxCXxJLPnknjyCmTvKHz++2k2L9zZKgpJAtmvVz8nkDm+FZIO8H7nc1OvBHKUxJNTILZr14H+7OD6xby/K3GOS936s/Libb8cl7x2JxC1Cp4WsdNydVtKL2YPLZg18w9GeDfLAebBVOBcEs98gbiLLv99SxbRoAnHT3o3Q+G7jzva/TkXuvXHcljAC4Sis9s/HZmdFrG7G31UarvaRN9KfzLCu52D9FeSeH4okP38OXXa0MVFj0EZx8WqyJfHFwSiXCwfGdEIpPejd91yS0V8qSHhYj0a4d2fJdzDLO+TeH4kEFJF8qyhyvCOpWjQhOMnvZuh8N3Hsagi4LBbf87jDqH16hSd3QrEpy9TWnCLDX2pRID3ZyO8e4FcS+L550/TXPqzY/dPQh2qo20ZKk/7/qybZGfdTG2nj8Pfhb9XSTw/EYibx5rBNNkRRJHZ7SJ28+68+FLxGcRcJqJ3n4jwrgWiP7b7JInnaQ7OGkzuM2DgKwLxQ0oLxERmp0Xs8RlkjM4gFOD92QjvJk+6noPoL/CtJJ6hLmJRMMvjD6s1PHLb5AlkOwfRc2xaxP52DjKaku7duyO8uySe0+Cuun0viefxWaOiMSi6cl+4itUE957dlSy1/p0WsUdXsdquaVIB3n9dhPdcgbCfNQAH3xHI7j6Iuv5Ei9hpuborZRezxwHef1uE9w/PYFCFbDhvFNYNwv7IsCY49GjdQCAyrEEgQkFLFskvWe7+CwK8QyBFInC5+0GA932E96IFUpEXI7pyApe7HwR430d4h0AeslZT5fjzgzAsd1cW4gjvKvLPWur/BAd4h4tVJNe69d+/V++yLXfXdxOHMMK7LWUWRLUiA7xDIEVypVv/aY7fZ1ruHrhYFOHdyUi9M8oM8A4XS4a1B12stwJhWu7uJ+kU4d0JRHCAdwhEhrXbBPLvLHQE03J3Qxzh3QlEcIB3CWcxwM5XBJK53F2xifBOMxW5Ad4hkCJhn4MoMpe7KzYR3kkgcgO8w8WSYU3yHIRruXuzi/C+uFJyA7xDIDKsPXof5NRlXkXecndFHOFd30tZzDVi9a6wpe4KCWcxwM6v61Y5t843/LqWBGf4Zd0qL8A7ARdLhjXBS02+z30B3q8DgciwVrVAJIOWLBJ0KxdoySJBt3IBF0uGNbhYQoFAZFiDQISCliwSdCsXaMkiQbfmkB169JiKvBjRlYNAEnQuHHC/6PuSNrSjgy3L7SsqGoOiKweB7HBZbhsVyN1FCfZhsxmz3AL5oFt3uCy3asFkR7muZrfimDHLLZAPujWFEUjfTkog5ukseuaEMcvtKyryYkRXDgJJYQSyDn9/BnEnDs4st6+oaAyKrhwEksJkRtfxvRo7B1lIIJu4eHTMnRUEd4FuTdF29kF3LZBGxaYbozMIT5ZbIJ9Ku7XvVbbpgyDARiCzycTmPKrOPYjCmuX2+O/P0xle7/v7I6AO6b9XWW5Lpl/UY7rtMByFC6J5hpbFqJ+Cd3Nzziy3L6jIzRdduSoFMi/juAydipGSLhALZF56mqM3rFlugXiq7FaVBlRPMfrUA7wuy63apjnIEJxrGLPcAulU2a1t/A+jUT4q8mJEVw4CYTXKR0VjUHTlIBBWo6A0quzWdlkx/zAa5TMF5FBltw4ePqNwsWRYg4slFAhEhjUIhItpmnpGcxW3ZMnU2a2Tui3e2sQ+TNTZksVTZbfqhD5N2/fhg7S5wMWSYQ0uVj4m43qr7onzGYVAZFiDQPJZevVve7DU5EOqbMnyqbJbzZceG9woBO+osltpZa7gM0hFXozoylUpEHpQCnMQCeZEV65KgYxmEtJMrdyrWEAGdXbr0M7d2A0tZ3bcOluyeCrt1m5RtwlZ84HCxZJhDS4WD72K28AJBCLDGgQiFLRkkaBbuUBLFgm6lQu4WDKswcUSCgQiwxoEIhS0ZJFU2q39PCwaPpOVtmTpVNqtwzJ3Gj6TcLFkWIOLxYEPJJoFYvPKswaBcPDatZKQxBPIoNJu7V6sUtwl8eyWKVzXiCSeNVFpt6rg7kdzkG0ST+NIUX6Qm5J4VuTFiK5cpQJZHOm3E0k8JzdtQRLPqipXqUDeECXxNMnXJsqbc08STyADdGuKKInnqNuoJ4EE0xcIpHhq7FaVWsqRLhEl8UydQb6fxLMiL0Z05WoUyHJqDkJJPI00RpqDIIknknjWTpyjUMtg9lexbkniCWSAbk0RC0TdBxn91ANJPGsC3bpjn8Rzdyf9hiSeFbn5oisHgXABgciwBoEIBS1ZJBV3a89rruKWLJlau3Vc1AW8ueezCBdLhjW4WBx07axukA+MoRUhEBnWIBAO1EUp5AcB76m0W9vgj9EkKI5Ku3WZ9Fef5J5BKvJiRFeuUoF0eonVyBm+GgKRYQ0CYaEzCxEZLdbakoVTb7dO0zbsQh71tmTRVNqtvf1/fFXoGnCxZFiDi8VBO/Tmf0aTfKYUFY1B0ZWrViCLdrDkCgTIoNJubW1wOAgEvKbSbtX3QFY3S65AKvJiRFeuXoE0/dCOEIgAc6IrV7FA9M0QbpOgMCrtVnsLZJK7mhfIAN3KBVwsGdbgYmXzPnDcJ0AgMqxBINm8Dxz3CTW2ZAWgW7lASxYJupULuFgyrMHFYmBSixS7JYwGlw0EIsMaBJLP1M4qGvU8tJkKQejR4qmyW3Uwk0FdzBqS75t1Wv28tEYBSOJZL1V2q467q/5JRjVxSTzVWq1JbT2SxLMiL0Z05eoUSOPiNaS+vkviOfWNyXqAJJ7fNSe6clUKZOnXca7crKO4WP5h9Xl4KIknkEGV3aqmH3pSMabnIF4gYzshiWfVVNmtUzvoe+jj0VUsK4J1Mj4+lcSzIi9GdOWqFMh65tBhq9ujxbx0lphWhwpJPL9sTnTl6hSIpT96w7tRqzqeSeKJPwF/SOJ5gBJI3/WN0QWSeFYMujWFFsiyumGTOl88ksSzIi9GdOUgkB0uiae+k67nKkji+VVzoisHgXCBliwSdCsXaMkiQbdyARdLhjW4WEKBQGRYg0CEgpYsEnQrF2jJIkG3cgEXS4Y1uFhCgUBkWINAhIKWLBJ0KxdoySJBt3IBF0uGNbhYQoFAZFiDQISCliwSdCsXaMkiQbdyARdLhjW4WEKBQGRYg0CEgpYsEnQrF2jJIkG3cgEXS4Y1uFhCgUBkWINAhIKWLBJ0KxdoySJBt3IBF0uGNbhYQoFAZFiDQISCliwSdCsXaMkiQbfmgNCj8qzBxfo+2yy3dofjliy3FY1B0ZWDQHa4LLfDYLPcuh2We7LcAhmgW3e4LLerDExaELfDcFOWWyADdGuKIMvtstlxV5bbirwY0ZWDQFKQHnorAS+Qu7LcVjQGRVcOAknhRNAPQ7zjviy3QAbo1hRWD71L2Lk7g3w/yy2QAbo1hdHD5NNEh3OQe7Lc/nk6w+t9f38E1CH9hyy3B5j7IIEqoqtYt2S5rcjNF105CCSFuQ8yb3ZY7slyC2SAbt1hs9z+T2uz3VLaW1fgliy3QAboVi7gYsmwBhdLKBCIDGsQiFDQkkWCbuUCLVkk6FYu4GLJsAYXSygQiAxrEIhQ0JJFgm7lAi1ZJOhWLuBiybAGF0soEIgMaxCIUNCSRYJu5QItWSToVi7gYsmwBhdLKBCIDGsQiFDQkkWCbuUCLVkk6FYu4GLJsAYXSygQiAxrEIhQ0JJFgm7l4t6W/FnJLcHL3Z938NHc1YBAuLjTxfqx0IvTJdKb70u8K3zi8y59yIXjwo9+3zBXgUC4YG3J82MiGhLvShwc97XC/Mf9+/dq82h3BhAIF4wt+W7U/LjO/zkaHr7Ez8/Ph8PqfOHgQw4/79KHHB33TxNumk+jzcTuzL6AQLjIbkn3k/nuRzM9DlSZg1HzdvN7he8+LrX74W4FlsyWjEXxRgrSxuAtx/37DAjkQfIjK1pNeIGcGDUfjpRKgUD4cSkJ7f9BNk8NXxJPf9qIzhqQQpI3Pxy6QRMlPhoCWd1aOC5nJ+XupGyeBsYkni99qWOOZqvBmEiUONz8XuG7jzvanQEEsoOSeLrcnZTNU8OYxPO9Kj4eHo09/upxH4/Bd5/HIpCDi7g/gQ5oOyrxORBICne6CLIekEAYk3i+8aVejJpwTPjNeEyY4XpYOD2sPi/89vMufcjRcX7E/xwNfrrFeljiChBIir1AXDZP1iSeKV3oN4LNo1FzYPFgTDB3M6+5mipXCDuBUDZP1iSegUC2LrP/OWahpjEounKFsBWIz+Z5KolnejOxO+3EnzN3+kP4j6u0coDYCCTI5vk6iScoj5uG3O8iFkg07ThM4vkZ76cVAIgjFkiYzbM5TOIJQB0M5tTau/97e67tXYF0Ek8AAAAAAAAAuJNlfF/mMXOonAxr1WBXwAfz915P4mmh/Pr2lZa15f3C+tic3zhpzhSnWuRZM+UPv+s1c8GzA/2y5FeOvqM7LjK3fVLhrLUu2Q9XrVVMtAJ+VrcOuyFYIN8t0/r2eYW48guZjczRxjlccV+LHGtx+f13vWguaLm51QLJqpz7jv64yNzmSYWz1mb9/64fLlqrmXAF/KR/ZIYuWCC/mPF52pwrP5HZyBxtnKycLe5rkWMtKp/4rlcrpwzorzgupoWyKue+oz8uNkefdsmaPjjRD9esVY9tqkE3nr2/rlty0i8mf+fkDXF5/SMdmos2zqGKB1Yzrfny++/6iTndcn07GYHkWAtbzh63NXdhSJM1L5AMa9VjV8CPuncmu2bHLmU0u7ZP5R4RlR/Vf5G5aOMcqri3mmuNyie+6yfmdMutf1ogWdbCljPH7cz5JxXOW9OulpqM5FirHbcC3jRYZ5cwWoHoAhcEQuWHliYNZC7aOIcRiLOaa43KJ77rB+Z0y6nzpBZIlrWwpdt05fyTCheszW2rF6jmWKsctwLeOkZDuHor6wwyqUcWI3PRxjniM0iuNb+qWVnMNadbTpui+dHH1vZnkK254EmF89b0bDzVD1es1Q2tgO/spUorhmAOMl6cg7jyo1r+FZqLNs7h5yAc1lz51He9bM603GwvGnd51sKW08dtzUVPKpy19r9HLXfJWtX4FfDmEfXRzdyCq1gXZnO2fN/1je6YjbnmI4FQLbKtufLJ73rRXPjsgBJcZuWCljYn79hcf+2bWmskuzxrNeNXwJu7HbN7bR3hdZI3XrwPspbvl1md2oetueYzgbhaZFujC0Sp73rRXPjsgBJIZuWCljaXnmJzw7VffGdN3Y9Ss408axXj7yrbR9TNzdyB7jXn3ElfRbIx5+2egopbq3nWfPn0d71mLnp2QAkks3LuO7rjYnO7JxVOWkv3w2VrAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABq5P8BQV9GM4rTjpkAAAAASUVORK5CYII="}}]);