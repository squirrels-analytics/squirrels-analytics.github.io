"use strict";(self.webpackChunksquirrels_docs=self.webpackChunksquirrels_docs||[]).push([[4851],{36902:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>o});const r=JSON.parse('{"id":"references/python/arguments/ModelArgs","title":"ModelArgs","description":"The class for the \\"sqrl\\" argument of the main function of a Python model. The class contains the same attributes as ModelDepsArgs and more.","source":"@site/versioned_docs/version-0.3.x/references/python/arguments/ModelArgs.md","sourceDirName":"references/python/arguments","slug":"/references/python/arguments/ModelArgs","permalink":"/docs/0.3.x/references/python/arguments/ModelArgs","draft":false,"unlisted":false,"tags":[],"version":"0.3.x","frontMatter":{},"sidebar":"references","previous":{"title":"ModelDepsArgs","permalink":"/docs/0.3.x/references/python/arguments/ModelDepsArgs"},"next":{"title":"AuthArgs","permalink":"/docs/0.3.x/references/python/arguments/AuthArgs"}}');var t=s(74848),l=s(28453);const i={},a="ModelArgs",d={},o=[{value:"Attributes",id:"attributes",level:2},{value:"proj_vars",id:"proj_vars",level:3},{value:"env_vars",id:"env_vars",level:3},{value:"user",id:"user",level:3},{value:"prms",id:"prms",level:3},{value:"traits",id:"traits",level:3},{value:"ctx",id:"ctx",level:3},{value:"connections",id:"connections",level:3},{value:"Methods",id:"methods",level:2},{value:"set_placeholder",id:"set_placeholder",level:3},{value:"param_exists",id:"param_exists",level:3},{value:"ref",id:"ref",level:3},{value:"is_placeholder",id:"is_placeholder",level:3},{value:"get_placeholder_value",id:"get_placeholder_value",level:3},{value:"run_external_sql",id:"run_external_sql",level:3},{value:"run_sql_on_dataframes",id:"run_sql_on_dataframes",level:3}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"modelargs",children:"ModelArgs"})}),"\n",(0,t.jsxs)(n.p,{children:['The class for the "sqrl" argument of the main function of a Python model. The class contains the same attributes as ',(0,t.jsx)(n.a,{href:"./ModelDepsArgs",children:"ModelDepsArgs"})," and more."]}),"\n",(0,t.jsxs)(n.p,{children:["Can be found in the classpath ",(0,t.jsx)(n.code,{children:"squirrels.arguments.run_time_args.ModelArgs"})," or ",(0,t.jsx)(n.code,{children:"squirrels.ModelArgs"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"attributes",children:"Attributes"}),"\n",(0,t.jsx)(n.p,{children:'Attibutes of the "sqrl" argument that can be accessed.'}),"\n",(0,t.jsx)(n.h3,{id:"proj_vars",children:"proj_vars"}),"\n",(0,t.jsxs)(n.p,{children:["A dictionary to access a project variable defined in ",(0,t.jsx)(n.code,{children:"squirrels.yml"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"env_vars",children:"env_vars"}),"\n",(0,t.jsxs)(n.p,{children:["A dictionary to access an environment variable defined in ",(0,t.jsx)(n.code,{children:"env.yml"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"user",children:"user"}),"\n",(0,t.jsxs)(n.p,{children:["The authenticated user with type User class defined in ",(0,t.jsx)(n.code,{children:"auth.py"})," (if applicable), or None if no user authenticated."]}),"\n",(0,t.jsx)(n.h3,{id:"prms",children:"prms"}),"\n",(0,t.jsx)(n.p,{children:"A dictionary of the parameter objects (containing the real-time parameter selections) by parameter name."}),"\n",(0,t.jsx)(n.h3,{id:"traits",children:"traits"}),"\n",(0,t.jsx)(n.p,{children:"A dictionary of the dataset traits."}),"\n",(0,t.jsx)(n.h3,{id:"ctx",children:"ctx"}),"\n",(0,t.jsxs)(n.p,{children:["A dictionary of context variables (often defined based on the real-time parameter selections) defined in ",(0,t.jsx)(n.code,{children:"context.py"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"connections",children:"connections"}),"\n",(0,t.jsx)(n.p,{children:"A dictionary of sqlalchemy engines by connection name."}),"\n",(0,t.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,t.jsx)(n.p,{children:'Methods that can be invoked with the "sqrl" argument.'}),"\n",(0,t.jsx)(n.h3,{id:"set_placeholder",children:"set_placeholder"}),"\n",(0,t.jsx)(n.p,{children:"Gets user credentials for database connections."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Required Arguments:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"placeholder"}),": A string for the placeholder name"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"value"}),": A value of any type for the placeholder"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"param_exists",children:"param_exists"}),"\n",(0,t.jsx)(n.p,{children:"Checks whether a parameter exists and is enabled"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Required Arguments:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"param_name"}),": A string for the parameter name"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Returns:"})," A boolean for whether the parameter name exists and is enabled"]}),"\n",(0,t.jsx)(n.h3,{id:"ref",children:"ref"}),"\n",(0,t.jsx)(n.p,{children:"Gets the result of a dependent data model."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Required Arguments"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"model"}),": A string for the dependent model name"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Returns:"})," A pandas dataframe."]}),"\n",(0,t.jsx)(n.h3,{id:"is_placeholder",children:"is_placeholder"}),"\n",(0,t.jsx)(n.p,{children:"Checks whether a name is a valid placeholder"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Required Arguments"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"placeholder"}),": A string for the placeholder name"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Returns:"})," A boolean for whether the placeholder name is valid"]}),"\n",(0,t.jsx)(n.h3,{id:"get_placeholder_value",children:"get_placeholder_value"}),"\n",(0,t.jsx)(n.p,{children:"Gets the value of a placeholder. USE WITH CAUTION. Do not use the return value directly in a SQL query since that could be prone to SQL injection"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Required Arguments"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"placeholder"}),": A string for the placeholder name"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Returns:"})," Returns the value of the placeholder (can by any type) or None if the placeholder doesn't exist"]}),"\n",(0,t.jsx)(n.h3,{id:"run_external_sql",children:"run_external_sql"}),"\n",(0,t.jsx)(n.p,{children:"Runs SQL query on an external database."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Required Arguments:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"sql"}),": A string for the SQL query to run on the external database"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Optional Keyword Arguments:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"connection_name"}),": A string for the connection name of the external database. If unspecified (or None), the default connection name is used"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Returns:"})," A pandas dataframe."]}),"\n",(0,t.jsx)(n.h3,{id:"run_sql_on_dataframes",children:"run_sql_on_dataframes"}),"\n",(0,t.jsx)(n.p,{children:"Runs SQL queries on pandas dataframes."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Required Arguments:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"query"}),": A string for the SQL query to run on pandas dataframes (using sqlite or duckdb dialect depending on project settings)"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Optional Keyword Arguments:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"dataframes"}),": A dictionary of pandas dataframes by table name that the SQL query refers to","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:'If unspecified (or None), the pandas dataframes and names are the dependent model names defined in the "dependencies" function of the Python model'}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Returns:"})," A pandas dataframe."]})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>a});var r=s(96540);const t={},l=r.createContext(t);function i(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);