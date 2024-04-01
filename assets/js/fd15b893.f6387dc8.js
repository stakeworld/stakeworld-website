"use strict";(self.webpackChunkstakeworld_io=self.webpackChunkstakeworld_io||[]).push([[961],{640:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var r=n(5893),t=n(1151);const o={id:"rpc",title:"RPC server",description:"Setting up a secure RPC server",slug:"/rpc",sidebar_position:4,keywords:["rpc","rpc server","wss","ws","polkadot.js","validator","polkadot","kusama","westend"]},i=void 0,a={id:"rpc",title:"RPC server",description:"Setting up a secure RPC server",source:"@site/docs/rpc.mdx",sourceDirName:".",slug:"/rpc",permalink:"/docs/rpc",draft:!1,unlisted:!1,editUrl:"https://github.com/stakeworld/website/edit/master/docs/rpc.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"rpc",title:"RPC server",description:"Setting up a secure RPC server",slug:"/rpc",sidebar_position:4,keywords:["rpc","rpc server","wss","ws","polkadot.js","validator","polkadot","kusama","westend"]},sidebar:"tutorialSidebar",previous:{title:"Database sizes",permalink:"/docs/dbsize"},next:{title:"Linux tips",permalink:"/docs/tools"}},c={},d=[{value:"Live stakeworld RPC data",id:"live-stakeworld-rpc-data",level:2},{value:"Setting up your own secure RPC server",id:"setting-up-your-own-secure-rpc-server",level:2},{value:"Archive node vs pruned node",id:"archive-node-vs-pruned-node",level:3},{value:"Secure the RPC server",id:"secure-the-rpc-server",level:3},{value:"Secure the ws port",id:"secure-the-ws-port",level:3},{value:"Using Apache2 for proxying",id:"using-apache2-for-proxying",level:3},{value:"Enabling ssl through letsencrypt",id:"enabling-ssl-through-letsencrypt",level:4},{value:"Add the proxy to the apache2 config",id:"add-the-proxy-to-the-apache2-config",level:4},{value:"Tweaking connections",id:"tweaking-connections",level:4},{value:"Rate limiting",id:"rate-limiting",level:4},{value:"Load balancing &amp; failover",id:"load-balancing--failover",level:3},{value:"Stress testing",id:"stress-testing",level:3}];function l(e){const s={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.admonition,{type:"info",children:[(0,r.jsx)(s.p,{children:"RPC servers allow access into the polkadot/kusama and parachains ecosystem. Stakeworld runs multiple public archive RPC servers:"}),(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Polkadot: ",(0,r.jsx)(s.a,{href:"https://polkadot.js.org/apps/?rpc=wss://dot-rpc.stakeworld.io",children:"dot-rpc.stakeworld.io"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["AssetHub: ",(0,r.jsx)(s.a,{href:"https://polkadot.js.org/apps/?rpc=wss://dot-rpc.stakeworld.io/statemint",children:"dot-rpc.stakeworld.io/statemint"})]}),"\n",(0,r.jsxs)(s.li,{children:["BridgeHub: ",(0,r.jsx)(s.a,{href:"https://polkadot.js.org/apps/?rpc=wss://dot-rpc.stakeworld.io/bridgehub",children:"dot-rpc.stakeworld.io/bridgehub"})]}),"\n",(0,r.jsxs)(s.li,{children:["Collectives: ",(0,r.jsx)(s.a,{href:"https://polkadot.js.org/apps/?rpc=wss://dot-rpc.stakeworld.io/collectives",children:"dot-rpc.stakeworld.io/collectives"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["Kusama: ",(0,r.jsx)(s.a,{href:"https://polkadot.js.org/apps/?rpc=wss://ksm-rpc.stakeworld.io",children:"ksm-rpc.stakeworld.io"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["AssetHub: ",(0,r.jsx)(s.a,{href:"https://polkadot.js.org/apps/?rpc=wss://ksm-rpc.stakeworld.io/statemine",children:"ksm-rpc.stakeworld.io/statemine"})]}),"\n",(0,r.jsxs)(s.li,{children:["BridgeHub: ",(0,r.jsx)(s.a,{href:"https://polkadot.js.org/apps/?rpc=wss://ksm-rpc.stakeworld.io/bridgehub",children:"ksm-rpc.stakeworld.io/bridgehub"})]}),"\n",(0,r.jsxs)(s.li,{children:["Encointer: ",(0,r.jsx)(s.a,{href:"https://polkadot.js.org/apps/?rpc=wss://ksm-rpc.stakeworld.io/encointer",children:"ksm-rpc.stakeworld.io/encointer"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["Westend: ",(0,r.jsx)(s.a,{href:"https://polkadot.js.org/apps/?rpc=wss://wnd-rpc.stakeworld.io",children:"wnd-rpc.stakeworld.io"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["AssetHub: ",(0,r.jsx)(s.a,{href:"https://polkadot.js.org/apps/?rpc=wss://wnd-rpc.stakeworld.io/westmint",children:"wnd-rpc.stakeworld.io/westmint"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["Paseo: ",(0,r.jsx)(s.a,{href:"https://polkadot.js.org/apps/?rpc=wss://pas-rpc.stakeworld.io",children:"pas-rpc.stakeworld.io"})]}),"\n"]})]}),"\n",(0,r.jsx)(s.h2,{id:"live-stakeworld-rpc-data",children:"Live stakeworld RPC data"}),"\n",(0,r.jsx)(s.admonition,{type:"tip",children:(0,r.jsx)(s.p,{children:"Monthly data can take a minute to load"})}),"\n",(0,r.jsx)("iframe",{src:"https://monitor.stakeworld.io/public-dashboards/cef69420acd44165be7df9ad65c7cd89?orgId=1",width:"800",height:"1600",frameborder:"0"}),"\n",(0,r.jsx)(s.h2,{id:"setting-up-your-own-secure-rpc-server",children:"Setting up your own secure RPC server"}),"\n",(0,r.jsxs)(s.p,{children:["To access the polkadot, kusama and parachains networks we need some kind of access into the network. This can be achieved by ",(0,r.jsx)(s.a,{href:"./validate",children:"setting up a node"})," with a RPC server and allowing access to that RPC server via a secure websocket (wss) port. The default node setup already exposes a non secure ws socket on port 9944 (which can optionally be changed by the ",(0,r.jsx)(s.code,{children:"--ws-port"})," parameter), but for a more usable situation we need a secure websocket which is accesible through a public port."]}),"\n",(0,r.jsx)(s.h3,{id:"archive-node-vs-pruned-node",children:"Archive node vs pruned node"}),"\n",(0,r.jsx)(s.p,{children:"A pruned node knows only the recent information about the network and not its full history. Most frequently done actions can be done with a pruned node, for example see account balances, make transfers, setup session keys, staking, etc. An archive node has the full history (database) of the network and can be queried in all kind of ways, give information about transfers since the network started, historical balances, advanced queries about past events, etc."}),"\n",(0,r.jsxs)(s.p,{children:["An archive node requires a lot more ",(0,r.jsx)(s.a,{href:"./snapshot",children:"diskspace"}),".  For an archive node you need the options ",(0,r.jsx)(s.code,{children:"--state-pruning archive --blocks-pruning archive"})," in your startup settings.\n",(0,r.jsx)(s.img,{alt:"snapsize",src:n(9735).Z+"",width:"800",height:"300"})]}),"\n",(0,r.jsx)(s.admonition,{type:"tip",children:(0,r.jsx)(s.p,{children:"Inclusion in the Polkadot.js UI requires an archive node."})}),"\n",(0,r.jsx)(s.h3,{id:"secure-the-rpc-server",children:"Secure the RPC server"}),"\n",(0,r.jsxs)(s.p,{children:["Via the node startup settings you can choose ",(0,r.jsx)(s.strong,{children:"what"})," to expose with ",(0,r.jsx)(s.strong,{children:"how many"})," connections ",(0,r.jsx)(s.strong,{children:"from where"})," through your rpc server."]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.em,{children:"How many"}),": You can set your maximum connections through ",(0,r.jsx)(s.code,{children:"--ws-max-connections"}),", for example ",(0,r.jsx)(s.code,{children:"--ws-max-connections 100"})]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.em,{children:"From where"}),": by default localhost and the polkadot.js are allowed to access the RPC server, you can change this by setting ",(0,r.jsx)(s.code,{children:"--rpc-cors"}),", to allow access from everywhere you need ",(0,r.jsx)(s.code,{children:"--rpc-cors all"})]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.em,{children:"What"}),": you can limit the methods to use with ",(0,r.jsx)(s.code,{children:"--rpc-methods"}),", an easy way to set this to a safe mode is ",(0,r.jsx)(s.code,{children:"--rpc-methods Safe"})]}),"\n",(0,r.jsx)(s.h3,{id:"secure-the-ws-port",children:"Secure the ws port"}),"\n",(0,r.jsxs)(s.p,{children:['The ws port is preferably exposed from the outside as a ssl secured wss port. The "',(0,r.jsx)(s.a,{href:"https://wiki.polkadot.network/docs/maintain-wss",children:"maintain wss"}),"\" on the wiki already covers a lot of information about this, especially in relation to setting it up in a nginx configuration. This page is focussed more on a apache2 but principles are the same. The main idea is converting the non secure ws port to a secure wss port by putting it behind a ssl enabled proxy. So from outside one see's the ssl enabled apache2/nginx/other proxy server, witch redirect the request to the internal rpc node."]}),"\n",(0,r.jsx)(s.h3,{id:"using-apache2-for-proxying",children:"Using Apache2 for proxying"}),"\n",(0,r.jsxs)(s.p,{children:["Apache2 is a little heavier then nginx but also has some more tweaking posibilities. You can run it in different modes, prefork, worker or event. We chose ",(0,r.jsx)(s.a,{href:"https://httpd.apache.org/docs/2.4/mod/event.html",children:"event"})," since this seems best suited for high load enviroments. Downside is that you can't use the default php module and need to enable it via php-fm. The proxy_wstunnel module works out of the box."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"apt install apache2\na2dismod mpm_prefork\na2enmod mpm_event proxy proxy_html proxy_http proxy_wstunnel rewrite ssl\n"})}),"\n",(0,r.jsx)(s.p,{children:"If you want to enable php"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"apt install php-fpm\na2enmod proxy_fcgi setenvif\n"})}),"\n",(0,r.jsx)(s.h4,{id:"enabling-ssl-through-letsencrypt",children:"Enabling ssl through letsencrypt"}),"\n",(0,r.jsxs)(s.p,{children:["There are multiple options for getting a ssl certificate, one popular (and free) being letsencrypt. Obtaining a letsencrypt certificate can be done through for example ",(0,r.jsx)(s.a,{href:"https://certbot.eff.org/",children:"certbot"})," or ",(0,r.jsx)(s.a,{href:"https://go-acme.github.io/lego/dns/",children:"lego"})," (which has more dns provider options)."]}),"\n",(0,r.jsx)(s.h4,{id:"add-the-proxy-to-the-apache2-config",children:"Add the proxy to the apache2 config"}),"\n",(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.a,{href:"https://httpd.apache.org/docs/2.4/mod/mod_proxy_wstunnel.html",children:"mod_proxy_wstunnel"})," provides ",(0,r.jsx)(s.em,{children:"support for the tunnelling of web socket connections to a backend websockets server. The connection is automatically upgraded to a websocket connection"}),". In a ssl enabled virtualhost add:"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-apacheconf",children:"SSLProxyEngine on\nProxyRequests off\n\nProxyPass / ws://localhost:9944\nProxyPassReverse / ws://localhost:9944\n"})}),"\n",(0,r.jsx)(s.p,{children:"Older versions of mod_proxy_wstunnel do not upgrade the connection automatically and will need the following config added:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-apacheconf",children:"RewriteEngine on\nRewriteCond %{HTTP:Upgrade} websocket [NC]\nRewriteRule /(.*) ws://localhost:9944/$1 [P,L]\nRewriteRule /(.*) http://localhost:9944/$1 [P,L]\n"})}),"\n",(0,r.jsx)(s.h4,{id:"tweaking-connections",children:"Tweaking connections"}),"\n",(0,r.jsxs)(s.p,{children:["The number of connections is limited by the node itself (",(0,r.jsx)(s.code,{children:"--ws-max-connections"}),") but also by the number of threads available on the proxy server. For apache2 this can be tweaked by editing ",(0,r.jsx)(s.code,{children:"/etc/apache2/mods-enabled/mpm_event.conf"})]}),"\n",(0,r.jsx)(s.p,{children:"We are using:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-apacheconf",children:"StartServers\t\t 4\nMinSpareThreads\t\t 25\nMaxSpareThreads\t\t 75\nThreadLimit\t\t 128\nThreadsPerChild\t\t 128\nMaxRequestWorkers  \t 896\nMaxConnectionsPerChild   0\n"})}),"\n",(0,r.jsx)(s.h4,{id:"rate-limiting",children:"Rate limiting"}),"\n",(0,r.jsx)(s.p,{children:"Theoretically one client could use all connections/resources, draining the resources of the server and making it inaccessible. This can be countered by rate limiting the connections, for example by using mod_qos:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"apt install libapache2-mod-qos\na2enmod qos\n"})}),"\n",(0,r.jsxs)(s.p,{children:["And edit ",(0,r.jsx)(s.code,{children:"/etc/apache2/mods-available/qos.conf"})]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"  # allows max 50 connections from a single ip address:\n  QS_SrvMaxConnPerIP                                 50\n"})}),"\n",(0,r.jsx)(s.p,{children:"Be carefull when running behind a load balancer (for example cloudflare) because the load balancer will only use a few ip's and thus can trigger the rate limit, iso in this case it is better to use the rate limit options from the load balancer itself."}),"\n",(0,r.jsx)(s.h3,{id:"load-balancing--failover",children:"Load balancing & failover"}),"\n",(0,r.jsxs)(s.p,{children:["With multiple servers it is possible to build a load balancing or even a failover construction. A simple load balancing can be a ",(0,r.jsx)(s.a,{href:"https://en.wikipedia.org/wiki/Round-robin_DNS",children:"round robin-robin dns"})," up to a more advanced (dedicated) load balancer or a content delivery network (CDN) like cloudflare."]}),"\n",(0,r.jsx)(s.h3,{id:"stress-testing",children:"Stress testing"}),"\n",(0,r.jsx)(s.p,{children:"You can test basic usage by accessing your server through the polkadot.js UI as a custom endpoint. For example staking target display is RPC intensive and can give you an indication of performance."}),"\n",(0,r.jsxs)(s.p,{children:["There are also more dedicated stress testing solutions, we have forked the ",(0,r.jsx)(s.a,{href:"https://github.com/dwellir-public/artillery-engine-substrate",children:"Dwellir repository"})," for our testing."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash\nnvm install --lts\nnpm install -g yarn\nyarn global add artillery\nyarn global add artillery-engine-substrate\ncd /opt\ngit clone git@github.com:stakeworld/stakeworld-rpc-artillery.git\ncd /opt/stakeworld-rpc-artillery\nyarn\n./run.sh\n"})}),"\n",(0,r.jsxs)(s.p,{children:["After the ",(0,r.jsx)(s.code,{children:"run.sh"})," you can edit some variables like how many connections per second, the wss node, etc. The following is a test run for 10 seconds with 10 connections per second and maximum 20 concurrent users."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:'config:\n  target: "wss://ksm-rpc.stakeworld.io"\n  processor: "./functions.js"\n  phases:\n    - duration: 10\n      arrivalRate: 10\n      maxVusers: 20\n'})}),"\n",(0,r.jsx)(s.p,{children:"After this you get some info about the run and a report is created, which can be used for further diagnostics"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"--------------------------------\nSummary report @ 23:38:40(+0100)\n--------------------------------\n\nvusers.completed: .............................................................. 100\nvusers.created: ................................................................ 100\nvusers.created_by_name.balance: ................................................ 35\nvusers.created_by_name.complex_call: ........................................... 33\nvusers.created_by_name.headers_blocks: ......................................... 32\nvusers.failed: ................................................................. 0\nvusers.session_length:\n  min: ......................................................................... 231.7\n  max: ......................................................................... 656.1\n  median: ...................................................................... 361.5\n  p95: ......................................................................... 518.1\n  p99: ......................................................................... 645.6\nws.messages_sent: .............................................................. 163\nws.send_rate: .................................................................. 29/sec\nLog file: reports/report.json\nReport generated: reports/report.html\n"})})]})}function h(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},9735:(e,s,n)=>{n.d(s,{Z:()=>r});const r="data:image/png;base64,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"},1151:(e,s,n)=>{n.d(s,{Z:()=>a,a:()=>i});var r=n(7294);const t={},o=r.createContext(t);function i(e){const s=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(o.Provider,{value:s},e.children)}}}]);