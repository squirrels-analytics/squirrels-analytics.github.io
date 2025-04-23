# ModelArgs (class)

The class for the "sqrl" argument of the main function of a Python [federate model], which runs per (uncached) API request for dataset results.

Can be imported from the module `squirrels.arguments` or `squirrels`.

## Attributes

Attributes of ModelArgs that can be accessed.

### project_path

The path to the project directory.

### proj_vars

A dictionary to access a project variable defined in [squirrels.yml].

### env_vars

A dictionary of [environment variables].

### user

The authenticated user of type [BaseUser] or User (defined in [user.py], if applicable), or None if no user authenticated.

### prms

A dictionary of parameter objects (containing the real-time parameter selections) by parameter name.

### traits

A dictionary of the dataset traits.

### placeholders

A dictionary of placeholder name to placeholder value.

### connections

A dictionary of connection keys to database connections, which are typically [ConnectionProperties] objects. Can also be used to store other in-memory objects in advance such as ML models.

### dependencies

The set of dependent data model names.

### ctx

A dictionary of context variables (often defined based on the real-time parameter selections) defined in [context.py].

## Methods

Methods that can be invoked from ModelArgs.

### set_placeholder

Sets a placeholder value.

**Required Arguments:**

- **placeholder**: A string for the placeholder name
- **value**: A value of any type for the placeholder

### param_exists

Checks whether a parameter exists and is enabled

**Required Arguments:**

- **param_name**: A string for the parameter name

**Returns:** A boolean for whether the parameter name exists and is enabled

### ref

Returns the result (as polars DataFrame) of a dependent model.

**Required Arguments**

- **model**: A string for the dependent model name

**Returns:** A polars LazyFrame.

### is_placeholder

Checks whether a name is a valid placeholder

**Required Arguments**

- **placeholder**: A string for the placeholder name

**Returns:** A boolean for whether the placeholder name is valid

### get_placeholder_value

Gets the value of a placeholder. 

**USE WITH CAUTION**. Do not use the return value directly in a SQL query since that could be prone to SQL injection

**Required Arguments**

- **placeholder**: A string for the placeholder name

**Returns:** Returns the value of the placeholder (can by any type) or None if the placeholder doesn't exist

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


[federate model]: ../../../docs/concepts/models-federate
[squirrels.yml]: ../../../docs/concepts/squirrels-yml
[environment variables]: ../../../docs/concepts/environment
[BaseUser]: ../../../tba
[user.py]: ../../../docs/concepts/user
[ConnectionProperties]: ../../../tba
[context.py]: ../../../docs/concepts/context
