"use strict";(self.webpackChunksquirrels_docs=self.webpackChunksquirrels_docs||[]).push([[1970],{8767:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>a,toc:()=>d});var n=s(5893),r=s(1151);const l={},i="MultiSelectParameter",a={id:"references/python/parameters/MultiSelectParameter",title:"MultiSelectParameter",description:"The class for defining and interacting with multi-select parameters.",source:"@site/docs/references/python/parameters/MultiSelectParameter.md",sourceDirName:"references/python/parameters",slug:"/references/python/parameters/MultiSelectParameter",permalink:"/docs/next/references/python/parameters/MultiSelectParameter",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"references",previous:{title:"SingleSelectParameter",permalink:"/docs/next/references/python/parameters/SingleSelectParameter"},next:{title:"DateParameter",permalink:"/docs/next/references/python/parameters/DateParameter"}},o={},d=[{value:"Static / Class Methods",id:"static--class-methods",level:2},{value:"Create",id:"create",level:3},{value:"CreateSimple",id:"createsimple",level:3},{value:"Non-Static Methods",id:"non-static-methods",level:2},{value:"has_non_empty_selection",id:"has_non_empty_selection",level:3},{value:"get_selected_list",id:"get_selected_list",level:3},{value:"get_selected_ids_as_list",id:"get_selected_ids_as_list",level:3},{value:"get_selected_ids_joined",id:"get_selected_ids_joined",level:3},{value:"get_selected_ids_quoted_as_list",id:"get_selected_ids_quoted_as_list",level:3},{value:"get_selected_ids_quoted_joined",id:"get_selected_ids_quoted_joined",level:3},{value:"get_selected_labels_as_list",id:"get_selected_labels_as_list",level:3},{value:"get_selected_labels_joined",id:"get_selected_labels_joined",level:3},{value:"get_selected_labels_quoted_as_list",id:"get_selected_labels_quoted_as_list",level:3},{value:"get_selected_labels_quoted_joined",id:"get_selected_labels_quoted_joined",level:3}];function c(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"multiselectparameter",children:"MultiSelectParameter"}),"\n",(0,n.jsx)(t.p,{children:"The class for defining and interacting with multi-select parameters."}),"\n",(0,n.jsxs)(t.p,{children:["Can be found in the classpath ",(0,n.jsx)(t.code,{children:"squirrels.parameters.MultiSelectParameter"})," or ",(0,n.jsx)(t.code,{children:"squirrels.MultiSelectParameter"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"static--class-methods",children:"Static / Class Methods"}),"\n",(0,n.jsxs)(t.p,{children:["In addition to the static methods specified on this page, see the ",(0,n.jsx)(t.a,{href:"./Parameter",children:"Parameter"})," page for details on the ",(0,n.jsx)(t.strong,{children:"CreateFromSource"})," factory methods."]}),"\n",(0,n.jsx)(t.p,{children:"For MultiSelectParameter in particular:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["The ",(0,n.jsx)(t.strong,{children:"data_source"})," argument of the ",(0,n.jsx)(t.strong,{children:"CreateFromSource"})," factory method must be a ",(0,n.jsx)(t.a,{href:"../data_sources/MultiSelectDataSource",children:"MultiSelectDataSource"})]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"create",children:"Create"}),"\n",(0,n.jsx)(t.p,{children:"Creates the configurations for a multi-select parameter by providing a list of the parameter option objects, and adds it to an abstract pool of parameter configurations."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Required Arguments:"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"name"}),": A string for the name of the parameter"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"label"}),": A string for human-friendly display name for this parameter"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"all_options"}),": A sequence of ",(0,n.jsx)(t.a,{href:"../parameter_options/SelectParameterOption",children:"SelectParameterOption"})," instances for all parameter options associated to this parameter"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Optional Keyword Arguments:"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"show_select_all"}),":A"," boolean for whether this parameter should have a checkbox/button to automatically select all options. Default is true"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"is_dropdown"}),": A boolean for whether this parameter should show as a dropdown (true) or listbox (false). Default is true"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"order_matters"}),": A boolean for whether the ordering of the selection matters. Default is false"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"none_is_all"}),": A boolean for whether applying no selection is equivalent to selecting all. Default is true"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"is_hidden"}),": A boolean for whether the parameter is hidden in the response of the Parameters API. Default is False"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"user_attribute"}),": An optional string for the user attribute that may cascade the options for this parameter. If None, then the authorized user has no effect on the selectable parameter options. Default is None"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"parent_name"}),': An optional string for the name of the parameter (or "parent parameter") that may cascade the options for this parameter. If None, then other parameters have no effect on the selectable parameter options for this parameter. Default is None']}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Returns:"})," None"]}),"\n",(0,n.jsx)(t.h3,{id:"createsimple",children:"CreateSimple"}),"\n",(0,n.jsxs)(t.p,{children:["Creates the configurations for a multi-select parameter by providing a list of ",(0,n.jsx)(t.a,{href:"../parameter_options/SelectParameterOption",children:"SelectParameterOption"})," instances, and adds it to an abstract pool of parameter configurations."]}),"\n",(0,n.jsxs)(t.p,{children:["Similar to the ",(0,n.jsx)(t.strong,{children:"Create"})," factory method, but without the optional arguments for ",(0,n.jsx)(t.strong,{children:"user_attribute"})," and ",(0,n.jsx)(t.strong,{children:"parent_name"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"non-static-methods",children:"Non-Static Methods"}),"\n",(0,n.jsxs)(t.p,{children:["In the ",(0,n.jsx)(t.a,{href:"../../../docs/topics/context",children:"context.py"})," file or data model, the methods below can be invoked on a MultiSelectParameter object to retrieve details for the selected parameter option at runtime. For example, the following code demonstrates getting the MultiSelectParameter object in ",(0,n.jsx)(t.code,{children:"context.py"}),', and calling the "get_selected_list" method on it.']}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:'if "my_ms_param" in prms:\n    my_ms_param: sr.MultiSelectParameter = prms["my_ms_param"]\n    my_special_field: list[str] = my_ms_param.get_selected_list("some_field")\n    ...\n'})}),"\n",(0,n.jsx)(t.h3,{id:"has_non_empty_selection",children:"has_non_empty_selection"}),"\n",(0,n.jsx)(t.p,{children:"Gets whether there are options selected. True if more than zero options were selected, and False otherwise. This method takes no arguments."}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Returns:"})," A boolean."]}),"\n",(0,n.jsx)(t.h3,{id:"get_selected_list",children:"get_selected_list"}),"\n",(0,n.jsx)(t.p,{children:"Gets the selected list of multi-select options or custom field values."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Optional Arguments:"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"field"}),': An optional string for the "custom_fields" attribute to retrieve from the selected option. If None, retrieves the selected SelectParameterOption instance instead. Default is None']}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Optional Keyword Arguments:"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"default_field"}),': An optional string. If not None, this is used if the "field" argument cannot be found in "custom_fields". Default is None']}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"default"}),': A optional value (of any type) to return if the "field" and "default_field" arguments cannot be found in "custom_fields". If None, an error is thrown if "field" and "default_field" arguments cannot be found. Default is None']}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Returns:"}),' A sequence of of the custom field values (of any type) or a sequence of SelectParameterOption instances if the "field" argument is None.']}),"\n",(0,n.jsx)(t.h3,{id:"get_selected_ids_as_list",children:"get_selected_ids_as_list"}),"\n",(0,n.jsx)(t.p,{children:"Gets the sequence of ID(s) of the selected option(s). This method takes no arguments."}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Returns:"})," A sequence of strings for the IDs."]}),"\n",(0,n.jsx)(t.h3,{id:"get_selected_ids_joined",children:"get_selected_ids_joined"}),"\n",(0,n.jsx)(t.p,{children:"Gets the ID(s) of the selected option(s) joined by comma. This method takes no arguments."}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Returns:"})," A string containing all the IDs separated by comma."]}),"\n",(0,n.jsx)(t.h3,{id:"get_selected_ids_quoted_as_list",children:"get_selected_ids_quoted_as_list"}),"\n",(0,n.jsx)(t.p,{children:"Gets the sequence of ID(s) of the selected option(s) surrounded by single quotes. This method takes no arguments."}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Returns:"})," A sequence of strings for the quoted IDs."]}),"\n",(0,n.jsx)(t.h3,{id:"get_selected_ids_quoted_joined",children:"get_selected_ids_quoted_joined"}),"\n",(0,n.jsx)(t.p,{children:"Gets the ID(s) of the selected option(s) surrounded by single quotes and joined by comma. This method takes no arguments."}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Returns:"})," A string containing all the quoted IDs separated by comma."]}),"\n",(0,n.jsx)(t.h3,{id:"get_selected_labels_as_list",children:"get_selected_labels_as_list"}),"\n",(0,n.jsx)(t.p,{children:"Gets the sequence of label(s) of the selected option(s). This method takes no arguments."}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Returns:"})," A sequence of strings for the labels."]}),"\n",(0,n.jsx)(t.h3,{id:"get_selected_labels_joined",children:"get_selected_labels_joined"}),"\n",(0,n.jsx)(t.p,{children:"Gets the label(s) of the selected option(s) joined by comma. This method takes no arguments."}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Returns:"})," A string containing all the labels separated by comma."]}),"\n",(0,n.jsx)(t.h3,{id:"get_selected_labels_quoted_as_list",children:"get_selected_labels_quoted_as_list"}),"\n",(0,n.jsx)(t.p,{children:"Gets the sequence of label(s) of the selected option(s) surrounded by single quotes. This method takes no arguments."}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Returns:"})," A sequence of strings for the quoted labels."]}),"\n",(0,n.jsx)(t.h3,{id:"get_selected_labels_quoted_joined",children:"get_selected_labels_quoted_joined"}),"\n",(0,n.jsx)(t.p,{children:"Gets the label(s) of the selected option(s) surrounded by single quotes and joined by comma. This method takes no arguments."}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Returns:"})," A string containing all the quoted labels separated by comma."]})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},1151:(e,t,s)=>{s.d(t,{Z:()=>a,a:()=>i});var n=s(7294);const r={},l=n.createContext(r);function i(e){const t=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(l.Provider,{value:t},e.children)}}}]);