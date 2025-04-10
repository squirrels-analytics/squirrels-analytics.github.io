"use strict";(self.webpackChunksquirrels_docs=self.webpackChunksquirrels_docs||[]).push([[9099],{583:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"references/python/project/SquirrelsProject","title":"SquirrelsProject","description":"This class is used to interact with a Squirrels project from Python.","source":"@site/versioned_docs/version-0.4.x/references/python/project/SquirrelsProject.md","sourceDirName":"references/python/project","slug":"/references/python/project/SquirrelsProject","permalink":"/docs/0.4.x/references/python/project/SquirrelsProject","draft":false,"unlisted":false,"tags":[],"version":"0.4.x","frontMatter":{},"sidebar":"references","previous":{"title":"WrongPassword","permalink":"/docs/0.4.x/references/python/user_base/WrongPassword"},"next":{"title":"DayOfWeek (enum)","permalink":"/docs/0.4.x/references/python/dateutils/DayOfWeek"}}');var n=r(4848),o=r(8453);const i={},l="SquirrelsProject",a={},d=[{value:"Constructor",id:"constructor",level:3},{value:"Attributes",id:"attributes",level:2},{value:"User",id:"user",level:3},{value:"Methods",id:"methods",level:2},{value:"compile",id:"compile",level:3},{value:"seed",id:"seed",level:3},{value:"dataset",id:"dataset",level:3},{value:"dashboard",id:"dashboard",level:3},{value:"close",id:"close",level:3}];function c(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.header,{children:(0,n.jsx)(s.h1,{id:"squirrelsproject",children:"SquirrelsProject"})}),"\n",(0,n.jsx)(s.p,{children:"This class is used to interact with a Squirrels project from Python."}),"\n",(0,n.jsx)(s.p,{children:"For example, you can create a SquirrelsProject object in Python as such:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-python",children:'from squirrels import SquirrelsProject\n\nsqrl = SquirrelsProject(filepath="path/to/squirrels/project/")\n'})}),"\n",(0,n.jsx)(s.p,{children:"And then call methods on the SquirrelsProject object to perform various operations."}),"\n",(0,n.jsxs)(s.p,{children:["Can be found in the classpath ",(0,n.jsx)(s.code,{children:"squirrels.project.SquirrelsProject"})," or ",(0,n.jsx)(s.code,{children:"squirrels.SquirrelsProject"}),"."]}),"\n",(0,n.jsx)(s.h3,{id:"constructor",children:"Constructor"}),"\n",(0,n.jsx)(s.p,{children:"Creates a SquirrelsProject object."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Required Arguments:"})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"filepath"}),": A string for the path to the Squirrels project folder."]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"attributes",children:"Attributes"}),"\n",(0,n.jsx)(s.p,{children:"Attributes of the SquirrelsProject object."}),"\n",(0,n.jsx)(s.h3,{id:"user",children:"User"}),"\n",(0,n.jsxs)(s.p,{children:["A reference to the User class defined in ",(0,n.jsx)(s.code,{children:"auth.py"})," of the Squirrels project. If no ",(0,n.jsx)(s.code,{children:"auth.py"})," file exist, then it's a reference to the default ",(0,n.jsx)(s.a,{href:"../user_base/User",children:"User"})," class that comes with Squirrels."]}),"\n",(0,n.jsx)(s.p,{children:"As an example, you can create a user object as such:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-python",children:'user = sqrl.User(username="username")\n'})}),"\n",(0,n.jsx)(s.h2,{id:"methods",children:"Methods"}),"\n",(0,n.jsx)(s.p,{children:"Methods that can be invoked from the SquirrelsProject object."}),"\n",(0,n.jsx)(s.h3,{id:"compile",children:"compile"}),"\n",(0,n.jsx)(s.p,{children:'Async method to compile the SQL templates into files in the "target/" folder. Same functionality as the "sqrl compile" CLI.'}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Optional Keyword Arguments:"})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"dataset"}),": A string for the name of the dataset to compile. Ignored if ",(0,n.jsx)(s.code,{children:"do_all_datasets"})," argument is True, but required (i.e., cannot be None) if ",(0,n.jsx)(s.code,{children:"do_all_datasets"})," is False. Default is None."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"do_all_datasets"}),": A boolean for whether to compile all datasets. If True, the ",(0,n.jsx)(s.code,{children:"dataset"})," argument is ignored. Default is False."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"selected_model"}),": A string for the name of the model to compile. If specified, the compiled SQL query is also printed in the terminal. If None, all models for the selected dataset are compiled. Default is None."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"test_set"}),": A string for the name of the test set to compile with. If None, the default test set is used (which can vary by dataset). Ignored if ",(0,n.jsx)(s.code,{children:"do_all_test_sets"})," argument is True. Default is None."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"do_all_test_sets"}),": A boolean for whether to compile all applicable test sets for the selected dataset(s). If True, the ",(0,n.jsx)(s.code,{children:"test_set"})," argument is ignored. Default is False."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"runquery"}),": A boolean for whether to run all compiled queries and save each result as a CSV file. If True and ",(0,n.jsx)(s.code,{children:"selected_model"})," is specified, all upstream models of the selected model is compiled as well. Default is False."]}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Returns:"})," None"]}),"\n",(0,n.jsx)(s.h3,{id:"seed",children:"seed"}),"\n",(0,n.jsx)(s.p,{children:"Method to retrieve a seed as a pandas DataFrame given a seed name."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Required Arguments:"})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"name"}),": A string for the name of the seed to retrieve."]}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Returns:"})," A pandas DataFrame"]}),"\n",(0,n.jsx)(s.h3,{id:"dataset",children:"dataset"}),"\n",(0,n.jsx)(s.p,{children:"Async method to retrieve a dataset as a pandas DataFrame given parameter selections."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Required Arguments:"})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"dataset_name"}),": A string for the name of the dataset to retrieve."]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Optional Keyword Arguments:"})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"selections"}),": A dictionary of parameter selections to apply to the dataset. Optional, default is empty dictionary."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"user"}),": A User object to use for authentication. If None, no user is used. Default is None."]}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Returns:"})," A pandas DataFrame"]}),"\n",(0,n.jsx)(s.h3,{id:"dashboard",children:"dashboard"}),"\n",(0,n.jsx)(s.p,{children:"Async method to retrieve a dashboard given parameter selections."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Required Arguments:"})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"name"}),": The name of the dashboard to retrieve."]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Optional Keyword Arguments:"})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"selections"}),": A dictionary of parameter selections to apply to the dashboard. Optional, default is empty dictionary."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"user"}),": A User object to use for authentication. If None, no user is used. Default is None."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"dashboard_type"}),": Return type of the method (mainly used for type hints). For instance, provide PngDashboard if you want the return type to be a PngDashboard. Optional, default is squirrels.Dashboard."]}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Returns:"})," A Dashboard object, or a subclass of Dashboard (e.g., PngDashboard) based on the dashboard type specified by the ",(0,n.jsx)(s.code,{children:"dashboard_type"})," argument"]}),"\n",(0,n.jsx)(s.h3,{id:"close",children:"close"}),"\n",(0,n.jsx)(s.p,{children:"Use this method to deliberately close any database connections opened by the SquirrelsProject object."}),"\n",(0,n.jsx)(s.p,{children:"The database connections may still be opened again by other methods invoked on the SquirrelsProject object after this method is called."})]})}function h(e={}){const{wrapper:s}={...(0,o.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},8453:(e,s,r)=>{r.d(s,{R:()=>i,x:()=>l});var t=r(6540);const n={},o=t.createContext(n);function i(e){const s=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),t.createElement(o.Provider,{value:s},e.children)}}}]);