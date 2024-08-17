"use strict";(self.webpackChunksquirrels_docs=self.webpackChunksquirrels_docs||[]).push([[7509],{995:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var t=n(5893),s=n(1151);const a={},i="NumberParameter",l={id:"references/python/parameters/NumberParameter",title:"NumberParameter",description:"The class for defining and interacting with number parameters.",source:"@site/docs/references/python/parameters/NumberParameter.md",sourceDirName:"references/python/parameters",slug:"/references/python/parameters/NumberParameter",permalink:"/docs/next/references/python/parameters/NumberParameter",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"references",previous:{title:"DateRangeParameter",permalink:"/docs/next/references/python/parameters/DateRangeParameter"},next:{title:"NumberRangeParameter",permalink:"/docs/next/references/python/parameters/NumberRangeParameter"}},o={},c=[{value:"Static / Class Methods",id:"static--class-methods",level:2},{value:"CreateSimple",id:"createsimple",level:3},{value:"Non-Static Methods",id:"non-static-methods",level:2},{value:"get_selected_value",id:"get_selected_value",level:3}];function m(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h1,{id:"numberparameter",children:"NumberParameter"}),"\n",(0,t.jsx)(r.p,{children:"The class for defining and interacting with number parameters."}),"\n",(0,t.jsxs)(r.p,{children:["Can be found in the classpath ",(0,t.jsx)(r.code,{children:"squirrels.parameters.NumberParameter"})," or ",(0,t.jsx)(r.code,{children:"squirrels.NumberParameter"}),"."]}),"\n",(0,t.jsx)(r.h2,{id:"static--class-methods",children:"Static / Class Methods"}),"\n",(0,t.jsxs)(r.p,{children:["In addition to the static methods specified on this page, see the ",(0,t.jsx)(r.a,{href:"./Parameter",children:"Parameter"})," page for details on the ",(0,t.jsx)(r.strong,{children:"Create"})," and ",(0,t.jsx)(r.strong,{children:"CreateFromSource"})," factory methods."]}),"\n",(0,t.jsx)(r.p,{children:"For NumberParameter in particular:"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["The ",(0,t.jsx)(r.strong,{children:"all_options"})," argument of the ",(0,t.jsx)(r.strong,{children:"Create"})," factory method must be a sequence of ",(0,t.jsx)(r.a,{href:"../parameter_options/NumberParameterOption",children:"NumberParameterOption"})," instances"]}),"\n",(0,t.jsxs)(r.li,{children:["The ",(0,t.jsx)(r.strong,{children:"data_source"})," argument of the ",(0,t.jsx)(r.strong,{children:"CreateFromSource"})," factory method must be a ",(0,t.jsx)(r.a,{href:"../data_sources/NumberDataSource",children:"NumberDataSource"})]}),"\n"]}),"\n",(0,t.jsx)(r.h3,{id:"createsimple",children:"CreateSimple"}),"\n",(0,t.jsxs)(r.p,{children:["Creates the configurations for a number parameter by specifying the bounds directly without specifying any ",(0,t.jsx)(r.a,{href:"../parameter_options/NumberParameterOption",children:"NumberParameterOption"})," instances. The parameter configurations get added to a pool of parameter configurations that datasets can pick from."]}),"\n",(0,t.jsxs)(r.p,{children:["Unlike the ",(0,t.jsx)(r.strong,{children:"Create"}),' factory method, this factory method assumes only one parameter option is needed with no arguments for "user_attribute" and "parent_name".']}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Required Arguments:"})}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.strong,{children:"name"}),": A string for the name of the parameter"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.strong,{children:"label"}),": A string for human-friendly display name for this parameter"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.strong,{children:"min_value"}),": A string, int, or Decimal (from decimal package). This is the minimum selectable value for this number parameter"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.strong,{children:"max_value"}),": A string, int, or Decimal (from decimal package). This is the maximum selectable value for this number parameter","\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:'Must be greater than "min_value"'}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Optional Keyword Arguments:"})}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.strong,{children:"description"}),": A string for the explanation / purpose of the parameter. Default is empty string"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.strong,{children:"increment"}),": A string, int, or Decimal (from decimal package). This is the increment of selectable values. Default is 1","\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:'Must fit evenly between "min_value" and "max_value"'}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.strong,{children:"default_value"}),': A string, int, Decimal (from decimal package), or None. This is the default selected value. When None, the "min_value" is used. Default is None',"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:'Must be selectable based on "min_value", "max_value", and "increment"'}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"Returns:"})," None"]}),"\n",(0,t.jsx)(r.h2,{id:"non-static-methods",children:"Non-Static Methods"}),"\n",(0,t.jsxs)(r.p,{children:["In the ",(0,t.jsx)(r.a,{href:"../../../docs/topics/context",children:"context.py"})," file or data model, the methods below can be invoked on a NumberParameter object to retrieve details for the selected parameter option at runtime. For example, the following code demonstrates getting the NumberParameter object in ",(0,t.jsx)(r.code,{children:"context.py"}),', and calling the "get_selected_value" method on it.']}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-python",children:'if sqrl.param_exists("my_num_param"):\n    my_num_param: sr.NumberParameter = prms["my_num_param"]\n    my_num: str = my_num_param.get_selected_value()\n    ...\n'})}),"\n",(0,t.jsx)(r.h3,{id:"get_selected_value",children:"get_selected_value"}),"\n",(0,t.jsx)(r.p,{children:"Gets selected number as string. This method takes no arguments."}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"Returns:"})," A string that's parsable into a decimal number."]})]})}function d(e={}){const{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(m,{...e})}):m(e)}},1151:(e,r,n)=>{n.d(r,{Z:()=>l,a:()=>i});var t=n(7294);const s={},a=t.createContext(s);function i(e){const r=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(a.Provider,{value:r},e.children)}}}]);