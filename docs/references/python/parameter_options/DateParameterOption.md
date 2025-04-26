# DateParameterOption (class)

DateParameterOption objects can be used to define the bounds and default date of a date parameter. Note that only one option can appear at a time, but different options may appear based on user attributes or parent parameter selections. This is a subclass of [ParameterOption].

The class can be imported from the `squirrels.parameter_options` or `squirrels` module.

## Constructor

```python
def __init__(
    self, default_date: str | datetime.date, *, 
    min_date: str | datetime.date | None = None, max_date: str | datetime.date | None = None, 
    date_format: str = "%Y-%m-%d", user_groups: typing.Iterable[Any] | str = frozenset(), 
    parent_option_ids: typing.Iterable[str] | str = frozenset()
) -> None:
```

Creates a DateParameterOption object.

**Required Arguments:**

- **default_date**: A string or datetime.date. This is the default selected date for this option

**Optional Keyword Arguments:**

- **date_format**: A string for the format of the "default_date" argument. Uses [datetime's format codes](https://www.w3schools.com/python/gloss_python_date_format_codes.asp). Default is '%Y-%m-%d'
- **min_date**: A string, datetime.date, or None. This is the minimum date that can be selected for this option. If None, there is no minimum date
- **max_date**: A string, datetime.date, or None. This is the maximum date that can be selected for this option. If None, there is no maximum date
- **user_groups**: 
    - A value or list of values (of any type) for the user attribute value(s) that this parameter option is visible for
    - The user attribute name is defined in the factory method of the DateParameter class associated with this parameter option
- **parent_options_ids**: 
    - A string or list of strings for the ID(s) of the parent parameter options that this parameter option is visible for
    - The parent parameter name is defined in the factory method of the DateParameter class associated with this parameter option


[ParameterOption]: ../types/ParameterOption