"use strict";(self.webpackChunksquirrels_docs=self.webpackChunksquirrels_docs||[]).push([[4903],{85635:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var t=r(74848),a=r(28453);const s={},o="NumberRangeParameterOption",i={id:"references/python/parameter_options/NumberRangeParameterOption",title:"NumberRangeParameterOption",description:"The class for parameter options of number range parameters. Note that only one option can appear at a time, but different options may appear based on authenticated user or parent parameter selections. See [ParameterOption] page for more details on the common constructor arguments.",source:"@site/versioned_docs/version-0.3.x/references/python/parameter_options/NumberRangeParameterOption.md",sourceDirName:"references/python/parameter_options",slug:"/references/python/parameter_options/NumberRangeParameterOption",permalink:"/docs/0.3.x/references/python/parameter_options/NumberRangeParameterOption",draft:!1,unlisted:!1,tags:[],version:"0.3.x",frontMatter:{},sidebar:"references",previous:{title:"NumberParameterOption",permalink:"/docs/0.3.x/references/python/parameter_options/NumberParameterOption"},next:{title:"TextParameterOption",permalink:"/docs/0.3.x/references/python/parameter_options/TextParameterOption"}},l={},c=[{value:"Constructor Arguments",id:"constructor-arguments",level:3}];function m(e){const n={a:"a",code:"code",h1:"h1",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"numberrangeparameteroption",children:"NumberRangeParameterOption"})}),"\n",(0,t.jsxs)(n.p,{children:["The class for parameter options of number range parameters. Note that only one option can appear at a time, but different options may appear based on authenticated user or parent parameter selections. See ",(0,t.jsx)(n.a,{href:"./ParameterOption",children:"ParameterOption"})," page for more details on the common constructor arguments."]}),"\n",(0,t.jsxs)(n.p,{children:["Can be found in the classpath ",(0,t.jsx)(n.code,{children:"squirrels.parameter_options.NumberRangeParameterOption"})," or ",(0,t.jsx)(n.code,{children:"squirrels.NumberRangeParameterOption"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"constructor-arguments",children:"Constructor Arguments"}),"\n",(0,t.jsx)(n.p,{children:"Creates a NumberRangeParameterOption object."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Required Arguments:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"min_value"}),": A string, int, or Decimal (from decimal package). This is the minimum selectable value for both the lower and upper selected values of the number range parameter"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"max_value"}),": A string, int, or Decimal (from decimal package). This is the maximum selectable value for both the lower and upper selected values of the number range parameter","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:'Must be greater than "min_value"'}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Optional Keyword Arguments:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"increment"}),": A string, int, or Decimal (from decimal package). This is the increment of selectable values. Default is 1","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:'Must fit evenly between "min_value" and "max_value"'}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"default_lower_value"}),': A string, int, Decimal (from decimal package), or None. This is the default selected lower value. When None, the "min_value" is used. Default is None',"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:'Must be selectable based on "min_value", "max_value", and "increment"'}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"default_upper_value"}),': A string, int, Decimal (from decimal package), or None. This is the default selected upper value. When None, the "max_value" is used. Default is None',"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:'Must be selectable based on "min_value", "max_value", and "increment"'}),"\n",(0,t.jsx)(n.li,{children:'Must be greater than "default_lower_value"'}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"user_groups"})," (see ",(0,t.jsx)(n.a,{href:"./ParameterOption",children:"ParameterOption"}),")"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"parent_options_ids"})," (see ",(0,t.jsx)(n.a,{href:"./ParameterOption",children:"ParameterOption"}),")"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(m,{...e})}):m(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>i});var t=r(96540);const a={},s=t.createContext(a);function o(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);