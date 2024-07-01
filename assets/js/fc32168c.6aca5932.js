"use strict";(self.webpackChunksquirrels_docs=self.webpackChunksquirrels_docs||[]).push([[6548],{7979:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>t,metadata:()=>d,toc:()=>c});var o=s(5893),r=s(1151);const t={},i="Python Models",d={id:"docs/topics/models-python",title:"Python Models",description:"Similar to [SQL models], all Python model files must be in the models/dbviews/ or models/federates/ folder, and use the .py extension. There is actually no difference in functionality between Python models in either folder. The folder you choose for each Python model is simply personal preference based on its purpose.",source:"@site/docs/docs/topics/models-python.md",sourceDirName:"docs/topics",slug:"/docs/topics/models-python",permalink:"/docs/docs/topics/models-python",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"SQL Models",permalink:"/docs/docs/topics/models-sql"},next:{title:"SQL Placeholders",permalink:"/docs/docs/topics/placeholders"}},l={},c=[{value:"File Contents",id:"file-contents",level:2},{value:"Input Arguments",id:"input-arguments",level:2},{value:"Sharing Code Across Models",id:"sharing-code-across-models",level:2}];function a(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"python-models",children:"Python Models"}),"\n",(0,o.jsxs)(n.p,{children:["Similar to ",(0,o.jsx)(n.a,{href:"./models-sql",children:"SQL models"}),", all Python model files must be in the ",(0,o.jsx)(n.code,{children:"models/dbviews/"})," or ",(0,o.jsx)(n.code,{children:"models/federates/"})," folder, and use the ",(0,o.jsx)(n.strong,{children:".py"})," extension. There is actually no difference in functionality between Python models in either folder. The folder you choose for each Python model is simply personal preference based on its purpose."]}),"\n",(0,o.jsxs)(n.p,{children:["You can use the ",(0,o.jsx)(n.a,{href:"../../references/cli/init",children:"sqrl init"})," command to create example Python models:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"sqrl init --core --dbview py --federate py\n"})}),"\n",(0,o.jsx)(n.h2,{id:"file-contents",children:"File Contents"}),"\n",(0,o.jsxs)(n.p,{children:["All Python model files must contain a ",(0,o.jsx)(n.strong,{children:"main"})," function with a ",(0,o.jsx)(n.strong,{children:"sqrl"})," argument of type ",(0,o.jsx)(n.a,{href:"../../references/python/arguments/ModelArgs",children:"ModelArgs"})," and return a pandas dataframe. This may look something like:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"def main(sqrl: sr.ModelArgs) -> pd.DataFrame:\n    ...\n    return df\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Python model files can also contain a ",(0,o.jsx)(n.strong,{children:"dependencies"})," function with a ",(0,o.jsx)(n.strong,{children:"sqrl"})," argument of type ",(0,o.jsx)(n.a,{href:"../../references/python/arguments/ModelDepsArgs",children:"ModelDepsArgs"})," and return a list of model names that the Python model depends on. This may look something like:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'def dependencies(sqrl: sr.ModelDepsArgs) -> Iterable[str]:\n    ...\n    return ["my_dependent_model"]\n'})}),"\n",(0,o.jsxs)(n.p,{children:["Similar to how SQL models have to compile first before running, you can think of the ",(0,o.jsx)(n.strong,{children:"dependencies"})," function as compiling the Python model and the ",(0,o.jsx)(n.strong,{children:"main"})," function as running the Python model. In a DAG of models, the ",(0,o.jsx)(n.strong,{children:"dependencies"})," function runs in upstream order, and the ",(0,o.jsx)(n.strong,{children:"main"})," function runs in downstream order."]}),"\n",(0,o.jsx)(n.h2,{id:"input-arguments",children:"Input Arguments"}),"\n",(0,o.jsxs)(n.p,{children:["Both ",(0,o.jsx)(n.strong,{children:"sqrl"})," arguments of type ",(0,o.jsx)(n.a,{href:"../../references/python/arguments/ModelDepsArgs",children:"ModelDepsArgs"})," and ",(0,o.jsx)(n.a,{href:"../../references/python/arguments/ModelArgs",children:"ModelArgs"})," have access to the same member variables as the ",(0,o.jsx)(n.strong,{children:"sqrl"})," argument in the ",(0,o.jsx)(n.a,{href:"./context",children:"context.py"})," file (",(0,o.jsx)(n.strong,{children:"sqrl.prms"}),", ",(0,o.jsx)(n.strong,{children:"sqrl.user"}),", ",(0,o.jsx)(n.strong,{children:"sqrl.traits"}),", etc.)."]}),"\n",(0,o.jsxs)(n.p,{children:["Both also have access to the ",(0,o.jsx)(n.strong,{children:"sqrl.ctx"})," member variable, which lets you access dictionary values defined in ",(0,o.jsx)(n.a,{href:"./context",children:"context.py"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.strong,{children:"sqrl"})," argument of ",(0,o.jsx)(n.a,{href:"../../references/python/arguments/ModelArgs",children:"ModelArgs"})," also include a few additional methods and member variables not included in ",(0,o.jsx)(n.a,{href:"../../references/python/arguments/ModelDepsArgs",children:"ModelDepsArgs"}),". Two common ones include the ",(0,o.jsx)(n.strong,{children:"sqrl.connections"})," dictionary and the ",(0,o.jsx)(n.strong,{children:"sqrl.ref"})," method."]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["The ",(0,o.jsx)(n.strong,{children:"connections"})," dictionary contains database connection names as keys and SQLAlchemy engines as values. More details on defining database connections can be found in ",(0,o.jsx)(n.a,{href:"./database",children:"Database Connections"})," page."]}),"\n",(0,o.jsxs)(n.li,{children:["The ",(0,o.jsx)(n.strong,{children:"ref"})," method takes a single string argument for model name and returns the pandas dataframe for that model. The model name must be defined in the ",(0,o.jsx)(n.strong,{children:"dependencies"})," function."]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["More details can be found in the Python reference for ",(0,o.jsx)(n.a,{href:"../../references/python/arguments/ModelDepsArgs",children:"ModelDepsArgs"})," and ",(0,o.jsx)(n.a,{href:"../../references/python/arguments/ModelArgs",children:"ModelArgs"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"sharing-code-across-models",children:"Sharing Code Across Models"}),"\n",(0,o.jsx)(n.p,{children:"Just like importing/including macros in SQL models, you can import Python modules stored anywhere in your project or environment."}),"\n",(0,o.jsxs)(n.p,{children:["Within a project, suppose you have the Python function below defined in ",(0,o.jsx)(n.code,{children:"lib/mymodule.py"})," relative to the project root:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"def myfunction(...):\n    ...\n    return ...\n"})}),"\n",(0,o.jsx)(n.p,{children:"Then you can import the function at the top of any Python file:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"from lib import mymodule as m\n...\nmyvar = m.myfunction(...)\n"})}),"\n",(0,o.jsxs)(n.p,{children:["It's also easy to share Python code across Squirrels projects. If you have a Python module in a git project downloaded with ",(0,o.jsx)(n.code,{children:"dbt deps"}),', you can import it from "sqrl_packages". Any Python package installed into your Python environment can be imported as well.']})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>d,a:()=>i});var o=s(7294);const r={},t=o.createContext(r);function i(e){const n=o.useContext(t);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(t.Provider,{value:n},e.children)}}}]);