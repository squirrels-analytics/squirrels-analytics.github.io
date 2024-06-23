"use strict";(self.webpackChunksquirrels_docs=self.webpackChunksquirrels_docs||[]).push([[123],{2602:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>d});var n=t(5893),o=t(1151);const a={sidebar_position:2},i="Best Practices",r={id:"docs/frontend/best-practices",title:"Best Practices",description:"The API consumers can often make assumptions on how Squirrels APIs may change across versions (see Versioning Best Practices for details). Likewise, the API builders can often make certain assumptions on how API consumers would interact with the API results. The following are some of these assumptions.",source:"@site/versioned_docs/version-0.2.x/docs/frontend/best-practices.md",sourceDirName:"docs/frontend",slug:"/docs/frontend/best-practices",permalink:"/docs/docs/frontend/best-practices",draft:!1,unlisted:!1,tags:[],version:"0.2.x",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docs",previous:{title:"REST API Types",permalink:"/docs/docs/frontend/rest-api"}},c={},d=[{value:"Referencing a Dataset Column",id:"referencing-a-dataset-column",level:3},{value:"Loading Results to a Fixed Schema",id:"loading-results-to-a-fixed-schema",level:3}];function l(e){const s={a:"a",h1:"h1",h3:"h3",li:"li",p:"p",ul:"ul",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"best-practices",children:"Best Practices"}),"\n",(0,n.jsxs)(s.p,{children:["The API consumers can often make assumptions on how Squirrels APIs may change across versions (see ",(0,n.jsx)(s.a,{href:"../topics/tips/versioning",children:"Versioning Best Practices"})," for details). Likewise, the API builders can often make certain assumptions on how API consumers would interact with the API results. The following are some of these assumptions."]}),"\n",(0,n.jsx)(s.h3,{id:"referencing-a-dataset-column",children:"Referencing a Dataset Column"}),"\n",(0,n.jsx)(s.p,{children:"Whenever a column of the dataset result is referenced, it should be referenced by name rather than by position / index. Thus, when a new column is added to the dataset before an existing column, the reference to that existing column would not break."}),"\n",(0,n.jsx)(s.h3,{id:"loading-results-to-a-fixed-schema",children:"Loading Results to a Fixed Schema"}),"\n",(0,n.jsx)(s.p,{children:"Sometimes, there could be situations where the columns coming from the dataset result API are loaded into a SQL database with a fixed schema. However, the dataset result may change the columns it has based on the parameter selections provided. To maintain a robust load process, follow these rules:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"If the column exists in the SQL database schema but not the API result, load nulls to that column in the SQL database table"}),"\n",(0,n.jsx)(s.li,{children:"If the column does not exist in the SQL database schema but exists in the API result, ignore that column in the API result"}),"\n",(0,n.jsx)(s.li,{children:'Suppose that the "group by" dimension of a dataset changes based on a parameter. Since the dataset result API response provides details on which columns are dimensions, you can use this information to dynamically change which is your i-th dimension (first, second, third, etc.), and load those columns to generic column names in the SQL database like "dimension1" instead matching the actual column name of the dimension.'}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,o.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},1151:(e,s,t)=>{t.d(s,{Z:()=>r,a:()=>i});var n=t(7294);const o={},a=n.createContext(o);function i(e){const s=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),n.createElement(a.Provider,{value:s},e.children)}}}]);