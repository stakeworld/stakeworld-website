"use strict";(self.webpackChunkstakeworld=self.webpackChunkstakeworld||[]).push([[669],{3905:(t,a,e)=>{e.d(a,{Zo:()=>p,kt:()=>k});var n=e(7294);function r(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}function l(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,n)}return e}function o(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?l(Object(e),!0).forEach((function(a){r(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):l(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function s(t,a){if(null==t)return{};var e,n,r=function(t,a){if(null==t)return{};var e,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)e=l[n],a.indexOf(e)>=0||(r[e]=t[e]);return r}(t,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)e=l[n],a.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}var i=n.createContext({}),d=function(t){var a=n.useContext(i),e=a;return t&&(e="function"==typeof t?t(a):o(o({},a),t)),e},p=function(t){var a=d(t.components);return n.createElement(i.Provider,{value:a},t.children)},c={inlineCode:"code",wrapper:function(t){var a=t.children;return n.createElement(n.Fragment,{},a)}},A=n.forwardRef((function(t,a){var e=t.components,r=t.mdxType,l=t.originalType,i=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),A=d(e),k=r,m=A["".concat(i,".").concat(k)]||A[k]||c[k]||l;return e?n.createElement(m,o(o({ref:a},p),{},{components:e})):n.createElement(m,o({ref:a},p))}));function k(t,a){var e=arguments,r=a&&a.mdxType;if("string"==typeof t||r){var l=e.length,o=new Array(l);o[0]=A;var s={};for(var i in a)hasOwnProperty.call(a,i)&&(s[i]=a[i]);s.originalType=t,s.mdxType="string"==typeof t?t:r,o[1]=s;for(var d=2;d<l;d++)o[d]=e[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,e)}A.displayName="MDXCreateElement"},3025:(t,a,e)=>{e.r(a),e.d(a,{assets:()=>i,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var n=e(3117),r=(e(7294),e(3905));const l={id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",slug:"/snapshot",sidebar_position:3,keywords:["validator setup","validator","validate","snapshot","rocksdb","paritydb","pruning","polkadot","kusama"]},o=void 0,s={unversionedId:"snapshot",id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",source:"@site/docs/snapshot.mdx",sourceDirName:".",slug:"/snapshot",permalink:"/docs/snapshot",draft:!1,editUrl:"https://github.com/stakeworld/website/edit/master/docs/snapshot.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",slug:"/snapshot",sidebar_position:3,keywords:["validator setup","validator","validate","snapshot","rocksdb","paritydb","pruning","polkadot","kusama"]},sidebar:"tutorialSidebar",previous:{title:"Pool",permalink:"/docs/pool"},next:{title:"RPC node",permalink:"/docs/rpc"}},i={},d=[{value:"Automatic install",id:"automatic-install",level:2},{value:"Install the database directly",id:"install-the-database-directly",level:2},{value:"Paritydb kusama",id:"paritydb-kusama",level:3},{value:"Paritydb polkadot",id:"paritydb-polkadot",level:3},{value:"Rocksdb kusama",id:"rocksdb-kusama",level:3},{value:"Rocksdb polkadot",id:"rocksdb-polkadot",level:3}],p={toc:d};function c(t){let{components:a,...l}=t;return(0,r.kt)("wrapper",(0,n.Z)({},p,l,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Snapshots are compressed backups of the database directory of a polkadot or kusama node. If you start a node for the first time it will start building the database from scratch, which will take a few days, depending on network speed. If you download an up to date database snapshot your node will be up and running quicker; under an hour or a few hours, depending on network speed. "),(0,r.kt)("p",{parentName:"admonition"},"In principle building from scratch is the safest and cleanest; if there is an error in the snapshot database, this will propagate to the nodes who download the database. Also the database size increases with extended usage. STAKEWORLD checks for errors and periodically rebuilds its databases to ensure error free databases with minimum disk usage."),(0,r.kt)("p",{parentName:"admonition"},"The snapshots are available for kusama ",(0,r.kt)("inlineCode",{parentName:"p"},"--chain ksmcc3")," and polkadot ",(0,r.kt)("inlineCode",{parentName:"p"},"--chain polkadot")," in the paritydb ",(0,r.kt)("inlineCode",{parentName:"p"},"--database paritydb")," and the rocksdb ",(0,r.kt)("inlineCode",{parentName:"p"},"--database rocksdb")," database format. They are pruned with ",(0,r.kt)("inlineCode",{parentName:"p"},"--pruning 1000"),", which is sufficient for a validator node.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},"Chain"),(0,r.kt)("th",{parentName:"tr",align:null},"Database"),(0,r.kt)("th",{parentName:"tr",align:null},"Format"),(0,r.kt)("th",{parentName:"tr",align:null},"Blockheight"),(0,r.kt)("th",{parentName:"tr",align:null},"Size"),(0,r.kt)("th",{parentName:"tr",align:null},"Full"),(0,r.kt)("th",{parentName:"tr",align:null},"Creation date"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://snapshot.stakeworld.nl/rocksdb-ksmcc3.lz4"},"direct link")),(0,r.kt)("td",{parentName:"tr",align:null},"ksmcc3"),(0,r.kt)("td",{parentName:"tr",align:null},"rocksdb"),(0,r.kt)("td",{parentName:"tr",align:null},"pruned"),(0,r.kt)("td",{parentName:"tr",align:null},"15216846"),(0,r.kt)("td",{parentName:"tr",align:null},"154G"),(0,r.kt)("td",{parentName:"tr",align:null},"161G"),(0,r.kt)("td",{parentName:"tr",align:null},"Mon 07 Nov @ 02:22")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://snapshot.stakeworld.nl/paritydb-ksmcc3.lz4"},"direct link")),(0,r.kt)("td",{parentName:"tr",align:null},"ksmcc3"),(0,r.kt)("td",{parentName:"tr",align:null},"paritydb"),(0,r.kt)("td",{parentName:"tr",align:null},"pruned"),(0,r.kt)("td",{parentName:"tr",align:null},"15216960"),(0,r.kt)("td",{parentName:"tr",align:null},"154G"),(0,r.kt)("td",{parentName:"tr",align:null},"160G"),(0,r.kt)("td",{parentName:"tr",align:null},"Mon 07 Nov @ 02:33")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://snapshot.stakeworld.nl/rocksdb-polkadot.lz4"},"direct link")),(0,r.kt)("td",{parentName:"tr",align:null},"polkadot"),(0,r.kt)("td",{parentName:"tr",align:null},"rocksdb"),(0,r.kt)("td",{parentName:"tr",align:null},"pruned"),(0,r.kt)("td",{parentName:"tr",align:null},"12814220"),(0,r.kt)("td",{parentName:"tr",align:null},"110G"),(0,r.kt)("td",{parentName:"tr",align:null},"114G"),(0,r.kt)("td",{parentName:"tr",align:null},"Mon 07 Nov @ 02:41")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://snapshot.stakeworld.nl/paritydb-polkadot.lz4"},"direct link")),(0,r.kt)("td",{parentName:"tr",align:null},"polkadot"),(0,r.kt)("td",{parentName:"tr",align:null},"paritydb"),(0,r.kt)("td",{parentName:"tr",align:null},"pruned"),(0,r.kt)("td",{parentName:"tr",align:null},"12814307"),(0,r.kt)("td",{parentName:"tr",align:null},"110G"),(0,r.kt)("td",{parentName:"tr",align:null},"114G"),(0,r.kt)("td",{parentName:"tr",align:null},"Mon 07 Nov @ 02:49")))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"snapsize",src:e(2307).Z,width:"800",height:"300"})),(0,r.kt)("h2",{id:"automatic-install"},"Automatic install"),(0,r.kt)("p",null,"The following script can restore a snapshot for a quickstart. If you want you can first review it on ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/stakeworld/stakeworld-scripts/blob/master/node-install.sh"},"github"),'. You can choose "snapinstall" for a snapshot restore or "nodeinstall" to install a complete node. The script will ask some questions and create an install or restore script which you can review before executing.'),(0,r.kt)("p",null,"The script is for ubuntu/debian flavoured servers."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o- -L https://raw.githubusercontent.com/stakeworld/stakeworld-scripts/master/node-install.sh | bash\n")),(0,r.kt)("h2",{id:"install-the-database-directly"},"Install the database directly"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},'The default binary/systemctl from the apt repository will run as user "polkadot". If you install as root you will get an error "failed to create a test file: Permission denied". You can solve this by running ',(0,r.kt)("inlineCode",{parentName:"p"},"chown -R polkadot:polkadot <dbdir>"))),(0,r.kt)("p",null,"Install to ",(0,r.kt)("inlineCode",{parentName:"p"},"/root/.local/share/polkadot/chains/<chain>")," or change to your target directory."),(0,r.kt)("h3",{id:"paritydb-kusama"},"Paritydb kusama"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o - -L http://snapshot.stakeworld.nl/paritydb-ksmcc3.lz4 | lz4 -c -d - | tar -x -C /root/.local/share/polkadot/chains/ksmcc3\n")),(0,r.kt)("h3",{id:"paritydb-polkadot"},"Paritydb polkadot"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o - -L http://snapshot.stakeworld.nl/paritydb-polkadot.lz4 | lz4 -c -d - | tar -x -C /root/.local/share/polkadot/chains/polkadot\n")),(0,r.kt)("h3",{id:"rocksdb-kusama"},"Rocksdb kusama"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o - -L http://snapshot.stakeworld.nl/rocksdb-ksmcc3.lz4 | lz4 -c -d - | tar -x -C /root/.local/share/polkadot/chains/ksmcc3\n")),(0,r.kt)("h3",{id:"rocksdb-polkadot"},"Rocksdb polkadot"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o - -L http://snapshot.stakeworld.nl/rocksdb-polkadot.lz4 | lz4 -c -d - | tar -x -C /root/.local/share/polkadot/chains/polkadot\n")))}c.isMDXComponent=!0},2307:(t,a,e)=>{e.d(a,{Z:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAyAAAAEsCAMAAAAM8ycIAAABR1BMVEX///8AAACgoKD/AAAAwAAAgP/AAP8A7u7AQADIyABBaeH/wCAAgEDAgP8wYICLAABAgAD/gP9//9SlKir//wBA4NAAAAAaGhozMzNNTU1mZmZ/f3+ZmZmzs7PAwMDMzMzl5eX////wMjKQ7pCt2ObwVfDg///u3YL/tsGv7u7/1wAA/wAAZAAA/38iiyIui1cAAP8AAIsZGXAAAIAAAM2HzusA////AP8AztH/FJP/f1DwgID/RQD6gHLplnrw5oy9t2u4hgv19dyggCD/pQDugu6UANPdoN2QUEBVay+AFACAFBSAQBSAQICAYMCAYP+AgAD/gED/oED/oGD/oHD/wMD//4D//8DNt57w//Cgts3B/8HNwLB8/0Cg/yC+vr4fHx9fX1+/v7+fn58/Pz/f399TU1PDw8OPj48AnnNWtOnmnwAvLy/rPEBfAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAdw0lEQVR4nO2da5akoLKFtafhfHoc+Dr3VteZ/+8jrwAUFRUVZH9rZXeWCUKiOwmECKoKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAxYY18ES3bSnr01Ds0prDt1Ou1WmEc6sDqLguejtDBqeBmOFg2yJahlox0ZFsgfWv9cVQg+3RWRbY5LJCGjW7tV/F+LVsg1RB0HvABBjY/si2Q9l6BsOA777BAeIY2kkDCdQwyhwQi7I92cAUymSWs4XfE2LKa9bLD6fQfFf+sbkfzcdVNCQb+plEHBPooazrqr5p5DpGQf2JSV8vkTq1YP9Tyo0Z8g7YWtXFOadec8dqbc8nsVWWfyPladpvwIqhgdCHFsC2QgY1jw6YkwzDZJ/zm4ncG/cFYM3bMPsLP0k83dDP90de9dW5+VJ12mEqhBPozgbj5Zqnd5E6tGL+fW9ZVnaj09JeojXNKqhqZRnQuRpIT76zj6mvNBUIF20Ml8Gk2BTKKW5LpJEIKrfUH44PVpjZHRn4nmrOpjHRUnpYPBigBfUYnnaV2k7u14uXLv3gldG3cU9J5SSB0LkZjbfHOPc7POBOI1RywsUpBD9K9AunErUbW/mALhL8RyeheEUcmK4oy9iQdeVSn7+wE+rOKEjip58mdWvH7Xv7V6R5HdD32KalqWiBW0WQnMfe4/lozgVjN4REh+CSbPYi0U/QYZDLw5S1Gf9ANT0dGacd37rMxdVTa8SqTTjDaowvxE22nXiR3asXIluKVMLVxBiy6akYg+lxmMM7fzY7zE80EYgpWnQn4PpsCoZ/MsZ4sed2DmD/0T605UvE7su66xQ8sPyrt+MGc2f5MQA8HdGpfcqsHacwPv9WD2Kc0VXN7ELs0+0R0HD0I4JBApHWzMgYRt8aoehDzhzbWzRHBlMvzAzsdmk7bqF7FTaD/MkaPTO1Nbo1BGt8YxDmlqZoZg9DQ3BGIdVyfyG4TjEHKhATSiic0K0+xxum3tBv4r/n0Mn/o50Z0pGOdeorFuN2lbnc6yh/zqrtQJ6DPVCWc1NUiuVMrWU3xFKu2nmI5pzSVFQIZ7HPNBGKO68dhdpvgKVaZkEDEM/7GNw/Cb4ae1cNkOE19Cas7+oNmHujIZP1P7yo5p9DqX1l9lPH0nN4koBycrh7t1NUyuVMr/VRMzoPI6YtqdkqqmhSfngfh55oJhI7T17LbhOZBhDYwDwJeIXwm3ZM3+rz+KrCwwDtcufMeFAg6EPASF4z75wSC1bwAAAAAAAAAAAAAAAAAQDwenAIDIBma2llLxH2pbSn0Q12zFsuqQZmMQ1M7q1HFwlOjkIH1Y9W1cDwAZdIrjzVyheaeOVWn9aA9Idx12QAUhCsQ14fIXtcKgYAiqbWfTsd67q82jUG0LEY7TiYEAopEiqBV8Q5qoRSlECcqAAQCiqSWYQlG8ls1oXL0XyIWIAQCiqR2onKIPoM8hnRUs3EmkBp8kqfvvXN4f6p1gJn4uAIRbmoUbK2huDUzgWyecLu4crImWKUrWY8h4wz0Z0N3yViCJqKAzQsCmbqKsRp5uA0ewqMzD6/aupk+6BkbwwWyU1w5WSMW+vPzRqlXEAI5rQ+lr24Z9796ViAq6Ocowo8LufZsNpM+/T30s2rldqtmLZAfxbOlbvOXWEvBb20ZMIki3+mA9yYwf9/W0y9wK/6io5S9UmegVR5WtEvxQ67PR4H2dUT817lwEf6UkzVCoT8W95caWSCdfEBKAtEB763A/P1kxQ+dmJCmozo7h9v+FDmfv+mlsS+CwdL5TKB9FRH/dTIZzWXNpIgfl9uLjCsQpQ8SyDKGvgyM7wTTp7DkjP/LTSwTtZJCXzajHYHfDbRvwlq+SQp1+DI/Xm4vdvWy/g1HZxGmuTwrBRe2A95TWGV+e5NATNx+aftP9hJFzqe4xayRwZKdKP40BkkiXBhMrPty+sXxrol1RiB1N8r+gASiA967gfm1QOiozM4qtRSQIuebyYe65p/q87mB9qtlzPIXgEDuyrkqj+wEwio1CCGBVDLg/SwwvxKIE5xfm1hssKYgTA8ydFpIJor/Z3oQsMF1eVwitkDUZnI6PL0so7cC81sCmQXn19MonT0GUc9RxS4pHZ0PY5Ay2BTHywJZsBTEHHmHt+IplAxPrwPeW4H5nR5EH7Wyi//IV0m+kVtSTCelAPrOdpHZP8XKzU56wsRaPrDSytDCOCCQdB7zyv9GCk+vA95TrHtnDEJH7exCGL55ED6+0eejePcUEf8VIk0U5naX3y2QMKsqP4F8hkY62uoZdf1Gf+z3SYeJFYXwIUdqJlYxaJ90QTvM36z5pKMlL3NsPP7MKB2XdYH2SefQ8zHzoGzNJx0m1qWcG+JQQlhkDRfIIybWezy8lLcyD8+qYfFm1ScdAjmbc3U87vYe+QskxnJ3uUp2Qb94TvWIQGgTS3qz7pOew09NimwpY1sC2ZlYMZa7j403f/uOQKgAU9KqTzoEcoZjw4553gcqGFsg15e78/2MTepB7IrNO5dOTpjwJZC3r3VXAvGMQNZ90mFiHc15UBw5mFjbVYqz3H3SgZNa/E7z9SjSzJkEeP9adyUQ2pfP3qBvyyf9z3QlTrz+nMwnMp7P+8ZL13dDHMHnmpLeXN+DPul7PV+M5e7GxNKpSSBiflFMy9++zkR9DaqaLcJTPunA4opZ5Z7npgraxBVIhOXuNEgXqcVnWiD8hNPrgZWKWue6Ls64KL5PejnsLyA5drL7Wb+sGzpfUX2M5e4CNzUJhEvhgbXu2ifdjMdH98FBdJ/03AYS57Je7ThSG4OcEAiLsNyd53BTk0CmN12dprdUBYFsEnYDHSw0uUH63teJsty9UgoYlz1I1Qxtm6a/bQUTa5XQ39cTJ45XyVWiC+Tycne1H4dJLQQyyA9E55HgWvcKAlnhJnHIU8ep4iaRH/PK/y4td6/mqfm/HVPS4H8nstZ9BkwsDzHFkb6J9T4pB4uGQFyiPrDyFgqBzBj5wDxZcmrJu7nNqpqVEvFka2R0WRvxcCtZMmrJW3lGHLKkyCf0cfNl5TaR3y463hs8v+r9EDCxQsQRs9DsTCzPevUwgdBi9q0A7xBI2lnDeo64AkkqNu8+nvXqYQJp3akQf4D3FAWCpSaa5wwrp9D7zq05dFn/TWx8bJbjUlQSLRC+Cp4WsdNydZVKLGa3zyDXzL8X4V35pHeDVQFn+wMEbSDUTbqijXtv4cQE8k+xmsAIhKKzq5eIzE6L2PVEH6WarzYRU+mvRXjXQRvEfKWuQGccCeMHbUjHTjqW1fQRwV1H1PomZmKFCYSbWCYyohTIaO5esSmmXCpiUg0eE+u9CO86aINYS9Z1emUZUx8jaIPIumFTbdlV3xHIv3B0FlqvTtHZlUBoNYnQgl5saFJ5Ary/G+G91vP95i8SyA1BG3LjpDhuqMf9ZUQVCFNvKDq7FIiOzK4Wsevl6iaV24PIn+hXI7zLwHHTWEOooRHGHi19Lzpog39+/PCeaNEqczu3CMRsECsEIiOz0yJ2twfpnR5EnEGYTK9GeJcCEboQnlqW18odQRsyMbG2u4ywu7VsE4upN/MxiBhj0yL23TFIL1O+GOFdCkRGZ5BPF+ghQKFBG2LZVN8RyJK5HhaY6Qt67qOfZPH177SI3XmKVTdV5Qvw/mqEdzMGoUEQRca6IWhD4q+dIcd7dbu97GNBGw4IZDEPwp8/0SJ2Wq6uU6nF7G6A9zcjvIvyRb829SAzgRQVtCEw6OF7tbudmBOF36GWoxrVMbHJxBrNk7j4QRvSNLF2Oo5Ia9avZE3MxCoFCtrQqy5MLAGweqgCgjZsK+PCLzcEUiyfack7Oo57SM7EOk6s5e4JLlSc8wmB5CMOTm4CibTcfSXA+zLC+2cEkoSJdWQ8fr7Uok2sSMvdVwK8LyO8QyCxsh4dckAgp4i23J2fwY3wziP/TKn++1yA98PkamLlZVU5PFG9Y5f193fr02jL3cVsohPhXaV6MMD7YXIUSMbiEESton+X2iOX9Vew/nmk5e6WiUUR3rWMngvwfpjcTKwr4kjExAoWyG6pfxfoT6IKJNJydzNIpwjvWiDPBXg/TEYCuTw//imBLMURJpDfUChHpOXuEjfCuxbIQwHeQ8lwqcm2MjIwq2zOVteviecEcnG5O2cW4Z1GKo8EeJcut7I7kw4h3/BJz33IseBMnQPEcZuJxdSbi8vdObMI7ySQBwK8a590qtUnfNKjiiNnE2tVEj8/5nWzQK4ud68WEd6ZTvVAgHftk06dRs4+6eIWit5z5CqQDWG4nBNI4GNezrXl7hw3wruYS2HyGTH/9OYA71sCyccnfUcXmZpVNkfr79GGv1nOCiQBHpk6lw5TrYqLlaNP+r4ychcHJ/A7rHQcW+QqkIcCvKsxyJinT3pgx/HK7MvjJtYJcWQskKcCvJteQm/ynotPeqA4Ipf6RM4TAjkpjp+sTaxHMALJyCd9b/qP82b9bnhxgax8dl4cVjsd80kvCBl6lL9r8vBJD7nob9bvJsyXMiKo/D3H6njcaSH9MkAgPmTYHzEGaZL3Sd+/7g+Eyb0/57aJ5e0wgjqOv0tR2EAgC7RPejfo5flp+qSvBo2e/yRGLfVi1kcF4pvhWLTQDhBILJ5syZDhxoPVeY0Ngey2T2ALQSCxeKolA658EeLg+AUSNtwIBAKJxRMm1v51P3DpP2Fi6a975DnVoVIhkFjcLZDYV/4LAqkcgUT9+dBAILG4syWji+Mr0Pe+rYUgkFjc1JIYj2+hHtTd2EIQSCxuMLG2r/nOU9zTpd6aNbqJFdRzXCgVAolFZIEE/iS+cpdnIBB3+g8CeYmblpoEiqN4nmghCMRDoxcrjtxpkTYo0dzpk572hhyJ8UQLFSqQke+jO/iDAGuf9Iovu2KV2ahdcZtP+k7Hkc6CqkRMrHBxwMQ6xsi4m249DN5wQdonnbv9cq9e6SLV6sWK8X3SdxdVbYzFIZC9FrpYapECaVnfs6HhMVL8CaRAxrrjApHL3SlySlyf9L1eI77N8CGeaKEiBcK3ARWxtEbmTyAFMt3+pgfRHUc8n3TMcFzliTYqUiC1+48ngYhjIqLUV2oMwkggMXzSAzqOsAtfsolVBc8DwcQ6RpBARBcjBFLxHRZ6pwe54pO+r4zUVxymI5D7s0Ig3gSNDGXCURqQUqku+qQHdBxv+3njZV6l+qTXbEL+s5JA3/hCFj0fpFMg0tM+6bGsKvAkRQpkMPgTuAJp2Uhj9OqwT3rIerrzi6pyM1lyq2+ZAtmG9kmvrDHI0JkE4T7pgcON7O4aCKQEuq6LGYVu3pKwqD5BmQLp+ICiVhv7RMJuSYjjMxQpELGhT1WPI/MuxjqHaskz03/Z2R0wsb6N3HG95qOJeCetz0//ZXfXQCDfhomxR72+1OQEP/WeMmBW5UiRApFfuq/iff1JAOsCibyfN3iSMgWin15F60FWBRKUOzu7AybWtyFHqVhjkB+vQIKzZ3fXQCDfppeDkKqrIz3FmgkEJtV3KFIg1VC3Td8MtK/aWWgm3RbI1cqBlChTIDwMQ12v7gd6PGiDFsi52mRnd8DE+j7juLbOZBG0Qexya6wxf9CGnzT2KEw9a271LVcg68yDNlRqL2j1cfygDSBhcFl9eII2dLSJZ9SgDSBxcFl9OEEbpLNtR35SsYI2GLKzO2BiFY4TtKEXbTSSQGIEbXDJ7q6BQArHCdrg60GuBG0AOVHoZR3bgQn8HztBG2b7pF8K2oBXVq9SgzbwR7VtI/B/7PqkCxm0TB86G7RhnezsDphYX6fedrZ1BdKI4NU09DgYtCGA7O4aCOTrsI3PlkEbFjPpoUEbQPYUelmbiL62ikJb8usUell5cPeNMcgZYGIlWyhMrMMwTbxTQiDJFgqBpABa8pPgssYCLflJSrysfGspTbyzwsRKtlCYWMdgGIO8ljW3+hYpkHtAS34SXNYrYKLw8+CyepAut2PLlNv6vk96BRMr4UJhYkVF+6SzYaw6/i7IJx0CSbdQCCQq2idd7B7CF/HCJ71gCr6sGwt6jVttO8AnvWhKvaw9464w7YpISCB93cEnPWbW3OpbqkAavvG5tXXtDCWCaTDewyc9atbc6luqQPhDqY39QaiX6CaDCj7pJVPoZa2tl+9juvEndcAnvdhXuT7prBPi6Jj/Yy6QseGK4LqAT3q8rLnVt9QepBHBSvq18NVCIGwawndsgE96zKy51bdUgUwKESF9fB9pn3Qxky6ec8EnPUV+f58opdzL2nVd1POV25IPw4Xxq7i/tEIvq57/iL9P+hmyszveMrEmRfw63F9qoQKpBymRiF8fArk356+Xu0stVyBMGFhpCATs4BfHIzZWoZe1VkvaIZDkWRcHxiD3IeZAJjMrDYHkZic9ZmJtigNjkBvhX3sc6h4CeThrcM7FePxK/wGBHEV+7SbmQoJCW/IOtlUhH/NiHuRW1BRId3WjdItCWzI24Z3GI0MQXNZLYKlJ1JwHLapwgcDEOsRu4Lh50IaqcRalIGjDDQLZF8ciKwRyE2w7cJwO2jDooA36gCJ+0IbC2RuPb+S7H1zWBTpoQ6+DNugDEgRtiMm2MrYlAIG8hhW0gc0O3BG0ITc7KZKJdXDIARPrOTq+SLFhbG2tIulhVBIwAkHQhktZeU57Oe4BqwoCeYyubrmvYDvUKwrRIhiHwT1wT9CGcog6/QcT6y5EMJOBP8wa/AmUHkbtf77oQRC04Ti7yjgiDnnCm2pqU+RlFcNs/s92VBPR0dgHBDcEbfhzPrDAn9cDGwS99pXx+3v4vFOWm+tdatAG/qVlvIatqCb2aMN5iiWf7yJoQyCxOg6MQR6DTZ1Hw3uHzR7Ejipnj8zjB234LrGtqvnJ49V0jSIvKx9+iCdYvW8MooI2/F+tgjdQFAedAEEbQog6Hl8t4naKvKxdPYg59H7tKdYZYGIZ9oYbp+7tZaHwB7mLfhDhfOp2N2U4EIjktk4DAnmcjQ0QjlN0S1anp/+uFnk3pV/WeJTdkncPN1YKveOsLmVf1pgUamKpmzRUHFHrCxMrJwoUiBHAmjIWtzAEUiyFteSuTfWA/RO9iH8K61Bhl/VGymhJcU+mIA6qzFX+eaGPy7isd1HWUpMtOYSKI7KJdS30qKuJ31/zgkA20R626n/LOV1Qok/6fncRNv0Xt74XBDIXhotRCASyQLugkys6OadLivNJT8Oe8tfsVDZbG/5vBIFsQD7p2hWdnNMFRfmkP7Cg6mL1jmKJYwsIZBPdXViLeEkgxfik7yrjjDjeMLFo4L1qUUEgB1kKRDunF+CTHrBm5HzP8bxA3HF4IBikb7MQCDmnf9wnPUwXr5pVNtsVmT+jCpYHBLLHXCDGOf27PumJDze8rNdo8xnVqiz0Y17rRLlf1nuYCaSz18V/0Sc95O6J4+cd14eeC2Rx/KBFZeY+JPBJD8AViDPs+JxP+u4d5PmdPl/qjWMQp9MI7TX+LU/qAoH4cAViO6dXn/JJD7iD3q7iJlb1jg7DQ8TByfGy3ox2Qdf/j/UnfdJzFwfHquMBccyHGZvkdlnTJRMTS60I2RHGjjhSMbHM+pYwZaihxpFSIZBYZCCQ3Tso9AFuQgIJR04UHi0VAolF4i0ZcAe9XcXDBArj35WvlvhlzYiEW/KL4uCEiONEp+GQ8GXNjPRMrJDhxjlxpGFiberCEceFUiGQWKQlkIBO40LPkbJAfJ0GBJIA6bRkmDIyNatsgsRxkXQua+6k0ZJBncYHtCGwusHbvlIalzVXkllqcma48coClxvmQe4tFQLxoFxtG1aLGPCJ+6QHWVS/MRdUpSOQ+7NCIAu0L3rDuqrj3h8J+6SHKeMrJtUbQCALtC86kypJ1if9ZMcBDgGB+OAC6UQX0ek1iiSQFHzSw4Ybty2ogolVOlwgvZBGp70/kvFJj9ZrQCAhQCA+pED4u1EKJAGf9KBYChhuxAYC8THvQd72SQ/qNKCNO4BAfJgxiJDJmz7pv7/7m4yf2GP8rVcm+7qrF3zSVzBPsfjY/DWf9ABlXOg5MAYJAQLxQfMgYh/cV3zS95UBk+oJIJAFtC26mkl/1Cc9qf03AAQSj+smVohFNRdHbiZLbvWFQKJxTSBhwkhkQRUEAo5zviX3lQGT6jUgkFica8mDFhV4GggkFodaMpq7eG4mS271hUCiEdySAZ1GeM+R2w2XW30hkGgEtWSYLmBWpQMEEovdlozVaYAngUBisdaS90Wn4uRmsuRWXwjkEnsz6QGdxsWeI7cbLrf6QiBb6LUmp4I2hCkDZlXiQCDrtGK1Ylexw0EbgjoNaCMHIJBVpO9gO1TdkaANZ4Yb2dkdMLGA9phqVAu12qdwJWjDb33eXTy7uwYCAboHUR1Gry0qf9CG6c6vMdz4IhDIOmIMwrhAplG5DtXgD9qwKRAMNzIGAtmgZXUrYzdUnbasvEEbflcFElROdnYHTCyg4aEVOb32KPQFbfALJDg4wFbQhk8FQcitvgjasEnPhx1DOzZcGiQQb9AGVyAwqb4DBLJOy0Y+Rh9ZO04mFkXG8gVtsAXyUm3BLUAgG0xjkKFTM+ktxWzwB22Qj3nPlZOdYY4xCDhMWnsUppo1t/pCINFAS34SXNZYoCU/CS5rLGBiJVsoTKwUgECSLRQCSQG05CfBZY0FWvKT4LLGAiZWsoXCxHqLtzbxzDdrbvWFQLZoyBd9ZMwcDvNJB58Al3Ud7g+ifNHbmtHhAJ908BlwWdep9R5sVc/0qvddn/QzZGd3wMQClSWQse6MQFZ80iGQdAuFQO6Bb1LY8cBYkw5IIH6f9OpSSxaUNbf6QiBbtHXNN4DmAU0sgfh80qsMrx8EcnPWzzPwgHGs7figY9aDzHzSOZstud3MBWVNsEpXshaNjIvV1/9Ru9wqMfh80jk1+CSP33fZoAUiHlrZT7E8PukAlAePyTsOssMwAvH6pANQHrYvuiUQv086AAAAAAAAADwK6/fTIGtu9b2StWTMrmyNmh8Z5XSi3LNNPUIfvXlVoooW0dtZ7TX2vryyNEoTntUk8lTYrtRqqYP4Tu2BrNRKlORwoaahRVaq/UZWlcW6CMFZnQY2Faas5g3YZlC7so0DNfugFm/RUhTacsfFSqQW0TtZrTX2C3RpJk1wVp1opcJ6t7mtUgdapRmaVbeSSXK4ULP9Hc9KtXdb2l+qQFyE4Kw6kUnjZDWNB3bo1a5sfVepJhsa9dRXPxDuVjoQk0gvoneymjX2nlJVaSZNcFadyF9h2m1uq1TTOYVmVa1kJTlcqNn+jmel2jst7S9VvJcXITyr/VWbRamm8UAI8iKoJqs7NfWuhTH4m9IkokX0Ttatu1yXZtKEZrWr5qmwu9vcSqlGIEey8n7CJDlcqDzFILPSUbel/aWK/+RFOJKVJ7LS2FndSoE9RnnHyCbrar0qRbau2S5hhkmkF9G7WWmNvR9jAfA0wVntqnkq7Ow2t1Zq3Q5yOHAo69RKJsnxQmXlO1koHXVaeqVU+2sfyMoTmTROVucN2EMvQlGW7cDbVRyXbb82WqZEtIh+lrVVI2E/2gNYpgnOalfNV2Gz29x6qYPYBaI9llW0EiU5Xihtf9cM1lGnpddKrfRFOJRVCkSncbI6b8AOI3PabmjcH6fVPlwn+n9aRO9mVWvs14qVt6pOE5x12YPMKmztNrdWKp3oQFbVSjrJuULpq9LRnW5AXxt1EY5knfUgTla3JcAmHf1Uy6eR0gowy39XRoGeRfRuVmcJsQdjIk9pwrPan/krvFVn67bo5qVuZu2sDk0My88Vqr8qHd1uJSpVnvtIVl8DO3WBQMKwHG/l7xLjb5kZJa/3AVYicQXdrIeu34GsVqm+Cqvd5tbqLDUlalwfyKpbSSc5Xihtfyez6qo4jbhWqr4IB7LqRDrNLGsFgYRiXVb57Ej83YgH+2KUvPKg3U0kBDLLaq+x90CTAzzNgax21TwVVrvNbZU61mIM0hzIqltJJzlRqN7+rnU6bKcR10rVF+FAVp1Ip5llrSCQQGiWdlD/M33D0wTs+goFayaXC2SWdb7fm40uTac5kFUnWquw2m1uq9RukImDs5q5bJXkRKHuV9VHN6fvqVR1EcKzmkSN/VXpqDkHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACwxv8A9/VVSEZKu2cAAAAASUVORK5CYII="}}]);