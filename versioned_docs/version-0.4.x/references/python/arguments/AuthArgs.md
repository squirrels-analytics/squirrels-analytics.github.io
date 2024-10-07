# AuthArgs

The class for the "sqrl" argument of the main function of `auth.py`. The class contains the same attributes and methods as [ConnectionsArgs](./ConnectionsArgs) and more.

Can be found in the classpath `squirrels.arguments.run_time_args.AuthArgs` or `squirrels.AuthArgs`.

## Attributes

Attibutes of the "sqrl" argument that can be accessed.

### proj_vars

A dictionary to access a project variable defined in `squirrels.yml`.

### env_vars

A dictionary to access an environment variable defined in `env.yml`.

### connections

A dictionary of sqlalchemy engines by connection name.

### username

A string for the username the user is attempting to authenticate with.

### password

A string for the password the user is attempting to authenticate with.

## Methods

Methods that can be invoked with the "sqrl" argument.

### get_credential

Gets user credentials for database connections.

**Arguments:**

- **key**: A string for the key to credentials (username and password) set in `env.yml`

**Returns:** The corresponding username and password as a tuple of two strings.
