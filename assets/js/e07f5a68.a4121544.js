"use strict";(self.webpackChunkstakeworld=self.webpackChunkstakeworld||[]).push([[683],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),m=l(n),h=r,u=m["".concat(s,".").concat(h)]||m[h]||p[h]||o;return n?a.createElement(u,i(i({ref:t},c),{},{components:n})):a.createElement(u,i({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var d={};for(var s in t)hasOwnProperty.call(t,s)&&(d[s]=t[s]);d.originalType=e,d.mdxType="string"==typeof e?e:r,i[1]=d;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},979:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>d,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));const o={id:"hardware",title:"Hardware benchmarks",description:"Hardware benchmarks for different nodes",slug:"/hardware",sidebar_position:6},i=void 0,d={unversionedId:"validate/hardware",id:"validate/hardware",title:"Hardware benchmarks",description:"Hardware benchmarks for different nodes",source:"@site/docs/validate/hardware.mdx",sourceDirName:"validate",slug:"/hardware",permalink:"/docs/hardware",draft:!1,editUrl:"https://github.com/stakeworld/website/edit/master/docs/validate/hardware.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{id:"hardware",title:"Hardware benchmarks",description:"Hardware benchmarks for different nodes",slug:"/hardware",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Validator error logs",permalink:"/docs/logs"},next:{title:"Monitorin a validator node",permalink:"/docs/monitor"}},s={},l=[{value:"Contabo VPS S SSD",id:"contabo-vps-s-ssd",level:2},{value:"Contabo VPS M SSD",id:"contabo-vps-m-ssd",level:2},{value:"Contabo VPS M NVMe",id:"contabo-vps-m-nvme",level:2},{value:"HETZNER AX41-NVMe",id:"hetzner-ax41-nvme",level:2},{value:"OVH-London RISE-2",id:"ovh-london-rise-2",level:2},{value:"OVH-London ADVANCE-3",id:"ovh-london-advance-3",level:2}],c={toc:l};function p(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"This page contains information about hardware for running a polkadot/kusama validator node"))),(0,r.kt)("p",null,"It is possible to run the polkadot binary on modest hardware. The problem is that when you get in the active set you need plenty of network and cpu resources for validating, especially when para validating."),(0,r.kt)("p",null,"Polkadot has a benchmark function witch gives you an indication of performance against a \u201creference\u201d validator. "),(0,r.kt)("p",null,"I\u2019ve used the command ",(0,r.kt)("inlineCode",{parentName:"p"},"polkadot benchmark machine")," on Ubuntu 20.04 LTS"),(0,r.kt)("h2",{id:"contabo-vps-s-ssd"},"Contabo VPS S SSD"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Contabo",src:n(4659).Z,width:"1120",height:"352"})),(0,r.kt)("h2",{id:"contabo-vps-m-ssd"},"Contabo VPS M SSD"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Contabo",src:n(5780).Z,width:"1128",height:"354"})),(0,r.kt)("h2",{id:"contabo-vps-m-nvme"},"Contabo VPS M NVMe"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Contabo",src:n(9444).Z,width:"1120",height:"350"})),(0,r.kt)("h2",{id:"hetzner-ax41-nvme"},"HETZNER AX41-NVMe"),(0,r.kt)("p",null,"AMD Ryzen\u2122 5 3600, 64 GB DDR4, 2 x 512 GB NVMe SSD (software-RAID 1)\n",(0,r.kt)("img",{alt:"Hetzner",src:n(5242).Z,width:"1126",height:"352"})),(0,r.kt)("h2",{id:"ovh-london-rise-2"},"OVH-London RISE-2"),(0,r.kt)("p",null,"CPU Intel Xeon-D 2141I \u2013 8c/16t \u2013 2.2 GHz/3 GHz,RAM 64 GB ECC 2133 MHz Data disks 2\xd7512 GB SSD NVMe (Soft RAID)\n",(0,r.kt)("img",{alt:"OVH",src:n(4050).Z,width:"1130",height:"582"})),(0,r.kt)("h2",{id:"ovh-london-advance-3"},"OVH-London ADVANCE-3"),(0,r.kt)("p",null,"CPU: AMD Ryzen 9 5900X \u2013 12c/24t \u2013 3.7 GHz/4.8 GHz RAM: 64 GB ECC 3200 MHz Data disks: 2\xd7960 GB SSD NVMe (Soft RAID)\n",(0,r.kt)("img",{alt:"OVH",src:n(1358).Z,width:"756",height:"386"})))}p.isMDXComponent=!0},4659:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/contabo1-c347cea7404c9d03df5fafccd1892653.png"},5780:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/contabo2-e2be6c5d535108005d9f4793087480cb.png"},9444:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/contabo3-f5ca9dcc621e211412da6fbd5f7929e9.png"},5242:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/hetzner1-afd1e2518b460322d02cd9500dd73bfc.png"},4050:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/ovh1-98f27892e9f1b3e2fb876dce083f5642.png"},1358:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/ovh2-29b5e5e5ac5a4697e6e57ad1714d5026.png"}}]);