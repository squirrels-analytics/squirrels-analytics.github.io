"use strict";(self.webpackChunksquirrels_docs=self.webpackChunksquirrels_docs||[]).push([[6247],{7759:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var t=n(5893),r=n(1151);const i={},a="Squirrels Project File",o={id:"docs/topics/project-file",title:"Squirrels Project File",description:'The Squirrels project file ("squirrels.yml") includes configurations for the project. It contains the following sections:',source:"@site/docs/docs/topics/project-file.md",sourceDirName:"docs/topics",slug:"/docs/topics/project-file",permalink:"/docs/next/docs/topics/project-file",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Project Structure",permalink:"/docs/next/docs/topics/project"},next:{title:"Squirrels Project Settings",permalink:"/docs/next/docs/topics/settings"}},l={},c=[{value:"project_variables",id:"project_variables",level:3},{value:"packages",id:"packages",level:3},{value:"connections",id:"connections",level:3},{value:"parameters",id:"parameters",level:3},{value:"selection_test_sets",id:"selection_test_sets",level:3},{value:"datasets",id:"datasets",level:3},{value:"dbviews",id:"dbviews",level:3},{value:"federates",id:"federates",level:3},{value:"settings",id:"settings",level:3}];function d(e){const s={a:"a",admonition:"admonition",code:"code",h1:"h1",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"squirrels-project-file",children:"Squirrels Project File"}),"\n",(0,t.jsx)(s.p,{children:'The Squirrels project file ("squirrels.yml") includes configurations for the project. It contains the following sections:'}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.strong,{children:"project_variables"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.strong,{children:"packages"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.strong,{children:"connections"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.strong,{children:"parameters"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.strong,{children:"selection_test_sets"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.strong,{children:"datasets"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.strong,{children:"settings"})}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["Only the ",(0,t.jsx)(s.strong,{children:"project_variables"})," section is required (though there isn't much purpose for a project without a datasets section)."]}),"\n",(0,t.jsxs)(s.p,{children:["This file can be templated with Jinja. For instance, you can write a section in a separate file and use ",(0,t.jsx)(s.a,{href:"https://ttl255.com/jinja2-tutorial-part-6-include-and-import/",children:"Jinja's include"}),' to include it into "squirrels.yml".']}),"\n",(0,t.jsx)(s.p,{children:"The sections are described in detail below. Use the right sidebar to jump to a specific section."}),"\n",(0,t.jsx)(s.h3,{id:"project_variables",children:"project_variables"}),"\n",(0,t.jsx)(s.p,{children:"This section contains project variables that can be referenced within the project. See example below:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-yml",children:"project_variables:\n  name: sample\n  label: Sample Label\n  major_version: 1\n  custom_var: example\n"})}),"\n",(0,t.jsxs)(s.p,{children:["The variables ",(0,t.jsx)(s.strong,{children:"name"})," and ",(0,t.jsx)(s.strong,{children:"major_version"})," are required, and ",(0,t.jsx)(s.strong,{children:"label"})," is also a variable that is usually specified for all Squirrels projects."]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"name"})," - The name of the project, and is part of the URL paths for certain APIs. This must be a string."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"label"})," - The human-friendly title of the project that's provided through the catalog API response. This must be a string."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"major_version"})," - The major version for the project, and is part of the URL paths for certain APIs. This is must be an integer."]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["Additional custom project variables can also be added, such as the the ",(0,t.jsx)(s.strong,{children:"custom_var"})," above, which can then be used in other parts of your Squirrels projects (such as the models)."]}),"\n",(0,t.jsx)(s.h3,{id:"packages",children:"packages"}),"\n",(0,t.jsx)(s.p,{children:"This section lets you specify a list of git projects you can download and import reusable Jinja macros or Python functions from. See example below:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-yaml",children:"packages:\n  - git: https://.../myrepo1.git\n    revision: v0.1.0\n    directory: custom_name\n  - git: https://.../myrepo2.git\n    revision: main\n"})}),"\n",(0,t.jsxs)(s.p,{children:["For each item, ",(0,t.jsx)(s.strong,{children:"git"})," and ",(0,t.jsx)(s.strong,{children:"revision"})," are required fields while ",(0,t.jsx)(s.strong,{children:"directory"})," is optional."]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"git"})," - The URL path to use to clone the git project."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"revision"})," - The tag, branch, or commit hash to checkout."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"directory"})," - New name for the git project folder if different than default name."]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["The values in this section is used when using the ",(0,t.jsx)(s.a,{href:"../../references/cli/deps",children:"sqrl deps"})," command to download a list of dependent projects to the ",(0,t.jsx)(s.code,{children:"sqrl_packages/"})," folder."]}),"\n",(0,t.jsx)(s.h3,{id:"connections",children:"connections"}),"\n",(0,t.jsxs)(s.p,{children:["This section can be used to specify database connections by assigning a name to ",(0,t.jsx)(s.a,{href:"https://docs.sqlalchemy.org/en/20/core/engines.html#database-urls",children:"SQLAlchemy Database URLs"}),". Database connections are used by dbview models, and widget parameters that retrieve values from a source. Database connections can also be specified in the ",(0,t.jsx)(s.code,{children:"pyconfigs/connections.py"})," file, and if a name exists in both this section and the python file, then ",(0,t.jsx)(s.code,{children:"connections.py"})," takes precedence. An example of the section may look something like this:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-yaml",children:"connections:\n  - name: default\n    url: 'sqlite:///./database/mydatabase.db'\n  - name: postgres_example\n    credential: postgres_user\n    url: 'postgresql+psycopg2://{username}:{password}@localhost:5432/mydatabase'\n"})}),"\n",(0,t.jsxs)(s.p,{children:["The fields ",(0,t.jsx)(s.strong,{children:"name"})," and ",(0,t.jsx)(s.strong,{children:"url"})," are required. The field ",(0,t.jsx)(s.strong,{children:"credential"})," is only required if ",(0,t.jsx)(s.code,{children:"{username}"})," and ",(0,t.jsx)(s.code,{children:"{password}"})," are in the ",(0,t.jsx)(s.strong,{children:"url"}),", but otherwise optional."]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"name"})," - The assigned name of the connection to make it easy to reference elsewhere. The connection name ",(0,t.jsx)(s.code,{children:"default"})," should be defined (either here or in the ",(0,t.jsx)(s.code,{children:"connections.py"})," file), where it becomes the database connection used by default if the connection name is not specified explicitly for the dbview model or widget parameter source."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"credential"})," - Select a credential name defined in ",(0,t.jsx)(s.a,{href:"./environcfg",children:"environcfg.yml"}),"."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"url"})," - The SQLAlchemy URL. Placeholders for ",(0,t.jsx)(s.code,{children:"{username}"})," and ",(0,t.jsx)(s.code,{children:"{password}"})," can be included in the URL to substitute the username and password from the specified ",(0,t.jsx)(s.strong,{children:"credential"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["If you need to use a different URL based on the environment, you can set an environment variable in ",(0,t.jsx)(s.a,{href:"./environcfg",children:"environcfg.yml"}),' and use Jinja to substitute environment variables into "squirrels.yml" (such as ',(0,t.jsx)(s.code,{children:"url: {{ my_conn_str }}"}),")."]}),"\n",(0,t.jsx)(s.admonition,{type:"note",children:(0,t.jsxs)(s.p,{children:["You may need to install addition Python libraries for the connection driver you wish to use. For instance, to use postgresql with SQLAlchemy, you will need to ",(0,t.jsx)(s.code,{children:"pip install psycopg2"})," first. Only the ",(0,t.jsx)(s.code,{children:"sqlite"})," driver is available natively in Python."]})}),"\n",(0,t.jsx)(s.h3,{id:"parameters",children:"parameters"}),"\n",(0,t.jsxs)(s.p,{children:["This section can be used to define a list of widget parameters, although using the ",(0,t.jsx)(s.code,{children:"pyconfig/parameters.py"})," file to define them in Python instead is recommended and less verbose. The example below defines a date parameter."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-yaml",children:"parameters:\n  - type: DateParameter\n    factory: CreateSimple\n    arguments:\n      name: my_date_param\n      label: Sample Date Parameter\n      default_date: 2023-01-01\n"})}),"\n",(0,t.jsx)(s.p,{children:"The equivalent Python representation would be:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-python",children:'DateParameter.CreateSimple("my_date_param", "Sample Date Parameter", default_date=datetime.date(2023, 1, 1))\n'})}),"\n",(0,t.jsxs)(s.p,{children:["Each parameter must define the fields ",(0,t.jsx)(s.strong,{children:"type"}),", ",(0,t.jsx)(s.strong,{children:"factory"}),", and ",(0,t.jsx)(s.strong,{children:"arguments"}),"."]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"type"})," - The parameter type. The type must match one of the ",(0,t.jsx)(s.a,{href:"../../references/python/parameters/Parameter",children:"Python parameter classes"}),"."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"factory"})," - One of ",(0,t.jsx)(s.code,{children:"Create"}),", ",(0,t.jsx)(s.code,{children:"CreateSimple"}),", or ",(0,t.jsx)(s.code,{children:"CreateFromSource"})," which are factory methods that exist for all ",(0,t.jsx)(s.a,{href:"../../references/python/parameters/Parameter",children:"Python parameter classes"}),". See the docs for the parameter class and factory method to see what arguments they take."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"arguments"})," - The arguments for the factory method. This always takes ",(0,t.jsx)(s.strong,{children:"name"})," and ",(0,t.jsx)(s.strong,{children:"label"})," as required arguments, while the remaining arguments depend on the parameter class and factory method."]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["Most arguments are typical key-value pairs (where yaml can represent the type for the value). However, this is not quite the case for argument types of ",(0,t.jsx)(s.strong,{children:"datasource"})," (a parameter data source class) and ",(0,t.jsx)(s.strong,{children:"all_options"})," (a list of parameter option classes)."]}),"\n",(0,t.jsxs)(s.p,{children:["If the argument is ",(0,t.jsx)(s.strong,{children:"datasource"})," (which is required for all ",(0,t.jsx)(s.strong,{children:"CreateFromSource"})," factory methods), then use the arguments of the corresponding data source class constructor to specify a new set of key-value pairs. For instance, the corresponding data source class for ",(0,t.jsx)(s.strong,{children:"MultiSelectParameter"})," is ",(0,t.jsx)(s.strong,{children:"MultiSelectDataSource"}),". As shown in the example below, ",(0,t.jsx)(s.strong,{children:"MultiSelectDataSource"})," requires arguments ",(0,t.jsx)(s.strong,{children:"table_or_query"}),", ",(0,t.jsx)(s.strong,{children:"id_col"}),", and ",(0,t.jsx)(s.strong,{children:"options_col"})," (note, ",(0,t.jsx)(s.strong,{children:"table_or_query"})," is required for all data source constructors)."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-yaml",children:"parameters:\n  - type: MultiSelectParameter\n    factory: CreateFromSource\n    arguments:\n      name: my_filter\n      label: My Filter\n      data_source:\n        table_or_query: my_lookup_table\n        id_col: my_ids\n        options_col: my_options\n"})}),"\n",(0,t.jsx)(s.p,{children:"The equivalent Python representation would be:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-python",children:'my_data_source = MultiSelectDataSource("my_lookup_table", id_col="my_ids", options_col="my_options")\nMultiSelectParameter.CreateFromSource("my_filter", "My Filter", data_source=my_data_source)\n'})}),"\n",(0,t.jsxs)(s.p,{children:["If the argument is ",(0,t.jsx)(s.strong,{children:"all_options"})," (which is required for all ",(0,t.jsx)(s.strong,{children:"Create"})," factory methods and the ",(0,t.jsx)(s.strong,{children:"CreateFromSimple"})," factory methods for select parameters), then use the arguments of the corresponding parameter option class constructor for each item in the list. For instance, the corresponding parameter option class for both ",(0,t.jsx)(s.strong,{children:"SingleSelectParameter"})," or ",(0,t.jsx)(s.strong,{children:"MultiSelectParameter"})," is ",(0,t.jsx)(s.strong,{children:"SelectParameterOption"}),". As shown in the example below, ",(0,t.jsx)(s.strong,{children:"SelectParameterOption"})," requires arguments ",(0,t.jsx)(s.strong,{children:"id"}),", and ",(0,t.jsx)(s.strong,{children:"label"}),"."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-yaml",children:"parameters:\n  - type: SingleSelectParameter\n    factory: Create\n    arguments:\n      name: my_select\n      label: My Single Select\n      all_options:\n        - id: x0\n          label: Option 1\n        - id: x1\n          label: Option 2\n"})}),"\n",(0,t.jsx)(s.p,{children:"The equivalent Python representation would be:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-python",children:'my_param_options = [\n    SelectParameterOption("x0", "Option 1"),\n    SelectParameterOption("x1", "Option 2")\n]\nSingleSelectParameter.Create("my_select", "My Single Select", all_options=my_param_options)\n'})}),"\n",(0,t.jsxs)(s.p,{children:["For non-select parameter types like ",(0,t.jsx)(s.strong,{children:"DateParameter"}),", it may seem unintuitive why multiple parameter options may be needed (using the ",(0,t.jsx)(s.strong,{children:"Create"})," factory method), but it's useful when parent parameters are defined and for instance, you want to change the default date based on the selection of the parent parameter. More details can be found in the ",(0,t.jsx)(s.a,{href:"./parameters",children:"Widget Parameters"})," page."]}),"\n",(0,t.jsx)(s.h3,{id:"selection_test_sets",children:"selection_test_sets"}),"\n",(0,t.jsxs)(s.p,{children:["This section provides test sets for parameter selections when working with the ",(0,t.jsx)(s.a,{href:"../../references/cli/compile",children:"sqrl compile"})," CLI command."]}),"\n",(0,t.jsxs)(s.p,{children:["For example, suppose we have test set called ",(0,t.jsx)(s.code,{children:"my_test_set"})," defined in this section as such:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-yaml",children:"selection_test_sets:\n  - name: my_test_set\n    user_attributes:\n      organization: org1\n    parameters:\n      my_single_select_param: x3\n"})}),"\n",(0,t.jsxs)(s.p,{children:["For each test set, the ",(0,t.jsx)(s.strong,{children:"name"})," field is required, and the ",(0,t.jsx)(s.strong,{children:"user_attributes"})," and ",(0,t.jsx)(s.strong,{children:"parameters"})," fields are optional."]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"name"})," - The assigned name of the test set to make it easy to reference elsewhere. If the name ",(0,t.jsx)(s.code,{children:"default"})," is defined, it overrides the default selections if no test set is not explicitly referenced."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"user_attributes"})," - If authentication is used, the values of required user attributes (i.e., the attributes defined in the User class in ",(0,t.jsx)(s.code,{children:"pyconfigs/auth.py"}),") are defined here.","\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["If needed, you can override the ",(0,t.jsx)(s.strong,{children:"username"})," and ",(0,t.jsx)(s.strong,{children:"is_internal"})," attributes here as well. If omitted, default values are empty string for ",(0,t.jsx)(s.strong,{children:"username"})," and false for ",(0,t.jsx)(s.strong,{children:"is_internal"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"parameters"})," - The selected parameter values to test with are defined here. For any parameter names that are not specified here, the default selected value is used."]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["Then, you can test the generation of SQL queries from the Jinja templates using the selections defined in ",(0,t.jsx)(s.code,{children:"my_test_set"})," with ",(0,t.jsx)(s.code,{children:"sqrl compile --test-set my_test_set"}),". If no ",(0,t.jsx)(s.code,{children:"--test-set"})," option is specified, it will use the test set named ",(0,t.jsx)(s.code,{children:"default"})," if it exists, or use all the default values for each parameter selection."]}),"\n",(0,t.jsx)(s.admonition,{type:"warning",children:(0,t.jsxs)(s.p,{children:["If using authentication and a user attibute is being referenced (in a model for instance), then the test set used with the ",(0,t.jsx)(s.code,{children:"sqrl compile"})," command must define it in the ",(0,t.jsx)(s.strong,{children:"user_attributes"})," field. If the user_attribute is not defined for a test set named ",(0,t.jsx)(s.code,{children:"default"}),", then using the ",(0,t.jsx)(s.code,{children:"sqrl compile"})," command without specifying the ",(0,t.jsx)(s.code,{children:"--test-set"})," option will not work."]})}),"\n",(0,t.jsx)(s.h3,{id:"datasets",children:"datasets"}),"\n",(0,t.jsxs)(s.p,{children:["This section defines the datasets to serve as API endpoints. The following example defines a dataset named ",(0,t.jsx)(s.code,{children:"my_dataset"}),"."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-yaml",children:"datasets:\n  - name: my_dataset\n    label: My Dataset\n    model: my_model\n    scope: public\n    parameters:\n      - my_param\n    traits:\n      my_field: value\n"})}),"\n",(0,t.jsxs)(s.p,{children:["For each dataset, the ",(0,t.jsx)(s.strong,{children:"name"})," field is required, and the other fields are optional."]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"name"})," - The name of the dataset, and is part of URL paths for the parameters and dataset result APIs."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"label"})," - The human-friendly title of the dataset that's provided through the catalog API response. If omitted, the ",(0,t.jsx)(s.strong,{children:"name"})," is used by default."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"model"})," - The target model for the dataset. If omitted, the ",(0,t.jsx)(s.strong,{children:"name"})," is used by default."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"scope"})," - One of ",(0,t.jsx)(s.strong,{children:"public"}),", ",(0,t.jsx)(s.strong,{children:"protected"}),", or ",(0,t.jsx)(s.strong,{children:"private"}),". All users (authenticated or not) can access public datasets, only authenticated users can access protected datasets, and only internal users can access private datasets. If omitted, default is ",(0,t.jsx)(s.strong,{children:"public"}),"."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"parameters"})," - The list of parameters that this dataset uses. If omitted, all parameters are used."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"traits"})," - A set of variable values defined under this dataset, which may affect the behaviour of data models."]}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"dbviews",children:"dbviews"}),"\n",(0,t.jsxs)(s.p,{children:["This section allows you to define configurations for dbview models in YAML. The following example sets configurations for a dbview model named ",(0,t.jsx)(s.code,{children:"my_dbview"}),"."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-yaml",children:"dbviews:\n  - name: my_dbview\n    connection_name: my_conn\n"})}),"\n",(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.strong,{children:"name"})," field is required and other fields are optional."]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"name"})," - The name of the dbview model, which should also be the name of a SQL file in the ",(0,t.jsx)(s.code,{children:"models/dbviews/"})," folder"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"connection_name"})," - The connection name of the database this model runs on. See ",(0,t.jsx)(s.a,{href:"./database",children:"Database Connections"})," for more information on defining connection names."]}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"federates",children:"federates"}),"\n",(0,t.jsxs)(s.p,{children:["This section allows you to define configurations for federate models in YAML. The following example sets configurations for a federate model named ",(0,t.jsx)(s.code,{children:"my_federate"}),"."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-yaml",children:"federates:\n  - name: my_federate\n    materialized: view\n"})}),"\n",(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.strong,{children:"name"})," field is required and other fields are optional."]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"name"})," - The name of the federate model, which should also be the name of a SQL file in the ",(0,t.jsx)(s.code,{children:"models/federates/"})," folder."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"materialized"}),' - Defines how the federate model gets materialized in the in-memory database. Options are "table" and "view", with "table" being the default (unless specified otherwise with the ',(0,t.jsx)(s.strong,{children:"defaults.federates.materialized"})," ",(0,t.jsx)(s.a,{href:"./settings",children:"setting"}),")."]}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"settings",children:"settings"}),"\n",(0,t.jsxs)(s.p,{children:["This section defines certain settings that Squirrels would apply to the project. See the ",(0,t.jsx)(s.a,{href:"./settings",children:"Project Settings"})," page for the available settings, descriptions, and default values."]})]})}function h(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},1151:(e,s,n)=>{n.d(s,{Z:()=>o,a:()=>a});var t=n(7294);const r={},i=t.createContext(r);function a(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);