"use strict";(self.webpackChunksquirrels_docs=self.webpackChunksquirrels_docs||[]).push([[5939],{5656:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var n=s(5893),o=s(1151);const r={},i="SQL Placeholders",a={id:"docs/topics/placeholders",title:"SQL Placeholders",description:"Suppose you have a SQL query created in Python like this:",source:"@site/versioned_docs/version-0.3.x/docs/topics/placeholders.md",sourceDirName:"docs/topics",slug:"/docs/topics/placeholders",permalink:"/docs/docs/topics/placeholders",draft:!1,unlisted:!1,tags:[],version:"0.3.x",frontMatter:{},sidebar:"docs",previous:{title:"Python Models",permalink:"/docs/docs/topics/models-python"},next:{title:"Seeds",permalink:"/docs/docs/topics/seeds"}},l={},d=[{value:"Defining Placeholders",id:"defining-placeholders",level:2},{value:"Using Placeholders in Models",id:"using-placeholders-in-models",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"sql-placeholders",children:"SQL Placeholders"}),"\n",(0,n.jsx)(t.p,{children:"Suppose you have a SQL query created in Python like this:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:'description_pattern = f"%{description_keyword}%"\nquery = f"SELECT * FROM expenses WHERE description LIKE \'{description_pattern}\';"\n'})}),"\n",(0,n.jsxs)(t.p,{children:["If the variable ",(0,n.jsx)(t.code,{children:"description_keyword"}),' is a free-form text provided by the user, then this is a big problem since it would be possible for users to inject custom SQL queries with malicious intent. This problem is known as "SQL injection".']}),"\n",(0,n.jsxs)(t.p,{children:["Squirrels uses SQLAlchemy under the hood, and SQLAlchemy allows you to avoid SQL injection by using parameterized queries. With parameterized queries, instead of performing string substitution or concatenation to create the SQL query, you can use syntax like ",(0,n.jsx)(t.code,{children:":description_pattern"})," in the SQL query as placeholders for literal values."]}),"\n",(0,n.jsx)(t.p,{children:"For example, the query above would be rewritten like this:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:'query = "SELECT * FROM expenses WHERE description LIKE :description_pattern;"\n'})}),"\n",(0,n.jsxs)(t.p,{children:["In Squirrels, the ",(0,n.jsx)(t.code,{children:":description_pattern"}),' part is what we call "placeholders". The sections below mentions how to define placeholders and how to use them in a model.']}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsx)(t.p,{children:"Placeholders can only be used for literal values which are values that the SQL query treats as string, number, date, etc. Placeholders cannot be used for other parts of the SQL query such as column names."})}),"\n",(0,n.jsx)(t.h2,{id:"defining-placeholders",children:"Defining Placeholders"}),"\n",(0,n.jsxs)(t.p,{children:["Placeholders can be defined in the ",(0,n.jsx)(t.a,{href:"./context",children:"context.py"})," file using the ",(0,n.jsx)(t.code,{children:"set_placeholder"}),' method. The example below demonstrates setting a placeholder for text entered through a text parameter named "description_filter":']}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:'if sqrl.param_exists("description_filter"):\n    descript_param: sr.TextParameter = sqrl.prms["description_filter"]\n    desc_pattern = descript_param.get_entered_text().apply_percent_wrap()\n    sqrl.set_placeholder("desc_pattern", desc_pattern)\n'})}),"\n",(0,n.jsx)(t.p,{children:"Using placeholders with text parameters is a match made in heaven."}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"get_entered_text"}),' method of a text parameter object returns a special class object that contains the entered text as a private attribute that cannot be extracted. However, you can choose to use certain methods that\'s prefixed with "apply" (such as "apply_percent_wrap") to apply transformations on the embedded text value and return it as a new instance of the special class.']}),"\n",(0,n.jsxs)(t.p,{children:["The only way to interact with the embedded text value is by passing the special class object into ",(0,n.jsx)(t.code,{children:"set_placeholder"}),", which has the special ability to access the embedded text value as a string to be used with parameterized queries at model run time."]}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"set_placeholder"})," method can also be used with other types such as strings, numbers, dates, boolean, etc. For other widget parameters such as number parameters and date parameters, Squirrels gives you the flexibility to provide the selected value to models as either a context variable or a placeholder."]}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"set_placeholder"})," function is also available in the models files through Jinja. However, using it in the models files is not recommended since the placeholder would only apply to all downstream models, which can be confusing to work with."]})}),"\n",(0,n.jsx)(t.h2,{id:"using-placeholders-in-models",children:"Using Placeholders in Models"}),"\n",(0,n.jsxs)(t.p,{children:["Simply use the ",(0,n.jsx)(t.code,{children:":name"})," syntax (without any quotes) to refer to a placeholder in SQL models."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:"SELECT * FROM expenses \nWHERE description LIKE :description_pattern\n"})}),"\n",(0,n.jsxs)(t.p,{children:["If the SQL model is used for multiple datasets and only some of those datasets contain widget parameters to define the placeholder, then you can use the ",(0,n.jsx)(t.code,{children:"is_placeholder"})," method to only include the WHERE condition if the placeholder exists."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:'SELECT * FROM expenses \nWHERE true\n    {% if is_placeholder("description_pattern") -%} AND description LIKE :description_pattern {%- endif %}\n'})}),"\n",(0,n.jsxs)(t.p,{children:["Python models also have access to the ",(0,n.jsx)(t.code,{children:"is_placeholder"})," method, but unlike SQL models, they also have access to the ",(0,n.jsx)(t.code,{children:"get_placeholder_value"})," method to extract the value from a placeholder name. ",(0,n.jsx)(t.strong,{children:"USE THIS METHOD WITH CAUTION"}),", it should not be used to build SQL strings in the Python model."]}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsxs)(t.p,{children:["When compiling models using the ",(0,n.jsx)(t.a,{href:"../../references/cli/compile",children:"compile CLI"}),", the placeholders do not get substituted into the compiled SQL files. However, a ",(0,n.jsx)(t.code,{children:"placeholders.json"})," file is produced to show the dictionary of placeholder names to values."]})})]})}function h(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},1151:(e,t,s)=>{s.d(t,{Z:()=>a,a:()=>i});var n=s(7294);const o={},r=n.createContext(o);function i(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);