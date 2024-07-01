"use strict";(self.webpackChunksquirrels_docs=self.webpackChunksquirrels_docs||[]).push([[668],{41:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var s=n(5893),r=n(1151);const i={},a="Quickstart",o={id:"docs/quickstart",title:"Quickstart",description:"This quickstart guide / tutorial will walk you through creating your own Squirrels APIs! You will start with a single command to create a sample Squirrels project (for expense transactions analytics), and then alter the project to create your own APIs for weather analytics. Once you've completed the tutorial, you will understand most of the key features of Squirrels!",source:"@site/docs/docs/quickstart.md",sourceDirName:"docs",slug:"/docs/quickstart",permalink:"/docs/docs/quickstart",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"What is Squirrels?",permalink:"/docs/docs/intro"},next:{title:"Squirrels Developer Topics",permalink:"/docs/docs/topics"}},l={},c=[{value:"Installation",id:"installation",level:2},{value:"Step 1: Create a Sample Project",id:"step-1-create-a-sample-project",level:2},{value:"Add The Weather Database",id:"add-the-weather-database",level:3},{value:"Step 2: Configure the Squirrels Project File",id:"step-2-configure-the-squirrels-project-file",level:2},{value:"Setting the Project Variables",id:"setting-the-project-variables",level:3},{value:"Setting the Database Connections",id:"setting-the-database-connections",level:3},{value:"Defining the Datasets",id:"defining-the-datasets",level:3},{value:"Step 3: Create the Dataset Parameters",id:"step-3-create-the-dataset-parameters",level:2},{value:"Define the Parameter Options",id:"define-the-parameter-options",level:3},{value:"Define the Parameters",id:"define-the-parameters",level:3},{value:"Step 4: Create the SQL Queries",id:"step-4-create-the-sql-queries",level:2},{value:"Define the Database View",id:"define-the-database-view",level:3},{value:"Define the Final View",id:"define-the-final-view",level:3},{value:"Step 5: Test the REST APIs",id:"step-5-test-the-rest-apis",level:2},{value:"Test the Rendered SQL Queries",id:"test-the-rendered-sql-queries",level:3},{value:"Using Selection Test Sets",id:"using-selection-test-sets",level:3},{value:"Step 6: Use the Context File",id:"step-6-use-the-context-file",level:2},{value:"What&#39;s Next?",id:"whats-next",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"quickstart",children:"Quickstart"}),"\n",(0,s.jsx)(t.p,{children:"This quickstart guide / tutorial will walk you through creating your own Squirrels APIs! You will start with a single command to create a sample Squirrels project (for expense transactions analytics), and then alter the project to create your own APIs for weather analytics. Once you've completed the tutorial, you will understand most of the key features of Squirrels!"}),"\n",(0,s.jsxs)(t.p,{children:["Python 3.9 or higher is required. Confirm the appropriate version of ",(0,s.jsx)(t.a,{href:"https://www.python.org/downloads/",children:"Python"})," is installed by running:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"python --version\n"})}),"\n",(0,s.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n",(0,s.jsx)(t.p,{children:"Starting with an empty folder for your Squirrels project, create and activate a Python virtual environment for your project."}),"\n",(0,s.jsxs)(t.admonition,{type:"tip",children:[(0,s.jsxs)(t.p,{children:["There are a number of ways to create a Python virtual environment. One of the most common ways is by running ",(0,s.jsx)(t.code,{children:"python -m venv .venv"}),' in the terminal. This will create a ".venv" folder in your project.']}),(0,s.jsx)(t.p,{children:"Then, activate the virtual environment by doing one of the following:"}),(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["run ",(0,s.jsx)(t.code,{children:".venv/Scripts/activate"})," in a Windows terminal, or"]}),"\n",(0,s.jsxs)(t.li,{children:["run ",(0,s.jsx)(t.code,{children:"source .venv/bin/activate"})," in a Mac/Linux terminal, or"]}),"\n",(0,s.jsxs)(t.li,{children:["in VSCode, install the Python extension, press ",(0,s.jsx)(t.code,{children:"Ctrl+Shift+P"}),", go to ",(0,s.jsx)(t.code,{children:"Python: Select Interpreter"}),', and select the ".venv" folder you just created such that VSCode will always activate it for you when opening the project']}),"\n"]})]}),"\n",(0,s.jsx)(t.p,{children:"To install the Squirrels library in your virtual environment, run:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:'pip install "squirrels>=0.3.0,<0.4.0"\n'})}),"\n",(0,s.jsx)(t.p,{children:"To confirm it installed properly, run:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"squirrels --version\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Or simply run ",(0,s.jsx)(t.code,{children:"sqrl --version"})," for short."]}),"\n",(0,s.jsx)(t.h2,{id:"step-1-create-a-sample-project",children:"Step 1: Create a Sample Project"}),"\n",(0,s.jsx)(t.p,{children:"You can initialize the project files using:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"sqrl init --core\n"})}),"\n",(0,s.jsxs)(t.admonition,{type:"note",children:[(0,s.jsxs)(t.p,{children:["If you choose to run ",(0,s.jsx)(t.code,{children:"sqrl init"})," without the ",(0,s.jsx)(t.code,{children:"--core"})," option, a set of prompts will appear for the various files you wish to include in your project. For this tutorial, you would answer the prompts as follows:"]}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-config",children:"[?] Include all core project files? (Y/n): y\n\n[?] How would you like to configure the database connections?: yml\n > yml\n   py\n\n[?] How would you like to configure the parameters?: py (recommended)\n > py (recommended)\n   yml\n\n[?] What's the file format for the database view model?: sql\n > sql\n   py\n\n[?] What's the file format for the federated model?: sql\n > sql\n   py\n\n[?] Do you want to add the 'auth.py' file? (y/N): n\n\n[?] What sample sqlite database do you wish to use (if any)?: expenses\n   none\n > expenses\n   weather\n"})})]}),"\n",(0,s.jsx)(t.p,{children:"Once the command is executed, a set of folders/files are created for a sample project. Go ahead and take a quick glance at the new files (no need to fully understand them now). Then, run the API server using the command:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"sqrl run\n"})}),"\n",(0,s.jsxs)(t.p,{children:["In a web browser, go to ",(0,s.jsx)(t.code,{children:"http://localhost:4465/"}),'. This leads you to the Squirrels Testing UI, a convenient interface for testing the REST APIs created by your Squirrels project. Click the "Apply" button to display the dataset for the default parameter selections (feel free to play around with different parameter selections).']}),"\n",(0,s.jsxs)(t.p,{children:["To find OpenAPI/Swagger documentation on the REST APIs, go to ",(0,s.jsx)(t.code,{children:"http://localhost:4465/docs"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"You can enter the following URLs directly to access the JSON response:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["Parameters API: ",(0,s.jsx)(t.code,{children:"http://localhost:4465/squirrels-v0/sample/v1/dataset/dataset-example/parameters"})]}),"\n",(0,s.jsxs)(t.li,{children:["Dataset Result API: ",(0,s.jsx)(t.code,{children:"http://localhost:4465/squirrels-v0/sample/v1/dataset/dataset-example"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Note: default parameter selections are used when no query parameters are specified"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:'After you\'re done with the API server, you can shut it down in the terminal with "Ctrl+C".'}),"\n",(0,s.jsx)(t.h3,{id:"add-the-weather-database",children:"Add The Weather Database"}),"\n",(0,s.jsx)(t.p,{children:"Now, we will use the init command again to add another sqlite database for the rest of the tutorial. Run:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"sqrl init --sample-db weather\n"})}),"\n",(0,s.jsxs)(t.p,{children:["This adds a ",(0,s.jsx)(t.code,{children:"weather.db"})," file in the ",(0,s.jsx)(t.code,{children:"database"})," folder."]}),"\n",(0,s.jsx)(t.h2,{id:"step-2-configure-the-squirrels-project-file",children:"Step 2: Configure the Squirrels Project File"}),"\n",(0,s.jsxs)(t.p,{children:["Open the ",(0,s.jsx)(t.a,{href:"./topics/project-file",children:"squirrels.yml"})," file. This is the Squirrels project file to configure most of the properties of the Squirrels project in ",(0,s.jsx)(t.a,{href:"https://yaml.org/",children:"yaml"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["In this step, we will focus on the ",(0,s.jsx)(t.strong,{children:"project_variables"}),", ",(0,s.jsx)(t.strong,{children:"connections"}),", and ",(0,s.jsx)(t.strong,{children:"datasets"})," sections."]}),"\n",(0,s.jsx)(t.h3,{id:"setting-the-project-variables",children:"Setting the Project Variables"}),"\n",(0,s.jsxs)(t.p,{children:["The project variables ",(0,s.jsx)(t.strong,{children:"name"})," and ",(0,s.jsx)(t.strong,{children:"major_version"})," are required. The ",(0,s.jsx)(t.strong,{children:"label"})," is optional, and will use the ",(0,s.jsx)(t.strong,{children:"name"})," if not specified. You are also free to add any of your own project variables here."]}),"\n",(0,s.jsxs)(t.p,{children:["In this tutorial, we will be making datasets for historical weather data. Change the ",(0,s.jsx)(t.strong,{children:"name"})," to ",(0,s.jsx)(t.code,{children:"weather"})," and ",(0,s.jsx)(t.strong,{children:"label"})," to ",(0,s.jsx)(t.code,{children:"Weather Analytics"})," (we will leave ",(0,s.jsx)(t.strong,{children:"major_version"})," as is)."]}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.strong,{children:"project_variables"})," section should now look like this:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yaml",children:"project_variables:\n  name: weather\n  label: Weather Analytics\n  major_version: 1\n"})}),"\n",(0,s.jsx)(t.h3,{id:"setting-the-database-connections",children:"Setting the Database Connections"}),"\n",(0,s.jsxs)(t.p,{children:["This section is where we set all the database connection details that we need. We provide a list of connection names here and refer to them in other files. The connection name ",(0,s.jsx)(t.code,{children:"default"})," must be provided for models that don't set a connection name explicitly."]}),"\n",(0,s.jsxs)(t.p,{children:["Under ",(0,s.jsx)(t.code,{children:"default"}),", change the url to ",(0,s.jsx)(t.code,{children:"sqlite:///./database/weather.db"}),"."]}),"\n",(0,s.jsxs)(t.admonition,{type:"tip",children:[(0,s.jsxs)(t.p,{children:["You can also substitute environment variables defined in the ",(0,s.jsx)(t.a,{href:"./topics/environcfg",children:"environcfg.yml"})," file using ",(0,s.jsx)(t.a,{href:"https://jinja.palletsprojects.com/",children:"Jinja"}),'. For instance, if there is an environment variable called "sqlite_conn_str" in ',(0,s.jsx)(t.a,{href:"./topics/environcfg",children:"environcfg.yml"}),", then you can set the url of ",(0,s.jsx)(t.code,{children:"default"})," to:"]}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"{{ env_vars.sqlite_conn_str }}\n"})})]}),"\n",(0,s.jsxs)(t.p,{children:["The syntax for the URL uses ",(0,s.jsx)(t.a,{href:"https://docs.sqlalchemy.org/en/20/core/engines.html#database-urls",children:"sqlalchemy database URLs"}),". Since sqlite databases don't require a username and password, the ",(0,s.jsx)(t.strong,{children:"credential"})," field can be either set to ",(0,s.jsx)(t.code,{children:"null"})," or omitted entirely. More details on setting and using credential keys and connections can be found in the ",(0,s.jsx)(t.a,{href:"./topics/database",children:"Database Connections"})," page."]}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.strong,{children:"connections"})," section should now look like this:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yaml",children:"connections:\n  - name: default\n    credential: null\n    url: sqlite:///./database/weather.db\n"})}),"\n",(0,s.jsx)(t.h3,{id:"defining-the-datasets",children:"Defining the Datasets"}),"\n",(0,s.jsx)(t.p,{children:'This section is where we define the attributes for all datasets created by the Squirrels project. Every dataset defined will have their own "parameters API" and "dataset result API".'}),"\n",(0,s.jsxs)(t.p,{children:["Change the first dataset name to ",(0,s.jsx)(t.code,{children:"weather_by_time"})," and label to ",(0,s.jsx)(t.code,{children:"Weather by Time of Year"}),'. Remove all parameters except "group_by", and rename it to "group_by_dim". Fields ',(0,s.jsx)(t.strong,{children:"scope"})," and ",(0,s.jsx)(t.strong,{children:"traits"})," can be omitted."]}),"\n",(0,s.jsx)(t.p,{children:"Remove the second dataset."}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.strong,{children:"datasets"})," section should now look like this:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yaml",children:"datasets:\n  - name: weather_by_time\n    label: Weather by Time of Year\n    parameters:\n      - group_by_dim\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Every dataset name that's set in the ",(0,s.jsx)(t.strong,{children:"datasets"})," section must also have a matching file name somewhere in ",(0,s.jsx)(t.code,{children:"models"})," folder. At this point, we can rename the following models files:"]}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["In the ",(0,s.jsx)(t.code,{children:"models/federates"})," folder, rename ",(0,s.jsx)(t.code,{children:"dataset_example.sql"})," to ",(0,s.jsx)(t.code,{children:"weather_by_time.sql"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:["In the ",(0,s.jsx)(t.code,{children:"models/dbviews"})," folder, rename ",(0,s.jsx)(t.code,{children:"database_view1.sql"})," to ",(0,s.jsx)(t.code,{children:"aggr_weather_metrics.sql"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["More details on the Squirrels project file can be found at ",(0,s.jsx)(t.a,{href:"./topics/project-file",children:"Squirrels Project File"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"step-3-create-the-dataset-parameters",children:"Step 3: Create the Dataset Parameters"}),"\n",(0,s.jsxs)(t.p,{children:["Go into the ",(0,s.jsx)(t.code,{children:"pyconfigs/parameters.py"})," file. This file contains the definitions of all the widget parameters used in the dataset through a ",(0,s.jsx)(t.strong,{children:"main"})," function."]}),"\n",(0,s.jsx)(t.admonition,{type:"info",children:(0,s.jsxs)(t.p,{children:["The possible widget parameter types supported today are ",(0,s.jsx)(t.strong,{children:"SingleSelectParameter"}),", ",(0,s.jsx)(t.strong,{children:"MultiSelectParameter"}),", ",(0,s.jsx)(t.strong,{children:"DateParameter"}),", ",(0,s.jsx)(t.strong,{children:"DateRangeParameter"}),", ",(0,s.jsx)(t.strong,{children:"NumberParameter"}),", and ",(0,s.jsx)(t.strong,{children:"NumberRangeParameter"}),". Each parameter type can be created with one of the factory method ",(0,s.jsx)(t.strong,{children:"Create"}),", ",(0,s.jsx)(t.strong,{children:"CreateSimple"}),", or ",(0,s.jsx)(t.strong,{children:"CreateFromSource"}),', which exists as class methods on each parameter type. Every factory method takes "name" and "label" as required arguments.']})}),"\n",(0,s.jsxs)(t.p,{children:["We will rewrite this file, so remove all the existing code in the ",(0,s.jsx)(t.strong,{children:"main"})," function body. We will create one single-select parameter to specify the dimension to group by."]}),"\n",(0,s.jsx)(t.h3,{id:"define-the-parameter-options",children:"Define the Parameter Options"}),"\n",(0,s.jsxs)(t.p,{children:["We first need to specify the list of parameter options. Inside the ",(0,s.jsx)(t.strong,{children:"main"})," function, specify the list of options as such:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"group_by_options = [\n    sr.SelectParameterOption('0', 'Year', dim_col='year'),\n    sr.SelectParameterOption('1', 'Quarter', dim_col='quarter'),\n    sr.SelectParameterOption('2', 'Month', dim_col='month_name', order_by_col='month_order'),\n    sr.SelectParameterOption('3', 'Day of Year', dim_col='day_of_year'),\n    sr.SelectParameterOption('4', 'Condition', dim_col='condition')\n]\n"})}),"\n",(0,s.jsxs)(t.p,{children:["The first two parameters to the ",(0,s.jsx)(t.strong,{children:"SelectParameterOption"}),' constructors are the ID and label. The ID must be distinct across options and should never change in the future. If an API client associates ID "3" to mean "the dataset will be grouped by day of year", then the ID must always stay as "3" such that this association would never be broken... even if the label of the option changes to "Day Index of Year" in the future.']}),"\n",(0,s.jsxs)(t.p,{children:['Arbitrary keyword arguments such as "dim_col" and "order_by_col" can be specified to the ',(0,s.jsx)(t.strong,{children:"SelectParameterOption"})," constructor, which will be treated as custom fields to the parameter option. For more info, see the ",(0,s.jsx)(t.a,{href:"./topics/parameters",children:"Widget Parameters"})," page."]}),"\n",(0,s.jsx)(t.admonition,{type:"info",children:(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.strong,{children:"SelectParameterOption"}),' class has an "is_default" attribute to specify the parameter option(s) that are selected by default. By default, "is_default" is set to False. When none of the parameter options have "is_default" set as True, the first option is selected by default for single-select parameters, and nothing is selected by default for multi-select parameters.']})}),"\n",(0,s.jsx)(t.h3,{id:"define-the-parameters",children:"Define the Parameters"}),"\n",(0,s.jsx)(t.p,{children:"Create a single-select parameter using the options defined above with:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:'sr.SingleSelectParameter.CreateSimple("group_by_dim", "Group By", group_by_options)\n'})}),"\n",(0,s.jsx)(t.p,{children:'This sets the name and label of the new parameter to "group_by_dim" and "Group By".'}),"\n",(0,s.jsx)(t.admonition,{type:"info",children:(0,s.jsxs)(t.p,{children:["For ",(0,s.jsx)(t.strong,{children:"SingleSelectParameter"}),", the arguments for ",(0,s.jsx)(t.strong,{children:"CreateSimple"})," and ",(0,s.jsx)(t.strong,{children:"Create"})," are very similar, except ",(0,s.jsx)(t.strong,{children:"Create"})," lets you specify a parent parameter for cascading the shown options. For non-select parameter types like ",(0,s.jsx)(t.strong,{children:"DateParameter"}),", ",(0,s.jsx)(t.strong,{children:"Create"})," lets you specify a parent parameter and a list of ",(0,s.jsx)(t.strong,{children:"DateParameterOption"})," (to use a different default_date based on selected parent option), while ",(0,s.jsx)(t.strong,{children:"CreateSimple"}),' takes a single "default_date" instead.']})}),"\n",(0,s.jsxs)(t.p,{children:["At this point, your ",(0,s.jsx)(t.a,{href:"./topics/parameters",children:"parameters.py"})," file should look something like this:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"import squirrels as sr\n\ndef main(sqrl: sr.ParametersArgs) -> None:\n    group_by_options = [\n        sr.SelectParameterOption('0', 'Year', dim_col='year'),\n        sr.SelectParameterOption('1', 'Quarter', dim_col='quarter'),\n        sr.SelectParameterOption('2', 'Month', dim_col='month_name', order_by_col='month_order'),\n        sr.SelectParameterOption('3', 'Day of Year', dim_col='day_of_year'),\n        sr.SelectParameterOption('4', 'Condition', dim_col='condition')\n    ]\n    sr.SingleSelectParameter.Create(\"group_by_dim\", \"Group By\", group_by_options)\n"})}),"\n",(0,s.jsx)(t.h2,{id:"step-4-create-the-sql-queries",children:"Step 4: Create the SQL Queries"}),"\n",(0,s.jsxs)(t.p,{children:["In this step, we will edit the ",(0,s.jsx)(t.code,{children:"models/dbviews/aggr_weather_metrics.sql"})," and ",(0,s.jsx)(t.code,{children:"models/federates/weather_by_time.sql"})," files to create a pipeline of sql transformations that return tabular results for the dataset."]}),"\n",(0,s.jsx)(t.admonition,{type:"info",children:(0,s.jsxs)(t.p,{children:["These sql query can be templated using Jinja, with access to a variety of dictionaries such as ",(0,s.jsx)(t.strong,{children:"prms"}),", ",(0,s.jsx)(t.strong,{children:"ctx"}),", and ",(0,s.jsx)(t.strong,{children:"traits"}),', which stand for "Parameter Set", "Context", and "Traits". More information about these variables can be found in the ',(0,s.jsx)(t.a,{href:"./topics/models-sql",children:"SQL Models"})," page. For now, just know that we can access parameters with ",(0,s.jsx)(t.code,{children:"prms.parameter_name"})," in Jinja, and access selected value(s) of the parameter by calling certain methods (such as ",(0,s.jsx)(t.strong,{children:"get_selected"})," or ",(0,s.jsx)(t.strong,{children:"get_selected_label"}),")."]})}),"\n",(0,s.jsx)(t.h3,{id:"define-the-database-view",children:"Define the Database View"}),"\n",(0,s.jsxs)(t.p,{children:["In ",(0,s.jsx)(t.code,{children:"aggr_weather_metrics.sql"}),", change its contents to the following:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:'{%- set dim_col = prms["group_by_dim"].get_selected("dim_col") -%}\n{%- set order_col = prms["group_by_dim"].get_selected("order_by_col", default_field="dim_col") -%}\n\nSELECT {{ dim_col }}\n    , {{ order_col }} as ordering\n    , avg(temp_max) as temperature_high_C\n    , avg(temp_min) as temperature_low_C\n    , avg(precipitation) as precipitation_inches\n    , avg(wind) as wind_mph\nFROM weather\nGROUP BY {{ dim_col }}, {{ order_col }}\n'})}),"\n",(0,s.jsx)(t.p,{children:'This query finds the average temperature, precipitation level, and wind speed by group based the selected value of the "group_by_dim" parameter (year, year of month, day of year, etc.).'}),"\n",(0,s.jsx)(t.admonition,{type:"info",children:(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.strong,{children:"set"})," keyword is Jinja syntax for assigning variables. The ",(0,s.jsx)(t.code,{children:"prms['group_by_dim']"})," returns a ",(0,s.jsx)(t.strong,{children:"SingleSelectParameter"})," (as we previously defined in ",(0,s.jsx)(t.a,{href:"./topics/parameters",children:"parameters.py"}),"), which contains the method ",(0,s.jsx)(t.strong,{children:"get_selected"})," for getting specific fields of the selected ",(0,s.jsx)(t.strong,{children:"SelectParameterOption"}),'. We\'ve previously defined "dim_col" in all the options in ',(0,s.jsx)(t.a,{href:"./topics/parameters",children:"parameters.py"}),', but only specified "order_by_col" for one of the options. The ',(0,s.jsx)(t.strong,{children:"get_selected"}),' method has the argument "default_field" to pick "dim_col" for the "order_by_col" if "order_by_col" does not exist as a custom field.']})}),"\n",(0,s.jsx)(t.h3,{id:"define-the-final-view",children:"Define the Final View"}),"\n",(0,s.jsxs)(t.p,{children:["In ",(0,s.jsx)(t.code,{children:"weather_by_time.sql"}),", change its contents to the following:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:'{%- set dim_col = prms["group_by_dim"].get_selected("dim_col") -%}\n\nSELECT {{ dim_col }}\n    , temperature_high_C\n    , temperature_low_C\n    , precipitation_inches\n    , wind_mph\nFROM {{ ref("aggr_weather_metrics") }}\nORDER BY ordering\n'})}),"\n",(0,s.jsx)(t.p,{children:'This query takes the result of "aggr_weather_metrics" and orders by a column called "ordering".'}),"\n",(0,s.jsxs)(t.admonition,{type:"note",children:[(0,s.jsxs)(t.p,{children:["A few things to note here about the ",(0,s.jsx)(t.code,{children:"weather_by_time.sql"})," model:"]}),(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:'In this query, we are selecting all columns except the "ordering" column, which is what we use in the "ORDER BY" clause instead.'}),"\n",(0,s.jsxs)(t.li,{children:["The ",(0,s.jsx)(t.strong,{children:"ref"})," function exists for federate models to reference other models (i.e., dbviews, seeds, or other federate models). In this example, the model depends on running the results from ",(0,s.jsx)(t.code,{children:"aggr_weather_metrics.sql"})," first. Squirrels takes care of the order of model execution for you."]}),"\n",(0,s.jsxs)(t.li,{children:['The first line where we set "dim_col" is repeated in ',(0,s.jsx)(t.code,{children:"aggr_weather_metrics.sql"})," as well. This can be avoided either by using ",(0,s.jsx)(t.a,{href:"https://ttl255.com/jinja2-tutorial-part-6-include-and-import/",children:"Jinja's include/import"}),", or by using the ",(0,s.jsx)(t.a,{href:"./topics/context",children:"context.py"})," file which will be shown later in the tutorial."]}),"\n"]})]}),"\n",(0,s.jsx)(t.h2,{id:"step-5-test-the-rest-apis",children:"Step 5: Test the REST APIs"}),"\n",(0,s.jsx)(t.p,{children:"To activate the API server, simply run:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"sqrl run\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Then, in a web browser, go to ",(0,s.jsx)(t.code,{children:"http://localhost:4465/"})," to open the Squirrels Testing UI to interact with the dataset APIs you created!"]}),"\n",(0,s.jsx)(t.p,{children:'Remember to shut down the API server by pressing "Ctrl+C" before proceeding.'}),"\n",(0,s.jsx)(t.h3,{id:"test-the-rendered-sql-queries",children:"Test the Rendered SQL Queries"}),"\n",(0,s.jsx)(t.p,{children:"In practice, you may wish to review what the rendered SQL queries look like (for some set of parameter selections) before actually running the queries."}),"\n",(0,s.jsxs)(t.p,{children:["To do so for the ",(0,s.jsx)(t.code,{children:"weather_by_time"})," dataset (using the default parameter selections), run:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"sqrl compile --dataset weather_by_time\n"})}),"\n",(0,s.jsxs)(t.p,{children:["This creates the folder path ",(0,s.jsx)(t.code,{children:"target/compile/weather_by_time/default"})," with the compiled SQL queries for all the relevant SQL models (without actually running them)."]}),"\n",(0,s.jsx)(t.admonition,{type:"tip",children:(0,s.jsxs)(t.p,{children:["You can also use ",(0,s.jsx)(t.code,{children:"-d"})," instead of ",(0,s.jsx)(t.code,{children:"--dataset"}),". You may also use ",(0,s.jsx)(t.code,{children:"-D"})," or ",(0,s.jsx)(t.code,{children:"--all-datasets"})," to compile for all datasets."]})}),"\n",(0,s.jsx)(t.p,{children:"If you only care about compiling one model, you can run:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"sqrl compile --dataset weather_by_time --select weather_by_time\n"})}),"\n",(0,s.jsxs)(t.p,{children:["In addition to writing the file in the ",(0,s.jsx)(t.code,{children:"target"})," folder, this will print out the compiled SQL query as well."]}),"\n",(0,s.jsxs)(t.p,{children:["If ",(0,s.jsx)(t.code,{children:"--dataset"})," is not specified, then the ",(0,s.jsx)(t.code,{children:"--select"})," option is ignored. This is because the ",(0,s.jsx)(t.strong,{children:"traits"})," are undefined without specifying the dataset."]}),"\n",(0,s.jsx)(t.admonition,{type:"tip",children:(0,s.jsxs)(t.p,{children:["You can also use ",(0,s.jsx)(t.code,{children:"-s"})," instead of ",(0,s.jsx)(t.code,{children:"--select"}),". You can choose to run the sql query with the ",(0,s.jsx)(t.code,{children:"--runquery"})," or ",(0,s.jsx)(t.code,{children:"-r"})," option. When used in conjunction with ",(0,s.jsx)(t.code,{children:"-s"})," or ",(0,s.jsx)(t.code,{children:"--select"}),", this will compile and run all the upstream models as well. You can find the run results as csv files in the ",(0,s.jsx)(t.code,{children:"target"})," folder."]})}),"\n",(0,s.jsx)(t.h3,{id:"using-selection-test-sets",children:"Using Selection Test Sets"}),"\n",(0,s.jsx)(t.p,{children:"To test on non-default parameter selections, you would define and use test sets. Suppose you want to group by month instead of grouping by year (the default parameter selection)."}),"\n",(0,s.jsxs)(t.p,{children:["In the ",(0,s.jsx)(t.a,{href:"./topics/project-file",children:"squirrels.yml"})," file, replace the ",(0,s.jsx)(t.strong,{children:"selection_test_sets"})," section with:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yaml",children:"selection_test_sets:\n  - name: group_by_month\n    datasets:\n      - weather_by_time\n    parameters:\n      group_by_dim: '2'\n"})}),"\n",(0,s.jsxs)(t.p,{children:['The "datasets" field defines the list of datasets that this test set can be applied to, and the "parameters" field defines parameter selections. The selected value for "group_by_dim" is "2", which is the ID for "Month" option defined in ',(0,s.jsx)(t.a,{href:"./topics/parameters",children:"parameters.py"}),". Now you can use the ",(0,s.jsx)(t.code,{children:"--test-set"})," or ",(0,s.jsx)(t.code,{children:"-t"})," option on the ",(0,s.jsx)(t.strong,{children:"compile"})," command to specify the test set to compile with:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"sqrl compile --dataset weather_by_time --test-set group_by_month\n"})}),"\n",(0,s.jsxs)(t.p,{children:["This creates new files in the ",(0,s.jsx)(t.code,{children:"target/compile/weather_by_time/group_by_month"}),' folder (not the "target/compile/weather_by_time/',(0,s.jsx)(t.strong,{children:"default"}),'" folder we saw before).']}),"\n",(0,s.jsxs)(t.p,{children:["See ",(0,s.jsx)(t.code,{children:"sqrl compile --help"})," or the ",(0,s.jsx)(t.a,{href:"../references/cli/compile",children:"compile command"})," page for more details."]}),"\n",(0,s.jsx)(t.h2,{id:"step-6-use-the-context-file",children:"Step 6: Use the Context File"}),"\n",(0,s.jsxs)(t.p,{children:["Let's revisit the files in the models folder. In both files, we use ",(0,s.jsx)(t.code,{children:'prms["group_by_dim"].get_selected("dim_col")'}),' to get the "dim_col" attribute from the selected parameter option. Writing this sort of "Python-like" code in a SQL/Jinja file can be a poor developer experience, especially if you\'re using an IDE that can provide auto-completion for Python files.']}),"\n",(0,s.jsxs)(t.p,{children:["Instead, we can use the ",(0,s.jsx)(t.code,{children:"pyconfigs/context.py"})," file to improve the developer experience. We use its ",(0,s.jsx)(t.strong,{children:"main"})," function to transform all selected parameter options into meaningful values that can be used by the models, and set them as key-value pairs in a dictionary called ",(0,s.jsx)(t.strong,{children:"ctx"}),". Then, in the SQL/Jinja files, the dictionary values can be referenced using the ",(0,s.jsx)(t.strong,{children:"ctx"})," keyword."]}),"\n",(0,s.jsxs)(t.p,{children:["For example, we can update the ",(0,s.jsx)(t.a,{href:"./topics/context",children:"context.py"})," file contents to look like this:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:'from typing import Any\nimport squirrels as sr\n\ndef main(ctx: dict[str, Any], sqrl: sr.ContextArgs) -> None:\n    if "group_by_dim" in sqrl.prms:\n        group_by_param: sr.SingleSelectParameter = sqrl.prms["group_by_dim"]\n        ctx["dim_col"] = group_by_param.get_selected("dim_col")\n        ctx["order_col"] = group_by_param.get_selected("order_by_col", default_field="dim_col")\n'})}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsxs)(t.p,{children:["Notice that type hints were added to ",(0,s.jsx)(t.strong,{children:"group_by_param"})," variable. This is useful to provide the IDE required information to suggest appropriate methods for auto-complete. With a list of suggestions the moment you type ",(0,s.jsx)(t.code,{children:"group_by_param.get"}),", you don't have to memorize that the ",(0,s.jsx)(t.strong,{children:"get_selected"})," method exists for SingleSelectParameter objects for instance, or what method names are available for other parameter classes, given that the IDE is configured to the correct Python interpreter / virtual environment."]})}),"\n",(0,s.jsxs)(t.p,{children:["The model files can now be modified to reference the context variables instead. In Jinja, we can also choose to reference dictionary values like ",(0,s.jsx)(t.code,{children:"ctx.dim_col"})," instead of ",(0,s.jsx)(t.code,{children:'ctx["dim_col"]'}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["The contents for ",(0,s.jsx)(t.code,{children:"aggr_weather_metrics.sql"})," can be changed to:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:"SELECT {{ ctx.dim_col }}\n    , {{ ctx.order_col }} as ordering\n    , avg(temp_max) as temperature_high_C\n    , avg(temp_min) as temperature_low_C\n    , avg(precipitation) as precipitation_inches\n    , avg(wind) as wind_mph\nFROM weather\nGROUP BY {{ ctx.dim_col }}, {{ ctx.order_col }}\n"})}),"\n",(0,s.jsxs)(t.p,{children:["In addition, the contents for ",(0,s.jsx)(t.code,{children:"weather_by_time.sql"})," can be changed to:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:'SELECT {{ ctx.dim_col }}\n    , temperature_high_C\n    , temperature_low_C\n    , precipitation_inches\n    , wind_mph\nFROM {{ ref("aggr_weather_metrics") }}\nORDER BY ordering\n'})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Congratulations, you have reached the end of the tutorial!"})," We will leave it up to you to try out ",(0,s.jsx)(t.code,{children:"sqrl run"})," or ",(0,s.jsx)(t.code,{children:"sqrl compile"})," again on these new changes."]}),"\n",(0,s.jsx)(t.h2,{id:"whats-next",children:"What's Next?"}),"\n",(0,s.jsx)(t.p,{children:'For an expanded version of the "weather example" project, see the "weather_analytics" folder in the "squirrels-examples" github repo found here:'}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://github.com/squirrels-analytics/squirrels-examples",children:"https://github.com/squirrels-analytics/squirrels-examples"})}),"\n",(0,s.jsx)(t.p,{children:"It serves as a good example of sharing common SQL functionality across multiple datasets while allowing their parameter or query definitions to differ."}),"\n",(0,s.jsx)(t.p,{children:"In addition, the following topics may also useful for your Squirrels projects:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"./topics/placeholders",children:"SQL Placeholders"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Mechanism for using entered values from free-form text parameters in models while preventing SQL injection"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"./topics/seeds",children:"Seeds"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Lookup tables as CSV files stored in the project"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"./topics/auth",children:"Authentication"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"./topics/dateutils",children:"Modify Dates with dateutils"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"./topics/tips/versioning",children:"Versioning Best Practices"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"./topics/tips/deployment",children:"Deploy with Docker"})}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["You can also check out the ",(0,s.jsx)(t.a,{href:"/docs/references/cli",children:"CLI References"})," to understand the commands available with Squirrels, or check out the ",(0,s.jsx)(t.a,{href:"/docs/references/python",children:"Python Classes"})," available in the Squirrels library."]})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>a});var s=n(7294);const r={},i=s.createContext(r);function a(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);