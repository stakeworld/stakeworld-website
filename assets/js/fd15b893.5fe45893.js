"use strict";(self.webpackChunkstakeworld=self.webpackChunkstakeworld||[]).push([[961],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>A});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),A=r,h=u["".concat(l,".").concat(A)]||u[A]||d[A]||o;return n?a.createElement(h,s(s({ref:t},c),{},{components:n})):a.createElement(h,s({ref:t},c))}));function A(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1647:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=n(3117),r=(n(7294),n(3905));const o={id:"rpc",title:"RPC server",description:"Setting up a secure RPC server",slug:"/rpc",sidebar_position:4,keywords:["rpc","rpc server","wss","ws","polkadot.js","validator","polkadot","kusama"]},s=void 0,i={unversionedId:"rpc",id:"rpc",title:"RPC server",description:"Setting up a secure RPC server",source:"@site/docs/rpc.mdx",sourceDirName:".",slug:"/rpc",permalink:"/docs/rpc",draft:!1,editUrl:"https://github.com/stakeworld/website/edit/master/docs/rpc.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"rpc",title:"RPC server",description:"Setting up a secure RPC server",slug:"/rpc",sidebar_position:4,keywords:["rpc","rpc server","wss","ws","polkadot.js","validator","polkadot","kusama"]},sidebar:"tutorialSidebar",previous:{title:"Snapshot",permalink:"/docs/snapshot"},next:{title:"Linux tips",permalink:"/docs/tools"}},l={},p=[{value:"Setting up your own secure RPC server",id:"setting-up-your-own-secure-rpc-server",level:2},{value:"Archive node vs pruned node",id:"archive-node-vs-pruned-node",level:3},{value:"Secure the RPC server",id:"secure-the-rpc-server",level:3},{value:"Secure the ws port",id:"secure-the-ws-port",level:3},{value:"Using Apache2 for proxying",id:"using-apache2-for-proxying",level:3},{value:"Enabling ssl through letsencrypt",id:"enabling-ssl-through-letsencrypt",level:4},{value:"Add the proxy to the apache2 config",id:"add-the-proxy-to-the-apache2-config",level:4},{value:"Tweaking connections",id:"tweaking-connections",level:4},{value:"Rate limiting",id:"rate-limiting",level:4},{value:"Load balancing &amp; failover",id:"load-balancing--failover",level:3},{value:"Stress testing",id:"stress-testing",level:3}],c={toc:p};function d(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"RPC servers allow access into the polkadot/kusama and parachains ecosystem. Stakeworld runs two public, multi location, load balanced archive RPC servers: "),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Polkadot: ",(0,r.kt)("a",{parentName:"li",href:"https://polkadot.js.org/apps/?rpc=wss://dot-rpc.stakeworld.io"},"dot-rpc.stakeworld.io")),(0,r.kt)("li",{parentName:"ul"},"Kusama: ",(0,r.kt)("a",{parentName:"li",href:"https://polkadot.js.org/apps/?rpc=wss://ksm-rpc.stakeworld.io"},"ksm-rpc.stakeworld.io"),"  "))),(0,r.kt)("h2",{id:"setting-up-your-own-secure-rpc-server"},"Setting up your own secure RPC server"),(0,r.kt)("p",null,"To access the polkadot, kusama and parachains networks we need some kind of access into the network. This can be achieved by ",(0,r.kt)("a",{parentName:"p",href:"./validate"},"setting up a node")," with a RPC server and allowing access to that RPC server via a secure websocket (wss) port. The default node setup already exposes a non secure ws socket on port 9944 (which can optionally be changed by the ",(0,r.kt)("inlineCode",{parentName:"p"},"--ws-port")," parameter), but for a more usable situation we need a secure websocket which is accesible through a public port."),(0,r.kt)("h3",{id:"archive-node-vs-pruned-node"},"Archive node vs pruned node"),(0,r.kt)("p",null,"A pruned node knows only the recent information about the network and not its full history. Most frequently done actions can be done with a pruned node, for example see account balances, make transfers, setup session keys, staking, etc. An archive node has the full history (database) of the network and can be queried in all kind of ways, give information about transfers since the network started, historical balances, advanced queries about past events, etc. "),(0,r.kt)("p",null,"An archive node requires a lot more ",(0,r.kt)("a",{parentName:"p",href:"./snapshot"},"diskspace"),".  For an archive node you need the options ",(0,r.kt)("inlineCode",{parentName:"p"},"--state-pruning archive --blocks-pruning archive")," in your startup settings.\n",(0,r.kt)("img",{alt:"snapsize",src:n(2307).Z,width:"800",height:"300"})),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Inclusion in the Polkadot.js UI requires an archive node.")),(0,r.kt)("h3",{id:"secure-the-rpc-server"},"Secure the RPC server"),(0,r.kt)("p",null,"Via the node startup settings you can choose ",(0,r.kt)("strong",{parentName:"p"},"what")," to expose with ",(0,r.kt)("strong",{parentName:"p"},"how many")," connections ",(0,r.kt)("strong",{parentName:"p"},"from where")," through your rpc server."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"How many"),": You can set your maximum connections through ",(0,r.kt)("inlineCode",{parentName:"p"},"--ws-max-connections"),", for example ",(0,r.kt)("inlineCode",{parentName:"p"},"--ws-max-connections 100")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"From where"),": by default localhost and the polkadot.js are allowed to access the RPC server, you can change this by setting ",(0,r.kt)("inlineCode",{parentName:"p"},"--rpc-cors"),", to allow access from everywhere you need ",(0,r.kt)("inlineCode",{parentName:"p"},"--rpc-cors all")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"What"),": you can limit the methods to use with ",(0,r.kt)("inlineCode",{parentName:"p"},"--rpc-methods"),", an easy way to set this to a safe mode is ",(0,r.kt)("inlineCode",{parentName:"p"},"--rpc-methods Safe")),(0,r.kt)("h3",{id:"secure-the-ws-port"},"Secure the ws port"),(0,r.kt)("p",null,'The ws port is preferably exposed from the outside as a ssl secured wss port. The "',(0,r.kt)("a",{parentName:"p",href:"https://wiki.polkadot.network/docs/maintain-wss"},"maintain wss"),"\" on the wiki already covers a lot of information about this, especially in relation to setting it up in a nginx configuration. This page is focussed more on a apache2 but principles are the same. The main idea is converting the non secure ws port to a secure wss port by putting it behind a ssl enabled proxy. So from outside one see's the ssl enabled apache2/nginx/other proxy server, witch redirect the request to the internal rpc node."),(0,r.kt)("h3",{id:"using-apache2-for-proxying"},"Using Apache2 for proxying"),(0,r.kt)("p",null,"Apache2 is a little heavier then nginx but also has some more tweaking posibilities. You can run it in different modes, prefork, worker or event. We chose ",(0,r.kt)("a",{parentName:"p",href:"https://httpd.apache.org/docs/2.4/mod/event.html"},"event")," since this seems best suited for high load enviroments. Downside is that you can't use the default php module and need to enable it via php-fm. The proxy_wstunnel module works out of the box. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"apt install apache2\na2dismod mpm_prefork\na2enmod mpm_event proxy proxy_html proxy_http proxy_wstunnel rewrite ssl\n")),(0,r.kt)("p",null,"If you want to enable php"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"apt install php-fpm\na2enmod proxy_fcgi setenvif\n")),(0,r.kt)("h4",{id:"enabling-ssl-through-letsencrypt"},"Enabling ssl through letsencrypt"),(0,r.kt)("p",null,"There are multiple options for getting a ssl certificate, one popular (and free) being letsencrypt. Obtaining a letsencrypt certificate can be done through for example ",(0,r.kt)("a",{parentName:"p",href:"https://certbot.eff.org/"},"certbot")," or ",(0,r.kt)("a",{parentName:"p",href:"https://go-acme.github.io/lego/dns/"},"lego")," (which has more dns provider options)."),(0,r.kt)("h4",{id:"add-the-proxy-to-the-apache2-config"},"Add the proxy to the apache2 config"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://httpd.apache.org/docs/2.4/mod/mod_proxy_wstunnel.html"},"mod_proxy_wstunnel")," provides ",(0,r.kt)("em",{parentName:"p"},"support for the tunnelling of web socket connections to a backend websockets server. The connection is automatically upgraded to a websocket connection"),". In a ssl enabled virtualhost add:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-apacheconf"},"SSLProxyEngine on\nProxyRequests off\n\nProxyPass / ws://localhost:9944\nProxyPassReverse / ws://localhost:9944\n")),(0,r.kt)("h4",{id:"tweaking-connections"},"Tweaking connections"),(0,r.kt)("p",null,"The number of connections is limited by the node itself (",(0,r.kt)("inlineCode",{parentName:"p"},"--ws-max-connections"),") but also by the number of threads available on the proxy server. For apache2 this can be tweaked by editing ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/apache2/mods-enabled/mpm_event.conf")),(0,r.kt)("p",null,"We are using: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-apacheconf"},"StartServers         4\nMinSpareThreads      25\nMaxSpareThreads      75\nThreadLimit      128\nThreadsPerChild      128\nMaxRequestWorkers    896\nMaxConnectionsPerChild   0\n")),(0,r.kt)("h4",{id:"rate-limiting"},"Rate limiting"),(0,r.kt)("p",null,"Theoretically one client could use all connections/resources, draining the resources of the server and making it inaccessible. This can be countered by rate limiting the connections, for example by using mod_qos:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"apt install libapache2-mod-qos\na2enmod qos\n")),(0,r.kt)("p",null,"And edit ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/apache2/mods-available/qos.conf")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"  # allows max 50 connections from a single ip address:\n  QS_SrvMaxConnPerIP                                 50\n")),(0,r.kt)("p",null,"Be carefull when running behind a load balancer (for example cloudflare) because the load balancer will only use a few ip's and thus can trigger the rate limit, iso in this case it is better to use the rate limit options from the load balancer itself."),(0,r.kt)("h3",{id:"load-balancing--failover"},"Load balancing & failover"),(0,r.kt)("p",null,"With multiple servers it is possible to build a load balancing or even a failover construction. A simple load balancing can be a ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Round-robin_DNS"},"round robin-robin dns")," up to a more advanced (dedicated) load balancer or a content delivery network (CDN) like cloudflare.   "),(0,r.kt)("h3",{id:"stress-testing"},"Stress testing"),(0,r.kt)("p",null,"You can test basic usage by accessing your server through the polkadot.js UI as a custom endpoint. For example staking target display is RPC intensive and can give you an indication of performance. "),(0,r.kt)("p",null,"There are also more dedicated stress testing solutions, we have forked the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/dwellir-public/artillery-engine-substrate"},"Dwellir repository")," for our testing."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash\nnvm install --lts\nnpm install -g yarn\nyarn global add artillery\nyarn global add artillery-engine-substrate\ncd /opt\ngit clone git@github.com:stakeworld/stakeworld-rpc-artillery.git\ncd /opt/stakeworld-rpc-artillery\nyarn\n./run.sh\n")),(0,r.kt)("p",null,"After the ",(0,r.kt)("inlineCode",{parentName:"p"},"run.sh")," you can edit some variables like how many connections per second, the wss node, etc. The following is a test run for 10 seconds with 10 connections per second and maximum 20 concurrent users. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'config:\n  target: "wss://ksm-rpc.stakeworld.io"\n  processor: "./functions.js"\n  phases:\n    - duration: 10\n      arrivalRate: 10\n      maxVusers: 20\n')),(0,r.kt)("p",null,"After this you get some info about the run and a report is created, which can be used for further diagnostics"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"--------------------------------\nSummary report @ 23:38:40(+0100)\n--------------------------------\n\nvusers.completed: .............................................................. 100\nvusers.created: ................................................................ 100\nvusers.created_by_name.balance: ................................................ 35\nvusers.created_by_name.complex_call: ........................................... 33\nvusers.created_by_name.headers_blocks: ......................................... 32\nvusers.failed: ................................................................. 0\nvusers.session_length:\n  min: ......................................................................... 231.7\n  max: ......................................................................... 656.1\n  median: ...................................................................... 361.5\n  p95: ......................................................................... 518.1\n  p99: ......................................................................... 645.6\nws.messages_sent: .............................................................. 163\nws.send_rate: .................................................................. 29/sec\nLog file: reports/report.json\nReport generated: reports/report.html\n")))}d.isMDXComponent=!0},2307:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/png;base64,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"}}]);