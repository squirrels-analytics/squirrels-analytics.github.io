"use strict";(self.webpackChunksquirrels_docs=self.webpackChunksquirrels_docs||[]).push([[541],{37261:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var s=a(74848),n=a(28453);const r={slug:"problems-solved",title:"Squirrels - What Problems Does It Solve?",authors:"thuang",tags:["squirrels"]},o=void 0,i={permalink:"/blog/problems-solved",source:"@site/blog/2024-09-07-problems-solved.md",title:"Squirrels - What Problems Does It Solve?",description:"Squirrels is a REST API framework for data analytics. APIs built with this framework return datasets, dashboards, or parameters for datasets/dashboards. APIs for authentication, data catalog, and testing UI are also included.",date:"2024-09-07T00:00:00.000Z",tags:[{inline:!0,label:"squirrels",permalink:"/blog/tags/squirrels"}],readingTime:4.09,hasTruncateMarker:!0,authors:[{name:"Tim Huang",title:"Co-Founder of Squirrels Analytics",url:"https://github.com/ty2huang",imageURL:"https://github.com/ty2huang.png",key:"thuang",page:null}],frontMatter:{slug:"problems-solved",title:"Squirrels - What Problems Does It Solve?",authors:"thuang",tags:["squirrels"]},unlisted:!1,nextItem:{title:"Welcome to Squirrels",permalink:"/blog/welcome"}},l={authorsImageUrls:[void 0]},d=[{value:"Problems Solved",id:"problems-solved",level:2},{value:"Competition",id:"competition",level:2}];function h(e){const t={a:"a",h2:"h2",li:"li",ol:"ol",p:"p",ul:"ul",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"Squirrels is a REST API framework for data analytics. APIs built with this framework return datasets, dashboards, or parameters for datasets/dashboards. APIs for authentication, data catalog, and testing UI are also included."}),"\n",(0,s.jsx)(t.h2,{id:"problems-solved",children:"Problems Solved"}),"\n",(0,s.jsx)(t.p,{children:"The following are details on the problems that Squirrels is meant to solve:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["Embedded Analytics","\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Today, data professions may feel comfortable creating data analytics dashboards in BI tools like Tableau, Looker, and PowerBI. However, to embed data analytics into your own applications with the same \u201clook and feel\u201d is not possible to do with these popular BI tools"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["Data Analytics Without Vendor Lock-in","\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Working with Squirrels is easy. You just need to install Python, run \u201cpip install squirrels\u201d, run \u201csqrl init\u201d to create a working project, and run \u201csqrl run\u201d to activate the API server. From here, you can run the API server in a Docker Container, and host it on your own cloud platform, all for free!"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["Aligned Skillsets Across Data Analytics Responsibilities","\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Today, dbt has become popular as the go-to tool for offline data transformation pipelines because it lets analytics engineers use YAML, SQL (templated with Jinja), and sometimes Python to produce production-grade data pipelines. It gained popularity largely because of how ubiquitous SQL and Python skills are among data professionals. After creating cleaned/processed tables with dbt, these tables may be queried using tools like Tableau, Looker, PowerBI, Excel, etc. Tableau uses VizQL, Looker uses LookML, PowerBI uses DAX, and Excel uses its own syntax for Excel formulas. This means if an analytics engineer works with dbt and Tableau in one company, and then switched jobs to work with dbt and Looker instead, the engineer would need to learn a new query language for Looker. On the other hand, Squirrels lets you write your dynamic real-time queries with YAML, SQL (templated with Jinja), and sometimes Python, which is similar to dbt! So if that engineer switched into a job that uses dbt and Squirrels, he/she would already be an expert in both!"}),"\n",(0,s.jsx)(t.li,{children:"Analogously, NodeJS became popular because it allowed full-stack web developers to use the same language for both frontend and backend. This is similar to how dbt and Squirrels allow data professions to use the same language between offline data pipelines and dynamic real-time queries"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"competition",children:"Competition"}),"\n",(0,s.jsxs)(t.p,{children:["Classifying other products/companies as \u201ccompetition\u201d depends on how broad of a use-case is considered. Simply considering products that assist with data analytics, then there are hundreds or thousands. If considering only products that are also API frameworks for data analytics in a git controllable project, ",(0,s.jsx)(t.a,{href:"http://cube.dev",children:"Cube"})," appears to be the only one that is well-known. However, looking at the three problems above, Cube does not solve the third. If considering products that also attempt to solve the three problems above, the following products have recently been introduced to the market, but neither have made a name for themselves yet."]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://tools.latitude.so/",children:"Latitude"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://vulcansql.com/",children:"VulcanSQL"})}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"However, there are a few features not available with one or more of these tools, but are available with Squirrels:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Compatibility with Windows","\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Squirrels and VulcanSQL are compatible with all operating systems including Windows"}),"\n",(0,s.jsx)(t.li,{children:"Latitude is not compatible with Windows natively, but can be used on Windows with WSL"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["Widget Parameters","\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Squirrels lets you define parameters as single-select, multi-select, date / date range, number / number range, or text parameters. It\u2019s even possible get parameter options from a database or have cascading effects between options"}),"\n",(0,s.jsx)(t.li,{children:"Latitude and VulcanSQL allow for arbitrary parameter values passed as query parameters with no specification on parameter typing or parameter options"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["Query Multiple Databases in One API Call","\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Squirrels differentiate data models by those that run on the external database (i.e. \u201cdatabase views\u201d) and those that run in the API server (i.e. \u201cfederate views\u201d). Federate views can join database views (or other federate views) even if they ran in different databases! Any database / data warehouse with a SQLAlchemy driver can be queried as a source for database views."}),"\n",(0,s.jsx)(t.li,{children:"Latitude allows data models to reference another, but the chain of queries must be on the same database. No concept of \u201cfederate views\u201d exist"}),"\n",(0,s.jsx)(t.li,{children:"VulcanSQL does not support data models referencing another. There can only be one source per project"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["Data Models with Python Pandas","\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"If SQL with Jinja is insufficient, data models in Squirrels can be created in Python as a function that return pandas dataframes"}),"\n",(0,s.jsx)(t.li,{children:"Latitude and VulcanSQL have no support for Python since both their backend are NodeJS"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["Visualization Dashboards","\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Squirrels lets you create APIs that return dashboards as images or html. The dashboards are created in Python with your favourite Python data visualization library such as matplotlib or plotly"}),"\n",(0,s.jsx)(t.li,{children:"Latitude lets you create dashboards with Svelte, and uses their own syntax for components. Likely requires a higher learning curve"}),"\n",(0,s.jsx)(t.li,{children:"VulcanSQL has no support for dashboards"}),"\n"]}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,t,a)=>{a.d(t,{R:()=>o,x:()=>i});var s=a(96540);const n={},r=s.createContext(n);function o(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);