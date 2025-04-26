# DashboardArgs (class)

DashboardArgs is the class type of the "sqrl" argument for the main function of a Python [dashboard], which runs per (uncached) API request for dashboard results.

The class can be imported from the `squirrels.arguments` or `squirrels` module.

## Attributes

Attributes of DashboardArgs that can be accessed.

### project_path

The path to the project directory.

**Type:** `str`

### proj_vars
    
A dictionary to access a project variable defined in [squirrels.yml].

**Type:** `dict[str, Any]`

### env_vars

A dictionary of [environment variables].

**Type:** `dict[str, str]`

## Methods

Methods that can be invoked from DashboardArgs.

### dataset

```python
async def dataset(
    self, name: str, *, fixed_parameters: dict[str, Any] = {}
) -> polars.DataFrame:
```

Async method to get the result of a dataset as polars DataFrame.

**Required Arguments**

- **name**: A string for the name of the dataset

**Optional Keyword Arguments:**

- **fixed_parameters**: A dictionary of parameter names to parameter selection values. If parameter selections are defined in both this dictionary and the real-time parameter selections, the selected value from this dictionary takes precedence.

**Returns:** A polars DataFrame.


[dashboard]: ../../../docs/concepts/dashboards
[squirrels.yml]: ../../../docs/concepts/squirrels-yml
[environment variables]: ../../../docs/concepts/environment
