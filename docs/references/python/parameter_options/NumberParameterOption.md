# NumberParameterOption (class)

NumberParameterOption objects can be used to define the selectable range and default value of a number parameter. Note that only one option can appear at a time, but different options may appear based on user attributes or parent parameter selections. This is a subclass of [ParameterOption].

The class can be imported from the `squirrels.parameter_options` or `squirrels` module.

## Constructor

```python
def __init__(
    self, min_value: str | int | decimal.Decimal, max_value: str | int | decimal.Decimal, *, 
    increment: str | int | decimal.Decimal = 1, default_value: str | int | decimal.Decimal | None = None, 
    user_groups: typing.Iterable[Any] | str = frozenset(), 
    parent_option_ids: typing.Iterable[str] | str = frozenset()
) -> None:
```

Creates a NumberParameterOption object.

**Required Arguments:**

- **min_value**: A string, int, or decimal.Decimal. This is the minimum selectable value for this number parameter
- **max_value**: A string, int, or decimal.Decimal. This is the maximum selectable value for this number parameter
    - Must be greater than "min_value"

**Optional Keyword Arguments:**

- **increment**: A string, int, or decimal.Decimal. This is the increment of selectable values. Default is 1
    - Must fit evenly between "min_value" and "max_value"
- **default_value**: A string, int, decimal.Decimal, or None. This is the default selected value. When None, the "min_value" is used. Default is None
    - Must be selectable based on "min_value", "max_value", and "increment"
- **user_groups**: 
    - A value or list of values (of any type) for the user attribute value(s) that this parameter option is visible for
    - The user attribute name is defined in the factory method of the NumberParameter class associated with this parameter option
- **parent_options_ids**: 
    - A string or list of strings for the ID(s) of the parent parameter options that this parameter option is visible for
    - The parent parameter name is defined in the factory method of the NumberParameter class associated with this parameter option


[ParameterOption]: ../types/ParameterOption