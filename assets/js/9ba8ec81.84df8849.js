"use strict";(self.webpackChunkstakeworld_io=self.webpackChunkstakeworld_io||[]).push([[88],{3799:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>d});const a=JSON.parse('{"id":"monitor","title":"Monitoring","description":"Monitoring a validator node","source":"@site/docs/monitor.mdx","sourceDirName":".","slug":"/monitor","permalink":"/docs/monitor","draft":false,"unlisted":false,"editUrl":"https://github.com/stakeworld/website/edit/master/docs/monitor.mdx","tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"id":"monitor","title":"Monitoring","description":"Monitoring a validator node","slug":"/monitor","sidebar_position":6,"keywords":["validator setup","monitor","grafana","prometheus","loki","alertmanager","polkadot","kusama"]},"sidebar":"tutorialSidebar","previous":{"title":"Rpc servers","permalink":"/docs/rpc"},"next":{"title":"Disaster managment","permalink":"/docs/disaster"}}');var s=t(4848),r=t(8453);const o={id:"monitor",title:"Monitoring",description:"Monitoring a validator node",slug:"/monitor",sidebar_position:6,keywords:["validator setup","monitor","grafana","prometheus","loki","alertmanager","polkadot","kusama"]},i=void 0,l={},d=[{value:"Setting up grafana",id:"setting-up-grafana",level:2},{value:"Prometheus",id:"prometheus",level:3}];function c(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"setting-up-grafana",children:"Setting up grafana"}),"\n",(0,s.jsx)(n.p,{children:"The wiki uses binaries but there is a apt repository available. To install the latest grafana server"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'sudo apt-get install -y apt-transport-https\nsudo apt-get install -y software-properties-common wget\nwget -q -O /usr/share/keyrings/grafana.key https://packages.grafana.com/gpg.key\necho "deb [signed-by=/usr/share/keyrings/grafana.key] https://packages.grafana.com/enterprise/deb stable main" | sudo tee -a /etc/apt/sources.list.d/grafana.list\nsudo apt-get update\nsudo apt-get install grafana\nsudo systemctl daemon-reload\nsudo systemctl start grafana-server\nsudo systemctl status grafana-server\nsudo systemctl enable grafana-server.service\n'})}),"\n",(0,s.jsx)(n.p,{children:"If you are running behind a proxy adjust grafana config:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"vi /etc/grafana/grafana.ini\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"[server]\ndomain = <domain>\nroot_url = %(protocol)s://%(domain)s:%(http_port)s/grafana/\nserve_from_sub_path = true\n"})}),"\n",(0,s.jsx)(n.h3,{id:"prometheus",children:"Prometheus"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:t(4854).A+"",children:"Example prometheus scrape config"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'global:\n  scrape_interval: 60s\n  evaluation_interval: 60s\n\nrule_files:\n  - "rules.yml"\n\nalerting:\n  alertmanagers:\n    - static_configs:\n        - targets:\n            - localhost:9093\n\nscrape_configs:\n  - job_name: "prometheus"\n    static_configs:\n      - targets: ["<host>:9090"]\n  - job_name: \'node_exporter\'\n    scrape_interval: 5s\n    static_configs:\n      - targets: [\'<host>:<port>\']\n        labels:\n           name: "<host>"\n      - targets: [\'<host2>:<port2>\']\n        labels:\n           name: "<host2>"\n  - job_name: "validators"\n    scrape_interval: 5s\n    static_configs:\n      - targets: ["<host>:<port>"]\n        labels:\n           name: "<nodename>"\n           host: "<host>"\n      - targets: ["<host2>:<port2>"]\n        labels:\n           name: "<nodename2>"\n           host: "<host2>"\n'})})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},4854:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/files/prometheus-dcd3a1e6158f52de49102b062c90d018.yml"},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>i});var a=t(6540);const s={},r=a.createContext(s);function o(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);