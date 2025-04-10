"use strict";(self.webpackChunksquirrels_docs=self.webpackChunksquirrels_docs||[]).push([[2216],{4360:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"references/python/parameters/SingleSelectParameter","title":"SingleSelectParameter","description":"The class for defining and interacting with single-select parameters.","source":"@site/versioned_docs/version-0.4.x/references/python/parameters/SingleSelectParameter.md","sourceDirName":"references/python/parameters","slug":"/references/python/parameters/SingleSelectParameter","permalink":"/docs/0.4.x/references/python/parameters/SingleSelectParameter","draft":false,"unlisted":false,"tags":[],"version":"0.4.x","frontMatter":{},"sidebar":"references","previous":{"title":"Parameter (abstract)","permalink":"/docs/0.4.x/references/python/parameters/Parameter"},"next":{"title":"MultiSelectParameter","permalink":"/docs/0.4.x/references/python/parameters/MultiSelectParameter"}}');var s=n(4848),a=n(8453);const l={},i="SingleSelectParameter",o={},d=[{value:"Static / Class Methods",id:"static--class-methods",level:2},{value:"CreateSimple",id:"createsimple",level:3},{value:"Non-Static Methods",id:"non-static-methods",level:2},{value:"get_selected",id:"get_selected",level:3},{value:"get_selected_id",id:"get_selected_id",level:3},{value:"get_selected_id_quoted",id:"get_selected_id_quoted",level:3},{value:"get_selected_label",id:"get_selected_label",level:3},{value:"get_selected_label_quoted",id:"get_selected_label_quoted",level:3}];function c(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"singleselectparameter",children:"SingleSelectParameter"})}),"\n",(0,s.jsx)(t.p,{children:"The class for defining and interacting with single-select parameters."}),"\n",(0,s.jsxs)(t.p,{children:["Can be found in the classpath ",(0,s.jsx)(t.code,{children:"squirrels.parameters.SingleSelectParameter"})," or ",(0,s.jsx)(t.code,{children:"squirrels.SingleSelectParameter"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"static--class-methods",children:"Static / Class Methods"}),"\n",(0,s.jsxs)(t.p,{children:["In addition to the static methods specified on this page, see the ",(0,s.jsx)(t.a,{href:"./Parameter",children:"Parameter"})," page for details on the ",(0,s.jsx)(t.strong,{children:"CreateWithOptions"})," and ",(0,s.jsx)(t.strong,{children:"CreateFromSource"})," factory methods."]}),"\n",(0,s.jsx)(t.p,{children:"For SingleSelectParameter in particular:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["The ",(0,s.jsx)(t.strong,{children:"all_options"})," argument of the ",(0,s.jsx)(t.strong,{children:"CreateWithOptions"})," factory method must be a sequence of ",(0,s.jsx)(t.a,{href:"../parameter_options/SelectParameterOption",children:"SelectParameterOption"})," instances"]}),"\n",(0,s.jsxs)(t.li,{children:["The ",(0,s.jsx)(t.strong,{children:"data_source"})," argument of the ",(0,s.jsx)(t.strong,{children:"CreateFromSource"})," factory method must be a ",(0,s.jsx)(t.a,{href:"../data_sources/SelectDataSource",children:"SelectDataSource"})]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"createsimple",children:"CreateSimple"}),"\n",(0,s.jsxs)(t.p,{children:["Creates the configurations for a single-select parameter by providing a list of ",(0,s.jsx)(t.a,{href:"../parameter_options/SelectParameterOption",children:"SelectParameterOption"})," instances, and adds it to a pool of parameter configurations that datasets can pick from."]}),"\n",(0,s.jsxs)(t.p,{children:["Similar to the ",(0,s.jsx)(t.strong,{children:"CreateWithOptions"})," factory method, but without the optional arguments for ",(0,s.jsx)(t.strong,{children:"user_attribute"})," and ",(0,s.jsx)(t.strong,{children:"parent_name"}),". For arguments, see ",(0,s.jsx)(t.strong,{children:"CreateWithOptions"})," in the ",(0,s.jsx)(t.a,{href:"./Parameter",children:"Parameter"})," page."]}),"\n",(0,s.jsx)(t.h2,{id:"non-static-methods",children:"Non-Static Methods"}),"\n",(0,s.jsxs)(t.p,{children:["In the ",(0,s.jsx)(t.a,{href:"../../../docs/topics/context",children:"context.py"})," file or data model, the methods below can be invoked on a SingleSelectParameter object to retrieve details for the selected parameter option at runtime. For example, the following code demonstrates getting the SingleSelectParameter object in ",(0,s.jsx)(t.code,{children:"context.py"}),', and calling the "get_selected" method on it.']}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:'if sqrl.param_exists("my_ss_param"):\n    my_ss_param: sr.SingleSelectParameter = prms["my_ss_param"]\n    my_special_field: str = my_ss_param.get_selected("some_field")\n    ...\n'})}),"\n",(0,s.jsx)(t.h3,{id:"get_selected",children:"get_selected"}),"\n",(0,s.jsx)(t.p,{children:"Gets the selected single-select option or selected custom field."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Optional Arguments:"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"field"}),': An optional string for the "custom_fields" attribute to retrieve from the selected option. If None, retrieves the selected SelectParameterOption instance instead. Default is None']}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Optional Keyword Arguments:"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"default_field"}),': An optional string. If not None, this is used if the "field" argument cannot be found in "custom_fields". Default is None']}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"default"}),': A optional value (of any type) to return if the "field" and "default_field" arguments cannot be found in "custom_fields". If None, an error is thrown if "field" and "default_field" arguments cannot be found. Default is None']}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Returns:"}),' The value of the custom field (of any type) or a SelectParameterOption instance if the "field" argument is None.']}),"\n",(0,s.jsx)(t.h3,{id:"get_selected_id",children:"get_selected_id"}),"\n",(0,s.jsx)(t.p,{children:"Gets the ID of the selected parameter option. This method takes no arguments."}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Returns:"})," A string for the ID."]}),"\n",(0,s.jsx)(t.h3,{id:"get_selected_id_quoted",children:"get_selected_id_quoted"}),"\n",(0,s.jsx)(t.p,{children:"Gets the ID of the selected parameter option surrounded by single quotes. This method takes no arguments."}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Returns:"})," A string for the quoted ID."]}),"\n",(0,s.jsx)(t.h3,{id:"get_selected_label",children:"get_selected_label"}),"\n",(0,s.jsx)(t.p,{children:"Gets the label of the selected parameter option. This method takes no arguments."}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Returns:"})," A string for the label."]}),"\n",(0,s.jsx)(t.h3,{id:"get_selected_label_quoted",children:"get_selected_label_quoted"}),"\n",(0,s.jsx)(t.p,{children:"Gets the label of the selected parameter option surrounded by single quotes. This method takes no arguments."}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Returns:"})," A string for the quoted label."]})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>i});var r=n(6540);const s={},a=r.createContext(s);function l(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);