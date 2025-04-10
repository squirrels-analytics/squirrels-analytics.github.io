"use strict";(self.webpackChunksquirrels_docs=self.webpackChunksquirrels_docs||[]).push([[5268],{9322:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"docs/intro","title":"What is Squirrels?","description":"Overview","source":"@site/versioned_docs/version-0.4.x/docs/intro.md","sourceDirName":"docs","slug":"/docs/intro","permalink":"/docs/0.4.x/docs/intro","draft":false,"unlisted":false,"tags":[],"version":"0.4.x","frontMatter":{},"sidebar":"docs","next":{"title":"Tutorial","permalink":"/docs/0.4.x/docs/tutorial"}}');var r=s(4848),n=s(8453);const i={},o="What is Squirrels?",l={},d=[{value:"Overview",id:"overview",level:2},{value:"Main Features",id:"main-features",level:2},{value:"API Access to Datasets and Dashboards",id:"api-access-to-datasets-and-dashboards",level:4},{value:"Dynamic Queries with SQL Jinja or Python",id:"dynamic-queries-with-sql-jinja-or-python",level:4},{value:"Model Dependencies",id:"model-dependencies",level:4},{value:"Cascading Parameters",id:"cascading-parameters",level:4},{value:"Context Variables",id:"context-variables",level:4},{value:"Lookup Tables as CSV Files",id:"lookup-tables-as-csv-files",level:4},{value:"In-Memory Caching",id:"in-memory-caching",level:4},{value:"Authentication",id:"authentication",level:4},{value:"Reusable Packages",id:"reusable-packages",level:4},{value:"REST API Types",id:"rest-api-types",level:2},{value:"Dataset Result API Workflow",id:"dataset-result-api-workflow",level:3}];function c(e){const a={a:"a",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.header,{children:(0,r.jsx)(a.h1,{id:"what-is-squirrels",children:"What is Squirrels?"})}),"\n",(0,r.jsx)(a.h2,{id:"overview",children:"Overview"}),"\n",(0,r.jsx)(a.p,{children:"Squirrels is a low-code REST API framework designed to simplify and automate data analytics. It eases the burden on data / analytics engineers, eliminates the need for API engineers to create data analytics APIs, and allows data / analytics engineers to play a bigger role in creating backend services for data analytics. With a primary focus on reusability and flexibility, Squirrels also allows for query logic to be shared across multiple front-end applications. The framework makes it easy to create REST APIs that generate complex SQL queries using query parameters for selected parameter values, and delivering tabular results that can change behaviour based on the selected values."}),"\n",(0,r.jsxs)(a.p,{children:["For those familiar with ",(0,r.jsx)(a.a,{href:"https://www.getdbt.com/",children:"dbt"}),", Squirrels uses a similar data modelling approach as dbt. However, the two frameworks are meant for different use cases: Squirrels is meant for the real-time data analytics, whereas dbt is meant for the offline data transformation pipelines. The project structure and CLI of Squirrels is intentionally made similar to dbt such that engineers who are already familiar with dbt can pick up Squirrels easily."]}),"\n",(0,r.jsx)(a.h2,{id:"main-features",children:"Main Features"}),"\n",(0,r.jsx)(a.h4,{id:"api-access-to-datasets-and-dashboards",children:"API Access to Datasets and Dashboards"}),"\n",(0,r.jsx)(a.p,{children:"Applications can access datasets and their associated parameters via well-defined API endpoints. Each dataset can be configured with a target model, a set of applicable widget parameters, and access permissions. Same applies to dashboards as well. A testing UI is available to conveniently test your APIs, and comprehensive OpenAPI documentation is automatically generated for you."}),"\n",(0,r.jsx)(a.h4,{id:"dynamic-queries-with-sql-jinja-or-python",children:"Dynamic Queries with SQL Jinja or Python"}),"\n",(0,r.jsx)(a.p,{children:'Squirrels utilizes Jinja as a templating language for rendering complex SQL queries. These templates, known as "models", enable the dynamic generation of queries based on business needs. Additionally, Squirrels supports Python to generate dynamic queries, providing a more flexible tool of handling data transformations through SQLAlchemy ORM or pandas dataframes (if preferred).'}),"\n",(0,r.jsx)(a.h4,{id:"model-dependencies",children:"Model Dependencies"}),"\n",(0,r.jsxs)(a.p,{children:["Similar to ",(0,r.jsx)(a.a,{href:"https://www.getdbt.com/",children:"dbt"}),", the ",(0,r.jsx)(a.strong,{children:"ref"})," function is available to define model dependencies, which is useful in creating real-time data pipelines. Models can even join the results of queries coming from different databases!"]}),"\n",(0,r.jsx)(a.h4,{id:"cascading-parameters",children:"Cascading Parameters"}),"\n",(0,r.jsx)(a.p,{children:"The framework supports dynamic cascading parameter widgets that adjust based on the selected values of other parameters. These parameters can be specified as hard-coded configurations, or fetched from database lookup tables. Models can use the selected parameter values to change behaviour. For free-form text parameters, SQL models are protected from SQL injection."}),"\n",(0,r.jsx)(a.h4,{id:"context-variables",children:"Context Variables"}),"\n",(0,r.jsx)(a.p,{children:'Squirrels allows for the creation of "context variables" in Python files to process parameter selections into meaningful variables for your models. These context variables are useful to leverage your favourite Python IDE (for features like autofill suggestions) to more conveniently define your variables.'}),"\n",(0,r.jsx)(a.h4,{id:"lookup-tables-as-csv-files",children:"Lookup Tables as CSV Files"}),"\n",(0,r.jsxs)(a.p,{children:['You can choose to store lookup tables as CSV files, known as "seeds", in your Squirrels project. This allows you to version control reference data together with your project. The seeds can be used as a source for your parameter options, or referenced by models using the ',(0,r.jsx)(a.strong,{children:"ref"})," function."]}),"\n",(0,r.jsx)(a.h4,{id:"in-memory-caching",children:"In-Memory Caching"}),"\n",(0,r.jsx)(a.p,{children:"After the first API call, the framework caches API responses for parameters and datasets in memory (if caching is enabled), enhancing the performance of subsequent calls."}),"\n",(0,r.jsx)(a.h4,{id:"authentication",children:"Authentication"}),"\n",(0,r.jsx)(a.p,{children:"The framework supports defining custom user models and methods for authenticating a user given username and password. Both the parameter widgets and data model can change behaviour based on the authenticated user if needed."}),"\n",(0,r.jsx)(a.h4,{id:"reusable-packages",children:"Reusable Packages"}),"\n",(0,r.jsx)(a.p,{children:"Reuse functionality across different Squirrels projects through package installations."}),"\n",(0,r.jsx)(a.h2,{id:"rest-api-types",children:"REST API Types"}),"\n",(0,r.jsx)(a.p,{children:"Every Squirrels project defines a set of related datasets (and sometimes dashboards) under a single version contolled project. When running the API server for a Squirrels projects, the following API types become available."}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsxs)(a.li,{children:[(0,r.jsx)(a.strong,{children:"Token API"})," - Retrieve a short-lived API token if the provided credentials are valid"]}),"\n",(0,r.jsxs)(a.li,{children:[(0,r.jsx)(a.strong,{children:"Data Catalog API"})," - Provides a catalog of datasets and dashboards available under the project (can vary with authentication)"]}),"\n",(0,r.jsxs)(a.li,{children:[(0,r.jsx)(a.strong,{children:"Parameters API"})," - Provides information of the parameter widgets for a given dataset"]}),"\n",(0,r.jsxs)(a.li,{children:[(0,r.jsx)(a.strong,{children:"Dataset Result API"})," - Provides the tabular result of a dataset given parameter selections"]}),"\n",(0,r.jsxs)(a.li,{children:[(0,r.jsx)(a.strong,{children:"Dashboard Result API"})," - Provides an image of a dashboard given parameter selections"]}),"\n"]}),"\n",(0,r.jsxs)(a.p,{children:["More details are available in the ",(0,r.jsx)(a.a,{href:"./frontend/rest-api",children:"REST API Types"})," page."]}),"\n",(0,r.jsx)(a.h3,{id:"dataset-result-api-workflow",children:"Dataset Result API Workflow"}),"\n",(0,r.jsx)(a.p,{children:"Although a dataset is only associated to one target model, the target model may depend on multiple upstream models. When calling the dataset result API, the following happens behind the scenes:"}),"\n",(0,r.jsxs)(a.ol,{children:["\n",(0,r.jsx)(a.li,{children:"Parameter selections are validated, and context variables are created."}),"\n",(0,r.jsx)(a.li,{children:"Models are compiled from SQL templates / python functions in upstream order and concurrently if possible. Compilation results are based on parameter selections, context variables, and authenticated user. Note that the compiled models should form a DAG (directed acyclic graph)."}),"\n",(0,r.jsx)(a.li,{children:"The DAG is validated to contain no cycles (i.e. the DAG is truly acyclic). This is separate from the step above since validation is done in a non-concurrent manner."}),"\n",(0,r.jsxs)(a.li,{children:['Models are executed in downstream order and concurrently if possible. Some models, called "dbviews", are run against external databases, while other models, called "federates", run in a temporary in-memory database (choice of sqlite or duckdb) created in the API server. Federates can join results of dbviews or other federates via the ',(0,r.jsx)(a.strong,{children:"ref"})," function (dbviews cannot use ",(0,r.jsx)(a.strong,{children:"ref"}),")."]}),"\n",(0,r.jsx)(a.li,{children:"Once the target model is complete, the results are loaded to JSON and provided as the REST API response."}),"\n"]})]})}function h(e={}){const{wrapper:a}={...(0,n.R)(),...e.components};return a?(0,r.jsx)(a,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},8453:(e,a,s)=>{s.d(a,{R:()=>i,x:()=>o});var t=s(6540);const r={},n=t.createContext(r);function i(e){const a=t.useContext(n);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(n.Provider,{value:a},e.children)}}}]);