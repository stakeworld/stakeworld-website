"use strict";(self.webpackChunkstakeworld=self.webpackChunkstakeworld||[]).push([[35],{3905:(e,t,o)=>{o.d(t,{Zo:()=>l,kt:()=>h});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var d=n.createContext({}),p=function(e){var t=n.useContext(d),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},l=function(e){var t=p(e.components);return n.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,d=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(o),h=r,k=u["".concat(d,".").concat(h)]||u[h]||c[h]||a;return o?n.createElement(k,i(i({ref:t},l),{},{components:o})):n.createElement(k,i({ref:t},l))}));function h(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=u;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<a;p++)i[p]=o[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}u.displayName="MDXCreateElement"},4858:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var n=o(3117),r=(o(7294),o(3905));const a={id:"bootnode",title:"Bootnodes",description:"Setting up a bootnode",slug:"/bootnode",sidebar_position:4,keywords:["bootnode","bootnode server","wss","ws","polkadot.js","light client","polkadot","kusama","westend"]},i=void 0,s={unversionedId:"bootnode",id:"bootnode",title:"Bootnodes",description:"Setting up a bootnode",source:"@site/docs/bootnodes.mdx",sourceDirName:".",slug:"/bootnode",permalink:"/docs/bootnode",draft:!1,editUrl:"https://github.com/stakeworld/website/edit/master/docs/bootnodes.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"bootnode",title:"Bootnodes",description:"Setting up a bootnode",slug:"/bootnode",sidebar_position:4,keywords:["bootnode","bootnode server","wss","ws","polkadot.js","light client","polkadot","kusama","westend"]},sidebar:"tutorialSidebar",previous:{title:"Snapshot",permalink:"/docs/snapshot"},next:{title:"Database sizes",permalink:"/docs/dbsize"}},d={},p=[{value:"Accessing your own bootnode",id:"accessing-your-own-bootnode",level:2},{value:"Your network key",id:"your-network-key",level:2},{value:"Running the bootnode",id:"running-the-bootnode",level:2},{value:"Testing the bootnode connection",id:"testing-the-bootnode-connection",level:2}],l={toc:p};function c(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},'When you first start a node it has to find a way to find other nodes in the network. For that purpose you need "bootnodes". After the first bootnode is found it can use the connections of that node to continue expanding its network and be able to play its role in the network, like participate as a validator.')),(0,r.kt)("h2",{id:"accessing-your-own-bootnode"},"Accessing your own bootnode"),(0,r.kt)("p",null,"The consensus is that bootnodes have to be accessible in three ways:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"p2p"),": the p2p port, which can be set by ",(0,r.kt)("inlineCode",{parentName:"li"},"--listen-addr /ip4/0.0.0.0/tcp/<port>"),". This port is not automatically set on a non validator node (for example an archive rpc node)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"p2p/ws"),": the websocket version, which can be set by ",(0,r.kt)("inlineCode",{parentName:"li"},"--listen-addr /ip4/0.0.0.0/tcp/<port>/ws"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"p2p/wss"),": the ",(0,r.kt)("em",{parentName:"li"},"secure")," websocket version. A ssl secured connection to the p2p/ws port which will have to be achieved by a proxy since the node itself has no way to include certificates. It is needed for light clients. See ",(0,r.kt)("a",{parentName:"li",href:"https://wiki.polkadot.network/docs/maintain-wss#secure-the-ws-port"},"here")," for info about setting this up.")),(0,r.kt)("h2",{id:"your-network-key"},"Your network key"),(0,r.kt)("p",null,"When you startup a node it creates its node-key in the ",(0,r.kt)("inlineCode",{parentName:"p"},"chains/<chain>/network/secret_ed25519")," file. You can also create a node-key by ",(0,r.kt)("inlineCode",{parentName:"p"},"polkadot key generate-node-key")," and use that node-key in the startup command line."),(0,r.kt)("p",null,"It is essential you backup the node-key, especially if it gets included in the polkadot binary because it gets hardcoded in the binary and needs to be recompiled to change."),(0,r.kt)("h2",{id:"running-the-bootnode"},"Running the bootnode"),(0,r.kt)("p",null,"Say we are running a polkadot node with ",(0,r.kt)("inlineCode",{parentName:"p"},"polkadot --chain polkadot --name dot-bootnode --listen-addr /ip4/0.0.0.0/tcp/30310 --listen-addr /ip4/0.0.0.0/tcp/30311/ws")," then we would have the p2p on port 30310 and p2p/ws on port 30311. For the p2p/wss port we need to setup a proxy, a dns name and a corresponding certificate. These concepts and example setups are described ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.polkadot.network/docs/maintain-wss#secure-the-ws-port"},"here"),". The following example is for the popular nginx server:"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"/etc/nginx/sites-enabled/dot-bootnode")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'server {\n       listen       30312 ssl http2 default_server;\n       server_name  dot-bootnode.stakeworld.io;\n       root         /var/www/html;\n\n       ssl_certificate "<your_cert";\n       ssl_certificate_key "<your_key>";\n\n       location / {\n         proxy_buffers 16 4k;\n         proxy_buffer_size 2k;\n         proxy_pass http://localhost:30311;\n         proxy_http_version 1.1;\n         proxy_set_header Upgrade $http_upgrade;\n         proxy_set_header Connection "Upgrade";\n         proxy_set_header Host $host;\n   }\n\n} \n')),(0,r.kt)("h2",{id:"testing-the-bootnode-connection"},"Testing the bootnode connection"),(0,r.kt)("p",null,"If we have above node running with dns name ",(0,r.kt)("inlineCode",{parentName:"p"},"dot-bootnode.stakeworld.io"),", proxied with a valid certificate and node-id ",(0,r.kt)("inlineCode",{parentName:"p"},"12D3KooWAb5MyC1UJiEQJk4Hg4B2Vi3AJdqSUhTGYUqSnEqCFMFg")," then the following commands should give you a: syncing ",(0,r.kt)("inlineCode",{parentName:"p"},"1 peers"),"."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You can add ",(0,r.kt)("inlineCode",{parentName:"p"},"-lsub-libp2p=trace")," on the end to get libp2p trace logging for debugging purposes.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"p2p"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'polkadot --chain polkadot --base-path /tmp/node --name "Bootnode testnode" --reserved-only --reserved-nodes "/dns/dot-bootnode.stakeworld.io/tcp/30310/p2p/12D3KooWAb5MyC1UJiEQJk4Hg4B2Vi3AJdqSUhTGYUqSnEqCFMFg" --no-hardware-benchmarks \n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"ws"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'polkadot --chain polkadot --base-path /tmp/node --name "Bootnode testnode" --reserved-only --reserved-nodes "/dns/dot-bootnode.stakeworld.io/tcp/30311/ws/p2p/12D3KooWAb5MyC1UJiEQJk4Hg4B2Vi3AJdqSUhTGYUqSnEqCFMFg" --no-hardware-benchmarks \n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"wss"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'polkadot --chain polkadot --base-path /tmp/node --name "Bootnode testnode" --reserved-only --reserved-nodes "/dns/dot-bootnode.stakeworld.io/tcp/30312/wss/p2p/12D3KooWAb5MyC1UJiEQJk4Hg4B2Vi3AJdqSUhTGYUqSnEqCFMFg" --no-hardware-benchmarks \n')))}c.isMDXComponent=!0}}]);