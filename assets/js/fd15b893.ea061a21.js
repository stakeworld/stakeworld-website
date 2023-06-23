"use strict";(self.webpackChunkstakeworld=self.webpackChunkstakeworld||[]).push([[961],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),h=a,m=u["".concat(l,".").concat(h)]||u[h]||d[h]||o;return n?r.createElement(m,s(s({ref:t},c),{},{components:n})):r.createElement(m,s({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1647:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=n(3117),a=(n(7294),n(3905));const o={id:"rpc",title:"RPC server",description:"Setting up a secure RPC server",slug:"/rpc",sidebar_position:4,keywords:["rpc","rpc server","wss","ws","polkadot.js","validator","polkadot","kusama","westend"]},s=void 0,i={unversionedId:"rpc",id:"rpc",title:"RPC server",description:"Setting up a secure RPC server",source:"@site/docs/rpc.mdx",sourceDirName:".",slug:"/rpc",permalink:"/docs/rpc",draft:!1,editUrl:"https://github.com/stakeworld/website/edit/master/docs/rpc.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"rpc",title:"RPC server",description:"Setting up a secure RPC server",slug:"/rpc",sidebar_position:4,keywords:["rpc","rpc server","wss","ws","polkadot.js","validator","polkadot","kusama","westend"]},sidebar:"tutorialSidebar",previous:{title:"Database sizes",permalink:"/docs/dbsize"},next:{title:"Linux tips",permalink:"/docs/tools"}},l={},p=[{value:"Live stakeworld RPC data",id:"live-stakeworld-rpc-data",level:2},{value:"Setting up your own secure RPC server",id:"setting-up-your-own-secure-rpc-server",level:2},{value:"Archive node vs pruned node",id:"archive-node-vs-pruned-node",level:3},{value:"Secure the RPC server",id:"secure-the-rpc-server",level:3},{value:"Secure the ws port",id:"secure-the-ws-port",level:3},{value:"Using Apache2 for proxying",id:"using-apache2-for-proxying",level:3},{value:"Enabling ssl through letsencrypt",id:"enabling-ssl-through-letsencrypt",level:4},{value:"Add the proxy to the apache2 config",id:"add-the-proxy-to-the-apache2-config",level:4},{value:"Tweaking connections",id:"tweaking-connections",level:4},{value:"Rate limiting",id:"rate-limiting",level:4},{value:"Load balancing &amp; failover",id:"load-balancing--failover",level:3},{value:"Stress testing",id:"stress-testing",level:3}],c={toc:p};function d(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"RPC servers allow access into the polkadot/kusama and parachains ecosystem. Stakeworld runs multiple public archive RPC servers: "),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"Polkadot: ",(0,a.kt)("a",{parentName:"li",href:"https://polkadot.js.org/apps/?rpc=wss://dot-rpc.stakeworld.io"},"dot-rpc.stakeworld.io"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"AssetHub: ",(0,a.kt)("a",{parentName:"li",href:"https://polkadot.js.org/apps/?rpc=wss://dot-rpc.stakeworld.io/statemint"},"dot-rpc.stakeworld.io/statemint")),(0,a.kt)("li",{parentName:"ul"},"BridgeHub: ",(0,a.kt)("a",{parentName:"li",href:"https://polkadot.js.org/apps/?rpc=wss://dot-rpc.stakeworld.io/bridgehub"},"dot-rpc.stakeworld.io/bridgehub")),(0,a.kt)("li",{parentName:"ul"},"Collectives: ",(0,a.kt)("a",{parentName:"li",href:"https://polkadot.js.org/apps/?rpc=wss://dot-rpc.stakeworld.io/collectives"},"dot-rpc.stakeworld.io/collectives")))),(0,a.kt)("li",{parentName:"ul"},"Kusama: ",(0,a.kt)("a",{parentName:"li",href:"https://polkadot.js.org/apps/?rpc=wss://ksm-rpc.stakeworld.io"},"ksm-rpc.stakeworld.io"),"  ",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"AssetHub: ",(0,a.kt)("a",{parentName:"li",href:"https://polkadot.js.org/apps/?rpc=wss://ksm-rpc.stakeworld.io/statemine"},"ksm-rpc.stakeworld.io/statemine")),(0,a.kt)("li",{parentName:"ul"},"BridgeHub: ",(0,a.kt)("a",{parentName:"li",href:"https://polkadot.js.org/apps/?rpc=wss://ksm-rpc.stakeworld.io/bridgehub"},"ksm-rpc.stakeworld.io/bridgehub")))),(0,a.kt)("li",{parentName:"ul"},"Westend: ",(0,a.kt)("a",{parentName:"li",href:"https://polkadot.js.org/apps/?rpc=wss://wnd-rpc.stakeworld.io"},"wnd-rpc.stakeworld.io"),"  ",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"AssetHub: ",(0,a.kt)("a",{parentName:"li",href:"https://polkadot.js.org/apps/?rpc=wss://wnd-rpc.stakeworld.io/westmint"},"wnd-rpc.stakeworld.io/westmint")))))),(0,a.kt)("h2",{id:"live-stakeworld-rpc-data"},"Live stakeworld RPC data"),(0,a.kt)("iframe",{src:"https://monitor.stakeworld.io/public-dashboards/cef69420acd44165be7df9ad65c7cd89?orgId=1",width:"700",height:"1050",frameborder:"0"}),(0,a.kt)("h2",{id:"setting-up-your-own-secure-rpc-server"},"Setting up your own secure RPC server"),(0,a.kt)("p",null,"To access the polkadot, kusama and parachains networks we need some kind of access into the network. This can be achieved by ",(0,a.kt)("a",{parentName:"p",href:"./validate"},"setting up a node")," with a RPC server and allowing access to that RPC server via a secure websocket (wss) port. The default node setup already exposes a non secure ws socket on port 9944 (which can optionally be changed by the ",(0,a.kt)("inlineCode",{parentName:"p"},"--ws-port")," parameter), but for a more usable situation we need a secure websocket which is accesible through a public port."),(0,a.kt)("h3",{id:"archive-node-vs-pruned-node"},"Archive node vs pruned node"),(0,a.kt)("p",null,"A pruned node knows only the recent information about the network and not its full history. Most frequently done actions can be done with a pruned node, for example see account balances, make transfers, setup session keys, staking, etc. An archive node has the full history (database) of the network and can be queried in all kind of ways, give information about transfers since the network started, historical balances, advanced queries about past events, etc. "),(0,a.kt)("p",null,"An archive node requires a lot more ",(0,a.kt)("a",{parentName:"p",href:"./snapshot"},"diskspace"),".  For an archive node you need the options ",(0,a.kt)("inlineCode",{parentName:"p"},"--state-pruning archive --blocks-pruning archive")," in your startup settings.\n",(0,a.kt)("img",{alt:"snapsize",src:n(2307).Z,width:"800",height:"300"})),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Inclusion in the Polkadot.js UI requires an archive node.")),(0,a.kt)("h3",{id:"secure-the-rpc-server"},"Secure the RPC server"),(0,a.kt)("p",null,"Via the node startup settings you can choose ",(0,a.kt)("strong",{parentName:"p"},"what")," to expose with ",(0,a.kt)("strong",{parentName:"p"},"how many")," connections ",(0,a.kt)("strong",{parentName:"p"},"from where")," through your rpc server."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"How many"),": You can set your maximum connections through ",(0,a.kt)("inlineCode",{parentName:"p"},"--ws-max-connections"),", for example ",(0,a.kt)("inlineCode",{parentName:"p"},"--ws-max-connections 100")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"From where"),": by default localhost and the polkadot.js are allowed to access the RPC server, you can change this by setting ",(0,a.kt)("inlineCode",{parentName:"p"},"--rpc-cors"),", to allow access from everywhere you need ",(0,a.kt)("inlineCode",{parentName:"p"},"--rpc-cors all")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"What"),": you can limit the methods to use with ",(0,a.kt)("inlineCode",{parentName:"p"},"--rpc-methods"),", an easy way to set this to a safe mode is ",(0,a.kt)("inlineCode",{parentName:"p"},"--rpc-methods Safe")),(0,a.kt)("h3",{id:"secure-the-ws-port"},"Secure the ws port"),(0,a.kt)("p",null,'The ws port is preferably exposed from the outside as a ssl secured wss port. The "',(0,a.kt)("a",{parentName:"p",href:"https://wiki.polkadot.network/docs/maintain-wss"},"maintain wss"),"\" on the wiki already covers a lot of information about this, especially in relation to setting it up in a nginx configuration. This page is focussed more on a apache2 but principles are the same. The main idea is converting the non secure ws port to a secure wss port by putting it behind a ssl enabled proxy. So from outside one see's the ssl enabled apache2/nginx/other proxy server, witch redirect the request to the internal rpc node."),(0,a.kt)("h3",{id:"using-apache2-for-proxying"},"Using Apache2 for proxying"),(0,a.kt)("p",null,"Apache2 is a little heavier then nginx but also has some more tweaking posibilities. You can run it in different modes, prefork, worker or event. We chose ",(0,a.kt)("a",{parentName:"p",href:"https://httpd.apache.org/docs/2.4/mod/event.html"},"event")," since this seems best suited for high load enviroments. Downside is that you can't use the default php module and need to enable it via php-fm. The proxy_wstunnel module works out of the box. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"apt install apache2\na2dismod mpm_prefork\na2enmod mpm_event proxy proxy_html proxy_http proxy_wstunnel rewrite ssl\n")),(0,a.kt)("p",null,"If you want to enable php"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"apt install php-fpm\na2enmod proxy_fcgi setenvif\n")),(0,a.kt)("h4",{id:"enabling-ssl-through-letsencrypt"},"Enabling ssl through letsencrypt"),(0,a.kt)("p",null,"There are multiple options for getting a ssl certificate, one popular (and free) being letsencrypt. Obtaining a letsencrypt certificate can be done through for example ",(0,a.kt)("a",{parentName:"p",href:"https://certbot.eff.org/"},"certbot")," or ",(0,a.kt)("a",{parentName:"p",href:"https://go-acme.github.io/lego/dns/"},"lego")," (which has more dns provider options)."),(0,a.kt)("h4",{id:"add-the-proxy-to-the-apache2-config"},"Add the proxy to the apache2 config"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://httpd.apache.org/docs/2.4/mod/mod_proxy_wstunnel.html"},"mod_proxy_wstunnel")," provides ",(0,a.kt)("em",{parentName:"p"},"support for the tunnelling of web socket connections to a backend websockets server. The connection is automatically upgraded to a websocket connection"),". In a ssl enabled virtualhost add:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-apacheconf"},"SSLProxyEngine on\nProxyRequests off\n\nProxyPass / ws://localhost:9944\nProxyPassReverse / ws://localhost:9944\n")),(0,a.kt)("p",null,"Older versions of mod_proxy_wstunnel do not upgrade the connection automatically and will need the following config added:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-apacheconf"},"RewriteEngine on\nRewriteCond %{HTTP:Upgrade} websocket [NC]\nRewriteRule /(.*) ws://localhost:9944/$1 [P,L]\nRewriteRule /(.*) http://localhost:9944/$1 [P,L]\n")),(0,a.kt)("h4",{id:"tweaking-connections"},"Tweaking connections"),(0,a.kt)("p",null,"The number of connections is limited by the node itself (",(0,a.kt)("inlineCode",{parentName:"p"},"--ws-max-connections"),") but also by the number of threads available on the proxy server. For apache2 this can be tweaked by editing ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/apache2/mods-enabled/mpm_event.conf")),(0,a.kt)("p",null,"We are using: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-apacheconf"},"StartServers         4\nMinSpareThreads      25\nMaxSpareThreads      75\nThreadLimit      128\nThreadsPerChild      128\nMaxRequestWorkers    896\nMaxConnectionsPerChild   0\n")),(0,a.kt)("h4",{id:"rate-limiting"},"Rate limiting"),(0,a.kt)("p",null,"Theoretically one client could use all connections/resources, draining the resources of the server and making it inaccessible. This can be countered by rate limiting the connections, for example by using mod_qos:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"apt install libapache2-mod-qos\na2enmod qos\n")),(0,a.kt)("p",null,"And edit ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/apache2/mods-available/qos.conf")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"  # allows max 50 connections from a single ip address:\n  QS_SrvMaxConnPerIP                                 50\n")),(0,a.kt)("p",null,"Be carefull when running behind a load balancer (for example cloudflare) because the load balancer will only use a few ip's and thus can trigger the rate limit, iso in this case it is better to use the rate limit options from the load balancer itself."),(0,a.kt)("h3",{id:"load-balancing--failover"},"Load balancing & failover"),(0,a.kt)("p",null,"With multiple servers it is possible to build a load balancing or even a failover construction. A simple load balancing can be a ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Round-robin_DNS"},"round robin-robin dns")," up to a more advanced (dedicated) load balancer or a content delivery network (CDN) like cloudflare.   "),(0,a.kt)("h3",{id:"stress-testing"},"Stress testing"),(0,a.kt)("p",null,"You can test basic usage by accessing your server through the polkadot.js UI as a custom endpoint. For example staking target display is RPC intensive and can give you an indication of performance. "),(0,a.kt)("p",null,"There are also more dedicated stress testing solutions, we have forked the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/dwellir-public/artillery-engine-substrate"},"Dwellir repository")," for our testing."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash\nnvm install --lts\nnpm install -g yarn\nyarn global add artillery\nyarn global add artillery-engine-substrate\ncd /opt\ngit clone git@github.com:stakeworld/stakeworld-rpc-artillery.git\ncd /opt/stakeworld-rpc-artillery\nyarn\n./run.sh\n")),(0,a.kt)("p",null,"After the ",(0,a.kt)("inlineCode",{parentName:"p"},"run.sh")," you can edit some variables like how many connections per second, the wss node, etc. The following is a test run for 10 seconds with 10 connections per second and maximum 20 concurrent users. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'config:\n  target: "wss://ksm-rpc.stakeworld.io"\n  processor: "./functions.js"\n  phases:\n    - duration: 10\n      arrivalRate: 10\n      maxVusers: 20\n')),(0,a.kt)("p",null,"After this you get some info about the run and a report is created, which can be used for further diagnostics"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"--------------------------------\nSummary report @ 23:38:40(+0100)\n--------------------------------\n\nvusers.completed: .............................................................. 100\nvusers.created: ................................................................ 100\nvusers.created_by_name.balance: ................................................ 35\nvusers.created_by_name.complex_call: ........................................... 33\nvusers.created_by_name.headers_blocks: ......................................... 32\nvusers.failed: ................................................................. 0\nvusers.session_length:\n  min: ......................................................................... 231.7\n  max: ......................................................................... 656.1\n  median: ...................................................................... 361.5\n  p95: ......................................................................... 518.1\n  p99: ......................................................................... 645.6\nws.messages_sent: .............................................................. 163\nws.send_rate: .................................................................. 29/sec\nLog file: reports/report.json\nReport generated: reports/report.html\n")))}d.isMDXComponent=!0},2307:(e,t,n)=>{n.d(t,{Z:()=>r});const r="data:image/png;base64,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"}}]);