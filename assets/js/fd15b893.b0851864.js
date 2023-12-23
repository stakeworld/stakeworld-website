"use strict";(self.webpackChunkstakeworld_io=self.webpackChunkstakeworld_io||[]).push([[961],{640:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var r=s(5893),t=s(1151);const o={id:"rpc",title:"RPC server",description:"Setting up a secure RPC server",slug:"/rpc",sidebar_position:4,keywords:["rpc","rpc server","wss","ws","polkadot.js","validator","polkadot","kusama","westend"]},i=void 0,a={id:"rpc",title:"RPC server",description:"Setting up a secure RPC server",source:"@site/docs/rpc.mdx",sourceDirName:".",slug:"/rpc",permalink:"/docs/rpc",draft:!1,unlisted:!1,editUrl:"https://github.com/stakeworld/website/edit/master/docs/rpc.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"rpc",title:"RPC server",description:"Setting up a secure RPC server",slug:"/rpc",sidebar_position:4,keywords:["rpc","rpc server","wss","ws","polkadot.js","validator","polkadot","kusama","westend"]},sidebar:"tutorialSidebar",previous:{title:"Database sizes",permalink:"/docs/dbsize"},next:{title:"Linux tips",permalink:"/docs/tools"}},d={},c=[{value:"Live stakeworld RPC data",id:"live-stakeworld-rpc-data",level:2},{value:"Setting up your own secure RPC server",id:"setting-up-your-own-secure-rpc-server",level:2},{value:"Archive node vs pruned node",id:"archive-node-vs-pruned-node",level:3},{value:"Secure the RPC server",id:"secure-the-rpc-server",level:3},{value:"Secure the ws port",id:"secure-the-ws-port",level:3},{value:"Using Apache2 for proxying",id:"using-apache2-for-proxying",level:3},{value:"Enabling ssl through letsencrypt",id:"enabling-ssl-through-letsencrypt",level:4},{value:"Add the proxy to the apache2 config",id:"add-the-proxy-to-the-apache2-config",level:4},{value:"Tweaking connections",id:"tweaking-connections",level:4},{value:"Rate limiting",id:"rate-limiting",level:4},{value:"Load balancing &amp; failover",id:"load-balancing--failover",level:3},{value:"Stress testing",id:"stress-testing",level:3}];function l(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.admonition,{type:"tip",children:[(0,r.jsx)(n.p,{children:"RPC servers allow access into the polkadot/kusama and parachains ecosystem. Stakeworld runs multiple public archive RPC servers:"}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Polkadot: ",(0,r.jsx)(n.a,{href:"https://polkadot.js.org/apps/?rpc=wss://dot-rpc.stakeworld.io",children:"dot-rpc.stakeworld.io"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["AssetHub: ",(0,r.jsx)(n.a,{href:"https://polkadot.js.org/apps/?rpc=wss://dot-rpc.stakeworld.io/statemint",children:"dot-rpc.stakeworld.io/statemint"})]}),"\n",(0,r.jsxs)(n.li,{children:["BridgeHub: ",(0,r.jsx)(n.a,{href:"https://polkadot.js.org/apps/?rpc=wss://dot-rpc.stakeworld.io/bridgehub",children:"dot-rpc.stakeworld.io/bridgehub"})]}),"\n",(0,r.jsxs)(n.li,{children:["Collectives: ",(0,r.jsx)(n.a,{href:"https://polkadot.js.org/apps/?rpc=wss://dot-rpc.stakeworld.io/collectives",children:"dot-rpc.stakeworld.io/collectives"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Kusama: ",(0,r.jsx)(n.a,{href:"https://polkadot.js.org/apps/?rpc=wss://ksm-rpc.stakeworld.io",children:"ksm-rpc.stakeworld.io"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["AssetHub: ",(0,r.jsx)(n.a,{href:"https://polkadot.js.org/apps/?rpc=wss://ksm-rpc.stakeworld.io/statemine",children:"ksm-rpc.stakeworld.io/statemine"})]}),"\n",(0,r.jsxs)(n.li,{children:["BridgeHub: ",(0,r.jsx)(n.a,{href:"https://polkadot.js.org/apps/?rpc=wss://ksm-rpc.stakeworld.io/bridgehub",children:"ksm-rpc.stakeworld.io/bridgehub"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Westend: ",(0,r.jsx)(n.a,{href:"https://polkadot.js.org/apps/?rpc=wss://wnd-rpc.stakeworld.io",children:"wnd-rpc.stakeworld.io"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["AssetHub: ",(0,r.jsx)(n.a,{href:"https://polkadot.js.org/apps/?rpc=wss://wnd-rpc.stakeworld.io/westmint",children:"wnd-rpc.stakeworld.io/westmint"})]}),"\n"]}),"\n"]}),"\n"]})]}),"\n",(0,r.jsx)(n.h2,{id:"live-stakeworld-rpc-data",children:"Live stakeworld RPC data"}),"\n",(0,r.jsx)("iframe",{src:"https://monitor.stakeworld.io/public-dashboards/cef69420acd44165be7df9ad65c7cd89?orgId=1",width:"800",height:"1400",frameborder:"0"}),"\n",(0,r.jsx)(n.h2,{id:"setting-up-your-own-secure-rpc-server",children:"Setting up your own secure RPC server"}),"\n",(0,r.jsxs)(n.p,{children:["To access the polkadot, kusama and parachains networks we need some kind of access into the network. This can be achieved by ",(0,r.jsx)(n.a,{href:"./validate",children:"setting up a node"})," with a RPC server and allowing access to that RPC server via a secure websocket (wss) port. The default node setup already exposes a non secure ws socket on port 9944 (which can optionally be changed by the ",(0,r.jsx)(n.code,{children:"--ws-port"})," parameter), but for a more usable situation we need a secure websocket which is accesible through a public port."]}),"\n",(0,r.jsx)(n.h3,{id:"archive-node-vs-pruned-node",children:"Archive node vs pruned node"}),"\n",(0,r.jsx)(n.p,{children:"A pruned node knows only the recent information about the network and not its full history. Most frequently done actions can be done with a pruned node, for example see account balances, make transfers, setup session keys, staking, etc. An archive node has the full history (database) of the network and can be queried in all kind of ways, give information about transfers since the network started, historical balances, advanced queries about past events, etc."}),"\n",(0,r.jsxs)(n.p,{children:["An archive node requires a lot more ",(0,r.jsx)(n.a,{href:"./snapshot",children:"diskspace"}),".  For an archive node you need the options ",(0,r.jsx)(n.code,{children:"--state-pruning archive --blocks-pruning archive"})," in your startup settings.\n",(0,r.jsx)(n.img,{alt:"snapsize",src:s(2307).Z+"",width:"800",height:"300"})]}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"Inclusion in the Polkadot.js UI requires an archive node."})}),"\n",(0,r.jsx)(n.h3,{id:"secure-the-rpc-server",children:"Secure the RPC server"}),"\n",(0,r.jsxs)(n.p,{children:["Via the node startup settings you can choose ",(0,r.jsx)(n.strong,{children:"what"})," to expose with ",(0,r.jsx)(n.strong,{children:"how many"})," connections ",(0,r.jsx)(n.strong,{children:"from where"})," through your rpc server."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"How many"}),": You can set your maximum connections through ",(0,r.jsx)(n.code,{children:"--ws-max-connections"}),", for example ",(0,r.jsx)(n.code,{children:"--ws-max-connections 100"})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"From where"}),": by default localhost and the polkadot.js are allowed to access the RPC server, you can change this by setting ",(0,r.jsx)(n.code,{children:"--rpc-cors"}),", to allow access from everywhere you need ",(0,r.jsx)(n.code,{children:"--rpc-cors all"})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"What"}),": you can limit the methods to use with ",(0,r.jsx)(n.code,{children:"--rpc-methods"}),", an easy way to set this to a safe mode is ",(0,r.jsx)(n.code,{children:"--rpc-methods Safe"})]}),"\n",(0,r.jsx)(n.h3,{id:"secure-the-ws-port",children:"Secure the ws port"}),"\n",(0,r.jsxs)(n.p,{children:['The ws port is preferably exposed from the outside as a ssl secured wss port. The "',(0,r.jsx)(n.a,{href:"https://wiki.polkadot.network/docs/maintain-wss",children:"maintain wss"}),"\" on the wiki already covers a lot of information about this, especially in relation to setting it up in a nginx configuration. This page is focussed more on a apache2 but principles are the same. The main idea is converting the non secure ws port to a secure wss port by putting it behind a ssl enabled proxy. So from outside one see's the ssl enabled apache2/nginx/other proxy server, witch redirect the request to the internal rpc node."]}),"\n",(0,r.jsx)(n.h3,{id:"using-apache2-for-proxying",children:"Using Apache2 for proxying"}),"\n",(0,r.jsxs)(n.p,{children:["Apache2 is a little heavier then nginx but also has some more tweaking posibilities. You can run it in different modes, prefork, worker or event. We chose ",(0,r.jsx)(n.a,{href:"https://httpd.apache.org/docs/2.4/mod/event.html",children:"event"})," since this seems best suited for high load enviroments. Downside is that you can't use the default php module and need to enable it via php-fm. The proxy_wstunnel module works out of the box."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"apt install apache2\na2dismod mpm_prefork\na2enmod mpm_event proxy proxy_html proxy_http proxy_wstunnel rewrite ssl\n"})}),"\n",(0,r.jsx)(n.p,{children:"If you want to enable php"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"apt install php-fpm\na2enmod proxy_fcgi setenvif\n"})}),"\n",(0,r.jsx)(n.h4,{id:"enabling-ssl-through-letsencrypt",children:"Enabling ssl through letsencrypt"}),"\n",(0,r.jsxs)(n.p,{children:["There are multiple options for getting a ssl certificate, one popular (and free) being letsencrypt. Obtaining a letsencrypt certificate can be done through for example ",(0,r.jsx)(n.a,{href:"https://certbot.eff.org/",children:"certbot"})," or ",(0,r.jsx)(n.a,{href:"https://go-acme.github.io/lego/dns/",children:"lego"})," (which has more dns provider options)."]}),"\n",(0,r.jsx)(n.h4,{id:"add-the-proxy-to-the-apache2-config",children:"Add the proxy to the apache2 config"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.a,{href:"https://httpd.apache.org/docs/2.4/mod/mod_proxy_wstunnel.html",children:"mod_proxy_wstunnel"})," provides ",(0,r.jsx)(n.em,{children:"support for the tunnelling of web socket connections to a backend websockets server. The connection is automatically upgraded to a websocket connection"}),". In a ssl enabled virtualhost add:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-apacheconf",children:"SSLProxyEngine on\nProxyRequests off\n\nProxyPass / ws://localhost:9944\nProxyPassReverse / ws://localhost:9944\n"})}),"\n",(0,r.jsx)(n.p,{children:"Older versions of mod_proxy_wstunnel do not upgrade the connection automatically and will need the following config added:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-apacheconf",children:"RewriteEngine on\nRewriteCond %{HTTP:Upgrade} websocket [NC]\nRewriteRule /(.*) ws://localhost:9944/$1 [P,L]\nRewriteRule /(.*) http://localhost:9944/$1 [P,L]\n"})}),"\n",(0,r.jsx)(n.h4,{id:"tweaking-connections",children:"Tweaking connections"}),"\n",(0,r.jsxs)(n.p,{children:["The number of connections is limited by the node itself (",(0,r.jsx)(n.code,{children:"--ws-max-connections"}),") but also by the number of threads available on the proxy server. For apache2 this can be tweaked by editing ",(0,r.jsx)(n.code,{children:"/etc/apache2/mods-enabled/mpm_event.conf"})]}),"\n",(0,r.jsx)(n.p,{children:"We are using:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-apacheconf",children:"StartServers\t\t 4\nMinSpareThreads\t\t 25\nMaxSpareThreads\t\t 75\nThreadLimit\t\t 128\nThreadsPerChild\t\t 128\nMaxRequestWorkers  \t 896\nMaxConnectionsPerChild   0\n"})}),"\n",(0,r.jsx)(n.h4,{id:"rate-limiting",children:"Rate limiting"}),"\n",(0,r.jsx)(n.p,{children:"Theoretically one client could use all connections/resources, draining the resources of the server and making it inaccessible. This can be countered by rate limiting the connections, for example by using mod_qos:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"apt install libapache2-mod-qos\na2enmod qos\n"})}),"\n",(0,r.jsxs)(n.p,{children:["And edit ",(0,r.jsx)(n.code,{children:"/etc/apache2/mods-available/qos.conf"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"  # allows max 50 connections from a single ip address:\n  QS_SrvMaxConnPerIP                                 50\n"})}),"\n",(0,r.jsx)(n.p,{children:"Be carefull when running behind a load balancer (for example cloudflare) because the load balancer will only use a few ip's and thus can trigger the rate limit, iso in this case it is better to use the rate limit options from the load balancer itself."}),"\n",(0,r.jsx)(n.h3,{id:"load-balancing--failover",children:"Load balancing & failover"}),"\n",(0,r.jsxs)(n.p,{children:["With multiple servers it is possible to build a load balancing or even a failover construction. A simple load balancing can be a ",(0,r.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Round-robin_DNS",children:"round robin-robin dns"})," up to a more advanced (dedicated) load balancer or a content delivery network (CDN) like cloudflare."]}),"\n",(0,r.jsx)(n.h3,{id:"stress-testing",children:"Stress testing"}),"\n",(0,r.jsx)(n.p,{children:"You can test basic usage by accessing your server through the polkadot.js UI as a custom endpoint. For example staking target display is RPC intensive and can give you an indication of performance."}),"\n",(0,r.jsxs)(n.p,{children:["There are also more dedicated stress testing solutions, we have forked the ",(0,r.jsx)(n.a,{href:"https://github.com/dwellir-public/artillery-engine-substrate",children:"Dwellir repository"})," for our testing."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash\nnvm install --lts\nnpm install -g yarn\nyarn global add artillery\nyarn global add artillery-engine-substrate\ncd /opt\ngit clone git@github.com:stakeworld/stakeworld-rpc-artillery.git\ncd /opt/stakeworld-rpc-artillery\nyarn\n./run.sh\n"})}),"\n",(0,r.jsxs)(n.p,{children:["After the ",(0,r.jsx)(n.code,{children:"run.sh"})," you can edit some variables like how many connections per second, the wss node, etc. The following is a test run for 10 seconds with 10 connections per second and maximum 20 concurrent users."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'config:\n  target: "wss://ksm-rpc.stakeworld.io"\n  processor: "./functions.js"\n  phases:\n    - duration: 10\n      arrivalRate: 10\n      maxVusers: 20\n'})}),"\n",(0,r.jsx)(n.p,{children:"After this you get some info about the run and a report is created, which can be used for further diagnostics"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"--------------------------------\nSummary report @ 23:38:40(+0100)\n--------------------------------\n\nvusers.completed: .............................................................. 100\nvusers.created: ................................................................ 100\nvusers.created_by_name.balance: ................................................ 35\nvusers.created_by_name.complex_call: ........................................... 33\nvusers.created_by_name.headers_blocks: ......................................... 32\nvusers.failed: ................................................................. 0\nvusers.session_length:\n  min: ......................................................................... 231.7\n  max: ......................................................................... 656.1\n  median: ...................................................................... 361.5\n  p95: ......................................................................... 518.1\n  p99: ......................................................................... 645.6\nws.messages_sent: .............................................................. 163\nws.send_rate: .................................................................. 29/sec\nLog file: reports/report.json\nReport generated: reports/report.html\n"})})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},2307:(e,n,s)=>{s.d(n,{Z:()=>r});const r="data:image/png;base64,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"},1151:(e,n,s)=>{s.d(n,{Z:()=>a,a:()=>i});var r=s(7294);const t={},o=r.createContext(t);function i(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);