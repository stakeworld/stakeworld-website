"use strict";(self.webpackChunkstakeworld=self.webpackChunkstakeworld||[]).push([[669],{3905:(t,a,e)=>{e.d(a,{Zo:()=>p,kt:()=>c});var r=e(7294);function n(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}function l(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,r)}return e}function o(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?l(Object(e),!0).forEach((function(a){n(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):l(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function i(t,a){if(null==t)return{};var e,r,n=function(t,a){if(null==t)return{};var e,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)e=l[r],a.indexOf(e)>=0||(n[e]=t[e]);return n}(t,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)e=l[r],a.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(n[e]=t[e])}return n}var s=r.createContext({}),d=function(t){var a=r.useContext(s),e=a;return t&&(e="function"==typeof t?t(a):o(o({},a),t)),e},p=function(t){var a=d(t.components);return r.createElement(s.Provider,{value:a},t.children)},A={inlineCode:"code",wrapper:function(t){var a=t.children;return r.createElement(r.Fragment,{},a)}},u=r.forwardRef((function(t,a){var e=t.components,n=t.mdxType,l=t.originalType,s=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),u=d(e),c=n,k=u["".concat(s,".").concat(c)]||u[c]||A[c]||l;return e?r.createElement(k,o(o({ref:a},p),{},{components:e})):r.createElement(k,o({ref:a},p))}));function c(t,a){var e=arguments,n=a&&a.mdxType;if("string"==typeof t||n){var l=e.length,o=new Array(l);o[0]=u;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=t,i.mdxType="string"==typeof t?t:n,o[1]=i;for(var d=2;d<l;d++)o[d]=e[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,e)}u.displayName="MDXCreateElement"},3025:(t,a,e)=>{e.r(a),e.d(a,{assets:()=>s,contentTitle:()=>o,default:()=>A,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var r=e(3117),n=(e(7294),e(3905));const l={id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",slug:"/snapshot",sidebar_position:3,keywords:["validator setup","validator","validate","snapshot","rocksdb","paritydb","pruning","polkadot","kusama"]},o=void 0,i={unversionedId:"snapshot",id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",source:"@site/docs/snapshot.mdx",sourceDirName:".",slug:"/snapshot",permalink:"/docs/snapshot",draft:!1,editUrl:"https://github.com/stakeworld/website/edit/master/docs/snapshot.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",slug:"/snapshot",sidebar_position:3,keywords:["validator setup","validator","validate","snapshot","rocksdb","paritydb","pruning","polkadot","kusama"]},sidebar:"tutorialSidebar",previous:{title:"Pool",permalink:"/docs/pool"},next:{title:"Validate",permalink:"/docs/category/validate"}},s={},d=[{value:"Automatic install",id:"automatic-install",level:2},{value:"Manually download the database and install later",id:"manually-download-the-database-and-install-later",level:2},{value:"Paritydb kusama",id:"paritydb-kusama",level:3},{value:"Paritydb polkadot",id:"paritydb-polkadot",level:3},{value:"Install the database directly",id:"install-the-database-directly",level:2},{value:"Paritydb kusama",id:"paritydb-kusama-1",level:3},{value:"Paritydb polkadot",id:"paritydb-polkadot-1",level:3}],p={toc:d};function A(t){let{components:a,...l}=t;return(0,n.kt)("wrapper",(0,r.Z)({},p,l,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null}),(0,n.kt)("th",{parentName:"tr",align:null},"Chain"),(0,n.kt)("th",{parentName:"tr",align:null},"Database"),(0,n.kt)("th",{parentName:"tr",align:null},"Format"),(0,n.kt)("th",{parentName:"tr",align:null},"Blockheight"),(0,n.kt)("th",{parentName:"tr",align:null},"Size"),(0,n.kt)("th",{parentName:"tr",align:null},"Full"),(0,n.kt)("th",{parentName:"tr",align:null},"Creation date"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"http://snapshot.stakeworld.nl/paritydb-polkadot.lz4"},"direct link")),(0,n.kt)("td",{parentName:"tr",align:null},"polkadot"),(0,n.kt)("td",{parentName:"tr",align:null},"paritydb"),(0,n.kt)("td",{parentName:"tr",align:null},"pruned"),(0,n.kt)("td",{parentName:"tr",align:null},"12059244"),(0,n.kt)("td",{parentName:"tr",align:null},"95G"),(0,n.kt)("td",{parentName:"tr",align:null},"115G"),(0,n.kt)("td",{parentName:"tr",align:null},"Thu 15 Sep @ 12:20")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"http://snapshot.stakeworld.nl/paritydb-ksmcc3.lz4"},"direct link")),(0,n.kt)("td",{parentName:"tr",align:null},"ksmcc3"),(0,n.kt)("td",{parentName:"tr",align:null},"paritydb"),(0,n.kt)("td",{parentName:"tr",align:null},"pruned"),(0,n.kt)("td",{parentName:"tr",align:null},"14461911"),(0,n.kt)("td",{parentName:"tr",align:null},"148G"),(0,n.kt)("td",{parentName:"tr",align:null},"168G"),(0,n.kt)("td",{parentName:"tr",align:null},"Thu 15 Sep @ 12:34")))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"snapsize",src:e(2307).Z,width:"800",height:"300"})),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Snapshots are compressed backups of the database directory of a polkadot or kusama node. If you start a node for the first time it will start building from start (genesis), which will take a while. If you download an up to date database your node will be up and running quicker."),(0,n.kt)("p",{parentName:"admonition"},"The snapshots are available for kusama ",(0,n.kt)("inlineCode",{parentName:"p"},"--chain ksmcc3")," and polkadot ",(0,n.kt)("inlineCode",{parentName:"p"},"--chain polkadot")," in the paritydb ",(0,n.kt)("inlineCode",{parentName:"p"},"--database paritydb")," database format. They are pruned with ",(0,n.kt)("inlineCode",{parentName:"p"},"--pruning 1000"),", which is sufficient for a validator node.")),(0,n.kt)("h2",{id:"automatic-install"},"Automatic install"),(0,n.kt)("p",null,"The following script can restore a snapshot for a quickstart. If you want you can first review it on ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/stakeworld/stakeworld-scripts/blob/master/node-install.sh"},"github"),'. You can choose "snapinstall" for a snapshot restore. The script will ask some questions and create an restore script which you can review before executing.'),(0,n.kt)("p",null,"The script is for ubuntu/debian flavoured servers."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o- -L https://raw.githubusercontent.com/stakeworld/stakeworld-scripts/master/node-install.sh | bash\n")),(0,n.kt)("h2",{id:"manually-download-the-database-and-install-later"},"Manually download the database and install later"),(0,n.kt)("h3",{id:"paritydb-kusama"},"Paritydb kusama"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"wget http://snapshot.stakeworld.nl/paritydb-ksmcc3.lz4\n")),(0,n.kt)("h3",{id:"paritydb-polkadot"},"Paritydb polkadot"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"wget http://snapshot.stakeworld.nl/paritydb-polkadot.lz4\n")),(0,n.kt)("h2",{id:"install-the-database-directly"},"Install the database directly"),(0,n.kt)("p",null,"Install to ",(0,n.kt)("inlineCode",{parentName:"p"},"/root/.local/share/polkadot/chains/<chain>")," or change to your target directory."),(0,n.kt)("h3",{id:"paritydb-kusama-1"},"Paritydb kusama"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o - -L http://snapshot.stakeworld.nl/paritydb-ksmcc3.lz4 | lz4 -c -d - | tar -x -C /root/.local/share/polkadot/chains/ksmcc3\n")),(0,n.kt)("h3",{id:"paritydb-polkadot-1"},"Paritydb polkadot"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o - -L http://snapshot.stakeworld.nl/paritydb-polkadot.lz4 | lz4 -c -d - | tar -x -C /root/.local/share/polkadot/chains/polkadot\n")))}A.isMDXComponent=!0},2307:(t,a,e)=>{e.d(a,{Z:()=>r});const r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAyAAAAEsCAMAAAAM8ycIAAABRFBMVEX///8AAACgoKD/AAAAwAAAgP/AAP8A7u7AQADIyABBaeH/wCAAgEDAgP8wYICLAABAgAD/gP9//9SlKir//wBA4NAAAAAaGhozMzNNTU1mZmZ/f3+ZmZmzs7PAwMDMzMzl5eX////wMjKQ7pCt2ObwVfDg///u3YL/tsGv7u7/1wAA/wAAZAAA/38iiyIui1cAAP8AAIsZGXAAAIAAAM2HzusA////AP8AztH/FJP/f1DwgID/RQD6gHLplnrw5oy9t2u4hgv19dyggCD/pQDugu6UANPdoN2QUEBVay+AFACAFBSAQBSAQICAYMCAYP+AgAD/gED/oED/oGD/oHD/wMD//4D//8DNt57w//Cgts3B/8HNwLB8/0Cg/yC+vr4fHx9fX1+/v7+fn58/Pz/f399TU1PDw8OPj4+np6cAnnMvLy+WSPM9AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAX6UlEQVR4nO2da5asoJaE5UzD+dQ4EOXe7uz5/295g4KpJipIfGvVy2SnJBjFRjHsOgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVAHt1ZdloFtFj741ADUxEQW3W7YFMg7eHzjgwduZ6HLLtkAGCAS0hBUIEQf7MIUC4ROhvRAIHyihoxpwmPmjE6+RgbuXOzYXmMQvvd4gMVtpz+x41S8jACiQbYFMlPOezkWmiXcjYfMvg/cHpT1n1N8i3mWcj/9+/mMko/feYqt+22neiy1gXgOgRDYFwuUhTk0RKYXB+4POxedD3W3hQiTu3XSg3aretqfcFbCvAVAiZpIeFQiTR6+dg0y+QMQvshgz//7lljmLsoGjlY7aasozv4B5DYAS2RxBVOpj5iCEaIHYP+wBb7dwNbVg4bkxvVWW5zrIFODBbAWAstgUiB1BOJknGWYEcX+YEcRt6YR8CGOrxElsleXFBMS8s/8aACViBSIPdpqYg8jjmesRxP1h5iBui2SOIusxYd40v22vR5WwQKQ4ACVgBTLIE1aJs1h8Hl/YJP75z1/uDyqyKTk311sYZfosFhV5l1aM3SpO82opmAL2NQBKxApEXvLoY9dB+rnISMk0J07zWEIJs3+QfiDyOojdMk8o5t86dZljMIe92UpFecHoCtgIAAAAAAAAAAAAAAAAAAAAAAAAAICmwC3aoEV6uRJc3Dxt7ogjvhTGiRA6YDURaBM+KYHIFatCGANlHSNWIRMdecdwRwNolJG5e4k6xha3W9v7G4YBKRZoFCmJwKLDCYR6PlEQyNv5+3u6BkUiJMHJPNeQahC3+jBzFzUnniggkHfzJ3m6FgWiBCJ1IRQyKH8CCfdvFoVA3oqSBQSSQAlEHP3Cp0aYpDGTWZnNwnAQAnkbWg1aGH9/UEgcNwdhhBtHJ307qfQt6JQ5mi8QAl5JBQKJ/p8Wk+bL/oFLgUhTm5F0C4H0+vzuSiCLn9837C/5Q2gD1Tlf8XDAWA4cEpJRH8oOYDzr6CIt/2jc1jjw4JdcLxDhx8GU3ybv+DTZPZN+/nuklEcFcmZ37YSWVF+bP/0l6K4QyGl9qHDeR+OHGwWivTm5cO6Qe5BO5oPzqRknqoUMgVSx01VoMAWPC0NnVn8/7HWFOMKVDZK90Gas7p1//jiQ+T/wIP+yW214p3yYXOlJmLn20oNf/Q+f39Va9Fsz/hL4oSX/tRP6bH23hbEcUmTIsW7dHm4malZkWIEYq3vPP3+cs/iJyQvSdqsJlz+msLT8Py3mA2oWMAvQWvRbM/4SyPmvBmQlOtWICMPThT3Sj3Trt3NeEzUrloxAQqt7458vLSudQ751D6edn2JZt30jEHlaaRS+sMaiPzTjf5hCqgEci4sZiYmGf2CvD++8AiH6HKjzRfat7q37sTjCrUCcvb5M/e0kXZaWrxmBiDecv5xFf2jG/zBIsUrZ6Y5zU4uZxkZqlO7WuN7iElRMhHF1SFuBGKv70D/fCMRuVeHUvFFY2gpESGF+M2fR754+UQAQyNM73TVghFPw72eosgqEdnoS4lbDKqv7hX++Fkjgoe+bxoalrUCkFXL3whEEZMAcjIEKosJYHLbb5E2xOn2a1zrrq32Mnn++J5CFh74VyKK0E0g/DYP/mDDMQcAio9oaMA6NHIbsAunEnUTGWd9Y3Xv++cEIYrZ64V3XLUpLgUzqBTl4eGexxu4NZ7Fqy5PKSLHCjGrXgHHiol/m07zqB7fO+sbq3rrlB3MQu9UP75alxXfhwW+LWIt+a8ZfAhDITTvdFsaPA8aKuhKDklfP1tWS9fHlYsZf+IIf8hM1dSu3d/WVSE0tWRP7zk3lGjBWVNStvTy5VSxIsa6IXBz+6ZlGtyWMHz7qxQLxn+4Vcmw0uH/F+2EgkKyRe89NeQK5or5ZBRJZr75PIHYx+9aK9/WS9+cFkmk1L3AcPzd17Q1NuVfzLtar7xPIEFwKSax4Xy95v0wgyhdLLX0RO91lHAeB/MS956b2c6xbP5+tV91yXHtIGYGIVfB2Ebtdrq5LycXsy3cIl7yLSyFzqf+7Y8W7MY6zl/j3GcchxToTec+5qbtSrM9nUyHu8JaHlBHH/MWlDswidnOhz5ZarjZRj+f2l7zrUreseDfGcXbQ2GccB4Ecibz33FRJAhEJkloM0hMjEO6OYPkQerVUxJWaUimWXfJuZHTTivctgaSM45Bi7SDrQttbONKtn8+2Qux6dbWcUC6+lQJx93OLo9wsNnSlUive3ZJ3I5CbVryrFZeDNq/eZxwHgWxwdKGtJ5CHSXfrZy82wq4VUZkQ07YflKjFJGYRu1mu7kqtF/Qul7wbgdy04l3PQfgR4zikWBFiU+99C23X8njmo14iEGeUIwUyMXULoV7EHo4gYzCCmHdYLnm3M5V7Vry7UcLcL/zdOA4CWREe9hu62DXVKE0gSyKKWOAtxw3nIHK2bRexf5uDSBZL3q1A7lnx7gRyzDju39wT+FJH+fxzdyYlyxZQ7+WX6NPdB80BgbgTo+ZMllj/bhexB2exSN916xXvyyXv1JS6Z8W7ej6I+K0/bBzXIPa/fqkXM34g+4VCxfI6iDiPZRex2+XqppRezB68Q7jkXV5LkaVuWfGuvHnlHKS/wTiu6Dzpa+jqsN8xw7j5YsYtKVYhXL+2xBjHsclc2LzaOK6Ao/xUaDUXM9oRSMEr3itryV8IhJGaaNy4XupK6urWkle819WSZ9i3LKSkq3wZeH+33sV7U6xdmVS3VM5z9c0aCoHk4nUCObwsZE9GVeZH3QACycVrWvLospDVad5X8ZpufZzaW3LngFHieqkrqb1by6HWFOvwgLEnk7qwvjeHQiC5qFMgpwaMH8YNCKRZamtJf+S4bMCon9q6tVwqaclwqnH1gFE/lXRrBRSeYm1PNQ4OGOcrjBSrWcoUyL5zU0cHDAgEHKaslvzhYgbwKatba6O8+0GO3uMKYXyhjG4tjN7cUcjFPVnqvhXvTvTsxnHZkodQGFu68FKqWyuMFKt+jHFcJ+6Nop26P9I9rboo4zhzjAdTjQ1hHJtqXFBhCKR+jHGcuKtR3LSoboAfzB2FFxjHnWV52O8ZMJBRHQMCiaEEwgkTAlH3pFtjiBKM477cmYGLGfmAQGIQ8+g3N4KYgeMK47iTFzOSCdXVFzOQYrWOfYy1EIiag1ArkAeM47IKY/derwiFQF4B6bUbnRRIJwzkx2AEyWscl2LfPa7IpK4EAokhRDAocxOTUSmpdLcYxykTNX3Y//uXEIYxZnM/Hzdae9vXIeO4lrDzDCmLUUzSrfvjBcZxOgM4fI/r6jTvmb3+UOFbI5FiFUQokIFyO0fvLjCOO7osxBNIdQdcbfWFQNYY4zjxu52DTMwVyGQc98M9rphp3AYEkovdLXnvPa7gNyCQXHxtyaPrCL1M6j02OrXVFwLJRqol952rPTtg1HbA1VZfCCQby5b8YeqNTKocIJBc6JY8fK720IAB7gYCyYVsydsHjNpSltrqC4Hk4s8XyC5hOF1Ud9RAIOAY8zFPkEm9EQgkC0og12VS4CkgkBz8hQLpXn6uFikWOIYRyMkBo7qjBgIBx9BzkA6J1NuAQLLgBALeBQTyC95q3r8SfLHKD62tvhBIjGqN48oPra2+EMialXFcT1nHnFdDfuM4UC7o1hVL4ziVSNl70gsyjgPXg26NETGOY+ae2wuM46rLO5BiNU5gHKcMf5j1anjQOK7+0NrqC4FECYzjRtlG3Aokv3EcKBd0a4zAOC42gtxjHAeep9Fu5fMxz6ZpTLwcGMcpaYx2DpLfOO7feXOzf4+bq725vq0ax3FKyMDJNC1P1RpCXywpg4GaTZcZx7UQWlt92xxBBjqOdJoP7n6KFwgF0ssH6NjRJrtxHCiYJrt1PuDVFIPTyKtr47jVlfQsxnGgBprsVhJ+y/im56gu70CK9W4gkMdCa6svBJL3TcHbaLJbCZ1R3zK+ab63AuXQZLdOjnxvihSr2J0ixSoBCKTYnUIgp2CM8e+ldtNwS76ZNruViSXrhBCa8T3bbMnX02S3MiIFwjlNLcY6AVKsYneKFOsgg7zniYhr4vneFAIpdqcQyEGonHuQxFKTkzTZku+nyW5VH3rscKEQfKPJbrWPdC5kBKku70CK9W7sjVK/zkFwP0gVO4VADjKqSYhvdhWgfLH4QIlSwNXGcaBc2uzWiQz92E9kiL1ojOPoxGcJ9TCOa5pGu3UeEwjxEyQPYxwnr7OLO20vN46rLu9AivV+ON9YZ+K8r4YJxnE5Q2urb7sC2cQKZCTsBuM4UC7o1hhaBPNkfIRxXNugW2PYUYLNCdX1xnHV5R1IsRrHpVGzOmAcB+M4ECIEwnuhCKGLy43jQLk02q18mKgk/rIUCB34nGJNMI5rmka7daJDL4m9po3j5JX0QQwjVxvHVZeYYw7ydkjOm231W54Pre6ogUDeDs3/lo225NtptFv7jPfaahptybfTaLcKc/fUHOQkSLGK3SlSrMNQQ763hECK3SkEUgJoyVeCbs0FWvKVtNit4h4oQ753RYpV7E6RYh2DYg7yWGht9W1SINeAlnwl6NZcoCVfCbo1F0ixit0pUqynwGLFKnYKgWRm6YulNxjgi9UQDXdrakGv8cWajC+W2aCBL1ZLtNqtIxU3Uw4xkRhfrNH4YpkNCvhiIcV6Pz0ZhFnJFLVWDHyx6GIDfLF+Cq2tvq0KRNwguPF8EKsHriXgBAJfrLZotFuJ9xV7WR/43Dwn2hcIfLFaotFupUx+dEbjL2s9cGPxsxpB4ItV006RYh2mJz0jbEzYV2s9MOf+7s9B4IsFX6z300vnktRiXnUdxHs5OIvF5E/4YjVBu93KGEu+pq6DDIsNGvhitUSj3Wquf8S8G7Qv1n+J9seyRlmmAHyxMAd5O2RSh3sZT7mt7qiBQN4OmahMsMoQCCiXRruV6PWHEAjYptFulddA5jSrDIFUl3cgxXo74mPziYwQyM2htdW3ZYHIiyG53xK8jEa7VV8CYYnVvGdotCXfDro1F0ixit0pUqxjwDjuudDa6tukQGhpxnGgXNCtuUBLvpEPujUXSLGK3emJ0M9H/yCf87utFyZWGvaU5nzOFARS7E73h2pdzD/Vb40KRN4JNZJhIj8qBMvdX4IdMMJfPkIgDSpE3ukxiZNZU/R1Y4Olf3oOchIYx72F9YDhfmrIp0GFyFs7xLeoq4nxibN+cdZBTpHfOK7wvCNnaBn1TQ8Y4pePD+laFEhn/BpiR7U1jjN+cdZBTgLjuHoFshBGZMBYQayKGoLOh3gv0qxvvljenbZWIBcYx4FrSWRSsQEDAhGI6Yc8gzXG5yARgRgHORjHVcRmJrWHrtFuZWSS19DH1FmslUCsg9wlxnG15UmFp1g7pt5fdWFpUiDzyCFtq0lqMe9SIM5BDsZxv4VeudMDU+/vwjC0KRBN6gEIS4EwX0kXGMfh65ev+cDWPz+f5c+dAwaM4w4SCiSYdsA4rhQuGTBWoFtjhAJZPCQhv3FcbXlSESmWOcT9n3tHjANAICuMT5z5yQmM47KFZr+YkXnAWAGB5AIteS2Lc1MXDRgr0K25QEteQ3yqcbUuLOjWXCDFyhp5+mJG3vpCINmAQLJEnj03dVF9IZBsoCV/4sQ6wpyZVBJ0ay7Qkmc4vY7wrgqiW3OBFOtIZI51hHfUFwLJBgSyg6zrCG+oLwSSD7TkBvcsC7kCdGsu0JIRzk69H9eFBd2aC6RYjl9u4UsK45mPCoHkAgK5eOoNgdRNwy350NT7Fhru1gw0fj9IvVPv/TTYrd/Rflg9JdLa4XLjuLLypO88M/VGilUIxjCup6xjwqIBxnGKHFPvSj6qAwJZYQzjqFLJDcZxhXPvVe/CeG+3/oIQCJNDBDM3ElqBNGMc9+ap935e161ZEAIZpTSYsWi40jiurLzj0ql3WR91BxBIDCUQ8RtXAmnAOO6eAaOIj3oECCTGcgS52DjuUVo4V/sDtXbrtbg5iJTJK43jtGGaPMQXP/dRwGe4+gvGcQncWSwxN7/cOK62c7VF+GLdFAqBxLDXQaS99SuM47Keq4VAWsYYxpkr6dcbx10IztX+SJndWiNltSSm3pkoq1trpowU655lUkixwGEeFcgldyhdUWEIpFkeacmml0ndAgSSiztbElPv24BAcnFHipV16v1IyoIUq1muFMglU28IZA8QSC4uaMmbp94gAgSSi4wtial3OUAgufg9xbp56o0Uaw8QSC7Ot+RDV70hkD1AILk43JI4V1sDEEgudrcklknVBATyC4dW8/56rrYgw1qkWEBg1rv/ZBx37bna2g642uoLgWwwyDumWEdPGcfhXO0rgECSKP+SYerYEeM4TL3fBQSSRLk29LqFBuNrkjCO+6hy8QHjZedqkWKBzowgesAYTUaVMI77fMj5AaO6owYCAZ2eg1AhkHlWbuziEsZxWiBXDxjgbiCQDQZKBuUf1zGTWcWN4z5CILtHDFAPEMgXhL27YDSuJjHjuM9XgWwalP07b27273FztTfXF8Zxm4xi2jENvBfSsAKJGceJrCoukF07qi4xxxwEdCLD4mKOzunA5xTLuvOujeM+qxHksTqDzEAgG8xzkInpK+mD9Y1bG8c5gTxUUXAZEEguyvDFKj20tvpCINmAQIrdKQRSAmjJV4JuzQVa8pWgW3OBFKvYnSLFKgEIpNidQiAlgJZ8JejWXKAlXwm6NRdIsYrdKVKsEoBAit0pBFICaMlXgm7NBVrylaBbc4EUq9idIsV6ioqek15IaG31hUC26K1hHKfUbT5mHAeqBt2aRpg2aMO4gVC7eadxHHgF6NY0UhsDnb+N1Nya/tU47gzV5R1IsUDnCYQT5gSSMI6DQMrdKQRyDb1IsYR79awDK5CEcdxPLdlQaG31hUC2GAghg3Id9QQSNY6rsP8gkItDX88kXN3pwMSkYzGCLI3jOteSZPeG/SV/CG2gOrdUHKxQ5tUj+Q9RaDHEjOMEBLyS24+7ajACkSet/LNYa+M4ABpEPDiHT2rAcAKJGMcB0CK+YZwnkLVxHAAAAAAAAADcDh2/l0FobfX9JbRl3KPTe319hKvLierB6voUOt8MtYvpd4eaQp1df++H+svzY7G6orEK7wuNVngr1HzUSX6k4dBOXaFkfVOHrnlto77Jo17tbavCEMweJv3odD7Z427Si7fsUhT7XNx4qFtMvzvUK6TX3weh3vL8FaaiiQrvCU1UeCPUfNTJru/cvVNTaKO+4/KGg0XoRn1ToWZvGxVOhYKAUT86fWSd7r+p12d9zQlhlhgFTKhbTL871BUy6++DUPeOkb3qiiYqvCc0UeGNUPNR3TCxe6emULy+9hH2W6Hx+m6Gmr3FK7wZCtaovtX9R5i+9G6O7mnrGkkgkL2hrpBdfx+Ebh1wrqLRCu8JTVT4S2gokL2RfntE6hs+wj4RGq/vVqj9qPEKfwsFIVw1o+o/RsyqFNWM7pmGqVC7mH53qCtk1t+HofYd44QCOR6aqPCXUPFRyTCp2cDuSL89IvUNHmGfCo3XdyvUftR4hb+FggCzCEVPYCfRknK7Osq3LrKr0EHPA3eH2kJ2/f0i1LxjnFAgJ0ITFd4MlR91kg95HA5E+u0Rq697hP1GaLy+G6H2oyYq/CUU+HCzqlf1n8iK/H97qWmEC9WL6Q+EmkL/Y9ffh6H2HeOEAjkemqjwZih3zz4VEbsj1yPIopW8R9inQlMNnA71WylW4S+hwIPZf33q5JBoPn/5r792KxpqC+8PXa2/D0OD1ccRAoEcD01UeDOUeQMEOxLpvxZv4C7VUKbQ/yYbOBlqWyde4W+hwOHdeKtODlHxK3WzzvR/Y25yat3sB0K9QrKfwtBDAjkemqjwVqhpJXXDADmyU++jxhpYP8I+WlldKNXAW6Fmb/EKfwsFDq+V1MkS+Xcvz5PLWSdJzlpNqFlMfyDUKyQFsgj1l+dHCARyIjRR4Y1Q/VE5kSl9f2SnfntE6qsfYb8ZmqjvVqjeW6rCX0KBxV7vnvRPao5afaWVJ49yG2oW0+8PDa7kCoEsQpfPc/eZtiu8JzRR4XSo/ahsUmUP7NQUSjWwfoT9VmiqgTdCp+0Kb+4VAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACQ/D++DGvDSfp+nQAAAABJRU5ErkJggg=="}}]);