# DashboardArgs (class)

The class for the "sqrl" argument of the main function of a Python [dashboard], which runs per (uncached) API request for dashboard results.

Can be imported from the module `squirrels.arguments` or `squirrels`.

## Attributes

Attributes of DashboardArgs that can be accessed.

### project_path

The path to the project directory.

### proj_vars
    
A dictionary to access a project variable defined in [squirrels.yml].

### env_vars

A dictionary of [environment variables].

## Methods

Methods that can be invoked from DashboardArgs.

### dataset

**Async method** to get the result of a dataset as polars DataFrame.

**Required Arguments**

- **name**: A string for the name of the dataset

**Optional Keyword Arguments:**

- **fixed_parameters**: A dictionary of parameter names to parameter selection values. If parameter selections are defined in  both this dictionary and the real-time parameter selections, the selected value from this dictionary takes precedence.

**Returns:** A polars DataFrame.


[dashboard]: ../../../docs/concepts/dashboards
[squirrels.yml]: ../../../docs/concepts/squirrels-yml
[environment variables]: ../../../docs/concepts/environment
