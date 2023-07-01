"use strict";(self.webpackChunkstakeworld=self.webpackChunkstakeworld||[]).push([[961],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(a),m=r,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return a?n.createElement(h,s(s({ref:t},c),{},{components:a})):n.createElement(h,s({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var p=2;p<o;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},1647:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=a(3117),r=(a(7294),a(3905));const o={id:"rpc",title:"RPC server",description:"Setting up a secure RPC server",slug:"/rpc",sidebar_position:4,keywords:["rpc","rpc server","wss","ws","polkadot.js","validator","polkadot","kusama","westend"]},s=void 0,i={unversionedId:"rpc",id:"rpc",title:"RPC server",description:"Setting up a secure RPC server",source:"@site/docs/rpc.mdx",sourceDirName:".",slug:"/rpc",permalink:"/docs/rpc",draft:!1,editUrl:"https://github.com/stakeworld/website/edit/master/docs/rpc.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"rpc",title:"RPC server",description:"Setting up a secure RPC server",slug:"/rpc",sidebar_position:4,keywords:["rpc","rpc server","wss","ws","polkadot.js","validator","polkadot","kusama","westend"]},sidebar:"tutorialSidebar",previous:{title:"Database sizes",permalink:"/docs/dbsize"},next:{title:"Linux tips",permalink:"/docs/tools"}},l={},p=[{value:"Live stakeworld RPC data",id:"live-stakeworld-rpc-data",level:2},{value:"Setting up your own secure RPC server",id:"setting-up-your-own-secure-rpc-server",level:2},{value:"Archive node vs pruned node",id:"archive-node-vs-pruned-node",level:3},{value:"Secure the RPC server",id:"secure-the-rpc-server",level:3},{value:"Secure the ws port",id:"secure-the-ws-port",level:3},{value:"Using Apache2 for proxying",id:"using-apache2-for-proxying",level:3},{value:"Enabling ssl through letsencrypt",id:"enabling-ssl-through-letsencrypt",level:4},{value:"Add the proxy to the apache2 config",id:"add-the-proxy-to-the-apache2-config",level:4},{value:"Tweaking connections",id:"tweaking-connections",level:4},{value:"Rate limiting",id:"rate-limiting",level:4},{value:"Load balancing &amp; failover",id:"load-balancing--failover",level:3},{value:"Stress testing",id:"stress-testing",level:3}],c={toc:p};function d(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"RPC servers allow access into the polkadot/kusama and parachains ecosystem. Stakeworld runs multiple public archive RPC servers: "),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Polkadot: ",(0,r.kt)("a",{parentName:"li",href:"https://polkadot.js.org/apps/?rpc=wss://dot-rpc.stakeworld.io"},"dot-rpc.stakeworld.io"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"AssetHub: ",(0,r.kt)("a",{parentName:"li",href:"https://polkadot.js.org/apps/?rpc=wss://dot-rpc.stakeworld.io/statemint"},"dot-rpc.stakeworld.io/statemint")),(0,r.kt)("li",{parentName:"ul"},"BridgeHub: ",(0,r.kt)("a",{parentName:"li",href:"https://polkadot.js.org/apps/?rpc=wss://dot-rpc.stakeworld.io/bridgehub"},"dot-rpc.stakeworld.io/bridgehub")),(0,r.kt)("li",{parentName:"ul"},"Collectives: ",(0,r.kt)("a",{parentName:"li",href:"https://polkadot.js.org/apps/?rpc=wss://dot-rpc.stakeworld.io/collectives"},"dot-rpc.stakeworld.io/collectives")))),(0,r.kt)("li",{parentName:"ul"},"Kusama: ",(0,r.kt)("a",{parentName:"li",href:"https://polkadot.js.org/apps/?rpc=wss://ksm-rpc.stakeworld.io"},"ksm-rpc.stakeworld.io"),"  ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"AssetHub: ",(0,r.kt)("a",{parentName:"li",href:"https://polkadot.js.org/apps/?rpc=wss://ksm-rpc.stakeworld.io/statemine"},"ksm-rpc.stakeworld.io/statemine")),(0,r.kt)("li",{parentName:"ul"},"BridgeHub: ",(0,r.kt)("a",{parentName:"li",href:"https://polkadot.js.org/apps/?rpc=wss://ksm-rpc.stakeworld.io/bridgehub"},"ksm-rpc.stakeworld.io/bridgehub")))),(0,r.kt)("li",{parentName:"ul"},"Westend: ",(0,r.kt)("a",{parentName:"li",href:"https://polkadot.js.org/apps/?rpc=wss://wnd-rpc.stakeworld.io"},"wnd-rpc.stakeworld.io"),"  ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"AssetHub: ",(0,r.kt)("a",{parentName:"li",href:"https://polkadot.js.org/apps/?rpc=wss://wnd-rpc.stakeworld.io/westmint"},"wnd-rpc.stakeworld.io/westmint")))))),(0,r.kt)("h2",{id:"live-stakeworld-rpc-data"},"Live stakeworld RPC data"),(0,r.kt)("iframe",{src:"https://monitor.stakeworld.io/public-dashboards/cef69420acd44165be7df9ad65c7cd89?orgId=1",width:"700",height:"1400",frameborder:"0"}),(0,r.kt)("h2",{id:"setting-up-your-own-secure-rpc-server"},"Setting up your own secure RPC server"),(0,r.kt)("p",null,"To access the polkadot, kusama and parachains networks we need some kind of access into the network. This can be achieved by ",(0,r.kt)("a",{parentName:"p",href:"./validate"},"setting up a node")," with a RPC server and allowing access to that RPC server via a secure websocket (wss) port. The default node setup already exposes a non secure ws socket on port 9944 (which can optionally be changed by the ",(0,r.kt)("inlineCode",{parentName:"p"},"--ws-port")," parameter), but for a more usable situation we need a secure websocket which is accesible through a public port."),(0,r.kt)("h3",{id:"archive-node-vs-pruned-node"},"Archive node vs pruned node"),(0,r.kt)("p",null,"A pruned node knows only the recent information about the network and not its full history. Most frequently done actions can be done with a pruned node, for example see account balances, make transfers, setup session keys, staking, etc. An archive node has the full history (database) of the network and can be queried in all kind of ways, give information about transfers since the network started, historical balances, advanced queries about past events, etc. "),(0,r.kt)("p",null,"An archive node requires a lot more ",(0,r.kt)("a",{parentName:"p",href:"./snapshot"},"diskspace"),".  For an archive node you need the options ",(0,r.kt)("inlineCode",{parentName:"p"},"--state-pruning archive --blocks-pruning archive")," in your startup settings.\n",(0,r.kt)("img",{alt:"snapsize",src:a(2307).Z,width:"800",height:"300"})),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Inclusion in the Polkadot.js UI requires an archive node.")),(0,r.kt)("h3",{id:"secure-the-rpc-server"},"Secure the RPC server"),(0,r.kt)("p",null,"Via the node startup settings you can choose ",(0,r.kt)("strong",{parentName:"p"},"what")," to expose with ",(0,r.kt)("strong",{parentName:"p"},"how many")," connections ",(0,r.kt)("strong",{parentName:"p"},"from where")," through your rpc server."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"How many"),": You can set your maximum connections through ",(0,r.kt)("inlineCode",{parentName:"p"},"--ws-max-connections"),", for example ",(0,r.kt)("inlineCode",{parentName:"p"},"--ws-max-connections 100")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"From where"),": by default localhost and the polkadot.js are allowed to access the RPC server, you can change this by setting ",(0,r.kt)("inlineCode",{parentName:"p"},"--rpc-cors"),", to allow access from everywhere you need ",(0,r.kt)("inlineCode",{parentName:"p"},"--rpc-cors all")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"What"),": you can limit the methods to use with ",(0,r.kt)("inlineCode",{parentName:"p"},"--rpc-methods"),", an easy way to set this to a safe mode is ",(0,r.kt)("inlineCode",{parentName:"p"},"--rpc-methods Safe")),(0,r.kt)("h3",{id:"secure-the-ws-port"},"Secure the ws port"),(0,r.kt)("p",null,'The ws port is preferably exposed from the outside as a ssl secured wss port. The "',(0,r.kt)("a",{parentName:"p",href:"https://wiki.polkadot.network/docs/maintain-wss"},"maintain wss"),"\" on the wiki already covers a lot of information about this, especially in relation to setting it up in a nginx configuration. This page is focussed more on a apache2 but principles are the same. The main idea is converting the non secure ws port to a secure wss port by putting it behind a ssl enabled proxy. So from outside one see's the ssl enabled apache2/nginx/other proxy server, witch redirect the request to the internal rpc node."),(0,r.kt)("h3",{id:"using-apache2-for-proxying"},"Using Apache2 for proxying"),(0,r.kt)("p",null,"Apache2 is a little heavier then nginx but also has some more tweaking posibilities. You can run it in different modes, prefork, worker or event. We chose ",(0,r.kt)("a",{parentName:"p",href:"https://httpd.apache.org/docs/2.4/mod/event.html"},"event")," since this seems best suited for high load enviroments. Downside is that you can't use the default php module and need to enable it via php-fm. The proxy_wstunnel module works out of the box. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"apt install apache2\na2dismod mpm_prefork\na2enmod mpm_event proxy proxy_html proxy_http proxy_wstunnel rewrite ssl\n")),(0,r.kt)("p",null,"If you want to enable php"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"apt install php-fpm\na2enmod proxy_fcgi setenvif\n")),(0,r.kt)("h4",{id:"enabling-ssl-through-letsencrypt"},"Enabling ssl through letsencrypt"),(0,r.kt)("p",null,"There are multiple options for getting a ssl certificate, one popular (and free) being letsencrypt. Obtaining a letsencrypt certificate can be done through for example ",(0,r.kt)("a",{parentName:"p",href:"https://certbot.eff.org/"},"certbot")," or ",(0,r.kt)("a",{parentName:"p",href:"https://go-acme.github.io/lego/dns/"},"lego")," (which has more dns provider options)."),(0,r.kt)("h4",{id:"add-the-proxy-to-the-apache2-config"},"Add the proxy to the apache2 config"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://httpd.apache.org/docs/2.4/mod/mod_proxy_wstunnel.html"},"mod_proxy_wstunnel")," provides ",(0,r.kt)("em",{parentName:"p"},"support for the tunnelling of web socket connections to a backend websockets server. The connection is automatically upgraded to a websocket connection"),". In a ssl enabled virtualhost add:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-apacheconf"},"SSLProxyEngine on\nProxyRequests off\n\nProxyPass / ws://localhost:9944\nProxyPassReverse / ws://localhost:9944\n")),(0,r.kt)("p",null,"Older versions of mod_proxy_wstunnel do not upgrade the connection automatically and will need the following config added:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-apacheconf"},"RewriteEngine on\nRewriteCond %{HTTP:Upgrade} websocket [NC]\nRewriteRule /(.*) ws://localhost:9944/$1 [P,L]\nRewriteRule /(.*) http://localhost:9944/$1 [P,L]\n")),(0,r.kt)("h4",{id:"tweaking-connections"},"Tweaking connections"),(0,r.kt)("p",null,"The number of connections is limited by the node itself (",(0,r.kt)("inlineCode",{parentName:"p"},"--ws-max-connections"),") but also by the number of threads available on the proxy server. For apache2 this can be tweaked by editing ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/apache2/mods-enabled/mpm_event.conf")),(0,r.kt)("p",null,"We are using: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-apacheconf"},"StartServers         4\nMinSpareThreads      25\nMaxSpareThreads      75\nThreadLimit      128\nThreadsPerChild      128\nMaxRequestWorkers    896\nMaxConnectionsPerChild   0\n")),(0,r.kt)("h4",{id:"rate-limiting"},"Rate limiting"),(0,r.kt)("p",null,"Theoretically one client could use all connections/resources, draining the resources of the server and making it inaccessible. This can be countered by rate limiting the connections, for example by using mod_qos:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"apt install libapache2-mod-qos\na2enmod qos\n")),(0,r.kt)("p",null,"And edit ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/apache2/mods-available/qos.conf")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"  # allows max 50 connections from a single ip address:\n  QS_SrvMaxConnPerIP                                 50\n")),(0,r.kt)("p",null,"Be carefull when running behind a load balancer (for example cloudflare) because the load balancer will only use a few ip's and thus can trigger the rate limit, iso in this case it is better to use the rate limit options from the load balancer itself."),(0,r.kt)("h3",{id:"load-balancing--failover"},"Load balancing & failover"),(0,r.kt)("p",null,"With multiple servers it is possible to build a load balancing or even a failover construction. A simple load balancing can be a ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Round-robin_DNS"},"round robin-robin dns")," up to a more advanced (dedicated) load balancer or a content delivery network (CDN) like cloudflare.   "),(0,r.kt)("h3",{id:"stress-testing"},"Stress testing"),(0,r.kt)("p",null,"You can test basic usage by accessing your server through the polkadot.js UI as a custom endpoint. For example staking target display is RPC intensive and can give you an indication of performance. "),(0,r.kt)("p",null,"There are also more dedicated stress testing solutions, we have forked the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/dwellir-public/artillery-engine-substrate"},"Dwellir repository")," for our testing."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash\nnvm install --lts\nnpm install -g yarn\nyarn global add artillery\nyarn global add artillery-engine-substrate\ncd /opt\ngit clone git@github.com:stakeworld/stakeworld-rpc-artillery.git\ncd /opt/stakeworld-rpc-artillery\nyarn\n./run.sh\n")),(0,r.kt)("p",null,"After the ",(0,r.kt)("inlineCode",{parentName:"p"},"run.sh")," you can edit some variables like how many connections per second, the wss node, etc. The following is a test run for 10 seconds with 10 connections per second and maximum 20 concurrent users. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'config:\n  target: "wss://ksm-rpc.stakeworld.io"\n  processor: "./functions.js"\n  phases:\n    - duration: 10\n      arrivalRate: 10\n      maxVusers: 20\n')),(0,r.kt)("p",null,"After this you get some info about the run and a report is created, which can be used for further diagnostics"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"--------------------------------\nSummary report @ 23:38:40(+0100)\n--------------------------------\n\nvusers.completed: .............................................................. 100\nvusers.created: ................................................................ 100\nvusers.created_by_name.balance: ................................................ 35\nvusers.created_by_name.complex_call: ........................................... 33\nvusers.created_by_name.headers_blocks: ......................................... 32\nvusers.failed: ................................................................. 0\nvusers.session_length:\n  min: ......................................................................... 231.7\n  max: ......................................................................... 656.1\n  median: ...................................................................... 361.5\n  p95: ......................................................................... 518.1\n  p99: ......................................................................... 645.6\nws.messages_sent: .............................................................. 163\nws.send_rate: .................................................................. 29/sec\nLog file: reports/report.json\nReport generated: reports/report.html\n")))}d.isMDXComponent=!0},2307:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/png;base64,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"}}]);