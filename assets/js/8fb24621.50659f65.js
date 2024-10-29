"use strict";(self.webpackChunkstakeworld_io=self.webpackChunkstakeworld_io||[]).push([[920],{8031:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var t=a(4848),o=a(8453);const r={id:"monitor",title:"Monitoring a validator node",description:"Monitoring a validator node",slug:"/monitor",sidebar_position:3,keywords:["validator setup","monitor","grafana","prometheus","loki","alertmanager","polkadot","kusama"]},s=void 0,i={id:"validate/monitor",title:"Monitoring a validator node",description:"Monitoring a validator node",source:"@site/docs/validate/monitor.mdx",sourceDirName:"validate",slug:"/monitor",permalink:"/docs/monitor",draft:!1,unlisted:!1,editUrl:"https://github.com/stakeworld/website/edit/master/docs/validate/monitor.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"monitor",title:"Monitoring a validator node",description:"Monitoring a validator node",slug:"/monitor",sidebar_position:3,keywords:["validator setup","monitor","grafana","prometheus","loki","alertmanager","polkadot","kusama"]},sidebar:"tutorialSidebar",previous:{title:"Setting up a validator node",permalink:"/docs/validate"},next:{title:"Disaster managment",permalink:"/docs/disaster"}},d={},l=[{value:"Monitoring",id:"monitoring",level:2},{value:"Setting up grafana",id:"setting-up-grafana",level:3},{value:"Prometheus",id:"prometheus",level:3}];function c(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"monitoring",children:"Monitoring"}),"\n",(0,t.jsxs)(n.p,{children:["The monitoring wiki seems outdated; especially the described grafana templates don\u2019t work. There is a project ongoing for updated templates. We made our own template which you can find here: ",(0,t.jsx)(n.a,{href:"https://grafana.com/grafana/dashboards/16421",children:"https://grafana.com/grafana/dashboards/16421"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"The monitoring setup exists of:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"a monitoring instance which uses grafana, loki, node-exporter and alertmanager"}),"\n",(0,t.jsx)(n.li,{children:"validator nodes with promtail and node-exporter from which the data, including the build-in prometheus endpoint in polkadot/kusama is send to the monitoring node."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Grafana",src:a(2219).A+"",width:"1844",height:"931"})}),"\n",(0,t.jsx)(n.h3,{id:"setting-up-grafana",children:"Setting up grafana"}),"\n",(0,t.jsx)(n.p,{children:"The wiki uses binaries but there is a apt repository available. To install the latest grafana server"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'sudo apt-get install -y apt-transport-https\nsudo apt-get install -y software-properties-common wget\nwget -q -O /usr/share/keyrings/grafana.key https://packages.grafana.com/gpg.key\necho "deb [signed-by=/usr/share/keyrings/grafana.key] https://packages.grafana.com/enterprise/deb stable main" | sudo tee -a /etc/apt/sources.list.d/grafana.list\nsudo apt-get update\nsudo apt-get install grafana\nsudo systemctl daemon-reload\nsudo systemctl start grafana-server\nsudo systemctl status grafana-server\nsudo systemctl enable grafana-server.service\n'})}),"\n",(0,t.jsx)(n.p,{children:"If you are running behind a proxy adjust grafana config:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"vi /etc/grafana/grafana.ini\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"[server]\ndomain = <domain>\nroot_url = %(protocol)s://%(domain)s:%(http_port)s/grafana/\nserve_from_sub_path = true\n"})}),"\n",(0,t.jsx)(n.h3,{id:"prometheus",children:"Prometheus"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:a(4854).A+"",children:"Example prometheus scrape config"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'global:\n  scrape_interval: 60s\n  evaluation_interval: 60s\n\nrule_files:\n  - "rules.yml"\n\nalerting:\n  alertmanagers:\n    - static_configs:\n        - targets:\n            - localhost:9093\n\nscrape_configs:\n  - job_name: "prometheus"\n    static_configs:\n      - targets: ["<host>:9090"]\n  - job_name: \'node_exporter\'\n    scrape_interval: 5s\n    static_configs:\n      - targets: [\'<host>:<port>\']\n        labels:\n           name: "<host>"\n      - targets: [\'<host2>:<port2>\']\n        labels:\n           name: "<host2>"\n  - job_name: "validators"\n    scrape_interval: 5s\n    static_configs:\n      - targets: ["<host>:<port>"]\n        labels:\n           name: "<nodename>"\n           host: "<host>"\n      - targets: ["<host2>:<port2>"]\n        labels:\n           name: "<nodename2>"\n           host: "<host2>"\n'})})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},4854:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/files/prometheus-dcd3a1e6158f52de49102b062c90d018.yml"},2219:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/grafana-9b41dd7209aa75d3c8c32914fd8510ef.png"},8453:(e,n,a)=>{a.d(n,{R:()=>s,x:()=>i});var t=a(6540);const o={},r=t.createContext(o);function s(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);