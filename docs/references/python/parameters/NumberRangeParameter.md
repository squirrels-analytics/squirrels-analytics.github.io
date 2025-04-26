# NumberRangeParameter (class)

NumberRangeParameter objects can be used to interact with real-time selections for number range parameters. It also contains factory methods as static / class methods for creating number range parameters. This is a subclass of [Parameter].

The class can be imported from the `squirrels.parameters` or `squirrels` module.

## Static / Class Methods

**CreateSimple**, **CreateWithOptions** and **CreateFromSource** are factory methods for creating number range widget parameters in the Squirrels application.

### CreateSimple

```python
@classmethod
def CreateSimple(
    cls, name: str, label: str, min_value: str | int | decimal.Decimal, max_value: str | int | decimal.Decimal, 
    *, description: str = "", increment: str | int | decimal.Decimal = 1, 
    default_lower_value: str | int | decimal.Decimal | None = None,
    default_upper_value: str | int | decimal.Decimal | None = None
) -> None:
```

Creates the configurations for a number range parameter by specifying the bounds directly without specifying any [NumberRangeParameterOption](../parameter_options/NumberRangeParameterOption) instances. The parameter configurations get added to a pool of parameter configurations that datasets can pick from.

Unlike the **CreateWithOptions** factory method, this factory method assumes only one parameter option is needed with no arguments for "user_attribute" and "parent_name".

**Required Arguments:**

- **name**: A string for the name of the parameter
- **label**: A string for human-friendly display name for this parameter
- **min_value**: A string, int, or Decimal (from decimal package). This is the minimum selectable value for both the lower and upper selected values of the number range parameter
- **max_value**: A string, int, or Decimal (from decimal package). This is the maximum selectable value for both the lower and upper selected values of the number range parameter
    - Must be greater than "min_value"

**Optional Keyword Arguments:**

- **description**: A string for the explanation / purpose of the parameter. Default is empty string
- **increment**: A string, int, or Decimal (from decimal package). This is the increment of selectable values. Default is 1
    - Must fit evenly between "min_value" and "max_value"
- **default_lower_value**: A string, int, Decimal (from decimal package), or None. This is the default selected lower value. When None, the "min_value" is used. Default is None
    - Must be selectable based on "min_value", "max_value", and "increment"
- **default_upper_value**: A string, int, Decimal (from decimal package), or None. This is the default selected upper value. When None, the "max_value" is used. Default is None
    - Must be selectable based on "min_value", "max_value", and "increment"
    - Must be greater than "default_lower_value"

**Returns:** None

### CreateWithOptions

```python
@classmethod
def CreateWithOptions(
    cls, name: str, label: str, all_options: typing.Sequence[squirrels.NumberRangeParameterOption | dict], *, 
    description: str = "", user_attribute: str | None = None, parent_name: str | None = None
) -> None:
```

Creates the configurations for a number range parameter by providing a list of the parameter option objects, and adds it to a pool of parameter configurations that datasets can pick from.

**Required Arguments:**

- **name**: A string for the name of the parameter
- **label**: A string for human-friendly display name for this parameter
- **all_options**: A sequence of [NumberRangeParameterOption](../parameter_options/NumberRangeParameterOption) objects (or serialization of the objects as dictionaries) for all parameter options associated to this parameter

**Optional Keyword Arguments:**

- **description**: A string for the explanation / purpose of the parameter. Default is empty string
- **user_attribute**: An optional string for the user attribute that may affect the bounds and default values for this parameter. If None, then the authorized user has no effect on the bounds and default values. Default is None
- **parent_name**: An optional string for the name of the parent parameter that may affect the bounds and default values for this parameter. If None, then other parameters have no effect on the bounds and default values. Default is None

**Returns:** None

### CreateFromSource

```python
@classmethod
def CreateFromSource(
    cls, name: str, label: str, data_source: squirrels.NumberRangeDataSource | dict, *, 
    description: str = "", user_attribute: str | None = None, parent_name: str | None = None
) -> None:
```

Creates the configurations for a number range parameter by providing a lookup table to query from, and adds it to a pool of parameter configurations that datasets can pick from.

**Required Arguments:**

- **name**: A string for the name of the parameter
- **label**: A string for human-friendly display name for this parameter
- **data_source**: A [NumberRangeDataSource](../data_sources/NumberRangeDataSource) object (or serialization of the object as a dictionary) which contains details of the lookup table from the external database

**Optional Keyword Arguments:**

Same optional arguments as the **CreateWithOptions** static method described above.

**Returns:** None

## Non-Static Methods

In the [context.py](../../../docs/concepts/context) file or data model, the methods below can be invoked on a NumberRangeParameter object to retrieve details for the selected parameter option at runtime. For example, the following code demonstrates getting the NumberRangeParameter object in `context.py`, and calling the "get_selected_lower_value" method on it.

```python
if sqrl.param_exists("my_nr_param"):
    my_nr_param = prms["my_nr_param"]
    assert isinstance(my_nr_param, p.NumberRangeParameter)
    my_num: float = my_nr_param.get_selected_lower_value()
    ...
```

### get_selected_lower_value

```python
def get_selected_lower_value(self) -> float:
```

Get the selected lower value number.

**Returns:** A float for the selected lower value.

### get_selected_upper_value

```python
def get_selected_upper_value(self) -> float:
```

Get the selected upper value number.

**Returns:** A float for the selected upper value.


[Parameter]: ../types/Parameter