# Tutorial

This tutorial will walk you through creating your own Squirrels APIs! 

**Want to get started quickly?** Simply follow installation and step 1 to create a working Squirrels project with a single command, and then activate the API server with another command.

Then in subsequent steps, we will alter the project to create our own Squirrels project for weather analytics. Once you've completed the tutorial, you will understand many of the key features of Squirrels!

## Installation

**Python 3.10 or higher is required**. Confirm the appropriate version of [Python](https://www.python.org/downloads/) is installed by running:

```bash
python --version
```

This should print something like `Python 3.X.Y` in the terminal. Confirm that X >= 10.

If this doesn't work for you, or it is not showing the correct version, try `python3 --version` instead.

Once you've confirmed Python is installed, create an empty folder for your Squirrels project. Although not required, it is strongly recommended to create and activate a [Python virtual environment](https://realpython.com/python-virtual-environments-a-primer/) for the project.

:::tip

There are a number of ways to create a Python virtual environment. One of the most common ways is by running `python -m venv .venv` (or `python3 -m venv .venv`) in the terminal. This will create a ".venv" folder in your project.

Then, activate the virtual environment by doing one of the following:
- run `.venv/Scripts/activate` in a Windows terminal, or
- run `source .venv/bin/activate` in a Mac/Linux terminal, or
- in VSCode, install the Python extension, press `Ctrl+Shift+P`, go to `Python: Select Interpreter`, and select the ".venv" folder you just created such that VSCode will always activate it for you when opening the project

:::

To install the Squirrels library in your virtual environment, run:

```bash
pip install "squirrels>=0.4.0"
```

To confirm it installed properly, run:

```bash
squirrels --version
```

Or simply run `sqrl --version` for short.

## Step 1 (Quickstart): Create a Sample Project

In the same folder you activated your Python virtual environment (see "Installation" section above), you can bootstrap a working Squirrels project using:

```bash
sqrl init --core
```

:::note

If you choose to run `sqrl init` without the `--core` option, a set of prompts will appear for the various files you wish to include in your project. If you choose to do it this way instead, you would answer the prompts as follows for this tutorial:

```config
[?] How would you like to configure the database connections?:
 > yml
   py

[?] How would you like to configure the parameters?:
 > py (recommended)
   yml

[?] What's the file format for the database view model?:
 > sql
   py

[?] What's the file format for the federated model?:
 > sql
   py

[?] Do you want to include a dashboard example? (y/N): n

[?] Do you want to add the 'auth.py' file to enable custom API authentication? (y/N): n
```

:::

Once the command is executed, a set of folders/files are created for a sample project. Go ahead and take a quick glance at the new files (no need to fully understand them now). Then, run the API server using the command:

```bash
sqrl run
```

In a web browser, go to `http://localhost:4465/`. This leads you to the Squirrels Testing UI, a convenient interface for testing the REST APIs created by your Squirrels project. 

Click the "Apply" button to display the dataset for the default parameter selections (feel free to play around with different parameter selections and click "Apply" again to see how the results change).

![Testing UI](/img/testing_ui.png)

You can also find the OpenAPI/Swagger documentation on the REST APIs that are automatically built-in and documented with the Squirrels project. Go to `http://localhost:4465/docs`:

![Swagger Docs](/img/swagger_docs.png)

You may even enter the following URLs directly in your web browser to access the JSON response:

1. Parameters API: `http://localhost:4465/squirrels-v0/sample/v1/dataset/dataset-example/parameters`
2. Dataset Result API: `http://localhost:4465/squirrels-v0/sample/v1/dataset/dataset-example` 
    - Note: default parameter selections are used when no query parameters are specified

After you're done with the API server, you can shut it down in the terminal with "Ctrl+C".

## Step 2: Add The Weather Database

Now is a good time to add the SQLite database we will use for the rest of the tutorial. Simply run:

```bash
sqrl get-file weather.db
```

This adds a `weather.db` file in the `assets` folder.

## Step 3: Configure the Squirrels Project File

Open the [squirrels.yml] file. This is the Squirrels project file to configure most of the properties of the Squirrels project in [yaml].

In this step, we will focus on the **project_variables**, **connections**, and **datasets** sections.

### Setting the Project Variables

The project variables **name** and **major_version** are required. The **label** is optional, and will use the **name** if not specified. You are also free to add any of your own project variables here.

In this tutorial, we will be making datasets for historical weather data. Change the **name** to `weather` and **label** to `Weather Analytics` (we will leave **major_version** as is).

The **project_variables** section should now look like this:

```yaml
project_variables:
  name: weather
  label: Weather Analytics
  major_version: 1
```

### Setting the Database Connections

This section is where we set all the database connection details that we need. We provide a list of connection names here and refer to them in other files. The connection name `default` must be provided for models that don't set a connection name explicitly.

Under `default`, change the url to `sqlite:///{project_path}/assets/weather.db`.

:::tip

You can also substitute environment variables defined in the [env.yml] file using [Jinja]. For instance, if there is an environment variable called "sqlite_conn_str" in [env.yml], then you can also set the url to: 

```
{{ env_vars.sqlite_conn_str }}
```

:::

The syntax for the URL uses [sqlalchemy database URLs](https://docs.sqlalchemy.org/en/20/core/engines.html#database-urls). Since SQLite databases don't require a username and password, the **credential** field can be either set to `null` or omitted entirely. More details on setting and using credential keys and connections can be found in the [Database Connections](./topics/connections) page.

The **connections** section should now look like this:

```yaml
connections:
  - name: default
    credential: null
    url: sqlite:///{project_path}/assets/weather.db
```

### Defining the Datasets

This section is where we define the attributes for all datasets created by the Squirrels project. Every dataset defined will have their own "parameters API" and "dataset result API".

Change the first dataset name to `weather_by_period` and label to `Weather by Time of Year`. Remove all parameters except "group_by", and rename it to "group_by_dim". Fields **scope** and **traits** can be omitted.

Remove the second dataset.

The **datasets** section should now look like this:

```yaml
datasets:
  - name: weather_by_period
    label: Weather by Time of Year
    parameters:
      - group_by_dim
```

### Rename the Model Files

Every dataset name that's set in the **datasets** section must also have a matching file name somewhere in `models` folder. At this point, we can rename the following models files:
1. In the `models/federates/` folder, rename `dataset_example.sql` to `weather_by_period.sql`.
2. In the `models/dbviews/` folder, rename `database_view1.sql` to `dbv_weather_grouped.sql`.

The `weather_by_period.sql` model is referenced directly by the `weather_by_period` dataset, and the `dbv_weather_grouped.sql` model will be used by the `weather_by_period.sql` model later in the tutorial.

More details on the Squirrels project file can be found at [Squirrels Project File](./topics/project-file).

## Step 4: Create the Dataset Parameters

Go into the `pyconfigs/parameters.py` file. This file contains the definitions of all the widget parameters used in the dataset through a **main** function. 

:::info

The possible widget parameter types supported today are **SingleSelectParameter**, **MultiSelectParameter**, **DateParameter**, **DateRangeParameter**, **NumberParameter**, **NumberRangeParameter**, and **TextParameter**. Each parameter type can be created with one of the factory method **CreateSimple**, **CreateWithOptions**, or **CreateFromSource**, which exists as class methods on each parameter type. Every factory method takes "name" and "label" as required arguments.

:::

We will rewrite this file. Remove all the existing code in the **main** function body such that the file starts off like this:

```python
from squirrels import ParametersArgs, parameters as p, parameter_options as po, data_sources as ds

def main(sqrl: ParametersArgs) -> None:
    # TBA
```

We will create one single-select parameter to specify the dimension to group by.

### Define the Parameter Options

We first need to specify the list of parameter options. Inside the **main** function, specify the list of options as such:

```python
group_by_options = [
    po.SelectParameterOption('0', 'Year', dim_col='year'),
    po.SelectParameterOption('1', 'Quarter', dim_col='quarter'),
    po.SelectParameterOption('2', 'Month', dim_col='month_name', order_by_col='month_order'),
    po.SelectParameterOption('3', 'Day of Year', dim_col='day_of_year'),
    po.SelectParameterOption('4', 'Condition', dim_col='condition')
]
```

The first two parameters to the **SelectParameterOption** constructors are the ID and label. The ID must be distinct across options and should never change in the future. If an API client associates ID "3" to mean "the dataset will be grouped by day of year", then the ID must always stay as "3" such that this association would never be broken... even if the label of the option changes to "Day Index of Year" in the future.

Arbitrary keyword arguments such as "dim_col" and "order_by_col" can be specified to the **SelectParameterOption** constructor, which will be treated as custom fields to the parameter option. For more info, see the [Widget Parameters](./topics/parameters) page.

:::info

The **SelectParameterOption** class has an "is_default" attribute to specify the parameter option(s) that are selected by default. By default, "is_default" is set to False. When none of the parameter options have "is_default" set as True, the first option is selected by default for single-select parameters, and nothing is selected by default for multi-select parameters.

:::

### Define the Parameters

Create a single-select parameter using the options defined above with:

```python
p.SingleSelectParameter.CreateSimple("group_by_dim", "Group By", group_by_options)
```

This sets the name and label of the new parameter to "group_by_dim" and "Group By".

:::info

For **SingleSelectParameter**, the arguments for **CreateSimple** and **CreateWithOptions** are very similar, except **CreateWithOptions** lets you specify a parent parameter for cascading the shown options. For non-select parameter types like **DateParameter**, **CreateWithOptions** lets you specify a parent parameter and a list of **DateParameterOption** (to use a different default_date based on selected parent option), while **CreateSimple** takes a single "default_date" instead.

:::

At this point, your [parameters.py] file should look something like this:

```python
from squirrels import ParametersArgs, parameters as p, parameter_options as po, data_sources as ds

def main(sqrl: ParametersArgs) -> None:
    group_by_options = [
        po.SelectParameterOption('0', 'Year', dim_col='year'),
        po.SelectParameterOption('1', 'Quarter', dim_col='quarter'),
        po.SelectParameterOption('2', 'Month', dim_col='month_name', order_by_col='month_order'),
        po.SelectParameterOption('3', 'Day of Year', dim_col='day_of_year'),
        po.SelectParameterOption('4', 'Condition', dim_col='condition')
    ]
    p.SingleSelectParameter.CreateSimple("group_by_dim", "Group By", group_by_options)
```

## Step 5: Create the SQL Queries

In this step, we will edit the `models/dbviews/dbv_weather_grouped.sql` and `models/federates/weather_by_period.sql` files to create a pipeline of SQL transformations that return tabular results for the dataset. These files are known as SQL models.

:::info

These SQL query can be templated using Jinja, with access to a variety of dictionaries such as **prms**, **ctx**, and **traits**, which stand for "Parameter Set", "Context", and "Traits". More information about these variables can be found in the [SQL Models](./topics/models-sql) page. For now, just know that we can access parameters with `prms["parameter_name"]` in Jinja, and access selected value(s) of the parameter by calling certain methods (such as **get_selected** or **get_selected_label**).

:::

### Create a Seed

First, we will define a lookup table mapping month numbers to month names in a CSV file stored in the project. These files are known as **seeds**. Create a file named `seed_month_names.csv` in the `seeds/` folder with the following contents. Feel free to remove the existing files in the `seeds/` folder.

```csv
month_order,month_name
1,January
2,February
3,March
4,April
5,May
6,June
7,July
8,August
9,September
10,October
11,November
12,December
```

We will refer to this seed later on in the section.

### Define the Database View

For SQL models, database views run in an external databases. The `default` database connection is used by default, which was already set up in step 2. More info on configuring the database connection for the database view can be found [here](./topics/models-sql#dbview-models). All database views on defined in the `models/dbviews/` folder. 

In `models/dbviews/dbv_weather_grouped.sql`, change its contents to the following:

```sql
{%- set order_col = prms["group_by_dim"].get_selected("order_by_col", default_field="dim_col") -%}

{%- set metrics -%}
    ROUND(SUM(precipitation), 2) AS precipitation,
    ROUND(MAX(temp_max), 2) AS temperature_max,
    ROUND(MIN(temp_min), 2) AS temperature_min,
    ROUND(AVG(wind), 2) AS wind
{%- endset -%}

WITH
weather_by_date AS (

    SELECT
        date,
        {{ metrics | indent(4) }},
        CAST(condition AS VARCHAR) AS condition,
        CAST(STRFTIME('%Y', date) AS INT) AS year,
        CAST(STRFTIME('%m', date) AS INT) AS month_order, 
        CAST(STRFTIME('%j', date) AS INT) AS day_of_year
    
    FROM weather
    
    GROUP BY date
),
weather_with_quarter AS (

    SELECT *,
        'Q' || ((month_order - 1) / 3 + 1) AS quarter,
        temperature_max AS temp_max,
        temperature_min AS temp_min
    
    FROM weather_by_date
)
SELECT
    {{ order_col }},
    {{ metrics }}

FROM weather_with_quarter

GROUP BY {{ order_col }}
```

This query finds the total precipitation, max/min temperature, and average wind speed for each group based on the "Group By" parameter selection in real time.

:::info

The **set** keyword is Jinja syntax for assigning variables. Taking line 1 as an example, `prms['group_by_dim']` returns a **SingleSelectParameter** (as we previously defined in [parameters.py]), which contains the method **get_selected** for getting specific fields of the selected **SelectParameterOption**. We defined the "dim_col" attribute for each parameter option in [parameters.py], but only defined "order_by_col" for one of the options. The **get_selected** method has the argument "default_field" to pick "dim_col" instead of "order_by_col" if "order_by_col" does not exist as a custom field.

:::

### Define the Federate View

Federate views run in a temporary in-memory database, embedded in the API server, after loading all the database views into the database. All federate views are defined in the `models/federates/` folder.

In `models/federates/weather_by_period.sql`, change its contents to the following:

```sql
{%- set dim_col = prms["group_by_dim"].get_selected("dim_col") -%}
{%- set order_col = prms["group_by_dim"].get_selected("order_by_col", default_field="dim_col") -%}

SELECT 
    '{{ dim_col }}' AS dimension_name, 
    {{ dim_col }} AS dimension_value,
    precipitation,
    temperature_max,
    temperature_min,
    wind

FROM {{ ref("dbv_weather_grouped") }} AS a

{%- if dim_col == "month_name" %}
    LEFT JOIN {{ ref("seed_month_names") }} USING (month_order)
{%- endif %}

ORDER BY a.{{ order_col }}
```

This query takes the "dbv_weather_grouped" database view result and orders by a column called "ordering". In the case where "Month" is selected for the "Group By" parameter, we also join the "seed_month_names" seed to get the month name. In this case, the column to select (i.e. "month_name") is different than the column to order by (i.e. "month_order").

:::note

A few things to note here about the `weather_by_period.sql` model:

1. The **ref** function exists for federate models to reference other models (i.e. dbviews, [seeds], or other federate models). In this example, the model depends on running the `dbv_weather_grouped.sql` database view first. Squirrels takes care of the order of model execution for you.
2. In the case where "Month" is selected for the "Group By" parameter, we also using the **ref** function to look up the name of the month from the "seed_month_names.csv" file. Note that the column to select (i.e. "month_name") is different than the column to order by (i.e. "month_order") which is why "dim_col" and "order_col" are different Jinja variables.
3. The second line where we set "dim_col" is repeated in `dbv_weather_grouped.sql` as well. This can be avoided either by using [Jinja's include/import](https://ttl255.com/jinja2-tutorial-part-6-include-and-import/) statement, or by using the [context.py] file which will be shown later in the tutorial.

:::

## Step 6: Test the Dataset

To activate the API server, simply run:

```bash
sqrl run
```

Then, in a web browser, go to `http://localhost:4465/` to open the Squirrels Testing UI that interacts with the dataset APIs you created!

Or, you can interact with the APIs directly from `http://localhost:4465/docs`.

Remember to shut down the API server by pressing "Ctrl+C" before proceeding.

:::note

Currently, any changes made to files are not be reflected in the API server unless you restart the server.

:::

### Test the Rendered SQL Queries

In practice, you may wish to review what the rendered SQL queries look like (for some set of parameter selections) before actually running the queries.

Run the following to compile the queries for the `weather_by_period` dataset using the default parameter selections:

```bash
sqrl compile --dataset weather_by_period
```

This creates the folder path `target/compile/weather_by_period/default` with the compiled SQL queries for all the relevant SQL models (without actually running them).

:::tip

You can also use `-d` instead of `--dataset`. You may also use `-D` or `--all-datasets` to compile for all datasets.

:::

If you only care about compiling one model, you can run:

```bash
sqrl compile --dataset weather_by_period --select dbv_weather_grouped
```

In addition to writing the file in the `target` folder, this will print out the compiled SQL query for `dbv_weather_grouped` as well.

:::note

If `--all-datasets` is specified instead of `--dataset`, then the `--select` option is ignored. Even if all datasets use the selected model, the **traits** for each dataset can be different, which may affect how the selected model compiles.

:::

:::tip

You can also use `-s` instead of `--select`. You can choose to run the SQL query with the `--runquery` or `-r` option. When used in conjunction with `-s` or `--select`, this will compile and run all the upstream models as well. You can find the run results as csv files in the `target` folder.

:::

### Using Selection Test Sets

To test on non-default parameter selections, you would define and use test sets. Suppose you want to group by month instead of grouping by year (the default parameter selection).

In the [squirrels.yml] file, replace the **selection_test_sets** section with:

```yaml
selection_test_sets:
  - name: group_by_month
    datasets:
      - weather_by_period
    parameters:
      group_by_dim: '2'
```

The "datasets" field defines the list of datasets that this test set can be applied to, and the "parameters" field defines parameter selections. The selected value for "group_by_dim" is "2", which is the ID for the "Month" option defined in [parameters.py]. You can use the `--test-set` or `-t` option on the **compile** command to specify the test set to compile with:

```bash
sqrl compile --dataset weather_by_period --test-set group_by_month
```

This creates new files in the `target/compile/weather_by_period/group_by_month` folder (not the "target/compile/weather_by_period/**default**" folder we looked at before).

See `sqrl compile --help` or the [compile command](../references/cli/compile) page for more details. 

## Step 7: Use the Context File

Let's revisit the files in the models folder. In both files, we use `prms["group_by_dim"].get_selected("dim_col")` to get the "dim_col" attribute from the selected parameter option. Writing this sort of "Python-like" code in a SQL/Jinja file can be a poor developer experience, especially if you're using an IDE that can provide code/method suggestions for Python files.

Instead, we can use the `pyconfigs/context.py` file to improve the developer experience. We use its **main** function to transform all selected parameter options into meaningful values that can be used by the models, and set them as key-value pairs in a dictionary called **ctx**. Then, in the SQL/Jinja files, the dictionary values can be referenced using the **ctx** keyword.

For example, we can update the [context.py] file contents to look like this:

```python
from typing import Any
from squirrels import ContextArgs, parameters as p

def main(ctx: dict[str, Any], sqrl: ContextArgs) -> None:
    if sqrl.param_exists("group_by_dim"):
        group_by_param = sqrl.prms["group_by_dim"]
        assert isinstance(group_by_param, p.SingleSelectParameter)
        
        ctx["dim_col"] = group_by_param.get_selected("dim_col")
        ctx["order_col"] = group_by_param.get_selected("order_by_col", default_field="dim_col")
```

:::note

Notice that we asserted that **group_by_param** is a SingleSelectParameter. This is useful to provide the IDE required information to suggest appropriate methods for auto-complete. With a list of suggestions the moment you type `group_by_param.get`, you don't have to memorize that the **get_selected** method exists for SingleSelectParameter objects, or what method names are available for other parameter classes. This is assuming that the IDE is configured to the correct Python interpreter / virtual environment with Squirrels installed.

:::

The model files can now be modified to reference the context variables instead. In Jinja, we can also choose to reference dictionary values like `ctx.dim_col` instead of `ctx["dim_col"]`.

The contents for `dbv_weather_grouped.sql` can be changed to:

```sql
{%- set metrics -%}
    ROUND(SUM(precipitation), 2) AS precipitation,
    ROUND(MAX(temp_max), 2) AS temperature_max,
    ROUND(MIN(temp_min), 2) AS temperature_min,
    ROUND(AVG(wind), 2) AS wind
{%- endset -%}

WITH
weather_by_date AS (

    SELECT
        date,
        {{ metrics | indent(4) }},
        CAST(condition AS VARCHAR) AS condition,
        CAST(STRFTIME('%Y', date) AS INT) AS year,
        CAST(STRFTIME('%m', date) AS INT) AS month_order, 
        CAST(STRFTIME('%j', date) AS INT) AS day_of_year
    
    FROM weather
    
    GROUP BY date
),
weather_with_quarter AS (

    SELECT *,
        'Q' || ((month_order - 1) / 3 + 1) AS quarter,
        temperature_max AS temp_max,
        temperature_min AS temp_min
    
    FROM weather_by_date
)
SELECT
    {{ ctx.order_col }},
    {{ metrics }}

FROM weather_with_quarter

GROUP BY {{ ctx.order_col }}
```

In addition, the contents for `weather_by_period.sql` can be changed to:

```sql
SELECT 
    '{{ ctx.dim_col }}' AS dimension_type, 
    {{ ctx.dim_col }} AS dimension_value,
    precipitation,
    temperature_max,
    temperature_min,
    wind

FROM {{ ref("dbv_weather_grouped") }} AS a

{%- if ctx.dim_col == "month_name" %}
    LEFT JOIN {{ ref("seed_month_names") }} AS b USING (month_order)
{%- endif %}

ORDER BY {{ ctx.order_col }}
```

We will leave it to you to try out `sqrl run` or `sqrl compile` again on these new changes.

**Congratulations, you have reached the end of the tutorial!**

## What's Next?

For an expanded version of the "weather example" project, see the "sqrl-weather-analytics" folder in our "squirrels-examples" github repo found here:

https://github.com/squirrels-analytics/squirrels-examples/tree/main/sqrl-weather-analytics

This is a revised example that demonstrates:
- Sharing common SQL functionality across multiple datasets across multiple models or datasets using Jinja macros
- Querying multiple database systems and joining the results together in a single dataset/API endpoint
- Loading a machine learning (ML) model and using a Python data model to create a column for ML model predictions

In addition, the following topics may also useful for your Squirrels projects:
- [Dashboards](./topics/dashboards)
- [Python Models](./topics/models-python)
- [SQL Placeholders](./topics/placeholders)
  - A mechanism to use free-form text parameter values in models without SQL injection
- [Authentication](./topics/auth)
- [Interacting with Squirrels in Python](./topics/interact-in-python)
- [Modify Dates with dateutils](./topics/dateutils)
- [Versioning Best Practices](./topics/tips/versioning)
- [Deploy with Docker](./topics/tips/deployment)

You can also check out the [CLI References](/docs/references/cli) to understand the commands available with Squirrels, or check out the [Python Classes](/docs/references/python) available in the Squirrels library.


[python virtual environments]: https://realpython.com/python-virtual-environments-a-primer/
[yaml]: https://yaml.org/
[Jinja]: https://jinja.palletsprojects.com/
[squirrels.yml]: ./topics/project-file
[env.yml]: ./topics/environcfg
[parameters.py]: ./topics/parameters
[context.py]: ./topics/context
[seeds]: ./topics/seeds
