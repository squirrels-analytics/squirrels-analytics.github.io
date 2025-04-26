# ModelArgs (class)

ModelArgs is the class type of the "sqrl" argument for the main function of a Python [federate model], which runs per (uncached) API request for dataset results.

The class can be imported from the `squirrels.arguments` or `squirrels` module.

## Attributes

Attributes of ModelArgs that can be accessed.

### project_path

The path to the project directory.

**Type:** `str`

### proj_vars

A dictionary to access a project variable defined in [squirrels.yml].

**Type:** `dict[str, Any]`

### env_vars

A dictionary of [environment variables].

**Type:** `dict[str, str]`

### user

The authenticated user of type [BaseUser] or User (defined in [user.py], if applicable), or None if no user authenticated.

**Type:** `BaseUser | None`

### prms

A dictionary of [Parameter] objects (containing the real-time parameter selections) by parameter name.

**Type:** `dict[str, squirrels.types.Parameter]`

### traits

A dictionary of the dataset traits.

**Type:** `dict[str, Any]`

### placeholders

A dictionary of placeholder name to placeholder value.

**Type:** `dict[str, Any]`

### connections

A dictionary of connection keys to database connections, which are typically [ConnectionProperties] objects. Can also be used to store other in-memory objects in advance such as ML models.

**Type:** `dict[str, squirrels.types.ConnectionProperties | Any]`

### dependencies

The set of dependent data model names.

**Type:** `set[str]`

### ctx

A dictionary of context variables (often defined based on the real-time parameter selections) defined in [context.py].

**Type:** `dict[str, Any]`

## Methods

Methods that can be invoked from ModelArgs.

### set_placeholder

```python
def set_placeholder(self, placeholder: str, value: squirrels.types.TextValue | Any) -> str:
```

Sets a placeholder value, including a [TextValue] object.

**Required Arguments:**

- **placeholder**: A string for the placeholder name
- **value**: A value of any type for the placeholder

### param_exists

```python
def param_exists(self, param_name: str) -> bool:
```

Checks whether a parameter exists and is enabled

**Required Arguments:**

- **param_name**: A string for the parameter name

**Returns:** A boolean for whether the parameter name exists and is enabled

### ref

```python
def ref(self, model: str) -> polars.LazyFrame:
```

Returns the result (as polars DataFrame) of a dependent model.

**Required Arguments**

- **model**: A string for the dependent model name

**Returns:** A polars LazyFrame.

### is_placeholder

```python
def is_placeholder(self, placeholder: str) -> bool:
```

Checks whether a name is a valid placeholder

**Required Arguments**

- **placeholder**: A string for the placeholder name

**Returns:** A boolean for whether the placeholder name is valid

### get_placeholder_value

```python
def get_placeholder_value(self, placeholder: str) -> Any | None:
```

Gets the value of a placeholder. 

**USE WITH CAUTION**. Do not use the return value directly in a SQL query since that could be prone to SQL injection

**Required Arguments**

- **placeholder**: A string for the placeholder name

**Returns:** Returns the value of the placeholder (can by any type) or None if the placeholder doesn't exist

### run_external_sql

```python
def run_external_sql(self, connection_name: str, sql_query: str) -> polars.DataFrame:
```

Runs a SQL query against an external database, with option to specify the connection name. Placeholder values are provided automatically.

**Required Arguments:**

- **connection_name**: The connection name for the database
- **sql_query**: The SQL query. Can be parameterized with placeholders if the connection is a SQLAlchemy connection

**Returns:** The query result as a polars DataFrame

### run_sql_on_dataframes

```python
def run_sql_on_dataframes(
    self, sql_query: str, *, dataframes: dict[str, polars.LazyFrame] | None = None
) -> polars.DataFrame:
```

Uses a dictionary of dataframes to execute a SQL query in an embedded in-memory DuckDB database.

**Required Arguments:**

- **sql_query**: The SQL query to run

**Optional Keyword Arguments:**

- **dataframes**: A dictionary of table names to their polars LazyFrame. If None, uses results of dependent models defined in the "dependencies" attribute

**Returns:** The result as a polars DataFrame from running the query


[federate model]: ../../../docs/concepts/models-federate
[squirrels.yml]: ../../../docs/concepts/squirrels-yml
[environment variables]: ../../../docs/concepts/environment
[BaseUser]: ../types/BaseUser
[user.py]: ../../../docs/concepts/user
[ConnectionProperties]: ../types/ConnectionProperties
[context.py]: ../../../docs/concepts/context
[Parameter]: ../types/Parameter
