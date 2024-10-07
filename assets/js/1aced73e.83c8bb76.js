"use strict";(self.webpackChunksquirrels_docs=self.webpackChunksquirrels_docs||[]).push([[4546],{1665:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=t(74848),r=t(28453);const o={},a="Seeds",i={id:"docs/topics/seeds",title:"Seeds",description:"Seeds are CSV files for lookup tables contained in the seeds folder. This allows reference data to be version controlled together with the Squirrels project. These lookup tables can serve as datasources for your parameter options or dimension tables that models can refer to.",source:"@site/versioned_docs/version-0.3.x/docs/topics/seeds.md",sourceDirName:"docs/topics",slug:"/docs/topics/seeds",permalink:"/docs/0.3.x/docs/topics/seeds",draft:!1,unlisted:!1,tags:[],version:"0.3.x",frontMatter:{},sidebar:"docs",previous:{title:"SQL Placeholders",permalink:"/docs/0.3.x/docs/topics/placeholders"},next:{title:"Authentication",permalink:"/docs/0.3.x/docs/topics/auth"}},d={},c=[{value:"Reference Seeds in Parameters",id:"reference-seeds-in-parameters",level:2},{value:"Reference Seeds in Models",id:"reference-seeds-in-models",level:2},{value:"Project Settings for Seeds",id:"project-settings-for-seeds",level:2}];function l(e){const s={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.header,{children:(0,n.jsx)(s.h1,{id:"seeds",children:"Seeds"})}),"\n",(0,n.jsxs)(s.p,{children:["Seeds are CSV files for lookup tables contained in the ",(0,n.jsx)(s.code,{children:"seeds"})," folder. This allows reference data to be version controlled together with the Squirrels project. These lookup tables can serve as datasources for your parameter options or dimension tables that models can refer to."]}),"\n",(0,n.jsxs)(s.p,{children:["To serve as an example for the rest of this guide, suppose we have a CSV file in the ",(0,n.jsx)(s.code,{children:"seeds"})," folder named ",(0,n.jsx)(s.code,{children:"seed_categories.csv"})," with the following contents to represent expense categories:"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-csv",children:'category_id,category\n0,"Food"\n1,"Bills"\n2,"Shopping"\n3,"Transportation"\n4,"Entertainment"\n'})}),"\n",(0,n.jsx)(s.h2,{id:"reference-seeds-in-parameters",children:"Reference Seeds in Parameters"}),"\n",(0,n.jsxs)(s.p,{children:["The constructors for every derived class of DataSource contains an optional argument called ",(0,n.jsx)(s.code,{children:"from_seeds"}),' which is default to False. To make the DataSource object refer to a seed, set the first argument of the constructor to the name of the CSV file (without the ".csv" extension), and set ',(0,n.jsx)(s.code,{children:"from_seeds"})," to True."]}),"\n",(0,n.jsx)(s.admonition,{type:"note",children:(0,n.jsxs)(s.p,{children:["When the ",(0,n.jsx)(s.code,{children:"from_seeds"})," argument is True, the ",(0,n.jsx)(s.code,{children:"connection_name"})," argument is ignored."]})}),"\n",(0,n.jsxs)(s.p,{children:["For example, creating a single select parameter by taking the options from ",(0,n.jsx)(s.code,{children:"seed_categories.csv"})," would look like this:"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-python",children:'category_ds = sr.SelectDataSource("seed_categories", "category_id", "category", from_seeds=True)\nsr.MultiSelectParameter.CreateFromSource(\n    "category", "Category Filter", category_ds, description="The expense categories to filter by"\n)\n'})}),"\n",(0,n.jsx)(s.p,{children:"For more advanced use cases, you can also use a SQL query for the first argument of the DataSource constructor. For example:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-python",children:'category_ds = sr.SelectDataSource("SELECT * FROM seed_categories WHERE category_id <> 4", "category_id", "category", from_seeds=True)\n'})}),"\n",(0,n.jsxs)(s.p,{children:["The SQL syntax here is either sqlite or duckdb depending on the ",(0,n.jsx)(s.a,{href:"./settings",children:"Project Settings"})," for ",(0,n.jsx)(s.strong,{children:"in_memory_database"}),"."]}),"\n",(0,n.jsx)(s.h2,{id:"reference-seeds-in-models",children:"Reference Seeds in Models"}),"\n",(0,n.jsxs)(s.p,{children:["Seeds can be referenced by federate models using the ",(0,n.jsx)(s.strong,{children:"ref"})," function, the same way as using the ",(0,n.jsx)(s.strong,{children:"ref"})," function to specify dependencies on other models."]}),"\n",(0,n.jsxs)(s.p,{children:["The following is a sample SQL model that refers to the ",(0,n.jsx)(s.code,{children:"seed_categories.csv"})," file."]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sql",children:'SELECT a.expense_id, a.amount, lu.category\nFROM {{ ref("expenses") }} AS a\nLEFT JOIN {{ ref("seed_categories") }} AS lu\n    ON a.category_id = lu.category_id\n'})}),"\n",(0,n.jsx)(s.admonition,{type:"note",children:(0,n.jsx)(s.p,{children:'For Python models, the seed should be included in the list returned by the "dependencies" function to specify that the seed is a dependency to the model at compile time.'})}),"\n",(0,n.jsx)(s.p,{children:'Just like setting a model as the target model for a dataset (either setting the name of the dataset the same as the model or by defining the "model" field for the dataset), seeds can also be set as the "target model" for datasets. Doing so would mean that the dataset is static data instead of a query.'}),"\n",(0,n.jsx)(s.h2,{id:"project-settings-for-seeds",children:"Project Settings for Seeds"}),"\n",(0,n.jsx)(s.p,{children:"Setting are available to:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"decide whether to infer the schema of the seed or treat all columns as seeds"}),"\n",(0,n.jsx)(s.li,{children:"provide a list of values that represent NA values in the CSV files"}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["For more information, see the ",(0,n.jsx)(s.a,{href:"./settings",children:"Project Settings"})," page for ",(0,n.jsx)(s.strong,{children:"seeds.infer_schema"})," and ",(0,n.jsx)(s.strong,{children:"seeds.na_values"}),"."]})]})}function h(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},28453:(e,s,t)=>{t.d(s,{R:()=>a,x:()=>i});var n=t(96540);const r={},o=n.createContext(r);function a(e){const s=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),n.createElement(o.Provider,{value:s},e.children)}}}]);