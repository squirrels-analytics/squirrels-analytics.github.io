"use strict";(self.webpackChunksquirrels_docs=self.webpackChunksquirrels_docs||[]).push([[4147],{6003:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>t,metadata:()=>i,toc:()=>d});var r=n(4848),c=n(8453);const t={},o="sqrl deps",i={id:"references/cli/deps",title:"sqrl deps",description:"The sqrl deps command loads all the packages specified in the packages section of squirrels.yml.",source:"@site/docs/references/cli/deps.md",sourceDirName:"references/cli",slug:"/references/cli/deps",permalink:"/docs/next/references/cli/deps",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"references",previous:{title:"sqrl init",permalink:"/docs/next/references/cli/init"},next:{title:"sqrl compile",permalink:"/docs/next/references/cli/compile"}},l={},d=[];function a(e){const s={code:"code",h1:"h1",header:"header",p:"p",pre:"pre",strong:"strong",...(0,c.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.header,{children:(0,r.jsx)(s.h1,{id:"sqrl-deps",children:"sqrl deps"})}),"\n",(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.code,{children:"sqrl deps"})," command loads all the packages specified in the ",(0,r.jsx)(s.strong,{children:"packages"})," section of ",(0,r.jsx)(s.code,{children:"squirrels.yml"}),"."]}),"\n",(0,r.jsxs)(s.p,{children:["For instance, suppose we have the following in the ",(0,r.jsx)(s.code,{children:"squirrels.yml"})," file."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-yaml",children:"packages:\n    - git: https://github.com/org/myrepo.git\n      revision: v0.1.0       ## tag or branch or commit hash\n      directory: custom_name ## optional if same name as git repo\n"})}),"\n",(0,r.jsxs)(s.p,{children:["Running ",(0,r.jsx)(s.code,{children:"sqrl deps"})," will create a new ",(0,r.jsx)(s.code,{children:"sqrl_packages/"})," folder with subfolder ",(0,r.jsx)(s.code,{children:"custom_name/"}),". Inside ",(0,r.jsx)(s.code,{children:"custom_name/"})," is the contents of the ",(0,r.jsx)(s.code,{children:"https://github.com/org/myrepo.git"})," repo at the ",(0,r.jsx)(s.code,{children:"v0.1.0"})," git tag."]}),"\n",(0,r.jsxs)(s.p,{children:["Then, you can import python modules or Jinja macros defined in the ",(0,r.jsx)(s.code,{children:"sqrl_packages/"})," folder."]}),"\n",(0,r.jsxs)(s.p,{children:["Note that the ",(0,r.jsx)(s.code,{children:"sqrl_packages/"})," folder is in the ",(0,r.jsx)(s.code,{children:".gitignore"})," file."]})]})}function p(e={}){const{wrapper:s}={...(0,c.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>o,x:()=>i});var r=n(6540);const c={},t=r.createContext(c);function o(e){const s=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:o(e.components),r.createElement(t.Provider,{value:s},e.children)}}}]);