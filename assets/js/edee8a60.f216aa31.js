"use strict";(self.webpackChunksquirrels_docs=self.webpackChunksquirrels_docs||[]).push([[7281],{7229:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"docs/start/tutorial","title":"Tutorial (~30 minutes)","description":"This step-by-step tutorial will walk you through creating your own Squirrels project!","source":"@site/docs/docs/start/tutorial.md","sourceDirName":"docs/start","slug":"/docs/start/tutorial","permalink":"/docs/docs/start/tutorial","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"docs","previous":{"title":"Running the project","permalink":"/docs/docs/start/run-project"},"next":{"title":"Concepts","permalink":"/docs/docs/concepts"}}');var a=n(4848),s=n(8453);const i={},o="Tutorial (~30 minutes)",d={},l=[{value:"Step 1: Bootstrapping a new project",id:"step-1-bootstrapping-a-new-project",level:2},{value:"Step 2: Add the weather database",id:"step-2-add-the-weather-database",level:2},{value:"Step 3: Configure the squirrels.yml file",id:"step-3-configure-the-squirrelsyml-file",level:2},{value:"Setting the project variables",id:"setting-the-project-variables",level:3},{value:"Setting the database connections",id:"setting-the-database-connections",level:3},{value:"Defining the datasets",id:"defining-the-datasets",level:3},{value:"Step 4: Create the dataset parameters",id:"step-4-create-the-dataset-parameters",level:2},{value:"Define the parameter options",id:"define-the-parameter-options",level:3},{value:"Define the parameters",id:"define-the-parameters",level:3},{value:"Step 5: Create the context file",id:"step-5-create-the-context-file",level:2},{value:"Step 6: Create sources",id:"step-6-create-sources",level:2},{value:"Step 7: Create seeds",id:"step-7-create-seeds",level:2},{value:"Step 8: Create data models from SQL queries",id:"step-8-create-data-models-from-sql-queries",level:2},{value:"Define a macro",id:"define-a-macro",level:3},{value:"Define the build model",id:"define-the-build-model",level:3},{value:"Define the federate model",id:"define-the-federate-model",level:3},{value:"Step 9: Development testing",id:"step-9-development-testing",level:2},{value:"Compiling SQL queries",id:"compiling-sql-queries",level:3},{value:"Using selection test sets",id:"using-selection-test-sets",level:3},{value:"What&#39;s next?",id:"whats-next",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"tutorial-30-minutes",children:"Tutorial (~30 minutes)"})}),"\n",(0,a.jsx)(t.p,{children:"This step-by-step tutorial will walk you through creating your own Squirrels project!"}),"\n",(0,a.jsxs)(t.p,{children:["We will start by running the ",(0,a.jsx)(t.a,{href:"../../references/cli/new",children:"sqrl new"})," command to quickly create a working Squirrels project, and then alter it to create a different Squirrels project for weather analytics. Once you've completed the tutorial, you will understand many of the key features of Squirrels!"]}),"\n",(0,a.jsx)(t.h2,{id:"step-1-bootstrapping-a-new-project",children:"Step 1: Bootstrapping a new project"}),"\n",(0,a.jsxs)(t.p,{children:["Create a new folder for your project, and open it up in your favourite coding editor (such as VSCode). The name of the folder is your choice (such as calling it ",(0,a.jsx)(t.code,{children:"sqrl-tutorial"}),")."]}),"\n",(0,a.jsxs)(t.p,{children:["Follow instructions for ",(0,a.jsx)(t.a,{href:"./install",children:"Installation"})," and ",(0,a.jsx)(t.a,{href:"./new-project",children:"Create a new project"})," to quickly get a sample working project going."]}),"\n",(0,a.jsxs)(t.p,{children:["Then, in the ",(0,a.jsx)(t.code,{children:".env"})," file, set the ",(0,a.jsx)(t.code,{children:"SQRL_SECRET__ADMIN_PASSWORD"})," environment variable to something of your choice (it is randomly generated by default)."]}),"\n",(0,a.jsx)(t.h2,{id:"step-2-add-the-weather-database",children:"Step 2: Add the weather database"}),"\n",(0,a.jsx)(t.p,{children:"Now is a good time to add the SQLite database we will use for the rest of the tutorial. Simply run:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"sqrl get-file weather.db\n"})}),"\n",(0,a.jsxs)(t.p,{children:["This adds a ",(0,a.jsx)(t.code,{children:"weather.db"})," file in the ",(0,a.jsx)(t.code,{children:"assets"})," folder. Feel free to remove the other files in the ",(0,a.jsx)(t.code,{children:"assets"})," folder."]}),"\n",(0,a.jsx)(t.p,{children:"Note that this is mainly done for tutorial purposes. For most production use cases, you would simply specify the database connection string (more details on this later) and not bring a copy of the database into your project."}),"\n",(0,a.jsxs)(t.h2,{id:"step-3-configure-the-squirrelsyml-file",children:["Step 3: Configure the ",(0,a.jsx)(t.a,{href:"../../tba",children:"squirrels.yml"})," file"]}),"\n",(0,a.jsxs)(t.p,{children:["Open the ",(0,a.jsx)(t.a,{href:"../../tba",children:"squirrels.yml"})," file. This is the Squirrels project file to configure most of the properties of the Squirrels project in ",(0,a.jsx)(t.a,{href:"https://yaml.org/",children:"yaml"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["In this step, we will focus on the ",(0,a.jsx)(t.strong,{children:"project_variables"}),", ",(0,a.jsx)(t.strong,{children:"connections"}),", and ",(0,a.jsx)(t.strong,{children:"datasets"})," sections."]}),"\n",(0,a.jsx)(t.h3,{id:"setting-the-project-variables",children:"Setting the project variables"}),"\n",(0,a.jsxs)(t.p,{children:["The project variables ",(0,a.jsx)(t.strong,{children:"name"})," and ",(0,a.jsx)(t.strong,{children:"major_version"})," are required. The ",(0,a.jsx)(t.strong,{children:"label"})," and ",(0,a.jsx)(t.strong,{children:"description"})," are optional. You are also free to add any of your own project variables here."]}),"\n",(0,a.jsxs)(t.p,{children:["In this tutorial, we will be making datasets for historical weather data (for an undisclosed location). Change the ",(0,a.jsx)(t.strong,{children:"name"})," to ",(0,a.jsx)(t.code,{children:"weather"}),", ",(0,a.jsx)(t.strong,{children:"label"})," to ",(0,a.jsx)(t.code,{children:"Weather Analytics"}),", and provide a description. We will leave ",(0,a.jsx)(t.strong,{children:"major_version"})," as is."]}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.strong,{children:"project_variables"})," section should now look like this:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-yaml",children:"project_variables:\n  name: weather\n  label: Weather Analytics\n  description: Analyze weather statistics from 2012 to 2015.\n  major_version: 1\n"})}),"\n",(0,a.jsx)(t.h3,{id:"setting-the-database-connections",children:"Setting the database connections"}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.strong,{children:"connections"})," section is where we set all the database connection details that we need. We provide a list of connection names here and refer to them in other files. The connection name ",(0,a.jsx)(t.code,{children:"default"})," must be provided for models that don't specify a connection name explicitly."]}),"\n",(0,a.jsxs)(t.p,{children:["Under ",(0,a.jsx)(t.code,{children:"default"}),", change the uri field to ",(0,a.jsx)(t.code,{children:"sqlite:///{project_path}/assets/weather.db"}),'. Change the label to "SQLite Weather Database".']}),"\n",(0,a.jsxs)(t.admonition,{type:"info",children:[(0,a.jsxs)(t.p,{children:["You can also substitute environment variables defined in the ",(0,a.jsx)(t.a,{href:"../../tba",children:".env"})," file using ",(0,a.jsx)(t.a,{href:"https://jinja.palletsprojects.com/",children:"Jinja"}),'. For instance, if there is an environment variable called "SQLITE_CONN_STR" in ',(0,a.jsx)(t.a,{href:"../../tba",children:".env"}),", then you can also set the url to:"]}),(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"{{ env_vars.SQLITE_CONN_STR }}\n"})})]}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.strong,{children:"connections"})," section should now look like this:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-yaml",children:"connections:\n  - name: default\n    label: SQLite Weather Database\n    type: sqlalchemy\n    uri: sqlite:///{project_path}/assets/weather.db\n"})}),"\n",(0,a.jsx)(t.h3,{id:"defining-the-datasets",children:"Defining the datasets"}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.strong,{children:"datasets"}),' section is where we define the attributes for all datasets created by the Squirrels project. Every dataset defined will have their own "parameters API" and "dataset result API".']}),"\n",(0,a.jsx)(t.p,{children:"Currently, you may see two datasets configured. We will only have one dataset for this tutorial."}),"\n",(0,a.jsxs)(t.p,{children:["Change the ",(0,a.jsx)(t.strong,{children:"datasets"})," section to look like the following instead:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-yaml",children:"datasets:\n  - name: weather_by_period\n    label: Weather by Time of Year\n    description: Gather weather statistics (precipitation, temperature, wind speed, etc.) by time of year or condition\n    model: fdr_weather_by_period\n    parameters:\n      - group_by_dim\n"})}),"\n",(0,a.jsx)(t.p,{children:'The model field is the name of the target data model that we will create later. We will create the "group_by_dim" parameter that this dataset uses in the next step.'}),"\n",(0,a.jsx)(t.h2,{id:"step-4-create-the-dataset-parameters",children:"Step 4: Create the dataset parameters"}),"\n",(0,a.jsxs)(t.p,{children:["Go into the ",(0,a.jsx)(t.code,{children:"pyconfigs/parameters.py"})," file. This file contains the definitions of all the widget parameters used in the dataset through a ",(0,a.jsx)(t.strong,{children:"main"})," function."]}),"\n",(0,a.jsx)(t.admonition,{type:"info",children:(0,a.jsxs)(t.p,{children:["The possible widget parameter types supported today are ",(0,a.jsx)(t.strong,{children:"SingleSelectParameter"}),", ",(0,a.jsx)(t.strong,{children:"MultiSelectParameter"}),", ",(0,a.jsx)(t.strong,{children:"DateParameter"}),", ",(0,a.jsx)(t.strong,{children:"DateRangeParameter"}),", ",(0,a.jsx)(t.strong,{children:"NumberParameter"}),", ",(0,a.jsx)(t.strong,{children:"NumberRangeParameter"}),", and ",(0,a.jsx)(t.strong,{children:"TextParameter"}),". Each parameter type can be created with one of the factory method ",(0,a.jsx)(t.strong,{children:"CreateSimple"}),", ",(0,a.jsx)(t.strong,{children:"CreateWithOptions"}),", or ",(0,a.jsx)(t.strong,{children:"CreateFromSource"}),', which exists as class methods on each parameter type. Every factory method takes "name" and "label" as required arguments.']})}),"\n",(0,a.jsxs)(t.p,{children:["We will rewrite this file. Remove all the existing code in the ",(0,a.jsx)(t.strong,{children:"main"})," function body such that the file starts off like this:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:"from squirrels import ParametersArgs, parameters as p, parameter_options as po, data_sources as ds\n\ndef main(sqrl: ParametersArgs) -> None:\n    # TBA\n"})}),"\n",(0,a.jsx)(t.p,{children:"We will create a single-select parameter to specify the dimension to group by."}),"\n",(0,a.jsx)(t.h3,{id:"define-the-parameter-options",children:"Define the parameter options"}),"\n",(0,a.jsxs)(t.p,{children:["We first need to specify the list of parameter options. Inside the ",(0,a.jsx)(t.strong,{children:"main"})," function, specify the list of options as such:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:"group_by_options = [\n    po.SelectParameterOption('year', 'Year', dim_col='year'),\n    po.SelectParameterOption('quarter', 'Quarter', dim_col='quarter'),\n    po.SelectParameterOption('month', 'Month', dim_col='month_name', order_by_col='month_order'),\n    po.SelectParameterOption('day', 'Day of Year', dim_col='day_of_year'),\n    po.SelectParameterOption('cond', 'Condition', dim_col='condition')\n]\n"})}),"\n",(0,a.jsxs)(t.p,{children:["The first two parameters to the ",(0,a.jsx)(t.strong,{children:"SelectParameterOption"}),' constructors are the ID and label. The ID must be distinct across options and should never change in the future. If an API client associates ID "day" to mean "the dataset will be grouped by day of year", then the ID must always stay as "day" such that this association would never be broken... even if the label of the option changes to "Day Index of Year" in the future.']}),"\n",(0,a.jsxs)(t.p,{children:['Arbitrary keyword arguments such as "dim_col" and "order_by_col" can be specified to the ',(0,a.jsx)(t.strong,{children:"SelectParameterOption"})," constructor, which will be treated as custom fields to the parameter option. For more info, see the ",(0,a.jsx)(t.a,{href:"../../tba",children:"Widget Parameters"})," page."]}),"\n",(0,a.jsx)(t.admonition,{type:"info",children:(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.strong,{children:"SelectParameterOption"}),' class has an "is_default" attribute to specify the parameter option(s) that are selected by default. By default, "is_default" is set to False. When none of the parameter options have "is_default" set as True, the first option is selected by default for single-select parameters, and nothing is selected by default for multi-select parameters.']})}),"\n",(0,a.jsx)(t.h3,{id:"define-the-parameters",children:"Define the parameters"}),"\n",(0,a.jsx)(t.p,{children:"Create a single-select parameter using the options defined above with:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:'p.SingleSelectParameter.CreateSimple("group_by_dim", "Group By", group_by_options)\n'})}),"\n",(0,a.jsx)(t.p,{children:'This sets the name and label of the new parameter to "group_by_dim" and "Group By".'}),"\n",(0,a.jsx)(t.admonition,{type:"info",children:(0,a.jsxs)(t.p,{children:["For ",(0,a.jsx)(t.strong,{children:"SingleSelectParameter"}),", the arguments for ",(0,a.jsx)(t.strong,{children:"CreateSimple"})," and ",(0,a.jsx)(t.strong,{children:"CreateWithOptions"})," are similar. The difference is that ",(0,a.jsx)(t.strong,{children:"CreateWithOptions"})," lets you specify a parent parameter for cascading the shown options. For non-select parameter types like ",(0,a.jsx)(t.strong,{children:"DateParameter"}),", there are more differences. Details can be found in the ",(0,a.jsx)(t.a,{href:"../../tba",children:"Widget Parameters"})," page."]})}),"\n",(0,a.jsxs)(t.p,{children:["At this point, your ",(0,a.jsx)(t.a,{href:"../../tba",children:"parameters.py"})," file should look something like this:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:"from squirrels import ParametersArgs, parameters as p, parameter_options as po, data_sources as ds\n\ndef main(sqrl: ParametersArgs) -> None:\n    group_by_options = [\n        po.SelectParameterOption('year', 'Year', dim_col='year'),\n        po.SelectParameterOption('quarter', 'Quarter', dim_col='quarter'),\n        po.SelectParameterOption('month', 'Month', dim_col='month_name', order_by_col='month_order'),\n        po.SelectParameterOption('day', 'Day of Year', dim_col='day_of_year'),\n        po.SelectParameterOption('cond', 'Condition', dim_col='condition')\n    ]\n    p.SingleSelectParameter.CreateSimple(\"group_by_dim\", \"Group By\", group_by_options)\n"})}),"\n",(0,a.jsx)(t.h2,{id:"step-5-create-the-context-file",children:"Step 5: Create the context file"}),"\n",(0,a.jsx)(t.p,{children:"The context file is a Python file that runs in real-time to transform parameter selections and/or authenticated user attributes into meaningful values that can be used by dynamic data models."}),"\n",(0,a.jsxs)(t.p,{children:["Create a ",(0,a.jsx)(t.code,{children:"pyconfigs/context.py"})," file with the following contents:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:'from typing import Any\nfrom squirrels import ContextArgs, parameters as p\n\ndef main(ctx: dict[str, Any], sqrl: ContextArgs) -> None:\n    \n    """\n    The param_exists method confirms whether the "group_by_dim" parameter exists for the current dataset.\n    If it does, we define two context variables called "dim_col" and "order_col".\n    """\n    if sqrl.param_exists("group_by_dim"):\n        group_by_param = sqrl.prms["group_by_dim"]\n        assert isinstance(group_by_param, p.SingleSelectParameter)\n        \n        ctx["dim_col"] = group_by_param.get_selected("dim_col")\n        ctx["order_col"] = group_by_param.get_selected("order_by_col", default_field="dim_col")\n    \n    """\n    Define the context variable "role" based on whether the user is authenticated and its attribute(s). See "user.py" for defining user attributes.\n    This is shown for demonstration purposes - the "role" context variable will not be used in any data models in this tutorial.\n    """\n    ctx["role"] = getattr(sqrl.user, "role", "none")\n'})}),"\n",(0,a.jsx)(t.p,{children:'In this example, we define context variables "dim_col" and "order_col" based on the "group_by_dim" parameter selection. We also define the "role" context variable based on the authenticated user\'s attribute(s) (if there is an authenticated user), which is done for demonstration purposes and not used in this tutorial.'}),"\n",(0,a.jsxs)(t.p,{children:["See the ",(0,a.jsx)(t.a,{href:"../../tba",children:"Context Variables"})," page for more information on the context file."]}),"\n",(0,a.jsx)(t.h2,{id:"step-6-create-sources",children:"Step 6: Create sources"}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.code,{children:"models/sources.yml"})," file lets us document the metadata of sources from our database tables."]}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.code,{children:"weather.db"}),' SQLite database we retrieved earlier contains a table called "weather". Replace the sources.yml file with the following contents:']}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-yaml",children:'sources:\n  - name: src_weather\n    description: Source table for weather metrics by day over time\n    connection: default\n    table: weather\n    load_to_duckdb: true\n\n    columns:\n      - name: date\n        type: string\n        description: The date of the weather statistics in YYYY-MM-DD format\n        category: dimension\n      \n      - name: precipitation\n        type: float\n        description: The amount of precipitation for the time period in centimeters\n        category: measure\n\n      - name: temp_max\n        type: float\n        description: The maximum temperature for the time period in degrees Celsius\n        category: measure\n      \n      - name: temp_min\n        type: float\n        description: The minimum temperature for the time period in degrees Celsius\n        category: measure\n      \n      - name: wind\n        type: float\n        description: The average wind speed for the time period in km/h\n        category: measure\n      \n      - name: condition\n        type: string\n        description: The weather condition of the time period (e.g. "sun", "fog", "rain")\n        category: dimension\n'})}),"\n",(0,a.jsxs)(t.p,{children:["In addition to developing downstream data models, documenting sources can be very useful for the Squirrels framework. See the ",(0,a.jsx)(t.a,{href:"../../tba",children:"Source Models"})," page for more details."]}),"\n",(0,a.jsx)(t.h2,{id:"step-7-create-seeds",children:"Step 7: Create seeds"}),"\n",(0,a.jsx)(t.p,{children:"Seeds are CSV data files that can be used by other data models. For example, we can create a seed that maps month numbers to month names."}),"\n",(0,a.jsxs)(t.p,{children:["Create a file named ",(0,a.jsx)(t.code,{children:"seed_month_names.csv"})," in the ",(0,a.jsx)(t.code,{children:"seeds/"})," folder with the following contents. Feel free to remove the other files in the ",(0,a.jsx)(t.code,{children:"seeds/"})," folder."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-csv",children:"month_order,month_name\n1,January\n2,February\n3,March\n4,April\n5,May\n6,June\n7,July\n8,August\n9,September\n10,October\n11,November\n12,December\n"})}),"\n",(0,a.jsxs)(t.p,{children:["In addition, create a ",(0,a.jsx)(t.code,{children:"seeds/seed_month_names.yml"})," file to add metadata for the seed."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-yaml",children:"description: Month number to month name mapping\n\ncast_column_types: false\n\ncolumns:\n  - name: month_order\n    type: integer\n    description: The month number\n    category: dimension\n  \n  - name: month_name\n    type: string\n    description: The human-readable month name\n    category: dimension\n"})}),"\n",(0,a.jsxs)(t.p,{children:["Information in the yaml file may be useful for the Squirrels framework as well. See the ",(0,a.jsx)(t.a,{href:"../../tba",children:"Seeds"})," page for more information on working with seeds."]}),"\n",(0,a.jsx)(t.h2,{id:"step-8-create-data-models-from-sql-queries",children:"Step 8: Create data models from SQL queries"}),"\n",(0,a.jsx)(t.p,{children:"For data models that are created by code, the Squirrels framework supports:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Creating build models (tables/views to be built offline) from SQL (DuckDB dialect) or Python files"}),"\n",(0,a.jsx)(t.li,{children:"Creating dbview models (queries that run on an external database in real-time) from SQL files (dialect of the database connection used)"}),"\n",(0,a.jsx)(t.li,{children:"Creating federate models (queries that run in the API server in real-time) from SQL (DuckDB dialect) or Python files"}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:'The "source", "seed", and "build" models are known as "static data models". The "dbview" and "federate" models are known as "dynamic data models".'}),"\n",(0,a.jsx)(t.p,{children:'We have already configured the "source" and "seed" models. For this tutorial, we will create a build model and a federate model with SQL, but will not create any dbview models.'}),"\n",(0,a.jsx)(t.h3,{id:"define-a-macro",children:"Define a macro"}),"\n",(0,a.jsxs)(t.p,{children:["First, create a ",(0,a.jsx)(t.code,{children:"macros/metrics.sql"})," file with the following contents."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sql",children:"{%- macro get_metrics() -%}\n    CAST(SUM(precipitation) AS DECIMAL(6, 1)) AS precipitation,\n    CAST(MAX(temp_max) AS DECIMAL(4, 1)) AS temp_max,\n    CAST(MIN(temp_min) AS DECIMAL(4, 1)) AS temp_min,\n    CAST(AVG(wind) AS DECIMAL(6, 4)) AS wind\n{%- endmacro -%}\n"})}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"../../tba",children:"Macros"})," allow us to reuse the same SQL text in multiple places, including across different data models."]}),"\n",(0,a.jsx)(t.h3,{id:"define-the-build-model",children:"Define the build model"}),"\n",(0,a.jsxs)(t.p,{children:["Build models are defined in the ",(0,a.jsx)(t.code,{children:"models/builds/"})," folder."]}),"\n",(0,a.jsxs)(t.p,{children:["Create a ",(0,a.jsx)(t.code,{children:"models/builds/bds_weather_by_date.sql"})," file with the following contents. Feel free to remove the other files in the ",(0,a.jsx)(t.code,{children:"models/builds/"})," folder."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sql",children:'WITH\nweather_by_date AS (\n\n    SELECT\n        date::VARCHAR AS date,\n        EXTRACT(YEAR FROM date::DATE)::INT AS year,\n        EXTRACT(MONTH FROM date::DATE)::INT AS month_order, \n        EXTRACT(DOY FROM date::DATE)::INT AS day_of_year,\n        \'Q\' || CEIL(EXTRACT(MONTH FROM date::DATE) / 3)::INT AS quarter,\n        MODE(condition)::VARCHAR AS condition,\n        {{ get_metrics() | indent(4) }}\n    \n    FROM {{ ref("src_weather") }}\n    \n    GROUP BY date\n\n)\nSELECT\n    date,\n    condition,\n    year,\n    m.month_order,\n    m.month_name,\n    day_of_year,\n    quarter,\n    precipitation,\n    temp_max,\n    temp_min,\n    wind\n\nFROM weather_by_date\n    LEFT JOIN {{ ref("seed_month_names") }} AS m USING (month_order)\n'})}),"\n",(0,a.jsx)(t.p,{children:"This query finds the total precipitation, max/min temperature, and average wind speed for each date in the source table."}),"\n",(0,a.jsxs)(t.admonition,{type:"info",children:[(0,a.jsx)(t.p,{children:"The SQL file is templated with Jinja. It calls the macros:"}),(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"get_metrics()"})," which we defined in the ",(0,a.jsx)(t.code,{children:"macros/metrics.sql"})," file we created earlier"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:'ref("src_weather")'}),' which references the "src_weather" source we defined earlier']}),"\n"]}),(0,a.jsxs)(t.p,{children:["Build models are able to call ",(0,a.jsx)(t.code,{children:"ref"})," on sources (that have ",(0,a.jsx)(t.code,{children:"load_to_duckdb"})," set to true), seeds, and other build models."]})]}),"\n",(0,a.jsxs)(t.p,{children:["Let's also add metadata for the build model in the ",(0,a.jsx)(t.code,{children:"models/builds/bds_weather_by_date.yml"})," file."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-yaml",children:'description: |\n  This build model aggregates weather data by date and adds additional time-based attributes.\n\nmaterialization: TABLE  # one of "TABLE" or "VIEW" - defaults to "VIEW" for SQL models if not specified\n\ndepends_on:\n  - src_weather\n  - seed_month_names\n\ncolumns:\n  - name: date\n    depends_on:\n      - src_weather.date\n    pass_through: true\n\n  - name: year\n    type: integer\n    description: The year extracted from the date\n    category: dimension\n    depends_on:\n      - src_weather.date\n\n  - name: month_order\n    type: integer\n    description: The order of the month\n    category: dimension\n    depends_on:\n      - src_weather.date\n      - seed_month_names.month_order\n\n  - name: month_name\n    type: string\n    description: The name of the month\n    category: dimension\n    depends_on:\n      - src_weather.date\n      - seed_month_names.month_name\n\n  - name: day_of_year\n    type: integer\n    description: The day of the year (1-366)\n    category: dimension\n    depends_on:\n      - src_weather.date\n\n  - name: quarter\n    type: string\n    description: The quarter (Q1, Q2, Q3, or Q4) derived from the month\n    category: dimension\n    depends_on:\n      - src_weather.date\n\n  - name: condition\n    type: string\n    description: The most common weather condition of the date\n    category: dimension\n    depends_on:\n      - src_weather.condition\n\n  - name: precipitation\n    type: decimal\n    description: Total precipitation of the date in centimeters, rounded to 1 decimal place\n    category: measure\n    depends_on:\n      - src_weather.precipitation\n\n  - name: temp_max\n    type: decimal\n    description: Maximum temperature of the date in degrees Celsius, rounded to 1 decimal place\n    category: measure\n    depends_on:\n      - src_weather.temp_max\n\n  - name: temp_min\n    type: decimal\n    description: Minimum temperature of the date in degrees Celsius, rounded to 1 decimal place\n    category: measure\n    depends_on:\n      - src_weather.temp_min\n\n  - name: wind\n    type: decimal\n    description: Average wind speed of the date in km/h, rounded to 4 decimal places\n    category: measure\n    depends_on:\n      - src_weather.wind\n'})}),"\n",(0,a.jsxs)(t.p,{children:["For more information on build models, see the ",(0,a.jsx)(t.a,{href:"../../tba",children:"Build Models"})," page."]}),"\n",(0,a.jsx)(t.h3,{id:"define-the-federate-model",children:"Define the federate model"}),"\n",(0,a.jsxs)(t.p,{children:["Federate models are defined in the ",(0,a.jsx)(t.code,{children:"models/federates/"})," folder."]}),"\n",(0,a.jsxs)(t.p,{children:["Create a ",(0,a.jsx)(t.code,{children:"models/federates/fdr_weather_by_period.sql"})," file with the following contents. Feel free to remove the other files in the ",(0,a.jsx)(t.code,{children:"models/federates/"})," folder."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sql",children:"WITH\ncte_weather_grouped AS (\n\n    SELECT\n        {{ ctx.dim_col }} AS dim_value,\n        {{ ctx.order_col }} AS ordering,\n        {{ get_metrics() | indent(4) }}\n\n    FROM {{ ref(\"bds_weather_by_date\") }}\n\n    GROUP BY dim_value, ordering\n\n)\nSELECT\n    '{{ ctx.dim_col }}' AS dimension_type,\n    dim_value AS dimension_value,\n    precipitation,\n    temp_max AS temperature_max,\n    temp_min AS temperature_min,\n    wind\n\nFROM cte_weather_grouped\n\nORDER BY ordering\n"})}),"\n",(0,a.jsx)(t.p,{children:'This query finds the total precipitation, max/min temperature, and average wind speed for each group based on the "Group By" parameter selection in real-time.'}),"\n",(0,a.jsxs)(t.admonition,{type:"info",children:[(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.code,{children:"{{ ctx.dim_col }}"})," and ",(0,a.jsx)(t.code,{children:"{{ ctx.order_col }}"})," variables are used to reference the context variables defined in the ",(0,a.jsx)(t.a,{href:"../../tba",children:"context.py"})," file."]}),(0,a.jsxs)(t.p,{children:["Just like the build model, we use the ",(0,a.jsx)(t.code,{children:"get_metrics"})," macro again. We also use the ",(0,a.jsx)(t.code,{children:"ref"})," macro to reference the build model created earlier."]}),(0,a.jsxs)(t.p,{children:["Federate models are able to call the ",(0,a.jsx)(t.code,{children:"ref"})," macro on sources (that have ",(0,a.jsx)(t.code,{children:"load_to_duckdb"})," set to true), seeds, build models, dbview models, and other federate models."]})]}),"\n",(0,a.jsxs)(t.p,{children:["We will also create the ",(0,a.jsx)(t.code,{children:"models/federates/fdr_weather_by_period.yml"})," file to add metadata for the federate model."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-yaml",children:'description: |\n  This model aggregates weather data by time of year or condition to show weather statistics.\n\ndepends_on:\n  - bds_weather_by_date\n\ncolumns:\n  - name: dimension_type\n    type: string\n    description: The type of dimension (e.g. "year", "month", "condition")\n    category: dimension\n  \n  - name: dimension_value\n    type: string\n    description: The value of the dimension (e.g. "2020", "January", "sun")\n    category: dimension\n\n  - name: precipitation\n    type: decimal\n    description: Total precipitation of the time period or condition in centimeters, rounded to 1 decimal place\n    category: measure\n    depends_on:\n      - bds_weather_by_date.precipitation\n\n  - name: temperature_max\n    type: decimal\n    description: Maximum temperature of the time period or condition in degrees Celsius, rounded to 1 decimal place\n    category: measure\n    depends_on:\n      - bds_weather_by_date.temp_max\n\n  - name: temperature_min\n    type: decimal\n    description: Minimum temperature of the time period or condition in degrees Celsius, rounded to 1 decimal place\n    category: measure\n    depends_on:\n      - bds_weather_by_date.temp_min\n\n  - name: wind\n    type: decimal\n    description: Average wind speed of the time period or condition in km/h, rounded to 4 decimal places\n    category: measure\n    depends_on:\n      - bds_weather_by_date.wind\n'})}),"\n",(0,a.jsxs)(t.p,{children:["For more information on federate models, see the ",(0,a.jsx)(t.a,{href:"../../tba",children:"Federate Models"})," page."]}),"\n",(0,a.jsxs)(t.admonition,{type:"note",children:[(0,a.jsx)(t.p,{children:"Similar to federate models, dbview models are also run in real-time and can change behaviour based on parameter selections or authenticated user."}),(0,a.jsx)(t.p,{children:"The main difference is that dbview models run on an external database (instead of the API server), and can only reference sources that share the same database connection."}),(0,a.jsxs)(t.p,{children:["See the ",(0,a.jsx)(t.a,{href:"../../tba",children:"Dbview Models"})," page for more information on dbview models."]})]}),"\n",(0,a.jsx)(t.h2,{id:"step-9-development-testing",children:"Step 9: Development testing"}),"\n",(0,a.jsxs)(t.p,{children:["See ",(0,a.jsx)(t.a,{href:"./run-project",children:"Running the project"})," for more information on how to test the project, which includes building static data models and running the API server."]}),"\n",(0,a.jsx)(t.h3,{id:"compiling-sql-queries",children:"Compiling SQL queries"}),"\n",(0,a.jsx)(t.admonition,{type:"note",children:(0,a.jsx)(t.p,{children:"Currently, this feature is only available for compiling dbview and federate models. Support for compiling build models will be added in a future release."})}),"\n",(0,a.jsx)(t.p,{children:"In practice, you may wish to review what the compiled SQL queries look like (for some set of parameter selections) before actually running the queries."}),"\n",(0,a.jsxs)(t.p,{children:["Run the following to compile the queries for the ",(0,a.jsx)(t.code,{children:"weather_by_period"})," dataset using the default parameter selections:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"sqrl compile --dataset weather_by_period\n"})}),"\n",(0,a.jsxs)(t.p,{children:["This creates the folder path ",(0,a.jsx)(t.code,{children:"target/compile/weather_by_period/default"})," with the compiled SQL queries for all the relevant SQL models (without actually running them)."]}),"\n",(0,a.jsx)(t.admonition,{type:"tip",children:(0,a.jsxs)(t.p,{children:["You can also use ",(0,a.jsx)(t.code,{children:"-d"})," instead of ",(0,a.jsx)(t.code,{children:"--dataset"}),". You may also use ",(0,a.jsx)(t.code,{children:"-D"})," or ",(0,a.jsx)(t.code,{children:"--all-datasets"})," to compile for all datasets."]})}),"\n",(0,a.jsx)(t.p,{children:"If you only care about compiling one model, you can run:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"sqrl compile --dataset weather_by_period --select fdr_weather_by_period\n"})}),"\n",(0,a.jsxs)(t.p,{children:["In addition to writing the file in the ",(0,a.jsx)(t.code,{children:"target"})," folder, this will print out the compiled SQL query for the ",(0,a.jsx)(t.code,{children:"fdr_weather_by_period"})," model as well."]}),"\n",(0,a.jsx)(t.admonition,{type:"tip",children:(0,a.jsxs)(t.p,{children:["You can also use ",(0,a.jsx)(t.code,{children:"-s"})," instead of ",(0,a.jsx)(t.code,{children:"--select"}),". You can choose to run the SQL query with the ",(0,a.jsx)(t.code,{children:"--runquery"})," or ",(0,a.jsx)(t.code,{children:"-r"})," option. When used in conjunction with ",(0,a.jsx)(t.code,{children:"-s"})," or ",(0,a.jsx)(t.code,{children:"--select"}),", this will compile and run all the upstream models as well. You can find the run results as csv files in the ",(0,a.jsx)(t.code,{children:"target"})," folder."]})}),"\n",(0,a.jsx)(t.h3,{id:"using-selection-test-sets",children:"Using selection test sets"}),"\n",(0,a.jsx)(t.p,{children:"To test on non-default parameter selections, you would define and use test sets. Suppose you want to group by month instead of grouping by year (the default parameter selection)."}),"\n",(0,a.jsxs)(t.p,{children:["In the ",(0,a.jsx)(t.a,{href:"../../tba",children:"squirrels.yml"})," file, replace the ",(0,a.jsx)(t.strong,{children:"selection_test_sets"})," section with:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-yaml",children:"selection_test_sets:\n  - name: group_by_month\n    datasets:\n      - weather_by_period\n    parameters:\n      group_by_dim: 'month'\n"})}),"\n",(0,a.jsxs)(t.p,{children:['The "datasets" field defines the list of datasets that this test set can be applied to, and the "parameters" field defines parameter selections. The selected value for "group_by_dim" is "2", which is the ID for the "Month" option defined in ',(0,a.jsx)(t.a,{href:"../../tba",children:"parameters.py"}),". You can use the ",(0,a.jsx)(t.code,{children:"--test-set"})," or ",(0,a.jsx)(t.code,{children:"-t"})," option on the ",(0,a.jsx)(t.strong,{children:"compile"})," command to specify the test set to compile with:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"sqrl compile --dataset weather_by_period --test-set group_by_month\n"})}),"\n",(0,a.jsxs)(t.p,{children:["This creates new files in the ",(0,a.jsx)(t.code,{children:"target/compile/weather_by_period/group_by_month"}),' folder (not the "target/compile/weather_by_period/',(0,a.jsx)(t.strong,{children:"default"}),'" folder we were looking at before).']}),"\n",(0,a.jsxs)(t.p,{children:["See ",(0,a.jsx)(t.code,{children:"sqrl compile --help"})," or the ",(0,a.jsx)(t.a,{href:"../../references/cli/compile",children:"sqrl compile"})," page for more details."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"Congratulations, you have reached the end of the tutorial!"})}),"\n",(0,a.jsx)(t.h2,{id:"whats-next",children:"What's next?"}),"\n",(0,a.jsx)(t.p,{children:'For a more complex version of a weather analytics project, see the "sqrl-weather-analytics" folder in our "squirrels-examples" github repo here:'}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.a,{href:"https://github.com/squirrels-analytics/squirrels-examples/tree/main/sqrl-weather-analytics",children:"https://github.com/squirrels-analytics/squirrels-examples/tree/main/sqrl-weather-analytics"})}),"\n",(0,a.jsx)(t.p,{children:"This is a revised example that demonstrates:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Querying multiple database systems with dbview models and joining the results together in a single dataset / API endpoint"}),"\n",(0,a.jsx)(t.li,{children:"Using a Python data model that loads a machine learning (ML) model to create a column for ML model predictions"}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"In addition, the following topics may also useful for your Squirrels projects:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"TBA"}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["You can also check out the ",(0,a.jsx)(t.a,{href:"../../references/cli",children:"CLI References"})," to understand the commands available with Squirrels, or check out the ",(0,a.jsx)(t.a,{href:"../../tba",children:"Python Classes"})," available in the Squirrels library."]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>o});var r=n(6540);const a={},s=r.createContext(a);function i(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);