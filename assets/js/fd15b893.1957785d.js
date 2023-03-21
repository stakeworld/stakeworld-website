"use strict";(self.webpackChunkstakeworld=self.webpackChunkstakeworld||[]).push([[961],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),h=r,A=u["".concat(l,".").concat(h)]||u[h]||d[h]||o;return n?a.createElement(A,s(s({ref:t},p),{},{components:n})):a.createElement(A,s({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1647:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=n(3117),r=(n(7294),n(3905));const o={id:"rpc",title:"RPC server",description:"Setting up a secure RPC server",slug:"/rpc",sidebar_position:4,keywords:["rpc","rpc server","wss","ws","polkadot.js","validator","polkadot","kusama"]},s=void 0,i={unversionedId:"rpc",id:"rpc",title:"RPC server",description:"Setting up a secure RPC server",source:"@site/docs/rpc.mdx",sourceDirName:".",slug:"/rpc",permalink:"/docs/rpc",draft:!1,editUrl:"https://github.com/stakeworld/website/edit/master/docs/rpc.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"rpc",title:"RPC server",description:"Setting up a secure RPC server",slug:"/rpc",sidebar_position:4,keywords:["rpc","rpc server","wss","ws","polkadot.js","validator","polkadot","kusama"]},sidebar:"tutorialSidebar",previous:{title:"Snapshot",permalink:"/docs/snapshot"},next:{title:"Linux tips",permalink:"/docs/tools"}},l={},c=[{value:"Live stakeworld RPC data",id:"live-stakeworld-rpc-data",level:2},{value:"Setting up your own secure RPC server",id:"setting-up-your-own-secure-rpc-server",level:2},{value:"Archive node vs pruned node",id:"archive-node-vs-pruned-node",level:3},{value:"Secure the RPC server",id:"secure-the-rpc-server",level:3},{value:"Secure the ws port",id:"secure-the-ws-port",level:3},{value:"Using Apache2 for proxying",id:"using-apache2-for-proxying",level:3},{value:"Enabling ssl through letsencrypt",id:"enabling-ssl-through-letsencrypt",level:4},{value:"Add the proxy to the apache2 config",id:"add-the-proxy-to-the-apache2-config",level:4},{value:"Tweaking connections",id:"tweaking-connections",level:4},{value:"Rate limiting",id:"rate-limiting",level:4},{value:"Load balancing &amp; failover",id:"load-balancing--failover",level:3},{value:"Stress testing",id:"stress-testing",level:3}],p={toc:c};function d(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"RPC servers allow access into the polkadot/kusama and parachains ecosystem. Stakeworld runs two public, multi location, load balanced archive RPC servers: "),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Polkadot: ",(0,r.kt)("a",{parentName:"li",href:"https://polkadot.js.org/apps/?rpc=wss://dot-rpc.stakeworld.io"},"dot-rpc.stakeworld.io")),(0,r.kt)("li",{parentName:"ul"},"Kusama: ",(0,r.kt)("a",{parentName:"li",href:"https://polkadot.js.org/apps/?rpc=wss://ksm-rpc.stakeworld.io"},"ksm-rpc.stakeworld.io"),"  "))),(0,r.kt)("h2",{id:"live-stakeworld-rpc-data"},"Live stakeworld RPC data"),(0,r.kt)("iframe",{src:"https://monitor.stakeworld.io/public-dashboards/cb9695f06cc94b9d878d5c77fe8017d0",width:"700",height:"700",frameborder:"0"}),(0,r.kt)("h2",{id:"setting-up-your-own-secure-rpc-server"},"Setting up your own secure RPC server"),(0,r.kt)("p",null,"To access the polkadot, kusama and parachains networks we need some kind of access into the network. This can be achieved by ",(0,r.kt)("a",{parentName:"p",href:"./validate"},"setting up a node")," with a RPC server and allowing access to that RPC server via a secure websocket (wss) port. The default node setup already exposes a non secure ws socket on port 9944 (which can optionally be changed by the ",(0,r.kt)("inlineCode",{parentName:"p"},"--ws-port")," parameter), but for a more usable situation we need a secure websocket which is accesible through a public port."),(0,r.kt)("h3",{id:"archive-node-vs-pruned-node"},"Archive node vs pruned node"),(0,r.kt)("p",null,"A pruned node knows only the recent information about the network and not its full history. Most frequently done actions can be done with a pruned node, for example see account balances, make transfers, setup session keys, staking, etc. An archive node has the full history (database) of the network and can be queried in all kind of ways, give information about transfers since the network started, historical balances, advanced queries about past events, etc. "),(0,r.kt)("p",null,"An archive node requires a lot more ",(0,r.kt)("a",{parentName:"p",href:"./snapshot"},"diskspace"),".  For an archive node you need the options ",(0,r.kt)("inlineCode",{parentName:"p"},"--state-pruning archive --blocks-pruning archive")," in your startup settings.\n",(0,r.kt)("img",{alt:"snapsize",src:n(2307).Z,width:"800",height:"300"})),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Inclusion in the Polkadot.js UI requires an archive node.")),(0,r.kt)("h3",{id:"secure-the-rpc-server"},"Secure the RPC server"),(0,r.kt)("p",null,"Via the node startup settings you can choose ",(0,r.kt)("strong",{parentName:"p"},"what")," to expose with ",(0,r.kt)("strong",{parentName:"p"},"how many")," connections ",(0,r.kt)("strong",{parentName:"p"},"from where")," through your rpc server."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"How many"),": You can set your maximum connections through ",(0,r.kt)("inlineCode",{parentName:"p"},"--ws-max-connections"),", for example ",(0,r.kt)("inlineCode",{parentName:"p"},"--ws-max-connections 100")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"From where"),": by default localhost and the polkadot.js are allowed to access the RPC server, you can change this by setting ",(0,r.kt)("inlineCode",{parentName:"p"},"--rpc-cors"),", to allow access from everywhere you need ",(0,r.kt)("inlineCode",{parentName:"p"},"--rpc-cors all")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"What"),": you can limit the methods to use with ",(0,r.kt)("inlineCode",{parentName:"p"},"--rpc-methods"),", an easy way to set this to a safe mode is ",(0,r.kt)("inlineCode",{parentName:"p"},"--rpc-methods Safe")),(0,r.kt)("h3",{id:"secure-the-ws-port"},"Secure the ws port"),(0,r.kt)("p",null,'The ws port is preferably exposed from the outside as a ssl secured wss port. The "',(0,r.kt)("a",{parentName:"p",href:"https://wiki.polkadot.network/docs/maintain-wss"},"maintain wss"),"\" on the wiki already covers a lot of information about this, especially in relation to setting it up in a nginx configuration. This page is focussed more on a apache2 but principles are the same. The main idea is converting the non secure ws port to a secure wss port by putting it behind a ssl enabled proxy. So from outside one see's the ssl enabled apache2/nginx/other proxy server, witch redirect the request to the internal rpc node."),(0,r.kt)("h3",{id:"using-apache2-for-proxying"},"Using Apache2 for proxying"),(0,r.kt)("p",null,"Apache2 is a little heavier then nginx but also has some more tweaking posibilities. You can run it in different modes, prefork, worker or event. We chose ",(0,r.kt)("a",{parentName:"p",href:"https://httpd.apache.org/docs/2.4/mod/event.html"},"event")," since this seems best suited for high load enviroments. Downside is that you can't use the default php module and need to enable it via php-fm. The proxy_wstunnel module works out of the box. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"apt install apache2\na2dismod mpm_prefork\na2enmod mpm_event proxy proxy_html proxy_http proxy_wstunnel rewrite ssl\n")),(0,r.kt)("p",null,"If you want to enable php"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"apt install php-fpm\na2enmod proxy_fcgi setenvif\n")),(0,r.kt)("h4",{id:"enabling-ssl-through-letsencrypt"},"Enabling ssl through letsencrypt"),(0,r.kt)("p",null,"There are multiple options for getting a ssl certificate, one popular (and free) being letsencrypt. Obtaining a letsencrypt certificate can be done through for example ",(0,r.kt)("a",{parentName:"p",href:"https://certbot.eff.org/"},"certbot")," or ",(0,r.kt)("a",{parentName:"p",href:"https://go-acme.github.io/lego/dns/"},"lego")," (which has more dns provider options)."),(0,r.kt)("h4",{id:"add-the-proxy-to-the-apache2-config"},"Add the proxy to the apache2 config"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://httpd.apache.org/docs/2.4/mod/mod_proxy_wstunnel.html"},"mod_proxy_wstunnel")," provides ",(0,r.kt)("em",{parentName:"p"},"support for the tunnelling of web socket connections to a backend websockets server. The connection is automatically upgraded to a websocket connection"),". In a ssl enabled virtualhost add:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-apacheconf"},"SSLProxyEngine on\nProxyRequests off\n\nProxyPass / ws://localhost:9944\nProxyPassReverse / ws://localhost:9944\n")),(0,r.kt)("p",null,"Older versions of mod_proxy_wstunnel do not upgrade the connection automatically and will need the following config added:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-apacheconf"},"RewriteEngine on\nRewriteCond %{HTTP:Upgrade} websocket [NC]\nRewriteRule /(.*) ws://localhost:9944/$1 [P,L]\nRewriteRule /(.*) http://localhost:9944/$1 [P,L]\n")),(0,r.kt)("h4",{id:"tweaking-connections"},"Tweaking connections"),(0,r.kt)("p",null,"The number of connections is limited by the node itself (",(0,r.kt)("inlineCode",{parentName:"p"},"--ws-max-connections"),") but also by the number of threads available on the proxy server. For apache2 this can be tweaked by editing ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/apache2/mods-enabled/mpm_event.conf")),(0,r.kt)("p",null,"We are using: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-apacheconf"},"StartServers         4\nMinSpareThreads      25\nMaxSpareThreads      75\nThreadLimit      128\nThreadsPerChild      128\nMaxRequestWorkers    896\nMaxConnectionsPerChild   0\n")),(0,r.kt)("h4",{id:"rate-limiting"},"Rate limiting"),(0,r.kt)("p",null,"Theoretically one client could use all connections/resources, draining the resources of the server and making it inaccessible. This can be countered by rate limiting the connections, for example by using mod_qos:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"apt install libapache2-mod-qos\na2enmod qos\n")),(0,r.kt)("p",null,"And edit ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/apache2/mods-available/qos.conf")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"  # allows max 50 connections from a single ip address:\n  QS_SrvMaxConnPerIP                                 50\n")),(0,r.kt)("p",null,"Be carefull when running behind a load balancer (for example cloudflare) because the load balancer will only use a few ip's and thus can trigger the rate limit, iso in this case it is better to use the rate limit options from the load balancer itself."),(0,r.kt)("h3",{id:"load-balancing--failover"},"Load balancing & failover"),(0,r.kt)("p",null,"With multiple servers it is possible to build a load balancing or even a failover construction. A simple load balancing can be a ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Round-robin_DNS"},"round robin-robin dns")," up to a more advanced (dedicated) load balancer or a content delivery network (CDN) like cloudflare.   "),(0,r.kt)("h3",{id:"stress-testing"},"Stress testing"),(0,r.kt)("p",null,"You can test basic usage by accessing your server through the polkadot.js UI as a custom endpoint. For example staking target display is RPC intensive and can give you an indication of performance. "),(0,r.kt)("p",null,"There are also more dedicated stress testing solutions, we have forked the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/dwellir-public/artillery-engine-substrate"},"Dwellir repository")," for our testing."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash\nnvm install --lts\nnpm install -g yarn\nyarn global add artillery\nyarn global add artillery-engine-substrate\ncd /opt\ngit clone git@github.com:stakeworld/stakeworld-rpc-artillery.git\ncd /opt/stakeworld-rpc-artillery\nyarn\n./run.sh\n")),(0,r.kt)("p",null,"After the ",(0,r.kt)("inlineCode",{parentName:"p"},"run.sh")," you can edit some variables like how many connections per second, the wss node, etc. The following is a test run for 10 seconds with 10 connections per second and maximum 20 concurrent users. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'config:\n  target: "wss://ksm-rpc.stakeworld.io"\n  processor: "./functions.js"\n  phases:\n    - duration: 10\n      arrivalRate: 10\n      maxVusers: 20\n')),(0,r.kt)("p",null,"After this you get some info about the run and a report is created, which can be used for further diagnostics"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"--------------------------------\nSummary report @ 23:38:40(+0100)\n--------------------------------\n\nvusers.completed: .............................................................. 100\nvusers.created: ................................................................ 100\nvusers.created_by_name.balance: ................................................ 35\nvusers.created_by_name.complex_call: ........................................... 33\nvusers.created_by_name.headers_blocks: ......................................... 32\nvusers.failed: ................................................................. 0\nvusers.session_length:\n  min: ......................................................................... 231.7\n  max: ......................................................................... 656.1\n  median: ...................................................................... 361.5\n  p95: ......................................................................... 518.1\n  p99: ......................................................................... 645.6\nws.messages_sent: .............................................................. 163\nws.send_rate: .................................................................. 29/sec\nLog file: reports/report.json\nReport generated: reports/report.html\n")))}d.isMDXComponent=!0},2307:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/png;base64,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"}}]);