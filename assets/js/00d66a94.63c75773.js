"use strict";(self.webpackChunksquirrels_docs=self.webpackChunksquirrels_docs||[]).push([[6465],{2499:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var t=n(4848),a=n(8453);const s={},i="NumberRangeParameter",l={id:"references/python/parameters/NumberRangeParameter",title:"NumberRangeParameter",description:"The class for defining and interacting with number range parameters.",source:"@site/docs/references/python/parameters/NumberRangeParameter.md",sourceDirName:"references/python/parameters",slug:"/references/python/parameters/NumberRangeParameter",permalink:"/docs/next/references/python/parameters/NumberRangeParameter",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"references",previous:{title:"NumberParameter",permalink:"/docs/next/references/python/parameters/NumberParameter"},next:{title:"TextParameter",permalink:"/docs/next/references/python/parameters/TextParameter"}},o={},c=[{value:"Static / Class Methods",id:"static--class-methods",level:2},{value:"CreateSimple",id:"createsimple",level:3},{value:"Non-Static Methods",id:"non-static-methods",level:2},{value:"get_selected_lower_value",id:"get_selected_lower_value",level:3},{value:"get_selected_upper_value",id:"get_selected_upper_value",level:3}];function d(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.header,{children:(0,t.jsx)(r.h1,{id:"numberrangeparameter",children:"NumberRangeParameter"})}),"\n",(0,t.jsx)(r.p,{children:"The class for defining and interacting with number range parameters."}),"\n",(0,t.jsxs)(r.p,{children:["Can be found in the classpath ",(0,t.jsx)(r.code,{children:"squirrels.parameters.NumberRangeParameter"})," or ",(0,t.jsx)(r.code,{children:"squirrels.NumberRangeParameter"}),"."]}),"\n",(0,t.jsx)(r.h2,{id:"static--class-methods",children:"Static / Class Methods"}),"\n",(0,t.jsxs)(r.p,{children:["In addition to the static methods specified on this page, see the ",(0,t.jsx)(r.a,{href:"./Parameter",children:"Parameter"})," page for details on the ",(0,t.jsx)(r.strong,{children:"CreateWithOptions"})," and ",(0,t.jsx)(r.strong,{children:"CreateFromSource"})," factory methods."]}),"\n",(0,t.jsx)(r.p,{children:"For NumberRangeParameter in particular:"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["The ",(0,t.jsx)(r.strong,{children:"all_options"})," argument of the ",(0,t.jsx)(r.strong,{children:"CreateWithOptions"})," factory method must be a sequence of ",(0,t.jsx)(r.a,{href:"../parameter_options/NumberRangeParameterOption",children:"NumberRangeParameterOption"})," instances"]}),"\n",(0,t.jsxs)(r.li,{children:["The ",(0,t.jsx)(r.strong,{children:"data_source"})," argument of the ",(0,t.jsx)(r.strong,{children:"CreateFromSource"})," factory method must be a ",(0,t.jsx)(r.a,{href:"../data_sources/NumberRangeDataSource",children:"NumberRangeDataSource"})]}),"\n"]}),"\n",(0,t.jsx)(r.h3,{id:"createsimple",children:"CreateSimple"}),"\n",(0,t.jsxs)(r.p,{children:["Creates the configurations for a number parameter by specifying the bounds directly without specifying any ",(0,t.jsx)(r.a,{href:"../parameter_options/NumberRangeParameterOption",children:"NumberRangeParameterOption"})," instances. The parameter configurations get added to a pool of parameter configurations that datasets can pick from."]}),"\n",(0,t.jsxs)(r.p,{children:["Unlike the ",(0,t.jsx)(r.strong,{children:"CreateWithOptions"}),' factory method, this factory method assumes only one parameter option is needed with no arguments for "user_attribute" and "parent_name".']}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Required Arguments:"})}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.strong,{children:"name"}),": A string for the name of the parameter"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.strong,{children:"label"}),": A string for human-friendly display name for this parameter"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.strong,{children:"min_value"}),": A string, int, or Decimal (from decimal package). This is the minimum selectable value for both the lower and upper selected values of the number range parameter"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.strong,{children:"max_value"}),": A string, int, or Decimal (from decimal package). This is the maximum selectable value for both the lower and upper selected values of the number range parameter","\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:'Must be greater than "min_value"'}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Optional Keyword Arguments:"})}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.strong,{children:"description"}),": A string for the explanation / purpose of the parameter. Default is empty string"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.strong,{children:"increment"}),": A string, int, or Decimal (from decimal package). This is the increment of selectable values. Default is 1","\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:'Must fit evenly between "min_value" and "max_value"'}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.strong,{children:"default_lower_value"}),': A string, int, Decimal (from decimal package), or None. This is the default selected lower value. When None, the "min_value" is used. Default is None',"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:'Must be selectable based on "min_value", "max_value", and "increment"'}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.strong,{children:"default_upper_value"}),': A string, int, Decimal (from decimal package), or None. This is the default selected upper value. When None, the "max_value" is used. Default is None',"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:'Must be selectable based on "min_value", "max_value", and "increment"'}),"\n",(0,t.jsx)(r.li,{children:'Must be greater than "default_lower_value"'}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"Returns:"})," None"]}),"\n",(0,t.jsx)(r.h2,{id:"non-static-methods",children:"Non-Static Methods"}),"\n",(0,t.jsxs)(r.p,{children:["In the ",(0,t.jsx)(r.a,{href:"../../../docs/topics/context",children:"context.py"})," file or data model, the methods below can be invoked on a NumberRangeParameter object to retrieve details for the selected parameter option at runtime. For example, the following code demonstrates getting the NumberRangeParameter object in ",(0,t.jsx)(r.code,{children:"context.py"}),', and calling the "get_selected_lower_value" method on it.']}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-python",children:'if sqrl.param_exists("my_nr_param"):\n    my_nr_param: sr.NumberRangeParameter = prms["my_nr_param"]\n    my_num: str = my_nr_param.get_selected_lower_value()\n    ...\n'})}),"\n",(0,t.jsx)(r.h3,{id:"get_selected_lower_value",children:"get_selected_lower_value"}),"\n",(0,t.jsx)(r.p,{children:"Get the selected lower value number. This method takes no arguments."}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"Returns:"})," A string that's parsable into a decimal number."]}),"\n",(0,t.jsx)(r.h3,{id:"get_selected_upper_value",children:"get_selected_upper_value"}),"\n",(0,t.jsx)(r.p,{children:"Get the selected upper value number. This method takes no arguments."}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"Returns:"})," A string that's parsable into a decimal number."]})]})}function h(e={}){const{wrapper:r}={...(0,a.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,r,n)=>{n.d(r,{R:()=>i,x:()=>l});var t=n(6540);const a={},s=t.createContext(a);function i(e){const r=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),t.createElement(s.Provider,{value:r},e.children)}}}]);