# ContextArgs

The class for the "sqrl" argument of the main function of `context.py`. The class contains the same attributes as [ParametersArgs](./ParametersArgs) and more.

Can be found in the classpath `squirrels.arguments.run_time_args.ContextArgs` or `squirrels.ContextArgs`.

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
