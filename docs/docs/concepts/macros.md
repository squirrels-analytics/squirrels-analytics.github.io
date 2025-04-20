# Macros & Filters

SQL data models are written in [Jinja](https://jinja.palletsprojects.com/en/stable/) templates. 

Jinja has a concept known as [macros](https://jinja.palletsprojects.com/en/stable/templates/#macros) that allows you to reuse similarly structured text in multiple places, including across different files.

Similarly, Jinja also comes with [filters](https://jinja.palletsprojects.com/en/stable/templates/#filters) that are built-in functions that can be used to process the output of variables or expressions.

## Why Use Macros?

To give an example of how Jinja macros can be useful for SQL data models, consider the following example:

```sql
SELECT
    (CASE WHEN col1 < 0.3 THEN 0.3 WHEN col1 < 0.6 THEN col1 ELSE 0.6 END) AS col1_clamped,
    (CASE WHEN col2 < 0.2 THEN 0.2 WHEN col2 < 0.7 THEN col2 ELSE 0.7 END) AS col2_clamped,
    (CASE WHEN col3 < 0.4 THEN 0.4 WHEN col3 < 0.6 THEN col3 ELSE 0.6 END) AS col3_clamped
FROM mytable
```

This SQL logic to "clamp" the value of a column looks similar for each column, but has slight variations. As the SQL query grows, maintaining the clamping logic across multiple columns becomes cumbersome.

To address this, we can define a macro that encapsulates the clamping logic:

```sql
{%- macro clamp(column, min, max) -%}
    (CASE WHEN {{ column }} < {{ min }} THEN {{ min }} WHEN {{ column }} < {{ max }} THEN {{ column }} ELSE {{ max }} END)
{%- endmacro -%}

SELECT
    {{ clamp('col1', 0.3, 0.6) }} AS col1_clamped,
    {{ clamp('col2', 0.2, 0.7) }} AS col2_clamped,
    {{ clamp('col3', 0.4, 0.6) }} AS col3_clamped
FROM mytable
```

When rendered using Jinja, the two SQL queries above will produce the same result.

## Macros in a Squirrels Project

In a Squirrels project, macros should be defined in the `macros/` folder of the project. Squirrels will automatically read all files in the `macros/` folder with the extension ".sql", ".j2", ".jinja", or ".jinja2" to load macros.

There is no need to use Jinja's "include" or "import" syntax to load the macros unless the file is outside the `macros/` folder.

### Built-in Macros

The following macros are built-in to the Squirrels framework which you do not need to define in your project:
- `ref(name)` - available for all data models
- `source(name)` - available for dbview models only as an alias for `ref(name)`

These macros will output the appropriate table name for the given model, which may differ based on whether they come from the virtual data environment or the in-memory DuckDB database for instance. In addition, these macros will add the dependent model to the `depends_on` property of the given model if it's not already present in the yaml file.

### Example

If you define a file named `macros/utils.sql` with the following content:

```sql
{%- macro clamp(column, min, max) -%}
    (CASE WHEN {{ column }} < {{ min }} THEN {{ min }} WHEN {{ column }} < {{ max }} THEN {{ column }} ELSE {{ max }} END)
{%- endmacro -%}
```

Then you can use the `clamp` macro in any SQL file in the `models/` folder (and can be used in multiple files):

```sql
SELECT
    {{ clamp('col1', 0.3, 0.6) }} AS col1_clamped,
    {{ clamp('col2', 0.2, 0.7) }} AS col2_clamped,
    {{ clamp('col3', 0.4, 0.6) }} AS col3_clamped
FROM mytable
```

## Sharing Macros Between Projects

You can use [sqrl deps] to load git repos with a `macros/` folder into the `sqrl_packages/` folder of your project. Squirrels will automatically load the macros from the `macros/` folder of all the loaded repos (in addition to the `macros/` folder defined in your project).

See the documentation for [sqrl deps] for more information.

:::tip

This allows dbt packages that are available through git to be used as a dependency in a Squirrels project, which allows you to share functionality across dbt and Squirrels projects.

:::

## Filters

First, see the following page for the list of built-in filters that are available in Jinja:
- https://jinja.palletsprojects.com/en/stable/templates/#builtin-filters

In addition, Squirrels provides the following added/changed filters:
- `{{ value | join(d: str = ', ', attribute: str | None = None) }}`
  - This is the same as Jinja's built-in `join` filter, but the default separator is "comma and space" instead of empty string.
- `{{ value | quote(q: str = "'", attribute: str | None = None) }}`
  - Enquotes the value with the given quote character.
- `{{ value | quote_and_join(q: str = "'", d: str = ', ', attribute: str | None = None) }}`
  - Enquotes each element of the value with the given quote character and joins them with the given separator.
  - Note that `{{ value | quote_and_join }}` is the same as `{{ value | map('quote') | join }}`.


[sqrl deps]: ../../references/cli/deps
