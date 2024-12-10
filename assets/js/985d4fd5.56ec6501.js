"use strict";(self.webpackChunksquirrels_docs=self.webpackChunksquirrels_docs||[]).push([[2852],{34175:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>l,frontMatter:()=>i,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"docs/topics/interact-in-python","title":"Interacting with Squirrels in Python","description":"You can interact with a Squirrels Project in Python (such as in a Jupyter Notebook or a Python script) by using the [SquirrelsProject] class from the squirrels library.","source":"@site/versioned_docs/version-0.4.x/docs/topics/interact-in-python.md","sourceDirName":"docs/topics","slug":"/docs/topics/interact-in-python","permalink":"/docs/docs/topics/interact-in-python","draft":false,"unlisted":false,"tags":[],"version":"0.4.x","frontMatter":{},"sidebar":"docs","previous":{"title":"Authentication","permalink":"/docs/docs/topics/auth"},"next":{"title":"Modify Dates with dateutils","permalink":"/docs/docs/topics/dateutils"}}');var n=s(74848),a=s(28453);const i={},o="Interacting with Squirrels in Python",d={},c=[{value:"Retrieving a Seed",id:"retrieving-a-seed",level:2},{value:"Retrieving a Dataset",id:"retrieving-a-dataset",level:2},{value:"Retrieving a Dashboard",id:"retrieving-a-dashboard",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"interacting-with-squirrels-in-python",children:"Interacting with Squirrels in Python"})}),"\n",(0,n.jsxs)(t.p,{children:["You can interact with a Squirrels Project in Python (such as in a Jupyter Notebook or a Python script) by using the ",(0,n.jsx)(t.a,{href:"../../references/python/project/SquirrelsProject",children:"SquirrelsProject"})," class from the squirrels library."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:'from squirrels import SquirrelsProject\n\nsqrl = SquirrelsProject(filepath="path/to/squirrels/project/")\n'})}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.a,{href:"../../references/python/project/SquirrelsProject",children:"SquirrelsProject"})," class takes an optional argument for the file path to the Squirrels project. If not provided, the current working directory is used."]}),"\n",(0,n.jsxs)(t.p,{children:["From here, you can use the ",(0,n.jsx)(t.a,{href:"../../references/python/project/SquirrelsProject",children:"SquirrelsProject"})," instance to call various methods such as retrieving a seed, dataset, or dashboard contained within the project."]}),"\n",(0,n.jsx)(t.p,{children:'After you are done with the project, you can choose to close it by calling the "close" method:'}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"sqrl.close()\n"})}),"\n",(0,n.jsx)(t.p,{children:"This can be useful if you wish to close all the database connections opened by the project."}),"\n",(0,n.jsx)(t.h2,{id:"retrieving-a-seed",children:"Retrieving a Seed"}),"\n",(0,n.jsxs)(t.p,{children:['The following example retrieves a seed called "seed_name" as a pandas DataFrame using the ',(0,n.jsx)(t.code,{children:"seed"})," method. The seed name is the name of the csv file without the .csv extension."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:'seed = sqrl.seed("seed_name")\n'})}),"\n",(0,n.jsx)(t.h2,{id:"retrieving-a-dataset",children:"Retrieving a Dataset"}),"\n",(0,n.jsxs)(t.p,{children:['The following example retrieves a dataset called "dataset_name" as a pandas DataFrame using the ',(0,n.jsx)(t.code,{children:"dataset"})," method. The ",(0,n.jsx)(t.code,{children:"dataset"})," method is an async method, so you must use the ",(0,n.jsx)(t.code,{children:"await"})," keyword."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:'user = sqrl.User.Create("username", custom_attribute="custom_value")\ndataset = await sqrl.dataset("dataset_name", selections={"param1": "option_id_1"}, user=user)\n'})}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"dataset"})," method takes optional arguments for parameter selections and user."]}),"\n",(0,n.jsxs)(t.p,{children:["For the ",(0,n.jsx)(t.code,{children:"selections"})," argument, any parameter not specified in the dictionary of selections will use the default value of the parameter. If the ",(0,n.jsx)(t.code,{children:"selections"})," argument is not provided, an empty dictionary is used."]}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"sqrl.User"})," is a direct reference to the User class defined in the ",(0,n.jsx)(t.a,{href:"./auth",children:"auth.py"})," file of the Squirrels project if it exists, or the default User class that comes with Squirrels. The ",(0,n.jsx)(t.code,{children:"user"})," argument of the ",(0,n.jsx)(t.code,{children:"dataset"})," method can take an instance of the User class which can be useful for datasets that require authentication or change behaviour based on the authenticated user. If the ",(0,n.jsx)(t.code,{children:"user"})," argument is not provided, it will not authenticate with any user."]}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsxs)(t.p,{children:["A common use case for the ",(0,n.jsx)(t.code,{children:"dataset"})," method is to call it in a Jupyter notebook to experiment with creating visualizations for ",(0,n.jsx)(t.a,{href:"./dashboards",children:"Squirrels dashboards"}),"."]})}),"\n",(0,n.jsx)(t.h2,{id:"retrieving-a-dashboard",children:"Retrieving a Dashboard"}),"\n",(0,n.jsxs)(t.p,{children:['The following example retrieves a dashboard called "dashboard_name" as a ',(0,n.jsx)(t.a,{href:"../../references/python/dashboards/Dashboard",children:"squirrels.Dashboard"})," instance using the ",(0,n.jsx)(t.code,{children:"dashboard"})," method. The ",(0,n.jsx)(t.code,{children:"dashboard"})," method is an async method, so you must use the ",(0,n.jsx)(t.code,{children:"await"})," keyword."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:'dashboard = await sqrl.dashboard("dashboard_name", dashboard_type=PngDashboard)\n'})}),"\n",(0,n.jsxs)(t.p,{children:["Just like the ",(0,n.jsx)(t.code,{children:"dataset"})," method, the ",(0,n.jsx)(t.code,{children:"dashboard"})," method also takes optional arguments for ",(0,n.jsx)(t.code,{children:"selections"})," and ",(0,n.jsx)(t.code,{children:"user"}),". This is not shown in the above example."]}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"dashboard"})," method also takes an optional argument for ",(0,n.jsx)(t.code,{children:"dashboard_type"})," to specify the dashboard class that the method returns (mainly useful for Python type hints). If not provided, the ",(0,n.jsx)(t.a,{href:"../../references/python/dashboards/Dashboard",children:"squirrels.Dashboard"})," class is used."]})]})}function l(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>i,x:()=>o});var r=s(96540);const n={},a=r.createContext(n);function i(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);