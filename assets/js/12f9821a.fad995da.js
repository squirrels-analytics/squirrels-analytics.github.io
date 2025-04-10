"use strict";(self.webpackChunksquirrels_docs=self.webpackChunksquirrels_docs||[]).push([[4237],{253:(e,s,l)=>{l.r(s),l.d(s,{assets:()=>c,contentTitle:()=>t,default:()=>o,frontMatter:()=>n,metadata:()=>r,toc:()=>a});const r=JSON.parse('{"id":"references/cli/get-file","title":"sqrl get-file","description":"The get-file command retrieves sample files for your Squirrels project. If the file already exists, it will be suffixed with a timestamp.","source":"@site/docs/references/cli/get-file.md","sourceDirName":"references/cli","slug":"/references/cli/get-file","permalink":"/docs/references/cli/get-file","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"references","previous":{"title":"sqrl new","permalink":"/docs/references/cli/new"},"next":{"title":"sqrl deps","permalink":"/docs/references/cli/deps"}}');var i=l(4848),d=l(8453);const n={},t="sqrl get-file",c={},a=[{value:"Usage",id:"usage",level:2},{value:"Available Files",id:"available-files",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2}];function h(e){const s={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.header,{children:(0,i.jsx)(s.h1,{id:"sqrl-get-file",children:"sqrl get-file"})}),"\n",(0,i.jsxs)(s.p,{children:["The ",(0,i.jsx)(s.code,{children:"get-file"})," command retrieves sample files for your Squirrels project. If the file already exists, it will be suffixed with a timestamp."]}),"\n",(0,i.jsx)(s.h2,{id:"usage",children:"Usage"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:"sqrl get-file <file_name> [options]\n"})}),"\n",(0,i.jsx)(s.h2,{id:"available-files",children:"Available Files"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"File Name"}),(0,i.jsx)(s.th,{children:"Description"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:".env"})}),(0,i.jsxs)(s.td,{children:["Get sample ",(0,i.jsx)(s.code,{children:".env"})," and ",(0,i.jsx)(s.code,{children:".env.example"})," files"]})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:".gitignore"})}),(0,i.jsxs)(s.td,{children:["Get a sample ",(0,i.jsx)(s.code,{children:".gitignore"})," file"]})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"squirrels.yml"})}),(0,i.jsxs)(s.td,{children:["Get a sample ",(0,i.jsx)(s.code,{children:"squirrels.yml"})," file"]})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"user.py"})}),(0,i.jsxs)(s.td,{children:["Get a sample ",(0,i.jsx)(s.code,{children:"user.py"})," file"]})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"connections.py"})}),(0,i.jsxs)(s.td,{children:["Get a sample ",(0,i.jsx)(s.code,{children:"connections.py"})," file"]})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"parameters.py"})}),(0,i.jsxs)(s.td,{children:["Get a sample ",(0,i.jsx)(s.code,{children:"parameters.py"})," file"]})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"context.py"})}),(0,i.jsxs)(s.td,{children:["Get a sample ",(0,i.jsx)(s.code,{children:"context.py"})," file"]})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"macros_example.sql"})}),(0,i.jsxs)(s.td,{children:["Get a sample ",(0,i.jsx)(s.code,{children:"macros_example.sql"})," file"]})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"sources.yml"})}),(0,i.jsxs)(s.td,{children:["Get a sample ",(0,i.jsx)(s.code,{children:"sources.yml"})," file"]})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"build_example"})}),(0,i.jsx)(s.td,{children:"Get a sample build model file"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"dbview_example"})}),(0,i.jsx)(s.td,{children:"Get a sample dbview model file"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"federate_example"})}),(0,i.jsx)(s.td,{children:"Get a sample federate model file"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"dashboard_example"})}),(0,i.jsx)(s.td,{children:"Get a sample dashboard file"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"expenses.db"})}),(0,i.jsx)(s.td,{children:"Get the sample SQLite database on expenses"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"weather.db"})}),(0,i.jsx)(s.td,{children:"Get the sample SQLite database on weather"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"seed_categories"})}),(0,i.jsx)(s.td,{children:"Get the sample seed files for categories lookup"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"seed_subcategories"})}),(0,i.jsx)(s.td,{children:"Get the sample seed files for subcategories lookup"})]})]})]}),"\n",(0,i.jsx)(s.h2,{id:"options",children:"Options"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Option"}),(0,i.jsx)(s.th,{children:"Description"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"--format {sql,py}"})}),(0,i.jsx)(s.td,{children:"Create model as sql (default) or python file. Only applicable for build and federate model files"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"--no-connections"})}),(0,i.jsx)(s.td,{children:"Exclude the connections section from squirrels.yml"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"--parameters"})}),(0,i.jsx)(s.td,{children:"Include the parameters section in squirrels.yml"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"--dashboards"})}),(0,i.jsx)(s.td,{children:"Include the dashboards section in squirrels.yml"})]})]})]}),"\n",(0,i.jsx)(s.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsxs)(s.p,{children:["Get sample ",(0,i.jsx)(s.code,{children:".env"})," and ",(0,i.jsx)(s.code,{children:".env.example"})," files:"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:"sqrl get-file .env\n"})}),"\n",(0,i.jsx)(s.p,{children:"Get a sample build model in Python:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:"sqrl get-file build_example --format py\n"})}),"\n",(0,i.jsxs)(s.p,{children:["Get a sample ",(0,i.jsx)(s.code,{children:"squirrels.yml"})," with parameters section:"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:"sqrl get-file squirrels.yml --parameters\n"})}),"\n",(0,i.jsx)(s.h2,{id:"notes",children:"Notes"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"If a file already exists, a new file will be created with a timestamp suffix"}),"\n",(0,i.jsxs)(s.li,{children:["The ",(0,i.jsx)(s.code,{children:".env"})," file contains sensitive information and should not be committed to version control"]}),"\n",(0,i.jsx)(s.li,{children:"Build and federate model files can be created in either SQL or Python format (dbview models are always SQL)"}),"\n",(0,i.jsx)(s.li,{children:"Getting a sample file can be useful to enhance existing projects with new file types"}),"\n"]})]})}function o(e={}){const{wrapper:s}={...(0,d.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},8453:(e,s,l)=>{l.d(s,{R:()=>n,x:()=>t});var r=l(6540);const i={},d=r.createContext(i);function n(e){const s=r.useContext(d);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function t(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:n(e.components),r.createElement(d.Provider,{value:s},e.children)}}}]);