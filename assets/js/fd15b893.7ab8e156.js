"use strict";(self.webpackChunkstakeworld_io=self.webpackChunkstakeworld_io||[]).push([[961],{640:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var r=n(5893),t=n(1151);const o={id:"rpc",title:"RPC server",description:"Setting up a secure RPC server",slug:"/rpc",sidebar_position:4,keywords:["rpc","rpc server","wss","ws","polkadot.js","validator","polkadot","kusama","westend"]},i=void 0,a={id:"rpc",title:"RPC server",description:"Setting up a secure RPC server",source:"@site/docs/rpc.mdx",sourceDirName:".",slug:"/rpc",permalink:"/docs/rpc",draft:!1,unlisted:!1,editUrl:"https://github.com/stakeworld/website/edit/master/docs/rpc.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"rpc",title:"RPC server",description:"Setting up a secure RPC server",slug:"/rpc",sidebar_position:4,keywords:["rpc","rpc server","wss","ws","polkadot.js","validator","polkadot","kusama","westend"]},sidebar:"tutorialSidebar",previous:{title:"Database sizes",permalink:"/docs/dbsize"},next:{title:"Linux tips",permalink:"/docs/tools"}},c={},l=[{value:"Live stakeworld RPC data",id:"live-stakeworld-rpc-data",level:2},{value:"Setting up your own secure RPC server",id:"setting-up-your-own-secure-rpc-server",level:2},{value:"Archive node vs pruned node",id:"archive-node-vs-pruned-node",level:3},{value:"Secure the RPC server",id:"secure-the-rpc-server",level:3},{value:"Secure the ws port",id:"secure-the-ws-port",level:3},{value:"Using Apache2 for proxying",id:"using-apache2-for-proxying",level:3},{value:"Enabling ssl through letsencrypt",id:"enabling-ssl-through-letsencrypt",level:4},{value:"Add the proxy to the apache2 config",id:"add-the-proxy-to-the-apache2-config",level:4},{value:"Tweaking connections",id:"tweaking-connections",level:4},{value:"Rate limiting",id:"rate-limiting",level:4},{value:"Load balancing &amp; failover",id:"load-balancing--failover",level:3},{value:"Stress testing",id:"stress-testing",level:3}];function d(e){const s={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.admonition,{type:"info",children:[(0,r.jsx)(s.p,{children:"RPC servers allow access into the polkadot/kusama and parachains ecosystem. Stakeworld runs multiple public archive RPC servers:"}),(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Polkadot: ",(0,r.jsx)(s.a,{href:"https://polkadot.js.org/apps/?rpc=wss://dot-rpc.stakeworld.io",children:"dot-rpc.stakeworld.io"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["AssetHub: ",(0,r.jsx)(s.a,{href:"https://polkadot.js.org/apps/?rpc=wss://dot-rpc.stakeworld.io/assethub",children:"dot-rpc.stakeworld.io/assethub"})]}),"\n",(0,r.jsxs)(s.li,{children:["BridgeHub: ",(0,r.jsx)(s.a,{href:"https://polkadot.js.org/apps/?rpc=wss://dot-rpc.stakeworld.io/bridgehub",children:"dot-rpc.stakeworld.io/bridgehub"})]}),"\n",(0,r.jsxs)(s.li,{children:["Collectives: ",(0,r.jsx)(s.a,{href:"https://polkadot.js.org/apps/?rpc=wss://dot-rpc.stakeworld.io/collectives",children:"dot-rpc.stakeworld.io/collectives"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["Kusama: ",(0,r.jsx)(s.a,{href:"https://polkadot.js.org/apps/?rpc=wss://ksm-rpc.stakeworld.io",children:"ksm-rpc.stakeworld.io"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["AssetHub: ",(0,r.jsx)(s.a,{href:"https://polkadot.js.org/apps/?rpc=wss://ksm-rpc.stakeworld.io/assethub",children:"ksm-rpc.stakeworld.io/assethub"})]}),"\n",(0,r.jsxs)(s.li,{children:["BridgeHub: ",(0,r.jsx)(s.a,{href:"https://polkadot.js.org/apps/?rpc=wss://ksm-rpc.stakeworld.io/bridgehub",children:"ksm-rpc.stakeworld.io/bridgehub"})]}),"\n",(0,r.jsxs)(s.li,{children:["Encointer: ",(0,r.jsx)(s.a,{href:"https://polkadot.js.org/apps/?rpc=wss://ksm-rpc.stakeworld.io/encointer",children:"ksm-rpc.stakeworld.io/encointer"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["Westend: ",(0,r.jsx)(s.a,{href:"https://polkadot.js.org/apps/?rpc=wss://wnd-rpc.stakeworld.io",children:"wnd-rpc.stakeworld.io"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["AssetHub: ",(0,r.jsx)(s.a,{href:"https://polkadot.js.org/apps/?rpc=wss://wnd-rpc.stakeworld.io/westmint",children:"wnd-rpc.stakeworld.io/westmint"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["Paseo: ",(0,r.jsx)(s.a,{href:"https://polkadot.js.org/apps/?rpc=wss://pas-rpc.stakeworld.io",children:"pas-rpc.stakeworld.io"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["AssetHub: ",(0,r.jsx)(s.a,{href:"https://polkadot.js.org/apps/?rpc=wss://pas-rpc.stakeworld.io/assethub",children:"pas-rpc.stakeworld.io/assethub"})]}),"\n"]}),"\n"]}),"\n"]})]}),"\n",(0,r.jsx)(s.h2,{id:"live-stakeworld-rpc-data",children:"Live stakeworld RPC data"}),"\n",(0,r.jsx)(s.admonition,{type:"tip",children:(0,r.jsx)(s.p,{children:"Monthly data can take a minute to load"})}),"\n",(0,r.jsx)("iframe",{src:"https://monitor.stakeworld.io/public-dashboards/cef69420acd44165be7df9ad65c7cd89?orgId=1",width:"800",height:"1600",frameborder:"0"}),"\n",(0,r.jsx)(s.h2,{id:"setting-up-your-own-secure-rpc-server",children:"Setting up your own secure RPC server"}),"\n",(0,r.jsxs)(s.p,{children:["To access the polkadot, kusama and parachains networks we need some kind of access into the network. This can be achieved by ",(0,r.jsx)(s.a,{href:"./validate",children:"setting up a node"})," with a RPC server and allowing access to that RPC server via a secure websocket (wss) port. The default node setup already exposes a non secure ws socket on port 9944 (which can optionally be changed by the ",(0,r.jsx)(s.code,{children:"--ws-port"})," parameter), but for a more usable situation we need a secure websocket which is accesible through a public port."]}),"\n",(0,r.jsx)(s.h3,{id:"archive-node-vs-pruned-node",children:"Archive node vs pruned node"}),"\n",(0,r.jsx)(s.p,{children:"A pruned node knows only the recent information about the network and not its full history. Most frequently done actions can be done with a pruned node, for example see account balances, make transfers, setup session keys, staking, etc. An archive node has the full history (database) of the network and can be queried in all kind of ways, give information about transfers since the network started, historical balances, advanced queries about past events, etc."}),"\n",(0,r.jsxs)(s.p,{children:["An archive node requires a lot more ",(0,r.jsx)(s.a,{href:"./snapshot",children:"diskspace"}),".  For an archive node you need the options ",(0,r.jsx)(s.code,{children:"--state-pruning archive --blocks-pruning archive"})," in your startup settings.\n",(0,r.jsx)(s.img,{alt:"snapsize",src:n(9735).Z+"",width:"800",height:"300"})]}),"\n",(0,r.jsx)(s.admonition,{type:"tip",children:(0,r.jsx)(s.p,{children:"Inclusion in the Polkadot.js UI requires an archive node."})}),"\n",(0,r.jsx)(s.h3,{id:"secure-the-rpc-server",children:"Secure the RPC server"}),"\n",(0,r.jsxs)(s.p,{children:["Via the node startup settings you can choose ",(0,r.jsx)(s.strong,{children:"what"})," to expose with ",(0,r.jsx)(s.strong,{children:"how many"})," connections ",(0,r.jsx)(s.strong,{children:"from where"})," through your rpc server."]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.em,{children:"How many"}),": You can set your maximum connections through ",(0,r.jsx)(s.code,{children:"--ws-max-connections"}),", for example ",(0,r.jsx)(s.code,{children:"--ws-max-connections 100"})]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.em,{children:"From where"}),": by default localhost and the polkadot.js are allowed to access the RPC server, you can change this by setting ",(0,r.jsx)(s.code,{children:"--rpc-cors"}),", to allow access from everywhere you need ",(0,r.jsx)(s.code,{children:"--rpc-cors all"})]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.em,{children:"What"}),": you can limit the methods to use with ",(0,r.jsx)(s.code,{children:"--rpc-methods"}),", an easy way to set this to a safe mode is ",(0,r.jsx)(s.code,{children:"--rpc-methods Safe"})]}),"\n",(0,r.jsx)(s.h3,{id:"secure-the-ws-port",children:"Secure the ws port"}),"\n",(0,r.jsxs)(s.p,{children:['The ws port is preferably exposed from the outside as a ssl secured wss port. The "',(0,r.jsx)(s.a,{href:"https://wiki.polkadot.network/docs/maintain-wss",children:"maintain wss"}),"\" on the wiki already covers a lot of information about this, especially in relation to setting it up in a nginx configuration. This page is focussed more on a apache2 but principles are the same. The main idea is converting the non secure ws port to a secure wss port by putting it behind a ssl enabled proxy. So from outside one see's the ssl enabled apache2/nginx/other proxy server, witch redirect the request to the internal rpc node."]}),"\n",(0,r.jsx)(s.h3,{id:"using-apache2-for-proxying",children:"Using Apache2 for proxying"}),"\n",(0,r.jsxs)(s.p,{children:["Apache2 is a little heavier then nginx but also has some more tweaking posibilities. You can run it in different modes, prefork, worker or event. We chose ",(0,r.jsx)(s.a,{href:"https://httpd.apache.org/docs/2.4/mod/event.html",children:"event"})," since this seems best suited for high load enviroments. Downside is that you can't use the default php module and need to enable it via php-fm. The proxy_wstunnel module works out of the box."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"apt install apache2\na2dismod mpm_prefork\na2enmod mpm_event proxy proxy_html proxy_http proxy_wstunnel rewrite ssl\n"})}),"\n",(0,r.jsx)(s.p,{children:"If you want to enable php"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"apt install php-fpm\na2enmod proxy_fcgi setenvif\n"})}),"\n",(0,r.jsx)(s.h4,{id:"enabling-ssl-through-letsencrypt",children:"Enabling ssl through letsencrypt"}),"\n",(0,r.jsxs)(s.p,{children:["There are multiple options for getting a ssl certificate, one popular (and free) being letsencrypt. Obtaining a letsencrypt certificate can be done through for example ",(0,r.jsx)(s.a,{href:"https://certbot.eff.org/",children:"certbot"})," or ",(0,r.jsx)(s.a,{href:"https://go-acme.github.io/lego/dns/",children:"lego"})," (which has more dns provider options)."]}),"\n",(0,r.jsx)(s.h4,{id:"add-the-proxy-to-the-apache2-config",children:"Add the proxy to the apache2 config"}),"\n",(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.a,{href:"https://httpd.apache.org/docs/2.4/mod/mod_proxy_wstunnel.html",children:"mod_proxy_wstunnel"})," provides ",(0,r.jsx)(s.em,{children:"support for the tunnelling of web socket connections to a backend websockets server. The connection is automatically upgraded to a websocket connection"}),". In a ssl enabled virtualhost add:"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-apacheconf",children:"SSLProxyEngine on\nProxyRequests off\n\nProxyPass / ws://localhost:9944\nProxyPassReverse / ws://localhost:9944\n"})}),"\n",(0,r.jsx)(s.p,{children:"Older versions of mod_proxy_wstunnel do not upgrade the connection automatically and will need the following config added:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-apacheconf",children:"RewriteEngine on\nRewriteCond %{HTTP:Upgrade} websocket [NC]\nRewriteRule /(.*) ws://localhost:9944/$1 [P,L]\nRewriteRule /(.*) http://localhost:9944/$1 [P,L]\n"})}),"\n",(0,r.jsx)(s.h4,{id:"tweaking-connections",children:"Tweaking connections"}),"\n",(0,r.jsxs)(s.p,{children:["The number of connections is limited by the node itself (",(0,r.jsx)(s.code,{children:"--ws-max-connections"}),") but also by the number of threads available on the proxy server. For apache2 this can be tweaked by editing ",(0,r.jsx)(s.code,{children:"/etc/apache2/mods-enabled/mpm_event.conf"})]}),"\n",(0,r.jsx)(s.p,{children:"We are using:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-apacheconf",children:"StartServers\t\t 4\nMinSpareThreads\t\t 25\nMaxSpareThreads\t\t 75\nThreadLimit\t\t 128\nThreadsPerChild\t\t 128\nMaxRequestWorkers  \t 896\nMaxConnectionsPerChild   0\n"})}),"\n",(0,r.jsx)(s.h4,{id:"rate-limiting",children:"Rate limiting"}),"\n",(0,r.jsx)(s.p,{children:"Theoretically one client could use all connections/resources, draining the resources of the server and making it inaccessible. This can be countered by rate limiting the connections, for example by using mod_qos:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"apt install libapache2-mod-qos\na2enmod qos\n"})}),"\n",(0,r.jsxs)(s.p,{children:["And edit ",(0,r.jsx)(s.code,{children:"/etc/apache2/mods-available/qos.conf"})]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"  # allows max 50 connections from a single ip address:\n  QS_SrvMaxConnPerIP                                 50\n"})}),"\n",(0,r.jsx)(s.p,{children:"Be carefull when running behind a load balancer (for example cloudflare) because the load balancer will only use a few ip's and thus can trigger the rate limit, iso in this case it is better to use the rate limit options from the load balancer itself."}),"\n",(0,r.jsx)(s.h3,{id:"load-balancing--failover",children:"Load balancing & failover"}),"\n",(0,r.jsxs)(s.p,{children:["With multiple servers it is possible to build a load balancing or even a failover construction. A simple load balancing can be a ",(0,r.jsx)(s.a,{href:"https://en.wikipedia.org/wiki/Round-robin_DNS",children:"round robin-robin dns"})," up to a more advanced (dedicated) load balancer or a content delivery network (CDN) like cloudflare."]}),"\n",(0,r.jsx)(s.h3,{id:"stress-testing",children:"Stress testing"}),"\n",(0,r.jsx)(s.p,{children:"You can test basic usage by accessing your server through the polkadot.js UI as a custom endpoint. For example staking target display is RPC intensive and can give you an indication of performance."}),"\n",(0,r.jsxs)(s.p,{children:["There are also more dedicated stress testing solutions, we have forked the ",(0,r.jsx)(s.a,{href:"https://github.com/dwellir-public/artillery-engine-substrate",children:"Dwellir repository"})," for our testing."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash\nnvm install --lts\nnpm install -g yarn\nyarn global add artillery\nyarn global add artillery-engine-substrate\ncd /opt\ngit clone git@github.com:stakeworld/stakeworld-rpc-artillery.git\ncd /opt/stakeworld-rpc-artillery\nyarn\n./run.sh\n"})}),"\n",(0,r.jsxs)(s.p,{children:["After the ",(0,r.jsx)(s.code,{children:"run.sh"})," you can edit some variables like how many connections per second, the wss node, etc. The following is a test run for 10 seconds with 10 connections per second and maximum 20 concurrent users."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:'config:\n  target: "wss://ksm-rpc.stakeworld.io"\n  processor: "./functions.js"\n  phases:\n    - duration: 10\n      arrivalRate: 10\n      maxVusers: 20\n'})}),"\n",(0,r.jsx)(s.p,{children:"After this you get some info about the run and a report is created, which can be used for further diagnostics"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"--------------------------------\nSummary report @ 23:38:40(+0100)\n--------------------------------\n\nvusers.completed: .............................................................. 100\nvusers.created: ................................................................ 100\nvusers.created_by_name.balance: ................................................ 35\nvusers.created_by_name.complex_call: ........................................... 33\nvusers.created_by_name.headers_blocks: ......................................... 32\nvusers.failed: ................................................................. 0\nvusers.session_length:\n  min: ......................................................................... 231.7\n  max: ......................................................................... 656.1\n  median: ...................................................................... 361.5\n  p95: ......................................................................... 518.1\n  p99: ......................................................................... 645.6\nws.messages_sent: .............................................................. 163\nws.send_rate: .................................................................. 29/sec\nLog file: reports/report.json\nReport generated: reports/report.html\n"})})]})}function h(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},9735:(e,s,n)=>{n.d(s,{Z:()=>r});const r="data:image/png;base64,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"},1151:(e,s,n)=>{n.d(s,{Z:()=>a,a:()=>i});var r=n(7294);const t={},o=r.createContext(t);function i(e){const s=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(o.Provider,{value:s},e.children)}}}]);