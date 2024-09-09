# ModelArgs

The class for the "sqrl" argument of the main function of a Python model. The class contains the same attributes as [ModelDepsArgs](./ModelDepsArgs) and more.

Can be found in the classpath `squirrels.arguments.run_time_args.ModelArgs` or `squirrels.ModelArgs`.

## Attributes

Attibutes of the "sqrl" argument that can be accessed.

### proj_vars

A dictionary to access a project variable defined in `squirrels.yml`.

### env_vars

A dictionary to access an environment variable defined in `env.yml`.

### user

The authenticated user with type User class defined in `auth.py` (if applicable), or None if no user authenticated.

### prms

A dictionary of the parameter objects (containing the real-time parameter selections) by parameter name.

### traits

A dictionary of the dataset traits.

### ctx

A dictionary of context variables (often defined based on the real-time parameter selections) defined in `context.py`.

### connections

A dictionary of sqlalchemy engines by connection name.

## Methods

Methods that can be invoked with the "sqrl" argument.

### set_placeholder

Gets user credentials for database connections.

**Required Arguments:**

- **placeholder**: A string for the placeholder name
- **value**: A value of any type for the placeholder

### param_exists

Checks whether a parameter exists and is enabled

**Required Arguments:**

- **param_name**: A string for the parameter name

**Returns:** A boolean for whether the parameter name exists and is enabled

### ref

Gets the result of a dependent data model.

**Required Arguments**

- **model**: A string for the dependent model name

**Returns:** A pandas dataframe.

### is_placeholder

Checks whether a name is a valid placeholder

**Required Arguments**

- **placeholder**: A string for the placeholder name

**Returns:** A boolean for whether the placeholder name is valid

### get_placeholder_value

Gets the value of a placeholder. USE WITH CAUTION. Do not use the return value directly in a SQL query since that could be prone to SQL injection

**Required Arguments**

- **placeholder**: A string for the placeholder name

**Returns:** Returns the value of the placeholder (can by any type) or None if the placeholder doesn't exist

### run_external_sql

Runs SQL query on an external database.

**Required Arguments:**

- **sql**: A string for the SQL query to run on the external database

**Optional Keyword Arguments:**

- **connection_name**: A string for the connection name of the external database. If unspecified (or None), the default connection name is used

**Returns:** A pandas dataframe.

### run_sql_on_dataframes

Runs SQL queries on pandas dataframes.

**Required Arguments:**

- **query**: A string for the SQL query to run on pandas dataframes (using sqlite or duckdb dialect depending on project settings)

**Optional Keyword Arguments:**

- **dataframes**: A dictionary of pandas dataframes by table name that the SQL query refers to
    - If unspecified (or None), the pandas dataframes and names are the dependent model names defined in the "dependencies" function of the Python model

**Returns:** A pandas dataframe.
