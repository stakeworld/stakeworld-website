"use strict";(self.webpackChunkstakeworld=self.webpackChunkstakeworld||[]).push([[961],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),h=a,A=u["".concat(l,".").concat(h)]||u[h]||d[h]||o;return n?r.createElement(A,s(s({ref:t},c),{},{components:n})):r.createElement(A,s({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1647:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=n(3117),a=(n(7294),n(3905));const o={id:"rpc",title:"RPC server",description:"Setting up a secure RPC server",slug:"/rpc",sidebar_position:4,keywords:["rpc","rpc server","wss","ws","polkadot.js","validator","polkadot","kusama"]},s=void 0,i={unversionedId:"rpc",id:"rpc",title:"RPC server",description:"Setting up a secure RPC server",source:"@site/docs/rpc.mdx",sourceDirName:".",slug:"/rpc",permalink:"/docs/rpc",draft:!1,editUrl:"https://github.com/stakeworld/website/edit/master/docs/rpc.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"rpc",title:"RPC server",description:"Setting up a secure RPC server",slug:"/rpc",sidebar_position:4,keywords:["rpc","rpc server","wss","ws","polkadot.js","validator","polkadot","kusama"]},sidebar:"tutorialSidebar",previous:{title:"Snapshot",permalink:"/docs/snapshot"},next:{title:"Linux tips",permalink:"/docs/tools"}},l={},p=[{value:"Live stakeworld RPC data",id:"live-stakeworld-rpc-data",level:2},{value:"Setting up your own secure RPC server",id:"setting-up-your-own-secure-rpc-server",level:2},{value:"Archive node vs pruned node",id:"archive-node-vs-pruned-node",level:3},{value:"Secure the RPC server",id:"secure-the-rpc-server",level:3},{value:"Secure the ws port",id:"secure-the-ws-port",level:3},{value:"Using Apache2 for proxying",id:"using-apache2-for-proxying",level:3},{value:"Enabling ssl through letsencrypt",id:"enabling-ssl-through-letsencrypt",level:4},{value:"Add the proxy to the apache2 config",id:"add-the-proxy-to-the-apache2-config",level:4},{value:"Tweaking connections",id:"tweaking-connections",level:4},{value:"Rate limiting",id:"rate-limiting",level:4},{value:"Load balancing &amp; failover",id:"load-balancing--failover",level:3},{value:"Stress testing",id:"stress-testing",level:3}],c={toc:p};function d(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"RPC servers allow access into the polkadot/kusama and parachains ecosystem. Stakeworld runs two public, multi location, load balanced archive RPC servers: "),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"Polkadot: ",(0,a.kt)("a",{parentName:"li",href:"https://polkadot.js.org/apps/?rpc=wss://dot-rpc.stakeworld.io"},"dot-rpc.stakeworld.io")),(0,a.kt)("li",{parentName:"ul"},"Kusama: ",(0,a.kt)("a",{parentName:"li",href:"https://polkadot.js.org/apps/?rpc=wss://ksm-rpc.stakeworld.io"},"ksm-rpc.stakeworld.io"),"  "))),(0,a.kt)("h2",{id:"live-stakeworld-rpc-data"},"Live stakeworld RPC data"),(0,a.kt)("iframe",{src:"https://monitor.stakeworld.io/public-dashboards/cb9695f06cc94b9d878d5c77fe8017d0",width:"700",height:"700",frameborder:"0"}),(0,a.kt)("h2",{id:"setting-up-your-own-secure-rpc-server"},"Setting up your own secure RPC server"),(0,a.kt)("p",null,"To access the polkadot, kusama and parachains networks we need some kind of access into the network. This can be achieved by ",(0,a.kt)("a",{parentName:"p",href:"./validate"},"setting up a node")," with a RPC server and allowing access to that RPC server via a secure websocket (wss) port. The default node setup already exposes a non secure ws socket on port 9944 (which can optionally be changed by the ",(0,a.kt)("inlineCode",{parentName:"p"},"--ws-port")," parameter), but for a more usable situation we need a secure websocket which is accesible through a public port."),(0,a.kt)("h3",{id:"archive-node-vs-pruned-node"},"Archive node vs pruned node"),(0,a.kt)("p",null,"A pruned node knows only the recent information about the network and not its full history. Most frequently done actions can be done with a pruned node, for example see account balances, make transfers, setup session keys, staking, etc. An archive node has the full history (database) of the network and can be queried in all kind of ways, give information about transfers since the network started, historical balances, advanced queries about past events, etc. "),(0,a.kt)("p",null,"An archive node requires a lot more ",(0,a.kt)("a",{parentName:"p",href:"./snapshot"},"diskspace"),".  For an archive node you need the options ",(0,a.kt)("inlineCode",{parentName:"p"},"--state-pruning archive --blocks-pruning archive")," in your startup settings.\n",(0,a.kt)("img",{alt:"snapsize",src:n(2307).Z,width:"800",height:"300"})),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Inclusion in the Polkadot.js UI requires an archive node.")),(0,a.kt)("h3",{id:"secure-the-rpc-server"},"Secure the RPC server"),(0,a.kt)("p",null,"Via the node startup settings you can choose ",(0,a.kt)("strong",{parentName:"p"},"what")," to expose with ",(0,a.kt)("strong",{parentName:"p"},"how many")," connections ",(0,a.kt)("strong",{parentName:"p"},"from where")," through your rpc server."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"How many"),": You can set your maximum connections through ",(0,a.kt)("inlineCode",{parentName:"p"},"--ws-max-connections"),", for example ",(0,a.kt)("inlineCode",{parentName:"p"},"--ws-max-connections 100")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"From where"),": by default localhost and the polkadot.js are allowed to access the RPC server, you can change this by setting ",(0,a.kt)("inlineCode",{parentName:"p"},"--rpc-cors"),", to allow access from everywhere you need ",(0,a.kt)("inlineCode",{parentName:"p"},"--rpc-cors all")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"What"),": you can limit the methods to use with ",(0,a.kt)("inlineCode",{parentName:"p"},"--rpc-methods"),", an easy way to set this to a safe mode is ",(0,a.kt)("inlineCode",{parentName:"p"},"--rpc-methods Safe")),(0,a.kt)("h3",{id:"secure-the-ws-port"},"Secure the ws port"),(0,a.kt)("p",null,'The ws port is preferably exposed from the outside as a ssl secured wss port. The "',(0,a.kt)("a",{parentName:"p",href:"https://wiki.polkadot.network/docs/maintain-wss"},"maintain wss"),"\" on the wiki already covers a lot of information about this, especially in relation to setting it up in a nginx configuration. This page is focussed more on a apache2 but principles are the same. The main idea is converting the non secure ws port to a secure wss port by putting it behind a ssl enabled proxy. So from outside one see's the ssl enabled apache2/nginx/other proxy server, witch redirect the request to the internal rpc node."),(0,a.kt)("h3",{id:"using-apache2-for-proxying"},"Using Apache2 for proxying"),(0,a.kt)("p",null,"Apache2 is a little heavier then nginx but also has some more tweaking posibilities. You can run it in different modes, prefork, worker or event. We chose ",(0,a.kt)("a",{parentName:"p",href:"https://httpd.apache.org/docs/2.4/mod/event.html"},"event")," since this seems best suited for high load enviroments. Downside is that you can't use the default php module and need to enable it via php-fm. The proxy_wstunnel module works out of the box. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"apt install apache2\na2dismod mpm_prefork\na2enmod mpm_event proxy proxy_html proxy_http proxy_wstunnel rewrite ssl\n")),(0,a.kt)("p",null,"If you want to enable php"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"apt install php-fpm\na2enmod proxy_fcgi setenvif\n")),(0,a.kt)("h4",{id:"enabling-ssl-through-letsencrypt"},"Enabling ssl through letsencrypt"),(0,a.kt)("p",null,"There are multiple options for getting a ssl certificate, one popular (and free) being letsencrypt. Obtaining a letsencrypt certificate can be done through for example ",(0,a.kt)("a",{parentName:"p",href:"https://certbot.eff.org/"},"certbot")," or ",(0,a.kt)("a",{parentName:"p",href:"https://go-acme.github.io/lego/dns/"},"lego")," (which has more dns provider options)."),(0,a.kt)("h4",{id:"add-the-proxy-to-the-apache2-config"},"Add the proxy to the apache2 config"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://httpd.apache.org/docs/2.4/mod/mod_proxy_wstunnel.html"},"mod_proxy_wstunnel")," provides ",(0,a.kt)("em",{parentName:"p"},"support for the tunnelling of web socket connections to a backend websockets server. The connection is automatically upgraded to a websocket connection"),". In a ssl enabled virtualhost add:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-apacheconf"},"SSLProxyEngine on\nProxyRequests off\n\nProxyPass / ws://localhost:9944\nProxyPassReverse / ws://localhost:9944\n")),(0,a.kt)("p",null,"Older versions of mod_proxy_wstunnel do not upgrade the connection automatically and will need the following config added:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-apacheconf"},"RewriteEngine on\nRewriteCond %{HTTP:Upgrade} websocket [NC]\nRewriteRule /(.*) ws://localhost:9944/$1 [P,L]\nRewriteRule /(.*) http://localhost:9944/$1 [P,L]\n")),(0,a.kt)("h4",{id:"tweaking-connections"},"Tweaking connections"),(0,a.kt)("p",null,"The number of connections is limited by the node itself (",(0,a.kt)("inlineCode",{parentName:"p"},"--ws-max-connections"),") but also by the number of threads available on the proxy server. For apache2 this can be tweaked by editing ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/apache2/mods-enabled/mpm_event.conf")),(0,a.kt)("p",null,"We are using: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-apacheconf"},"StartServers         4\nMinSpareThreads      25\nMaxSpareThreads      75\nThreadLimit      128\nThreadsPerChild      128\nMaxRequestWorkers    896\nMaxConnectionsPerChild   0\n")),(0,a.kt)("h4",{id:"rate-limiting"},"Rate limiting"),(0,a.kt)("p",null,"Theoretically one client could use all connections/resources, draining the resources of the server and making it inaccessible. This can be countered by rate limiting the connections, for example by using mod_qos:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"apt install libapache2-mod-qos\na2enmod qos\n")),(0,a.kt)("p",null,"And edit ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/apache2/mods-available/qos.conf")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"  # allows max 50 connections from a single ip address:\n  QS_SrvMaxConnPerIP                                 50\n")),(0,a.kt)("p",null,"Be carefull when running behind a load balancer (for example cloudflare) because the load balancer will only use a few ip's and thus can trigger the rate limit, iso in this case it is better to use the rate limit options from the load balancer itself."),(0,a.kt)("h3",{id:"load-balancing--failover"},"Load balancing & failover"),(0,a.kt)("p",null,"With multiple servers it is possible to build a load balancing or even a failover construction. A simple load balancing can be a ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Round-robin_DNS"},"round robin-robin dns")," up to a more advanced (dedicated) load balancer or a content delivery network (CDN) like cloudflare.   "),(0,a.kt)("h3",{id:"stress-testing"},"Stress testing"),(0,a.kt)("p",null,"You can test basic usage by accessing your server through the polkadot.js UI as a custom endpoint. For example staking target display is RPC intensive and can give you an indication of performance. "),(0,a.kt)("p",null,"There are also more dedicated stress testing solutions, we have forked the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/dwellir-public/artillery-engine-substrate"},"Dwellir repository")," for our testing."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash\nnvm install --lts\nnpm install -g yarn\nyarn global add artillery\nyarn global add artillery-engine-substrate\ncd /opt\ngit clone git@github.com:stakeworld/stakeworld-rpc-artillery.git\ncd /opt/stakeworld-rpc-artillery\nyarn\n./run.sh\n")),(0,a.kt)("p",null,"After the ",(0,a.kt)("inlineCode",{parentName:"p"},"run.sh")," you can edit some variables like how many connections per second, the wss node, etc. The following is a test run for 10 seconds with 10 connections per second and maximum 20 concurrent users. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'config:\n  target: "wss://ksm-rpc.stakeworld.io"\n  processor: "./functions.js"\n  phases:\n    - duration: 10\n      arrivalRate: 10\n      maxVusers: 20\n')),(0,a.kt)("p",null,"After this you get some info about the run and a report is created, which can be used for further diagnostics"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"--------------------------------\nSummary report @ 23:38:40(+0100)\n--------------------------------\n\nvusers.completed: .............................................................. 100\nvusers.created: ................................................................ 100\nvusers.created_by_name.balance: ................................................ 35\nvusers.created_by_name.complex_call: ........................................... 33\nvusers.created_by_name.headers_blocks: ......................................... 32\nvusers.failed: ................................................................. 0\nvusers.session_length:\n  min: ......................................................................... 231.7\n  max: ......................................................................... 656.1\n  median: ...................................................................... 361.5\n  p95: ......................................................................... 518.1\n  p99: ......................................................................... 645.6\nws.messages_sent: .............................................................. 163\nws.send_rate: .................................................................. 29/sec\nLog file: reports/report.json\nReport generated: reports/report.html\n")))}d.isMDXComponent=!0},2307:(e,t,n)=>{n.d(t,{Z:()=>r});const r="data:image/png;base64,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"}}]);