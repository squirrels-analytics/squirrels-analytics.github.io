# SQL Placeholders

Suppose you have a SQL query created in Python like this:

```python
description_pattern = f"%{description_keyword}%"
query = f"SELECT * FROM expenses WHERE description LIKE '{description_pattern}';"
```

If the variable `description_keyword` is a free-form text provided by the user, then this is a big problem since it would be possible for users to inject custom SQL queries with malicious intent. This problem is known as "SQL injection".

Squirrels uses SQLAlchemy under the hood, and SQLAlchemy allows you to avoid SQL injection by using parameterized queries. With parameterized queries, instead of performing string substitution or concatenation to create the SQL query, you can use syntax like `:description_pattern` in the SQL query as placeholders for literal values.

For example, the query above would be rewritten like this:

```python
query = "SELECT * FROM expenses WHERE description LIKE :description_pattern;"
```

In Squirrels, the `:description_pattern` part is what we call "placeholders". The sections below mentions how to define placeholders and how to use them in a model.

:::note

Placeholders can only be used for literal values which are values that the SQL query treats as string, number, date, etc. Placeholders cannot be used for other parts of the SQL query such as column names.

:::

## Defining Placeholders

Placeholders can be defined in the [context.py] file using the `set_placeholder` method. The example below demonstrates setting a placeholder for text entered through a text parameter named "description_filter":

```python
if sqrl.param_exists("description_filter"):
    descript_param: sr.TextParameter = sqrl.prms["description_filter"]
    desc_pattern = descript_param.get_entered_text().apply_percent_wrap()
    sqrl.set_placeholder("desc_pattern", desc_pattern)
```

Using placeholders with text parameters is a match made in heaven. 

The `get_entered_text` method of a text parameter object returns a special class object that contains the entered text as a private attribute that cannot be extracted. However, you can choose to use certain methods that's prefixed with "apply" (such as "apply_percent_wrap") to apply transformations on the embedded text value and return it as a new instance of the special class.

The only way to interact with the embedded text value is by passing the special class object into `set_placeholder`, which has the special ability to access the embedded text value as a string to be used with parameterized queries at model run time.

The `set_placeholder` method can also be used with other types such as strings, numbers, dates, boolean, etc. For other widget parameters such as number parameters and date parameters, Squirrels gives you the flexibility to provide the selected value to models as either a context variable or a placeholder.

:::info

The `set_placeholder` function is also available in the models files through Jinja. However, using it in the models files is not recommended since the placeholder would only apply to all downstream models, which can be confusing to work with.

:::

## Using Placeholders in Models

Simply use the `:name` syntax (without any quotes) to refer to a placeholder in SQL models.

```sql
SELECT * FROM expenses 
WHERE description LIKE :description_pattern
```

If the SQL model is used for multiple datasets and only some of those datasets contain widget parameters to define the placeholder, then you can use the `is_placeholder` method to only include the WHERE condition if the placeholder exists.

```sql
SELECT * FROM expenses 
WHERE true
    {% if is_placeholder("description_pattern") -%} AND description LIKE :description_pattern {%- endif %}
```

Python models also have access to the `is_placeholder` method, but unlike SQL models, they also have access to the `get_placeholder_value` method to extract the value from a placeholder name. **USE THIS METHOD WITH CAUTION**, it should not be used to build SQL strings in the Python model.

:::info

When compiling models using the [compile CLI], the placeholders do not get substituted into the compiled SQL files. However, a `placeholders.json` file is produced to show the dictionary of placeholder names to values.

:::


[context.py]: ./context
[compile CLI]: ../../references/cli/compile
