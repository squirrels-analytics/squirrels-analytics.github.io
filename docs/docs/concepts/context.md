# Context Variables & Placeholders

Context variables allow you to transform raw values from user attributes or parameter selections into more useful values that can be directly consumed by your SQL or Python models.

For text parameters, placeholders must be used instead of context variables to avoid risking SQL injection. Placeholders can also be used for other parameter types.

## Overview

Context variables and placeholders are defined in the `pyconfigs/context.py` file and are created in real-time after a user makes parameter selections. These variables can then be referenced in your model files to create dynamic queries that respond to user inputs.

To create a sample `pyconfigs/context.py` file, you can run:

```bash
sqrl get-file context.py
```

## How Context Variables Work

1. When a user makes parameter selections in the UI, those selections are passed to the `main()` function in `context.py`
2. The `main()` function transforms these raw selections into meaningful values, and either adds them to the `ctx` dictionary as context variables or set them as placeholders using `sqrl.set_placeholder()`
3. These context variables become available to use in your SQL or Python models

## The Context Function

The main function in `context.py` has the following signature:

```python
from typing import Any
from squirrels import ContextArgs, parameters as p

def main(ctx: dict[str, Any], sqrl: ContextArgs) -> None:
    # Your code here
```

Parameters:
- `ctx`: A dictionary where you'll store your context variables
- `sqrl`: A [ContextArgs] object containing parameter selections and other useful information

## The `sqrl` Argument

The `sqrl` argument is an instance of [ContextArgs] that provides access to various runtime information including:

### Properties

- `sqrl.prms`: Access to all parameter objects (dictionary of parameter names to Parameter objects)
- `sqrl.traits`: Dataset-specific traits defined in the dataset configuration
- `sqrl.user`: Information about the authenticated user (if authentication is enabled)
- `sqrl.proj_vars`: Project-level variables defined in project configuration
- `sqrl.env_vars`: Environment variables
- `sqrl.placeholders`: Dictionary of placeholder values used in SQL queries
- `sqrl.project_path`: Path to the project root directory

### Methods

- `sqrl.param_exists(name)`: Check if a parameter exists and is enabled
- `sqrl.set_placeholder(name, value)`: Set a placeholder value for SQL queries

## Parameter Type Safety

Always verify the parameter type before using parameter-specific methods. This can usually help Python code editors provide useful autocomplete suggestions for the parameter type.

```python
if sqrl.param_exists("limit"):
    limit_param = sqrl.prms["limit"]
    assert isinstance(limit_param, p.NumberParameter)
    ctx["limit_value"] = limit_param.get_selected_value()
```

## Common Transformations

Context variables are commonly used for:

1. Building column names for SQL clauses (SELECT, WHERE, GROUP BY, ORDER BY, etc.)
2. Formatting dates and numbers for SQL queries
3. Creating lists or dictionaries from multi-select parameters
4. Handling conditional logic based on user selections

## Examples

### Date Parameters

```python
if sqrl.param_exists("start_date"):
    start_date_param = sqrl.prms["start_date"]
    assert isinstance(start_date_param, p.DateParameter)
    ctx["start_date"] = start_date_param.get_selected_date() # string
else:
    ctx["start_date"] = "1900-01-01"
```

### Group By Parameters

```python
if sqrl.param_exists("group_by"):
    group_by_param = sqrl.prms["group_by"]
    assert isinstance(group_by_param, p.SingleSelectParameter)
    
    columns = group_by_param.get_selected("columns")
    aliases = group_by_param.get_selected("aliases", default_field="columns")
    
    ctx["select_dim_cols"] = ", ".join(x+" as "+y for x, y in zip(columns, aliases))
    ctx["group_by_cols"] = ", ".join(columns)
```

### Filter Parameters

```python
if sqrl.param_exists("category"):
    category_param = sqrl.prms["category"]
    assert isinstance(category_param, p.MultiSelectParameter)
    ctx["has_categories"] = category_param.has_non_empty_selection() # boolean
    ctx["categories"] = category_param.get_selected_ids_as_list() # list of strings
else:
    ctx["has_categories"] = False
```

### Using Authenticated User Information

The `sqrl.user` object contains information about the currently authenticated user. You can use this to create personalized context variables:

```python
# Check if user is authenticated
if sqrl.user is not None:
    ctx["is_manager"] = (getattr(sqrl.user, "role") == "manager")
else:
    ctx["is_manager"] = False
```

By default, the sqrl.user object has "username" and "is_admin" attributes if it's not None. You can see the [user.py] file in the `pyconfigs/` folder (if exists) for any custom user attributes.

### Using Placeholders for Text Parameters

Placeholders are special values that can be safely used in SQL queries. Using placeholders is required when working with text parameters (where the text input is free-form). Using placeholders derived from selected values of other parameter types is possible as well.

```python
# Set a placeholder for a user input that needs to be sanitized
if sqrl.param_exists("search_term"):
    search_term = sqrl.prms["search_term"]
    assert isinstance(search_term, p.TextParameter)
    user_input = search_term.get_entered_text() # a squirrels.TextValue object
    
    # Set the placeholder - this will be safely escaped in SQL
    sqrl.set_placeholder("search_input", user_input.apply_percent_wrap())
```

## Best Practices

1. Always check if a parameter exists before accessing it
2. Validate parameter types with `isinstance()`
3. Use descriptive and consistent naming for context variables
4. Group related transformations together
5. Keep the context function modular and organized by parameter type
6. Use context variables to simplify complex logic in your model files
7. For user-based security, create context variables that restrict data access based on user roles

## Using Context Variables in Models

### In SQL Models

The context variables dictionary is available in SQL models as a variable called `ctx` for dbview and federate models. You can access dictionary keys using the following Jinja syntax:

```sql
SELECT * FROM my_table
WHERE date BETWEEN '{{ ctx.start_date }}' AND '{{ ctx.end_date }}'
```

For placeholders defined via `sqrl.set_placeholder()` in the `context.py` file, you can use SQLAlchemy's syntax for named parameters (`:param_name`) for dbview models, or DuckDB's syntax for named parameters (`$param_name`) for federate models:

```sql
SELECT * FROM my_table
WHERE description LIKE $search_input -- or :search_input for dbview models
```

:::important

Current versions of DuckDB has an issue with using parameterized queries for creating views. By default, Squirrels creates views instead of tables for federate models in an in-memory database. To be able to use placeholders in your federate model, set `eager: true` in the model's yaml file to create tables instead of views in the in-memory database.

This will no longer be an issue after the following github issue from DuckDB is resolved:
https://github.com/duckdb/duckdb/issues/13069

:::

For the [sqrl compile] command, placeholder values are not replaced with their actual values due to possible confusion if a SQL injection attack is attempted in the test set. Instead, the placeholder values are provided in a json file in the `target/compile/` directory.

```
target/compile/<dataset>/<test_set>/
├── dbviews/
├── federates/
└── placeholders.json
```

These details are also available in the [Is SQL Injection Possible?] guide.

### In Python Models

Context variables are available in Python data models for federate models only. The following is an example of a federate model using the context variables "has_categories" and "categories" by accessing the `ctx` property of the `sqrl` argument:

```python
from squirrels import ModelArgs
import polars as pl, pandas as pd

def main(sqrl: ModelArgs) -> pl.LazyFrame | pl.DataFrame | pd.DataFrame:
    df: pl.LazyFrame = sqrl.ref("my_source")
    
    if sqrl.ctx["has_categories"]:
        categories_list = sqrl.ctx["categories"]
        df = df.filter(pl.col("category_id").is_in(categories_list))

    return df
```

The `sqrl` argument also contains methods `is_placeholder(name)` and `get_placeholder_value(name)` for checking if a placeholder exists and getting the value for the placeholder.


[ContextArgs]: ../../references/python/arguments/ContextArgs
[user.py]: ./user
[sqrl compile]: ../../references/cli/compile
[Is SQL Injection Possible?]: ../guides/sql-injection
