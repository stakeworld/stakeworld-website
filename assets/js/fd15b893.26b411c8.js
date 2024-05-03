"use strict";(self.webpackChunkstakeworld_io=self.webpackChunkstakeworld_io||[]).push([[961],{640:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var r=n(5893),t=n(1151);const o={id:"rpc",title:"RPC server",description:"Setting up a secure RPC server",slug:"/rpc",sidebar_position:4,keywords:["rpc","rpc server","wss","ws","polkadot.js","validator","polkadot","kusama","westend"]},i=void 0,a={id:"rpc",title:"RPC server",description:"Setting up a secure RPC server",source:"@site/docs/rpc.mdx",sourceDirName:".",slug:"/rpc",permalink:"/docs/rpc",draft:!1,unlisted:!1,editUrl:"https://github.com/stakeworld/website/edit/master/docs/rpc.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"rpc",title:"RPC server",description:"Setting up a secure RPC server",slug:"/rpc",sidebar_position:4,keywords:["rpc","rpc server","wss","ws","polkadot.js","validator","polkadot","kusama","westend"]},sidebar:"tutorialSidebar",previous:{title:"Database sizes",permalink:"/docs/dbsize"},next:{title:"Linux tips",permalink:"/docs/tools"}},d={},c=[{value:"Live stakeworld RPC data",id:"live-stakeworld-rpc-data",level:2},{value:"Setting up your own secure RPC server",id:"setting-up-your-own-secure-rpc-server",level:2},{value:"Archive node vs pruned node",id:"archive-node-vs-pruned-node",level:3},{value:"Secure the RPC server",id:"secure-the-rpc-server",level:3},{value:"Secure the ws port",id:"secure-the-ws-port",level:3},{value:"Using Apache2 for proxying",id:"using-apache2-for-proxying",level:3},{value:"Enabling ssl through letsencrypt",id:"enabling-ssl-through-letsencrypt",level:4},{value:"Add the proxy to the apache2 config",id:"add-the-proxy-to-the-apache2-config",level:4},{value:"Tweaking connections",id:"tweaking-connections",level:4},{value:"Rate limiting",id:"rate-limiting",level:4},{value:"Load balancing &amp; failover",id:"load-balancing--failover",level:3},{value:"Stress testing",id:"stress-testing",level:3}];function l(e){const s={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.admonition,{type:"info",children:[(0,r.jsx)(s.p,{children:"RPC servers allow access into the polkadot/kusama and parachains ecosystem. Stakeworld runs multiple public archive RPC servers:"}),(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Polkadot: ",(0,r.jsx)(s.a,{href:"https://polkadot.js.org/apps/?rpc=wss://dot-rpc.stakeworld.io",children:"dot-rpc.stakeworld.io"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["AssetHub: ",(0,r.jsx)(s.a,{href:"https://polkadot.js.org/apps/?rpc=wss://dot-rpc.stakeworld.io/statemint",children:"dot-rpc.stakeworld.io/statemint"})]}),"\n",(0,r.jsxs)(s.li,{children:["BridgeHub: ",(0,r.jsx)(s.a,{href:"https://polkadot.js.org/apps/?rpc=wss://dot-rpc.stakeworld.io/bridgehub",children:"dot-rpc.stakeworld.io/bridgehub"})]}),"\n",(0,r.jsxs)(s.li,{children:["Collectives: ",(0,r.jsx)(s.a,{href:"https://polkadot.js.org/apps/?rpc=wss://dot-rpc.stakeworld.io/collectives",children:"dot-rpc.stakeworld.io/collectives"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["Kusama: ",(0,r.jsx)(s.a,{href:"https://polkadot.js.org/apps/?rpc=wss://ksm-rpc.stakeworld.io",children:"ksm-rpc.stakeworld.io"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["AssetHub: ",(0,r.jsx)(s.a,{href:"https://polkadot.js.org/apps/?rpc=wss://ksm-rpc.stakeworld.io/statemine",children:"ksm-rpc.stakeworld.io/statemine"})]}),"\n",(0,r.jsxs)(s.li,{children:["BridgeHub: ",(0,r.jsx)(s.a,{href:"https://polkadot.js.org/apps/?rpc=wss://ksm-rpc.stakeworld.io/bridgehub",children:"ksm-rpc.stakeworld.io/bridgehub"})]}),"\n",(0,r.jsxs)(s.li,{children:["Encointer: ",(0,r.jsx)(s.a,{href:"https://polkadot.js.org/apps/?rpc=wss://ksm-rpc.stakeworld.io/encointer",children:"ksm-rpc.stakeworld.io/encointer"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["Westend: ",(0,r.jsx)(s.a,{href:"https://polkadot.js.org/apps/?rpc=wss://wnd-rpc.stakeworld.io",children:"wnd-rpc.stakeworld.io"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["AssetHub: ",(0,r.jsx)(s.a,{href:"https://polkadot.js.org/apps/?rpc=wss://wnd-rpc.stakeworld.io/westmint",children:"wnd-rpc.stakeworld.io/westmint"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["Paseo: ",(0,r.jsx)(s.a,{href:"https://polkadot.js.org/apps/?rpc=wss://pas-rpc.stakeworld.io",children:"pas-rpc.stakeworld.io"})]}),"\n"]})]}),"\n",(0,r.jsx)(s.h2,{id:"live-stakeworld-rpc-data",children:"Live stakeworld RPC data"}),"\n",(0,r.jsx)(s.admonition,{type:"tip",children:(0,r.jsx)(s.p,{children:"Monthly data can take a minute to load"})}),"\n",(0,r.jsx)("iframe",{src:"https://monitor.stakeworld.io/public-dashboards/cef69420acd44165be7df9ad65c7cd89?orgId=1",width:"800",height:"1600",frameborder:"0"}),"\n",(0,r.jsx)(s.h2,{id:"setting-up-your-own-secure-rpc-server",children:"Setting up your own secure RPC server"}),"\n",(0,r.jsxs)(s.p,{children:["To access the polkadot, kusama and parachains networks we need some kind of access into the network. This can be achieved by ",(0,r.jsx)(s.a,{href:"./validate",children:"setting up a node"})," with a RPC server and allowing access to that RPC server via a secure websocket (wss) port. The default node setup already exposes a non secure ws socket on port 9944 (which can optionally be changed by the ",(0,r.jsx)(s.code,{children:"--ws-port"})," parameter), but for a more usable situation we need a secure websocket which is accesible through a public port."]}),"\n",(0,r.jsx)(s.h3,{id:"archive-node-vs-pruned-node",children:"Archive node vs pruned node"}),"\n",(0,r.jsx)(s.p,{children:"A pruned node knows only the recent information about the network and not its full history. Most frequently done actions can be done with a pruned node, for example see account balances, make transfers, setup session keys, staking, etc. An archive node has the full history (database) of the network and can be queried in all kind of ways, give information about transfers since the network started, historical balances, advanced queries about past events, etc."}),"\n",(0,r.jsxs)(s.p,{children:["An archive node requires a lot more ",(0,r.jsx)(s.a,{href:"./snapshot",children:"diskspace"}),".  For an archive node you need the options ",(0,r.jsx)(s.code,{children:"--state-pruning archive --blocks-pruning archive"})," in your startup settings.\n",(0,r.jsx)(s.img,{alt:"snapsize",src:n(9735).Z+"",width:"800",height:"300"})]}),"\n",(0,r.jsx)(s.admonition,{type:"tip",children:(0,r.jsx)(s.p,{children:"Inclusion in the Polkadot.js UI requires an archive node."})}),"\n",(0,r.jsx)(s.h3,{id:"secure-the-rpc-server",children:"Secure the RPC server"}),"\n",(0,r.jsxs)(s.p,{children:["Via the node startup settings you can choose ",(0,r.jsx)(s.strong,{children:"what"})," to expose with ",(0,r.jsx)(s.strong,{children:"how many"})," connections ",(0,r.jsx)(s.strong,{children:"from where"})," through your rpc server."]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.em,{children:"How many"}),": You can set your maximum connections through ",(0,r.jsx)(s.code,{children:"--ws-max-connections"}),", for example ",(0,r.jsx)(s.code,{children:"--ws-max-connections 100"})]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.em,{children:"From where"}),": by default localhost and the polkadot.js are allowed to access the RPC server, you can change this by setting ",(0,r.jsx)(s.code,{children:"--rpc-cors"}),", to allow access from everywhere you need ",(0,r.jsx)(s.code,{children:"--rpc-cors all"})]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.em,{children:"What"}),": you can limit the methods to use with ",(0,r.jsx)(s.code,{children:"--rpc-methods"}),", an easy way to set this to a safe mode is ",(0,r.jsx)(s.code,{children:"--rpc-methods Safe"})]}),"\n",(0,r.jsx)(s.h3,{id:"secure-the-ws-port",children:"Secure the ws port"}),"\n",(0,r.jsxs)(s.p,{children:['The ws port is preferably exposed from the outside as a ssl secured wss port. The "',(0,r.jsx)(s.a,{href:"https://wiki.polkadot.network/docs/maintain-wss",children:"maintain wss"}),"\" on the wiki already covers a lot of information about this, especially in relation to setting it up in a nginx configuration. This page is focussed more on a apache2 but principles are the same. The main idea is converting the non secure ws port to a secure wss port by putting it behind a ssl enabled proxy. So from outside one see's the ssl enabled apache2/nginx/other proxy server, witch redirect the request to the internal rpc node."]}),"\n",(0,r.jsx)(s.h3,{id:"using-apache2-for-proxying",children:"Using Apache2 for proxying"}),"\n",(0,r.jsxs)(s.p,{children:["Apache2 is a little heavier then nginx but also has some more tweaking posibilities. You can run it in different modes, prefork, worker or event. We chose ",(0,r.jsx)(s.a,{href:"https://httpd.apache.org/docs/2.4/mod/event.html",children:"event"})," since this seems best suited for high load enviroments. Downside is that you can't use the default php module and need to enable it via php-fm. The proxy_wstunnel module works out of the box."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"apt install apache2\na2dismod mpm_prefork\na2enmod mpm_event proxy proxy_html proxy_http proxy_wstunnel rewrite ssl\n"})}),"\n",(0,r.jsx)(s.p,{children:"If you want to enable php"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"apt install php-fpm\na2enmod proxy_fcgi setenvif\n"})}),"\n",(0,r.jsx)(s.h4,{id:"enabling-ssl-through-letsencrypt",children:"Enabling ssl through letsencrypt"}),"\n",(0,r.jsxs)(s.p,{children:["There are multiple options for getting a ssl certificate, one popular (and free) being letsencrypt. Obtaining a letsencrypt certificate can be done through for example ",(0,r.jsx)(s.a,{href:"https://certbot.eff.org/",children:"certbot"})," or ",(0,r.jsx)(s.a,{href:"https://go-acme.github.io/lego/dns/",children:"lego"})," (which has more dns provider options)."]}),"\n",(0,r.jsx)(s.h4,{id:"add-the-proxy-to-the-apache2-config",children:"Add the proxy to the apache2 config"}),"\n",(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.a,{href:"https://httpd.apache.org/docs/2.4/mod/mod_proxy_wstunnel.html",children:"mod_proxy_wstunnel"})," provides ",(0,r.jsx)(s.em,{children:"support for the tunnelling of web socket connections to a backend websockets server. The connection is automatically upgraded to a websocket connection"}),". In a ssl enabled virtualhost add:"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-apacheconf",children:"SSLProxyEngine on\nProxyRequests off\n\nProxyPass / ws://localhost:9944\nProxyPassReverse / ws://localhost:9944\n"})}),"\n",(0,r.jsx)(s.p,{children:"Older versions of mod_proxy_wstunnel do not upgrade the connection automatically and will need the following config added:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-apacheconf",children:"RewriteEngine on\nRewriteCond %{HTTP:Upgrade} websocket [NC]\nRewriteRule /(.*) ws://localhost:9944/$1 [P,L]\nRewriteRule /(.*) http://localhost:9944/$1 [P,L]\n"})}),"\n",(0,r.jsx)(s.h4,{id:"tweaking-connections",children:"Tweaking connections"}),"\n",(0,r.jsxs)(s.p,{children:["The number of connections is limited by the node itself (",(0,r.jsx)(s.code,{children:"--ws-max-connections"}),") but also by the number of threads available on the proxy server. For apache2 this can be tweaked by editing ",(0,r.jsx)(s.code,{children:"/etc/apache2/mods-enabled/mpm_event.conf"})]}),"\n",(0,r.jsx)(s.p,{children:"We are using:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-apacheconf",children:"StartServers\t\t 4\nMinSpareThreads\t\t 25\nMaxSpareThreads\t\t 75\nThreadLimit\t\t 128\nThreadsPerChild\t\t 128\nMaxRequestWorkers  \t 896\nMaxConnectionsPerChild   0\n"})}),"\n",(0,r.jsx)(s.h4,{id:"rate-limiting",children:"Rate limiting"}),"\n",(0,r.jsx)(s.p,{children:"Theoretically one client could use all connections/resources, draining the resources of the server and making it inaccessible. This can be countered by rate limiting the connections, for example by using mod_qos:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"apt install libapache2-mod-qos\na2enmod qos\n"})}),"\n",(0,r.jsxs)(s.p,{children:["And edit ",(0,r.jsx)(s.code,{children:"/etc/apache2/mods-available/qos.conf"})]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"  # allows max 50 connections from a single ip address:\n  QS_SrvMaxConnPerIP                                 50\n"})}),"\n",(0,r.jsx)(s.p,{children:"Be carefull when running behind a load balancer (for example cloudflare) because the load balancer will only use a few ip's and thus can trigger the rate limit, iso in this case it is better to use the rate limit options from the load balancer itself."}),"\n",(0,r.jsx)(s.h3,{id:"load-balancing--failover",children:"Load balancing & failover"}),"\n",(0,r.jsxs)(s.p,{children:["With multiple servers it is possible to build a load balancing or even a failover construction. A simple load balancing can be a ",(0,r.jsx)(s.a,{href:"https://en.wikipedia.org/wiki/Round-robin_DNS",children:"round robin-robin dns"})," up to a more advanced (dedicated) load balancer or a content delivery network (CDN) like cloudflare."]}),"\n",(0,r.jsx)(s.h3,{id:"stress-testing",children:"Stress testing"}),"\n",(0,r.jsx)(s.p,{children:"You can test basic usage by accessing your server through the polkadot.js UI as a custom endpoint. For example staking target display is RPC intensive and can give you an indication of performance."}),"\n",(0,r.jsxs)(s.p,{children:["There are also more dedicated stress testing solutions, we have forked the ",(0,r.jsx)(s.a,{href:"https://github.com/dwellir-public/artillery-engine-substrate",children:"Dwellir repository"})," for our testing."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash\nnvm install --lts\nnpm install -g yarn\nyarn global add artillery\nyarn global add artillery-engine-substrate\ncd /opt\ngit clone git@github.com:stakeworld/stakeworld-rpc-artillery.git\ncd /opt/stakeworld-rpc-artillery\nyarn\n./run.sh\n"})}),"\n",(0,r.jsxs)(s.p,{children:["After the ",(0,r.jsx)(s.code,{children:"run.sh"})," you can edit some variables like how many connections per second, the wss node, etc. The following is a test run for 10 seconds with 10 connections per second and maximum 20 concurrent users."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:'config:\n  target: "wss://ksm-rpc.stakeworld.io"\n  processor: "./functions.js"\n  phases:\n    - duration: 10\n      arrivalRate: 10\n      maxVusers: 20\n'})}),"\n",(0,r.jsx)(s.p,{children:"After this you get some info about the run and a report is created, which can be used for further diagnostics"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"--------------------------------\nSummary report @ 23:38:40(+0100)\n--------------------------------\n\nvusers.completed: .............................................................. 100\nvusers.created: ................................................................ 100\nvusers.created_by_name.balance: ................................................ 35\nvusers.created_by_name.complex_call: ........................................... 33\nvusers.created_by_name.headers_blocks: ......................................... 32\nvusers.failed: ................................................................. 0\nvusers.session_length:\n  min: ......................................................................... 231.7\n  max: ......................................................................... 656.1\n  median: ...................................................................... 361.5\n  p95: ......................................................................... 518.1\n  p99: ......................................................................... 645.6\nws.messages_sent: .............................................................. 163\nws.send_rate: .................................................................. 29/sec\nLog file: reports/report.json\nReport generated: reports/report.html\n"})})]})}function h(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},9735:(e,s,n)=>{n.d(s,{Z:()=>r});const r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAyAAAAEsCAMAAAAM8ycIAAABOFBMVEX///8AAACgoKD/AAAAwAAAgP/AAP8A7u7AQADIyABBaeH/wCAAgEDAgP8wYICLAABAgAD/gP9//9SlKir//wBA4NAAAAAaGhozMzNNTU1mZmZ/f3+ZmZmzs7PAwMDMzMzl5eX////wMjKQ7pCt2ObwVfDg///u3YL/tsGv7u7/1wAA/wAAZAAA/38iiyIui1cAAP8AAIsZGXAAAIAAAM2HzusA////AP8AztH/FJP/f1DwgID/RQD6gHLplnrw5oy9t2u4hgv19dyggCD/pQDugu6UANPdoN2QUEBVay+AFACAFBSAQBSAQICAYMCAYP+AgAD/gED/oED/oGD/oHD/wMD//4D//8DNt57w//Cgts3B/8HNwLB8/0Cg/yC+vr7f398/Pz+fn5+/v78fHx9fX18AnnMvLy93wofgAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAcXklEQVR4nO2dC5qkKgyFdbbhfmodoNh3/zu48vSFEgEV9fzz9bRlGUNRnCYoxKoCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADYoxfbr6aI5th5jx4PwDXwekDwlnj4jkDafvICDR68Ay7bOGtqokJ2BNJDIOB9cN3GOa9Ey+uqqmXL7uWrRtScDS+G30LKh/FaNE4S7hXr9fuyK+rsi0q+V/dsfLvqhgNUR2XPp7B7RdPVCjYe4CwAuI2JQFSrdAIZ+gAmhk6hqbuqlR0MF4w1Qjg784oPKmqHYyreT14M5qwT0z3yxO3Q/t35FHav6XGGYowH2PcAuI8xxBJcvnYC4fq32SEqphq1Fcj8VaWk0E9eKPOmHvcwKZLRgTuN2asF0gg2ddid8okBOIAapOsoRzVwJxD5uxFVp5ppW5sN27Lnr3Tv0U9eKPPO/vlXe4Yoyhm2Tjp6rz2+mx5g3wPgPrgbZ+s/4muBmLGBDnasJMZXcpBR10Yg7oVr8G4P00MLdz59HrNXHc+MkT2AzUYrANxBWCDmr/hGD8LUSN70IOML24OMeyopn7rrVoGT3KuO53w88/Q9AO5jKRD1vxgFUtnx9MYYRLVnZnqQ8YUdg4x7FIOV54KyHAA1w9HMvpq/B8B9LAXSq6tTE4E0QsZJ/dZVLDZ0OR2Xf/yHn/GFvCTWqbG52dMNp9FXsez5JG6vvMxrpGAPcO8BcB9Lgaj7G81EIOq2hLqjod6Z3QeRr1pR8yFwGvoSUXfuRd30tboP4vYMpxm2JudT2L1CHi9pxwOcBQAAAAAAAAAAAAAAAAAAAAAAAADATWCxNPgkTE2j6+QMoWq6oWl5XYse83rAZ+lruXhHzh1Va2/shoaLllUd1haAz9IKObNUrqGuum6yobArDfoeIRb4JKzupot7FstsxCRjEwQCPohckKYSbwxDj74aNxSsbmZHAvAxZESlBCI6s47NbCjYtD+BQMDn6HQ+PtNVtPW4obCvZOo/CAR8D7Nas9YZZqVc3IZCp0TTacqmAqkBeAQ5VCIH6Sq9jOw43IZ+y1zfXQlkdRJfSVb7KGaEPR5fUa6izOI+Q+mu4sxyOSKcKJurCKRAZGYMNfRwG5q+bljFWiFYQCA+okoX95EiKyLCLLbKy3YVZ3ZdrV/paoXKt9EKcwPdbWhaLsxDMCCQFE+Fu4oz+4hATvP7L+bUUUaRVjFmkZ4KdxVndl2tx7qCQJKsCm+1EEiyq7IFAsDNQCAA7FC2QBBiPcZVnBlCrDS/EMhjXMWZQSCl+QXgEBAIADuULRCEWI9xFWeGECvNLwTyGFdxZhBIaX4BOAQEAsAOZQsEIdZjXMWZIcRK8wuBPMZVnBkEUppfAA4BgQCwQ9kCQYj1GFdxZgix0vxCII9xFWcGgUw5vuQWgJvJ0VB1dveqMVkUG1GLSbq4lvuyu0Mg4HJ+ETY5GqrO7s6NQHrRVe2YzH0juztCrJe5ijO7zNHv9+8nOWyYQSA6u3vbVUogOtlob/LFbWZ3h0Be5irO7AJHP/nPcdhVukBMdnd5LimATvUVjT3vVnZ3hFjgZObKiFVIekPV2d3VucYexHYcm9ndIRBwHj5l3NWDmOzu6lzjGEQ4gUyG6wixUjwV7irO7AxHW9q4RyA2u7s6lxZAL+q+nfUgnuzuEMjLXMWZ5XXkD6pS5JEuEJfdvXICkRjJ7Gd3/zd8TvzgJ8ePuUi1J47f8fPmzO7uBNLKQTq3Y3N6dncAovgFug35fvzZ8wukF8yN0avE7O7/YkoTZYQQK4PdcbM0R+GQaqKNSFfZBMJ1qMXUGIRPbgumZHeHQB7jKs4s2tEBZaS5KnuyIgArghFVQkC1BgIBzyE03PB0HKmULRCEWI9xFWdGtiAMNwLSeGWIBYE8xlWcWdgiqIwf8SrVKwUCvkxYGWlXcElAIKBASL3G2dpQlC0QhFiPcRVn5rGg3PeLkcYrQywI5DGu4sxmFvThRkz5XikQ8BGKGG54gUDAvZCmUt2iDUXZAkGI9RhXEWa/0BzcTWUgxDJAII9xdcwscSAOgYCXku2+31VAIOAiyrm3cYSyBYIQ6zGuds1y39tAiGWAQB7jasPsnJAKAgFvIKSMwoYbXiAQcBKPG254KTu7O0Ksx7jSZmos8TO/NpXxm1hcVr67QizWi3po+ay2a9LNDkdKdncI5DGuCIMNz0D8AwIRnFWdzYgl0yzOdiRmdwflQxmGP2GwsUFyQ+1YJROZ6G2Z1GS6IzW7OygaijIerA1FnoZqnnbAm8WO1OzuCLFKdZVJGx8IsSTmeTmt6S2q8QE6idndIZACXYXv+o0COamAzxLIMAhv1YYVgNuRnN0dFAVxIG6vYt1d3CxkaaidCqQ614GYHVVydndQCq8eiO+Rp6Gq4MpldK8m0VZadvd/MZm+/92dafyk8kXYRdXf0i6cOP2fXNlxZV3EfK5/f//+jtpkyO7OGmb1oHuNyQ5JWnb3fzFFijLCGMRndzCT4XF3l9X6n+GwYbJARM+GiEr2E3W72KFIyu4O7iI9k2Ep/Ml/f7cJRN84HzThxuNuhyEluzu4nMetaNpkroxYhZQ9WREh1pWukgfiBYVYa2Xc1YNEAoEU5SpPapFCBOLrOF4qEHA6cZMMS2VPGzLkOg4E8lXeNsnwb1ccEX2HhtRQGauqjvM20ke0X4RYZ7kKK+OalbBZat0/Gl92HZGuCA2VibruWc35csp6ChDIHa52lzJNlPEvrt+4QyAhZfx5bI5AaKi9aFshJ+o2PHxwRr8gJ8R46jERlWR3NB4bUy0gNFTRmXlWTASPzekXZIHSZzxqsKE4Z8DhgdBQ6/l/l/mtEGIl2hEnpq+1cVllxDgKXanaUMd5IRYEktfsAoH8yJeo8iWHjjI7aLF/pWo/qnqlQMBREpVRLIErVblGHGsoAhED+r9L/YJjUJXxMGlU4StVZ0JoqHzkUr8VQiyqHU0bdGWUE2Llu/13Xoh1ChBIFjvKYCNi+WsJAgkHVce6jrMF0nUdi3OR5hf4edtMkSnBG+PnRlUzKA21k0sF67rOeBsEAkmCNti4u5Rx7Grj7BHHGkJD7WolEMZExslYCLFi7SgT0zO5Ot9sZkG/UhVTvhOnmvTmwBaD9Bxm8a322ArxJFcXmVkLymzDxPKdJxDBzIGpU02w5Daet6wQXxO8TnV1UDWHeqOwajcOtsncx6TuHc+W3R1IdsXx3MEGcZr6zVAEwsyGtwexydy5+a1yxXUiT3b3z4dYIW3kL12KHd0srIzs00bOC7HcQinvGKRjlUrm3prfOm91Z/WQlt392wJJ0kZs6VLsiGa72vijXMMtSyCtHoQM/cPmVSybzF0KZH5UWnb3rxK4yXF38aLJffPvAigNldd90za87rcOsMncmXrU1DDocLJIzO7+QV484NgPqoqThobUUBshbxM2G++6ZO5MTtZiteimyasn/QlCrJDJrjYipFFGiBXQRkS3UVaIJWEyb8MmWg9M5Ru1+dyNXVp29+8IhBBUlTEv8qBZQBz/4vqN8gQSQOaq7kwIpvoM9yiEtOzuH/nZUYZKnH53+WJ/9pXxd3v5gj85s7u70Qbvq7EHSczu/gHeORqX7AVVzyFbdndux+XyYlc3XrxKyu7+L6ZIUUY3hVi74/G8ri6wk2bmWtTm/fH5gOO6Wr8txDLJ3MfnpFft8jnp8dndvyiQnAvFLxVIzDXcDwgkEoRYkvcEVbtD8WKv4RKgpR7tuVBc7PfdhIOqRxCeUfVoSA2Vi75RXOz3vSGW7SyOaKO8ECt0gyN8h+MlIZYcWWTmOwL5VfNRxSKSonccRQkkqA1a5/ESgeRca3vE78OZ3/xTex48yjDsXKAauw190N1FzQJtqkl7j99H87r7GsmT1B8JqaHK5O4YgxDNflu5eBI93R1iEcKp4+7eEmJZ4nxE+32aQHaTRad6ulEg1FWxnxXICbwwxNrWxpPDq8ct4MgMBJIK5alNz7zFEdDG26WhCTdU+Wgpy5V+JYWHWL9wt6Eu8uYo37Uh1k5QtXOB6pshlsAYxE9AG5tBVdkCCc2oyuvuDQI5h+eGWMGQqnru0ljSUPxbQCDHIIRUj+S2B9SUTtkCKSfE+lGS4p5ZvlNDrEwdB0KsfDxHIMHnDNhbg+eW7zyB7I/Hzy0hBFKa36MEOo3H3t6wIKgKQG6oLN3Xk9akb04YmWnjwfL42x51QBsTaA21FTK7Q888b5mk1ZMlt82wYzK7MSV59S0hFuGu3xhSFTUHnWYim3+g37gs8nlJiNXUvUxTwn2pFTk3SaslMgVpLzqXarF6XvLqgzHV0wRCG41DIA7aZMV2+/kgLml1pbNhsVr2HjZZb2Ly6muhdB13lzGB3SmHdxeuWGgrCic/XoxAeCNFIvuKxh76gOTVv3Bew2cPN3CTIwFaD9KpA7utqSZMN/1W9ha6B7EdR2Ly6pNDLNKTYrOX8MIQK5hQYaPvQIjlII5BmqFjaLfSV6uk1ZUVgBqDCCeQyXC9JIEQny5+xiNqrhEIQRnbXQcE4qA11EZdodrSh8m/a/Px9kKO6fV2YvLqUwj3Go+OpyjJRhBUkaE21K5bXqh179jnhjSTCMxtl5W8WiaDDodU9ydNjv/528sYLfn3d3sZn/NDTV7NzO/W957rWMx4vJVKcleE05JX/yMdRTEiDTciuo6IEkZ9KIIdKag6tYjHzS5zFO2KdhWLs82Dx5sjtdZPL5gbo1dlJK8O9hnyGQNxYVUZAsmojZQiflggots4eLyDzoxA5BiET+KxlOTVqbx1MewI5VHKGHAkQLwP0qhAKmOrPl0gL7/rV30zS9X1UG8UdvJ56JcLJKpbJMxP90jjus4+Q4hFfSLmWcOdbGZvCbEqebOjbosXSMIV3KcIJJSjanbnDwJJdkUWiLoZEucj2u8xorXxEDDcuANSQzVD7m7zQekn+SVCWLnxfG0Eeg1MNzyJslcUhrtFwnCDJo6CQ6ygOHKWLsXumyFWsYnjQgOOY91GsQJJCakgkGRXZSeO2+D1IdUUhFS3UnaIteb1dzeWHAqpQHbKFsikW6RMploZHaDIECtVGwixkl1RGmon54k0YpqJIZkjAiHd3Uh9/kYBApm1fy0ItzH8K2PaV16zVwhEzWdv657XGRVC7LlCE0beMtwYb//pV7MhBkKqGyE0VDVfVy43b3jw2Hx+CSGVd8rI0/Dd/ru7TGCEIBA1dV3+581qcoLfxJUbTwqxfBeoTnJ1gd1HQyx5iM7XcPZUE9JAPBhUPVsgp7m6wO6jAhFsiK5kmHVmD0JTxgtCqhlHOhBwC5QxSKNTx1XtOWMQykD82crwXJ519/twh6NsSFexuLqH3ua+ihWeZLg/2NigqBBr1IDd4XtFEgdCrCSzE++DtFylra5TJ/POl9yGlCG1kWlN+nlWAbN592CUMTehT1KHQJLMzlwPomH+vTq7u/s9bhh82d1/vzo03Dj+UcoCF2/fQfKFKc51dndhfo8b5n1fdvctgbxjIO5f9Hd3qUAUyQKx2d0783vcUHizu/88Asm3UPzGEGtv0V+qJ4RYaWbnh1g7WD24px64DX9294VA8i4Uv0cg9PzpEMgNju4ViMnuPj43x21sZHe3AnnDYCOoDQRXTyaHQEx292Ewrq8Du43d7O4vUAYhjwJ4OBkEYrO7ywkp/WIjMbt7sSEW4cEbm10HQqwbHN0YYnWT+yOtGZKPG2nZ3f/FZOX+d2LGb5UdPaAMJY4TyhdhF1V/CXZXfVcx5YuxoWZ338OMMljDtC7chn47Lbt7UVCUgekibyP9PojuP5jomcxPOm4YkrK7lwNJGdDG+0htqC67u7qBLqekuA1DSnb3fzFFijLaXwgbO9zIWL4ouwtdxZld5ija1WOSNtDJJxDacOOa8kEgiWavFMhdkJ4Oi5DqC0AgC0LKODD9FryAsgVybYgVerKATxdlxz0IsZJdQSCVVkbo6bD57vpBIDc4eqlAzsXGS0EQUn2XTwrk78BdP2jj25QtkBNCLLoySNIoO+5BiJXs6jsCoUVTF9z1g0BucPRSgWSBqow/DDbAijcL5JgyoA3goWyBRIZYZGVM7vpd19kjxLrB0UtDrKMfKiGagkDS7SCQfGT3e0gZCKcAkecL5C84RWQST0EZ4BhlC2S3W8yrDIRY6XYIsfKRJBD6LQ16nwGBpNtBIPmI83uGMgDY4UqBJKxJhzLAPWQQSKPzmjQ2qXvHg9nd6SEW/cKtU0bmNenZzRBi3eDovhCLcS2QXnQ6qbvMA9SJ/ezuBL/HlJGe+xYCSbeDQDy0XaUEYlRi8lZ3Vg/e7O67fuOVAUB2coxB5gKp2+l7/uzuG37JN/ugDHAR2QTSyBBLtDJd9TAGsbLYyO6+9Jt1WiFCrDtcxZl9IMSqjECqvq5lll5WK6W45NWT/sQjkDMm3EIgd7iKM/uQQDhnShc2n7t+aye7O6aigweQSyCdukwlc1arPqMzY/ON7O5/fzVBGf/2s6TjBz8n/+TI7r4SiMpmbXuQjezuAYGkLdKIMkKIlcHuuNl1tX57iCUfbqseNdXV7TgG8Wd3/9sSyDKagkAe4yrO7AMC4cvs7lW7fE76Orv7SiCYIgLK5J7JiqNAoAxQNPfN5j1tkQZCrDtcxZl9IMSKpKjcvPFWhbdaCCTZVdkCAeBmIBAAdihbIAixHuMqzgwhVppfCOQxruLMIJDS/AJwCAgEgB3KFghCrMe4ijNDiJXmFwJ5jKs4MwikNL8AHAICAWCHsgWCEOsxruLMEGKl+YVAHuMqzgwCKc0vAIeAQADYoWyBIMR6jKs4M4RYU45nd4dAHuMqzuwTAmls9kQmhHotatGOb6dkdwfgZrJld69kAhMpEJWDtHYKic3uDkAJZMvuLrOZNFIgQmfqNW8fz+4+BSHWY1zFmX0ixDICYXUnZaEzyI2ZFY9kd18BgTzGVZzZlwQyNH8pkFZJo3MJFUnZ3bOWLu4jRVZEhFlslZftKs7sulq/0tXqHOrRILwyApG7mBPIZLgOgaR4KtxVnNl3BKJiqq0exJvdnVKS1T6KGWGPx1eUqyizuM9Quqs4s1yOCCfK5uo4UgS9zkBaN2MWa4U/u/tgA8AjyCQQxXgVqx+vYvmyuwPwIeYCkfdB2nHo4cvuDsBn4LojYnK78d9JX2d3BwAAAAAAAIASmY5lzjWKtIoxi/RUuKs4s+tq/UpXZ+FG93Z+MNN3H83ejteeYf6uEasnlxAOuGqEzxXJbFmffhP3ymdCsRs3qCbqGXneyySBT+VzFTbzuTtuQSqfXWdBt9FXlvqlUWQTvAo7T36cQN/wyex5eVO+WxUvYKTo+UFXvdrwiTFo1i7m9ftN3KvF2gCy3WSRAdWEc+b9UMF697gimHncBSzERgHDX7FeZ3GkcB5tUKrC2wQvw86THyfQ82Yye14182658CpgJHEzi8lW9exeJ9VMzztbqNFv4l7N1wbQ7cbddBPm/1ChyvC5opit3QUsuo0CBr9is87igM1WI49qglcxnSdvSld3k72+v7NBIwlf1UbQlV8gATO90dRhk8q+WqwNINvNNugm3vZHqEKfQCg1P3dHs1j19kEzs87iiM2GQKKa4GVMZznq0nX1ZO/w93kIAJddY8BoPOSQlepT10ODcAmrcYXYnkllX81ndtLtZht0kyFYX7cMQhX6BEIwW7ijWCwjVIqZWWdxxKbuvYOJqCZ4GdN58iZA55O9rFattj9kJH95KyJg1XuHcCEzNQYRC4H4TKrKCWRS0LArZzfboJswvvr7TKpCv0CCZgt3YYth7Lz+Gx2sdb4OUkM2vGfrthTZBC9jLV8VQo/yHVsU2ajyxi9BKzXA9NVfwFkv6r5dCMRnUlVOIOPbBFfObrZBNmHCow9CFRJ7kKXZ0h3BUUStu3UWR115QouoJngZ03nyqiRKyeNe9cdl2dxDRv4RcMBqMWP/gLOVP79JZV9teQrZzTaoJp3vuibpU22PQXbMVu5I1Xe41t06i8Ou1n86o5rgdUzmyWupitledWluJd+A0XxRPNFqs9kGnLUqTOgJJvbVYm0A3a7ytNqACfM1c8Kn8rkimHnc7VuwhlUxtS7xX8XaKZwyWncFUU3wMibz5PVlpH62V16JXvfAAaPKf+UhYCWvyPvi9YBZL9hijL5lYl8t1waQ7SpPqw2YbF37D1ehXyABM4+7fQsm1MDgcK3rF8dc1crV+lNFNcHrMDcs7QR6ex/X3sZsvTdaA0bMK5CAlbqnO9ThUWeDGV8OJ7wm4xqB0J30DbvpIgOayeakgtCn8roKmnndnVPrlS+O3rfp+Ea1RzVBAAAAAAAAAAAAAAAAAAAA8C28t4z6neU4JHzzTs5FFtdf5GNlOac+bqiQr8H1srPY1S7qrqrOfLeiXU07WDWIPXMfJ7cHT3FoAnEfdfcDrSpkLZDCKgRogUTrQ5uzxmvfEwSyY+7jbIGsi0MTiPuoux9oVSEegZRVIUB9I3p5v56AxuVcnLqWf8PU9B/5jmj7um5Yr+cR9dOZOroDqjifHs1r+b3LP4adntQ4nJXJVWq6QciFIWxprs1cGUTbiJrLo9xkJHuCkyvDFMembrECUdkK+mVZzFHqoy7PMK+Q4TB51H/79TGx19V4c4UA+Y2YZBnuu6jNOhi5Mkqt8hTDF9LImYbNdK81V7/4/GjVqOSUVbN8oB0OZKyRCWiEaJib9DkViDQb28Ngz+RRMgG+ngBrT3BuZZjiqNQtVhyqLE01fkRbFncU71dnWFSIOSpQH1OBiNlfrXsqBAzVbJPJ2O9ivsZVfidyljWTK3zcW2IjpLBHO4GoCfWtnC6rVCPM23a1wcRc7R/bA69GtaoFEe4E2/zSqmJSHLuC3gqEjdO4hy1blvEovhViuQqxMtqvj4m9rsa0CvlLrRBQqezyamv6x2qUCLcP4K3biUD4bFBau0GlOlq9ZwUiTzj86GVWLuZ2OVVGc2U2lkFuNOPyrMkJtvhJEivDFmee4mMIF8eFGMOnsmUZj9qqj7FCrED262Nir6sxpUL+JGkVAoZvpGOL74LZVQtDcKzSM8wE4vZqc/cFzY92AlGNrDWhxaRBdAtz42TdHszig/EEW+QQiD39uP5aCaTWudfsR7RlGY9ahljToys3lpFH7dfHxF7M496ICoFAcqAH6bPGWckvd9CNGhMue5BxrzPXFvOjnUCGDZkdZqsHCQvEtJzVH8wfkaOVMfHW2h6EdzrANB9x3oO0sx5k/IMxrxA3UtmtD4pAtirkj8iRCgGTy7z6e7SxRN2qb4Ate5Bx72guWRw9CqThfV9Ve2MQjWtG6ogxj6OJVsIhd84eZDkGUaNt9xFDYxBfhTiB7NbHSiApFQI55EB/I71KXCWvigzhsejMOLKpOs55tehB7N6JeWUys45HK4Fw/YbO6jRetZksXV4KxJZhbA9yyTOTTSp40SanQMYExPZKliyZ+4izq1h1U1Xr+lhWiLBH7dbHSiApFQKB5MBeVxxqW15X1+mIa7V6vJWLyLsh/J6NQdzeqXm1PFr+3wnTFORrfXb5F7Dp6+V9EGNgj5q2B3XZXx7uTrBNnqtYmuV9EDlQcx/RlcUeZT7q7AzzClH3UoS+RrxdHyuBpFUI5PEEsJB/DuoDTGC41zsD9QGmNHp6BDCgPgAAAAAAAADgFP4HZ9wWKc3JtfEAAAAASUVORK5CYII="},1151:(e,s,n)=>{n.d(s,{Z:()=>a,a:()=>i});var r=n(7294);const t={},o=r.createContext(t);function i(e){const s=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(o.Provider,{value:s},e.children)}}}]);