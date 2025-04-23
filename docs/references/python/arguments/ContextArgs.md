# ContextArgs (class)

The class for the "sqrl" argument of the main function of [context.py], which runs per (uncached) API request for data results.

Can be imported from the module `squirrels.arguments` or `squirrels`.

## Attributes

Attributes of ContextArgs that can be accessed.

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

## Methods

Methods that can be invoked from ContextArgs.

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


[context.py]: ../../../docs/concepts/context
[squirrels.yml]: ../../../docs/concepts/squirrels-yml
[environment variables]: ../../../docs/concepts/environment
[BaseUser]: ../../../tba
[user.py]: ../../../docs/concepts/user
