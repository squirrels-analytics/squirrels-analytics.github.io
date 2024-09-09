"use strict";(self.webpackChunksquirrels_docs=self.webpackChunksquirrels_docs||[]).push([[2107],{5944:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>d,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var n=r(4848),a=r(8453);const s={},d="DateRangeParameter",o={id:"references/python/parameters/DateRangeParameter",title:"DateRangeParameter",description:"The class for defining and interacting with date range parameters.",source:"@site/versioned_docs/version-0.2.x/references/python/parameters/DateRangeParameter.md",sourceDirName:"references/python/parameters",slug:"/references/python/parameters/DateRangeParameter",permalink:"/docs/0.2.x/references/python/parameters/DateRangeParameter",draft:!1,unlisted:!1,tags:[],version:"0.2.x",frontMatter:{},sidebar:"references",previous:{title:"DateParameter",permalink:"/docs/0.2.x/references/python/parameters/DateParameter"},next:{title:"NumberParameter",permalink:"/docs/0.2.x/references/python/parameters/NumberParameter"}},i={},l=[{value:"Static / Class Methods",id:"static--class-methods",level:2},{value:"CreateSimple",id:"createsimple",level:3},{value:"Non-Static Methods",id:"non-static-methods",level:2},{value:"get_selected_start_date",id:"get_selected_start_date",level:3},{value:"get_selected_start_date_quoted",id:"get_selected_start_date_quoted",level:3},{value:"get_selected_end_date",id:"get_selected_end_date",level:3},{value:"get_selected_end_date_quoted",id:"get_selected_end_date_quoted",level:3}];function c(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"daterangeparameter",children:"DateRangeParameter"})}),"\n",(0,n.jsx)(t.p,{children:"The class for defining and interacting with date range parameters."}),"\n",(0,n.jsxs)(t.p,{children:["Can be found in the classpath ",(0,n.jsx)(t.code,{children:"squirrels.parameters.DateRangeParameter"})," or ",(0,n.jsx)(t.code,{children:"squirrels.DateRangeParameter"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"static--class-methods",children:"Static / Class Methods"}),"\n",(0,n.jsxs)(t.p,{children:["In addition to the static methods specified on this page, see the ",(0,n.jsx)(t.a,{href:"./Parameter",children:"Parameter"})," page for details on the ",(0,n.jsx)(t.strong,{children:"Create"})," and ",(0,n.jsx)(t.strong,{children:"CreateFromSource"})," factory methods."]}),"\n",(0,n.jsx)(t.p,{children:"For DateRangeParameter in particular:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["The ",(0,n.jsx)(t.strong,{children:"all_options"})," argument of the ",(0,n.jsx)(t.strong,{children:"Create"})," factory method must be a sequence of ",(0,n.jsx)(t.a,{href:"../parameter_options/DateRangeParameterOption",children:"DateRangeParameterOption"})," instances"]}),"\n",(0,n.jsxs)(t.li,{children:["The ",(0,n.jsx)(t.strong,{children:"data_source"})," argument of the ",(0,n.jsx)(t.strong,{children:"CreateFromSource"})," factory method must be a ",(0,n.jsx)(t.a,{href:"../data_sources/DateRangeDataSource",children:"DateRangeDataSource"})]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"createsimple",children:"CreateSimple"}),"\n",(0,n.jsxs)(t.p,{children:["Creates the configurations for a date range parameter by providing a list of ",(0,n.jsx)(t.a,{href:"../parameter_options/DateRangeParameterOption",children:"DateRangeParameterOption"})," instances, and adds it to a pool of parameter configurations that datasets can pick from."]}),"\n",(0,n.jsxs)(t.p,{children:["Unlike the ",(0,n.jsx)(t.strong,{children:"Create"}),' factory method, this factory method assumes only one parameter option is needed with no arguments for "user_attribute" and "parent_name".']}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Required Arguments:"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"name"}),": A string for the name of the parameter"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"label"}),": A string for human-friendly display name for this parameter"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"default_start_date"}),": A string or date (from datetime package). This is the default selected start date"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"default_end_date"}),": A string or date (from datetime package). This is the default selected end date","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:'Must be a date after "default_start_date"'}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Optional Keyword Arguments:"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"date_format"}),': A string for the format of the "default_date" argument. Uses ',(0,n.jsx)(t.a,{href:"https://www.w3schools.com/python/gloss_python_date_format_codes.asp",children:"datetime's format codes"}),". Default is '%Y-%m-%d'"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"is_hidden"}),": A boolean for whether the parameter is hidden in the response of the Parameters API. Default is False"]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Returns:"})," None"]}),"\n",(0,n.jsx)(t.h2,{id:"non-static-methods",children:"Non-Static Methods"}),"\n",(0,n.jsxs)(t.p,{children:["In the ",(0,n.jsx)(t.a,{href:"../../../docs/topics/context",children:"context.py"})," file or data model, the methods below can be invoked on a DateRangeParameter object to retrieve details for the selected parameter option at runtime. For example, the following code demonstrates getting the DateRangeParameter object in ",(0,n.jsx)(t.code,{children:"context.py"}),', and calling the "get_selected_date" method on it.']}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:'if "my_dr_param" in prms:\n    my_dr_param: sr.DateRangeParameter = prms["my_dr_param"]\n    my_date: str = my_dr_param.get_selected_start_date()\n    ...\n'})}),"\n",(0,n.jsx)(t.h3,{id:"get_selected_start_date",children:"get_selected_start_date"}),"\n",(0,n.jsx)(t.p,{children:"Gets selected start date as string."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Optional Keyword Argument"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"date_format"}),": An optional string for the format of the returned date. Uses ",(0,n.jsx)(t.a,{href:"https://www.w3schools.com/python/gloss_python_date_format_codes.asp",children:"datetime's format codes"}),". If None, uses the same format as the one specified for default date (see ",(0,n.jsx)(t.a,{href:"../parameter_options/DateRangeParameterOption",children:"DateRangeParameterOption"})," or ",(0,n.jsx)(t.a,{href:"../data_sources/DateRangeDataSource",children:"DateRangeDataSource"}),"). Default is None"]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Returns:"})," A string for the date."]}),"\n",(0,n.jsx)(t.h3,{id:"get_selected_start_date_quoted",children:"get_selected_start_date_quoted"}),"\n",(0,n.jsx)(t.p,{children:"Gets selected start date as string surrounded by single quotes."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Optional Keyword Argument"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"date_format"}),': See "date_format" argument for the "get_selected_start_date" method above']}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Returns:"})," A string for the quoted date."]}),"\n",(0,n.jsx)(t.h3,{id:"get_selected_end_date",children:"get_selected_end_date"}),"\n",(0,n.jsx)(t.p,{children:"Gets selected end date as string surrounded by single quotes."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Optional Keyword Argument"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"date_format"}),': See "date_format" argument for the "get_selected_start_date" method above']}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Returns:"})," A string for the date."]}),"\n",(0,n.jsx)(t.h3,{id:"get_selected_end_date_quoted",children:"get_selected_end_date_quoted"}),"\n",(0,n.jsx)(t.p,{children:"Gets selected end date as string surrounded by single quotes."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Optional Keyword Argument"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"date_format"}),': See "date_format" argument for the "get_selected_start_date" method above']}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Returns:"})," A string for the quoted date."]})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},8453:(e,t,r)=>{r.d(t,{R:()=>d,x:()=>o});var n=r(6540);const a={},s=n.createContext(a);function d(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:d(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);