"use strict";(self.webpackChunkstakeworld=self.webpackChunkstakeworld||[]).push([[961],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),h=a,g=u["".concat(l,".").concat(h)]||u[h]||d[h]||o;return n?r.createElement(g,s(s({ref:t},c),{},{components:n})):r.createElement(g,s({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1647:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=n(3117),a=(n(7294),n(3905));const o={id:"rpc",title:"RPC server",description:"Setting up a secure RPC server",slug:"/rpc",sidebar_position:4,keywords:["rpc","rpc server","wss","ws","polkadot.js","validator","polkadot","kusama","westend"]},s=void 0,i={unversionedId:"rpc",id:"rpc",title:"RPC server",description:"Setting up a secure RPC server",source:"@site/docs/rpc.mdx",sourceDirName:".",slug:"/rpc",permalink:"/docs/rpc",draft:!1,editUrl:"https://github.com/stakeworld/website/edit/master/docs/rpc.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"rpc",title:"RPC server",description:"Setting up a secure RPC server",slug:"/rpc",sidebar_position:4,keywords:["rpc","rpc server","wss","ws","polkadot.js","validator","polkadot","kusama","westend"]},sidebar:"tutorialSidebar",previous:{title:"Database sizes",permalink:"/docs/dbsize"},next:{title:"Linux tips",permalink:"/docs/tools"}},l={},p=[{value:"Live stakeworld RPC data",id:"live-stakeworld-rpc-data",level:2},{value:"Setting up your own secure RPC server",id:"setting-up-your-own-secure-rpc-server",level:2},{value:"Archive node vs pruned node",id:"archive-node-vs-pruned-node",level:3},{value:"Secure the RPC server",id:"secure-the-rpc-server",level:3},{value:"Secure the ws port",id:"secure-the-ws-port",level:3},{value:"Using Apache2 for proxying",id:"using-apache2-for-proxying",level:3},{value:"Enabling ssl through letsencrypt",id:"enabling-ssl-through-letsencrypt",level:4},{value:"Add the proxy to the apache2 config",id:"add-the-proxy-to-the-apache2-config",level:4},{value:"Tweaking connections",id:"tweaking-connections",level:4},{value:"Rate limiting",id:"rate-limiting",level:4},{value:"Load balancing &amp; failover",id:"load-balancing--failover",level:3},{value:"Stress testing",id:"stress-testing",level:3}],c={toc:p};function d(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"RPC servers allow access into the polkadot/kusama and parachains ecosystem. Stakeworld runs multiple public archive RPC servers: "),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"Polkadot: ",(0,a.kt)("a",{parentName:"li",href:"https://polkadot.js.org/apps/?rpc=wss://dot-rpc.stakeworld.io"},"dot-rpc.stakeworld.io"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Statemint: ",(0,a.kt)("a",{parentName:"li",href:"https://polkadot.js.org/apps/?rpc=wss://dot-rpc.stakeworld.io/statemint"},"dot-rpc.stakeworld.io/statemint")),(0,a.kt)("li",{parentName:"ul"},"Bridgehub: ",(0,a.kt)("a",{parentName:"li",href:"https://polkadot.js.org/apps/?rpc=wss://dot-rpc.stakeworld.io/bridgehub"},"dot-rpc.stakeworld.io/bridgehub")))),(0,a.kt)("li",{parentName:"ul"},"Kusama: ",(0,a.kt)("a",{parentName:"li",href:"https://polkadot.js.org/apps/?rpc=wss://ksm-rpc.stakeworld.io"},"ksm-rpc.stakeworld.io"),"  ",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Statemine: ",(0,a.kt)("a",{parentName:"li",href:"https://polkadot.js.org/apps/?rpc=wss://ksm-rpc.stakeworld.io/statemine"},"ksm-rpc.stakeworld.io/statemine")),(0,a.kt)("li",{parentName:"ul"},"Bridgehub: ",(0,a.kt)("a",{parentName:"li",href:"https://polkadot.js.org/apps/?rpc=wss://ksm-rpc.stakeworld.io/bridgehub"},"ksm-rpc.stakeworld.io/bridgehub")))),(0,a.kt)("li",{parentName:"ul"},"Westend: ",(0,a.kt)("a",{parentName:"li",href:"https://polkadot.js.org/apps/?rpc=wss://wnd-rpc.stakeworld.io"},"wnd-rpc.stakeworld.io"),"  ",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Westmint: ",(0,a.kt)("a",{parentName:"li",href:"https://polkadot.js.org/apps/?rpc=wss://wnd-rpc.stakeworld.io/westmint"},"wnd-rpc.stakeworld.io/westmint")))))),(0,a.kt)("h2",{id:"live-stakeworld-rpc-data"},"Live stakeworld RPC data"),(0,a.kt)("iframe",{src:"https://monitor.stakeworld.io/public-dashboards/cb9695f06cc94b9d878d5c77fe8017d0",width:"700",height:"1050",frameborder:"0"}),(0,a.kt)("h2",{id:"setting-up-your-own-secure-rpc-server"},"Setting up your own secure RPC server"),(0,a.kt)("p",null,"To access the polkadot, kusama and parachains networks we need some kind of access into the network. This can be achieved by ",(0,a.kt)("a",{parentName:"p",href:"./validate"},"setting up a node")," with a RPC server and allowing access to that RPC server via a secure websocket (wss) port. The default node setup already exposes a non secure ws socket on port 9944 (which can optionally be changed by the ",(0,a.kt)("inlineCode",{parentName:"p"},"--ws-port")," parameter), but for a more usable situation we need a secure websocket which is accesible through a public port."),(0,a.kt)("h3",{id:"archive-node-vs-pruned-node"},"Archive node vs pruned node"),(0,a.kt)("p",null,"A pruned node knows only the recent information about the network and not its full history. Most frequently done actions can be done with a pruned node, for example see account balances, make transfers, setup session keys, staking, etc. An archive node has the full history (database) of the network and can be queried in all kind of ways, give information about transfers since the network started, historical balances, advanced queries about past events, etc. "),(0,a.kt)("p",null,"An archive node requires a lot more ",(0,a.kt)("a",{parentName:"p",href:"./snapshot"},"diskspace"),".  For an archive node you need the options ",(0,a.kt)("inlineCode",{parentName:"p"},"--state-pruning archive --blocks-pruning archive")," in your startup settings.\n",(0,a.kt)("img",{alt:"snapsize",src:n(2307).Z,width:"800",height:"300"})),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Inclusion in the Polkadot.js UI requires an archive node.")),(0,a.kt)("h3",{id:"secure-the-rpc-server"},"Secure the RPC server"),(0,a.kt)("p",null,"Via the node startup settings you can choose ",(0,a.kt)("strong",{parentName:"p"},"what")," to expose with ",(0,a.kt)("strong",{parentName:"p"},"how many")," connections ",(0,a.kt)("strong",{parentName:"p"},"from where")," through your rpc server."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"How many"),": You can set your maximum connections through ",(0,a.kt)("inlineCode",{parentName:"p"},"--ws-max-connections"),", for example ",(0,a.kt)("inlineCode",{parentName:"p"},"--ws-max-connections 100")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"From where"),": by default localhost and the polkadot.js are allowed to access the RPC server, you can change this by setting ",(0,a.kt)("inlineCode",{parentName:"p"},"--rpc-cors"),", to allow access from everywhere you need ",(0,a.kt)("inlineCode",{parentName:"p"},"--rpc-cors all")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"What"),": you can limit the methods to use with ",(0,a.kt)("inlineCode",{parentName:"p"},"--rpc-methods"),", an easy way to set this to a safe mode is ",(0,a.kt)("inlineCode",{parentName:"p"},"--rpc-methods Safe")),(0,a.kt)("h3",{id:"secure-the-ws-port"},"Secure the ws port"),(0,a.kt)("p",null,'The ws port is preferably exposed from the outside as a ssl secured wss port. The "',(0,a.kt)("a",{parentName:"p",href:"https://wiki.polkadot.network/docs/maintain-wss"},"maintain wss"),"\" on the wiki already covers a lot of information about this, especially in relation to setting it up in a nginx configuration. This page is focussed more on a apache2 but principles are the same. The main idea is converting the non secure ws port to a secure wss port by putting it behind a ssl enabled proxy. So from outside one see's the ssl enabled apache2/nginx/other proxy server, witch redirect the request to the internal rpc node."),(0,a.kt)("h3",{id:"using-apache2-for-proxying"},"Using Apache2 for proxying"),(0,a.kt)("p",null,"Apache2 is a little heavier then nginx but also has some more tweaking posibilities. You can run it in different modes, prefork, worker or event. We chose ",(0,a.kt)("a",{parentName:"p",href:"https://httpd.apache.org/docs/2.4/mod/event.html"},"event")," since this seems best suited for high load enviroments. Downside is that you can't use the default php module and need to enable it via php-fm. The proxy_wstunnel module works out of the box. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"apt install apache2\na2dismod mpm_prefork\na2enmod mpm_event proxy proxy_html proxy_http proxy_wstunnel rewrite ssl\n")),(0,a.kt)("p",null,"If you want to enable php"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"apt install php-fpm\na2enmod proxy_fcgi setenvif\n")),(0,a.kt)("h4",{id:"enabling-ssl-through-letsencrypt"},"Enabling ssl through letsencrypt"),(0,a.kt)("p",null,"There are multiple options for getting a ssl certificate, one popular (and free) being letsencrypt. Obtaining a letsencrypt certificate can be done through for example ",(0,a.kt)("a",{parentName:"p",href:"https://certbot.eff.org/"},"certbot")," or ",(0,a.kt)("a",{parentName:"p",href:"https://go-acme.github.io/lego/dns/"},"lego")," (which has more dns provider options)."),(0,a.kt)("h4",{id:"add-the-proxy-to-the-apache2-config"},"Add the proxy to the apache2 config"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://httpd.apache.org/docs/2.4/mod/mod_proxy_wstunnel.html"},"mod_proxy_wstunnel")," provides ",(0,a.kt)("em",{parentName:"p"},"support for the tunnelling of web socket connections to a backend websockets server. The connection is automatically upgraded to a websocket connection"),". In a ssl enabled virtualhost add:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-apacheconf"},"SSLProxyEngine on\nProxyRequests off\n\nProxyPass / ws://localhost:9944\nProxyPassReverse / ws://localhost:9944\n")),(0,a.kt)("p",null,"Older versions of mod_proxy_wstunnel do not upgrade the connection automatically and will need the following config added:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-apacheconf"},"RewriteEngine on\nRewriteCond %{HTTP:Upgrade} websocket [NC]\nRewriteRule /(.*) ws://localhost:9944/$1 [P,L]\nRewriteRule /(.*) http://localhost:9944/$1 [P,L]\n")),(0,a.kt)("h4",{id:"tweaking-connections"},"Tweaking connections"),(0,a.kt)("p",null,"The number of connections is limited by the node itself (",(0,a.kt)("inlineCode",{parentName:"p"},"--ws-max-connections"),") but also by the number of threads available on the proxy server. For apache2 this can be tweaked by editing ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/apache2/mods-enabled/mpm_event.conf")),(0,a.kt)("p",null,"We are using: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-apacheconf"},"StartServers         4\nMinSpareThreads      25\nMaxSpareThreads      75\nThreadLimit      128\nThreadsPerChild      128\nMaxRequestWorkers    896\nMaxConnectionsPerChild   0\n")),(0,a.kt)("h4",{id:"rate-limiting"},"Rate limiting"),(0,a.kt)("p",null,"Theoretically one client could use all connections/resources, draining the resources of the server and making it inaccessible. This can be countered by rate limiting the connections, for example by using mod_qos:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"apt install libapache2-mod-qos\na2enmod qos\n")),(0,a.kt)("p",null,"And edit ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/apache2/mods-available/qos.conf")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"  # allows max 50 connections from a single ip address:\n  QS_SrvMaxConnPerIP                                 50\n")),(0,a.kt)("p",null,"Be carefull when running behind a load balancer (for example cloudflare) because the load balancer will only use a few ip's and thus can trigger the rate limit, iso in this case it is better to use the rate limit options from the load balancer itself."),(0,a.kt)("h3",{id:"load-balancing--failover"},"Load balancing & failover"),(0,a.kt)("p",null,"With multiple servers it is possible to build a load balancing or even a failover construction. A simple load balancing can be a ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Round-robin_DNS"},"round robin-robin dns")," up to a more advanced (dedicated) load balancer or a content delivery network (CDN) like cloudflare.   "),(0,a.kt)("h3",{id:"stress-testing"},"Stress testing"),(0,a.kt)("p",null,"You can test basic usage by accessing your server through the polkadot.js UI as a custom endpoint. For example staking target display is RPC intensive and can give you an indication of performance. "),(0,a.kt)("p",null,"There are also more dedicated stress testing solutions, we have forked the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/dwellir-public/artillery-engine-substrate"},"Dwellir repository")," for our testing."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash\nnvm install --lts\nnpm install -g yarn\nyarn global add artillery\nyarn global add artillery-engine-substrate\ncd /opt\ngit clone git@github.com:stakeworld/stakeworld-rpc-artillery.git\ncd /opt/stakeworld-rpc-artillery\nyarn\n./run.sh\n")),(0,a.kt)("p",null,"After the ",(0,a.kt)("inlineCode",{parentName:"p"},"run.sh")," you can edit some variables like how many connections per second, the wss node, etc. The following is a test run for 10 seconds with 10 connections per second and maximum 20 concurrent users. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'config:\n  target: "wss://ksm-rpc.stakeworld.io"\n  processor: "./functions.js"\n  phases:\n    - duration: 10\n      arrivalRate: 10\n      maxVusers: 20\n')),(0,a.kt)("p",null,"After this you get some info about the run and a report is created, which can be used for further diagnostics"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"--------------------------------\nSummary report @ 23:38:40(+0100)\n--------------------------------\n\nvusers.completed: .............................................................. 100\nvusers.created: ................................................................ 100\nvusers.created_by_name.balance: ................................................ 35\nvusers.created_by_name.complex_call: ........................................... 33\nvusers.created_by_name.headers_blocks: ......................................... 32\nvusers.failed: ................................................................. 0\nvusers.session_length:\n  min: ......................................................................... 231.7\n  max: ......................................................................... 656.1\n  median: ...................................................................... 361.5\n  p95: ......................................................................... 518.1\n  p99: ......................................................................... 645.6\nws.messages_sent: .............................................................. 163\nws.send_rate: .................................................................. 29/sec\nLog file: reports/report.json\nReport generated: reports/report.html\n")))}d.isMDXComponent=!0},2307:(e,t,n)=>{n.d(t,{Z:()=>r});const r="data:image/png;base64,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"}}]);