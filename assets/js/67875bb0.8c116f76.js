"use strict";(self.webpackChunksquirrels_docs=self.webpackChunksquirrels_docs||[]).push([[9142],{10069:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"docs/topics/context","title":"Context File","description":"The context file (pyconfigs/context.py) is where you can process runtime inputs, such as (but not limited to) parameter selections, into meaningful variables that can be used in the data models. You can get a sample context file by running:","source":"@site/versioned_docs/version-0.4.x/docs/topics/context.md","sourceDirName":"docs/topics","slug":"/docs/topics/context","permalink":"/docs/docs/topics/context","draft":false,"unlisted":false,"tags":[],"version":"0.4.x","frontMatter":{},"sidebar":"docs","previous":{"title":"Widget Parameters","permalink":"/docs/docs/topics/parameters"},"next":{"title":"SQL Models","permalink":"/docs/docs/topics/models-sql"}}');var i=n(74848),o=n(28453);const r={},a="Context File",c={},l=[];function d(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"context-file",children:"Context File"})}),"\n",(0,i.jsxs)(t.p,{children:["The context file (",(0,i.jsx)(t.code,{children:"pyconfigs/context.py"}),") is where you can process runtime inputs, such as (but not limited to) parameter selections, into meaningful variables that can be used in the data models. You can get a sample context file by running:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"sqrl get-file context.py\n"})}),"\n",(0,i.jsxs)(t.p,{children:["The file contains a single ",(0,i.jsx)(t.strong,{children:"main"})," function with the arguments ",(0,i.jsx)(t.strong,{children:"ctx"})," and ",(0,i.jsx)(t.strong,{children:"sqrl"}),"."]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"ctx"}),' (short for "context) is the output dictionary that is written to in the function. The keys should be strings, and the values can be anything.']}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"sqrl"})," is an object of type ",(0,i.jsx)(t.a,{href:"../../references/python/arguments/ContextArgs",children:"ContextArgs"})," that contains inputs/utilities you may choose to use. Some examples include:","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["The ",(0,i.jsx)(t.code,{children:"sqrl.prms"})," attribute, a dictionary for parameter names to the associated Parameter object."]}),"\n",(0,i.jsxs)(t.li,{children:["The ",(0,i.jsx)(t.code,{children:"sqrl.user"})," attribute, the authorized user if authenticated else None. The attributes for the user can be defined in the User model in ",(0,i.jsx)(t.code,{children:"pyconfigs/auth.py"})," (more details can be found at ",(0,i.jsx)(t.a,{href:"./auth",children:"Authentication"}),")."]}),"\n",(0,i.jsxs)(t.li,{children:["The ",(0,i.jsx)(t.code,{children:"sqrl.traits"})," attributes, a dictionary of the dataset traits (defined in ",(0,i.jsx)(t.a,{href:"./project-file",children:"squirrels.yml"}),") for the running dataset"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["This file is run for every dataset request, and this same file is used for all datasets. Thus, it is important to use ",(0,i.jsx)(t.em,{children:"if statements"})," to avoid running blocks of code that don't apply to the situation (for instance, context variables for parameters that don't exist for the dataset)."]}),"\n",(0,i.jsx)(t.p,{children:"Although it is often possible to define variables similarly in Jinja (with reusable macros), IDEs tend to have better support for providing auto-fill suggestions in Python than in Jinja. Not to mention, there are many situations where it's much easier to process variables in Python than in Jinja."}),"\n",(0,i.jsxs)(t.p,{children:["The following is a sample ",(0,i.jsx)(t.strong,{children:"main"}),' function in the "context.py" file.']}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:'def main(ctx: dict[str, Any], sqrl: sr.ContextArgs) -> None:\n    if sqrl.param_exists("group_by"):\n        group_by_param: sr.MultiSelectParameter = sqrl.prms["group_by"]\n        dimension_columns: list[str] = group_by_param.get_selected("columns")\n        ctx["group_by_cols"] = ",".join(dimension_columns)\n'})}),"\n",(0,i.jsxs)(t.admonition,{type:"tip",children:[(0,i.jsx)(t.p,{children:"If you wish to use a custom Python function in Jinja, it's possible to do so by setting a context variable to the function! This is illustrated below:"}),(0,i.jsxs)(t.p,{children:["In ",(0,i.jsx)(t.code,{children:"context.py"}),":"]}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:'def my_func(args):\n    ...\n\nctx["my_function"] = my_func\n'})}),(0,i.jsx)(t.p,{children:"In Jinja:"}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-jinja",children:'{{ ctx.my_function("my_args") }}\n'})})]})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>a});var s=n(96540);const i={},o=s.createContext(i);function r(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);