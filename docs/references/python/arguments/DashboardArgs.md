# DashboardArgs

The class for the "sqrl" argument of the main function of a Python dashboard.

Can be found in the classpath `squirrels.arguments.run_time_args.DashboardArgs` or `squirrels.DashboardArgs`.

## Attributes

Attibutes of the "sqrl" argument that can be accessed.

### proj_vars
    
A dictionary to access a project variable defined in `squirrels.yml`.

### env_vars

A dictionary to access an environment variable defined in `env.yml`.

## Methods

Methods that can be invoked with the "sqrl" argument.

### dataset

**Async method** to get the result of a dataset as pandas dataframe.

**Required Arguments**

- **name**: A string for the name of the dataset

**Optional Keyword Arguments:**

- **fixed_parameters**: A dictionary of parameter names to parameter selection values. Any parameter selections are both defined in this dictionary and in the real-time parameter selections, the selected value from this dictionary takes precedence.

**Returns:** A pandas dataframe.
