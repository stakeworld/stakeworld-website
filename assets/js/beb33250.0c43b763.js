"use strict";(self.webpackChunkstakeworld_io=self.webpackChunkstakeworld_io||[]).push([[285],{4471:(e,s,o)=>{o.r(s),o.d(s,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"tools","title":"Linux tips","description":"Handy commands and tools managiging a validator/server.","source":"@site/docs/tools.mdx","sourceDirName":".","slug":"/tools","permalink":"/docs/tools","draft":false,"unlisted":false,"editUrl":"https://github.com/stakeworld/website/edit/master/docs/tools.mdx","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"id":"tools","title":"Linux tips","description":"Handy commands and tools managiging a validator/server.","slug":"/tools","sidebar_position":4,"keywords":["validator setup","validator","validate","polkadot","kusama","tools"]},"sidebar":"tutorialSidebar","previous":{"title":"RPC server","permalink":"/docs/rpc"},"next":{"title":"Validate","permalink":"/docs/category/validate"}}');var n=o(4848),a=o(8453);const r={id:"tools",title:"Linux tips",description:"Handy commands and tools managiging a validator/server.",slug:"/tools",sidebar_position:4,keywords:["validator setup","validator","validate","polkadot","kusama","tools"]},i=void 0,c={},l=[{value:"check if ports are open",id:"check-if-ports-are-open",level:2},{value:"see cpu frequencies",id:"see-cpu-frequencies",level:2},{value:"get more disk space by limiting reserved space for root",id:"get-more-disk-space-by-limiting-reserved-space-for-root",level:2},{value:"get disk space information",id:"get-disk-space-information",level:2},{value:"rotatekeys",id:"rotatekeys",level:2},{value:"check session keys",id:"check-session-keys",level:2},{value:"see number of processes at a certain port",id:"see-number-of-processes-at-a-certain-port",level:2}];function d(e){const s={code:"code",h2:"h2",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.p,{children:"Example ports and hosts used, change to your own setup."}),"\n",(0,n.jsx)(s.h2,{id:"check-if-ports-are-open",children:"check if ports are open"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"nc -vz 1.2.3.4 30333\n"})}),"\n",(0,n.jsx)(s.h2,{id:"see-cpu-frequencies",children:"see cpu frequencies"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"lscpu --all --extended\n"})}),"\n",(0,n.jsx)(s.h2,{id:"get-more-disk-space-by-limiting-reserved-space-for-root",children:"get more disk space by limiting reserved space for root"}),"\n",(0,n.jsx)(s.p,{children:"Default is 5% which is 50GB on a 1000 GB system, 0.1 (1GB) is more suitable."}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"tune2fs -m0.1 /dev/<disk>\n"})}),"\n",(0,n.jsx)(s.h2,{id:"get-disk-space-information",children:"get disk space information"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"du -sh /home/polkadot/*\ndf -h\n"})}),"\n",(0,n.jsx)(s.h2,{id:"rotatekeys",children:"rotatekeys"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:'curl -H "Content-Type: application/json" -d \'{"id":1, "jsonrpc":"2.0", "method": "author_rotateKeys", "params":[]}\' http://localhost:9944 > session.key\n'})}),"\n",(0,n.jsx)(s.h2,{id:"check-session-keys",children:"check session keys"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:'curl -H "Content-Type: application/json" -d \'{"id":1, "jsonrpc":"2.0", "method": "author_hasSessionKeys", "params":["<session key 0x.....>"]}\' http://localhost:9944\n'})}),"\n",(0,n.jsx)(s.h2,{id:"see-number-of-processes-at-a-certain-port",children:"see number of processes at a certain port"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"netstat -tn src :30333 | wc -l\n"})})]})}function p(e={}){const{wrapper:s}={...(0,a.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},8453:(e,s,o)=>{o.d(s,{R:()=>r,x:()=>i});var t=o(6540);const n={},a=t.createContext(n);function r(e){const s=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),t.createElement(a.Provider,{value:s},e.children)}}}]);