"use strict";(self.webpackChunkstakeworld_io=self.webpackChunkstakeworld_io||[]).push([[609],{9184:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"rpc","title":"RPC server","description":"Setting up a secure RPC server","source":"@site/docs/rpc.mdx","sourceDirName":".","slug":"/rpc","permalink":"/docs/rpc","draft":false,"unlisted":false,"editUrl":"https://github.com/stakeworld/website/edit/master/docs/rpc.mdx","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"id":"rpc","title":"RPC server","description":"Setting up a secure RPC server","slug":"/rpc","sidebar_position":4,"keywords":["rpc","rpc server","wss","ws","polkadot.js","validator","polkadot","kusama","westend"]},"sidebar":"tutorialSidebar","previous":{"title":"Database sizes","permalink":"/docs/dbsize"},"next":{"title":"Linux tips","permalink":"/docs/tools"}}');var r=n(4848),i=n(8453);const o={id:"rpc",title:"RPC server",description:"Setting up a secure RPC server",slug:"/rpc",sidebar_position:4,keywords:["rpc","rpc server","wss","ws","polkadot.js","validator","polkadot","kusama","westend"]},a=void 0,d={},c=[{value:"Stakeworld RPC data",id:"stakeworld-rpc-data",level:2},{value:"Setting up your own secure RPC server",id:"setting-up-your-own-secure-rpc-server",level:2},{value:"Archive node vs pruned node",id:"archive-node-vs-pruned-node",level:3},{value:"Secure the RPC server",id:"secure-the-rpc-server",level:3},{value:"Secure the ws port",id:"secure-the-ws-port",level:3},{value:"Using Apache2 for proxying",id:"using-apache2-for-proxying",level:3},{value:"Enabling ssl through letsencrypt",id:"enabling-ssl-through-letsencrypt",level:4},{value:"Add the proxy to the apache2 config",id:"add-the-proxy-to-the-apache2-config",level:4},{value:"Tweaking connections",id:"tweaking-connections",level:4},{value:"Rate limiting",id:"rate-limiting",level:4},{value:"Load balancing &amp; failover",id:"load-balancing--failover",level:3},{value:"Stress testing",id:"stress-testing",level:3}];function l(e){const s={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.admonition,{type:"info",children:[(0,r.jsx)(s.p,{children:"RPC servers allow access into the polkadot/kusama and parachains ecosystem. Stakeworld runs multiple public archive RPC servers:"}),(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Polkadot: ",(0,r.jsx)(s.a,{href:"https://polkadot.js.org/apps/?rpc=wss://dot-rpc.stakeworld.io",children:"dot-rpc.stakeworld.io"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["AssetHub: ",(0,r.jsx)(s.a,{href:"https://polkadot.js.org/apps/?rpc=wss://dot-rpc.stakeworld.io/assethub",children:"dot-rpc.stakeworld.io/assethub"})]}),"\n",(0,r.jsxs)(s.li,{children:["BridgeHub: ",(0,r.jsx)(s.a,{href:"https://polkadot.js.org/apps/?rpc=wss://dot-rpc.stakeworld.io/bridgehub",children:"dot-rpc.stakeworld.io/bridgehub"})]}),"\n",(0,r.jsxs)(s.li,{children:["Collectives: ",(0,r.jsx)(s.a,{href:"https://polkadot.js.org/apps/?rpc=wss://dot-rpc.stakeworld.io/collectives",children:"dot-rpc.stakeworld.io/collectives"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["Kusama: ",(0,r.jsx)(s.a,{href:"https://polkadot.js.org/apps/?rpc=wss://ksm-rpc.stakeworld.io",children:"ksm-rpc.stakeworld.io"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["AssetHub: ",(0,r.jsx)(s.a,{href:"https://polkadot.js.org/apps/?rpc=wss://ksm-rpc.stakeworld.io/assethub",children:"ksm-rpc.stakeworld.io/assethub"})]}),"\n",(0,r.jsxs)(s.li,{children:["BridgeHub: ",(0,r.jsx)(s.a,{href:"https://polkadot.js.org/apps/?rpc=wss://ksm-rpc.stakeworld.io/bridgehub",children:"ksm-rpc.stakeworld.io/bridgehub"})]}),"\n",(0,r.jsxs)(s.li,{children:["Encointer: ",(0,r.jsx)(s.a,{href:"https://polkadot.js.org/apps/?rpc=wss://ksm-rpc.stakeworld.io/encointer",children:"ksm-rpc.stakeworld.io/encointer"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["Paseo: ",(0,r.jsx)(s.a,{href:"https://polkadot.js.org/apps/?rpc=wss://pas-rpc.stakeworld.io",children:"pas-rpc.stakeworld.io"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["AssetHub: ",(0,r.jsx)(s.a,{href:"https://polkadot.js.org/apps/?rpc=wss://pas-rpc.stakeworld.io/assethub",children:"pas-rpc.stakeworld.io/assethub"})]}),"\n"]}),"\n"]}),"\n"]})]}),"\n",(0,r.jsx)(s.h2,{id:"stakeworld-rpc-data",children:"Stakeworld RPC data"}),"\n",(0,r.jsx)(s.p,{children:"Last update: Sat 04 Jan"}),"\n",(0,r.jsx)(s.p,{children:"Requests in millions:"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Chain"}),(0,r.jsx)(s.th,{children:"Requests in millions (6 months)"}),(0,r.jsx)(s.th,{children:"Requests in millions (per month)"}),(0,r.jsx)(s.th,{children:"Requests in millions (per day)"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"ksmcc3"}),(0,r.jsx)(s.td,{children:"6306"}),(0,r.jsx)(s.td,{children:"1051"}),(0,r.jsx)(s.td,{children:"35"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"asset-hub-kusama"}),(0,r.jsx)(s.td,{children:"86"}),(0,r.jsx)(s.td,{children:"14"}),(0,r.jsx)(s.td,{children:"0"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"bridge-hub-kusama"}),(0,r.jsx)(s.td,{children:"26"}),(0,r.jsx)(s.td,{children:"4"}),(0,r.jsx)(s.td,{children:"0"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"coretime-kusama"}),(0,r.jsx)(s.td,{children:"11"}),(0,r.jsx)(s.td,{children:"2"}),(0,r.jsx)(s.td,{children:"0"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"encointer-kusama"}),(0,r.jsx)(s.td,{children:"29"}),(0,r.jsx)(s.td,{children:"5"}),(0,r.jsx)(s.td,{children:"0"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"people-kusama"}),(0,r.jsx)(s.td,{children:"321"}),(0,r.jsx)(s.td,{children:"54"}),(0,r.jsx)(s.td,{children:"2"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"polkadot"}),(0,r.jsx)(s.td,{children:"5192"}),(0,r.jsx)(s.td,{children:"865"}),(0,r.jsx)(s.td,{children:"29"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"asset-hub-polkadot"}),(0,r.jsx)(s.td,{children:"6628"}),(0,r.jsx)(s.td,{children:"1105"}),(0,r.jsx)(s.td,{children:"36"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"bridge-hub-polkadot"}),(0,r.jsx)(s.td,{children:"44"}),(0,r.jsx)(s.td,{children:"7"}),(0,r.jsx)(s.td,{children:"0"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"collectives_polkadot"}),(0,r.jsx)(s.td,{children:"2"}),(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{children:"0"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"coretime-polkadot"}),(0,r.jsx)(s.td,{children:"N/A"}),(0,r.jsx)(s.td,{children:"N/A"}),(0,r.jsx)(s.td,{children:"N/A"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"people-polkadot"}),(0,r.jsx)(s.td,{children:"N/A"}),(0,r.jsx)(s.td,{children:"N/A"}),(0,r.jsx)(s.td,{children:"N/A"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"paseo"}),(0,r.jsx)(s.td,{children:"76"}),(0,r.jsx)(s.td,{children:"13"}),(0,r.jsx)(s.td,{children:"0"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"asset-hub-paseo"}),(0,r.jsx)(s.td,{children:"9"}),(0,r.jsx)(s.td,{children:"2"}),(0,r.jsx)(s.td,{children:"0"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"westend2"}),(0,r.jsx)(s.td,{children:"49"}),(0,r.jsx)(s.td,{children:"8"}),(0,r.jsx)(s.td,{children:"0"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"asset-hub-westend"}),(0,r.jsx)(s.td,{children:"33"}),(0,r.jsx)(s.td,{children:"5"}),(0,r.jsx)(s.td,{children:"0"})]})]})]}),"\n",(0,r.jsx)(s.h2,{id:"setting-up-your-own-secure-rpc-server",children:"Setting up your own secure RPC server"}),"\n",(0,r.jsxs)(s.p,{children:["To access the polkadot, kusama and parachains networks we need some kind of access into the network. This can be achieved by ",(0,r.jsx)(s.a,{href:"./validate",children:"setting up a node"})," with a RPC server and allowing access to that RPC server via a secure websocket (wss) port. The default node setup already exposes a non secure ws socket on port 9944 (which can optionally be changed by the ",(0,r.jsx)(s.code,{children:"--ws-port"})," parameter), but for a more usable situation we need a secure websocket which is accesible through a public port."]}),"\n",(0,r.jsx)(s.h3,{id:"archive-node-vs-pruned-node",children:"Archive node vs pruned node"}),"\n",(0,r.jsx)(s.p,{children:"A pruned node knows only the recent information about the network and not its full history. Most frequently done actions can be done with a pruned node, for example see account balances, make transfers, setup session keys, staking, etc. An archive node has the full history (database) of the network and can be queried in all kind of ways, give information about transfers since the network started, historical balances, advanced queries about past events, etc."}),"\n",(0,r.jsxs)(s.p,{children:["An archive node requires a lot more ",(0,r.jsx)(s.a,{href:"./snapshot",children:"diskspace"}),".  For an archive node you need the options ",(0,r.jsx)(s.code,{children:"--state-pruning archive --blocks-pruning archive"})," in your startup settings.\n",(0,r.jsx)(s.img,{alt:"snapsize",src:n(3996).A+"",width:"800",height:"300"})]}),"\n",(0,r.jsx)(s.admonition,{type:"tip",children:(0,r.jsx)(s.p,{children:"Inclusion in the Polkadot.js UI requires an archive node."})}),"\n",(0,r.jsx)(s.h3,{id:"secure-the-rpc-server",children:"Secure the RPC server"}),"\n",(0,r.jsxs)(s.p,{children:["Via the node startup settings you can choose ",(0,r.jsx)(s.strong,{children:"what"})," to expose with ",(0,r.jsx)(s.strong,{children:"how many"})," connections ",(0,r.jsx)(s.strong,{children:"from where"})," through your rpc server."]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.em,{children:"How many"}),": You can set your maximum connections through ",(0,r.jsx)(s.code,{children:"--ws-max-connections"}),", for example ",(0,r.jsx)(s.code,{children:"--ws-max-connections 100"})]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.em,{children:"From where"}),": by default localhost and the polkadot.js are allowed to access the RPC server, you can change this by setting ",(0,r.jsx)(s.code,{children:"--rpc-cors"}),", to allow access from everywhere you need ",(0,r.jsx)(s.code,{children:"--rpc-cors all"})]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.em,{children:"What"}),": you can limit the methods to use with ",(0,r.jsx)(s.code,{children:"--rpc-methods"}),", an easy way to set this to a safe mode is ",(0,r.jsx)(s.code,{children:"--rpc-methods Safe"})]}),"\n",(0,r.jsx)(s.h3,{id:"secure-the-ws-port",children:"Secure the ws port"}),"\n",(0,r.jsxs)(s.p,{children:['The ws port is preferably exposed from the outside as a ssl secured wss port. The "',(0,r.jsx)(s.a,{href:"https://wiki.polkadot.network/docs/maintain-wss",children:"maintain wss"}),"\" on the wiki already covers a lot of information about this, especially in relation to setting it up in a nginx configuration. This page is focussed more on a apache2 but principles are the same. The main idea is converting the non secure ws port to a secure wss port by putting it behind a ssl enabled proxy. So from outside one see's the ssl enabled apache2/nginx/other proxy server, witch redirect the request to the internal rpc node."]}),"\n",(0,r.jsx)(s.h3,{id:"using-apache2-for-proxying",children:"Using Apache2 for proxying"}),"\n",(0,r.jsxs)(s.p,{children:["Apache2 is a little heavier then nginx but also has some more tweaking posibilities. You can run it in different modes, prefork, worker or event. We chose ",(0,r.jsx)(s.a,{href:"https://httpd.apache.org/docs/2.4/mod/event.html",children:"event"})," since this seems best suited for high load enviroments. Downside is that you can't use the default php module and need to enable it via php-fm. The proxy_wstunnel module works out of the box."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"apt install apache2\na2dismod mpm_prefork\na2enmod mpm_event proxy proxy_html proxy_http proxy_wstunnel rewrite ssl\n"})}),"\n",(0,r.jsx)(s.p,{children:"If you want to enable php"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"apt install php-fpm\na2enmod proxy_fcgi setenvif\n"})}),"\n",(0,r.jsx)(s.h4,{id:"enabling-ssl-through-letsencrypt",children:"Enabling ssl through letsencrypt"}),"\n",(0,r.jsxs)(s.p,{children:["There are multiple options for getting a ssl certificate, one popular (and free) being letsencrypt. Obtaining a letsencrypt certificate can be done through for example ",(0,r.jsx)(s.a,{href:"https://certbot.eff.org/",children:"certbot"})," or ",(0,r.jsx)(s.a,{href:"https://go-acme.github.io/lego/dns/",children:"lego"})," (which has more dns provider options)."]}),"\n",(0,r.jsx)(s.h4,{id:"add-the-proxy-to-the-apache2-config",children:"Add the proxy to the apache2 config"}),"\n",(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.a,{href:"https://httpd.apache.org/docs/2.4/mod/mod_proxy_wstunnel.html",children:"mod_proxy_wstunnel"})," provides ",(0,r.jsx)(s.em,{children:"support for the tunnelling of web socket connections to a backend websockets server. The connection is automatically upgraded to a websocket connection"}),". In a ssl enabled virtualhost add:"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-apacheconf",children:"SSLProxyEngine on\nProxyRequests off\n\nProxyPass / ws://localhost:9944\nProxyPassReverse / ws://localhost:9944\n"})}),"\n",(0,r.jsx)(s.p,{children:"Older versions of mod_proxy_wstunnel do not upgrade the connection automatically and will need the following config added:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-apacheconf",children:"RewriteEngine on\nRewriteCond %{HTTP:Upgrade} websocket [NC]\nRewriteRule /(.*) ws://localhost:9944/$1 [P,L]\nRewriteRule /(.*) http://localhost:9944/$1 [P,L]\n"})}),"\n",(0,r.jsx)(s.h4,{id:"tweaking-connections",children:"Tweaking connections"}),"\n",(0,r.jsxs)(s.p,{children:["The number of connections is limited by the node itself (",(0,r.jsx)(s.code,{children:"--ws-max-connections"}),") but also by the number of threads available on the proxy server. For apache2 this can be tweaked by editing ",(0,r.jsx)(s.code,{children:"/etc/apache2/mods-enabled/mpm_event.conf"})]}),"\n",(0,r.jsx)(s.p,{children:"We are using:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-apacheconf",children:"StartServers\t\t 4\nMinSpareThreads\t\t 25\nMaxSpareThreads\t\t 75\nThreadLimit\t\t 128\nThreadsPerChild\t\t 128\nMaxRequestWorkers  \t 896\nMaxConnectionsPerChild   0\n"})}),"\n",(0,r.jsx)(s.h4,{id:"rate-limiting",children:"Rate limiting"}),"\n",(0,r.jsx)(s.p,{children:"Theoretically one client could use all connections/resources, draining the resources of the server and making it inaccessible. This can be countered by rate limiting the connections, for example by using mod_qos:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"apt install libapache2-mod-qos\na2enmod qos\n"})}),"\n",(0,r.jsxs)(s.p,{children:["And edit ",(0,r.jsx)(s.code,{children:"/etc/apache2/mods-available/qos.conf"})]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"  # allows max 50 connections from a single ip address:\n  QS_SrvMaxConnPerIP                                 50\n"})}),"\n",(0,r.jsx)(s.p,{children:"Be carefull when running behind a load balancer (for example cloudflare) because the load balancer will only use a few ip's and thus can trigger the rate limit, iso in this case it is better to use the rate limit options from the load balancer itself."}),"\n",(0,r.jsx)(s.h3,{id:"load-balancing--failover",children:"Load balancing & failover"}),"\n",(0,r.jsxs)(s.p,{children:["With multiple servers it is possible to build a load balancing or even a failover construction. A simple load balancing can be a ",(0,r.jsx)(s.a,{href:"https://en.wikipedia.org/wiki/Round-robin_DNS",children:"round robin-robin dns"})," up to a more advanced (dedicated) load balancer or a content delivery network (CDN) like cloudflare."]}),"\n",(0,r.jsx)(s.h3,{id:"stress-testing",children:"Stress testing"}),"\n",(0,r.jsx)(s.p,{children:"You can test basic usage by accessing your server through the polkadot.js UI as a custom endpoint. For example staking target display is RPC intensive and can give you an indication of performance."}),"\n",(0,r.jsxs)(s.p,{children:["There are also more dedicated stress testing solutions, we have forked the ",(0,r.jsx)(s.a,{href:"https://github.com/dwellir-public/artillery-engine-substrate",children:"Dwellir repository"})," for our testing."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash\nnvm install --lts\nnpm install -g yarn\nyarn global add artillery\nyarn global add artillery-engine-substrate\ncd /opt\ngit clone git@github.com:stakeworld/stakeworld-rpc-artillery.git\ncd /opt/stakeworld-rpc-artillery\nyarn\n./run.sh\n"})}),"\n",(0,r.jsxs)(s.p,{children:["After the ",(0,r.jsx)(s.code,{children:"run.sh"})," you can edit some variables like how many connections per second, the wss node, etc. The following is a test run for 10 seconds with 10 connections per second and maximum 20 concurrent users."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:'config:\n  target: "wss://ksm-rpc.stakeworld.io"\n  processor: "./functions.js"\n  phases:\n    - duration: 10\n      arrivalRate: 10\n      maxVusers: 20\n'})}),"\n",(0,r.jsx)(s.p,{children:"After this you get some info about the run and a report is created, which can be used for further diagnostics"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"--------------------------------\nSummary report @ 23:38:40(+0100)\n--------------------------------\n\nvusers.completed: .............................................................. 100\nvusers.created: ................................................................ 100\nvusers.created_by_name.balance: ................................................ 35\nvusers.created_by_name.complex_call: ........................................... 33\nvusers.created_by_name.headers_blocks: ......................................... 32\nvusers.failed: ................................................................. 0\nvusers.session_length:\n  min: ......................................................................... 231.7\n  max: ......................................................................... 656.1\n  median: ...................................................................... 361.5\n  p95: ......................................................................... 518.1\n  p99: ......................................................................... 645.6\nws.messages_sent: .............................................................. 163\nws.send_rate: .................................................................. 29/sec\nLog file: reports/report.json\nReport generated: reports/report.html\n"})})]})}function h(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},3996:(e,s,n)=>{n.d(s,{A:()=>t});const t="data:image/png;base64,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"},8453:(e,s,n)=>{n.d(s,{R:()=>o,x:()=>a});var t=n(6540);const r={},i=t.createContext(r);function o(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);