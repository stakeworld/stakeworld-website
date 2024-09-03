"use strict";(self.webpackChunkstakeworld_io=self.webpackChunkstakeworld_io||[]).push([[961],{640:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var r=n(5893),t=n(1151);const o={id:"rpc",title:"RPC server",description:"Setting up a secure RPC server",slug:"/rpc",sidebar_position:4,keywords:["rpc","rpc server","wss","ws","polkadot.js","validator","polkadot","kusama","westend"]},i=void 0,a={id:"rpc",title:"RPC server",description:"Setting up a secure RPC server",source:"@site/docs/rpc.mdx",sourceDirName:".",slug:"/rpc",permalink:"/docs/rpc",draft:!1,unlisted:!1,editUrl:"https://github.com/stakeworld/website/edit/master/docs/rpc.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"rpc",title:"RPC server",description:"Setting up a secure RPC server",slug:"/rpc",sidebar_position:4,keywords:["rpc","rpc server","wss","ws","polkadot.js","validator","polkadot","kusama","westend"]},sidebar:"tutorialSidebar",previous:{title:"Database sizes",permalink:"/docs/dbsize"},next:{title:"Linux tips",permalink:"/docs/tools"}},c={},d=[{value:"Live stakeworld RPC data",id:"live-stakeworld-rpc-data",level:2},{value:"Setting up your own secure RPC server",id:"setting-up-your-own-secure-rpc-server",level:2},{value:"Archive node vs pruned node",id:"archive-node-vs-pruned-node",level:3},{value:"Secure the RPC server",id:"secure-the-rpc-server",level:3},{value:"Secure the ws port",id:"secure-the-ws-port",level:3},{value:"Using Apache2 for proxying",id:"using-apache2-for-proxying",level:3},{value:"Enabling ssl through letsencrypt",id:"enabling-ssl-through-letsencrypt",level:4},{value:"Add the proxy to the apache2 config",id:"add-the-proxy-to-the-apache2-config",level:4},{value:"Tweaking connections",id:"tweaking-connections",level:4},{value:"Rate limiting",id:"rate-limiting",level:4},{value:"Load balancing &amp; failover",id:"load-balancing--failover",level:3},{value:"Stress testing",id:"stress-testing",level:3}];function l(e){const s={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.admonition,{type:"info",children:[(0,r.jsx)(s.p,{children:"RPC servers allow access into the polkadot/kusama and parachains ecosystem. Stakeworld runs multiple public archive RPC servers:"}),(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Polkadot: ",(0,r.jsx)(s.a,{href:"https://polkadot.js.org/apps/?rpc=wss://dot-rpc.stakeworld.io",children:"dot-rpc.stakeworld.io"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["AssetHub: ",(0,r.jsx)(s.a,{href:"https://polkadot.js.org/apps/?rpc=wss://dot-rpc.stakeworld.io/assethub",children:"dot-rpc.stakeworld.io/assethub"})]}),"\n",(0,r.jsxs)(s.li,{children:["BridgeHub: ",(0,r.jsx)(s.a,{href:"https://polkadot.js.org/apps/?rpc=wss://dot-rpc.stakeworld.io/bridgehub",children:"dot-rpc.stakeworld.io/bridgehub"})]}),"\n",(0,r.jsxs)(s.li,{children:["Collectives: ",(0,r.jsx)(s.a,{href:"https://polkadot.js.org/apps/?rpc=wss://dot-rpc.stakeworld.io/collectives",children:"dot-rpc.stakeworld.io/collectives"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["Kusama: ",(0,r.jsx)(s.a,{href:"https://polkadot.js.org/apps/?rpc=wss://ksm-rpc.stakeworld.io",children:"ksm-rpc.stakeworld.io"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["AssetHub: ",(0,r.jsx)(s.a,{href:"https://polkadot.js.org/apps/?rpc=wss://ksm-rpc.stakeworld.io/assethub",children:"ksm-rpc.stakeworld.io/assethub"})]}),"\n",(0,r.jsxs)(s.li,{children:["BridgeHub: ",(0,r.jsx)(s.a,{href:"https://polkadot.js.org/apps/?rpc=wss://ksm-rpc.stakeworld.io/bridgehub",children:"ksm-rpc.stakeworld.io/bridgehub"})]}),"\n",(0,r.jsxs)(s.li,{children:["Encointer: ",(0,r.jsx)(s.a,{href:"https://polkadot.js.org/apps/?rpc=wss://ksm-rpc.stakeworld.io/encointer",children:"ksm-rpc.stakeworld.io/encointer"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["Westend: ",(0,r.jsx)(s.a,{href:"https://polkadot.js.org/apps/?rpc=wss://wnd-rpc.stakeworld.io",children:"wnd-rpc.stakeworld.io"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["AssetHub: ",(0,r.jsx)(s.a,{href:"https://polkadot.js.org/apps/?rpc=wss://wnd-rpc.stakeworld.io/westmint",children:"wnd-rpc.stakeworld.io/westmint"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["Paseo: ",(0,r.jsx)(s.a,{href:"https://polkadot.js.org/apps/?rpc=wss://pas-rpc.stakeworld.io",children:"pas-rpc.stakeworld.io"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["AssetHub: ",(0,r.jsx)(s.a,{href:"https://polkadot.js.org/apps/?rpc=wss://pas-rpc.stakeworld.io/assethub",children:"pas-rpc.stakeworld.io/assethub"})]}),"\n"]}),"\n"]}),"\n"]})]}),"\n",(0,r.jsx)(s.h2,{id:"live-stakeworld-rpc-data",children:"Live stakeworld RPC data"}),"\n",(0,r.jsx)(s.admonition,{type:"tip",children:(0,r.jsx)(s.p,{children:"Monthly data can take a minute to load"})}),"\n",(0,r.jsx)("iframe",{src:"https://monitor.stakeworld.io/public-dashboards/cef69420acd44165be7df9ad65c7cd89?orgId=1",width:"800",height:"1600",frameborder:"0"}),"\n",(0,r.jsx)(s.h2,{id:"setting-up-your-own-secure-rpc-server",children:"Setting up your own secure RPC server"}),"\n",(0,r.jsxs)(s.p,{children:["To access the polkadot, kusama and parachains networks we need some kind of access into the network. This can be achieved by ",(0,r.jsx)(s.a,{href:"./validate",children:"setting up a node"})," with a RPC server and allowing access to that RPC server via a secure websocket (wss) port. The default node setup already exposes a non secure ws socket on port 9944 (which can optionally be changed by the ",(0,r.jsx)(s.code,{children:"--ws-port"})," parameter), but for a more usable situation we need a secure websocket which is accesible through a public port."]}),"\n",(0,r.jsx)(s.h3,{id:"archive-node-vs-pruned-node",children:"Archive node vs pruned node"}),"\n",(0,r.jsx)(s.p,{children:"A pruned node knows only the recent information about the network and not its full history. Most frequently done actions can be done with a pruned node, for example see account balances, make transfers, setup session keys, staking, etc. An archive node has the full history (database) of the network and can be queried in all kind of ways, give information about transfers since the network started, historical balances, advanced queries about past events, etc."}),"\n",(0,r.jsxs)(s.p,{children:["An archive node requires a lot more ",(0,r.jsx)(s.a,{href:"./snapshot",children:"diskspace"}),".  For an archive node you need the options ",(0,r.jsx)(s.code,{children:"--state-pruning archive --blocks-pruning archive"})," in your startup settings.\n",(0,r.jsx)(s.img,{alt:"snapsize",src:n(9735).Z+"",width:"800",height:"300"})]}),"\n",(0,r.jsx)(s.admonition,{type:"tip",children:(0,r.jsx)(s.p,{children:"Inclusion in the Polkadot.js UI requires an archive node."})}),"\n",(0,r.jsx)(s.h3,{id:"secure-the-rpc-server",children:"Secure the RPC server"}),"\n",(0,r.jsxs)(s.p,{children:["Via the node startup settings you can choose ",(0,r.jsx)(s.strong,{children:"what"})," to expose with ",(0,r.jsx)(s.strong,{children:"how many"})," connections ",(0,r.jsx)(s.strong,{children:"from where"})," through your rpc server."]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.em,{children:"How many"}),": You can set your maximum connections through ",(0,r.jsx)(s.code,{children:"--ws-max-connections"}),", for example ",(0,r.jsx)(s.code,{children:"--ws-max-connections 100"})]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.em,{children:"From where"}),": by default localhost and the polkadot.js are allowed to access the RPC server, you can change this by setting ",(0,r.jsx)(s.code,{children:"--rpc-cors"}),", to allow access from everywhere you need ",(0,r.jsx)(s.code,{children:"--rpc-cors all"})]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.em,{children:"What"}),": you can limit the methods to use with ",(0,r.jsx)(s.code,{children:"--rpc-methods"}),", an easy way to set this to a safe mode is ",(0,r.jsx)(s.code,{children:"--rpc-methods Safe"})]}),"\n",(0,r.jsx)(s.h3,{id:"secure-the-ws-port",children:"Secure the ws port"}),"\n",(0,r.jsxs)(s.p,{children:['The ws port is preferably exposed from the outside as a ssl secured wss port. The "',(0,r.jsx)(s.a,{href:"https://wiki.polkadot.network/docs/maintain-wss",children:"maintain wss"}),"\" on the wiki already covers a lot of information about this, especially in relation to setting it up in a nginx configuration. This page is focussed more on a apache2 but principles are the same. The main idea is converting the non secure ws port to a secure wss port by putting it behind a ssl enabled proxy. So from outside one see's the ssl enabled apache2/nginx/other proxy server, witch redirect the request to the internal rpc node."]}),"\n",(0,r.jsx)(s.h3,{id:"using-apache2-for-proxying",children:"Using Apache2 for proxying"}),"\n",(0,r.jsxs)(s.p,{children:["Apache2 is a little heavier then nginx but also has some more tweaking posibilities. You can run it in different modes, prefork, worker or event. We chose ",(0,r.jsx)(s.a,{href:"https://httpd.apache.org/docs/2.4/mod/event.html",children:"event"})," since this seems best suited for high load enviroments. Downside is that you can't use the default php module and need to enable it via php-fm. The proxy_wstunnel module works out of the box."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"apt install apache2\na2dismod mpm_prefork\na2enmod mpm_event proxy proxy_html proxy_http proxy_wstunnel rewrite ssl\n"})}),"\n",(0,r.jsx)(s.p,{children:"If you want to enable php"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"apt install php-fpm\na2enmod proxy_fcgi setenvif\n"})}),"\n",(0,r.jsx)(s.h4,{id:"enabling-ssl-through-letsencrypt",children:"Enabling ssl through letsencrypt"}),"\n",(0,r.jsxs)(s.p,{children:["There are multiple options for getting a ssl certificate, one popular (and free) being letsencrypt. Obtaining a letsencrypt certificate can be done through for example ",(0,r.jsx)(s.a,{href:"https://certbot.eff.org/",children:"certbot"})," or ",(0,r.jsx)(s.a,{href:"https://go-acme.github.io/lego/dns/",children:"lego"})," (which has more dns provider options)."]}),"\n",(0,r.jsx)(s.h4,{id:"add-the-proxy-to-the-apache2-config",children:"Add the proxy to the apache2 config"}),"\n",(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.a,{href:"https://httpd.apache.org/docs/2.4/mod/mod_proxy_wstunnel.html",children:"mod_proxy_wstunnel"})," provides ",(0,r.jsx)(s.em,{children:"support for the tunnelling of web socket connections to a backend websockets server. The connection is automatically upgraded to a websocket connection"}),". In a ssl enabled virtualhost add:"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-apacheconf",children:"SSLProxyEngine on\nProxyRequests off\n\nProxyPass / ws://localhost:9944\nProxyPassReverse / ws://localhost:9944\n"})}),"\n",(0,r.jsx)(s.p,{children:"Older versions of mod_proxy_wstunnel do not upgrade the connection automatically and will need the following config added:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-apacheconf",children:"RewriteEngine on\nRewriteCond %{HTTP:Upgrade} websocket [NC]\nRewriteRule /(.*) ws://localhost:9944/$1 [P,L]\nRewriteRule /(.*) http://localhost:9944/$1 [P,L]\n"})}),"\n",(0,r.jsx)(s.h4,{id:"tweaking-connections",children:"Tweaking connections"}),"\n",(0,r.jsxs)(s.p,{children:["The number of connections is limited by the node itself (",(0,r.jsx)(s.code,{children:"--ws-max-connections"}),") but also by the number of threads available on the proxy server. For apache2 this can be tweaked by editing ",(0,r.jsx)(s.code,{children:"/etc/apache2/mods-enabled/mpm_event.conf"})]}),"\n",(0,r.jsx)(s.p,{children:"We are using:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-apacheconf",children:"StartServers\t\t 4\nMinSpareThreads\t\t 25\nMaxSpareThreads\t\t 75\nThreadLimit\t\t 128\nThreadsPerChild\t\t 128\nMaxRequestWorkers  \t 896\nMaxConnectionsPerChild   0\n"})}),"\n",(0,r.jsx)(s.h4,{id:"rate-limiting",children:"Rate limiting"}),"\n",(0,r.jsx)(s.p,{children:"Theoretically one client could use all connections/resources, draining the resources of the server and making it inaccessible. This can be countered by rate limiting the connections, for example by using mod_qos:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"apt install libapache2-mod-qos\na2enmod qos\n"})}),"\n",(0,r.jsxs)(s.p,{children:["And edit ",(0,r.jsx)(s.code,{children:"/etc/apache2/mods-available/qos.conf"})]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"  # allows max 50 connections from a single ip address:\n  QS_SrvMaxConnPerIP                                 50\n"})}),"\n",(0,r.jsx)(s.p,{children:"Be carefull when running behind a load balancer (for example cloudflare) because the load balancer will only use a few ip's and thus can trigger the rate limit, iso in this case it is better to use the rate limit options from the load balancer itself."}),"\n",(0,r.jsx)(s.h3,{id:"load-balancing--failover",children:"Load balancing & failover"}),"\n",(0,r.jsxs)(s.p,{children:["With multiple servers it is possible to build a load balancing or even a failover construction. A simple load balancing can be a ",(0,r.jsx)(s.a,{href:"https://en.wikipedia.org/wiki/Round-robin_DNS",children:"round robin-robin dns"})," up to a more advanced (dedicated) load balancer or a content delivery network (CDN) like cloudflare."]}),"\n",(0,r.jsx)(s.h3,{id:"stress-testing",children:"Stress testing"}),"\n",(0,r.jsx)(s.p,{children:"You can test basic usage by accessing your server through the polkadot.js UI as a custom endpoint. For example staking target display is RPC intensive and can give you an indication of performance."}),"\n",(0,r.jsxs)(s.p,{children:["There are also more dedicated stress testing solutions, we have forked the ",(0,r.jsx)(s.a,{href:"https://github.com/dwellir-public/artillery-engine-substrate",children:"Dwellir repository"})," for our testing."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash\nnvm install --lts\nnpm install -g yarn\nyarn global add artillery\nyarn global add artillery-engine-substrate\ncd /opt\ngit clone git@github.com:stakeworld/stakeworld-rpc-artillery.git\ncd /opt/stakeworld-rpc-artillery\nyarn\n./run.sh\n"})}),"\n",(0,r.jsxs)(s.p,{children:["After the ",(0,r.jsx)(s.code,{children:"run.sh"})," you can edit some variables like how many connections per second, the wss node, etc. The following is a test run for 10 seconds with 10 connections per second and maximum 20 concurrent users."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:'config:\n  target: "wss://ksm-rpc.stakeworld.io"\n  processor: "./functions.js"\n  phases:\n    - duration: 10\n      arrivalRate: 10\n      maxVusers: 20\n'})}),"\n",(0,r.jsx)(s.p,{children:"After this you get some info about the run and a report is created, which can be used for further diagnostics"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"--------------------------------\nSummary report @ 23:38:40(+0100)\n--------------------------------\n\nvusers.completed: .............................................................. 100\nvusers.created: ................................................................ 100\nvusers.created_by_name.balance: ................................................ 35\nvusers.created_by_name.complex_call: ........................................... 33\nvusers.created_by_name.headers_blocks: ......................................... 32\nvusers.failed: ................................................................. 0\nvusers.session_length:\n  min: ......................................................................... 231.7\n  max: ......................................................................... 656.1\n  median: ...................................................................... 361.5\n  p95: ......................................................................... 518.1\n  p99: ......................................................................... 645.6\nws.messages_sent: .............................................................. 163\nws.send_rate: .................................................................. 29/sec\nLog file: reports/report.json\nReport generated: reports/report.html\n"})})]})}function h(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},9735:(e,s,n)=>{n.d(s,{Z:()=>r});const r="data:image/png;base64,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"},1151:(e,s,n)=>{n.d(s,{Z:()=>a,a:()=>i});var r=n(7294);const t={},o=r.createContext(t);function i(e){const s=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(o.Provider,{value:s},e.children)}}}]);