"use strict";(self.webpackChunkstakeworld_io=self.webpackChunkstakeworld_io||[]).push([[705],{849:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>n,metadata:()=>r,toc:()=>c});var a=o(4848),i=o(8453);const n={id:"ledger",title:"Using a Ledger Wallet",description:"Validator resources for polkadot and kusama",slug:"/ledger",sidebar_position:8,keywords:["validator","validate","ledger","ledger wallet","polkadot","kusama"]},s=void 0,r={id:"validate/ledger",title:"Using a Ledger Wallet",description:"Validator resources for polkadot and kusama",source:"@site/docs/validate/ledger.mdx",sourceDirName:"validate",slug:"/ledger",permalink:"/docs/ledger",draft:!1,unlisted:!1,editUrl:"https://github.com/stakeworld/website/edit/master/docs/validate/ledger.mdx",tags:[],version:"current",sidebarPosition:8,frontMatter:{id:"ledger",title:"Using a Ledger Wallet",description:"Validator resources for polkadot and kusama",slug:"/ledger",sidebar_position:8,keywords:["validator","validate","ledger","ledger wallet","polkadot","kusama"]},sidebar:"tutorialSidebar",previous:{title:"Disaster managment",permalink:"/docs/disaster"},next:{title:"1000 validator resources",permalink:"/docs/1kv"}},d={},c=[{value:"On-chain identity",id:"on-chain-identity",level:2},{value:"Democracy",id:"democracy",level:2},{value:"Steps to take",id:"steps-to-take",level:2}];function l(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"If you are serious about validating and maybe want to fire up more instances in the future the best setup is a stash account on a cold (hardware/ledger) wallet which you don\u2019t have to use often, combined with a proxy account on a hot wallet with easy (password) access. The idea is you use the hot wallet more often with more risk for exposure of the keys, while your stash account with the most value on it is relatively safe."}),"\n",(0,a.jsx)(t.p,{children:"Problem with the setup using a ledger is that a lot of functions are more complicated, because the ledger app cannot execute all functions, most importantly:"}),"\n",(0,a.jsx)(t.h2,{id:"on-chain-identity",children:"On-chain identity"}),"\n",(0,a.jsx)(t.p,{children:"A ledger account cannot have an \u201con chain identity\u201d by itself. The workaround is giving a native account an identity (stakeworld.io) and specifying the ledger accounts as sub-identities. In the validator lists they show as stakeworld.io/01 , where the /01 is a sub-identity of stakeworld. The next one is stakeworld.io/02 and so on. Every identity and sub identity locks up dot/ksm (polkadot: 20 dots, which you get back after clearing the identity)."}),"\n",(0,a.jsx)(t.h2,{id:"democracy",children:"Democracy"}),"\n",(0,a.jsx)(t.p,{children:"A ledger account misses some of the democracy and council voting possibilities. Since this is a factor in the validator selection protocol and you want your validators to get elected it is wise to participate in democracy votes. The workaround here is to use a proxy. You can via ledger proxy your stash account to a native account, and with that native account cast votes in council and democracy on behalf of the ledger stash account. Every proxy also locks up a certain amount of dot/ksm.\nIf you have a proxy setup, you can also delegate democracy votes to a hot wallet or another account you trust."}),"\n",(0,a.jsx)(t.h2,{id:"steps-to-take",children:"Steps to take"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"ledger",src:o(9768).A+"",width:"478",height:"668"})}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["Go to your ",(0,a.jsx)(t.a,{href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama-rpc.polkadot.io#/accounts",children:"accounts"})]}),"\n",(0,a.jsxs)(t.li,{children:["On your hot wallet account: ",(0,a.jsx)(t.code,{children:"Set on-chain identity"})]}),"\n",(0,a.jsxs)(t.li,{children:["On your hot wallet account: ",(0,a.jsx)(t.code,{children:"Set on-chain sub-identities"})]}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"Now you have sub-identities active"}),"\n",(0,a.jsxs)(t.ol,{start:"4",children:["\n",(0,a.jsxs)(t.li,{children:["On your ledger account: ",(0,a.jsx)(t.code,{children:"Add proxy"})," account to be able to delegate democracy votes, if needed"]}),"\n",(0,a.jsxs)(t.li,{children:["On your ledger account: ",(0,a.jsx)(t.code,{children:"Delegate democracy votes"})]}),"\n"]}),"\n",(0,a.jsx)(t.admonition,{type:"tip",children:(0,a.jsx)(t.p,{children:"stakeworld uses this setup for it\u2019s validators."})})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},9768:(e,t,o)=>{o.d(t,{A:()=>a});const a=o.p+"assets/images/ledger-7dbf6e22f4e0927d369fc07cf8757a66.png"},8453:(e,t,o)=>{o.d(t,{R:()=>s,x:()=>r});var a=o(6540);const i={},n=a.createContext(i);function s(e){const t=a.useContext(n);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),a.createElement(n.Provider,{value:t},e.children)}}}]);