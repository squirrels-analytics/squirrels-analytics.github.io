"use strict";(self.webpackChunksquirrels_docs=self.webpackChunksquirrels_docs||[]).push([[5132],{9886:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>t,metadata:()=>l,toc:()=>d});const l=JSON.parse('{"id":"docs/concepts/models-seed","title":"Seeds","description":"Seeds are small, static datasets that are included directly in your Squirrels project. They are typically used for lookup tables, reference data, or other small datasets that change infrequently.","source":"@site/docs/docs/concepts/models-seed.md","sourceDirName":"docs/concepts","slug":"/docs/concepts/models-seed","permalink":"/docs/docs/concepts/models-seed","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"docs","previous":{"title":"Sources","permalink":"/docs/docs/concepts/models-source"},"next":{"title":"Build Models","permalink":"/docs/docs/concepts/models-build"}}');var r=s(4848),i=s(8453);const t={},c="Seeds",o={},d=[{value:"Configuration",id:"configuration",level:2},{value:"Key Properties",id:"key-properties",level:2},{value:"Schema Inference and Type Casting",id:"schema-inference-and-type-casting",level:2},{value:"Handling Null Values",id:"handling-null-values",level:2},{value:"Usage",id:"usage",level:2},{value:"Best Practices",id:"best-practices",level:2}];function a(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"seeds",children:"Seeds"})}),"\n",(0,r.jsx)(n.p,{children:"Seeds are small, static datasets that are included directly in your Squirrels project. They are typically used for lookup tables, reference data, or other small datasets that change infrequently."}),"\n",(0,r.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,r.jsx)(n.p,{children:"Seeds consist of two files:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"A CSV file containing the data"}),"\n",(0,r.jsx)(n.li,{children:"A YAML file with metadata (optional but recommended)"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Example CSV file:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-csv",children:'"category_id","category"\n"0","Food"\n"1","Bills"\n"2","Shopping"\n"3","Transportation"\n"4","Entertainment"\n'})}),"\n",(0,r.jsx)(n.p,{children:"Example YAML file:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"description: |\n  Lookup table for the category IDs and names of transactions.\n\ncast_column_types: true  # Apply column types defined below\n\ncolumns:\n  - name: category_id\n    type: string\n    description: The category ID\n    category: dimension\n  \n  - name: category\n    type: string\n    description: The human-readable category name\n    category: dimension\n"})}),"\n",(0,r.jsx)(n.h2,{id:"key-properties",children:"Key Properties"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"description"}),": A human-readable description of the seed model"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"cast_column_types"}),": Whether to apply the column types defined in the YAML file (default: false)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"columns"}),": Definitions of columns in the seed data","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"name"}),": Column name (must match the CSV header)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"type"}),": Data type for the column. See the ",(0,r.jsx)(n.a,{href:"./column-types",children:"Column Types"})," documentation for supported types"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"description"}),": Human-readable description of the column"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"category"}),": Category of the column (dimension, measure, etc.)"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"schema-inference-and-type-casting",children:"Schema Inference and Type Casting"}),"\n",(0,r.jsx)(n.p,{children:"Squirrels provides two ways to handle column types in seed files:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Automatic Schema Inference"}),": By default, Squirrels attempts to infer the schema from the CSV data. This behavior is controlled by the ",(0,r.jsx)(n.a,{href:"./environment",children:"environment variable"})," ",(0,r.jsx)(n.code,{children:"SQRL_SEEDS__INFER_SCHEMA"}),' (defaults to "true").']}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Explicit Type Casting"}),": When you set ",(0,r.jsx)(n.code,{children:"cast_column_types: true"})," in the YAML file, Squirrels will use the column types you've defined, overriding the schema inference."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["If both ",(0,r.jsx)(n.code,{children:"SQRL_SEEDS__INFER_SCHEMA"})," and ",(0,r.jsx)(n.code,{children:"cast_column_types"})," are false, the columns will be loaded as strings."]}),"\n",(0,r.jsx)(n.h2,{id:"handling-null-values",children:"Handling Null Values"}),"\n",(0,r.jsxs)(n.p,{children:["You can configure which string values should be treated as null (missing) values by setting the ",(0,r.jsx)(n.a,{href:"./environment",children:"environment variable"})," ",(0,r.jsx)(n.code,{children:"SQRL_SEEDS__NA_VALUES"}),". This is a JSON array of strings, for example:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'SQRL_SEEDS__NA_VALUES=\'["", "NULL", "null", "NA", "na", "N/A", "n/a"]\'\n'})}),"\n",(0,r.jsxs)(n.p,{children:["By default, this is simply set to ",(0,r.jsx)(n.code,{children:'["NA"]'}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsxs)(n.p,{children:["Seed models are loaded into DuckDB tables during the build process and can be referenced by other models using the ",(0,r.jsx)(n.code,{children:"ref()"})," function in Python or SQL:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:'-- In a SQL model\nSELECT * FROM {{ ref("seed_categories") }}\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'# In a Python model\ndef model(sqrl):\n    categories_df = sqrl.ref("seed_categories")\n    return categories_df\n'})}),"\n",(0,r.jsx)(n.p,{children:"Seeds are materialized as tables in the virtual data environment during the build process. This ensures they're available to be referenced by build models."}),"\n",(0,r.jsx)(n.h2,{id:"best-practices",children:"Best Practices"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Use seeds for small, static datasets"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Reference data that doesn't change often"}),"\n",(0,r.jsx)(n.li,{children:"Lookup tables"}),"\n",(0,r.jsx)(n.li,{children:"Mapping tables"}),"\n",(0,r.jsx)(n.li,{children:"Configuration data"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Keep CSV files clean and consistent"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Use consistent quote and delimiter characters"}),"\n",(0,r.jsx)(n.li,{children:"Include headers that match your column configurations"}),"\n",(0,r.jsx)(n.li,{children:"Keep files small enough to comfortably store in version control"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Version control your seed data"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Track changes to both CSV and YAML files"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Document your seeds thoroughly"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Add clear descriptions to the YAML file"}),"\n",(0,r.jsx)(n.li,{children:"Categorize columns properly (dimension, measure, misc)"}),"\n",(0,r.jsx)(n.li,{children:"Include source information where relevant"}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>c});var l=s(6540);const r={},i=l.createContext(r);function t(e){const n=l.useContext(i);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),l.createElement(i.Provider,{value:n},e.children)}}}]);