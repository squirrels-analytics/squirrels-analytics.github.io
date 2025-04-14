# Avoid SQL Injection

SQL injection is a critical security vulnerability that occurs when untrusted user input is directly incorporated into SQL queries.

## Understanding SQL Injection

SQL injection attacks can lead to:

- Unauthorized access to sensitive data
- Modification or deletion of database records
- Privilege escalation
- Complete system compromise

Consider this vulnerable example:

```sql
-- DON'T DO THIS if user_input comes from a text parameter
SELECT * FROM users 
WHERE username = '{{ user_input }}' AND department = 'engineering'
```

If a malicious user provides `' --` and the raw input is substituted directly, the resulting query becomes:

```sql
SELECT * FROM users 
WHERE username = '' --' AND department = 'engineering'
```

This would return all user records, bypassing the department filter. Fortunately, Squirrels makes it difficult to substitute raw inputs from text parameters directly into queries.

## SQL Injection Protection in Squirrels

The Squirrels framework provides built-in protection against SQL injection through a placeholder system. 

The preferred method for dealing with user-provided text is using placeholders:

```python
# In context.py
if sqrl.param_exists("search_term"):
    search_term = sqrl.prms["search_term"]
    assert isinstance(search_term, p.TextParameter)
    user_input = search_term.get_entered_text() # returns a squirrels.TextValue object
    
    # Set the placeholder
    sqrl.set_placeholder("search_input", user_input.apply_percent_wrap())
```

:::info

The `get_entered_text` method returns a `squirrels.TextValue` object, which is a wrapper around the raw text input. This object provides a number of methods for transforming the underlying string. For example, `apply_percent_wrap` wraps the underlying string with percent signs and returns another `squirrels.TextValue` object.

If a context variable is created from a `squirrels.TextValue` object and used in a SQL model, an error will be raised.

:::

Then in your SQL model, use the placeholder `search_input` as such:

```sql
SELECT * FROM products
WHERE product_name LIKE $search_input -- or :search_input for dbview models using SQLAlchemy
```

For dbview models, parameterizing queries is only supported if the corresponding connection type is SQLAlchemy. The syntax for named parameters is usually like `:search_input` which uses SQLAlchemy's parameter binding. 

For federate models, the syntax is like `$search_input` which uses DuckDB's parameter binding syntax instead.

For non-text parameters, using placeholders is optional since it is safe to substitute parameter selections directly when they are restrained to a set of values (e.g. dropdown values, numbers, dates, etc.). For example, we can define a context variable from the selected value of a number parameter:

```python
# In context.py
if sqrl.param_exists("limit"):
    limit_param = sqrl.prms["limit"]
    assert isinstance(limit_param, p.NumberParameter)
    ctx["row_limit"] = int(limit_param.get_selected_value())

    # Alternatively, set it as a placeholder value
    sqrl.set_placeholder("row_limit", int(limit_param.get_selected_value()))
```

Then, use the context variable in your SQL model:

```sql
SELECT * FROM products
LIMIT {{ ctx.row_limit }}
```

Alternatively, it can be created as a placeholder and used as such:

```sql
SELECT * FROM products
LIMIT $row_limit
```

## Security Best Practices

To ensure your Squirrels applications are protected against SQL injection:

1. **Always use placeholders** for text parameters:
   ```python
   sqrl.set_placeholder("param_name", text_value)
   ```

2. **Use input transformation methods** provided by the framework:
   ```python
   # Use 'apply_percent_wrap' for LIKE queries with wildcards
   search = user_input.apply_percent_wrap() # returns a squirrels.TextValue object
   sqrl.set_placeholder("search", search)

   # Use 'apply' to transform the underlying string
   search = user_input.apply(lambda x: x.lower()) # returns a squirrels.TextValue object
   sqrl.set_placeholder("search", search)

   # Use 'apply_as_number' to transform the underlying string into a number
   length = user_input.apply_as_number(lambda x: len(x)) # returns an int
   sqrl.set_placeholder("length", length)

   # 'apply_as_bool' and 'apply_as_datetime' methods are also available
   ```

## So What Code Enables SQL Injection?

**DO NOT write code like this:**

```python
# In context.py
if sqrl.param_exists("search_term"):
    search_term = sqrl.prms["search_term"]
    assert isinstance(search_term, p.TextParameter)
    user_input = search_term.get_entered_text() # returns a squirrels.TextValue object
    
    ctx["search_input"] = user_input._value_do_not_touch # DO NOT DO THIS
```

```sql
SELECT * FROM products
WHERE product_name LIKE '%{{ ctx.search_input }}%'
```

The `_value_do_not_touch` attribute is meant to be a private field of `squirrels.TextValue`. No Squirrels developer should be accessing this field unless they are intentionally trying to be a bad actor. Look out for this during code reviews.

## Testing for SQL Injection

When using the [sqrl compile] command, placeholder values are not directly substituted into queries. Instead, placeholders are preserved in the compiled SQL and their values are provided in a separate JSON file:

```
target/compile/<dataset>/<test_set>/
├── dbviews/
├── federates/
└── placeholders.json
```

This approach allows for:
- Security review of SQL without interpolated values
- Testing for injection vulnerabilities
- Better understanding of the query structure


[sqrl compile]: ../../references/cli/compile