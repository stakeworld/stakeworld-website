"use strict";(self.webpackChunkstakeworld_io=self.webpackChunkstakeworld_io||[]).push([[609],{2865:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"rpc","title":"RPC server","description":"Setting up a secure RPC server","source":"@site/docs/rpc.mdx","sourceDirName":".","slug":"/rpc","permalink":"/docs/rpc","draft":false,"unlisted":false,"editUrl":"https://github.com/stakeworld/website/edit/master/docs/rpc.mdx","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"id":"rpc","title":"RPC server","description":"Setting up a secure RPC server","slug":"/rpc","sidebar_position":4,"keywords":["rpc","rpc server","wss","ws","polkadot.js","validator","polkadot","kusama","westend"]},"sidebar":"tutorialSidebar","previous":{"title":"Database sizes","permalink":"/docs/dbsize"},"next":{"title":"Linux tips","permalink":"/docs/tools"}}');var t=n(4848),i=n(8453);const o={id:"rpc",title:"RPC server",description:"Setting up a secure RPC server",slug:"/rpc",sidebar_position:4,keywords:["rpc","rpc server","wss","ws","polkadot.js","validator","polkadot","kusama","westend"]},a=void 0,d={},c=[{value:"Stakeworld RPC data",id:"stakeworld-rpc-data",level:2},{value:"Setting up your own secure RPC server",id:"setting-up-your-own-secure-rpc-server",level:2},{value:"Archive node vs pruned node",id:"archive-node-vs-pruned-node",level:3},{value:"Secure the RPC server",id:"secure-the-rpc-server",level:3},{value:"Secure the ws port",id:"secure-the-ws-port",level:3},{value:"Using Apache2 for proxying",id:"using-apache2-for-proxying",level:3},{value:"Enabling ssl through letsencrypt",id:"enabling-ssl-through-letsencrypt",level:4},{value:"Add the proxy to the apache2 config",id:"add-the-proxy-to-the-apache2-config",level:4},{value:"Tweaking connections",id:"tweaking-connections",level:4},{value:"Rate limiting",id:"rate-limiting",level:4},{value:"Load balancing &amp; failover",id:"load-balancing--failover",level:3},{value:"Stress testing",id:"stress-testing",level:3}];function l(e){const s={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.admonition,{type:"info",children:[(0,t.jsx)(s.p,{children:"RPC servers allow access into the polkadot/kusama and parachains ecosystem. Stakeworld runs multiple public archive RPC servers:"}),(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Polkadot: ",(0,t.jsx)(s.a,{href:"https://polkadot.js.org/apps/?rpc=wss://dot-rpc.stakeworld.io",children:"dot-rpc.stakeworld.io"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["AssetHub: ",(0,t.jsx)(s.a,{href:"https://polkadot.js.org/apps/?rpc=wss://dot-rpc.stakeworld.io/assethub",children:"dot-rpc.stakeworld.io/assethub"})]}),"\n",(0,t.jsxs)(s.li,{children:["BridgeHub: ",(0,t.jsx)(s.a,{href:"https://polkadot.js.org/apps/?rpc=wss://dot-rpc.stakeworld.io/bridgehub",children:"dot-rpc.stakeworld.io/bridgehub"})]}),"\n",(0,t.jsxs)(s.li,{children:["Collectives: ",(0,t.jsx)(s.a,{href:"https://polkadot.js.org/apps/?rpc=wss://dot-rpc.stakeworld.io/collectives",children:"dot-rpc.stakeworld.io/collectives"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["Kusama: ",(0,t.jsx)(s.a,{href:"https://polkadot.js.org/apps/?rpc=wss://ksm-rpc.stakeworld.io",children:"ksm-rpc.stakeworld.io"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["AssetHub: ",(0,t.jsx)(s.a,{href:"https://polkadot.js.org/apps/?rpc=wss://ksm-rpc.stakeworld.io/assethub",children:"ksm-rpc.stakeworld.io/assethub"})]}),"\n",(0,t.jsxs)(s.li,{children:["BridgeHub: ",(0,t.jsx)(s.a,{href:"https://polkadot.js.org/apps/?rpc=wss://ksm-rpc.stakeworld.io/bridgehub",children:"ksm-rpc.stakeworld.io/bridgehub"})]}),"\n",(0,t.jsxs)(s.li,{children:["Encointer: ",(0,t.jsx)(s.a,{href:"https://polkadot.js.org/apps/?rpc=wss://ksm-rpc.stakeworld.io/encointer",children:"ksm-rpc.stakeworld.io/encointer"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["Paseo: ",(0,t.jsx)(s.a,{href:"https://polkadot.js.org/apps/?rpc=wss://pas-rpc.stakeworld.io",children:"pas-rpc.stakeworld.io"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["AssetHub: ",(0,t.jsx)(s.a,{href:"https://polkadot.js.org/apps/?rpc=wss://pas-rpc.stakeworld.io/assethub",children:"pas-rpc.stakeworld.io/assethub"})]}),"\n"]}),"\n"]}),"\n"]})]}),"\n",(0,t.jsx)(s.h2,{id:"stakeworld-rpc-data",children:"Stakeworld RPC data"}),"\n",(0,t.jsx)(s.p,{children:"Last update: Sat 04 Jan"}),"\n",(0,t.jsx)(s.p,{children:"Requests in millions:"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Chain"}),(0,t.jsx)(s.th,{children:"Requests in millions (6 months)"}),(0,t.jsx)(s.th,{children:"Requests in millions (per month)"}),(0,t.jsx)(s.th,{children:"Requests in millions (per day)"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"ksmcc3"}),(0,t.jsx)(s.td,{children:"6306"}),(0,t.jsx)(s.td,{children:"1051"}),(0,t.jsx)(s.td,{children:"35"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"asset-hub-kusama"}),(0,t.jsx)(s.td,{children:"86"}),(0,t.jsx)(s.td,{children:"14"}),(0,t.jsx)(s.td,{children:"0"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"bridge-hub-kusama"}),(0,t.jsx)(s.td,{children:"26"}),(0,t.jsx)(s.td,{children:"4"}),(0,t.jsx)(s.td,{children:"0"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"coretime-kusama"}),(0,t.jsx)(s.td,{children:"11"}),(0,t.jsx)(s.td,{children:"2"}),(0,t.jsx)(s.td,{children:"0"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"encointer-kusama"}),(0,t.jsx)(s.td,{children:"29"}),(0,t.jsx)(s.td,{children:"5"}),(0,t.jsx)(s.td,{children:"0"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"people-kusama"}),(0,t.jsx)(s.td,{children:"321"}),(0,t.jsx)(s.td,{children:"54"}),(0,t.jsx)(s.td,{children:"2"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"polkadot"}),(0,t.jsx)(s.td,{children:"5192"}),(0,t.jsx)(s.td,{children:"865"}),(0,t.jsx)(s.td,{children:"29"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"asset-hub-polkadot"}),(0,t.jsx)(s.td,{children:"6628"}),(0,t.jsx)(s.td,{children:"1105"}),(0,t.jsx)(s.td,{children:"36"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"bridge-hub-polkadot"}),(0,t.jsx)(s.td,{children:"44"}),(0,t.jsx)(s.td,{children:"7"}),(0,t.jsx)(s.td,{children:"0"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"collectives_polkadot"}),(0,t.jsx)(s.td,{children:"2"}),(0,t.jsx)(s.td,{children:"0"}),(0,t.jsx)(s.td,{children:"0"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"coretime-polkadot"}),(0,t.jsx)(s.td,{children:"N/A"}),(0,t.jsx)(s.td,{children:"N/A"}),(0,t.jsx)(s.td,{children:"N/A"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"people-polkadot"}),(0,t.jsx)(s.td,{children:"N/A"}),(0,t.jsx)(s.td,{children:"N/A"}),(0,t.jsx)(s.td,{children:"N/A"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"paseo"}),(0,t.jsx)(s.td,{children:"76"}),(0,t.jsx)(s.td,{children:"13"}),(0,t.jsx)(s.td,{children:"0"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"asset-hub-paseo"}),(0,t.jsx)(s.td,{children:"9"}),(0,t.jsx)(s.td,{children:"2"}),(0,t.jsx)(s.td,{children:"0"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"westend2"}),(0,t.jsx)(s.td,{children:"49"}),(0,t.jsx)(s.td,{children:"8"}),(0,t.jsx)(s.td,{children:"0"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"asset-hub-westend"}),(0,t.jsx)(s.td,{children:"33"}),(0,t.jsx)(s.td,{children:"5"}),(0,t.jsx)(s.td,{children:"0"})]})]})]}),"\n",(0,t.jsx)(s.h2,{id:"setting-up-your-own-secure-rpc-server",children:"Setting up your own secure RPC server"}),"\n",(0,t.jsxs)(s.p,{children:["To access the polkadot, kusama and parachains networks we need some kind of access into the network. This can be achieved by ",(0,t.jsx)(s.a,{href:"./validate",children:"setting up a node"})," with a RPC server and allowing access to that RPC server via a secure websocket (wss) port. The default node setup already exposes a non secure ws socket on port 9944 (which can optionally be changed by the ",(0,t.jsx)(s.code,{children:"--ws-port"})," parameter), but for a more usable situation we need a secure websocket which is accesible through a public port."]}),"\n",(0,t.jsx)(s.h3,{id:"archive-node-vs-pruned-node",children:"Archive node vs pruned node"}),"\n",(0,t.jsx)(s.p,{children:"A pruned node knows only the recent information about the network and not its full history. Most frequently done actions can be done with a pruned node, for example see account balances, make transfers, setup session keys, staking, etc. An archive node has the full history (database) of the network and can be queried in all kind of ways, give information about transfers since the network started, historical balances, advanced queries about past events, etc."}),"\n",(0,t.jsxs)(s.p,{children:["An archive node requires a lot more ",(0,t.jsx)(s.a,{href:"./snapshot",children:"diskspace"}),".  For an archive node you need the options ",(0,t.jsx)(s.code,{children:"--state-pruning archive --blocks-pruning archive"})," in your startup settings.\n",(0,t.jsx)(s.img,{alt:"snapsize",src:n(3996).A+"",width:"800",height:"300"})]}),"\n",(0,t.jsx)(s.admonition,{type:"tip",children:(0,t.jsx)(s.p,{children:"Inclusion in the Polkadot.js UI requires an archive node."})}),"\n",(0,t.jsx)(s.h3,{id:"secure-the-rpc-server",children:"Secure the RPC server"}),"\n",(0,t.jsxs)(s.p,{children:["Via the node startup settings you can choose ",(0,t.jsx)(s.strong,{children:"what"})," to expose with ",(0,t.jsx)(s.strong,{children:"how many"})," connections ",(0,t.jsx)(s.strong,{children:"from where"})," through your rpc server."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.em,{children:"How many"}),": You can set your maximum connections through ",(0,t.jsx)(s.code,{children:"--ws-max-connections"}),", for example ",(0,t.jsx)(s.code,{children:"--ws-max-connections 100"})]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.em,{children:"From where"}),": by default localhost and the polkadot.js are allowed to access the RPC server, you can change this by setting ",(0,t.jsx)(s.code,{children:"--rpc-cors"}),", to allow access from everywhere you need ",(0,t.jsx)(s.code,{children:"--rpc-cors all"})]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.em,{children:"What"}),": you can limit the methods to use with ",(0,t.jsx)(s.code,{children:"--rpc-methods"}),", an easy way to set this to a safe mode is ",(0,t.jsx)(s.code,{children:"--rpc-methods Safe"})]}),"\n",(0,t.jsx)(s.h3,{id:"secure-the-ws-port",children:"Secure the ws port"}),"\n",(0,t.jsxs)(s.p,{children:['The ws port is preferably exposed from the outside as a ssl secured wss port. The "',(0,t.jsx)(s.a,{href:"https://wiki.polkadot.network/docs/maintain-wss",children:"maintain wss"}),"\" on the wiki already covers a lot of information about this, especially in relation to setting it up in a nginx configuration. This page is focussed more on a apache2 but principles are the same. The main idea is converting the non secure ws port to a secure wss port by putting it behind a ssl enabled proxy. So from outside one see's the ssl enabled apache2/nginx/other proxy server, witch redirect the request to the internal rpc node."]}),"\n",(0,t.jsx)(s.h3,{id:"using-apache2-for-proxying",children:"Using Apache2 for proxying"}),"\n",(0,t.jsxs)(s.p,{children:["Apache2 is a little heavier then nginx but also has some more tweaking posibilities. You can run it in different modes, prefork, worker or event. We chose ",(0,t.jsx)(s.a,{href:"https://httpd.apache.org/docs/2.4/mod/event.html",children:"event"})," since this seems best suited for high load enviroments. Downside is that you can't use the default php module and need to enable it via php-fm. The proxy_wstunnel module works out of the box."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"apt install apache2\na2dismod mpm_prefork\na2enmod mpm_event proxy proxy_html proxy_http proxy_wstunnel rewrite ssl\n"})}),"\n",(0,t.jsx)(s.p,{children:"If you want to enable php"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"apt install php-fpm\na2enmod proxy_fcgi setenvif\n"})}),"\n",(0,t.jsx)(s.h4,{id:"enabling-ssl-through-letsencrypt",children:"Enabling ssl through letsencrypt"}),"\n",(0,t.jsxs)(s.p,{children:["There are multiple options for getting a ssl certificate, one popular (and free) being letsencrypt. Obtaining a letsencrypt certificate can be done through for example ",(0,t.jsx)(s.a,{href:"https://certbot.eff.org/",children:"certbot"})," or ",(0,t.jsx)(s.a,{href:"https://go-acme.github.io/lego/dns/",children:"lego"})," (which has more dns provider options)."]}),"\n",(0,t.jsx)(s.h4,{id:"add-the-proxy-to-the-apache2-config",children:"Add the proxy to the apache2 config"}),"\n",(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.a,{href:"https://httpd.apache.org/docs/2.4/mod/mod_proxy_wstunnel.html",children:"mod_proxy_wstunnel"})," provides ",(0,t.jsx)(s.em,{children:"support for the tunnelling of web socket connections to a backend websockets server. The connection is automatically upgraded to a websocket connection"}),". In a ssl enabled virtualhost add:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-apacheconf",children:"SSLProxyEngine on\nProxyRequests off\n\nProxyPass / ws://localhost:9944\nProxyPassReverse / ws://localhost:9944\n"})}),"\n",(0,t.jsx)(s.p,{children:"Older versions of mod_proxy_wstunnel do not upgrade the connection automatically and will need the following config added:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-apacheconf",children:"RewriteEngine on\nRewriteCond %{HTTP:Upgrade} websocket [NC]\nRewriteRule /(.*) ws://localhost:9944/$1 [P,L]\nRewriteRule /(.*) http://localhost:9944/$1 [P,L]\n"})}),"\n",(0,t.jsx)(s.h4,{id:"tweaking-connections",children:"Tweaking connections"}),"\n",(0,t.jsxs)(s.p,{children:["The number of connections is limited by the node itself (",(0,t.jsx)(s.code,{children:"--ws-max-connections"}),") but also by the number of threads available on the proxy server. For apache2 this can be tweaked by editing ",(0,t.jsx)(s.code,{children:"/etc/apache2/mods-enabled/mpm_event.conf"})]}),"\n",(0,t.jsx)(s.p,{children:"We are using:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-apacheconf",children:"StartServers\t\t 4\nMinSpareThreads\t\t 25\nMaxSpareThreads\t\t 75\nThreadLimit\t\t 128\nThreadsPerChild\t\t 128\nMaxRequestWorkers  \t 896\nMaxConnectionsPerChild   0\n"})}),"\n",(0,t.jsx)(s.h4,{id:"rate-limiting",children:"Rate limiting"}),"\n",(0,t.jsx)(s.p,{children:"Theoretically one client could use all connections/resources, draining the resources of the server and making it inaccessible. This can be countered by rate limiting the connections, for example by using mod_qos:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"apt install libapache2-mod-qos\na2enmod qos\n"})}),"\n",(0,t.jsxs)(s.p,{children:["And edit ",(0,t.jsx)(s.code,{children:"/etc/apache2/mods-available/qos.conf"})]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"  # allows max 50 connections from a single ip address:\n  QS_SrvMaxConnPerIP                                 50\n"})}),"\n",(0,t.jsx)(s.p,{children:"Be carefull when running behind a load balancer (for example cloudflare) because the load balancer will only use a few ip's and thus can trigger the rate limit, iso in this case it is better to use the rate limit options from the load balancer itself."}),"\n",(0,t.jsx)(s.h3,{id:"load-balancing--failover",children:"Load balancing & failover"}),"\n",(0,t.jsxs)(s.p,{children:["With multiple servers it is possible to build a load balancing or even a failover construction. A simple load balancing can be a ",(0,t.jsx)(s.a,{href:"https://en.wikipedia.org/wiki/Round-robin_DNS",children:"round robin-robin dns"})," up to a more advanced (dedicated) load balancer or a content delivery network (CDN) like cloudflare."]}),"\n",(0,t.jsx)(s.h3,{id:"stress-testing",children:"Stress testing"}),"\n",(0,t.jsx)(s.p,{children:"You can test basic usage by accessing your server through the polkadot.js UI as a custom endpoint. For example staking target display is RPC intensive and can give you an indication of performance."}),"\n",(0,t.jsxs)(s.p,{children:["There are also more dedicated stress testing solutions, we have forked the ",(0,t.jsx)(s.a,{href:"https://github.com/dwellir-public/artillery-engine-substrate",children:"Dwellir repository"})," for our testing."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash\nnvm install --lts\nnpm install -g yarn\nyarn global add artillery\nyarn global add artillery-engine-substrate\ncd /opt\ngit clone git@github.com:stakeworld/stakeworld-rpc-artillery.git\ncd /opt/stakeworld-rpc-artillery\nyarn\n./run.sh\n"})}),"\n",(0,t.jsxs)(s.p,{children:["After the ",(0,t.jsx)(s.code,{children:"run.sh"})," you can edit some variables like how many connections per second, the wss node, etc. The following is a test run for 10 seconds with 10 connections per second and maximum 20 concurrent users."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:'config:\n  target: "wss://ksm-rpc.stakeworld.io"\n  processor: "./functions.js"\n  phases:\n    - duration: 10\n      arrivalRate: 10\n      maxVusers: 20\n'})}),"\n",(0,t.jsx)(s.p,{children:"After this you get some info about the run and a report is created, which can be used for further diagnostics"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"--------------------------------\nSummary report @ 23:38:40(+0100)\n--------------------------------\n\nvusers.completed: .............................................................. 100\nvusers.created: ................................................................ 100\nvusers.created_by_name.balance: ................................................ 35\nvusers.created_by_name.complex_call: ........................................... 33\nvusers.created_by_name.headers_blocks: ......................................... 32\nvusers.failed: ................................................................. 0\nvusers.session_length:\n  min: ......................................................................... 231.7\n  max: ......................................................................... 656.1\n  median: ...................................................................... 361.5\n  p95: ......................................................................... 518.1\n  p99: ......................................................................... 645.6\nws.messages_sent: .............................................................. 163\nws.send_rate: .................................................................. 29/sec\nLog file: reports/report.json\nReport generated: reports/report.html\n"})})]})}function h(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},3996:(e,s,n)=>{n.d(s,{A:()=>r});const r="data:image/png;base64,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"},8453:(e,s,n)=>{n.d(s,{R:()=>o,x:()=>a});var r=n(6540);const t={},i=r.createContext(t);function o(e){const s=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(i.Provider,{value:s},e.children)}}}]);