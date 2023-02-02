"use strict";(self.webpackChunkstakeworld=self.webpackChunkstakeworld||[]).push([[961],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),h=a,A=u["".concat(l,".").concat(h)]||u[h]||d[h]||o;return n?r.createElement(A,s(s({ref:t},p),{},{components:n})):r.createElement(A,s({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1647:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=n(3117),a=(n(7294),n(3905));const o={id:"rpc",title:"RPC server",description:"Setting up a secure RPC server",slug:"/rpc",sidebar_position:4,keywords:["rpc","rpc server","wss","ws","polkadot.js","validator","polkadot","kusama"]},s=void 0,i={unversionedId:"rpc",id:"rpc",title:"RPC server",description:"Setting up a secure RPC server",source:"@site/docs/rpc.mdx",sourceDirName:".",slug:"/rpc",permalink:"/docs/rpc",draft:!1,editUrl:"https://github.com/stakeworld/website/edit/master/docs/rpc.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"rpc",title:"RPC server",description:"Setting up a secure RPC server",slug:"/rpc",sidebar_position:4,keywords:["rpc","rpc server","wss","ws","polkadot.js","validator","polkadot","kusama"]},sidebar:"tutorialSidebar",previous:{title:"Snapshot",permalink:"/docs/snapshot"},next:{title:"Linux tips",permalink:"/docs/tools"}},l={},c=[{value:"Live stakeworld RPC data",id:"live-stakeworld-rpc-data",level:2},{value:"Setting up your own secure RPC server",id:"setting-up-your-own-secure-rpc-server",level:2},{value:"Archive node vs pruned node",id:"archive-node-vs-pruned-node",level:3},{value:"Secure the RPC server",id:"secure-the-rpc-server",level:3},{value:"Secure the ws port",id:"secure-the-ws-port",level:3},{value:"Using Apache2 for proxying",id:"using-apache2-for-proxying",level:3},{value:"Enabling ssl through letsencrypt",id:"enabling-ssl-through-letsencrypt",level:4},{value:"Add the proxy to the apache2 config",id:"add-the-proxy-to-the-apache2-config",level:4},{value:"Tweaking connections",id:"tweaking-connections",level:4},{value:"Rate limiting",id:"rate-limiting",level:4},{value:"Load balancing &amp; failover",id:"load-balancing--failover",level:3},{value:"Stress testing",id:"stress-testing",level:3}],p={toc:c};function d(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"RPC servers allow access into the polkadot/kusama and parachains ecosystem. Stakeworld runs two public, multi location, load balanced archive RPC servers: "),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"Polkadot: ",(0,a.kt)("a",{parentName:"li",href:"https://polkadot.js.org/apps/?rpc=wss://dot-rpc.stakeworld.io"},"dot-rpc.stakeworld.io")),(0,a.kt)("li",{parentName:"ul"},"Kusama: ",(0,a.kt)("a",{parentName:"li",href:"https://polkadot.js.org/apps/?rpc=wss://ksm-rpc.stakeworld.io"},"ksm-rpc.stakeworld.io"),"  "))),(0,a.kt)("h2",{id:"live-stakeworld-rpc-data"},"Live stakeworld RPC data"),(0,a.kt)("iframe",{src:"https://monitor.stakeworld.io/public-dashboards/cb9695f06cc94b9d878d5c77fe8017d0",width:"700",height:"700",frameborder:"0"}),(0,a.kt)("h2",{id:"setting-up-your-own-secure-rpc-server"},"Setting up your own secure RPC server"),(0,a.kt)("p",null,"To access the polkadot, kusama and parachains networks we need some kind of access into the network. This can be achieved by ",(0,a.kt)("a",{parentName:"p",href:"./validate"},"setting up a node")," with a RPC server and allowing access to that RPC server via a secure websocket (wss) port. The default node setup already exposes a non secure ws socket on port 9944 (which can optionally be changed by the ",(0,a.kt)("inlineCode",{parentName:"p"},"--ws-port")," parameter), but for a more usable situation we need a secure websocket which is accesible through a public port."),(0,a.kt)("h3",{id:"archive-node-vs-pruned-node"},"Archive node vs pruned node"),(0,a.kt)("p",null,"A pruned node knows only the recent information about the network and not its full history. Most frequently done actions can be done with a pruned node, for example see account balances, make transfers, setup session keys, staking, etc. An archive node has the full history (database) of the network and can be queried in all kind of ways, give information about transfers since the network started, historical balances, advanced queries about past events, etc. "),(0,a.kt)("p",null,"An archive node requires a lot more ",(0,a.kt)("a",{parentName:"p",href:"./snapshot"},"diskspace"),".  For an archive node you need the options ",(0,a.kt)("inlineCode",{parentName:"p"},"--state-pruning archive --blocks-pruning archive")," in your startup settings.\n",(0,a.kt)("img",{alt:"snapsize",src:n(2307).Z,width:"800",height:"300"})),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Inclusion in the Polkadot.js UI requires an archive node.")),(0,a.kt)("h3",{id:"secure-the-rpc-server"},"Secure the RPC server"),(0,a.kt)("p",null,"Via the node startup settings you can choose ",(0,a.kt)("strong",{parentName:"p"},"what")," to expose with ",(0,a.kt)("strong",{parentName:"p"},"how many")," connections ",(0,a.kt)("strong",{parentName:"p"},"from where")," through your rpc server."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"How many"),": You can set your maximum connections through ",(0,a.kt)("inlineCode",{parentName:"p"},"--ws-max-connections"),", for example ",(0,a.kt)("inlineCode",{parentName:"p"},"--ws-max-connections 100")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"From where"),": by default localhost and the polkadot.js are allowed to access the RPC server, you can change this by setting ",(0,a.kt)("inlineCode",{parentName:"p"},"--rpc-cors"),", to allow access from everywhere you need ",(0,a.kt)("inlineCode",{parentName:"p"},"--rpc-cors all")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"What"),": you can limit the methods to use with ",(0,a.kt)("inlineCode",{parentName:"p"},"--rpc-methods"),", an easy way to set this to a safe mode is ",(0,a.kt)("inlineCode",{parentName:"p"},"--rpc-methods Safe")),(0,a.kt)("h3",{id:"secure-the-ws-port"},"Secure the ws port"),(0,a.kt)("p",null,'The ws port is preferably exposed from the outside as a ssl secured wss port. The "',(0,a.kt)("a",{parentName:"p",href:"https://wiki.polkadot.network/docs/maintain-wss"},"maintain wss"),"\" on the wiki already covers a lot of information about this, especially in relation to setting it up in a nginx configuration. This page is focussed more on a apache2 but principles are the same. The main idea is converting the non secure ws port to a secure wss port by putting it behind a ssl enabled proxy. So from outside one see's the ssl enabled apache2/nginx/other proxy server, witch redirect the request to the internal rpc node."),(0,a.kt)("h3",{id:"using-apache2-for-proxying"},"Using Apache2 for proxying"),(0,a.kt)("p",null,"Apache2 is a little heavier then nginx but also has some more tweaking posibilities. You can run it in different modes, prefork, worker or event. We chose ",(0,a.kt)("a",{parentName:"p",href:"https://httpd.apache.org/docs/2.4/mod/event.html"},"event")," since this seems best suited for high load enviroments. Downside is that you can't use the default php module and need to enable it via php-fm. The proxy_wstunnel module works out of the box. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"apt install apache2\na2dismod mpm_prefork\na2enmod mpm_event proxy proxy_html proxy_http proxy_wstunnel rewrite ssl\n")),(0,a.kt)("p",null,"If you want to enable php"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"apt install php-fpm\na2enmod proxy_fcgi setenvif\n")),(0,a.kt)("h4",{id:"enabling-ssl-through-letsencrypt"},"Enabling ssl through letsencrypt"),(0,a.kt)("p",null,"There are multiple options for getting a ssl certificate, one popular (and free) being letsencrypt. Obtaining a letsencrypt certificate can be done through for example ",(0,a.kt)("a",{parentName:"p",href:"https://certbot.eff.org/"},"certbot")," or ",(0,a.kt)("a",{parentName:"p",href:"https://go-acme.github.io/lego/dns/"},"lego")," (which has more dns provider options)."),(0,a.kt)("h4",{id:"add-the-proxy-to-the-apache2-config"},"Add the proxy to the apache2 config"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://httpd.apache.org/docs/2.4/mod/mod_proxy_wstunnel.html"},"mod_proxy_wstunnel")," provides ",(0,a.kt)("em",{parentName:"p"},"support for the tunnelling of web socket connections to a backend websockets server. The connection is automatically upgraded to a websocket connection"),". In a ssl enabled virtualhost add:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-apacheconf"},"SSLProxyEngine on\nProxyRequests off\n\nProxyPass / ws://localhost:9944\nProxyPassReverse / ws://localhost:9944\n")),(0,a.kt)("p",null,"Older versions of mod_proxy_wstunnel do not upgrade the connection automatically and will need the following config added:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-apacheconf"},"RewriteEngine on\nRewriteCond %{HTTP:Upgrade} websocket [NC]\nRewriteRule /(.*) ws://localhost:9944/$1 [P,L]\nRewriteRule /(.*) http://localhost:9944/$1 [P,L]\n")),(0,a.kt)("h4",{id:"tweaking-connections"},"Tweaking connections"),(0,a.kt)("p",null,"The number of connections is limited by the node itself (",(0,a.kt)("inlineCode",{parentName:"p"},"--ws-max-connections"),") but also by the number of threads available on the proxy server. For apache2 this can be tweaked by editing ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/apache2/mods-enabled/mpm_event.conf")),(0,a.kt)("p",null,"We are using: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-apacheconf"},"StartServers         4\nMinSpareThreads      25\nMaxSpareThreads      75\nThreadLimit      128\nThreadsPerChild      128\nMaxRequestWorkers    896\nMaxConnectionsPerChild   0\n")),(0,a.kt)("h4",{id:"rate-limiting"},"Rate limiting"),(0,a.kt)("p",null,"Theoretically one client could use all connections/resources, draining the resources of the server and making it inaccessible. This can be countered by rate limiting the connections, for example by using mod_qos:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"apt install libapache2-mod-qos\na2enmod qos\n")),(0,a.kt)("p",null,"And edit ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/apache2/mods-available/qos.conf")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"  # allows max 50 connections from a single ip address:\n  QS_SrvMaxConnPerIP                                 50\n")),(0,a.kt)("p",null,"Be carefull when running behind a load balancer (for example cloudflare) because the load balancer will only use a few ip's and thus can trigger the rate limit, iso in this case it is better to use the rate limit options from the load balancer itself."),(0,a.kt)("h3",{id:"load-balancing--failover"},"Load balancing & failover"),(0,a.kt)("p",null,"With multiple servers it is possible to build a load balancing or even a failover construction. A simple load balancing can be a ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Round-robin_DNS"},"round robin-robin dns")," up to a more advanced (dedicated) load balancer or a content delivery network (CDN) like cloudflare.   "),(0,a.kt)("h3",{id:"stress-testing"},"Stress testing"),(0,a.kt)("p",null,"You can test basic usage by accessing your server through the polkadot.js UI as a custom endpoint. For example staking target display is RPC intensive and can give you an indication of performance. "),(0,a.kt)("p",null,"There are also more dedicated stress testing solutions, we have forked the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/dwellir-public/artillery-engine-substrate"},"Dwellir repository")," for our testing."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash\nnvm install --lts\nnpm install -g yarn\nyarn global add artillery\nyarn global add artillery-engine-substrate\ncd /opt\ngit clone git@github.com:stakeworld/stakeworld-rpc-artillery.git\ncd /opt/stakeworld-rpc-artillery\nyarn\n./run.sh\n")),(0,a.kt)("p",null,"After the ",(0,a.kt)("inlineCode",{parentName:"p"},"run.sh")," you can edit some variables like how many connections per second, the wss node, etc. The following is a test run for 10 seconds with 10 connections per second and maximum 20 concurrent users. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'config:\n  target: "wss://ksm-rpc.stakeworld.io"\n  processor: "./functions.js"\n  phases:\n    - duration: 10\n      arrivalRate: 10\n      maxVusers: 20\n')),(0,a.kt)("p",null,"After this you get some info about the run and a report is created, which can be used for further diagnostics"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"--------------------------------\nSummary report @ 23:38:40(+0100)\n--------------------------------\n\nvusers.completed: .............................................................. 100\nvusers.created: ................................................................ 100\nvusers.created_by_name.balance: ................................................ 35\nvusers.created_by_name.complex_call: ........................................... 33\nvusers.created_by_name.headers_blocks: ......................................... 32\nvusers.failed: ................................................................. 0\nvusers.session_length:\n  min: ......................................................................... 231.7\n  max: ......................................................................... 656.1\n  median: ...................................................................... 361.5\n  p95: ......................................................................... 518.1\n  p99: ......................................................................... 645.6\nws.messages_sent: .............................................................. 163\nws.send_rate: .................................................................. 29/sec\nLog file: reports/report.json\nReport generated: reports/report.html\n")))}d.isMDXComponent=!0},2307:(e,t,n)=>{n.d(t,{Z:()=>r});const r="data:image/png;base64,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"}}]);