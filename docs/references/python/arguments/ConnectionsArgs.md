# ConnectionsArgs

The class for the "sqrl" argument of the main function of `connections.py`.

Can be found in the classpath `squirrels.arguments.init_time_args.ConnectionsArgs` or `squirrels.ConnectionsArgs`.

## Attributes

Attibutes of the "sqrl" argument that can be accessed.

### proj_vars

A dictionary to access a project variable defined in `squirrels.yml`

### env_vars

A dictionary to access an environment variable defined in `env.yml`

## Methods

Methods that can be invoked with the "sqrl" argument.

### get_credential

Gets user credentials for database connections.

**Required Arguments:**

- **key**: A string for the key to credentials (username and password) set in `env.yml`

**Returns:** The corresponding username and password as a tuple of two strings
