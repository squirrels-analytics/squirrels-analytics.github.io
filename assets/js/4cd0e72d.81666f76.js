"use strict";(self.webpackChunksquirrels_docs=self.webpackChunksquirrels_docs||[]).push([[4111],{3095:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var r=n(5893),s=n(1151);const o={},i="SelectParameterOption",a={id:"references/python/parameter_options/SelectParameterOption",title:"SelectParameterOption",description:"The class for parameter options of single-select and multi-select parameters. See [ParameterOption] page for more details on the common constructor arguments.",source:"@site/docs/references/python/parameter_options/SelectParameterOption.md",sourceDirName:"references/python/parameter_options",slug:"/references/python/parameter_options/SelectParameterOption",permalink:"/docs/next/references/python/parameter_options/SelectParameterOption",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"references",previous:{title:"ParameterOption (abstract)",permalink:"/docs/next/references/python/parameter_options/ParameterOption"},next:{title:"DateParameterOption",permalink:"/docs/next/references/python/parameter_options/DateParameterOption"}},l={},c=[{value:"Constructor",id:"constructor",level:3},{value:"Methods",id:"methods",level:2},{value:"get_custom_field",id:"get_custom_field",level:3}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"selectparameteroption",children:"SelectParameterOption"}),"\n",(0,r.jsxs)(t.p,{children:["The class for parameter options of single-select and multi-select parameters. See ",(0,r.jsx)(t.a,{href:"./ParameterOption",children:"ParameterOption"})," page for more details on the common constructor arguments."]}),"\n",(0,r.jsxs)(t.p,{children:["Can be found in the classpath ",(0,r.jsx)(t.code,{children:"squirrels.parameter_options.SelectParameterOption"})," or ",(0,r.jsx)(t.code,{children:"squirrels.SelectParameterOption"}),"."]}),"\n",(0,r.jsx)(t.h3,{id:"constructor",children:"Constructor"}),"\n",(0,r.jsx)(t.p,{children:"Creates a SelectParameterOption object."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Required Arguments:"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"id"}),": A string for unique identifier of this option that never changes for subsequent versions of the project"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"label"}),": A string for human-friendly display name of this option"]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Optional Keyword Arguments:"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"is_default"}),": A boolean for whether this is option is selected by default","\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"For single-select parameters, the default is the first option in the list where this flag is true, or the very first option in the list if none of the options have this flag as true"}),"\n",(0,r.jsx)(t.li,{children:"For multi-select parameters, all options that have this flag as true are selected by default"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"user_groups"})," (see ",(0,r.jsx)(t.a,{href:"./ParameterOption",children:"ParameterOption"}),")"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"parent_option_ids"})," (see ",(0,r.jsx)(t.a,{href:"./ParameterOption",children:"ParameterOption"}),")"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"custom_fields"}),": A dictionary to define custom attribute names and values on parameter options"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"methods",children:"Methods"}),"\n",(0,r.jsxs)(t.p,{children:["In the ",(0,r.jsx)(t.a,{href:"../../../docs/topics/context",children:"context.py"})," file or data model, you can use the ",(0,r.jsx)(t.code,{children:"get_selected"})," method on a single-select parameter without arguments to get the SelectParameterOption object for the selected option, or the ",(0,r.jsx)(t.code,{children:"get_selected_list"})," method on a multi-select parameter without arguments to get the list of SelectParameterOption objects for the selected options. For example, the code below demonstrates getting the selected SelectParameterOption object from a single-select parameter in ",(0,r.jsx)(t.code,{children:"context.py"}),"."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:'if sqrl.param_exists("my_ss_param"):\n    my_ss_param: sr.SingleSelectParameter = prms["my_ss_param"]\n    my_option: sr.SelectParameterOption = my_ss_param.get_selected()\n    ...\n'})}),"\n",(0,r.jsx)(t.p,{children:"The following class methods are available to use on a SelectParameterOption object."}),"\n",(0,r.jsx)(t.h3,{id:"get_custom_field",children:"get_custom_field"}),"\n",(0,r.jsx)(t.p,{children:"Gets the value of a custom field."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Required Arguments:"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"field"}),': A string for the key to use to fetch the custom field from the "custom_fields" dictionary']}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Optional Keyword Arguments:"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"default_field"}),': A string or None. If the "field" argument does not exist in "custom_fields" as a key, then this is used instead as the field if not None']}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"default"}),': Any type. If "field" or "default_field" (if not None) arguments do not exist in "custom_fields" as keys, then this value is used as default. If this value is also None, then an error is thrown.']}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Returns:"})," The value of the custom field (can be any type)."]})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>i});var r=n(7294);const s={},o=r.createContext(s);function i(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);