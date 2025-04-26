# SelectParameterOption (class)

SelectParameterOption objects are used to define the options for single-select and multi-select parameters. This is a subclass of [ParameterOption].

The class can be imported from the `squirrels.parameter_options` or `squirrels` module.

## Constructor

```python
def __init__(
    self, id: str, label: str, *, 
    is_default: bool = False, user_groups: typing.Iterable[Any] | str = frozenset(), 
    parent_option_ids: typing.Iterable[str] | str = frozenset(), custom_fields: dict[str, Any] = {}, 
    **kwargs
) -> None:
```

Creates a SelectParameterOption object.

**Required Arguments:**

- **id**: A string for unique identifier of this option that never changes for subsequent versions of the project
- **label**: A string for human-friendly display name of this option

**Optional Keyword Arguments:**

- **is_default**: 
    - A boolean for whether this is option is selected by default
    - For single-select parameters, the default is the first option in the list where this flag is true, or the very first option in the list if none of the options have this flag as true
    - For multi-select parameters, all options that have this flag as true are selected by default
- **user_groups**: 
    - A value or list of values (of any type) for the user attribute value(s) that this parameter option is visible for
    - The user attribute name is defined in the factory method of the SelectParameter class associated with this parameter option
- **parent_option_ids**: 
    - A string or list of strings for the ID(s) of the parent parameter options that this parameter option is visible for
    - The parent parameter name is defined in the factory method of the SelectParameter class associated with this parameter option
- **custom_fields**: A dictionary to define custom attribute names and values on parameter options

Custom fields can also be defined as arbitrary keyword arguments. However, if defined in both **custom_fields** and as a keyword argument, the one in **custom_fields** takes precedence.

## Methods

In the [context.py](../../../docs/concepts/context) file or data model, you can use the `get_selected` method on a single-select parameter without arguments to get the SelectParameterOption object for the selected option, or the `get_selected_list` method on a multi-select parameter without arguments to get the list of SelectParameterOption objects for the selected options. For example, the code below demonstrates getting the selected SelectParameterOption object from a single-select parameter in `context.py`.

```python
if sqrl.param_exists("my_ss_param"):
    my_ss_param = prms["my_ss_param"]
    assert isinstance(my_ss_param, p.SingleSelectParameter)
    my_option: p.SelectParameterOption = my_ss_param.get_selected()
    ...
```

The following class methods are available to use on a SelectParameterOption object.

### get_custom_field

```python
def get_custom_field(
    self, field: str, *, default_field: str | None = None, default: Any = None
) -> Any:
```

Gets the value of a custom field.

**Required Arguments:**

- **field**: A string for the key to use to fetch the custom field from the "custom_fields" dictionary

**Optional Keyword Arguments:**

- **default_field**: A string or None. If the "field" argument does not exist in "custom_fields" as a key, then this is used instead as the field if not None
- **default**: Any type. If "field" or "default_field" (if not None) arguments do not exist in "custom_fields" as keys, then this value is used as default. If this value is also None, then an error is thrown.

**Returns:** The value of the custom field (can be any type).


[ParameterOption]: ../types/ParameterOption