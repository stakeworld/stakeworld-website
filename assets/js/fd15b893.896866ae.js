"use strict";(self.webpackChunkstakeworld=self.webpackChunkstakeworld||[]).push([[961],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),h=r,m=u["".concat(l,".").concat(h)]||u[h]||d[h]||o;return n?a.createElement(m,s(s({ref:t},c),{},{components:n})):a.createElement(m,s({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1647:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=n(3117),r=(n(7294),n(3905));const o={id:"rpc",title:"RPC server",description:"Setting up a secure RPC server",slug:"/rpc",sidebar_position:4,keywords:["rpc","rpc server","wss","ws","polkadot.js","validator","polkadot","kusama","westend"]},s=void 0,i={unversionedId:"rpc",id:"rpc",title:"RPC server",description:"Setting up a secure RPC server",source:"@site/docs/rpc.mdx",sourceDirName:".",slug:"/rpc",permalink:"/docs/rpc",draft:!1,editUrl:"https://github.com/stakeworld/website/edit/master/docs/rpc.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"rpc",title:"RPC server",description:"Setting up a secure RPC server",slug:"/rpc",sidebar_position:4,keywords:["rpc","rpc server","wss","ws","polkadot.js","validator","polkadot","kusama","westend"]},sidebar:"tutorialSidebar",previous:{title:"Database sizes",permalink:"/docs/dbsize"},next:{title:"Linux tips",permalink:"/docs/tools"}},l={},p=[{value:"Live stakeworld RPC data",id:"live-stakeworld-rpc-data",level:2},{value:"Setting up your own secure RPC server",id:"setting-up-your-own-secure-rpc-server",level:2},{value:"Archive node vs pruned node",id:"archive-node-vs-pruned-node",level:3},{value:"Secure the RPC server",id:"secure-the-rpc-server",level:3},{value:"Secure the ws port",id:"secure-the-ws-port",level:3},{value:"Using Apache2 for proxying",id:"using-apache2-for-proxying",level:3},{value:"Enabling ssl through letsencrypt",id:"enabling-ssl-through-letsencrypt",level:4},{value:"Add the proxy to the apache2 config",id:"add-the-proxy-to-the-apache2-config",level:4},{value:"Tweaking connections",id:"tweaking-connections",level:4},{value:"Rate limiting",id:"rate-limiting",level:4},{value:"Load balancing &amp; failover",id:"load-balancing--failover",level:3},{value:"Stress testing",id:"stress-testing",level:3}],c={toc:p};function d(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"RPC servers allow access into the polkadot/kusama and parachains ecosystem. Stakeworld runs multiple public archive RPC servers: "),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Polkadot: ",(0,r.kt)("a",{parentName:"li",href:"https://polkadot.js.org/apps/?rpc=wss://dot-rpc.stakeworld.io"},"dot-rpc.stakeworld.io"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Statemint: ",(0,r.kt)("a",{parentName:"li",href:"https://polkadot.js.org/apps/?rpc=wss://dot-rpc.stakeworld.io/statemint"},"dot-rpc.stakeworld.io/statemint")),(0,r.kt)("li",{parentName:"ul"},"Bridgehub: ",(0,r.kt)("a",{parentName:"li",href:"https://polkadot.js.org/apps/?rpc=wss://dot-rpc.stakeworld.io/bridgehub"},"dot-rpc.stakeworld.io/bridgehub")))),(0,r.kt)("li",{parentName:"ul"},"Kusama: ",(0,r.kt)("a",{parentName:"li",href:"https://polkadot.js.org/apps/?rpc=wss://ksm-rpc.stakeworld.io"},"ksm-rpc.stakeworld.io"),"  ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Statemine: ",(0,r.kt)("a",{parentName:"li",href:"https://polkadot.js.org/apps/?rpc=wss://ksm-rpc.stakeworld.io/statemine"},"ksm-rpc.stakeworld.io/statemine")),(0,r.kt)("li",{parentName:"ul"},"Bridgehub: ",(0,r.kt)("a",{parentName:"li",href:"https://polkadot.js.org/apps/?rpc=wss://ksm-rpc.stakeworld.io/bridgehub"},"ksm-rpc.stakeworld.io/bridgehub")))),(0,r.kt)("li",{parentName:"ul"},"Westend: ",(0,r.kt)("a",{parentName:"li",href:"https://polkadot.js.org/apps/?rpc=wss://wnd-rpc.stakeworld.io"},"wnd-rpc.stakeworld.io"),"  ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Westmint: ",(0,r.kt)("a",{parentName:"li",href:"https://polkadot.js.org/apps/?rpc=wss://wnd-rpc.stakeworld.io/westmint"},"wnd-rpc.stakeworld.io/westmint")))))),(0,r.kt)("h2",{id:"live-stakeworld-rpc-data"},"Live stakeworld RPC data"),(0,r.kt)("iframe",{src:"https://monitor.stakeworld.io/public-dashboards/cef69420acd44165be7df9ad65c7cd89?orgId=1",width:"700",height:"700",frameborder:"0"}),(0,r.kt)("h2",{id:"setting-up-your-own-secure-rpc-server"},"Setting up your own secure RPC server"),(0,r.kt)("p",null,"To access the polkadot, kusama and parachains networks we need some kind of access into the network. This can be achieved by ",(0,r.kt)("a",{parentName:"p",href:"./validate"},"setting up a node")," with a RPC server and allowing access to that RPC server via a secure websocket (wss) port. The default node setup already exposes a non secure ws socket on port 9944 (which can optionally be changed by the ",(0,r.kt)("inlineCode",{parentName:"p"},"--ws-port")," parameter), but for a more usable situation we need a secure websocket which is accesible through a public port."),(0,r.kt)("h3",{id:"archive-node-vs-pruned-node"},"Archive node vs pruned node"),(0,r.kt)("p",null,"A pruned node knows only the recent information about the network and not its full history. Most frequently done actions can be done with a pruned node, for example see account balances, make transfers, setup session keys, staking, etc. An archive node has the full history (database) of the network and can be queried in all kind of ways, give information about transfers since the network started, historical balances, advanced queries about past events, etc. "),(0,r.kt)("p",null,"An archive node requires a lot more ",(0,r.kt)("a",{parentName:"p",href:"./snapshot"},"diskspace"),".  For an archive node you need the options ",(0,r.kt)("inlineCode",{parentName:"p"},"--state-pruning archive --blocks-pruning archive")," in your startup settings.\n",(0,r.kt)("img",{alt:"snapsize",src:n(2307).Z,width:"800",height:"300"})),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Inclusion in the Polkadot.js UI requires an archive node.")),(0,r.kt)("h3",{id:"secure-the-rpc-server"},"Secure the RPC server"),(0,r.kt)("p",null,"Via the node startup settings you can choose ",(0,r.kt)("strong",{parentName:"p"},"what")," to expose with ",(0,r.kt)("strong",{parentName:"p"},"how many")," connections ",(0,r.kt)("strong",{parentName:"p"},"from where")," through your rpc server."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"How many"),": You can set your maximum connections through ",(0,r.kt)("inlineCode",{parentName:"p"},"--ws-max-connections"),", for example ",(0,r.kt)("inlineCode",{parentName:"p"},"--ws-max-connections 100")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"From where"),": by default localhost and the polkadot.js are allowed to access the RPC server, you can change this by setting ",(0,r.kt)("inlineCode",{parentName:"p"},"--rpc-cors"),", to allow access from everywhere you need ",(0,r.kt)("inlineCode",{parentName:"p"},"--rpc-cors all")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"What"),": you can limit the methods to use with ",(0,r.kt)("inlineCode",{parentName:"p"},"--rpc-methods"),", an easy way to set this to a safe mode is ",(0,r.kt)("inlineCode",{parentName:"p"},"--rpc-methods Safe")),(0,r.kt)("h3",{id:"secure-the-ws-port"},"Secure the ws port"),(0,r.kt)("p",null,'The ws port is preferably exposed from the outside as a ssl secured wss port. The "',(0,r.kt)("a",{parentName:"p",href:"https://wiki.polkadot.network/docs/maintain-wss"},"maintain wss"),"\" on the wiki already covers a lot of information about this, especially in relation to setting it up in a nginx configuration. This page is focussed more on a apache2 but principles are the same. The main idea is converting the non secure ws port to a secure wss port by putting it behind a ssl enabled proxy. So from outside one see's the ssl enabled apache2/nginx/other proxy server, witch redirect the request to the internal rpc node."),(0,r.kt)("h3",{id:"using-apache2-for-proxying"},"Using Apache2 for proxying"),(0,r.kt)("p",null,"Apache2 is a little heavier then nginx but also has some more tweaking posibilities. You can run it in different modes, prefork, worker or event. We chose ",(0,r.kt)("a",{parentName:"p",href:"https://httpd.apache.org/docs/2.4/mod/event.html"},"event")," since this seems best suited for high load enviroments. Downside is that you can't use the default php module and need to enable it via php-fm. The proxy_wstunnel module works out of the box. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"apt install apache2\na2dismod mpm_prefork\na2enmod mpm_event proxy proxy_html proxy_http proxy_wstunnel rewrite ssl\n")),(0,r.kt)("p",null,"If you want to enable php"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"apt install php-fpm\na2enmod proxy_fcgi setenvif\n")),(0,r.kt)("h4",{id:"enabling-ssl-through-letsencrypt"},"Enabling ssl through letsencrypt"),(0,r.kt)("p",null,"There are multiple options for getting a ssl certificate, one popular (and free) being letsencrypt. Obtaining a letsencrypt certificate can be done through for example ",(0,r.kt)("a",{parentName:"p",href:"https://certbot.eff.org/"},"certbot")," or ",(0,r.kt)("a",{parentName:"p",href:"https://go-acme.github.io/lego/dns/"},"lego")," (which has more dns provider options)."),(0,r.kt)("h4",{id:"add-the-proxy-to-the-apache2-config"},"Add the proxy to the apache2 config"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://httpd.apache.org/docs/2.4/mod/mod_proxy_wstunnel.html"},"mod_proxy_wstunnel")," provides ",(0,r.kt)("em",{parentName:"p"},"support for the tunnelling of web socket connections to a backend websockets server. The connection is automatically upgraded to a websocket connection"),". In a ssl enabled virtualhost add:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-apacheconf"},"SSLProxyEngine on\nProxyRequests off\n\nProxyPass / ws://localhost:9944\nProxyPassReverse / ws://localhost:9944\n")),(0,r.kt)("p",null,"Older versions of mod_proxy_wstunnel do not upgrade the connection automatically and will need the following config added:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-apacheconf"},"RewriteEngine on\nRewriteCond %{HTTP:Upgrade} websocket [NC]\nRewriteRule /(.*) ws://localhost:9944/$1 [P,L]\nRewriteRule /(.*) http://localhost:9944/$1 [P,L]\n")),(0,r.kt)("h4",{id:"tweaking-connections"},"Tweaking connections"),(0,r.kt)("p",null,"The number of connections is limited by the node itself (",(0,r.kt)("inlineCode",{parentName:"p"},"--ws-max-connections"),") but also by the number of threads available on the proxy server. For apache2 this can be tweaked by editing ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/apache2/mods-enabled/mpm_event.conf")),(0,r.kt)("p",null,"We are using: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-apacheconf"},"StartServers         4\nMinSpareThreads      25\nMaxSpareThreads      75\nThreadLimit      128\nThreadsPerChild      128\nMaxRequestWorkers    896\nMaxConnectionsPerChild   0\n")),(0,r.kt)("h4",{id:"rate-limiting"},"Rate limiting"),(0,r.kt)("p",null,"Theoretically one client could use all connections/resources, draining the resources of the server and making it inaccessible. This can be countered by rate limiting the connections, for example by using mod_qos:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"apt install libapache2-mod-qos\na2enmod qos\n")),(0,r.kt)("p",null,"And edit ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/apache2/mods-available/qos.conf")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"  # allows max 50 connections from a single ip address:\n  QS_SrvMaxConnPerIP                                 50\n")),(0,r.kt)("p",null,"Be carefull when running behind a load balancer (for example cloudflare) because the load balancer will only use a few ip's and thus can trigger the rate limit, iso in this case it is better to use the rate limit options from the load balancer itself."),(0,r.kt)("h3",{id:"load-balancing--failover"},"Load balancing & failover"),(0,r.kt)("p",null,"With multiple servers it is possible to build a load balancing or even a failover construction. A simple load balancing can be a ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Round-robin_DNS"},"round robin-robin dns")," up to a more advanced (dedicated) load balancer or a content delivery network (CDN) like cloudflare.   "),(0,r.kt)("h3",{id:"stress-testing"},"Stress testing"),(0,r.kt)("p",null,"You can test basic usage by accessing your server through the polkadot.js UI as a custom endpoint. For example staking target display is RPC intensive and can give you an indication of performance. "),(0,r.kt)("p",null,"There are also more dedicated stress testing solutions, we have forked the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/dwellir-public/artillery-engine-substrate"},"Dwellir repository")," for our testing."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash\nnvm install --lts\nnpm install -g yarn\nyarn global add artillery\nyarn global add artillery-engine-substrate\ncd /opt\ngit clone git@github.com:stakeworld/stakeworld-rpc-artillery.git\ncd /opt/stakeworld-rpc-artillery\nyarn\n./run.sh\n")),(0,r.kt)("p",null,"After the ",(0,r.kt)("inlineCode",{parentName:"p"},"run.sh")," you can edit some variables like how many connections per second, the wss node, etc. The following is a test run for 10 seconds with 10 connections per second and maximum 20 concurrent users. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'config:\n  target: "wss://ksm-rpc.stakeworld.io"\n  processor: "./functions.js"\n  phases:\n    - duration: 10\n      arrivalRate: 10\n      maxVusers: 20\n')),(0,r.kt)("p",null,"After this you get some info about the run and a report is created, which can be used for further diagnostics"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"--------------------------------\nSummary report @ 23:38:40(+0100)\n--------------------------------\n\nvusers.completed: .............................................................. 100\nvusers.created: ................................................................ 100\nvusers.created_by_name.balance: ................................................ 35\nvusers.created_by_name.complex_call: ........................................... 33\nvusers.created_by_name.headers_blocks: ......................................... 32\nvusers.failed: ................................................................. 0\nvusers.session_length:\n  min: ......................................................................... 231.7\n  max: ......................................................................... 656.1\n  median: ...................................................................... 361.5\n  p95: ......................................................................... 518.1\n  p99: ......................................................................... 645.6\nws.messages_sent: .............................................................. 163\nws.send_rate: .................................................................. 29/sec\nLog file: reports/report.json\nReport generated: reports/report.html\n")))}d.isMDXComponent=!0},2307:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/png;base64,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"}}]);