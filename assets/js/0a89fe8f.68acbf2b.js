"use strict";(self.webpackChunksquirrels_docs=self.webpackChunksquirrels_docs||[]).push([[474],{416:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>o});const l=JSON.parse('{"id":"docs/concepts/project","title":"Project Structure","description":"The following are the full set of files and folders in a Squirrels project with pre-defined names. All files and folders are optional except [squirrels.yml].","source":"@site/docs/docs/concepts/project.md","sourceDirName":"docs/concepts","slug":"/docs/concepts/project","permalink":"/docs/docs/concepts/project","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"docs","previous":{"title":"Concepts","permalink":"/docs/docs/concepts"},"next":{"title":"About squirrels.yml","permalink":"/docs/docs/concepts/squirrels-yml"}}');var n=s(4848),r=s(8453);const i={},d="Project Structure",c={},o=[];function a(e){const t={a:"a",code:"code",h1:"h1",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"project-structure",children:"Project Structure"})}),"\n",(0,n.jsxs)(t.p,{children:["The following are the full set of files and folders in a Squirrels project with pre-defined names. All files and folders are optional except ",(0,n.jsx)(t.a,{href:"./squirrels-yml",children:"squirrels.yml"}),"."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"my-squirrels-project/\n\u251c\u2500 macros\n\u2502   \u2514\u2500 ...             # Jinja macro files for SQL templates\n\u251c\u2500 models\n\u2502   \u251c\u2500 builds\n\u2502   \u2502   \u2514\u2500 ...         # SQL or Python files for build models\n\u2502   \u251c\u2500 dbviews\n\u2502   \u2502   \u2514\u2500 ...         # SQL files for database view models\n\u2502   \u251c\u2500 federates\n\u2502   \u2502   \u2514\u2500 ...         # SQL or Python files for federate models\n\u2502   \u2514\u2500 sources.yml     # Configuration for sources\n\u251c\u2500 pyconfigs\n\u2502   \u251c\u2500 connections.py  # Database connection configuration\n\u2502   \u251c\u2500 parameters.py   # Widget parameter definitions\n\u2502   \u251c\u2500 context.py      # Parameter processing logic\n\u2502   \u2514\u2500 user.py         # User authentication configuration\n\u251c\u2500 seeds\n\u2502   \u2514\u2500 ...             # CSV and YAML files for seed data\n\u251c\u2500 dashboards\n\u2502   \u2514\u2500 ...             # Dashboard configuration files\n\u251c\u2500 sqrl_packages\n\u2502   \u2514\u2500 ...             # Git projects used as package dependencies\n\u251c\u2500 target\n\u2502   \u2514\u2500 ...             # Generated output files\n\u251c\u2500 logs\n\u2502   \u2514\u2500 squirrels.log   # Application logs\n\u251c\u2500 .env\n\u251c\u2500 .env.example\n\u251c\u2500 .gitignore\n\u251c\u2500 duckdb_init.sql\n\u2514\u2500 squirrels.yml\n"})}),"\n",(0,n.jsxs)(t.p,{children:["At the minimum, all Squirrels projects contain a ",(0,n.jsx)(t.a,{href:"./squirrels-yml",children:"squirrels.yml"})," file for project configurations. In addition, a Squirrels project may also include the following resources:"]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Resource"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Ignored by git"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.a,{href:"./macros",children:"macros/"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"N"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Contains Jinja macro files for SQL templates"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.a,{href:"./models-build",children:"models/builds/"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"N"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Data models that build static tables in the embedded database"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.a,{href:"./models-dbview",children:"models/dbviews/"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"N"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Data models that run against an external database"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.a,{href:"./models-federate",children:"models/federates/"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"N"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Data models that join together one or more other models using an embedded database"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.a,{href:"./models-source",children:"models/sources.yml"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"N"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Configuration for source models that connect to external data sources"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.a,{href:"./connections",children:"pyconfigs/connections.py"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"N"}),(0,n.jsxs)(t.td,{style:{textAlign:"left"},children:["Specifies a set of database connections as SQLAlchemy engines that the project uses in Python. Only needed if not specified already in YAML in the ",(0,n.jsx)(t.a,{href:"./squirrels-yml",children:"squirrels.yml"})," file"]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.a,{href:"./parameters",children:"pyconfigs/parameters.py"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"N"}),(0,n.jsxs)(t.td,{style:{textAlign:"left"},children:["Specifies a set of widget parameters (in Python) for datasets to use, typically used if the widget parameters are not specified in the ",(0,n.jsx)(t.a,{href:"./squirrels-yml",children:"squirrels.yml"})," file (in YAML, which can be more verbose)"]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.a,{href:"./context",children:"pyconfigs/context.py"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"N"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:'Python script that processes real-time parameter selections into meaningful Python variables (or "context variables") that can be used by models'})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.a,{href:"./user",children:"pyconfigs/user.py"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"N"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Lets you create your own user model which affects the user management of the Squirrels application"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.a,{href:"./models-seed",children:"seeds/"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"N"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Contains CSV and YAML files for seed data that can be loaded into the embedded database"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.a,{href:"./dashboards",children:"dashboards/"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"N"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Contains dashboard configuration files"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.a,{href:"./environment",children:".env"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Y"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Local environment variables"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.a,{href:"./environment",children:".env.example"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"N"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Example environment variables file for reference"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"duckdb_init.sql"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Y"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"SQL file that initializes the embedded DuckDB database"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"sqrl_packages/"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Y"}),(0,n.jsxs)(t.td,{style:{textAlign:"left"},children:["Git projects used as package dependencies (downloaded with ",(0,n.jsx)(t.a,{href:"../../references/cli/deps",children:"sqrl deps"}),") are stored here"]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"target/"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Y"}),(0,n.jsxs)(t.td,{style:{textAlign:"left"},children:["All output files generated by Squirrels (such as compiled SQL files from ",(0,n.jsx)(t.a,{href:"../../references/cli/compile",children:"sqrl compile"}),") are created here"]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"logs/"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Y"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Contains application logs, with squirrels.log as the default log file"})]})]})]}),"\n",(0,n.jsx)(t.p,{children:"You may also add other folders/files in your Squirrels project that's not referenced directly by the framework, but may be referenced by existing Squirrels files."})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},8453:(e,t,s)=>{s.d(t,{R:()=>i,x:()=>d});var l=s(6540);const n={},r=l.createContext(n);function i(e){const t=l.useContext(r);return l.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),l.createElement(r.Provider,{value:t},e.children)}}}]);