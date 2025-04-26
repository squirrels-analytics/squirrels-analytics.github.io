# NumberParameter (class)

NumberParameter objects can be used to interact with real-time selections for number parameters. It also contains factory methods as static / class methods for creating number parameters. This is a subclass of [Parameter].

The class can be imported from the `squirrels.parameters` or `squirrels` module.

## Static / Class Methods

**CreateSimple**, **CreateWithOptions** and **CreateFromSource** are factory methods for creating number widget parameters in the Squirrels application.

### CreateSimple

```python
@classmethod
def CreateSimple(
    cls, name: str, label: str, min_value: str | int | decimal.Decimal, max_value: str | int | decimal.Decimal, 
    *, description: str = "", increment: str | int | decimal.Decimal = 1, 
    default_value: str | int | decimal.Decimal | None = None
) -> None:
```

Creates the configurations for a number parameter by specifying the bounds directly without specifying any [NumberParameterOption](../parameter_options/NumberParameterOption) instances. The parameter configurations get added to a pool of parameter configurations that datasets can pick from.

Unlike the **CreateWithOptions** factory method, this factory method assumes only one parameter option is needed with no arguments for "user_attribute" and "parent_name".

**Required Arguments:**

- **name**: A string for the name of the parameter
- **label**: A string for human-friendly display name for this parameter
- **min_value**: A string, int, or Decimal (from decimal package). This is the minimum selectable value for this number parameter
- **max_value**: A string, int, or Decimal (from decimal package). This is the maximum selectable value for this number parameter
    - Must be greater than "min_value"

**Optional Keyword Arguments:**

- **description**: A string for the explanation / purpose of the parameter. Default is empty string
- **increment**: A string, int, or Decimal (from decimal package). This is the increment of selectable values. Default is 1
    - Must fit evenly between "min_value" and "max_value"
- **default_value**: A string, int, Decimal (from decimal package), or None. This is the default selected value. When None, the "min_value" is used. Default is None
    - Must be selectable based on "min_value", "max_value", and "increment"

**Returns:** None

### CreateWithOptions

```python
@classmethod
def CreateWithOptions(
    cls, name: str, label: str, all_options: typing.Sequence[squirrels.NumberParameterOption | dict], *, 
    description: str = "", user_attribute: str | None = None, parent_name: str | None = None
) -> None:
```

Creates the configurations for a number parameter by providing a list of the parameter option objects, and adds it to a pool of parameter configurations that datasets can pick from.

**Required Arguments:**

- **name**: A string for the name of the parameter
- **label**: A string for human-friendly display name for this parameter
- **all_options**: A sequence of [NumberParameterOption](../parameter_options/NumberParameterOption) objects (or serialization of the objects as dictionaries) for all parameter options associated to this parameter

**Optional Keyword Arguments:**

- **description**: A string for the explanation / purpose of the parameter. Default is empty string
- **user_attribute**: An optional string for the user attribute that may affect the bounds and default value for this parameter. If None, then the authorized user has no effect on the bounds and default value. Default is None
- **parent_name**: An optional string for the name of the parent parameter that may affect the bounds and default value for this parameter. If None, then other parameters have no effect on the bounds and default value. Default is None

**Returns:** None

### CreateFromSource

```python
@classmethod
def CreateFromSource(
    cls, name: str, label: str, data_source: squirrels.NumberDataSource | dict, *, 
    description: str = "", user_attribute: str | None = None, parent_name: str | None = None
) -> None:
```

Creates the configurations for a number parameter by providing a lookup table to query from, and adds it to a pool of parameter configurations that datasets can pick from.

**Required Arguments:**

- **name**: A string for the name of the parameter
- **label**: A string for human-friendly display name for this parameter
- **data_source**: A [NumberDataSource](../data_sources/NumberDataSource) object (or serialization of the object as a dictionary) which contains details of the lookup table from the external database

**Optional Keyword Arguments:**

Same optional arguments as the **CreateWithOptions** static method described above.

**Returns:** None

## Non-Static Methods

In the [context.py](../../../docs/concepts/context) file or data model, the methods below can be invoked on a NumberParameter object to retrieve details for the selected parameter option at runtime. For example, the following code demonstrates getting the NumberParameter object in `context.py`, and calling the "get_selected_value" method on it.

```python
if sqrl.param_exists("my_num_param"):
    my_num_param = prms["my_num_param"]
    assert isinstance(my_num_param, p.NumberParameter)
    my_num: float = my_num_param.get_selected_value()
    ...
```

### get_selected_value

```python
def get_selected_value(self) -> float:
```

Gets selected number as float.

**Returns:** A float for the selected number.


[Parameter]: ../types/Parameter