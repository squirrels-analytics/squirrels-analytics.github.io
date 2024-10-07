"use strict";(self.webpackChunksquirrels_docs=self.webpackChunksquirrels_docs||[]).push([[4058],{35263:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var n=r(74848),a=r(28453);const s={},l="Widget Parameters",i={id:"docs/topics/parameters",title:"Widget Parameters",description:'The set of all widget parameters for all datasets can be defined in Python in the main function of pyconfigs/parameters.py or in YAML in the "parameters" section of [squirrels.yml]. This set of parameters is created the moment the API server is started with the [sqrl run] command, which includes reading lookup tables to create parameters from a data source. However, each dataset may only use a subset of the parameters in the full set of parameters (configured in the "datasets" section of [squirrels.yml]), so for each dataset request, only that subset will be available to work with (for instance, in the [context.py] or model files).',source:"@site/versioned_docs/version-0.3.x/docs/topics/parameters.md",sourceDirName:"docs/topics",slug:"/docs/topics/parameters",permalink:"/docs/0.3.x/docs/topics/parameters",draft:!1,unlisted:!1,tags:[],version:"0.3.x",frontMatter:{},sidebar:"docs",previous:{title:"Database Connections",permalink:"/docs/0.3.x/docs/topics/database"},next:{title:"Context File",permalink:"/docs/0.3.x/docs/topics/context"}},o={},c=[{value:"Select Parameters",id:"select-parameters",level:2},{value:"Custom Fields",id:"custom-fields",level:3},{value:"Non-Select Parameters",id:"non-select-parameters",level:2},{value:"Dependent Parameters",id:"dependent-parameters",level:2},{value:"Rules for Dependent Parameters",id:"rules-for-dependent-parameters",level:3}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"widget-parameters",children:"Widget Parameters"})}),"\n",(0,n.jsxs)(t.p,{children:["The set of all widget parameters for all datasets can be defined in Python in the ",(0,n.jsx)(t.strong,{children:"main"})," function of ",(0,n.jsx)(t.code,{children:"pyconfigs/parameters.py"}),' or in YAML in the "parameters" section of ',(0,n.jsx)(t.a,{href:"./project-file",children:"squirrels.yml"}),". This set of parameters is created the moment the API server is started with the ",(0,n.jsx)(t.a,{href:"../../references/cli/run",children:"sqrl run"}),' command, which includes reading lookup tables to create parameters from a data source. However, each dataset may only use a subset of the parameters in the full set of parameters (configured in the "datasets" section of ',(0,n.jsx)(t.a,{href:"./project-file",children:"squirrels.yml"}),"), so for each dataset request, only that subset will be available to work with (for instance, in the ",(0,n.jsx)(t.a,{href:"./context",children:"context.py"})," or model files)."]}),"\n",(0,n.jsxs)(t.p,{children:["It is recommended to specify parameters in Python. To create a sample ",(0,n.jsx)(t.code,{children:"pyconfigs/parameters.py"})," file, you can run:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"sqrl init --core --parameters py\n"})}),"\n",(0,n.jsx)(t.p,{children:"Currently, Squirrels support the following parameter types (you may click on them to see its Python reference page):"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"../../references/python/parameters/SingleSelectParameter",children:"SingleSelectParameter"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"../../references/python/parameters/MultiSelectParameter",children:"MultiSelectParameter"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"../../references/python/parameters/DateParameter",children:"DateParameter"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"../../references/python/parameters/DateRangeParameter",children:"DateRangeParameter"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"../../references/python/parameters/NumberParameter",children:"NumberParameter"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"../../references/python/parameters/NumberRangeParameter",children:"NumberRangeParameter"})}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["We will consider ",(0,n.jsx)(t.a,{href:"../../references/python/parameters/SingleSelectParameter",children:"SingleSelectParameter"})," and ",(0,n.jsx)(t.a,{href:"../../references/python/parameters/MultiSelectParameter",children:"MultiSelectParameter"}),' as "select parameters", and all other parameter types as "non-select parameters".']}),"\n",(0,n.jsx)(t.p,{children:"Each of these parameter types come with 3 factory methods:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Create"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"use this to specify parameter options in code with the option to specify parent parameters (for cascading effects)"}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"CreateSimple"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["use this to specify parameter attributes in code without cascading effects. Has simpler arguments than ",(0,n.jsx)(t.strong,{children:"Create"})]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"CreateFromSource"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"use this to create parameter options based on a lookup table in a database"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["All 3 factory methods require ",(0,n.jsx)(t.strong,{children:"name"})," and ",(0,n.jsx)(t.strong,{children:"label"})," as the first two string arguments of the parameter. The ",(0,n.jsx)(t.strong,{children:"name"})," is used to set or reference real-time parameter selections (set using query parameters of API requests and referenced with the ",(0,n.jsx)(t.strong,{children:"prms"})," dictionary in the Squirrels project). The ",(0,n.jsx)(t.strong,{children:"label"})," is a human-friendly name that front-end applications can use to show their users."]}),"\n",(0,n.jsxs)(t.p,{children:["Outside of ",(0,n.jsx)(t.strong,{children:"name"})," and ",(0,n.jsx)(t.strong,{children:"label"}),", each factory method takes different required arguments."]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["For ",(0,n.jsx)(t.strong,{children:"Create"}),", the third required argument is ",(0,n.jsx)(t.strong,{children:"all_options"}),", which is a sequence of parameter option classes."]}),"\n",(0,n.jsxs)(t.li,{children:["For ",(0,n.jsx)(t.strong,{children:"CreateSimple"}),", the additional required arguments are different for each parameter type."]}),"\n",(0,n.jsxs)(t.li,{children:["For ",(0,n.jsx)(t.strong,{children:"CreateFromSource"}),", the third required argument is ",(0,n.jsx)(t.strong,{children:"data_source"}),", which is a data source class that specifies properties for the lookup table. All data source classes take ",(0,n.jsx)(t.strong,{children:"table_or_query"}),' as the first required argument, which must be a table name (of the lookup table), or a query that starts with "SELECT " (case-insensitive).']}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"More details on the parameter option and data source classes are discussed in the sections below."}),"\n",(0,n.jsxs)(t.p,{children:['At runtime, after parameter selections are made, each parameter contains method prefixed with "get_selected" that can be used in the ',(0,n.jsx)(t.a,{href:"./context",children:"context.py"}),' or model files. More details on the available "get_selected" methods are available in the ',(0,n.jsx)(t.a,{href:"../../references/python/parameters/Parameter",children:"Python Classes reference for parameters"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"select-parameters",children:"Select Parameters"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.strong,{children:"Create"})," and ",(0,n.jsx)(t.strong,{children:"CreateSimple"})," factory methods are very similar for select parameters. Both take ",(0,n.jsx)(t.strong,{children:"all_options"})," as the third required argument. The main difference is that ",(0,n.jsx)(t.strong,{children:"Create"})," also accepts optional arguments for ",(0,n.jsx)(t.strong,{children:"parent_name"})," and ",(0,n.jsx)(t.strong,{children:"user_attribute"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.strong,{children:"all_options"})," argument for select parameters requires a sequence of ",(0,n.jsx)(t.a,{href:"../../references/python/parameter_options/SelectParameterOption",children:"SelectParameterOption"})," instances. This class requires two arguments: ",(0,n.jsx)(t.strong,{children:"id"})," and ",(0,n.jsx)(t.strong,{children:"label"}),"."]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["The ",(0,n.jsx)(t.strong,{children:"id"})," is used for the front-end to specify selected parameter option(s). Once the ",(0,n.jsx)(t.strong,{children:"id"})," is set for a parameter option, it should never change in future versions of the Squirrels project."]}),"\n",(0,n.jsxs)(t.li,{children:["The ",(0,n.jsx)(t.strong,{children:"label"})," is the human-friendly name to show in the dropdown widget, and can be subject to change in the future."]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["By default, the default selected option is the first one for ",(0,n.jsx)(t.a,{href:"../../references/python/parameters/SingleSelectParameter",children:"SingleSelectParameter"})," and nothing for ",(0,n.jsx)(t.a,{href:"../../references/python/parameters/MultiSelectParameter",children:"MultiSelectParameter"}),". There is an optional boolean argument for ",(0,n.jsx)(t.strong,{children:"is_default"})," that can be used to change the default selected option(s). If ",(0,n.jsx)(t.strong,{children:"is_default"})," is set to True for multiple options for a ",(0,n.jsx)(t.a,{href:"../../references/python/parameters/SingleSelectParameter",children:"SingleSelectParameter"}),", then only the first one of them is used."]}),"\n",(0,n.jsxs)(t.p,{children:["The following is an example of creating a ",(0,n.jsx)(t.a,{href:"../../references/python/parameters/SingleSelectParameter",children:"SingleSelectParameter"})," where the second option is selected by default."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:'import squirrels as sr\n\ndef main(sqrl: sr.ParametersArgs) -> None:\n    select_options = [\n        sr.SelectParameterOption("s01", "Option 1"),\n        sr.SelectParameterOption("s02", "Option 2", is_default=True)\n    ]\n    sr.SingleSelectParameter.Create("single_param", "Single Select Parameter", select_options)\n'})}),"\n",(0,n.jsxs)(t.p,{children:["For the ",(0,n.jsx)(t.strong,{children:"CreateFromSource"})," factory method, the ",(0,n.jsx)(t.strong,{children:"data_source"})," argument for ",(0,n.jsx)(t.a,{href:"../../references/python/parameters/SingleSelectParameter",children:"SingleSelectParameter"})," and ",(0,n.jsx)(t.a,{href:"../../references/python/parameters/MultiSelectParameter",children:"MultiSelectParameter"})," must be of type ",(0,n.jsx)(t.a,{href:"../../references/python/data_sources/SelectDataSource",children:"SelectDataSource"}),", which takes 3 required arguments: ",(0,n.jsx)(t.strong,{children:"table_or_query"}),", ",(0,n.jsx)(t.strong,{children:"id_col"}),", and ",(0,n.jsx)(t.strong,{children:"options_col"}),". An optional argument for ",(0,n.jsx)(t.strong,{children:"is_default_col"})," is available as well. When the API server activates, each row (with a unique ",(0,n.jsx)(t.strong,{children:"id_col"})," value) in the data source gets converted to a parameter option."]}),"\n",(0,n.jsx)(t.p,{children:'Suppose we have a lookup table named "mylookup" with columns:'}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:'"myid" with values "s01" and "s02"'}),"\n",(0,n.jsx)(t.li,{children:'"myvalue" with values "Option 1" and "Option 2"'}),"\n",(0,n.jsx)(t.li,{children:'"isdefault" with values 0 and 1 (or values that get converted to 0 and 1 when casting to int in Python)'}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Then we can replicate the above example using CreateFromSource as such:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:'import squirrels as sr\n\ndef main(sqrl: sr.ParametersArgs) -> None:\n    select_ds = sr.SelectDataSource("mylookup", "myid", "myvalue", is_default_col="isdefault")\n    sr.SingleSelectParameter.CreateFromSource("single_param", "Single Select Parameter", select_ds)\n'})}),"\n",(0,n.jsx)(t.h3,{id:"custom-fields",children:"Custom Fields"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.a,{href:"../../references/python/parameter_options/SelectParameterOption",children:"SelectParameterOption"})," constructor has the special ability to specify custom fields as optional arguments, and use the custom fields in ",(0,n.jsx)(t.a,{href:"./context",children:"context.py"})," or models using the ",(0,n.jsx)(t.strong,{children:"get_selected"})," method for ",(0,n.jsx)(t.a,{href:"../../references/python/parameters/SingleSelectParameter",children:"SingleSelectParameter"})," or ",(0,n.jsx)(t.strong,{children:"get_selected_list"})," method for ",(0,n.jsx)(t.a,{href:"../../references/python/parameters/MultiSelectParameter",children:"MultiSelectParameter"}),". To retrieve the custom field, you must provide the field name as the first argument for both methods. They also contain optional arguments for:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"default_field"}),": If the field does not exist for the parameter option and ",(0,n.jsx)(t.strong,{children:"default_field"})," is not None, the ",(0,n.jsx)(t.strong,{children:"default_field"}),' is used as the "field" instead.']}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"default"}),": If field does not exist for the parameter option, ",(0,n.jsx)(t.strong,{children:"default_field"})," is None, but ",(0,n.jsx)(t.strong,{children:"default"})," is not None, then ",(0,n.jsx)(t.strong,{children:"default"})," is used as the field value."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:'The following is an example of setting up a "group_by" single-select parameter to specify that columns/dimensions to group by.'}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:'import squirrels as sr\n\ndef main(sqrl: sr.ParametersArgs) -> None:\n    group_by_options = [\n        sr.SelectParameterOption("g1", "None"),\n        sr.SelectParameterOption("g2", "Category", columns=["category"]),\n        sr.SelectParameterOption("g3", "Subcategory", columns=["category", "subcat"], aliases=["category", "subcategory"]),\n    ]\n    sr.SingleSelectParameter.Create("group_by", "Group By", group_by_options)\n'})}),"\n",(0,n.jsxs)(t.p,{children:['In this example, we want to set the custom field called "columns" to an empty list by default, and make the custom field called "aliases" to be the same as the "columns" field by default. We can achieve this as such in ',(0,n.jsx)(t.a,{href:"./context",children:"context.py"})," or in the model files:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:'aliases = prms["group_by"].get_selected("aliases", default_field="columns", default=[])\n'})}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.a,{href:"../../references/python/parameter_options/SelectParameterOption",children:"SelectParameterOption"})," constructor also takes an optional argument ",(0,n.jsx)(t.strong,{children:"custom_fields"})," to specify the custom fields as a Python dictionary instead."]}),"\n",(0,n.jsx)(t.h2,{id:"non-select-parameters",children:"Non-Select Parameters"}),"\n",(0,n.jsxs)(t.p,{children:["For non-select parameters, the ",(0,n.jsx)(t.strong,{children:"CreateSimple"})," factory method take different arguments depending on the parameter type. For example, the ",(0,n.jsx)(t.strong,{children:"CreateSimple"})," for ",(0,n.jsx)(t.a,{href:"../../references/python/parameters/DateParameter",children:"DateParameter"})," takes ",(0,n.jsx)(t.strong,{children:"default_date"})," as a required argument and ",(0,n.jsx)(t.strong,{children:"date_format"})," as an optional argument. And as you would expect, these arguments may not apply for other parameter types. A simple example of creating a date parameter is shown below."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:'sr.DateParameter.CreateSimple("my_date_param", "My Date Parameter", "2024-01-01")\n'})}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.strong,{children:"all_options"})," argument for the ",(0,n.jsx)(t.strong,{children:"Create"})," factory method is a list of parameter options for non-select parameters as well. The parameter option class to use depends on the parameter type. For instance, for ",(0,n.jsx)(t.a,{href:"../../references/python/parameters/DateParameter",children:"DateParameter"}),", the ",(0,n.jsx)(t.strong,{children:"all_options"})," argument must be a list of ",(0,n.jsx)(t.a,{href:"../../references/python/parameter_options/DateParameterOption",children:"DateParameterOption"}),". Similar to the arguments for ",(0,n.jsx)(t.strong,{children:"CreateSimple"}),", the ",(0,n.jsx)(t.a,{href:"../../references/python/parameter_options/DateParameterOption",children:"DateParameterOption"})," also takes ",(0,n.jsx)(t.strong,{children:"default_date"})," as a required argument and ",(0,n.jsx)(t.strong,{children:"date_format"})," as an optional argument. If a parent parameter is specified for the date parameter, then specifying multiple date parameter options can be useful for the date parameter to use a different default date based on the selected value of the parent parameter."]}),"\n",(0,n.jsxs)(t.p,{children:["For the ",(0,n.jsx)(t.strong,{children:"CreateFromSource"})," factory method, the ",(0,n.jsx)(t.strong,{children:"data_source"})," argument type also differs based on the parameter type. For instance, for ",(0,n.jsx)(t.a,{href:"../../references/python/parameters/DateParameter",children:"DateParameter"}),", the ",(0,n.jsx)(t.strong,{children:"data_source"})," argument must be of type ",(0,n.jsx)(t.a,{href:"../../references/python/data_sources/DateDataSource",children:"DateDataSource"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:['Suppose you have a lookup table called "my_lookup_date" with a column "as_of_date" with one value of "2024-01-01". Then the following would result in the same as the ',(0,n.jsx)(t.strong,{children:"CreateSimple"})," example above."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:'my_date_ds = sr.DateDataSource("my_lookup_date", "as_of_date")\nsr.DateParameter.CreateFromSource("my_date_param", "My Date Parameter", my_date_ds)\n'})}),"\n",(0,n.jsx)(t.h2,{id:"dependent-parameters",children:"Dependent Parameters"}),"\n",(0,n.jsx)(t.p,{children:'Squirrels lets you create cascadable parameters. This means that the selection of one parameter (the "parent parameter") can affect the available options shown for another parameter (the "child parameter").'}),"\n",(0,n.jsxs)(t.p,{children:["To create this dependency, use the ",(0,n.jsx)(t.strong,{children:"parent_name"})," argument in the ",(0,n.jsx)(t.strong,{children:"Create"})," or ",(0,n.jsx)(t.strong,{children:"CreateFromSource"})," factory method of the child parameter (the ",(0,n.jsx)(t.strong,{children:"CreateSimple"})," factory method does not include this argument). This is an optional string argument that is None by default."]}),"\n",(0,n.jsxs)(t.p,{children:["In addition, if using parameter option classes, each of the parameter options of the child parameter must use the ",(0,n.jsx)(t.strong,{children:"parent_option_ids"})," argument to specify the list of parameter option IDs from the parent parameter that would allow the child parameter option to show. This is an optional argument with an empty set as default (which would mean the parameter option never shows if the associated parameter has a parent). If using a data source class, then use the ",(0,n.jsx)(t.strong,{children:"parent_id_col"})," to specify the column that contains the parent option IDs."]}),"\n",(0,n.jsx)(t.p,{children:"The following example demonstrates both creating a select parameter and non-select parameter as child parameters."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:'import squirrels as sr\n\ndef main(sqrl: sr.ParametersArgs) -> None:\n    # The parent parameter\n    parent_options = [\n        sr.SelectParameterOption("pr01", "Option 1"),\n        sr.SelectParameterOption("pr02", "Option 2")\n    ]\n    sr.SingleSelectParameter.CreateSimple("parent_param", "Parent Parameter", parent_options)\n\n    # The child select parameter (multi-select)\n    child_select_parent_name = "parent_param"\n    child_select_options = [\n        sr.SelectParameterOption("cs01", "Child Option 1", parent_option_ids=["pr01"]),\n        sr.SelectParameterOption("cs02", "Child Option 2", parent_option_ids=["pr02"]),\n        sr.SelectParameterOption("cs03", "Child Option 3", parent_option_ids=["pr01", "pr02"])\n    ]\n    sr.MultiSelectParameter.Create(\n        "child_select", "Child Select Parameter", child_select_options, parent_name=child_select_parent_name\n    )\n\n    # The child non-select parameter (date)\n    child_date_parent_name = "parent_param"\n    child_date_options = [\n        sr.DateParameterOption("2024-01-01", parent_option_ids=["pr01"]),\n        sr.DateParameterOption("2024-07-01", parent_option_ids=["pr02"])\n    ]\n    sr.DateParameter.Create(\n        "child_date", "Child Date Parameter", child_date_options, parent_name=child_date_parent_name\n    )\n'})}),"\n",(0,n.jsx)(t.p,{children:"In this example:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:'When "Option 1" is selected for the parent parameter, only "Child Option 1" and "Child Option 3" will show for the "child_select" parameter, and the default date for the "child_date" parameter becomes "2024-01-01".'}),"\n",(0,n.jsx)(t.li,{children:'When "Option 2" is selected for the parent parameter, only "Child Option 2" and "Child Option 3" will show for the "child_select" parameter, and the default date for the "child_date" parameter becomes "2024-07-01".'}),"\n"]}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsx)(t.p,{children:"In the case where a parent option contains no child options, the child parameter becomes disabled when the parent option is selected."})}),"\n",(0,n.jsxs)(t.p,{children:["To get the same effect using ",(0,n.jsx)(t.strong,{children:"CreateFromSource"}),", we first need to have the following lookup tables in our database or as seeds."]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"parent_options:"})}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"id"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"parent_value"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"pr01"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Option 1"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"pr02"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Option 2"})]})]})]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"child_select_options:"})}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"id"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"child_value"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"parent_id"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"cs01"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Child Option 1"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"pr01"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"cs02"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Child Option 2"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"pr02"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"cs03"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Child Option 3"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"pr01"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"cs03"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Child Option 3"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"pr02"})]})]})]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"child_date_defaults:"})}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"id"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"default_date"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"parent_id"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"d1"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"2024-01-01"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"pr01"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"d2"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"2024-07-01"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"pr02"})]})]})]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsxs)(t.p,{children:["Then our ",(0,n.jsx)(t.code,{children:"parameters.py"})," file can look like this:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:'import squirrels as sr\n\ndef main(sqrl: sr.ParametersArgs) -> None:\n    # The parent parameter\n    parent_ds = sr.SelectDataSource("parent_options", "id", "parent_value")\n    sr.SingleSelectParameter.CreateFromSource("parent_param", "Parent Parameter", parent_ds)\n\n    # The child select parameter (multi-select)\n    child_select_parent_name = "parent_param"\n    child_select_ds = sr.SelectDataSource(\n        "child_select_options", "id", "child_value", parent_id_col="parent_id"\n    )\n    sr.MultiSelectParameter.CreateFromSource(\n        "child_select", "Child Select Parameter", child_select_ds, parent_name=child_select_parent_name\n    )\n\n    # The child non-select parameter (date)\n    child_date_parent_name = "parent_param"\n    child_date_ds = sr.SelectDataSource(\n        "child_date_defaults", "default_date", id_col="id", parent_id_col="parent_id"\n    )\n    sr.DateParameter.CreateFromSource(\n        "child_date", "Child Date Parameter", child_date_ds, parent_name=child_date_parent_name\n    )\n'})}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsxs)(t.p,{children:["Parameters can also be cascaded by a user attribute of the authorized user. This is done through the ",(0,n.jsx)(t.strong,{children:"user_attribute"})," argument on the parameter class, and the ",(0,n.jsx)(t.strong,{children:"user_groups"})," or ",(0,n.jsx)(t.strong,{children:"user_group_col"})," arguments on the parameter option or data source class (analogous to the ",(0,n.jsx)(t.strong,{children:"parent_name"}),", ",(0,n.jsx)(t.strong,{children:"parent_option_ids"}),", and ",(0,n.jsx)(t.strong,{children:"parent_id_col"})," arguments mentioned above). More details can be found on the page on ",(0,n.jsx)(t.a,{href:"./auth",children:"Authentication"}),"."]})}),"\n",(0,n.jsx)(t.h3,{id:"rules-for-dependent-parameters",children:"Rules for Dependent Parameters"}),"\n",(0,n.jsx)(t.p,{children:"The following rules must be followed when creating dependent parameters. Squirrels will raise an error if these rules are violated."}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"Only select parameters are allowed to be parent parameters"}),"\n",(0,n.jsx)(t.li,{children:"Only single-select parameters can be the parent of non-select parameters"}),"\n",(0,n.jsxs)(t.li,{children:["For non-select parameters, each parent option must be associated to ",(0,n.jsx)(t.strong,{children:"at most one"})," child option","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["However, if the child parameter is cascaded by a parent parameter and a user attribute, then it's ",(0,n.jsx)(t.strong,{children:"at most one"})," child option per user group"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsxs)(t.p,{children:["Parameters are also limited to having at most one parent parameter. This is enforced automatically since the ",(0,n.jsx)(t.strong,{children:"parent_name"})," argument must be of type string or None."]})})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>l,x:()=>i});var n=r(96540);const a={},s=n.createContext(a);function l(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);