"use strict";(self.webpackChunksquirrels_docs=self.webpackChunksquirrels_docs||[]).push([[7769],{2881:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var s=n(4848),i=n(8453);const r={},o="Versioning Best Practices",a={id:"docs/topics/tips/versioning",title:"Versioning Best Practices",description:"In the [squirrels.yml] file, the major_version under project_variables is required, and defines the version of the project. The following are some best practices around project versioning.",source:"@site/docs/docs/topics/tips/versioning.md",sourceDirName:"docs/topics/tips",slug:"/docs/topics/tips/versioning",permalink:"/docs/next/docs/topics/tips/versioning",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Modify Dates with dateutils",permalink:"/docs/next/docs/topics/dateutils"},next:{title:"Deploy with Docker",permalink:"/docs/next/docs/topics/tips/deployment"}},c={},d=[];function l(e){const t={a:"a",admonition:"admonition",h1:"h1",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"versioning-best-practices",children:"Versioning Best Practices"})}),"\n",(0,s.jsxs)(t.p,{children:["In the ",(0,s.jsx)(t.a,{href:"../project-file",children:"squirrels.yml"})," file, the ",(0,s.jsx)(t.strong,{children:"major_version"})," under ",(0,s.jsx)(t.strong,{children:"project_variables"})," is required, and defines the version of the project. The following are some best practices around project versioning."]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Start your first major version at 1."}),"\n",(0,s.jsxs)(t.li,{children:["Only increment the major version if it causes breaking changes for clients consuming the data APIs. Understanding how the APIs are used plays a role in knowing what's a breaking change. The following are some examples of breaking changes:","\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"A column is deleted from a dataset for any given set of parameter selections."}),"\n",(0,s.jsx)(t.li,{children:'A parameter is removed for a dataset if the parameters are not retrieved dynamically with the "parameters API".'}),"\n",(0,s.jsx)(t.li,{children:'A dataset is removed or renamed if datasets are not retrieved dynamically with the "dataset catalog API".'}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["Most other changes that are NOT breaking changes DO NOT need to increment the major version. These include:","\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"A column is added to the dataset"}),"\n",(0,s.jsx)(t.li,{children:"A parameter is added to a dataset"}),"\n",(0,s.jsx)(t.li,{children:"A new dataset is added to the project"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsx)(t.p,{children:'In the future, we intend to create a Cloud platform to host Squirrels APIs with abilities to create and maintain a "stack" of minor versions for each project\'s major version.'})})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>a});var s=n(6540);const i={},r=s.createContext(i);function o(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);