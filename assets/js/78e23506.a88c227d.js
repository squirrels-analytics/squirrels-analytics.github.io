"use strict";(self.webpackChunksquirrels_docs=self.webpackChunksquirrels_docs||[]).push([[1465],{4552:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>i});var s=t(4848),n=t(8453);const o={},a="SelectDataSource",c={id:"references/python/data_sources/SelectDataSource",title:"SelectDataSource",description:"The class for the database table source for single-select parameters and multi-select parameters. See [DataSource] page for more details on the common constructor arguments.",source:"@site/docs/references/python/data_sources/SelectDataSource.md",sourceDirName:"references/python/data_sources",slug:"/references/python/data_sources/SelectDataSource",permalink:"/docs/next/references/python/data_sources/SelectDataSource",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"references",previous:{title:"DataSource (abstract)",permalink:"/docs/next/references/python/data_sources/DataSource"},next:{title:"DateDataSource",permalink:"/docs/next/references/python/data_sources/DateDataSource"}},l={},i=[{value:"Constructor",id:"constructor",level:3}];function u(e){const r={a:"a",code:"code",h1:"h1",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.header,{children:(0,s.jsx)(r.h1,{id:"selectdatasource",children:"SelectDataSource"})}),"\n",(0,s.jsxs)(r.p,{children:["The class for the database table source for single-select parameters and multi-select parameters. See ",(0,s.jsx)(r.a,{href:"./DataSource",children:"DataSource"})," page for more details on the common constructor arguments."]}),"\n",(0,s.jsxs)(r.p,{children:["Can be found in the classpath ",(0,s.jsx)(r.code,{children:"squirrels.data_sources.SelectDataSource"})," or ",(0,s.jsx)(r.code,{children:"squirrels.SelectDataSource"}),"."]}),"\n",(0,s.jsx)(r.h3,{id:"constructor",children:"Constructor"}),"\n",(0,s.jsx)(r.p,{children:"Creates a SelectDataSource object."}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"Required Arguments:"})}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"table_or_query"})," (see ",(0,s.jsx)(r.a,{href:"./DataSource",children:"DataSource"}),")"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"id_col"})," (see ",(0,s.jsx)(r.a,{href:"./DataSource",children:"DataSource"}),")"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"options_col"}),": A string for the column name of the human-friendly display name of the parameter options."]}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"Optional Keyword Arguments:"})}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"order_by_col"}),': A string for the column (usually of type int) that can be used to order the parameter options. If None, then "id_col" becomes the ordering column. Default is None']}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"is_default_col"}),": A string for the column (usually of type bool or int) that flags the default parameter options. If multiple are flagged as default, then only the first one is used. If None, the first parameter option is selected. Default is None"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"custom_cols"}),": A dictionary of custom field names (of the parameter option) to column names. Default is empty dictionary"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"from_seeds"})," (see ",(0,s.jsx)(r.a,{href:"./DataSource",children:"DataSource"}),")"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"user_group_col"})," (see ",(0,s.jsx)(r.a,{href:"./DataSource",children:"DataSource"}),")"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"parent_id_col"})," (see ",(0,s.jsx)(r.a,{href:"./DataSource",children:"DataSource"}),")"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"connection_name"})," (see ",(0,s.jsx)(r.a,{href:"./DataSource",children:"DataSource"}),")"]}),"\n"]})]})}function d(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},8453:(e,r,t)=>{t.d(r,{R:()=>a,x:()=>c});var s=t(6540);const n={},o=s.createContext(n);function a(e){const r=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),s.createElement(o.Provider,{value:r},e.children)}}}]);