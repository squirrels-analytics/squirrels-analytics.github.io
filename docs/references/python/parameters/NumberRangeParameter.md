# NumberRangeParameter

The class for defining and interacting with number range parameters. 

Can be found in the classpath `squirrels.parameters.NumberRangeParameter` or `squirrels.NumberRangeParameter`.

## Static / Class Methods

In addition to the static methods specified on this page, see the [Parameter] page for details on the **CreateWithOptions** and **CreateFromSource** factory methods.

For NumberRangeParameter in particular:
- The **all_options** argument of the **CreateWithOptions** factory method must be a sequence of [NumberRangeParameterOption](../parameter_options/NumberRangeParameterOption) instances
- The **data_source** argument of the **CreateFromSource** factory method must be a [NumberRangeDataSource](../data_sources/NumberRangeDataSource) 

### CreateSimple

Creates the configurations for a number parameter by specifying the bounds directly without specifying any [NumberRangeParameterOption](../parameter_options/NumberRangeParameterOption) instances. The parameter configurations get added to a pool of parameter configurations that datasets can pick from.

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

## Non-Static Methods

In the [context.py](../../../docs/topics/context) file or data model, the methods below can be invoked on a NumberRangeParameter object to retrieve details for the selected parameter option at runtime. For example, the following code demonstrates getting the NumberRangeParameter object in `context.py`, and calling the "get_selected_lower_value" method on it.

```python
if sqrl.param_exists("my_nr_param"):
    my_nr_param: sr.NumberRangeParameter = prms["my_nr_param"]
    my_num: str = my_nr_param.get_selected_lower_value()
    ...
```

### get_selected_lower_value

Get the selected lower value number. This method takes no arguments.

**Returns:** A string that's parsable into a decimal number.

### get_selected_upper_value

Get the selected upper value number. This method takes no arguments.

**Returns:** A string that's parsable into a decimal number.


[Parameter]: ./Parameter