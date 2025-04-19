"use strict";(self.webpackChunkstakeworld_io=self.webpackChunkstakeworld_io||[]).push([[609],{2865:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>a,contentTitle:()=>d,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"rpc","title":"Rpc servers","description":"Setting up a secure RPC server","source":"@site/docs/rpc.mdx","sourceDirName":".","slug":"/rpc","permalink":"/docs/rpc","draft":false,"unlisted":false,"editUrl":"https://github.com/stakeworld/website/edit/master/docs/rpc.mdx","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"id":"rpc","title":"Rpc servers","description":"Setting up a secure RPC server","slug":"/rpc","sidebar_position":4,"keywords":["rpc","rpc server","wss","ws","polkadot.js","validator","polkadot","kusama","westend"]},"sidebar":"tutorialSidebar","previous":{"title":"Database sizes","permalink":"/docs/dbsize"},"next":{"title":"Monitoring","permalink":"/docs/monitor"}}');var t=n(4848),i=n(8453);const o={id:"rpc",title:"Rpc servers",description:"Setting up a secure RPC server",slug:"/rpc",sidebar_position:4,keywords:["rpc","rpc server","wss","ws","polkadot.js","validator","polkadot","kusama","westend"]},d=void 0,a={},c=[{value:"Stakeworld RPC data",id:"stakeworld-rpc-data",level:2},{value:"Setting up your own secure RPC server",id:"setting-up-your-own-secure-rpc-server",level:2},{value:"Archive node vs pruned node",id:"archive-node-vs-pruned-node",level:3},{value:"Secure the RPC server",id:"secure-the-rpc-server",level:3},{value:"Secure the ws port",id:"secure-the-ws-port",level:3},{value:"Using Apache2 for proxying",id:"using-apache2-for-proxying",level:3},{value:"Enabling ssl through letsencrypt",id:"enabling-ssl-through-letsencrypt",level:4},{value:"Add the proxy to the apache2 config",id:"add-the-proxy-to-the-apache2-config",level:4},{value:"Tweaking connections",id:"tweaking-connections",level:4},{value:"Rate limiting",id:"rate-limiting",level:4},{value:"Load balancing &amp; failover",id:"load-balancing--failover",level:3},{value:"Stress testing",id:"stress-testing",level:3}];function l(e){const s={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.admonition,{type:"info",children:[(0,t.jsx)(s.p,{children:"RPC servers allow access into the polkadot/kusama and parachains ecosystem. Stakeworld runs multiple public archive RPC servers:"}),(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Polkadot: ",(0,t.jsx)(s.a,{href:"https://polkadot.js.org/apps/?rpc=wss://dot-rpc.stakeworld.io",children:"dot-rpc.stakeworld.io"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["AssetHub: ",(0,t.jsx)(s.a,{href:"https://polkadot.js.org/apps/?rpc=wss://dot-rpc.stakeworld.io/assethub",children:"dot-rpc.stakeworld.io/assethub"})]}),"\n",(0,t.jsxs)(s.li,{children:["BridgeHub: ",(0,t.jsx)(s.a,{href:"https://polkadot.js.org/apps/?rpc=wss://dot-rpc.stakeworld.io/bridgehub",children:"dot-rpc.stakeworld.io/bridgehub"})]}),"\n",(0,t.jsxs)(s.li,{children:["Collectives: ",(0,t.jsx)(s.a,{href:"https://polkadot.js.org/apps/?rpc=wss://dot-rpc.stakeworld.io/collectives",children:"dot-rpc.stakeworld.io/collectives"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["Kusama: ",(0,t.jsx)(s.a,{href:"https://polkadot.js.org/apps/?rpc=wss://ksm-rpc.stakeworld.io",children:"ksm-rpc.stakeworld.io"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["AssetHub: ",(0,t.jsx)(s.a,{href:"https://polkadot.js.org/apps/?rpc=wss://ksm-rpc.stakeworld.io/assethub",children:"ksm-rpc.stakeworld.io/assethub"})]}),"\n",(0,t.jsxs)(s.li,{children:["BridgeHub: ",(0,t.jsx)(s.a,{href:"https://polkadot.js.org/apps/?rpc=wss://ksm-rpc.stakeworld.io/bridgehub",children:"ksm-rpc.stakeworld.io/bridgehub"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["Paseo: ",(0,t.jsx)(s.a,{href:"https://polkadot.js.org/apps/?rpc=wss://pas-rpc.stakeworld.io",children:"pas-rpc.stakeworld.io"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["AssetHub: ",(0,t.jsx)(s.a,{href:"https://polkadot.js.org/apps/?rpc=wss://pas-rpc.stakeworld.io/assethub",children:"pas-rpc.stakeworld.io/assethub"})]}),"\n"]}),"\n"]}),"\n"]})]}),"\n",(0,t.jsx)(s.h2,{id:"stakeworld-rpc-data",children:"Stakeworld RPC data"}),"\n",(0,t.jsx)(s.p,{children:"Last update: Sun 13 apr 2025"}),"\n",(0,t.jsx)(s.p,{children:"Requests in millions:"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Chain"}),(0,t.jsx)(s.th,{children:"Requests in millions (6 months)"}),(0,t.jsx)(s.th,{children:"Requests in millions (per month)"}),(0,t.jsx)(s.th,{children:"Requests in millions (per day)"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"ksmcc3"}),(0,t.jsx)(s.td,{children:"6526"}),(0,t.jsx)(s.td,{children:"1088"}),(0,t.jsx)(s.td,{children:"36"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"asset-hub-kusama"}),(0,t.jsx)(s.td,{children:"82"}),(0,t.jsx)(s.td,{children:"14"}),(0,t.jsx)(s.td,{children:"0"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"bridge-hub-kusama"}),(0,t.jsx)(s.td,{children:"31"}),(0,t.jsx)(s.td,{children:"5"}),(0,t.jsx)(s.td,{children:"0"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"coretime-kusama"}),(0,t.jsx)(s.td,{children:"13"}),(0,t.jsx)(s.td,{children:"2"}),(0,t.jsx)(s.td,{children:"0"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"encointer-kusama"}),(0,t.jsx)(s.td,{children:"31"}),(0,t.jsx)(s.td,{children:"5"}),(0,t.jsx)(s.td,{children:"0"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"people-kusama"}),(0,t.jsx)(s.td,{children:"223"}),(0,t.jsx)(s.td,{children:"37"}),(0,t.jsx)(s.td,{children:"1"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"polkadot"}),(0,t.jsx)(s.td,{children:"4689"}),(0,t.jsx)(s.td,{children:"782"}),(0,t.jsx)(s.td,{children:"26"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"asset-hub-polkadot"}),(0,t.jsx)(s.td,{children:"7188"}),(0,t.jsx)(s.td,{children:"1198"}),(0,t.jsx)(s.td,{children:"39"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"bridge-hub-polkadot"}),(0,t.jsx)(s.td,{children:"44"}),(0,t.jsx)(s.td,{children:"7"}),(0,t.jsx)(s.td,{children:"0"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"collectives_polkadot"}),(0,t.jsx)(s.td,{children:"12"}),(0,t.jsx)(s.td,{children:"2"}),(0,t.jsx)(s.td,{children:"0"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"coretime-polkadot"}),(0,t.jsx)(s.td,{children:"N/A"}),(0,t.jsx)(s.td,{children:"N/A"}),(0,t.jsx)(s.td,{children:"N/A"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"people-polkadot"}),(0,t.jsx)(s.td,{children:"N/A"}),(0,t.jsx)(s.td,{children:"N/A"}),(0,t.jsx)(s.td,{children:"N/A"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"paseo"}),(0,t.jsx)(s.td,{children:"77"}),(0,t.jsx)(s.td,{children:"13"}),(0,t.jsx)(s.td,{children:"0"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"asset-hub-paseo"}),(0,t.jsx)(s.td,{children:"4"}),(0,t.jsx)(s.td,{children:"1"}),(0,t.jsx)(s.td,{children:"0"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"westend2"}),(0,t.jsx)(s.td,{children:"11"}),(0,t.jsx)(s.td,{children:"2"}),(0,t.jsx)(s.td,{children:"0"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"asset-hub-westend"}),(0,t.jsx)(s.td,{children:"1"}),(0,t.jsx)(s.td,{children:"0"}),(0,t.jsx)(s.td,{children:"0"})]})]})]}),"\n",(0,t.jsx)(s.h2,{id:"setting-up-your-own-secure-rpc-server",children:"Setting up your own secure RPC server"}),"\n",(0,t.jsxs)(s.p,{children:["To access the polkadot, kusama and parachains networks we need some kind of access into the network. This can be achieved by ",(0,t.jsx)(s.a,{href:"./validate",children:"setting up a node"})," with a RPC server and allowing access to that RPC server via a secure websocket (wss) port. The default node setup already exposes a non secure ws socket on port 9944 (which can optionally be changed by the ",(0,t.jsx)(s.code,{children:"--ws-port"})," parameter), but for a more usable situation we need a secure websocket which is accesible through a public port."]}),"\n",(0,t.jsx)(s.h3,{id:"archive-node-vs-pruned-node",children:"Archive node vs pruned node"}),"\n",(0,t.jsx)(s.p,{children:"A pruned node knows only the recent information about the network and not its full history. Most frequently done actions can be done with a pruned node, for example see account balances, make transfers, setup session keys, staking, etc. An archive node has the full history (database) of the network and can be queried in all kind of ways, give information about transfers since the network started, historical balances, advanced queries about past events, etc."}),"\n",(0,t.jsxs)(s.p,{children:["An archive node requires a lot more ",(0,t.jsx)(s.a,{href:"./snapshot",children:"diskspace"}),".  For an archive node you need the options ",(0,t.jsx)(s.code,{children:"--state-pruning archive --blocks-pruning archive"})," in your startup settings.\n",(0,t.jsx)(s.img,{alt:"snapsize",src:n(3996).A+"",width:"800",height:"300"})]}),"\n",(0,t.jsx)(s.admonition,{type:"tip",children:(0,t.jsx)(s.p,{children:"Inclusion in the Polkadot.js UI requires an archive node."})}),"\n",(0,t.jsx)(s.h3,{id:"secure-the-rpc-server",children:"Secure the RPC server"}),"\n",(0,t.jsxs)(s.p,{children:["Via the node startup settings you can choose ",(0,t.jsx)(s.strong,{children:"what"})," to expose with ",(0,t.jsx)(s.strong,{children:"how many"})," connections ",(0,t.jsx)(s.strong,{children:"from where"})," through your rpc server."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.em,{children:"How many"}),": You can set your maximum connections through ",(0,t.jsx)(s.code,{children:"--ws-max-connections"}),", for example ",(0,t.jsx)(s.code,{children:"--ws-max-connections 100"})]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.em,{children:"From where"}),": by default localhost and the polkadot.js are allowed to access the RPC server, you can change this by setting ",(0,t.jsx)(s.code,{children:"--rpc-cors"}),", to allow access from everywhere you need ",(0,t.jsx)(s.code,{children:"--rpc-cors all"})]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.em,{children:"What"}),": you can limit the methods to use with ",(0,t.jsx)(s.code,{children:"--rpc-methods"}),", an easy way to set this to a safe mode is ",(0,t.jsx)(s.code,{children:"--rpc-methods Safe"})]}),"\n",(0,t.jsx)(s.h3,{id:"secure-the-ws-port",children:"Secure the ws port"}),"\n",(0,t.jsxs)(s.p,{children:['The ws port is preferably exposed from the outside as a ssl secured wss port. The "',(0,t.jsx)(s.a,{href:"https://wiki.polkadot.network/docs/maintain-wss",children:"maintain wss"}),"\" on the wiki already covers a lot of information about this, especially in relation to setting it up in a nginx configuration. This page is focussed more on a apache2 but principles are the same. The main idea is converting the non secure ws port to a secure wss port by putting it behind a ssl enabled proxy. So from outside one see's the ssl enabled apache2/nginx/other proxy server, witch redirect the request to the internal rpc node."]}),"\n",(0,t.jsx)(s.h3,{id:"using-apache2-for-proxying",children:"Using Apache2 for proxying"}),"\n",(0,t.jsxs)(s.p,{children:["Apache2 is a little heavier then nginx but also has some more tweaking posibilities. You can run it in different modes, prefork, worker or event. We chose ",(0,t.jsx)(s.a,{href:"https://httpd.apache.org/docs/2.4/mod/event.html",children:"event"})," since this seems best suited for high load enviroments. Downside is that you can't use the default php module and need to enable it via php-fm. The proxy_wstunnel module works out of the box."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"apt install apache2\na2dismod mpm_prefork\na2enmod mpm_event proxy proxy_html proxy_http proxy_wstunnel rewrite ssl\n"})}),"\n",(0,t.jsx)(s.p,{children:"If you want to enable php"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"apt install php-fpm\na2enmod proxy_fcgi setenvif\n"})}),"\n",(0,t.jsx)(s.h4,{id:"enabling-ssl-through-letsencrypt",children:"Enabling ssl through letsencrypt"}),"\n",(0,t.jsxs)(s.p,{children:["There are multiple options for getting a ssl certificate, one popular (and free) being letsencrypt. Obtaining a letsencrypt certificate can be done through for example ",(0,t.jsx)(s.a,{href:"https://certbot.eff.org/",children:"certbot"})," or ",(0,t.jsx)(s.a,{href:"https://go-acme.github.io/lego/dns/",children:"lego"})," (which has more dns provider options)."]}),"\n",(0,t.jsx)(s.h4,{id:"add-the-proxy-to-the-apache2-config",children:"Add the proxy to the apache2 config"}),"\n",(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.a,{href:"https://httpd.apache.org/docs/2.4/mod/mod_proxy_wstunnel.html",children:"mod_proxy_wstunnel"})," provides ",(0,t.jsx)(s.em,{children:"support for the tunnelling of web socket connections to a backend websockets server. The connection is automatically upgraded to a websocket connection"}),". In a ssl enabled virtualhost add:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-apacheconf",children:"SSLProxyEngine on\nProxyRequests off\n\nProxyPass / ws://localhost:9944\nProxyPassReverse / ws://localhost:9944\n"})}),"\n",(0,t.jsx)(s.p,{children:"Older versions of mod_proxy_wstunnel do not upgrade the connection automatically and will need the following config added:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-apacheconf",children:"RewriteEngine on\nRewriteCond %{HTTP:Upgrade} websocket [NC]\nRewriteRule /(.*) ws://localhost:9944/$1 [P,L]\nRewriteRule /(.*) http://localhost:9944/$1 [P,L]\n"})}),"\n",(0,t.jsx)(s.h4,{id:"tweaking-connections",children:"Tweaking connections"}),"\n",(0,t.jsxs)(s.p,{children:["The number of connections is limited by the node itself (",(0,t.jsx)(s.code,{children:"--ws-max-connections"}),") but also by the number of threads available on the proxy server. For apache2 this can be tweaked by editing ",(0,t.jsx)(s.code,{children:"/etc/apache2/mods-enabled/mpm_event.conf"})]}),"\n",(0,t.jsx)(s.p,{children:"We are using:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-apacheconf",children:"StartServers\t\t 4\nMinSpareThreads\t\t 25\nMaxSpareThreads\t\t 75\nThreadLimit\t\t 128\nThreadsPerChild\t\t 128\nMaxRequestWorkers  \t 896\nMaxConnectionsPerChild   0\n"})}),"\n",(0,t.jsx)(s.h4,{id:"rate-limiting",children:"Rate limiting"}),"\n",(0,t.jsx)(s.p,{children:"Theoretically one client could use all connections/resources, draining the resources of the server and making it inaccessible. This can be countered by rate limiting the connections, for example by using mod_qos:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"apt install libapache2-mod-qos\na2enmod qos\n"})}),"\n",(0,t.jsxs)(s.p,{children:["And edit ",(0,t.jsx)(s.code,{children:"/etc/apache2/mods-available/qos.conf"})]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"  # allows max 50 connections from a single ip address:\n  QS_SrvMaxConnPerIP                                 50\n"})}),"\n",(0,t.jsx)(s.p,{children:"Be carefull when running behind a load balancer (for example cloudflare) because the load balancer will only use a few ip's and thus can trigger the rate limit, iso in this case it is better to use the rate limit options from the load balancer itself."}),"\n",(0,t.jsx)(s.h3,{id:"load-balancing--failover",children:"Load balancing & failover"}),"\n",(0,t.jsxs)(s.p,{children:["With multiple servers it is possible to build a load balancing or even a failover construction. A simple load balancing can be a ",(0,t.jsx)(s.a,{href:"https://en.wikipedia.org/wiki/Round-robin_DNS",children:"round robin-robin dns"})," up to a more advanced (dedicated) load balancer or a content delivery network (CDN) like cloudflare."]}),"\n",(0,t.jsx)(s.h3,{id:"stress-testing",children:"Stress testing"}),"\n",(0,t.jsx)(s.p,{children:"You can test basic usage by accessing your server through the polkadot.js UI as a custom endpoint. For example staking target display is RPC intensive and can give you an indication of performance."}),"\n",(0,t.jsxs)(s.p,{children:["There are also more dedicated stress testing solutions, we have forked the ",(0,t.jsx)(s.a,{href:"https://github.com/dwellir-public/artillery-engine-substrate",children:"Dwellir repository"})," for our testing."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash\nnvm install --lts\nnpm install -g yarn\nyarn global add artillery\nyarn global add artillery-engine-substrate\ncd /opt\ngit clone git@github.com:stakeworld/stakeworld-rpc-artillery.git\ncd /opt/stakeworld-rpc-artillery\nyarn\n./run.sh\n"})}),"\n",(0,t.jsxs)(s.p,{children:["After the ",(0,t.jsx)(s.code,{children:"run.sh"})," you can edit some variables like how many connections per second, the wss node, etc. The following is a test run for 10 seconds with 10 connections per second and maximum 20 concurrent users."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:'config:\n  target: "wss://ksm-rpc.stakeworld.io"\n  processor: "./functions.js"\n  phases:\n    - duration: 10\n      arrivalRate: 10\n      maxVusers: 20\n'})}),"\n",(0,t.jsx)(s.p,{children:"After this you get some info about the run and a report is created, which can be used for further diagnostics"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"--------------------------------\nSummary report @ 23:38:40(+0100)\n--------------------------------\n\nvusers.completed: .............................................................. 100\nvusers.created: ................................................................ 100\nvusers.created_by_name.balance: ................................................ 35\nvusers.created_by_name.complex_call: ........................................... 33\nvusers.created_by_name.headers_blocks: ......................................... 32\nvusers.failed: ................................................................. 0\nvusers.session_length:\n  min: ......................................................................... 231.7\n  max: ......................................................................... 656.1\n  median: ...................................................................... 361.5\n  p95: ......................................................................... 518.1\n  p99: ......................................................................... 645.6\nws.messages_sent: .............................................................. 163\nws.send_rate: .................................................................. 29/sec\nLog file: reports/report.json\nReport generated: reports/report.html\n"})})]})}function h(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},3996:(e,s,n)=>{n.d(s,{A:()=>r});const r="data:image/png;base64,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"},8453:(e,s,n)=>{n.d(s,{R:()=>o,x:()=>d});var r=n(6540);const t={},i=r.createContext(t);function o(e){const s=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(i.Provider,{value:s},e.children)}}}]);