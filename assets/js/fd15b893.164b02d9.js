"use strict";(self.webpackChunkstakeworld=self.webpackChunkstakeworld||[]).push([[961],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),h=a,A=u["".concat(l,".").concat(h)]||u[h]||d[h]||o;return n?r.createElement(A,s(s({ref:t},p),{},{components:n})):r.createElement(A,s({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1647:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=n(3117),a=(n(7294),n(3905));const o={id:"rpc",title:"RPC server",description:"Setting up a secure RPC server",slug:"/rpc",sidebar_position:4,keywords:["rpc","rpc server","wss","ws","polkadot.js","validator","polkadot","kusama","westend"]},s=void 0,i={unversionedId:"rpc",id:"rpc",title:"RPC server",description:"Setting up a secure RPC server",source:"@site/docs/rpc.mdx",sourceDirName:".",slug:"/rpc",permalink:"/docs/rpc",draft:!1,editUrl:"https://github.com/stakeworld/website/edit/master/docs/rpc.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"rpc",title:"RPC server",description:"Setting up a secure RPC server",slug:"/rpc",sidebar_position:4,keywords:["rpc","rpc server","wss","ws","polkadot.js","validator","polkadot","kusama","westend"]},sidebar:"tutorialSidebar",previous:{title:"Database sizes",permalink:"/docs/dbsize"},next:{title:"Linux tips",permalink:"/docs/tools"}},l={},c=[{value:"Live stakeworld RPC data",id:"live-stakeworld-rpc-data",level:2},{value:"Setting up your own secure RPC server",id:"setting-up-your-own-secure-rpc-server",level:2},{value:"Archive node vs pruned node",id:"archive-node-vs-pruned-node",level:3},{value:"Secure the RPC server",id:"secure-the-rpc-server",level:3},{value:"Secure the ws port",id:"secure-the-ws-port",level:3},{value:"Using Apache2 for proxying",id:"using-apache2-for-proxying",level:3},{value:"Enabling ssl through letsencrypt",id:"enabling-ssl-through-letsencrypt",level:4},{value:"Add the proxy to the apache2 config",id:"add-the-proxy-to-the-apache2-config",level:4},{value:"Tweaking connections",id:"tweaking-connections",level:4},{value:"Rate limiting",id:"rate-limiting",level:4},{value:"Load balancing &amp; failover",id:"load-balancing--failover",level:3},{value:"Stress testing",id:"stress-testing",level:3}],p={toc:c};function d(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"RPC servers allow access into the polkadot/kusama and parachains ecosystem. Stakeworld runs multiple public archive RPC servers: "),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"Polkadot: ",(0,a.kt)("a",{parentName:"li",href:"https://polkadot.js.org/apps/?rpc=wss://dot-rpc.stakeworld.io"},"dot-rpc.stakeworld.io")),(0,a.kt)("li",{parentName:"ul"},"Kusama: ",(0,a.kt)("a",{parentName:"li",href:"https://polkadot.js.org/apps/?rpc=wss://ksm-rpc.stakeworld.io"},"ksm-rpc.stakeworld.io"),"  "),(0,a.kt)("li",{parentName:"ul"},"Westend: ",(0,a.kt)("a",{parentName:"li",href:"https://polkadot.js.org/apps/?rpc=wss://wnd-rpc.stakeworld.io"},"wnd-rpc.stakeworld.io"),"  "))),(0,a.kt)("h2",{id:"live-stakeworld-rpc-data"},"Live stakeworld RPC data"),(0,a.kt)("iframe",{src:"https://monitor.stakeworld.io/public-dashboards/cb9695f06cc94b9d878d5c77fe8017d0",width:"700",height:"1050",frameborder:"0"}),(0,a.kt)("h2",{id:"setting-up-your-own-secure-rpc-server"},"Setting up your own secure RPC server"),(0,a.kt)("p",null,"To access the polkadot, kusama and parachains networks we need some kind of access into the network. This can be achieved by ",(0,a.kt)("a",{parentName:"p",href:"./validate"},"setting up a node")," with a RPC server and allowing access to that RPC server via a secure websocket (wss) port. The default node setup already exposes a non secure ws socket on port 9944 (which can optionally be changed by the ",(0,a.kt)("inlineCode",{parentName:"p"},"--ws-port")," parameter), but for a more usable situation we need a secure websocket which is accesible through a public port."),(0,a.kt)("h3",{id:"archive-node-vs-pruned-node"},"Archive node vs pruned node"),(0,a.kt)("p",null,"A pruned node knows only the recent information about the network and not its full history. Most frequently done actions can be done with a pruned node, for example see account balances, make transfers, setup session keys, staking, etc. An archive node has the full history (database) of the network and can be queried in all kind of ways, give information about transfers since the network started, historical balances, advanced queries about past events, etc. "),(0,a.kt)("p",null,"An archive node requires a lot more ",(0,a.kt)("a",{parentName:"p",href:"./snapshot"},"diskspace"),".  For an archive node you need the options ",(0,a.kt)("inlineCode",{parentName:"p"},"--state-pruning archive --blocks-pruning archive")," in your startup settings.\n",(0,a.kt)("img",{alt:"snapsize",src:n(2307).Z,width:"800",height:"300"})),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Inclusion in the Polkadot.js UI requires an archive node.")),(0,a.kt)("h3",{id:"secure-the-rpc-server"},"Secure the RPC server"),(0,a.kt)("p",null,"Via the node startup settings you can choose ",(0,a.kt)("strong",{parentName:"p"},"what")," to expose with ",(0,a.kt)("strong",{parentName:"p"},"how many")," connections ",(0,a.kt)("strong",{parentName:"p"},"from where")," through your rpc server."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"How many"),": You can set your maximum connections through ",(0,a.kt)("inlineCode",{parentName:"p"},"--ws-max-connections"),", for example ",(0,a.kt)("inlineCode",{parentName:"p"},"--ws-max-connections 100")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"From where"),": by default localhost and the polkadot.js are allowed to access the RPC server, you can change this by setting ",(0,a.kt)("inlineCode",{parentName:"p"},"--rpc-cors"),", to allow access from everywhere you need ",(0,a.kt)("inlineCode",{parentName:"p"},"--rpc-cors all")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"What"),": you can limit the methods to use with ",(0,a.kt)("inlineCode",{parentName:"p"},"--rpc-methods"),", an easy way to set this to a safe mode is ",(0,a.kt)("inlineCode",{parentName:"p"},"--rpc-methods Safe")),(0,a.kt)("h3",{id:"secure-the-ws-port"},"Secure the ws port"),(0,a.kt)("p",null,'The ws port is preferably exposed from the outside as a ssl secured wss port. The "',(0,a.kt)("a",{parentName:"p",href:"https://wiki.polkadot.network/docs/maintain-wss"},"maintain wss"),"\" on the wiki already covers a lot of information about this, especially in relation to setting it up in a nginx configuration. This page is focussed more on a apache2 but principles are the same. The main idea is converting the non secure ws port to a secure wss port by putting it behind a ssl enabled proxy. So from outside one see's the ssl enabled apache2/nginx/other proxy server, witch redirect the request to the internal rpc node."),(0,a.kt)("h3",{id:"using-apache2-for-proxying"},"Using Apache2 for proxying"),(0,a.kt)("p",null,"Apache2 is a little heavier then nginx but also has some more tweaking posibilities. You can run it in different modes, prefork, worker or event. We chose ",(0,a.kt)("a",{parentName:"p",href:"https://httpd.apache.org/docs/2.4/mod/event.html"},"event")," since this seems best suited for high load enviroments. Downside is that you can't use the default php module and need to enable it via php-fm. The proxy_wstunnel module works out of the box. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"apt install apache2\na2dismod mpm_prefork\na2enmod mpm_event proxy proxy_html proxy_http proxy_wstunnel rewrite ssl\n")),(0,a.kt)("p",null,"If you want to enable php"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"apt install php-fpm\na2enmod proxy_fcgi setenvif\n")),(0,a.kt)("h4",{id:"enabling-ssl-through-letsencrypt"},"Enabling ssl through letsencrypt"),(0,a.kt)("p",null,"There are multiple options for getting a ssl certificate, one popular (and free) being letsencrypt. Obtaining a letsencrypt certificate can be done through for example ",(0,a.kt)("a",{parentName:"p",href:"https://certbot.eff.org/"},"certbot")," or ",(0,a.kt)("a",{parentName:"p",href:"https://go-acme.github.io/lego/dns/"},"lego")," (which has more dns provider options)."),(0,a.kt)("h4",{id:"add-the-proxy-to-the-apache2-config"},"Add the proxy to the apache2 config"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://httpd.apache.org/docs/2.4/mod/mod_proxy_wstunnel.html"},"mod_proxy_wstunnel")," provides ",(0,a.kt)("em",{parentName:"p"},"support for the tunnelling of web socket connections to a backend websockets server. The connection is automatically upgraded to a websocket connection"),". In a ssl enabled virtualhost add:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-apacheconf"},"SSLProxyEngine on\nProxyRequests off\n\nProxyPass / ws://localhost:9944\nProxyPassReverse / ws://localhost:9944\n")),(0,a.kt)("p",null,"Older versions of mod_proxy_wstunnel do not upgrade the connection automatically and will need the following config added:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-apacheconf"},"RewriteEngine on\nRewriteCond %{HTTP:Upgrade} websocket [NC]\nRewriteRule /(.*) ws://localhost:9944/$1 [P,L]\nRewriteRule /(.*) http://localhost:9944/$1 [P,L]\n")),(0,a.kt)("h4",{id:"tweaking-connections"},"Tweaking connections"),(0,a.kt)("p",null,"The number of connections is limited by the node itself (",(0,a.kt)("inlineCode",{parentName:"p"},"--ws-max-connections"),") but also by the number of threads available on the proxy server. For apache2 this can be tweaked by editing ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/apache2/mods-enabled/mpm_event.conf")),(0,a.kt)("p",null,"We are using: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-apacheconf"},"StartServers         4\nMinSpareThreads      25\nMaxSpareThreads      75\nThreadLimit      128\nThreadsPerChild      128\nMaxRequestWorkers    896\nMaxConnectionsPerChild   0\n")),(0,a.kt)("h4",{id:"rate-limiting"},"Rate limiting"),(0,a.kt)("p",null,"Theoretically one client could use all connections/resources, draining the resources of the server and making it inaccessible. This can be countered by rate limiting the connections, for example by using mod_qos:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"apt install libapache2-mod-qos\na2enmod qos\n")),(0,a.kt)("p",null,"And edit ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/apache2/mods-available/qos.conf")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"  # allows max 50 connections from a single ip address:\n  QS_SrvMaxConnPerIP                                 50\n")),(0,a.kt)("p",null,"Be carefull when running behind a load balancer (for example cloudflare) because the load balancer will only use a few ip's and thus can trigger the rate limit, iso in this case it is better to use the rate limit options from the load balancer itself."),(0,a.kt)("h3",{id:"load-balancing--failover"},"Load balancing & failover"),(0,a.kt)("p",null,"With multiple servers it is possible to build a load balancing or even a failover construction. A simple load balancing can be a ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Round-robin_DNS"},"round robin-robin dns")," up to a more advanced (dedicated) load balancer or a content delivery network (CDN) like cloudflare.   "),(0,a.kt)("h3",{id:"stress-testing"},"Stress testing"),(0,a.kt)("p",null,"You can test basic usage by accessing your server through the polkadot.js UI as a custom endpoint. For example staking target display is RPC intensive and can give you an indication of performance. "),(0,a.kt)("p",null,"There are also more dedicated stress testing solutions, we have forked the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/dwellir-public/artillery-engine-substrate"},"Dwellir repository")," for our testing."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash\nnvm install --lts\nnpm install -g yarn\nyarn global add artillery\nyarn global add artillery-engine-substrate\ncd /opt\ngit clone git@github.com:stakeworld/stakeworld-rpc-artillery.git\ncd /opt/stakeworld-rpc-artillery\nyarn\n./run.sh\n")),(0,a.kt)("p",null,"After the ",(0,a.kt)("inlineCode",{parentName:"p"},"run.sh")," you can edit some variables like how many connections per second, the wss node, etc. The following is a test run for 10 seconds with 10 connections per second and maximum 20 concurrent users. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'config:\n  target: "wss://ksm-rpc.stakeworld.io"\n  processor: "./functions.js"\n  phases:\n    - duration: 10\n      arrivalRate: 10\n      maxVusers: 20\n')),(0,a.kt)("p",null,"After this you get some info about the run and a report is created, which can be used for further diagnostics"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"--------------------------------\nSummary report @ 23:38:40(+0100)\n--------------------------------\n\nvusers.completed: .............................................................. 100\nvusers.created: ................................................................ 100\nvusers.created_by_name.balance: ................................................ 35\nvusers.created_by_name.complex_call: ........................................... 33\nvusers.created_by_name.headers_blocks: ......................................... 32\nvusers.failed: ................................................................. 0\nvusers.session_length:\n  min: ......................................................................... 231.7\n  max: ......................................................................... 656.1\n  median: ...................................................................... 361.5\n  p95: ......................................................................... 518.1\n  p99: ......................................................................... 645.6\nws.messages_sent: .............................................................. 163\nws.send_rate: .................................................................. 29/sec\nLog file: reports/report.json\nReport generated: reports/report.html\n")))}d.isMDXComponent=!0},2307:(e,t,n)=>{n.d(t,{Z:()=>r});const r="data:image/png;base64,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"}}]);