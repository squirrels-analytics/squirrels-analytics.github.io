# BuildModelArgs (class)

The class for the "sqrl" argument of the main function of Python [build models], which runs at build time.

Can be imported from the module `squirrels.arguments` or `squirrels`.

## Attributes

Attributes of BuildModelArgs that can be accessed.

### project_path

The path to the project directory.

### proj_vars
    
A dictionary to access a project variable defined in [squirrels.yml].

### env_vars

A dictionary of [environment variables].

### connections

A dictionary of connection keys to database connections, which are typically [ConnectionProperties] objects. Can also be used to store other in-memory objects in advance such as ML models.

### dependencies

The set of dependent data model names.

## Methods

Methods that can be invoked with BuildModelArgs.

### ref

Returns the result (as polars DataFrame) of a dependent model.

Note: This is different behaviour than the "ref" function for SQL models, which returns a string for the table/view name instead of a polars DataFrame.

**Required Arguments:**

- **model**: A string for the dependent model name

**Returns:** A polars LazyFrame

### run_external_sql

Runs a SQL query against an external database, with option to specify the connection name. Placeholder values are provided automatically.

**Required Arguments:**

- **connection_name**: The connection name for the database
- **sql_query**: The SQL query. Can be parameterized with placeholders if the connection is a SQLAlchemy connection

**Returns:** The query result as a polars DataFrame

### run_sql_on_dataframes

Uses a dictionary of dataframes to execute a SQL query in an embedded in-memory DuckDB database.

**Required Arguments:**

- **sql_query**: The SQL query to run

**Optional Keyword Arguments:**

- **dataframes**: A dictionary of table names to their polars LazyFrame. If None, uses results of dependent models defined in the "dependencies" attribute

**Returns:** The result as a polars DataFrame from running the query


[build models]: ../../../docs/concepts/models-build
[squirrels.yml]: ../../../docs/concepts/squirrels-yml
[environment variables]: ../../../docs/concepts/environment
[ConnectionProperties]: ../../../tba