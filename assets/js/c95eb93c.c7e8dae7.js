"use strict";(self.webpackChunksquirrels_docs=self.webpackChunksquirrels_docs||[]).push([[9404],{3717:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var s=r(4848),n=r(8453);const o={},a="DataSource (abstract)",c={id:"references/python/data_sources/DataSource",title:"DataSource (abstract)",description:'This page contains the common arguments for the constructors of all DataSource classes. This page is provided to avoid repeated text. The "DataSource" class is actually an abstract class that other DataSource classes extend on. Do not use this class directly.',source:"@site/versioned_docs/version-0.3.x/references/python/data_sources/DataSource.md",sourceDirName:"references/python/data_sources",slug:"/references/python/data_sources/DataSource",permalink:"/docs/references/python/data_sources/DataSource",draft:!1,unlisted:!1,tags:[],version:"0.3.x",frontMatter:{},sidebar:"references",previous:{title:"TextParameterOption",permalink:"/docs/references/python/parameter_options/TextParameterOption"},next:{title:"SelectDataSource",permalink:"/docs/references/python/data_sources/SelectDataSource"}},i={},l=[{value:"Constructor",id:"constructor",level:3}];function u(e){const t={h1:"h1",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"datasource-abstract",children:"DataSource (abstract)"})}),"\n",(0,s.jsx)(t.p,{children:'This page contains the common arguments for the constructors of all DataSource classes. This page is provided to avoid repeated text. The "DataSource" class is actually an abstract class that other DataSource classes extend on. Do not use this class directly.'}),"\n",(0,s.jsx)(t.p,{children:"For all DataSource classes, it is only necessary to use the constructor."}),"\n",(0,s.jsx)(t.h3,{id:"constructor",children:"Constructor"}),"\n",(0,s.jsx)(t.p,{children:"The following are common arguments for the constructors of all DataSource classes."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Required Arguments:"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"table_or_query"}),': A string for the table name or SQL query that represents the source. The string is treated as a SQL query if it starts with "select " (case-insensitive).']}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Required or Optional Based on Parameter:"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"id_col"}),": A string for the column name of the ID of the parameter options. This is required for select parameter, and optional for non-select parameters where the default value is None."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Optional Keyword Arguments:"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"from_seeds"}),': A boolean for whether the datasource is derived from seeds (CSV files in the "seeds" folder of the project). When True, the file stems of the CSV files can be treated as table names for ',(0,s.jsx)(t.strong,{children:"table_or_query"})," argument. Default is False"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"user_group_col"}),": A string for the column name of the groups of users the parameter options apply to. Default is None","\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:'If multiple rows have the same value for "id_col" but different value for "user_group_col", then the ID is applicable to multiple user groups'}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"parent_id_col"}),": A string for the column name of the parameter option IDs of the parent parameter that the parameter options of this parameter apply to. Default is None","\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:'If multiple rows have the same value for "id_col" but different value for "parent_id_col", then the ID of this parameter option has multiple parent IDs'}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"connection_name"}),': A string for the connection name to the database that the datasource should come from. If None, uses the default connection name (often "default") configured in settings. Default is None']}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},8453:(e,t,r)=>{r.d(t,{R:()=>a,x:()=>c});var s=r(6540);const n={},o=s.createContext(n);function a(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);