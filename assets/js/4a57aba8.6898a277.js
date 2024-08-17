"use strict";(self.webpackChunksquirrels_docs=self.webpackChunksquirrels_docs||[]).push([[849],{1778:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var n=r(5893),t=r(1151);const i={},o="sqrl run",a={id:"references/cli/run",title:"sqrl run",description:"The sqrl run command is activates the API server to interact with the datasets, such as retrieving their parameters and results.",source:"@site/versioned_docs/version-0.3.x/references/cli/run.md",sourceDirName:"references/cli",slug:"/references/cli/run",permalink:"/docs/references/cli/run",draft:!1,unlisted:!1,tags:[],version:"0.3.x",frontMatter:{},sidebar:"references",previous:{title:"sqrl compile",permalink:"/docs/references/cli/compile"},next:{title:"Python Classes",permalink:"/docs/references/python"}},l={},c=[];function h(e){const s={a:"a",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"sqrl-run",children:"sqrl run"}),"\n",(0,n.jsxs)(s.p,{children:["The ",(0,n.jsx)(s.code,{children:"sqrl run"})," command is activates the API server to interact with the datasets, such as retrieving their parameters and results."]}),"\n",(0,n.jsxs)(s.p,{children:["The run command provides the following options (this can be found from ",(0,n.jsx)(s.code,{children:"sqrl run -h"}),"):"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"usage: sqrl run [-h] [--no-cache] [--host HOST] [--port PORT]\n\noptional arguments:\n  -h, --help   Show this help message and exit\n  --no-cache   Do not cache any api results\n  --host HOST  The host to run on\n  --port PORT  The port to run on\n"})}),"\n",(0,n.jsxs)(s.p,{children:["The default host is ",(0,n.jsx)(s.code,{children:"127.0.0.1"})," and the default port is ",(0,n.jsx)(s.code,{children:"4465"}),". Behind the scenes, Squirrels run a FastAPI app. While running, you can access:"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"http://127.0.0.1:4465",children:"http://127.0.0.1:4465"})," or ",(0,n.jsx)(s.a,{href:"http://localhost:4465",children:"http://localhost:4465"})," to interact with the Squirrels Testing UI"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"http://127.0.0.1:4465/docs",children:"http://127.0.0.1:4465/docs"})," or ",(0,n.jsx)(s.a,{href:"http://localhost:4465/docs",children:"http://localhost:4465/docs"})," to see the auto-generated OpenAPI docs"]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:'There are additional paths that return JSON results. Assume you have a project named "my_proj" with a sample dataset named "my_ds". You can use the following REST APIs to retrieve the results:'}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["The Projects Catalog API","\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Path"}),": GET ",(0,n.jsx)(s.strong,{children:"/squirrels-v0"})]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Description"}),": Returns list of projects and list of major versions for each project. When running ",(0,n.jsx)(s.code,{children:"sqrl run"}),' locally in a single project, this only provides one project ("my_proj") and one major version. In the future, a platform may be provided for hosting Squirrels projects where the platform will come with a catalog API that lists all projects deployed within the account (with a similar API interface as this one).']}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["The Login API","\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Path"}),": POST ",(0,n.jsx)(s.strong,{children:"/squirrels-v0/my-proj/v1/token"})]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Description"}),": Given username and password, provides an auth token and expiry time if the credentials are valid."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["The Datasets Catalog API","\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Path"}),": GET ",(0,n.jsx)(s.strong,{children:"/squirrels-v0/my-proj/v1/datasets"})]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Description"}),": Given project name and major version in path, returns the list of datasets available. Only public datasets are shown if auth token is not provided."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["The Parameters API","\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Path"}),": GET/POST ",(0,n.jsx)(s.strong,{children:"/squirrels-v0/my-proj/v1/dataset/my-ds/parameters"})]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Description"}),": Provides the widget parameter properties for the dataset. Can provide selected value of a widget parameter (in query parameters if GET request or body if POST request) to show cascaded options of dependent parameters."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["The Dataset Result API","\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Path"}),": GET/POST ",(0,n.jsx)(s.strong,{children:"/squirrels-v0/my-proj/v1/dataset/my-ds"})]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Description"}),": Provides the tabular results of the dataset. Selected values of widget parameters can be provided (through query parameters if GET request or body if POST request)."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["More details on these API endpoints can be found at ",(0,n.jsx)(s.a,{href:"../../docs/frontend/rest-api",children:"REST API Types"}),"."]}),"\n",(0,n.jsx)(s.p,{children:"To shut down the API server, press Ctrl + C."})]})}function d(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},1151:(e,s,r)=>{r.d(s,{Z:()=>a,a:()=>o});var n=r(7294);const t={},i=n.createContext(t);function o(e){const s=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);