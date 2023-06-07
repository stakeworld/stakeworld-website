"use strict";(self.webpackChunkstakeworld=self.webpackChunkstakeworld||[]).push([[961],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),h=a,m=u["".concat(l,".").concat(h)]||u[h]||d[h]||o;return n?r.createElement(m,s(s({ref:t},c),{},{components:n})):r.createElement(m,s({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1647:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=n(3117),a=(n(7294),n(3905));const o={id:"rpc",title:"RPC server",description:"Setting up a secure RPC server",slug:"/rpc",sidebar_position:4,keywords:["rpc","rpc server","wss","ws","polkadot.js","validator","polkadot","kusama","westend"]},s=void 0,i={unversionedId:"rpc",id:"rpc",title:"RPC server",description:"Setting up a secure RPC server",source:"@site/docs/rpc.mdx",sourceDirName:".",slug:"/rpc",permalink:"/docs/rpc",draft:!1,editUrl:"https://github.com/stakeworld/website/edit/master/docs/rpc.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"rpc",title:"RPC server",description:"Setting up a secure RPC server",slug:"/rpc",sidebar_position:4,keywords:["rpc","rpc server","wss","ws","polkadot.js","validator","polkadot","kusama","westend"]},sidebar:"tutorialSidebar",previous:{title:"Database sizes",permalink:"/docs/dbsize"},next:{title:"Linux tips",permalink:"/docs/tools"}},l={},p=[{value:"Live stakeworld RPC data",id:"live-stakeworld-rpc-data",level:2},{value:"Setting up your own secure RPC server",id:"setting-up-your-own-secure-rpc-server",level:2},{value:"Archive node vs pruned node",id:"archive-node-vs-pruned-node",level:3},{value:"Secure the RPC server",id:"secure-the-rpc-server",level:3},{value:"Secure the ws port",id:"secure-the-ws-port",level:3},{value:"Using Apache2 for proxying",id:"using-apache2-for-proxying",level:3},{value:"Enabling ssl through letsencrypt",id:"enabling-ssl-through-letsencrypt",level:4},{value:"Add the proxy to the apache2 config",id:"add-the-proxy-to-the-apache2-config",level:4},{value:"Tweaking connections",id:"tweaking-connections",level:4},{value:"Rate limiting",id:"rate-limiting",level:4},{value:"Load balancing &amp; failover",id:"load-balancing--failover",level:3},{value:"Stress testing",id:"stress-testing",level:3}],c={toc:p};function d(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"RPC servers allow access into the polkadot/kusama and parachains ecosystem. Stakeworld runs multiple public archive RPC servers: "),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"Polkadot: ",(0,a.kt)("a",{parentName:"li",href:"https://polkadot.js.org/apps/?rpc=wss://dot-rpc.stakeworld.io"},"dot-rpc.stakeworld.io"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Statemint: ",(0,a.kt)("a",{parentName:"li",href:"https://polkadot.js.org/apps/?rpc=wss://dot-rpc.stakeworld.io/statemint"},"dot-rpc.stakeworld.io/statemint")),(0,a.kt)("li",{parentName:"ul"},"Bridgehub: ",(0,a.kt)("a",{parentName:"li",href:"https://polkadot.js.org/apps/?rpc=wss://dot-rpc.stakeworld.io/bridgehub"},"dot-rpc.stakeworld.io/bridgehub")))),(0,a.kt)("li",{parentName:"ul"},"Kusama: ",(0,a.kt)("a",{parentName:"li",href:"https://polkadot.js.org/apps/?rpc=wss://ksm-rpc.stakeworld.io"},"ksm-rpc.stakeworld.io"),"  ",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Statemine: ",(0,a.kt)("a",{parentName:"li",href:"https://polkadot.js.org/apps/?rpc=wss://ksm-rpc.stakeworld.io/statemine"},"ksm-rpc.stakeworld.io/statemine")),(0,a.kt)("li",{parentName:"ul"},"Bridgehub: ",(0,a.kt)("a",{parentName:"li",href:"https://polkadot.js.org/apps/?rpc=wss://ksm-rpc.stakeworld.io/bridgehub"},"ksm-rpc.stakeworld.io/bridgehub")))),(0,a.kt)("li",{parentName:"ul"},"Westend: ",(0,a.kt)("a",{parentName:"li",href:"https://polkadot.js.org/apps/?rpc=wss://wnd-rpc.stakeworld.io"},"wnd-rpc.stakeworld.io"),"  ",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Westmint: ",(0,a.kt)("a",{parentName:"li",href:"https://polkadot.js.org/apps/?rpc=wss://wnd-rpc.stakeworld.io/westmint"},"wnd-rpc.stakeworld.io/westmint")))))),(0,a.kt)("h2",{id:"live-stakeworld-rpc-data"},"Live stakeworld RPC data"),(0,a.kt)("iframe",{src:"https://monitor.stakeworld.io/public-dashboards/cb9695f06cc94b9d878d5c77fe8017d0",width:"700",height:"1050",frameborder:"0"}),(0,a.kt)("h2",{id:"setting-up-your-own-secure-rpc-server"},"Setting up your own secure RPC server"),(0,a.kt)("p",null,"To access the polkadot, kusama and parachains networks we need some kind of access into the network. This can be achieved by ",(0,a.kt)("a",{parentName:"p",href:"./validate"},"setting up a node")," with a RPC server and allowing access to that RPC server via a secure websocket (wss) port. The default node setup already exposes a non secure ws socket on port 9944 (which can optionally be changed by the ",(0,a.kt)("inlineCode",{parentName:"p"},"--ws-port")," parameter), but for a more usable situation we need a secure websocket which is accesible through a public port."),(0,a.kt)("h3",{id:"archive-node-vs-pruned-node"},"Archive node vs pruned node"),(0,a.kt)("p",null,"A pruned node knows only the recent information about the network and not its full history. Most frequently done actions can be done with a pruned node, for example see account balances, make transfers, setup session keys, staking, etc. An archive node has the full history (database) of the network and can be queried in all kind of ways, give information about transfers since the network started, historical balances, advanced queries about past events, etc. "),(0,a.kt)("p",null,"An archive node requires a lot more ",(0,a.kt)("a",{parentName:"p",href:"./snapshot"},"diskspace"),".  For an archive node you need the options ",(0,a.kt)("inlineCode",{parentName:"p"},"--state-pruning archive --blocks-pruning archive")," in your startup settings.\n",(0,a.kt)("img",{alt:"snapsize",src:n(2307).Z,width:"800",height:"300"})),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Inclusion in the Polkadot.js UI requires an archive node.")),(0,a.kt)("h3",{id:"secure-the-rpc-server"},"Secure the RPC server"),(0,a.kt)("p",null,"Via the node startup settings you can choose ",(0,a.kt)("strong",{parentName:"p"},"what")," to expose with ",(0,a.kt)("strong",{parentName:"p"},"how many")," connections ",(0,a.kt)("strong",{parentName:"p"},"from where")," through your rpc server."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"How many"),": You can set your maximum connections through ",(0,a.kt)("inlineCode",{parentName:"p"},"--ws-max-connections"),", for example ",(0,a.kt)("inlineCode",{parentName:"p"},"--ws-max-connections 100")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"From where"),": by default localhost and the polkadot.js are allowed to access the RPC server, you can change this by setting ",(0,a.kt)("inlineCode",{parentName:"p"},"--rpc-cors"),", to allow access from everywhere you need ",(0,a.kt)("inlineCode",{parentName:"p"},"--rpc-cors all")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"What"),": you can limit the methods to use with ",(0,a.kt)("inlineCode",{parentName:"p"},"--rpc-methods"),", an easy way to set this to a safe mode is ",(0,a.kt)("inlineCode",{parentName:"p"},"--rpc-methods Safe")),(0,a.kt)("h3",{id:"secure-the-ws-port"},"Secure the ws port"),(0,a.kt)("p",null,'The ws port is preferably exposed from the outside as a ssl secured wss port. The "',(0,a.kt)("a",{parentName:"p",href:"https://wiki.polkadot.network/docs/maintain-wss"},"maintain wss"),"\" on the wiki already covers a lot of information about this, especially in relation to setting it up in a nginx configuration. This page is focussed more on a apache2 but principles are the same. The main idea is converting the non secure ws port to a secure wss port by putting it behind a ssl enabled proxy. So from outside one see's the ssl enabled apache2/nginx/other proxy server, witch redirect the request to the internal rpc node."),(0,a.kt)("h3",{id:"using-apache2-for-proxying"},"Using Apache2 for proxying"),(0,a.kt)("p",null,"Apache2 is a little heavier then nginx but also has some more tweaking posibilities. You can run it in different modes, prefork, worker or event. We chose ",(0,a.kt)("a",{parentName:"p",href:"https://httpd.apache.org/docs/2.4/mod/event.html"},"event")," since this seems best suited for high load enviroments. Downside is that you can't use the default php module and need to enable it via php-fm. The proxy_wstunnel module works out of the box. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"apt install apache2\na2dismod mpm_prefork\na2enmod mpm_event proxy proxy_html proxy_http proxy_wstunnel rewrite ssl\n")),(0,a.kt)("p",null,"If you want to enable php"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"apt install php-fpm\na2enmod proxy_fcgi setenvif\n")),(0,a.kt)("h4",{id:"enabling-ssl-through-letsencrypt"},"Enabling ssl through letsencrypt"),(0,a.kt)("p",null,"There are multiple options for getting a ssl certificate, one popular (and free) being letsencrypt. Obtaining a letsencrypt certificate can be done through for example ",(0,a.kt)("a",{parentName:"p",href:"https://certbot.eff.org/"},"certbot")," or ",(0,a.kt)("a",{parentName:"p",href:"https://go-acme.github.io/lego/dns/"},"lego")," (which has more dns provider options)."),(0,a.kt)("h4",{id:"add-the-proxy-to-the-apache2-config"},"Add the proxy to the apache2 config"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://httpd.apache.org/docs/2.4/mod/mod_proxy_wstunnel.html"},"mod_proxy_wstunnel")," provides ",(0,a.kt)("em",{parentName:"p"},"support for the tunnelling of web socket connections to a backend websockets server. The connection is automatically upgraded to a websocket connection"),". In a ssl enabled virtualhost add:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-apacheconf"},"SSLProxyEngine on\nProxyRequests off\n\nProxyPass / ws://localhost:9944\nProxyPassReverse / ws://localhost:9944\n")),(0,a.kt)("p",null,"Older versions of mod_proxy_wstunnel do not upgrade the connection automatically and will need the following config added:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-apacheconf"},"RewriteEngine on\nRewriteCond %{HTTP:Upgrade} websocket [NC]\nRewriteRule /(.*) ws://localhost:9944/$1 [P,L]\nRewriteRule /(.*) http://localhost:9944/$1 [P,L]\n")),(0,a.kt)("h4",{id:"tweaking-connections"},"Tweaking connections"),(0,a.kt)("p",null,"The number of connections is limited by the node itself (",(0,a.kt)("inlineCode",{parentName:"p"},"--ws-max-connections"),") but also by the number of threads available on the proxy server. For apache2 this can be tweaked by editing ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/apache2/mods-enabled/mpm_event.conf")),(0,a.kt)("p",null,"We are using: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-apacheconf"},"StartServers         4\nMinSpareThreads      25\nMaxSpareThreads      75\nThreadLimit      128\nThreadsPerChild      128\nMaxRequestWorkers    896\nMaxConnectionsPerChild   0\n")),(0,a.kt)("h4",{id:"rate-limiting"},"Rate limiting"),(0,a.kt)("p",null,"Theoretically one client could use all connections/resources, draining the resources of the server and making it inaccessible. This can be countered by rate limiting the connections, for example by using mod_qos:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"apt install libapache2-mod-qos\na2enmod qos\n")),(0,a.kt)("p",null,"And edit ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/apache2/mods-available/qos.conf")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"  # allows max 50 connections from a single ip address:\n  QS_SrvMaxConnPerIP                                 50\n")),(0,a.kt)("p",null,"Be carefull when running behind a load balancer (for example cloudflare) because the load balancer will only use a few ip's and thus can trigger the rate limit, iso in this case it is better to use the rate limit options from the load balancer itself."),(0,a.kt)("h3",{id:"load-balancing--failover"},"Load balancing & failover"),(0,a.kt)("p",null,"With multiple servers it is possible to build a load balancing or even a failover construction. A simple load balancing can be a ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Round-robin_DNS"},"round robin-robin dns")," up to a more advanced (dedicated) load balancer or a content delivery network (CDN) like cloudflare.   "),(0,a.kt)("h3",{id:"stress-testing"},"Stress testing"),(0,a.kt)("p",null,"You can test basic usage by accessing your server through the polkadot.js UI as a custom endpoint. For example staking target display is RPC intensive and can give you an indication of performance. "),(0,a.kt)("p",null,"There are also more dedicated stress testing solutions, we have forked the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/dwellir-public/artillery-engine-substrate"},"Dwellir repository")," for our testing."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash\nnvm install --lts\nnpm install -g yarn\nyarn global add artillery\nyarn global add artillery-engine-substrate\ncd /opt\ngit clone git@github.com:stakeworld/stakeworld-rpc-artillery.git\ncd /opt/stakeworld-rpc-artillery\nyarn\n./run.sh\n")),(0,a.kt)("p",null,"After the ",(0,a.kt)("inlineCode",{parentName:"p"},"run.sh")," you can edit some variables like how many connections per second, the wss node, etc. The following is a test run for 10 seconds with 10 connections per second and maximum 20 concurrent users. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'config:\n  target: "wss://ksm-rpc.stakeworld.io"\n  processor: "./functions.js"\n  phases:\n    - duration: 10\n      arrivalRate: 10\n      maxVusers: 20\n')),(0,a.kt)("p",null,"After this you get some info about the run and a report is created, which can be used for further diagnostics"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"--------------------------------\nSummary report @ 23:38:40(+0100)\n--------------------------------\n\nvusers.completed: .............................................................. 100\nvusers.created: ................................................................ 100\nvusers.created_by_name.balance: ................................................ 35\nvusers.created_by_name.complex_call: ........................................... 33\nvusers.created_by_name.headers_blocks: ......................................... 32\nvusers.failed: ................................................................. 0\nvusers.session_length:\n  min: ......................................................................... 231.7\n  max: ......................................................................... 656.1\n  median: ...................................................................... 361.5\n  p95: ......................................................................... 518.1\n  p99: ......................................................................... 645.6\nws.messages_sent: .............................................................. 163\nws.send_rate: .................................................................. 29/sec\nLog file: reports/report.json\nReport generated: reports/report.html\n")))}d.isMDXComponent=!0},2307:(e,t,n)=>{n.d(t,{Z:()=>r});const r="data:image/png;base64,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"}}]);