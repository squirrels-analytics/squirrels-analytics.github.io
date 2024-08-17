"use strict";(self.webpackChunksquirrels_docs=self.webpackChunksquirrels_docs||[]).push([[6835],{9110:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var t=s(5893),i=s(1151);const r={},o="SQL Models",a={id:"docs/topics/models-sql",title:"SQL Models",description:'The "data model" can simply be thought of as a table or view in a database, derived from pre-existing tables or views. All models are defined somewhere in the models/ folder, and all SQL model files use the .sql extension. The part of the file name before the extension becomes the name of the model. In Squirrels, we split this into two categories: dbview models and federate models.',source:"@site/docs/docs/topics/models-sql.md",sourceDirName:"docs/topics",slug:"/docs/topics/models-sql",permalink:"/docs/next/docs/topics/models-sql",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Context File",permalink:"/docs/next/docs/topics/context"},next:{title:"Python Models",permalink:"/docs/next/docs/topics/models-python"}},l={},d=[{value:"Dbview Models",id:"dbview-models",level:2},{value:"Federate Models",id:"federate-models",level:2},{value:"Common Variables",id:"common-variables",level:2},{value:"Using Custom Jinja Macros",id:"using-custom-jinja-macros",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"sql-models",children:"SQL Models"}),"\n",(0,t.jsxs)(n.p,{children:['The "data model" can simply be thought of as a table or view in a database, derived from pre-existing tables or views. All models are defined somewhere in the ',(0,t.jsx)(n.code,{children:"models/"})," folder, and all SQL model files use the ",(0,t.jsx)(n.strong,{children:".sql"})," extension. The part of the file name before the extension becomes the name of the model. In Squirrels, we split this into two categories: ",(0,t.jsx)(n.strong,{children:"dbview models"})," and ",(0,t.jsx)(n.strong,{children:"federate models"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["You can use the ",(0,t.jsx)(n.a,{href:"../../references/cli/init",children:"sqrl init"})," command to create example SQL models:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sqrl init --core --dbview sql --federate sql\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Like ",(0,t.jsx)(n.a,{href:"https://docs.getdbt.com/docs/introduction",children:"dbt"}),", all SQL models in Squirrels can be templated with ",(0,t.jsx)(n.a,{href:"https://ttl255.com/jinja2-tutorial-part-1-introduction-and-variable-substitution/",children:"Jinja"}),". However, some of the Squirrels features available in ",(0,t.jsx)(n.a,{href:"https://ttl255.com/jinja2-tutorial-part-1-introduction-and-variable-substitution/",children:"Jinja"})," are different between dbview models and federate models."]}),"\n",(0,t.jsx)(n.h2,{id:"dbview-models",children:"Dbview Models"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.strong,{children:"dbview model"}),' represents a view that runs against an external database. The connection settings to the external database is set up with YAML in the "connections" section of ',(0,t.jsx)(n.a,{href:"./project-file",children:"squirrels.yml"})," or with Python in ",(0,t.jsx)(n.a,{href:"./database",children:"connections.py"}),". This means the SQL dialect for the dbview model depends on the database it's running against. All dbview models are defined in the ",(0,t.jsx)(n.code,{children:"models/dbviews/"})," folder."]}),"\n",(0,t.jsxs)(n.p,{children:["By default, the connection name used by the dbview model is called ",(0,t.jsx)(n.code,{children:"default"})," (or whatever is set for the ",(0,t.jsx)(n.a,{href:"./settings",children:"Project Setting"})," ",(0,t.jsx)(n.strong,{children:"connections.default_name_used"}),"). To change the connection name used, use the ",(0,t.jsx)(n.strong,{children:"connection_name"})," argument of the ",(0,t.jsx)(n.strong,{children:"config"})," function in Jinja."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:'{{- config(connection_name="my_conn_name") -}}\n\nSELECT ...\n'})}),"\n",(0,t.jsxs)(n.p,{children:['Alternatively, the configuration can be specify it in the "dbviews" section of ',(0,t.jsx)(n.a,{href:"./project-file",children:"squirrels.yml"}),". For example, if the model file name is ",(0,t.jsx)(n.code,{children:"my_dbview_model.sql"}),", then the configuration may look like this:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"dbviews:\n  - name: my_dbview_model\n    connection_name: my_conn_name\n"})}),"\n",(0,t.jsx)(n.h2,{id:"federate-models",children:"Federate Models"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.strong,{children:"federate model"})," would then be able to transform the results from dbview models (or other federate models) to create new results. This is possible since the results of the dbview models are written to a temporary in-memory database as a table for every API request. This in-memory database is typically sqlite, which also means that the SQL dialect for federate models is sqlite (this can also change to duckdb instead of sqlite using the ",(0,t.jsx)(n.a,{href:"./settings",children:"Project Setting"})," for ",(0,t.jsx)(n.strong,{children:"in_memory_database"}),"). All federate models are defined in the ",(0,t.jsx)(n.code,{children:"models/federates/"})," folder."]}),"\n",(0,t.jsxs)(n.p,{children:["Use the ",(0,t.jsx)(n.strong,{children:"ref"})," function to specify the dependent models. This is how Squirrels can figure out all upstream models that must be run first before running a given federate model (models are compiled in upstream order and then run in downstream order). This function cannot be used in dbview models. Below is a simple example of usage."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:'SELECT ...\nFROM {{ ref("my_dependent_model") }}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["After all upstream models are resolved, the federate model can be materialized as a table or a view in the in-memory database. This is controlled using the ",(0,t.jsx)(n.strong,{children:"materialized"})," argument of the ",(0,t.jsx)(n.strong,{children:"config"}),' function (where the options are "table" and "view"). By default, it will materialize as a table. Below is an example of configuring ',(0,t.jsx)(n.strong,{children:"materialized"})," to view (which may save memory usage but may also increase runtime if the model is referenced repeatedly)."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:'{{- config(materialized="view") -}}\n\nSELECT ...\n'})}),"\n",(0,t.jsxs)(n.p,{children:['Alternatively, the configuration can be specified in the "federates" section of ',(0,t.jsx)(n.a,{href:"./project-file",children:"squirrels.yml"}),". For example, if the model file name is ",(0,t.jsx)(n.code,{children:"my_federate_model.sql"}),", then the configuration may look like this:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"federates:\n  - name: my_federate_model\n    materialized: view\n"})}),"\n",(0,t.jsx)(n.h2,{id:"common-variables",children:"Common Variables"}),"\n",(0,t.jsxs)(n.p,{children:["In addition to ",(0,t.jsx)(n.strong,{children:"ref"})," and ",(0,t.jsx)(n.strong,{children:"config"}),", there are other useful variables defined by Squirrels that are available for all SQL models (both dbviews and federates). These can be used to dynamically change the SQL query based on real-time context such as the parameter values selected or user authorized. They are as follows:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"ctx"})," - a dictionary of custom-defined values from the ",(0,t.jsx)(n.a,{href:"./context",children:"context.py"})," file. This one is commonly used, and it's in fact possible to only using this without using the other variables below."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"prms"})," - a dictionary of parameter names to their parameter objects. The selected values are accessible using methods on the parameter objects."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"user"})," - an object of the user if one is authorized (or ",(0,t.jsx)(n.strong,{children:"null"})," if no user authorized). The user attributes are defined by the User class in ",(0,t.jsx)(n.a,{href:"./auth",children:"auth.py"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"traits"})," - a dictionary of the dataset traits defined in ",(0,t.jsx)(n.a,{href:"./project-file",children:"squirrels.yml"})," for the requested dataset."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"proj_vars"})," - a dictionary of the project variables defined in ",(0,t.jsx)(n.a,{href:"./project-file",children:"squirrels.yml"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"env_vars"})," - a dictionary of the environment variables defined in ",(0,t.jsx)(n.a,{href:"./environcfg",children:"env.yml"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"In Jinja, a dictionary value can be referenced by key with square brackets, the same way in Python, or by simply using dot notation. For example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"SELECT * FROM mytable\nWHERE mycol = '{{ ctx.some_value }}'\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Attributes of Python class instances, such as ",(0,t.jsx)(n.strong,{children:"user"}),", can also be referenced by dot notation, which is the same way in Jinja and Python. For example:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"SELECT\n{%- if user.department == 'engineer' %}\n    mycolumn\n{%- else %}\n    '***' as mycolumn\n{%- end %}\nFROM mytable\n"})}),"\n",(0,t.jsx)(n.h2,{id:"using-custom-jinja-macros",children:"Using Custom Jinja Macros"}),"\n",(0,t.jsxs)(n.p,{children:["One of the key concepts of ",(0,t.jsx)(n.a,{href:"https://ttl255.com/jinja2-tutorial-part-1-introduction-and-variable-substitution/",children:"Jinja"}),' is "macros" which can be thought of logic that\'s reusable within or across SQL models, or even across Squirrels projects (heck, even across dbt and Squirrels projects is possible!).']}),"\n",(0,t.jsx)(n.p,{children:"For example, suppose we have a SQL model file that looks like this:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"SELECT \n    (CASE WHEN denom = 0 THEN 0 ELSE num1 / denom END) as ratio1\n    (CASE WHEN denom = 0 THEN 0 ELSE num2 / denom END) as ratio2\nFROM mytable\n"})}),"\n",(0,t.jsxs)(n.p,{children:["You may notice the ",(0,t.jsx)(n.strong,{children:"CASE WHEN"})," statements to check if the denominator is zero is repetitive. The repetition can be reduced by using a macro:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:'{%- macro safe_divide(numerator, denominator) -%}\n(CASE WHEN {{ denominator }} = 0 THEN 0 ELSE {{ numerator }} / {{ denominator }} END)\n{%- endmacro -%}\n\nSELECT\n    {{ safe_divide("num1", "denom") }} as ratio1\n    {{ safe_divide("num2", "denom") }} as ratio2\nFROM mytable\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Or, you can write the macro in a file somewhere in your Squirrels project (such as ",(0,t.jsx)(n.code,{children:"macros/utils.j2"}),") and use ",(0,t.jsx)(n.a,{href:"https://ttl255.com/jinja2-tutorial-part-6-include-and-import/",children:"Jinja's include or import"})," statement to share the macro across multiple SQL model files. For example:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:'{%- import \'macros/utils.j2\' as u -%}\n\nSELECT\n    {{ u.safe_divide("num1", "denom") }} as ratio1\n    {{ u.safe_divide("num2", "denom") }} as ratio2\nFROM mytable\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Notice that the path to import/include Jinja files from is relative to the project root. The benefit of reusable macros is more apparent for larger projects, especially if the same underlying logic is repeated many times (instead of just twice). For instance, if there are a hundred columns that calculate division the same way with the CASE WHEN statement above, then if we needed to change our division by zero to result in ",(0,t.jsx)(n.strong,{children:"null"}),", it's easier to change one place instead of a hundred places."]}),"\n",(0,t.jsxs)(n.p,{children:["To share Jinja macros across projects, use the ",(0,t.jsx)(n.a,{href:"../../references/cli/deps",children:"sqrl deps"})," command to download a git repo into the ",(0,t.jsx)(n.code,{children:"sqrl_packages/"})," folder, and import/include the required macro files in the ",(0,t.jsx)(n.code,{children:"sqrl_packages/"})," folder."]}),"\n",(0,t.jsxs)(n.admonition,{type:"note",children:[(0,t.jsxs)(n.p,{children:["If you're familiar with ",(0,t.jsx)(n.a,{href:"https://docs.getdbt.com/docs/introduction",children:"dbt"}),", you may have noticed that there are a few differences on how macros are used."]}),(0,t.jsxs)(n.p,{children:["In ",(0,t.jsx)(n.a,{href:"https://docs.getdbt.com/docs/introduction",children:"dbt"}),", Jinja macro files use the ",(0,t.jsx)(n.strong,{children:".sql"})," extension, and must be contained in a ",(0,t.jsx)(n.code,{children:"macros/"})," folder. And all macros contained in the ",(0,t.jsx)(n.code,{children:"macros/"})," folder are included for all SQL models. Jinja's import or include statements are unsupported in the SQL models."]}),(0,t.jsx)(n.p,{children:"In Squirrels, Jinja macro files can use any extension, and can be contained in any folder. However, to use the Jinja file in a SQL model, it must be imported or included explicitly."})]}),"\n",(0,t.jsxs)(n.admonition,{type:"warning",children:[(0,t.jsxs)(n.p,{children:["By default, imported macros are cached and do not have access to Squirrels variables such as ",(0,t.jsx)(n.strong,{children:"ctx"}),". To get around this, either pass the variable as a parameter to the macro, use include instead of import, or import ",(0,t.jsx)(n.strong,{children:"with context"})," (example below)."]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"{%- import '...' as macros with context -%}\n"})}),(0,t.jsxs)(n.p,{children:["However, using include or importing ",(0,t.jsx)(n.strong,{children:"with context"})," are not recommended since these methods avoid caching the imported macros."]})]})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>a,a:()=>o});var t=s(7294);const i={},r=t.createContext(i);function o(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);