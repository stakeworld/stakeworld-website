"use strict";(self.webpackChunkstakeworld=self.webpackChunkstakeworld||[]).push([[961],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=p(n),h=r,g=u["".concat(l,".").concat(h)]||u[h]||c[h]||o;return n?a.createElement(g,s(s({ref:t},d),{},{components:n})):a.createElement(g,s({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1647:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=n(3117),r=(n(7294),n(3905));const o={id:"rpc",title:"RPC server",description:"Setting up a secure RPC server",slug:"/rpc",sidebar_position:4,keywords:["rpc","rpc server","wss","ws","polkadot.js","validator","polkadot","kusama","westend"]},s=void 0,i={unversionedId:"rpc",id:"rpc",title:"RPC server",description:"Setting up a secure RPC server",source:"@site/docs/rpc.mdx",sourceDirName:".",slug:"/rpc",permalink:"/docs/rpc",draft:!1,editUrl:"https://github.com/stakeworld/website/edit/master/docs/rpc.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"rpc",title:"RPC server",description:"Setting up a secure RPC server",slug:"/rpc",sidebar_position:4,keywords:["rpc","rpc server","wss","ws","polkadot.js","validator","polkadot","kusama","westend"]},sidebar:"tutorialSidebar",previous:{title:"Database sizes",permalink:"/docs/dbsize"},next:{title:"Linux tips",permalink:"/docs/tools"}},l={},p=[{value:"Live stakeworld RPC data",id:"live-stakeworld-rpc-data",level:2},{value:"Setting up your own secure RPC server",id:"setting-up-your-own-secure-rpc-server",level:2},{value:"Archive node vs pruned node",id:"archive-node-vs-pruned-node",level:3},{value:"Secure the RPC server",id:"secure-the-rpc-server",level:3},{value:"Secure the ws port",id:"secure-the-ws-port",level:3},{value:"Using Apache2 for proxying",id:"using-apache2-for-proxying",level:3},{value:"Enabling ssl through letsencrypt",id:"enabling-ssl-through-letsencrypt",level:4},{value:"Add the proxy to the apache2 config",id:"add-the-proxy-to-the-apache2-config",level:4},{value:"Tweaking connections",id:"tweaking-connections",level:4},{value:"Rate limiting",id:"rate-limiting",level:4},{value:"Load balancing &amp; failover",id:"load-balancing--failover",level:3},{value:"Stress testing",id:"stress-testing",level:3}],d={toc:p};function c(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"RPC servers allow access into the polkadot/kusama and parachains ecosystem. Stakeworld runs multiple public archive RPC servers: "),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Polkadot: ",(0,r.kt)("a",{parentName:"li",href:"https://polkadot.js.org/apps/?rpc=wss://dot-rpc.stakeworld.io"},"dot-rpc.stakeworld.io")),(0,r.kt)("li",{parentName:"ul"},"Kusama: ",(0,r.kt)("a",{parentName:"li",href:"https://polkadot.js.org/apps/?rpc=wss://ksm-rpc.stakeworld.io"},"ksm-rpc.stakeworld.io"),"  "),(0,r.kt)("li",{parentName:"ul"},"Westend: ",(0,r.kt)("a",{parentName:"li",href:"https://polkadot.js.org/apps/?rpc=wss://wnd-rpc.stakeworld.io"},"wnd-rpc.stakeworld.io"),"  "))),(0,r.kt)("h2",{id:"live-stakeworld-rpc-data"},"Live stakeworld RPC data"),(0,r.kt)("iframe",{src:"https://monitor.stakeworld.io/public-dashboards/cb9695f06cc94b9d878d5c77fe8017d0",width:"700",height:"700",frameborder:"0"}),(0,r.kt)("h2",{id:"setting-up-your-own-secure-rpc-server"},"Setting up your own secure RPC server"),(0,r.kt)("p",null,"To access the polkadot, kusama and parachains networks we need some kind of access into the network. This can be achieved by ",(0,r.kt)("a",{parentName:"p",href:"./validate"},"setting up a node")," with a RPC server and allowing access to that RPC server via a secure websocket (wss) port. The default node setup already exposes a non secure ws socket on port 9944 (which can optionally be changed by the ",(0,r.kt)("inlineCode",{parentName:"p"},"--ws-port")," parameter), but for a more usable situation we need a secure websocket which is accesible through a public port."),(0,r.kt)("h3",{id:"archive-node-vs-pruned-node"},"Archive node vs pruned node"),(0,r.kt)("p",null,"A pruned node knows only the recent information about the network and not its full history. Most frequently done actions can be done with a pruned node, for example see account balances, make transfers, setup session keys, staking, etc. An archive node has the full history (database) of the network and can be queried in all kind of ways, give information about transfers since the network started, historical balances, advanced queries about past events, etc. "),(0,r.kt)("p",null,"An archive node requires a lot more ",(0,r.kt)("a",{parentName:"p",href:"./snapshot"},"diskspace"),".  For an archive node you need the options ",(0,r.kt)("inlineCode",{parentName:"p"},"--state-pruning archive --blocks-pruning archive")," in your startup settings.\n",(0,r.kt)("img",{alt:"snapsize",src:n(2307).Z,width:"800",height:"300"})),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Inclusion in the Polkadot.js UI requires an archive node.")),(0,r.kt)("h3",{id:"secure-the-rpc-server"},"Secure the RPC server"),(0,r.kt)("p",null,"Via the node startup settings you can choose ",(0,r.kt)("strong",{parentName:"p"},"what")," to expose with ",(0,r.kt)("strong",{parentName:"p"},"how many")," connections ",(0,r.kt)("strong",{parentName:"p"},"from where")," through your rpc server."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"How many"),": You can set your maximum connections through ",(0,r.kt)("inlineCode",{parentName:"p"},"--ws-max-connections"),", for example ",(0,r.kt)("inlineCode",{parentName:"p"},"--ws-max-connections 100")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"From where"),": by default localhost and the polkadot.js are allowed to access the RPC server, you can change this by setting ",(0,r.kt)("inlineCode",{parentName:"p"},"--rpc-cors"),", to allow access from everywhere you need ",(0,r.kt)("inlineCode",{parentName:"p"},"--rpc-cors all")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"What"),": you can limit the methods to use with ",(0,r.kt)("inlineCode",{parentName:"p"},"--rpc-methods"),", an easy way to set this to a safe mode is ",(0,r.kt)("inlineCode",{parentName:"p"},"--rpc-methods Safe")),(0,r.kt)("h3",{id:"secure-the-ws-port"},"Secure the ws port"),(0,r.kt)("p",null,'The ws port is preferably exposed from the outside as a ssl secured wss port. The "',(0,r.kt)("a",{parentName:"p",href:"https://wiki.polkadot.network/docs/maintain-wss"},"maintain wss"),"\" on the wiki already covers a lot of information about this, especially in relation to setting it up in a nginx configuration. This page is focussed more on a apache2 but principles are the same. The main idea is converting the non secure ws port to a secure wss port by putting it behind a ssl enabled proxy. So from outside one see's the ssl enabled apache2/nginx/other proxy server, witch redirect the request to the internal rpc node."),(0,r.kt)("h3",{id:"using-apache2-for-proxying"},"Using Apache2 for proxying"),(0,r.kt)("p",null,"Apache2 is a little heavier then nginx but also has some more tweaking posibilities. You can run it in different modes, prefork, worker or event. We chose ",(0,r.kt)("a",{parentName:"p",href:"https://httpd.apache.org/docs/2.4/mod/event.html"},"event")," since this seems best suited for high load enviroments. Downside is that you can't use the default php module and need to enable it via php-fm. The proxy_wstunnel module works out of the box. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"apt install apache2\na2dismod mpm_prefork\na2enmod mpm_event proxy proxy_html proxy_http proxy_wstunnel rewrite ssl\n")),(0,r.kt)("p",null,"If you want to enable php"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"apt install php-fpm\na2enmod proxy_fcgi setenvif\n")),(0,r.kt)("h4",{id:"enabling-ssl-through-letsencrypt"},"Enabling ssl through letsencrypt"),(0,r.kt)("p",null,"There are multiple options for getting a ssl certificate, one popular (and free) being letsencrypt. Obtaining a letsencrypt certificate can be done through for example ",(0,r.kt)("a",{parentName:"p",href:"https://certbot.eff.org/"},"certbot")," or ",(0,r.kt)("a",{parentName:"p",href:"https://go-acme.github.io/lego/dns/"},"lego")," (which has more dns provider options)."),(0,r.kt)("h4",{id:"add-the-proxy-to-the-apache2-config"},"Add the proxy to the apache2 config"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://httpd.apache.org/docs/2.4/mod/mod_proxy_wstunnel.html"},"mod_proxy_wstunnel")," provides ",(0,r.kt)("em",{parentName:"p"},"support for the tunnelling of web socket connections to a backend websockets server. The connection is automatically upgraded to a websocket connection"),". In a ssl enabled virtualhost add:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-apacheconf"},"SSLProxyEngine on\nProxyRequests off\n\nProxyPass / ws://localhost:9944\nProxyPassReverse / ws://localhost:9944\n")),(0,r.kt)("p",null,"Older versions of mod_proxy_wstunnel do not upgrade the connection automatically and will need the following config added:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-apacheconf"},"RewriteEngine on\nRewriteCond %{HTTP:Upgrade} websocket [NC]\nRewriteRule /(.*) ws://localhost:9944/$1 [P,L]\nRewriteRule /(.*) http://localhost:9944/$1 [P,L]\n")),(0,r.kt)("h4",{id:"tweaking-connections"},"Tweaking connections"),(0,r.kt)("p",null,"The number of connections is limited by the node itself (",(0,r.kt)("inlineCode",{parentName:"p"},"--ws-max-connections"),") but also by the number of threads available on the proxy server. For apache2 this can be tweaked by editing ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/apache2/mods-enabled/mpm_event.conf")),(0,r.kt)("p",null,"We are using: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-apacheconf"},"StartServers         4\nMinSpareThreads      25\nMaxSpareThreads      75\nThreadLimit      128\nThreadsPerChild      128\nMaxRequestWorkers    896\nMaxConnectionsPerChild   0\n")),(0,r.kt)("h4",{id:"rate-limiting"},"Rate limiting"),(0,r.kt)("p",null,"Theoretically one client could use all connections/resources, draining the resources of the server and making it inaccessible. This can be countered by rate limiting the connections, for example by using mod_qos:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"apt install libapache2-mod-qos\na2enmod qos\n")),(0,r.kt)("p",null,"And edit ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/apache2/mods-available/qos.conf")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"  # allows max 50 connections from a single ip address:\n  QS_SrvMaxConnPerIP                                 50\n")),(0,r.kt)("p",null,"Be carefull when running behind a load balancer (for example cloudflare) because the load balancer will only use a few ip's and thus can trigger the rate limit, iso in this case it is better to use the rate limit options from the load balancer itself."),(0,r.kt)("h3",{id:"load-balancing--failover"},"Load balancing & failover"),(0,r.kt)("p",null,"With multiple servers it is possible to build a load balancing or even a failover construction. A simple load balancing can be a ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Round-robin_DNS"},"round robin-robin dns")," up to a more advanced (dedicated) load balancer or a content delivery network (CDN) like cloudflare.   "),(0,r.kt)("h3",{id:"stress-testing"},"Stress testing"),(0,r.kt)("p",null,"You can test basic usage by accessing your server through the polkadot.js UI as a custom endpoint. For example staking target display is RPC intensive and can give you an indication of performance. "),(0,r.kt)("p",null,"There are also more dedicated stress testing solutions, we have forked the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/dwellir-public/artillery-engine-substrate"},"Dwellir repository")," for our testing."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash\nnvm install --lts\nnpm install -g yarn\nyarn global add artillery\nyarn global add artillery-engine-substrate\ncd /opt\ngit clone git@github.com:stakeworld/stakeworld-rpc-artillery.git\ncd /opt/stakeworld-rpc-artillery\nyarn\n./run.sh\n")),(0,r.kt)("p",null,"After the ",(0,r.kt)("inlineCode",{parentName:"p"},"run.sh")," you can edit some variables like how many connections per second, the wss node, etc. The following is a test run for 10 seconds with 10 connections per second and maximum 20 concurrent users. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'config:\n  target: "wss://ksm-rpc.stakeworld.io"\n  processor: "./functions.js"\n  phases:\n    - duration: 10\n      arrivalRate: 10\n      maxVusers: 20\n')),(0,r.kt)("p",null,"After this you get some info about the run and a report is created, which can be used for further diagnostics"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"--------------------------------\nSummary report @ 23:38:40(+0100)\n--------------------------------\n\nvusers.completed: .............................................................. 100\nvusers.created: ................................................................ 100\nvusers.created_by_name.balance: ................................................ 35\nvusers.created_by_name.complex_call: ........................................... 33\nvusers.created_by_name.headers_blocks: ......................................... 32\nvusers.failed: ................................................................. 0\nvusers.session_length:\n  min: ......................................................................... 231.7\n  max: ......................................................................... 656.1\n  median: ...................................................................... 361.5\n  p95: ......................................................................... 518.1\n  p99: ......................................................................... 645.6\nws.messages_sent: .............................................................. 163\nws.send_rate: .................................................................. 29/sec\nLog file: reports/report.json\nReport generated: reports/report.html\n")))}c.isMDXComponent=!0},2307:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/png;base64,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"}}]);