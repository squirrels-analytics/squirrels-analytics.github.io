"use strict";(self.webpackChunksquirrels_docs=self.webpackChunksquirrels_docs||[]).push([[2672],{7617:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>n,metadata:()=>c,toc:()=>i});var s=r(5893),o=r(1151);const n={},a="MultiSelectDataSource",c={id:"references/python/data_sources/MultiSelectDataSource",title:"MultiSelectDataSource",description:"The class for the database table source for a multi-select parameter. See [DataSource] page for more details on the common constructor arguments.",source:"@site/docs/references/python/data_sources/MultiSelectDataSource.md",sourceDirName:"references/python/data_sources",slug:"/references/python/data_sources/MultiSelectDataSource",permalink:"/docs/references/python/data_sources/MultiSelectDataSource",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"references",previous:{title:"SingleSelectDataSource",permalink:"/docs/references/python/data_sources/SingleSelectDataSource"},next:{title:"DateDataSource",permalink:"/docs/references/python/data_sources/DateDataSource"}},l={},i=[{value:"Constructor",id:"constructor",level:3}];function u(e){const t={a:"a",code:"code",h1:"h1",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"multiselectdatasource",children:"MultiSelectDataSource"}),"\n",(0,s.jsxs)(t.p,{children:["The class for the database table source for a multi-select parameter. See ",(0,s.jsx)(t.a,{href:"./DataSource",children:"DataSource"})," page for more details on the common constructor arguments."]}),"\n",(0,s.jsxs)(t.p,{children:["Can be found in the classpath ",(0,s.jsx)(t.code,{children:"squirrels.data_sources.MultiSelectDataSource"})," or ",(0,s.jsx)(t.code,{children:"squirrels.MultiSelectDataSource"}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"constructor",children:"Constructor"}),"\n",(0,s.jsx)(t.p,{children:"Creates a MultiSelectDataSource object."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Required Arguments:"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"table_or_query"})," (see ",(0,s.jsx)(t.a,{href:"./DataSource",children:"DataSource"}),")"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"id_col"})," (see ",(0,s.jsx)(t.a,{href:"./DataSource",children:"DataSource"}),")"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"options_col"}),": A string for the column name of the human-friendly display name of the parameter options."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Optional Keyword Arguments:"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"order_by_col"}),': A string for the column (usually of type int) that can be used to order the parameter options. If None, then "id_col" becomes the ordering column. Default is None']}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"is_default_col"}),": A string for the column (usually of type bool or int) that flags the default parameter options. If multiple are flagged as default, then only the first one is used. If None, the first parameter option is selected. Default is None"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"custom_cols"}),": A dictionary of custom field names (of the parameter option) to column names. Default is empty dictionary"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"show_select_all"}),": A boolean for whether this parameter should have a checkbox/button to automatically select all options. Default is true"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"is_dropdown"}),": A boolean for whether this parameter should show as a dropdown (true) or listbox (false). Default is true"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"order_matters"}),": A boolean for whether the ordering of the selection matters. Default is false"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"none_is_all"}),": A boolean for whether applying no selection is equivalent to selecting all. Default is true"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"user_group_col"})," (see ",(0,s.jsx)(t.a,{href:"./DataSource",children:"DataSource"}),")"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"parent_id_col"})," (see ",(0,s.jsx)(t.a,{href:"./DataSource",children:"DataSource"}),")"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"connection_name"})," (see ",(0,s.jsx)(t.a,{href:"./DataSource",children:"DataSource"}),")"]}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},1151:(e,t,r)=>{r.d(t,{Z:()=>c,a:()=>a});var s=r(7294);const o={},n=s.createContext(o);function a(e){const t=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),s.createElement(n.Provider,{value:t},e.children)}}}]);