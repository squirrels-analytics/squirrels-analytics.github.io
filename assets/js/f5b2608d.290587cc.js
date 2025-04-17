"use strict";(self.webpackChunksquirrels_docs=self.webpackChunksquirrels_docs||[]).push([[2974],{1806:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>o});const r=JSON.parse('{"id":"docs/concepts/models","title":"Data Models","description":"Data models in Squirrels define the structure and transformation of your data through a logical pipeline. They are the building blocks that transform raw data into actionable insights.","source":"@site/docs/docs/concepts/models.md","sourceDirName":"docs/concepts","slug":"/docs/concepts/models","permalink":"/docs/docs/concepts/models","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"docs","previous":{"title":"Column Types","permalink":"/docs/docs/concepts/column-types"},"next":{"title":"Sources","permalink":"/docs/docs/concepts/models-source"}}');var a=s(4848),t=s(8453);const i={},d="Data Models",l={},o=[{value:"Overview",id:"overview",level:2},{value:"Types of Models",id:"types-of-models",level:2},{value:"1. Sources",id:"1-sources",level:3},{value:"2. Seeds",id:"2-seeds",level:3},{value:"3. Build Models",id:"3-build-models",level:3},{value:"4. Dbview Models",id:"4-dbview-models",level:3},{value:"5. Federate Models",id:"5-federate-models",level:3},{value:"Key Concepts",id:"key-concepts",level:2},{value:"Dependencies and DAG",id:"dependencies-and-dag",level:3},{value:"Materialization",id:"materialization",level:3},{value:"Column Metadata",id:"column-metadata",level:3},{value:"Pass-through Columns",id:"pass-through-columns",level:3},{value:"SQL and Python Support",id:"sql-and-python-support",level:3}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"data-models",children:"Data Models"})}),"\n",(0,a.jsx)(n.p,{children:"Data models in Squirrels define the structure and transformation of your data through a logical pipeline. They are the building blocks that transform raw data into actionable insights."}),"\n",(0,a.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,a.jsx)(n.p,{children:"Squirrels uses a layered approach to data modeling, where each layer serves a specific purpose in the data transformation pipeline:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Base Layer"}),": Sources and seeds provide raw data from external systems and internal reference data"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Transformation Layer"}),": Build models, dbview models, and federate models transform and prepare data for analysis with SQL or Python queries"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"This approach creates a modular, reusable, and maintainable data transformation pipeline for both offline ETL and real-time BI analytics."}),"\n",(0,a.jsx)(n.h2,{id:"types-of-models",children:"Types of Models"}),"\n",(0,a.jsx)(n.p,{children:"Squirrels supports five types of data models:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"3 types of static data models with sources, seeds, and build models"}),"\n",(0,a.jsx)(n.li,{children:"2 types of dynamic data models with dbview models and federate models"}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"1-sources",children:"1. Sources"}),"\n",(0,a.jsx)(n.p,{children:"Sources connect to external data sources such as databases or data warehouses. They define how data is extracted from these sources and loaded into your project's virtual data environment (a DuckDB database)."}),"\n",(0,a.jsx)(n.p,{children:"Key features:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Connect to various external databases"}),"\n",(0,a.jsx)(n.li,{children:"Support for incremental loading through update hints"}),"\n",(0,a.jsx)(n.li,{children:"Enforce column types with metadata"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{href:"./models-source",children:"Learn more about Sources \u2192"})}),"\n",(0,a.jsx)(n.h3,{id:"2-seeds",children:"2. Seeds"}),"\n",(0,a.jsx)(n.p,{children:"Seeds are small, static datasets that are included directly in (and version controlled with) your project. They are typically used for lookup tables, reference data, or other small datasets that change infrequently."}),"\n",(0,a.jsx)(n.p,{children:"Key features:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"CSV files with accompanying YAML metadata"}),"\n",(0,a.jsx)(n.li,{children:"Automatic schema inference or explicit type casting"}),"\n",(0,a.jsx)(n.li,{children:"Perfect for reference data, lookups, and configuration data"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{href:"./models-seed",children:"Learn more about Seeds \u2192"})}),"\n",(0,a.jsx)(n.h3,{id:"3-build-models",children:"3. Build Models"}),"\n",(0,a.jsx)(n.p,{children:"Build models are materialized during the build process, creating tables or views in the DuckDB environment. They support both SQL and Python transformations and are designed for complex data manipulations that need to be persisted."}),"\n",(0,a.jsx)(n.p,{children:"Key features:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Materialization as tables or views"}),"\n",(0,a.jsx)(n.li,{children:"Support for both SQL and Python transformations"}),"\n",(0,a.jsx)(n.li,{children:"Pass-through columns to inherit metadata"}),"\n",(0,a.jsx)(n.li,{children:"Dependency tracking and resolution"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{href:"./models-build",children:"Learn more about Build Models \u2192"})}),"\n",(0,a.jsx)(n.h3,{id:"4-dbview-models",children:"4. Dbview Models"}),"\n",(0,a.jsx)(n.p,{children:"Dbview models are SQL transformations that run directly on the source database. They are useful for performing initial transformations and aggregations close to the data source, which can improve latency when working with live data by reducing the amount of data transferred."}),"\n",(0,a.jsx)(n.p,{children:"Key features:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Execute SQL directly on source databases"}),"\n",(0,a.jsx)(n.li,{children:"Option to translate to DuckDB dialect and run on the virtual data environment instead for DuckDB performance"}),"\n",(0,a.jsxs)(n.li,{children:["Access to source models via the ",(0,a.jsx)(n.code,{children:"source()"})," macro"]}),"\n",(0,a.jsx)(n.li,{children:"Parameter-driven filtering and transformation"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{href:"./models-dbview",children:"Learn more about Dbview Models \u2192"})}),"\n",(0,a.jsx)(n.h3,{id:"5-federate-models",children:"5. Federate Models"}),"\n",(0,a.jsx)(n.p,{children:"Federate models are the final layer in your data transformation pipeline. They are similar to dbview models except they run in the API server instead of the source database. They combine data from multiple sources and models, such as static models in the virtual data environment, dbview models, and other federate models."}),"\n",(0,a.jsx)(n.p,{children:"Key features:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Parameter-driven dynamic transformations"}),"\n",(0,a.jsx)(n.li,{children:"Support for both SQL and Python implementations"}),"\n",(0,a.jsx)(n.li,{children:"Reference any type of data model to combine data into a single result"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{href:"./models-federate",children:"Learn more about Federate Models \u2192"})}),"\n",(0,a.jsx)(n.h2,{id:"key-concepts",children:"Key Concepts"}),"\n",(0,a.jsx)(n.h3,{id:"dependencies-and-dag",children:"Dependencies and DAG"}),"\n",(0,a.jsx)(n.p,{children:"Models can depend on other models, creating a directed acyclic graph (DAG) of data transformations. Squirrels automatically:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Resolves model dependencies"}),"\n",(0,a.jsx)(n.li,{children:"Determines the proper execution order"}),"\n",(0,a.jsx)(n.li,{children:"Validates that there are no circular dependencies"}),"\n",(0,a.jsx)(n.li,{children:"Manages the flow of data between models"}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"materialization",children:"Materialization"}),"\n",(0,a.jsx)(n.p,{children:"Models can be materialized in different ways:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Source Models"}),": Loaded into DuckDB or accessed directly based on the ",(0,a.jsx)(n.code,{children:"load_to_duckdb"})," setting"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Seed Models"}),": Stored in memory as Polars dataframes and materialized as tables during the build process"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Build Models"}),": Materialized as tables or views during the build process based on the ",(0,a.jsx)(n.code,{children:"materialization"})," setting"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Dbview Models"}),": Executed on the source database or in DuckDB based on the ",(0,a.jsx)(n.code,{children:"translate_to_duckdb"})," setting"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Federate Models"}),": Stored in a temporary in-memory DuckDB database as tables or views based on the ",(0,a.jsx)(n.code,{children:"eager"})," setting"]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"column-metadata",children:"Column Metadata"}),"\n",(0,a.jsx)(n.p,{children:"Each model defines its columns with rich metadata:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"name"}),": Column name"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"type"}),": Data type for the column. See the ",(0,a.jsx)(n.a,{href:"./column-types",children:"Column Types"})," documentation for supported types"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"description"}),": Human-readable description"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"category"}),": Dimension, measure, or misc"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"depends_on"}),": List of upstream columns"]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"pass-through-columns",children:"Pass-through Columns"}),"\n",(0,a.jsx)(n.p,{children:"Models can inherit column metadata from upstream models using pass-through columns, which:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Reduce duplicate metadata"}),"\n",(0,a.jsx)(n.li,{children:"Ensure consistency across models"}),"\n",(0,a.jsx)(n.li,{children:"Simplify configuration"}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"sql-and-python-support",children:"SQL and Python Support"}),"\n",(0,a.jsx)(n.p,{children:"Build models and federate models support both SQL and Python implementations:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"SQL Models"}),": Use Jinja templating and SQL"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Python Models"}),": Python functions that return Polars or Pandas DataFrames"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>d});var r=s(6540);const a={},t=r.createContext(a);function i(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);