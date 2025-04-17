"use strict";(self.webpackChunksquirrels_docs=self.webpackChunksquirrels_docs||[]).push([[1846],{8709:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>o,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"docs/concepts/models-dbview","title":"Dbview Models","description":"Dbview models are SQL transformations that run directly on the source database. They are useful for performing initial transformations and aggregations close to the data source, which can improve performance by reducing the amount of data transferred.","source":"@site/docs/docs/concepts/models-dbview.md","sourceDirName":"docs/concepts","slug":"/docs/concepts/models-dbview","permalink":"/docs/docs/concepts/models-dbview","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"docs","previous":{"title":"Build Models","permalink":"/docs/docs/concepts/models-build"},"next":{"title":"Federate Models","permalink":"/docs/docs/concepts/models-federate"}}');var r=s(4848),i=s(8453);const o={},d="Dbview Models",l={},c=[{value:"Configuration",id:"configuration",level:2},{value:"Key Properties",id:"key-properties",level:2},{value:"How Dbview Models Work",id:"how-dbview-models-work",level:2},{value:"When to Translate to DuckDB",id:"when-to-translate-to-duckdb",level:2},{value:"Usage",id:"usage",level:2},{value:"Best Practices",id:"best-practices",level:2}];function a(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"dbview-models",children:"Dbview Models"})}),"\n",(0,r.jsx)(n.p,{children:"Dbview models are SQL transformations that run directly on the source database. They are useful for performing initial transformations and aggregations close to the data source, which can improve performance by reducing the amount of data transferred."}),"\n",(0,r.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,r.jsx)(n.p,{children:"Dbview models consist of two files:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"A SQL file with the transformation logic"}),"\n",(0,r.jsx)(n.li,{children:"A YAML file with metadata"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Example SQL file:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SELECT\n    date_trunc('month', date)::text AS month,\n    sum(amount) AS total_amount\nFROM {{ source(\"src_transactions\") }}\nWHERE date >= '{{ ctx.min_date }}'\n    AND date <= '{{ ctx.max_date }}'\nGROUP BY 1\nORDER BY 1 DESC\n"})}),"\n",(0,r.jsx)(n.p,{children:"Example YAML file:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'description: |\n  This is an example of a database view model. It finds the total amount spent by month.\n\n  Parameters are available to filter the date and amount of the transactions.\n\nconnection: default        # Connection name from connections.yml\ntranslate_to_duckdb: true  # Whether to translate and run in DuckDB (default: false)\n\ndepends_on:                # Optional - the "source" macro automatically adds to this set\n  - src_transactions\n\ncolumns:\n  - name: month\n    type: string\n    description: The months for which the amount is aggregated by, in descending order\n    category: dimension\n    depends_on:\n      - src_transactions.date\n  \n  - name: total_amount\n    type: float\n    description: The total amount spent by the group-by dimension\n    category: measure\n    depends_on:\n      - src_transactions.amount\n'})}),"\n",(0,r.jsx)(n.h2,{id:"key-properties",children:"Key Properties"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"description"}),": A human-readable description of the dbview model"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"connection"}),": The connection name as defined in your connections.yml file"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"translate_to_duckdb"}),": Whether to translate the SQL to DuckDB dialect (default: false)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"depends_on"}),": List of models this model depends on (source models are automatically added when using the ",(0,r.jsx)(n.code,{children:"source()"})," macro)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"columns"}),": Definitions of columns produced by the model","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"name"}),": Column name"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"type"}),": Data type for the column. See the ",(0,r.jsx)(n.a,{href:"./column-types",children:"Column Types"})," documentation for supported types"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"description"}),": Human-readable description of the column"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"category"}),": Category of the column (dimension, measure, misc)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"depends_on"}),": List of upstream columns this column depends on"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["If ",(0,r.jsx)(n.code,{children:"connection"})," is not specified, the source will be loaded from the default connection (usually ",(0,r.jsx)(n.code,{children:"default"}),") specified with the ",(0,r.jsx)(n.a,{href:"./environment",children:"environment variable"})," ",(0,r.jsx)(n.code,{children:"SQRL_CONNECTIONS__DEFAULT_NAME_USED"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"how-dbview-models-work",children:"How Dbview Models Work"}),"\n",(0,r.jsx)(n.p,{children:"Dbview models offer a unique capability within Squirrels: they allow you to execute SQL directly on the source database, rather than in DuckDB."}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Connection"}),": Dbview models use the specified database connection to execute SQL"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"The connection must be configured in your connections.yml file"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Source References"}),": Dbview models can reference source models using the ",(0,r.jsx)(n.code,{children:"source()"})," macro"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"The source model definition provides the actual table name in the source database"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"SQL Translation Options"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["If ",(0,r.jsx)(n.code,{children:"translate_to_duckdb: false"})," (default): SQL executes directly on the source database"]}),"\n",(0,r.jsxs)(n.li,{children:["If ",(0,r.jsx)(n.code,{children:"translate_to_duckdb: true"}),": SQL is translated to DuckDB dialect and executed in DuckDB / the virtual data environment"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Parameter Support"}),": Dbview models support Jinja templating for dynamic SQL generation"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Access context variables with ",(0,r.jsx)(n.code,{children:"{{ ctx.variable }}"})]}),"\n",(0,r.jsxs)(n.li,{children:["Use conditional logic with ",(0,r.jsx)(n.code,{children:"{% if %}...{% endif %}"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Dbview models can only depend on sources that share the same connection."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["In addition, if ",(0,r.jsx)(n.code,{children:"translate_to_duckdb: true"}),", then all the dependent sources must have ",(0,r.jsx)(n.code,{children:"load_to_duckdb: true"})]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"when-to-translate-to-duckdb",children:"When to Translate to DuckDB"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"translate_to_duckdb"})," setting determines where your query is executed:"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsxs)(n.strong,{children:["With ",(0,r.jsx)(n.code,{children:"translate_to_duckdb: false"})," (default):"]})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"SQL executes directly on the source database / data warehouse"}),"\n",(0,r.jsx)(n.li,{children:"Useful for database-specific SQL features"}),"\n",(0,r.jsx)(n.li,{children:"Ideal for transformations that benefit from the source database's processing power"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsxs)(n.strong,{children:["With ",(0,r.jsx)(n.code,{children:"translate_to_duckdb: true"}),":"]})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"SQL is translated to DuckDB dialect and executed in the virtual data environment"}),"\n",(0,r.jsx)(n.li,{children:"Useful for taking advantage of DuckDB's performance optimizations for data analytics"}),"\n",(0,r.jsxs)(n.li,{children:["Requires sources to be loaded into the virtual data environment (",(0,r.jsx)(n.code,{children:"load_to_duckdb: true"}),")"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsxs)(n.p,{children:["Dbview models can be referenced by ",(0,r.jsx)(n.a,{href:"./models-federate",children:"federate models"})," using the ",(0,r.jsx)(n.code,{children:"ref()"})," function:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:'-- In another SQL model\nSELECT * FROM {{ ref("dbview_example") }}\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'# In a Python model\ndef model(sqrl):\n    df = sqrl.ref("dbview_example")\n    return df\n'})}),"\n",(0,r.jsx)(n.h2,{id:"best-practices",children:"Best Practices"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Consider source database capabilities"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Use database-specific SQL features when appropriate"}),"\n",(0,r.jsxs)(n.li,{children:["Set ",(0,r.jsx)(n.code,{children:"translate_to_duckdb: true"})," when you need DuckDB features or optimizations"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Use parameters effectively"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Leverage parameters for dynamic behavior"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Optimize query performance"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Include appropriate filters to reduce data transfer"}),"\n",(0,r.jsx)(n.li,{children:"Use the source database's indexing and query optimization features"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Document your models thoroughly"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Add clear descriptions to the YAML file"}),"\n",(0,r.jsx)(n.li,{children:"Document the purpose of each column"}),"\n",(0,r.jsx)(n.li,{children:"Specify column dependencies accurately"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Dbview models are particularly useful for:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Performing complex transformations close to the data source"}),"\n",(0,r.jsx)(n.li,{children:"Creating reusable transformations on live data that are used by multiple downstream models"}),"\n",(0,r.jsx)(n.li,{children:"Reducing data transfer by pre-aggregating data at the source"}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>d});var t=s(6540);const r={},i=t.createContext(r);function o(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);