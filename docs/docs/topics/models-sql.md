# SQL Models

The "data model" can simply be thought of as a table or view in a database, derived from pre-existing tables or views. All models are defined somewhere in the `models/` folder, and all SQL model files use the **.sql** extension. The part of the file name before the extension becomes the name of the model. In Squirrels, we split this into two categories: **dbview models** and **federate models**.

You can use the [sqrl get-file](../../references/cli/get-file) command to create example SQL models. The following commands let you create example SQL models for dbview models and federate models:

```bash
sqrl get-file dbview_example
sqrl get-file federate_example
```

Like [dbt], all SQL models in Squirrels can be templated with [Jinja]. However, some of the Squirrels features available in [Jinja] are different between dbview models and federate models.

## Dbview Models

The **dbview model** represents a view that runs against an external database. The connection settings to the external database is set up with YAML in the "connections" section of [squirrels.yml] or with Python in [connections.py]. This means the SQL dialect for the dbview model depends on the database it's running against. All dbview models are defined in the `models/dbviews/` folder.

By default, the connection name used by the dbview model is called `default` (or whatever is set for the [Project Setting] **connections.default_name_used**). To change the connection name used, use the **connection_name** argument of the **config** function in Jinja.

```sql
{{- config(connection_name="my_conn_name") -}}

SELECT ...
```

Alternatively, the configuration can be specify it in the "dbviews" section of [squirrels.yml]. For example, if the model file name is `my_dbview_model.sql`, then the configuration may look like this:

```yaml
dbviews:
  - name: my_dbview_model
    connection_name: my_conn_name
```

## Federate Models

The **federate model** would then be able to transform the results from dbview models (or other federate models) to create new results. This is possible since the results of the dbview models are written to a temporary in-memory database as a table for every API request. This in-memory database is typically sqlite, which also means that the SQL dialect for federate models is sqlite (this can also change to duckdb instead of sqlite using the [Project Setting] for **in_memory_database**). All federate models are defined in the `models/federates/` folder.

Use the **ref** function to specify the dependent models. This is how Squirrels can figure out all upstream models that must be run first before running a given federate model (models are compiled in upstream order and then run in downstream order). This function cannot be used in dbview models. Below is a simple example of usage.

```sql
SELECT ...
FROM {{ ref("my_dependent_model") }}
```

After all upstream models are resolved, the federate model can be materialized as a table or a view in the in-memory database. This is controlled using the **materialized** argument of the **config** function (where the options are "table" and "view"). By default, it will materialize as a table. Below is an example of configuring **materialized** to view (which may save memory usage but may also increase runtime if the model is referenced repeatedly).

```sql
{{- config(materialized="view") -}}

SELECT ...
```

Alternatively, the configuration can be specified in the "federates" section of [squirrels.yml]. For example, if the model file name is `my_federate_model.sql`, then the configuration may look like this:

```yaml
federates:
  - name: my_federate_model
    materialized: view
```

## Common Variables and Methods

In addition to **ref** and **config**, there are other useful variables or methods defined by Squirrels that are available for all SQL models (both dbviews and federates). These can be used to dynamically change the SQL query based on real-time context such as the parameter values selected or user authorized. They are as follows:

- **ctx** - a dictionary of custom-defined values from the [context.py] file. This one is commonly used, and it's in fact possible to only using this without using the other variables below. 
- **prms** - a dictionary of parameter names to their parameter objects. The selected values are accessible using methods on the parameter objects.
- **user** - an object of the user if one is authorized (or **null** if no user authorized). The user attributes are defined by the User class in [auth.py].
- **traits** - a dictionary of the dataset traits defined in [squirrels.yml] for the requested dataset.
- **proj_vars** - a dictionary of the project variables defined in [squirrels.yml].
- **env_vars** - a dictionary of the environment variables defined in [env.yml].
- **param_exists** - a function that takes a parameter name and returns a boolean indicating whether the parameter exists (and is enabled).
- **is_placeholder** - a function that takes a placeholder name and returns a boolean indicating whether the placeholder exists.
- **set_placeholder** - a function that takes a placeholder name and value. Sets the placeholder value (and returns an empty string).

In Jinja, a dictionary value can be referenced by key with square brackets, the same way in Python, or by simply using dot notation. For example:

```sql
SELECT * FROM mytable
WHERE mycol = '{{ ctx.some_value }}'
```

Attributes of Python class instances, such as **user**, can also be referenced by dot notation, which is the same way in Jinja and Python. For example:

```sql
SELECT
{%- if user.department == 'engineer' %}
    mycolumn
{%- else %}
    '***' as mycolumn
{%- end %}
FROM mytable
```

## Using Custom Jinja Macros

One of the key concepts of [Jinja] is "macros" which can be thought of logic that's reusable within or across SQL models, or even across Squirrels projects (heck, even across dbt and Squirrels projects is possible!).

For example, suppose we have a SQL model file that looks like this:

```sql
SELECT 
    (CASE WHEN denom = 0 THEN 0 ELSE num1 / denom END) as ratio1
    (CASE WHEN denom = 0 THEN 0 ELSE num2 / denom END) as ratio2
FROM mytable
```

You may notice the **CASE WHEN** statements to check if the denominator is zero is repetitive. The repetition can be reduced by using a macro:

```sql
{%- macro safe_divide(numerator, denominator) -%}
(CASE WHEN {{ denominator }} = 0 THEN 0 ELSE {{ numerator }} / {{ denominator }} END)
{%- endmacro -%}

SELECT
    {{ safe_divide("num1", "denom") }} as ratio1
    {{ safe_divide("num2", "denom") }} as ratio2
FROM mytable
```

Or, you can write the macro in a ".sql" file in the `macros` folder (such as `macros/utils.sql`) and any macros contained in these files can be used by any model file (without having to [import/include the file using Jinja](https://ttl255.com/jinja2-tutorial-part-6-include-and-import/) explicit). For example:

```sql
-- macros/utils.sql
{%- macro safe_divide(numerator, denominator) -%}
(CASE WHEN {{ denominator }} = 0 THEN 0 ELSE {{ numerator }} / {{ denominator }} END)
{%- endmacro -%}

-- my_model.sql
SELECT
    {{ safe_divide("num1", "denom") }} as ratio1
    {{ safe_divide("num2", "denom") }} as ratio2
FROM mytable
```

Although ".sql" is preferred, the macros file may also end in ".j2", ".jinja", or ".jinja2" for it to be recognized by Squirrels.

The benefit of reusable macros is more apparent for larger projects, especially if the same underlying logic is repeated many times (instead of just twice). For instance, if there are a hundred columns that calculate division the same way with the CASE WHEN statement above, then if we needed to change our division by zero to result in **null**, it's easier to change one place instead of a hundred places.

To share Jinja macros across Squirrels projects, use the [sqrl deps] command to download a git repo into the `sqrl_packages/` folder. If these repos have a `macros/` folder with macro files, the macros in these files are automatically imported as well.

:::note

If you're familiar with [dbt], you may have noticed that there are a few differences on how macros are used. 

In [dbt], Jinja macro files use the **.sql** extension, and must be contained in a `macros/` folder. And all macros contained in the `macros/` folder are included for all SQL models. Jinja's import or include statements are unsupported in the SQL models.

In Squirrels, Jinja macro files can use any extension, and can be contained in any folder. However, to use the Jinja file in a SQL model, it must be imported or included explicitly.

:::


[squirrels.yml]: ./project-file
[env.yml]: ./environcfg
[Project Setting]: ./settings
[connections.py]: ./connections
[sqrl deps]: ../../references/cli/deps
[context.py]: ./context
[auth.py]: ./auth
[dbt]: https://docs.getdbt.com/docs/introduction
[Jinja]: https://ttl255.com/jinja2-tutorial-part-1-introduction-and-variable-substitution/
