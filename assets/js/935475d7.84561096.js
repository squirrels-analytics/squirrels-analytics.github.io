"use strict";(self.webpackChunksquirrels_docs=self.webpackChunksquirrels_docs||[]).push([[4159],{7556:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>n,metadata:()=>i,toc:()=>l});var s=r(5893),a=r(1151);const n={},o="Parameter (abstract)",i={id:"references/python/parameters/Parameter",title:"Parameter (abstract)",description:'This page contains the common methods of all (or most) Parameter classes. This page is provided to avoid repeated text. The "Parameter" class is actually an abstract class that other Parameter classes extend on. Do not use this class directly.',source:"@site/versioned_docs/version-0.2.x/references/python/parameters/Parameter.md",sourceDirName:"references/python/parameters",slug:"/references/python/parameters/Parameter",permalink:"/docs/0.2.x/references/python/parameters/Parameter",draft:!1,unlisted:!1,tags:[],version:"0.2.x",frontMatter:{},sidebar:"references",previous:{title:"NumberRangeDataSource",permalink:"/docs/0.2.x/references/python/data_sources/NumberRangeDataSource"},next:{title:"SingleSelectParameter",permalink:"/docs/0.2.x/references/python/parameters/SingleSelectParameter"}},c={},l=[{value:"Static / Class Methods",id:"static--class-methods",level:2},{value:"Create",id:"create",level:3},{value:"CreateFromSource",id:"createfromsource",level:3}];function h(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"parameter-abstract",children:"Parameter (abstract)"}),"\n",(0,s.jsx)(t.p,{children:'This page contains the common methods of all (or most) Parameter classes. This page is provided to avoid repeated text. The "Parameter" class is actually an abstract class that other Parameter classes extend on. Do not use this class directly.'}),"\n",(0,s.jsx)(t.p,{children:"The Parameter classes are used in two ways:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["Creating a parameter in the ",(0,s.jsx)(t.a,{href:"../../../docs/topics/parameters",children:"parameters.py"})," file using a factory method (which are static methods)"]}),"\n",(0,s.jsxs)(t.li,{children:["Accessing attributes of selected parameter options in ",(0,s.jsx)(t.a,{href:"../../../docs/topics/context",children:"context.py"})," or data models, typically using non-static methods on a parameter object. For example, the code below demonstrates how this would be done in ",(0,s.jsx)(t.code,{children:"context.py"}),"."]}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:'if "my_ss_param" in prms:\n    my_ss_param: sr.SingleSelectParameter = prms["my_ss_param"]\n    ... # invoke some method on the parameter object "my_ss_param"\n'})}),"\n",(0,s.jsx)(t.h2,{id:"static--class-methods",children:"Static / Class Methods"}),"\n",(0,s.jsxs)(t.p,{children:["The definitions of the ",(0,s.jsx)(t.strong,{children:"Create"})," and ",(0,s.jsx)(t.strong,{children:"CreateFromSource"})," factory methods are very similar (if not, the same) between Parameter classes."]}),"\n",(0,s.jsx)(t.h3,{id:"create",children:"Create"}),"\n",(0,s.jsx)(t.p,{children:"Creates the configurations for a widget parameter by providing a list of the parameter option objects, and adds it to a pool of parameter configurations that datasets can pick from."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Required Arguments:"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"name"}),": A string for the name of the parameter"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"label"}),": A string for human-friendly display name for this parameter"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"all_options"}),": A sequence of ",(0,s.jsx)(t.a,{href:"../parameter_options/ParameterOption",children:"ParameterOption"})," instances for all parameter options associated to this parameter"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Optional Keyword Arguments:"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"is_hidden"}),": A boolean for whether the parameter is hidden in the response of the Parameters API. Default is False"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"user_attribute"}),": An optional string for the user attribute that may cascade the options for this parameter. If None, then the authorized user has no effect on the selectable parameter options. Default is None"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"parent_name"}),': An optional string for the name of the parameter (or "parent parameter") that may cascade the options for this parameter. If None, then other parameters have no effect on the selectable parameter options for this parameter. Default is None']}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Returns:"})," None"]}),"\n",(0,s.jsx)(t.h3,{id:"createfromsource",children:"CreateFromSource"}),"\n",(0,s.jsx)(t.p,{children:"Creates the configurations for a widget parameter by providing a lookup table to query from, and adds it to a pool of parameter configurations that datasets can pick from."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Required Arguments:"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"name"}),": A string for the name of the parameter"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"label"}),": A string for human-friendly display name for this parameter"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"data_source"}),": An instance of a ",(0,s.jsx)(t.a,{href:"../data_sources/DataSource",children:"DataSource"})," which contains details of the lookup table from the external database"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Optional Keyword Arguments:"})}),"\n",(0,s.jsxs)(t.p,{children:["Same optional arguments as the ",(0,s.jsx)(t.strong,{children:"Create"})," static method."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Returns:"})," None"]})]})}function d(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},1151:(e,t,r)=>{r.d(t,{Z:()=>i,a:()=>o});var s=r(7294);const a={},n=s.createContext(a);function o(e){const t=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),s.createElement(n.Provider,{value:t},e.children)}}}]);