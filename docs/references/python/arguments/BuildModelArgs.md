# BuildModelArgs (class)

BuildModelArgs is the class type of the "sqrl" argument for the main function of [build models], which runs at build time.

The class can be imported from the `squirrels.arguments` or `squirrels` module.

## Attributes

Attributes of BuildModelArgs that can be accessed.

### project_path

The path to the project directory.

**Type:** `str`

### proj_vars
    
A dictionary to access a project variable defined in [squirrels.yml].

**Type:** `dict[str, Any]`

### env_vars

A dictionary of [environment variables].

**Type:** `dict[str, str]`

### connections

A dictionary of connection keys to database connections, which are typically [ConnectionProperties] objects. Can also be used to store other in-memory objects in advance such as ML models.

**Type:** `dict[str, Any]`

### dependencies

The set of dependent data model names.

**Type:** `set[str]`

## Methods

Methods that can be invoked with BuildModelArgs.

### ref

```python
def ref(self, model: str) -> polars.LazyFrame:
```

Returns the result (as polars DataFrame) of a dependent model.

Note: This is different behaviour than the "ref" function for SQL models, which returns a string for the table/view name instead of a polars DataFrame.

**Required Arguments:**

- **model**: A string for the dependent model name

**Returns:** A polars LazyFrame

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


[build models]: ../../../docs/concepts/models-build
[squirrels.yml]: ../../../docs/concepts/squirrels-yml
[environment variables]: ../../../docs/concepts/environment
[ConnectionProperties]: ../types/ConnectionProperties
