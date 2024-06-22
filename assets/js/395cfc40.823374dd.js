"use strict";(self.webpackChunksquirrels_docs=self.webpackChunksquirrels_docs||[]).push([[3679],{3380:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var a=r(5893),n=r(1151);const s={},o="DateParameter",d={id:"references/python/parameters/DateParameter",title:"DateParameter",description:"The class for defining and interacting with date parameters.",source:"@site/docs/references/python/parameters/DateParameter.md",sourceDirName:"references/python/parameters",slug:"/references/python/parameters/DateParameter",permalink:"/docs/references/python/parameters/DateParameter",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"references",previous:{title:"MultiSelectParameter",permalink:"/docs/references/python/parameters/MultiSelectParameter"},next:{title:"DateRangeParameter",permalink:"/docs/references/python/parameters/DateRangeParameter"}},i={},c=[{value:"Static / Class Methods",id:"static--class-methods",level:2},{value:"CreateSimple",id:"createsimple",level:3},{value:"Non-Static Methods",id:"non-static-methods",level:2},{value:"get_selected_date",id:"get_selected_date",level:3},{value:"get_selected_date_quoted",id:"get_selected_date_quoted",level:3}];function l(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"dateparameter",children:"DateParameter"}),"\n",(0,a.jsx)(t.p,{children:"The class for defining and interacting with date parameters."}),"\n",(0,a.jsxs)(t.p,{children:["Can be found in the classpath ",(0,a.jsx)(t.code,{children:"squirrels.parameters.DateParameter"})," or ",(0,a.jsx)(t.code,{children:"squirrels.DateParameter"}),"."]}),"\n",(0,a.jsx)(t.h2,{id:"static--class-methods",children:"Static / Class Methods"}),"\n",(0,a.jsxs)(t.p,{children:["In addition to the static methods specified on this page, see the ",(0,a.jsx)(t.a,{href:"./Parameter",children:"Parameter"})," page for details on the ",(0,a.jsx)(t.strong,{children:"Create"})," and ",(0,a.jsx)(t.strong,{children:"CreateFromSource"})," factory methods."]}),"\n",(0,a.jsx)(t.p,{children:"For DateParameter in particular:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["The ",(0,a.jsx)(t.strong,{children:"all_options"})," argument of the ",(0,a.jsx)(t.strong,{children:"Create"})," factory method must be a sequence of ",(0,a.jsx)(t.a,{href:"../parameter_options/DateParameterOption",children:"DateParameterOption"})," instances"]}),"\n",(0,a.jsxs)(t.li,{children:["The ",(0,a.jsx)(t.strong,{children:"data_source"})," argument of the ",(0,a.jsx)(t.strong,{children:"CreateFromSource"})," factory method must be a ",(0,a.jsx)(t.a,{href:"../data_sources/DateDataSource",children:"DateDataSource"})]}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"createsimple",children:"CreateSimple"}),"\n",(0,a.jsxs)(t.p,{children:["Creates the configurations for a date parameter by providing a list of ",(0,a.jsx)(t.a,{href:"../parameter_options/DateParameterOption",children:"DateParameterOption"})," instances, and adds it to an abstract pool of parameter configurations."]}),"\n",(0,a.jsxs)(t.p,{children:["Unlike the ",(0,a.jsx)(t.strong,{children:"Create"}),' factory method, this factory method assumes only one parameter option is needed with no arguments for "user_attribute" and "parent_name".']}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"Required Arguments:"})}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"name"}),": A string for the name of the parameter"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"label"}),": A string for human-friendly display name for this parameter"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"default_date"}),": A string or date (from datetime package). This is the default selected date"]}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"Optional Keyword Arguments:"})}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"date_format"}),': A string for the format of the "default_date" argument. Uses ',(0,a.jsx)(t.a,{href:"https://www.w3schools.com/python/gloss_python_date_format_codes.asp",children:"datetime's format codes"}),". Default is '%Y-%m-%d'"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"is_hidden"}),": A boolean for whether the parameter is hidden in the response of the Parameters API. Default is False"]}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Returns:"})," None"]}),"\n",(0,a.jsx)(t.h2,{id:"non-static-methods",children:"Non-Static Methods"}),"\n",(0,a.jsxs)(t.p,{children:["In the ",(0,a.jsx)(t.a,{href:"../../../docs/topics/context",children:"context.py"})," file or data model, the methods below can be invoked on a DateParameter object to retrieve details for the selected parameter option at runtime. For example, the following code demonstrates getting the DateParameter object in ",(0,a.jsx)(t.code,{children:"context.py"}),', and calling the "get_selected_date" method on it.']}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:'if "my_date_param" in prms:\n    my_date_param: sr.DateParameter = prms["my_date_param"]\n    my_date: str = my_date_param.get_selected_date()\n    ...\n'})}),"\n",(0,a.jsx)(t.h3,{id:"get_selected_date",children:"get_selected_date"}),"\n",(0,a.jsx)(t.p,{children:"Gets selected date as string."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"Optional Keyword Argument"})}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"date_format"}),": An optional string for the format of the returned date. Uses ",(0,a.jsx)(t.a,{href:"https://www.w3schools.com/python/gloss_python_date_format_codes.asp",children:"datetime's format codes"}),". If None, uses the same format as the one specified for default date (see ",(0,a.jsx)(t.a,{href:"../parameter_options/DateParameterOption",children:"DateParameterOption"})," or ",(0,a.jsx)(t.a,{href:"../data_sources/DateDataSource",children:"DateDataSource"}),"). Default is None"]}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Returns:"})," A string for the date."]}),"\n",(0,a.jsx)(t.h3,{id:"get_selected_date_quoted",children:"get_selected_date_quoted"}),"\n",(0,a.jsx)(t.p,{children:"Gets selected date as string surrounded by single quotes."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"Optional Keyword Argument"})}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"date_format"}),': See "date_format" argument for the "get_selected_date" method above']}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Returns:"})," A string for the quoted date."]})]})}function h(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},1151:(e,t,r)=>{r.d(t,{Z:()=>d,a:()=>o});var a=r(7294);const n={},s=a.createContext(n);function o(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);