"use strict";(self.webpackChunkstakeworld=self.webpackChunkstakeworld||[]).push([[961],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),h=a,A=u["".concat(l,".").concat(h)]||u[h]||d[h]||o;return n?r.createElement(A,s(s({ref:t},p),{},{components:n})):r.createElement(A,s({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1647:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=n(3117),a=(n(7294),n(3905));const o={id:"rpc",title:"RPC server",description:"Setting up a secure RPC server",slug:"/rpc",sidebar_position:4,keywords:["rpc","rpc server","wss","ws","polkadot.js","validator","polkadot","kusama"]},s=void 0,i={unversionedId:"rpc",id:"rpc",title:"RPC server",description:"Setting up a secure RPC server",source:"@site/docs/rpc.mdx",sourceDirName:".",slug:"/rpc",permalink:"/docs/rpc",draft:!1,editUrl:"https://github.com/stakeworld/website/edit/master/docs/rpc.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"rpc",title:"RPC server",description:"Setting up a secure RPC server",slug:"/rpc",sidebar_position:4,keywords:["rpc","rpc server","wss","ws","polkadot.js","validator","polkadot","kusama"]},sidebar:"tutorialSidebar",previous:{title:"Snapshot",permalink:"/docs/snapshot"},next:{title:"Linux tips",permalink:"/docs/tools"}},l={},c=[{value:"Live stakeworld RPC data",id:"live-stakeworld-rpc-data",level:2},{value:"Setting up your own secure RPC server",id:"setting-up-your-own-secure-rpc-server",level:2},{value:"Archive node vs pruned node",id:"archive-node-vs-pruned-node",level:3},{value:"Secure the RPC server",id:"secure-the-rpc-server",level:3},{value:"Secure the ws port",id:"secure-the-ws-port",level:3},{value:"Using Apache2 for proxying",id:"using-apache2-for-proxying",level:3},{value:"Enabling ssl through letsencrypt",id:"enabling-ssl-through-letsencrypt",level:4},{value:"Add the proxy to the apache2 config",id:"add-the-proxy-to-the-apache2-config",level:4},{value:"Tweaking connections",id:"tweaking-connections",level:4},{value:"Rate limiting",id:"rate-limiting",level:4},{value:"Load balancing &amp; failover",id:"load-balancing--failover",level:3},{value:"Stress testing",id:"stress-testing",level:3}],p={toc:c};function d(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"RPC servers allow access into the polkadot/kusama and parachains ecosystem. Stakeworld runs two public, multi location, load balanced archive RPC servers: "),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"Polkadot: ",(0,a.kt)("a",{parentName:"li",href:"https://polkadot.js.org/apps/?rpc=wss://dot-rpc.stakeworld.io"},"dot-rpc.stakeworld.io")),(0,a.kt)("li",{parentName:"ul"},"Kusama: ",(0,a.kt)("a",{parentName:"li",href:"https://polkadot.js.org/apps/?rpc=wss://ksm-rpc.stakeworld.io"},"ksm-rpc.stakeworld.io"),"  "))),(0,a.kt)("h2",{id:"live-stakeworld-rpc-data"},"Live stakeworld RPC data"),(0,a.kt)("iframe",{src:"https://monitor.stakeworld.io/public-dashboards/cb9695f06cc94b9d878d5c77fe8017d0",width:"700",height:"700",frameborder:"0"}),(0,a.kt)("h2",{id:"setting-up-your-own-secure-rpc-server"},"Setting up your own secure RPC server"),(0,a.kt)("p",null,"To access the polkadot, kusama and parachains networks we need some kind of access into the network. This can be achieved by ",(0,a.kt)("a",{parentName:"p",href:"./validate"},"setting up a node")," with a RPC server and allowing access to that RPC server via a secure websocket (wss) port. The default node setup already exposes a non secure ws socket on port 9944 (which can optionally be changed by the ",(0,a.kt)("inlineCode",{parentName:"p"},"--ws-port")," parameter), but for a more usable situation we need a secure websocket which is accesible through a public port."),(0,a.kt)("h3",{id:"archive-node-vs-pruned-node"},"Archive node vs pruned node"),(0,a.kt)("p",null,"A pruned node knows only the recent information about the network and not its full history. Most frequently done actions can be done with a pruned node, for example see account balances, make transfers, setup session keys, staking, etc. An archive node has the full history (database) of the network and can be queried in all kind of ways, give information about transfers since the network started, historical balances, advanced queries about past events, etc. "),(0,a.kt)("p",null,"An archive node requires a lot more ",(0,a.kt)("a",{parentName:"p",href:"./snapshot"},"diskspace"),".  For an archive node you need the options ",(0,a.kt)("inlineCode",{parentName:"p"},"--state-pruning archive --blocks-pruning archive")," in your startup settings.\n",(0,a.kt)("img",{alt:"snapsize",src:n(2307).Z,width:"800",height:"300"})),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Inclusion in the Polkadot.js UI requires an archive node.")),(0,a.kt)("h3",{id:"secure-the-rpc-server"},"Secure the RPC server"),(0,a.kt)("p",null,"Via the node startup settings you can choose ",(0,a.kt)("strong",{parentName:"p"},"what")," to expose with ",(0,a.kt)("strong",{parentName:"p"},"how many")," connections ",(0,a.kt)("strong",{parentName:"p"},"from where")," through your rpc server."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"How many"),": You can set your maximum connections through ",(0,a.kt)("inlineCode",{parentName:"p"},"--ws-max-connections"),", for example ",(0,a.kt)("inlineCode",{parentName:"p"},"--ws-max-connections 100")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"From where"),": by default localhost and the polkadot.js are allowed to access the RPC server, you can change this by setting ",(0,a.kt)("inlineCode",{parentName:"p"},"--rpc-cors"),", to allow access from everywhere you need ",(0,a.kt)("inlineCode",{parentName:"p"},"--rpc-cors all")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"What"),": you can limit the methods to use with ",(0,a.kt)("inlineCode",{parentName:"p"},"--rpc-methods"),", an easy way to set this to a safe mode is ",(0,a.kt)("inlineCode",{parentName:"p"},"--rpc-methods Safe")),(0,a.kt)("h3",{id:"secure-the-ws-port"},"Secure the ws port"),(0,a.kt)("p",null,'The ws port is preferably exposed from the outside as a ssl secured wss port. The "',(0,a.kt)("a",{parentName:"p",href:"https://wiki.polkadot.network/docs/maintain-wss"},"maintain wss"),"\" on the wiki already covers a lot of information about this, especially in relation to setting it up in a nginx configuration. This page is focussed more on a apache2 but principles are the same. The main idea is converting the non secure ws port to a secure wss port by putting it behind a ssl enabled proxy. So from outside one see's the ssl enabled apache2/nginx/other proxy server, witch redirect the request to the internal rpc node."),(0,a.kt)("h3",{id:"using-apache2-for-proxying"},"Using Apache2 for proxying"),(0,a.kt)("p",null,"Apache2 is a little heavier then nginx but also has some more tweaking posibilities. You can run it in different modes, prefork, worker or event. We chose ",(0,a.kt)("a",{parentName:"p",href:"https://httpd.apache.org/docs/2.4/mod/event.html"},"event")," since this seems best suited for high load enviroments. Downside is that you can't use the default php module and need to enable it via php-fm. The proxy_wstunnel module works out of the box. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"apt install apache2\na2dismod mpm_prefork\na2enmod mpm_event proxy proxy_html proxy_http proxy_wstunnel rewrite ssl\n")),(0,a.kt)("p",null,"If you want to enable php"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"apt install php-fpm\na2enmod proxy_fcgi setenvif\n")),(0,a.kt)("h4",{id:"enabling-ssl-through-letsencrypt"},"Enabling ssl through letsencrypt"),(0,a.kt)("p",null,"There are multiple options for getting a ssl certificate, one popular (and free) being letsencrypt. Obtaining a letsencrypt certificate can be done through for example ",(0,a.kt)("a",{parentName:"p",href:"https://certbot.eff.org/"},"certbot")," or ",(0,a.kt)("a",{parentName:"p",href:"https://go-acme.github.io/lego/dns/"},"lego")," (which has more dns provider options)."),(0,a.kt)("h4",{id:"add-the-proxy-to-the-apache2-config"},"Add the proxy to the apache2 config"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://httpd.apache.org/docs/2.4/mod/mod_proxy_wstunnel.html"},"mod_proxy_wstunnel")," provides ",(0,a.kt)("em",{parentName:"p"},"support for the tunnelling of web socket connections to a backend websockets server. The connection is automatically upgraded to a websocket connection"),". In a ssl enabled virtualhost add:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-apacheconf"},"SSLProxyEngine on\nProxyRequests off\n\nProxyPass / ws://localhost:9944\nProxyPassReverse / ws://localhost:9944\n")),(0,a.kt)("p",null,"Older versions of mod_proxy_wstunnel do not upgrade the connection automatically and will need the following config added:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-apacheconf"},"RewriteEngine on\nRewriteCond %{HTTP:Upgrade} websocket [NC]\nRewriteRule /(.*) ws://localhost:9944/$1 [P,L]\nRewriteRule /(.*) http://localhost:9944/$1 [P,L]\n")),(0,a.kt)("h4",{id:"tweaking-connections"},"Tweaking connections"),(0,a.kt)("p",null,"The number of connections is limited by the node itself (",(0,a.kt)("inlineCode",{parentName:"p"},"--ws-max-connections"),") but also by the number of threads available on the proxy server. For apache2 this can be tweaked by editing ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/apache2/mods-enabled/mpm_event.conf")),(0,a.kt)("p",null,"We are using: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-apacheconf"},"StartServers         4\nMinSpareThreads      25\nMaxSpareThreads      75\nThreadLimit      128\nThreadsPerChild      128\nMaxRequestWorkers    896\nMaxConnectionsPerChild   0\n")),(0,a.kt)("h4",{id:"rate-limiting"},"Rate limiting"),(0,a.kt)("p",null,"Theoretically one client could use all connections/resources, draining the resources of the server and making it inaccessible. This can be countered by rate limiting the connections, for example by using mod_qos:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"apt install libapache2-mod-qos\na2enmod qos\n")),(0,a.kt)("p",null,"And edit ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/apache2/mods-available/qos.conf")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"  # allows max 50 connections from a single ip address:\n  QS_SrvMaxConnPerIP                                 50\n")),(0,a.kt)("p",null,"Be carefull when running behind a load balancer (for example cloudflare) because the load balancer will only use a few ip's and thus can trigger the rate limit, iso in this case it is better to use the rate limit options from the load balancer itself."),(0,a.kt)("h3",{id:"load-balancing--failover"},"Load balancing & failover"),(0,a.kt)("p",null,"With multiple servers it is possible to build a load balancing or even a failover construction. A simple load balancing can be a ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Round-robin_DNS"},"round robin-robin dns")," up to a more advanced (dedicated) load balancer or a content delivery network (CDN) like cloudflare.   "),(0,a.kt)("h3",{id:"stress-testing"},"Stress testing"),(0,a.kt)("p",null,"You can test basic usage by accessing your server through the polkadot.js UI as a custom endpoint. For example staking target display is RPC intensive and can give you an indication of performance. "),(0,a.kt)("p",null,"There are also more dedicated stress testing solutions, we have forked the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/dwellir-public/artillery-engine-substrate"},"Dwellir repository")," for our testing."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash\nnvm install --lts\nnpm install -g yarn\nyarn global add artillery\nyarn global add artillery-engine-substrate\ncd /opt\ngit clone git@github.com:stakeworld/stakeworld-rpc-artillery.git\ncd /opt/stakeworld-rpc-artillery\nyarn\n./run.sh\n")),(0,a.kt)("p",null,"After the ",(0,a.kt)("inlineCode",{parentName:"p"},"run.sh")," you can edit some variables like how many connections per second, the wss node, etc. The following is a test run for 10 seconds with 10 connections per second and maximum 20 concurrent users. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'config:\n  target: "wss://ksm-rpc.stakeworld.io"\n  processor: "./functions.js"\n  phases:\n    - duration: 10\n      arrivalRate: 10\n      maxVusers: 20\n')),(0,a.kt)("p",null,"After this you get some info about the run and a report is created, which can be used for further diagnostics"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"--------------------------------\nSummary report @ 23:38:40(+0100)\n--------------------------------\n\nvusers.completed: .............................................................. 100\nvusers.created: ................................................................ 100\nvusers.created_by_name.balance: ................................................ 35\nvusers.created_by_name.complex_call: ........................................... 33\nvusers.created_by_name.headers_blocks: ......................................... 32\nvusers.failed: ................................................................. 0\nvusers.session_length:\n  min: ......................................................................... 231.7\n  max: ......................................................................... 656.1\n  median: ...................................................................... 361.5\n  p95: ......................................................................... 518.1\n  p99: ......................................................................... 645.6\nws.messages_sent: .............................................................. 163\nws.send_rate: .................................................................. 29/sec\nLog file: reports/report.json\nReport generated: reports/report.html\n")))}d.isMDXComponent=!0},2307:(e,t,n)=>{n.d(t,{Z:()=>r});const r="data:image/png;base64,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"}}]);