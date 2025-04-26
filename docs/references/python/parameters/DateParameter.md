# DateParameter (class)

DateParameter objects can be used to interact with real-time selections for date parameters. It also contains factory methods as static / class methods for creating date parameters. This is a subclass of [Parameter].

The class can be imported from the `squirrels.parameters` or `squirrels` module.

## Static / Class Methods

**CreateSimple**, **CreateWithOptions** and **CreateFromSource** are factory methods for creating date widget parameters in the Squirrels application.

### CreateSimple

```python
@classmethod
def CreateSimple(
    cls, name: str, label: str, default_date: str | datetime.date, *, 
    description: str = "", min_date: str | datetime.date | None = None, 
    max_date: str | datetime.date | None = None, date_format: str = '%Y-%m-%d'
) -> None:
```

Creates the configurations for a date parameter by specifying the default date directly without specifying any [DateParameterOption](../parameter_options/DateParameterOption) instances. The parameter configurations get added to a pool of parameter configurations that datasets can pick from.

Unlike the **CreateWithOptions** factory method, this factory method assumes only one parameter option is needed with no arguments for "user_attribute" and "parent_name".

**Required Arguments:**

- **name**: A string for the name of the parameter
- **label**: A string for human-friendly display name for this parameter
- **default_date**: A string or datetime.date. This is the default selected date

**Optional Keyword Arguments:**

- **description**: A string for the explanation / purpose of the parameter. Default is empty string
- **date_format**: A string for the format of the "default_date" argument. Uses [datetime's format codes](https://www.w3schools.com/python/gloss_python_date_format_codes.asp). Default is '%Y-%m-%d'
- **min_date**: A string, datetime.date, or None. This is the minimum date that can be selected for this parameter. If None, there is no minimum date
- **max_date**: A string, datetime.date, or None. This is the maximum date that can be selected for this parameter. If None, there is no maximum date

**Returns:** None

### CreateWithOptions

```python
@classmethod
def CreateWithOptions(
    cls, name: str, label: str, all_options: typing.Sequence[squirrels.DateParameterOption | dict], *, 
    description: str = "", user_attribute: str | None = None, parent_name: str | None = None
) -> None:
```

Creates the configurations for a date parameter by providing a list of the parameter option objects, and adds it to a pool of parameter configurations that datasets can pick from.

**Required Arguments:**

- **name**: A string for the name of the parameter
- **label**: A string for human-friendly display name for this parameter
- **all_options**: A sequence of [DateParameterOption](../parameter_options/DateParameterOption) objects (or serialization of the objects as dictionaries) for all parameter options associated to this parameter

**Optional Keyword Arguments:**

- **description**: A string for the explanation / purpose of the parameter. Default is empty string
- **user_attribute**: An optional string for the user attribute that may affect the bounds and default date for this parameter. If None, then the authorized user has no effect on the bounds and default date. Default is None
- **parent_name**: An optional string for the name of the parent parameter that may affect the bounds and default date for this parameter. If None, then other parameters have no effect on the bounds and default date. Default is None

**Returns:** None

### CreateFromSource

```python
@classmethod
def CreateFromSource(
    cls, name: str, label: str, data_source: squirrels.DateDataSource | dict, *, 
    description: str = "", user_attribute: str | None = None, parent_name: str | None = None
) -> None:
```

Creates the configurations for a date parameter by providing a lookup table to query from, and adds it to a pool of parameter configurations that datasets can pick from.

**Required Arguments:**

- **name**: A string for the name of the parameter
- **label**: A string for human-friendly display name for this parameter
- **data_source**: A [DateDataSource](../data_sources/DateDataSource) object (or serialization of the object as a dictionary) which contains details of the lookup table from the external database

**Optional Keyword Arguments:**

Same optional arguments as the **CreateWithOptions** static method described above.

**Returns:** None

## Non-Static Methods

In the [context.py](../../../docs/concepts/context) file or data model, the methods below can be invoked on a DateParameter object to retrieve details for the selected parameter option at runtime. For example, the following code demonstrates getting the DateParameter object in `context.py`, and calling the "get_selected_date" method on it.

```python
if sqrl.param_exists("my_date_param"):
    my_date_param = prms["my_date_param"]
    assert isinstance(my_date_param, p.DateParameter)
    my_date: str = my_date_param.get_selected_date()
    ...
```

### get_selected_date

```python
def get_selected_date(self, *, date_format: str | None = None) -> str:
```

Gets selected date as string.

**Optional Keyword Argument**

- **date_format**: An optional string for the format of the returned date. Uses [datetime's format codes](https://www.w3schools.com/python/gloss_python_date_format_codes.asp). If None, uses the same format as the one specified for default date (see [DateParameterOption](../parameter_options/DateParameterOption) or [DateDataSource](../data_sources/DateDataSource)). Default is None

**Returns:** A string for the date.

### get_selected_date_quoted

```python
def get_selected_date_quoted(self, *, date_format: str | None = None) -> str:
```

Gets selected date as string surrounded by single quotes.

**Optional Keyword Argument**

- **date_format**: See "date_format" argument for the "get_selected_date" method above

**Returns:** A string for the quoted date.


[Parameter]: ../types/Parameter