# TextParameterOption (class)

TextParameterOption objects can be used to define the default text value of a text parameter. Note that only one option can appear at a time, but different options may appear based on user attributes or parent parameter selections. This is a subclass of [ParameterOption].

The class can be imported from the `squirrels.parameter_options` or `squirrels` module.

## Constructor

```python
def __init__(
    self, *, default_text: str = "", user_groups: typing.Iterable[Any] | str = frozenset(), 
    parent_option_ids: typing.Iterable[str] | str = frozenset()
) -> None:
```

Creates a TextParameterOption object.

**Optional Keyword Arguments:**

- **default_text**: A string for the default text value. Default is empty string
- **user_groups**: 
    - A value or list of values (of any type) for the user attribute value(s) that this parameter option is visible for
    - The user attribute name is defined in the factory method of the TextParameter class associated with this parameter option
- **parent_options_ids**: 
    - A string or list of strings for the ID(s) of the parent parameter options that this parameter option is visible for
    - The parent parameter name is defined in the factory method of the TextParameter class associated with this parameter option


[ParameterOption]: ../types/ParameterOption