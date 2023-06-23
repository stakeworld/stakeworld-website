"use strict";(self.webpackChunkstakeworld=self.webpackChunkstakeworld||[]).push([[669],{3905:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>m});var n=a(7294);function o(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){o(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,n,o=function(t,e){if(null==t)return{};var a,n,o={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(o[a]=t[a]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(o[a]=t[a])}return o}var i=n.createContext({}),d=function(t){var e=n.useContext(i),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},p=function(t){var e=d(t.components);return n.createElement(i.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},A=n.forwardRef((function(t,e){var a=t.components,o=t.mdxType,r=t.originalType,i=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),A=d(a),m=o,k=A["".concat(i,".").concat(m)]||A[m]||u[m]||r;return a?n.createElement(k,l(l({ref:e},p),{},{components:a})):n.createElement(k,l({ref:e},p))}));function m(t,e){var a=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var r=a.length,l=new Array(r);l[0]=A;var s={};for(var i in e)hasOwnProperty.call(e,i)&&(s[i]=e[i]);s.originalType=t,s.mdxType="string"==typeof t?t:o,l[1]=s;for(var d=2;d<r;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}A.displayName="MDXCreateElement"},3025:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var n=a(3117),o=(a(7294),a(3905));const r={id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",slug:"/snapshot",sidebar_position:3,keywords:["snapshots","snapshot","kusama snapshot","polkadot snapshot","rocksdb","paritydb","pruning","polkadot","kusama"]},l=void 0,s={unversionedId:"snapshot",id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",source:"@site/docs/snapshot.mdx",sourceDirName:".",slug:"/snapshot",permalink:"/docs/snapshot",draft:!1,editUrl:"https://github.com/stakeworld/website/edit/master/docs/snapshot.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",slug:"/snapshot",sidebar_position:3,keywords:["snapshots","snapshot","kusama snapshot","polkadot snapshot","rocksdb","paritydb","pruning","polkadot","kusama"]},sidebar:"tutorialSidebar",previous:{title:"Pool",permalink:"/docs/pool"},next:{title:"Bootnodes",permalink:"/docs/bootnode"}},i={},d=[{value:"Automatic install",id:"automatic-install",level:2},{value:"Manual install",id:"manual-install",level:2},{value:"Setup a validator node",id:"setup-a-validator-node",level:3},{value:"Install the database",id:"install-the-database",level:3},{value:"Edit the systemctl startup script",id:"edit-the-systemctl-startup-script",level:3},{value:"Different databases:",id:"different-databases",level:2},{value:"Paritydb kusama",id:"paritydb-kusama",level:3},{value:"Paritydb polkadot",id:"paritydb-polkadot",level:3}],p={toc:d};function u(t){let{components:e,...r}=t;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Last update: Fri 23 Jun"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null}),(0,o.kt)("th",{parentName:"tr",align:null},"Chain"),(0,o.kt)("th",{parentName:"tr",align:null},"Database"),(0,o.kt)("th",{parentName:"tr",align:null},"Format"),(0,o.kt)("th",{parentName:"tr",align:null},"Blockheight"),(0,o.kt)("th",{parentName:"tr",align:null},"Snapshot"),(0,o.kt)("th",{parentName:"tr",align:null},"Full"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"http://snapshot.stakeworld.io/paritydb-ksmcc3.lz4"},"direct link")),(0,o.kt)("td",{parentName:"tr",align:null},"ksmcc3"),(0,o.kt)("td",{parentName:"tr",align:null},"paritydb"),(0,o.kt)("td",{parentName:"tr",align:null},"pruned"),(0,o.kt)("td",{parentName:"tr",align:null},"18478379"),(0,o.kt)("td",{parentName:"tr",align:null},"253G"),(0,o.kt)("td",{parentName:"tr",align:null},"263G")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"http://snapshot.stakeworld.io/paritydb-polkadot.lz4"},"direct link")),(0,o.kt)("td",{parentName:"tr",align:null},"polkadot"),(0,o.kt)("td",{parentName:"tr",align:null},"paritydb"),(0,o.kt)("td",{parentName:"tr",align:null},"pruned"),(0,o.kt)("td",{parentName:"tr",align:null},"16089533"),(0,o.kt)("td",{parentName:"tr",align:null},"195G"),(0,o.kt)("td",{parentName:"tr",align:null},"201G")))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"snapsize",src:a(2307).Z,width:"800",height:"300"})),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Snapshots are compressed backups of the database directory of a polkadot or kusama node. If you start a node for the first time it will start building the database from scratch, which will take a few days, depending on network speed. If you download an up to date database snapshot your node will be up and running quicker; under an hour or a few hours, depending on network speed."),(0,o.kt)("p",{parentName:"admonition"},"Recently the warp sync option is becoming more developed and popular. If you start the node with an empty database and the option ",(0,o.kt)("inlineCode",{parentName:"p"},"--sync warp")," the node will first download the finality proofs after which it will be ready to validate and in the background download the remaining blocks. "),(0,o.kt)("p",{parentName:"admonition"},"In the future this will probably become the default for syncing a database and snapshots may become obsolete."),(0,o.kt)("p",{parentName:"admonition"},"For now the snapshots are available for kusama ",(0,o.kt)("inlineCode",{parentName:"p"},"--chain ksmcc3")," and polkadot ",(0,o.kt)("inlineCode",{parentName:"p"},"--chain polkadot")," in the paritydb ",(0,o.kt)("inlineCode",{parentName:"p"},"--database paritydb")," database format. They are pruned with ",(0,o.kt)("inlineCode",{parentName:"p"},"--state-pruning 1000"),", which is sufficient for a validator node.")),(0,o.kt)("h2",{id:"automatic-install"},"Automatic install"),(0,o.kt)("p",null,"The following script can restore a snapshot for a quickstart. If you want you can first review it on ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/stakeworld/stakeworld-scripts/blob/master/node-install.sh"},"github"),'. You can choose "snapinstall" for a snapshot restore or "nodeinstall" to install a complete node. The script will ask some questions and create an install or restore script which you can review before executing.'),(0,o.kt)("p",null,"The script is for ubuntu/debian flavoured servers."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o- -L https://raw.githubusercontent.com/stakeworld/stakeworld-scripts/master/node-install.sh | bash\n")),(0,o.kt)("h2",{id:"manual-install"},"Manual install"),(0,o.kt)("h3",{id:"setup-a-validator-node"},"Setup a validator node"),(0,o.kt)("p",null,"Setting up a validator node is covered ",(0,o.kt)("a",{parentName:"p",href:"./validate"},"here"),". The default apt install creates an user polkadot with a home directory ",(0,o.kt)("inlineCode",{parentName:"p"},"/home/polkadot")," and a default service script ",(0,o.kt)("inlineCode",{parentName:"p"},"/usr/lib/systemd/system/polkadot.service"),"."),(0,o.kt)("h3",{id:"install-the-database"},"Install the database"),(0,o.kt)("p",null,"Database location: By default the polkadot binary runs as user polkadot and creates ",(0,o.kt)("inlineCode",{parentName:"p"},".local/share/polkadot")," in the users homedirectory. So for user polkadot (the default when installing from apt) that is ",(0,o.kt)("inlineCode",{parentName:"p"},"/home/polkadot/.local/share/polkadot"),"."),(0,o.kt)("p",null,"This can be changed with ",(0,o.kt)("inlineCode",{parentName:"p"},"--base-path")," so for example ",(0,o.kt)("inlineCode",{parentName:"p"},"--base-path /home/polkadot")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"--base-path /home/polkadot/myvalidator")," or whatever you prefer."),(0,o.kt)("p",null,"To delete the old database, restore a new kusama paritydb database snapshot for your node with a default install:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"su - polkadot -s /bin/bash\nrm -fr /home/polkadot/.local/share/polkadot/chains/ksmcc3\nmkdir -p /home/polkadot/.local/share/polkadot/chains/ksmcc3\ncurl -o - -L http://snapshot.stakeworld.io/paritydb-ksmcc3.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/ksmcc3\n")),(0,o.kt)("p",null,"You can check the startup by running the binary as user polkadot and see if it accepts the database or throws any errors:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"su - polkadot -s /bin/bash\npolkadot --chain kusama --database paritydb \n")),(0,o.kt)("h3",{id:"edit-the-systemctl-startup-script"},"Edit the systemctl startup script"),(0,o.kt)("p",null,"Edit the default service script and add for example ",(0,o.kt)("inlineCode",{parentName:"p"},"--database paritydb --chain kusama"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'su -\nvi /usr/lib/systemd/system/polkadot.service"\nsystemctl daemon-reload\nsystemctl retart polkadot\nsystemctl enable polkadot\n')),(0,o.kt)("p",null,"Or create a new script by copying the default service script:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"su -\ncp /usr/lib/systemd/system/polkadot.service /etc/systemd/system/validator.service\nvi /etc/systemd/system/validator.service\n")),(0,o.kt)("p",null,"You can edit settings at wish, changing ports and settings at will."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-config"},"[Service]\nExecStart=/usr/bin/polkadot --chain kusama --name validator --validator --state-pruning 1000 --prometheus-external --base-path /home/polkadot --database paritydb --telemetry-url 'wss://telemetry.polkadot.io/submit/ 1' \n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl daemon-reload\nsystemctl start validator\nsystemctl enable validator\n")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},'If you installed as root you will get an error "failed to create a test file: Permission denied". You can solve this by running ',(0,o.kt)("inlineCode",{parentName:"p"},"chown -R polkadot:polkadot DBDIR"))),(0,o.kt)("h2",{id:"different-databases"},"Different databases:"),(0,o.kt)("p",null,"Below restore commands for different databases to the default directory. Best run them as user polkadot (",(0,o.kt)("inlineCode",{parentName:"p"},"su - polkadot -s /bin/bash"),") or when running as root do a ",(0,o.kt)("inlineCode",{parentName:"p"},"chown polkadot:polkadot <dbdir>"),") or when running as root do a ",(0,o.kt)("inlineCode",{parentName:"p"},"chown polkadot:polkadot <dbdir>"),". Of course change the part after ",(0,o.kt)("inlineCode",{parentName:"p"},"-C")," when installing to another location."),(0,o.kt)("h3",{id:"paritydb-kusama"},"Paritydb kusama"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o - -L http://snapshot.stakeworld.io/paritydb-ksmcc3.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/ksmcc3\n")),(0,o.kt)("h3",{id:"paritydb-polkadot"},"Paritydb polkadot"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o - -L http://snapshot.stakeworld.io/paritydb-polkadot.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/polkadot\n")))}u.isMDXComponent=!0},2307:(t,e,a)=>{a.d(e,{Z:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAyAAAAEsCAMAAAAM8ycIAAABQVBMVEX///8AAACgoKD/AAAAwAAAgP/AAP8A7u7AQADIyABBaeH/wCAAgEDAgP8wYICLAABAgAD/gP9//9SlKir//wBA4NAAAAAaGhozMzNNTU1mZmZ/f3+ZmZmzs7PAwMDMzMzl5eX////wMjKQ7pCt2ObwVfDg///u3YL/tsGv7u7/1wAA/wAAZAAA/38iiyIui1cAAP8AAIsZGXAAAIAAAM2HzusA////AP8AztH/FJP/f1DwgID/RQD6gHLplnrw5oy9t2u4hgv19dyggCD/pQDugu6UANPdoN2QUEBVay+AFACAFBSAQBSAQICAYMCAYP+AgAD/gED/oED/oGD/oHD/wMD//4D//8DNt57w//Cgts3B/8HNwLB8/0Cg/yC+vr5fX1+/v78fHx8/Pz+fn5/f39+np6c3NzcAnnMvLy/Dw8NhHMW+AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAYKUlEQVR4nO2dC3qkIBaFNdtwP1kHgvRkZv8LGHlcRMtSUQSU83+dNmWBGOEUD6+nmgYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPcj2hEu+oPJGf/+yod3YacRmh6ANAjej4j2oEI2BDIw70Vogx9kWHoA0iBMG+fiWPINgTDmvUCPAN6BFYgQDR9E2zStatlMvep4K9Tn+rjlw7iVouWdk4R7JZl5X43VenrRqPdaJqe3m7GXavVIjo6nob28k63GS+ByAJCNqQfhgg2eQMYm23M2Ntd2kEM76MGY7Dh3+ewrIaTs1AhNMO+Fy+72jHIZf5HT8TS0d+xx5IjqyFwCeg+AfGiBjO1waEzbdwIRZmt38EbqRk0Cmb9qtBSY90K/07XTHqlnOXI6nj2M3WuGZKyVfoH2PQDyoVex9JBGtWtPIGrb8abXzXRopfmFWvb8lek9mPdCH6ynj3+9h3e9yzjQO3avKa5XqpsS0HsA5EOvYunWaj7EPwVikKZNkySmV73g49vMqMC9sA2+n/ZIM7VwxzPHsXt1emlVRQnkbLYCQA6EW4j6JpBeTQ5k86UHGacN0vUg0wvqQaY9jZqwt707nkPt1cUxLs2RpwT6PQDysRSI/p9PAmloPv1lDqKHUdL2INMLPYUZ5yBuj9QNfczV+n2C2zsWN1gtuAJ7/xUAWVgKhHG1VusJpOOD7AUz61ZstoqlXsm2G98WQq9X/c+9oFUs9/Y4v7CrWHQ8hdurlnmZ6TgogXsPgHwsBaLvb4zCcALRtyX0HQ37jsG9GngrxoHT2Jdw3rsXLd0HcXsG/z4Io2Y/uPsgg5l69FOCAfdBAAAAAAAAAAAAAAAAAAAAAAAAAPBSVHxEZ7c6PGJwsdoqZIIzvdN4iDDEF4HKYO3Qd22nnhftdYj20A7mUdPxLdb3g/EN0U9fDC7iD4BK4PYxCv04hWDTjoaev1Y7bWjggBBVUCMdN89Rd619oHpoF4Y6RiCI4QZVIpicnuCmp+Na3yFKD7E6mEaBGlEdg3liVT3BrfZIJRD/kTjRcm7tpgCoC2WdoybrymtgKZDBPgtEQyw8BgRqw9oLsLZlg30WW1sb6D5F9v0wCcQ67ABQD36v0HFvki58j7TJ6JNoQeGkbEUGWus86Vfx1bB/de6rfGpmbwT6/W9Y/PuQJcfQ2xPRnYQSQm9n6V96kHb5C3aUuSMhupX07dmlnK+G/YOcW/BrPgUS5vd/UCCcqaP2yhSk1/5O043Cbhxz9QNTZjgrhV+5/hfyotgUeU+iBCLPD8O3DPtnFvxmz6dAvmdf45BAetsdyzG5XaSaQk2UueAs1MTvvupqMnUVexah/fh04XS7mZzuJ/v8oVOxTUy/cnspu94IP7Vy7uedtuA3A/zxqM6h33nxz7ObbO4c9gz/7+HK9f/JkrWyYvMIxM5SXeMkp/uZfX7XikEyfy9lV4wSm1Jr5/5RUIJRIMc4w3EO/c6Lf57dZJsEsmP4fw8Zrj8IIbCCfiMUKbiwExBqnHOne9VIVfvVHpY9CcONySbD/im1bsRWII3xCJeTV+bMi9/LrvdPAtk2/L8JCKRwgiroV3G5SNEKe9PA//SexuWC2WmDaqCSBKL22ux6ID/4qfV7JBB1QCY8t2X9Nnnxe9n1/ukctg3/bwJDrMKLzSEQ9b1E2snbNU5yup/b55NA3F6bnQz756mdQJQUxoNNDv3Oi3+e3RbyKRA74Z4b/t8EBFJ4sRsV9HuQ0CLNKpYa0LjG2Rine88+3xPIzELfc5NdpHYCGX/p2+ZrDzI1+G8CWTX8vwkMsQonUw9i7oOQ1z453Xv2+Z5Apr1T9qZpmkXqSSCdUMu93hzEevHPs1Px9hz2DP9vAgIpnFwC0bF95LVPTveTl/6sB3F7vexN0yxSa4EIqUVDj+8Zv/61VSybYfL73zX8vwcMsQovNssqltmMgnAe+vY+iDPLn81B3F4/e7NMrf5XFvwuiTt6u3IfxGbwUu0Z/t8DBFJ4sa/s4h/0RNIrr/+beGEFyZvn1av4riZangddTV54/d/F+ypoyPHEHrmaqBmNXn846mqCIVbhxSYWyEqwOe++jYlWe4KL0e43hbvPXE1coQdcTSCQlMWemEKnFshnsPkxgbhA9q1o989w9xWB3BLurum4F6Zibsfvupq8rwcvl1OLsMkFojd+qzkmEBfIvhmu/hHuviaQjfw7J7GDYKNGerVo3Rx2NYFAEmBV8SCBqJsXNJ0lgah25QLYXaS5TaUD2ZdHmIe7q9sgY6r/bke7e/lNkHy8cHfdMbDxFDrTdxxyNcEQ68a8Rg2ki3OBH9l6EDWdHeh2+vgjtQ4ogJ0izV0qwT6OsAh35ybVTrS7l98EyUcLdzeuJmqSPp7JYVcTCCR+3kWHcS0wKrCC/kKPv8AFm5uhR9eSQLxHDDlzUR5TKsGWR5hSm3AQK5CdaHcvv2n6scLddYAyyeG4qwmGWPGYdxj2F08Y9wvkTxFawgwXbO6Cyq1APKMPwVyc4JRq3Lk4wpTaNDgSyHa0u5ffNNNI4e6mV+jt/zLI1eRn/HDEz9Uf0/zdloTxY3Rh0wQeM9TVJIJAKNh8cB+xWiCtCSShAHaKNJ9SCbY8wjLcnQSyHe3u5Tdz5Tjh7tbVxPUg4a4mJyh+rJOm2NmIyhtKXeo4HBsV9HeQkOK8UNxZDyJ61dBdAPtWD+Ia7CLcnQSyHe3u5f8qkBPh7uRqIvQchKVxNSmtpSYu9ssUfDHEmlKeI3kPYn9ZzkH0J6wLYN+bg2gW4e5OIJvR7h8CiRLuPrmarISa3OZqUid7U3Cvw4gRWptLIB+rWOMOL9ydIs2nVSwdyD47wiLcnVbBtqPdPwTy4HD3GjkyBY+hC0eOVSzD8j6IWsdyAewu0pxS2UD22RHm4e76XopOtRXt/iEQhLs/pNjZiOpzptFsCONKsW/8BHtQtDsEssd8RHVuCg6B+GSJdj/N+65/JNZuangDqrtGVB+8roKyRLuf53XX/yJrU/DQEVVUUEF5wRDLsHkX/Pdih4Eh1nOBQBT7HcaRqUZwsUeAQPJS+fUPuAueZkT1QeUVlJ1Kr3+au+AxqLSCiqGuIdaVu+CZ/loIJC91COR4IPr3DgMCeTTmjr90MVmw/WkKXLM9wasrKB1k+6NjetWdyhS2P8VydM320tJUIl5ZQelxLj+NfTSqRtufwx3GqSk4hliPx8Y16i88SWH7U5ZAgjqMtHf7IJAyEEz9r7VRle3PXpxtOWu2J3hDBRWC7Rj0QCuJ7U9mAuJsHygM4sEVVBhktOIeS3+37c+8f/CWbLc6jMIiXI4AgUTCfi+plUYS258sD2Zke3IJAnk0rlcwS1mvs/3RzV/9vhDGZLcz7ivgPOP+hNr+gG8MbtRkZ+ApbH9uZb3D2BxRvZJiK+hZkO2P80R5uO3Psvn/Ljg5BccQq1Im2x+3apXA9ueWJnPro64QCAiklOu/vma70mG8fET1QSkVVCu5r/+JONua5JG/gmon0xDrRNhUjGIxxAKBJBbIiTjbUp5cgkCqJOn1D+kw6hpIfQcCyUua61++N0KxQCB5uXeIdYs3AoZYIB23COSKN8KFYm/NCoHUSdTrH8MbAcyBQPIS4/q/wRuhWCCQOLjvMREf3zB1m6vJBW+EB451MMR6MuRqIsfWPyiF3OhqEsMb4YEtFQJ5MmRiop8G6e9xNYlxkw+EAoHEo+Puy60iuprca6YDdoBA4iGYbAfWqsehIria3NphPHCsgyHW0xk7BjlOzPW38p53NUnTYTywpUIgD0e5muhvbVffyR7uaoIZRplAIJHQriZGDuP4KtTVBDOMUoFA4mB7BS2HXo21Drma/P6247+fH2sasuwwfDeRMU1Ex46fPHl/Lpzzlbxnf+BqEgtyNdFNX3n0HnM10QI53WHUNRnAHOTJkKtJ37JeTdKPuZr8aoFghlEyEEgMJleTlVCTDVcT24NghlEuEEhOnEAQd15qsRBIXorzxUKxcyCQvOD6Fw4qKC+4/oWDCjqBlOPUmwnW7yfdA0OswouFQIKRvG27vuWCt9cVAoEUXiwEEgzjQ9cKtZYrxG7iPXD9CwcVFIy6vdGZ75Hilw+G6184qKBg9LfYamn0168ehliFFwuBBAOB1FQsBBJMMQIBCUAFBaOeCuT6Pz5dPWv7o4OtdFxiAtsfkABUUDDCg/aR7Y/QUb3yVtsfR11jHQyxngy5/Dg/hhtsfz6oq6VCIM/Cfqmtzz22PyArqKBwejb+R3MND8GalpnnQSLY/oAiQAUF07eqU2iVv8+sD1EdAxdmLnLe9ieAusY6GGI9BW0vqhd7GfN2d04Kp2x/TlBXS4VAnoJZvVWNfPCWo9jU6k/Y/oBSQQUFY5QwyNmNQr9XGA7b/pipTHo7G/zA9uc+JilMPQhNR/TsgrVHbX8wxCq+WAgkGMHoN+Z6Amv7I9VNwe6w7U8DgRRfLAQSDN3684ZVzvZHW/zotw/Z/uD6Fw8qKBzWim4YOj67xXESXP/CQQWdYOwdRvyO4DQYYhVeLARyCinlfqIjQCCFFwuB5AXXv3BQQXnB9S8cVFBeMMQqvFgIJC8QSOHFQiB5wfUvHFTQGSQT+pl0vp90B1z/wkEFnUFw1mkuHwlDrMKLhUDO8GnKa11NFKZfSeBqUldLhUAeBF/eJiRXk0ZFaCmBpHA1AQlABZ3hY2zlTEwa2TLepHE1AQlABZ1h4GJlDqK+/rkZ3+CJXE3qGutgiPUgODHbK5gWiRJIEleTuloqBPJ0VMegeg4lkCSuJiABqKBYaFcTwZo1gdzjagISgAoKppNNR0x7mbE5kc18iHWnq0ldYx0MsZ4CH1bmILSka+hKdzX5yZP358I5X8l79geuJrGwriZS0aluJIWrCUgAKigK1tVE/65Xe1O4moAEoIJi4FxN1AstkBSuJnVNBjAHqRIIpPBiIZC84PoXDiroJJFsTXD9CwcVdArljCUbdl0kGGIVXiwEcga1MjUKRLDLR4JACi8WAjmDWp8aBdLzy0fC9S8cVNAZ1HquDk28fqQIZwNuBBV0BtuDDHl7kLrGOhhiPYiu7fq2HzhMG15fLARyis7EJF4/EK5/4aCCTkKRVxZyNXHuJglcTUACUEFXcBohVxPGh36YfwXbfa4mdY11MMR6EPap2WkVy5qYSN1pKFuTFK4mdbVUCORBtFw3+8Uyb2d7BiHSuJqABKCCztDKceD0cR9EsEbNTRjv07iagASggs6g76Lzfi4Q0zGM8/AhkatJXWMdDLEehJKC6kT8q9eRFHrO0ria1NVSIZAHYSYRg/9EP5ta/TgJT+JqAhKACjqDHSPJafhkewX9xqiO0l1N8HPoB64msbCuJr21aUjjalLXWAdDrKewZhxHriZC3yhkaVxN6mqpEMhTWDGOc64mkn2GmtzmagISgArKC65/4aCC8oIhVuHFQiDh9DrMRHAx7CbdBQIpvFgIJJhez7c5Z/5k+yy4/oWDCgpG38XQdwIFu3wwXP/CQQUFw/VTHlolfC/tLhhiFV4sBBKMjiLRa7l9XleTuloqBPIUVA9iQkngi/V+UEHBCGYeGmyaTmynPACuf+GggoLpWy50EHvXXl/nxRCr8GIhkHB6xrQy9HLvRSCQwouFQM7je7vD9ueloIKi4Gx/7DaJ7Q9IACooCuTy49x+YPvzkmIhkHiQ7c+4TWL7U1dLhUAej2BuC9uft4AKigZ1DGqbxPYHJAAVFAu6K9Kt+GLB9uexxUIgkSDbH7NNYvtTV0uFQB4N9Qpk/wPbnzf8wPYnFtb2x22T2P6ABKCCokC2P7SF7c9bioVAYkC2P//I/ieJ7U9dLRUCqRJc/8JBBeUF179wUEF5wRCr8GIhkLxAIIUXC4HkBdc/JX/hWVBBecH1T4DVxZ8iNC8qKC8YYt2Y16jB6QICeSAQSPy8iw7Dbv8sgcVCIHnB9Y/HaofxNwkDPcgDwfW/zF6HgSFWCTg3E0bBife7mhQ/1rm32KMdhqcLrGLlgtxMei6MQFK4mpTSUtMWe6LDOKELBwQSBTIxGQbzhFQSV5O6SNNhfIAKiodxNTGPEKZwNamCxB3GB6igeAim/m/NFyMkcDV59RArZoeBUJMisB2DVkQSV5M3CuSWDgMCKQFyNVkTyD2uJm8i0wxjH1RQJMjVZDHEutPV5AXknmHsU3kFRWPqFRaT9DJdTX7y5P2h3//01rb6n59Fh/Fjfv2ZtioNXE0ezDCNmuwyL2tudzV5zhzkb7491WFk+mshkCiQm8k4lmq7VK4mT+Fj/lDODGOfGirofsjVRIqUribFU/4MY59XV9ADeOUQa74k9bfgZIeBIVaVvEkg93YYEEiVvOH6F3sPIwZvqKAn8+Dr/4YZxj4PrqBX8Jwh1t/8l1MdRrERLt+BQPJSvkC+OB+c6jAgEBBIsdd/fQD1thnGPsVWUCUUd/3XO4y/BW+ZYexTXAVVRilDrO0Z96SLax0GhlggkNwCCZ5xX+owIBAQSKbrH7xE+9IZxj4QSBzI9seFYCWw/TnBhSXaunThgECiQLY/Loi3LNufqPf0SotwubdYCCQK5PLj3H5S2P6ERg1GWqKFQMA5Ou4eJMxr+1NHEEgaIJB4COYeRU9i+/PBq6MGMwGBRGPsGJyZSVLbn8QdBoZY4AzK9uebQO6x/akrahACeTba9udziHWD7Q9mGCmBQOJgeoWVSXo825+HWOW86Qe2P7Eg2x/n9hPP9ueWDuOBYx0MsZ4M2f6s3Cg8a/tz65LUA1sqBPJgnO3PWqhJmO0PZhhlAYHkxV1/3MMoEwgkL/b6n+ow6hrrYIhVIX9/7YUOo66WCoFUiBUIZhjlAoFk5E8LBDOMkoFAcrIYYunfjueua6yDIVaFOIGkfsL7gS0VAqkSXP/CQQXlBde/cFBBeclt+4Nid4BAIsFMUKJyN9GRJAlcTepqqRDIk+m50ALp2qFnqVxNQAJQQVEYBvNklP5PsDSuJiABqKBYKG1IG+CextWkrrEOhlgPZxLI2EMkcTWpq6VCIA9nGmIxz97kTleTC3lRbIq8wMdqY5yb8w+B3ONq8rwmU1exYIYZS7G2ZaM6wl1NWuwoege4yjTZ6HiYqwkomaSN6M1ogQxKF2oSftTVBIAaGMdQbdf3DeN9z7g87moCQA0I0x3LUSF2keqgqwkAAAAAAAAA3AijuyV2TVhNU2i2YuYxbC8vfV1oQGabxUtzvFw3l1o953GC1fqRM6tZ1894MysV9+WUN/NScWeK9fP2oacMrmKD4ik2Xt0ckdN6l9D+vnI7r1onk2bp+HBm+obRKc3xcinVl3OWnMnhS5uhRF/OeCurK+7LKW/lpb+WtiHFUh731EJAXnAdGxRPsfHjB5X/dZ/bV34WUM94SObZN4wGlkupvpyz+mn69VU5SvTljLeyuuK+nPKRYl3igGJnpyxYUF4QBdvK7EZ0fmD83kfTQiBhmTvupTmcdUoVfM4u0ckzXggk+K+dtmFZ3Xexdm14XnCVuUDU2GWK2mI7I1zzzCJXeYbgzIJ5aQ5nnVKtnrNsB9Z+iQtwidbPeCvr9Neun/JuXvPpT9uwrGMe99RCcF5wlZlA+pY+nVWVcEGD5s28bJy1dsGZ1UNaLs3xrFOq1XOW4+RVDut5p6yrZ7yVdfpr1095Ny89kqa3YVl1HnpqITQvuMxMIJ2YN8HG9utbefWUV32oBmXu3GMpKs3xrJ8CmeWVeoFpPa9LtH7GW1mnv3b9lPfy0l9rtmHF6jz01EJgXnCdmUBENx/ENPTye156viQsM5uiv1Sa41k/h1izvOZs1vNSon/rZ7yV1f21X055Jy/9tXYbVKzNY59aCDxlcB1fIPqD2Z8GN3NDh7W8pq2OlRSS2X9CawjK+jFJX+S1Q6e1vJTo2xlvZHV/7bdT3sxLf63dBhXrXyl6auH4KYPr+AIZ9FKLnvWpwHh93dnOEMv1IAGZ6RtGKU1IuS7V+jnrd2jJaD3rtzPeyuqK+3LKW3npr3XbgGJdHrUZR4WBpwwuYoPiXWw8UzvpNpRU/lnf59mUSegRPQvJbL9h1KUJKdelWj3n8eOU9d+mrZRo/Yw3s7ortX7Km3np+1RpG1Ksy2OfWgjJC65jg+L/Y2PjyXnRBjLosPhhJ6+kaIjjmXv7aJykNEHl2lRi/ZxDQk1CsortU97IS3/tvzb8jN2VoqcWQk4ZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACIwf8BovwMLAxGoOQAAAAASUVORK5CYII="}}]);