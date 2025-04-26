# TextValue (class)

This is the return type of calling the `get_entered_text` method on a [TextParameter] object.

Can be imported from the module `squirrels.types` or `squirrels`.

## Methods

### apply

```python
def apply(self, str_to_str_function: typing.Callable[[str], str]) -> squirrels.TextValue:
```

Given a function that transforms a string, applies the function to the embedded text of the TextValue object and returns a new TextValue object with the transformed text.

**Required Arguments:**

- **str_to_str_function**: A function that takes a string and returns a string.

**Returns:** A new TextValue object with the modified text.

### apply_percent_wrap

```python
def apply_percent_wrap(self) -> squirrels.TextValue:
```

Adds the '%' symbol before and after embedded text of the TextValue object and returns a new TextValue object with the transformed text.

**Returns:** A new TextValue object with the modified text.

### apply_as_bool

```python
def apply_as_bool(self, str_to_bool_function: typing.Callable[[str], bool]) -> bool:
```

Given a function that takes a string and returns a boolean, applies the function to the embedded text of the TextValue object and returns a boolean.

**Required Arguments:**

- **str_to_bool_function**: A function that takes a string and returns a boolean.

**Returns:** A boolean.

### apply_as_number

```python
def apply_as_number(self, str_to_number_function: typing.Callable[[str], int | float]) -> int | float:
```

Given a function that takes a string and returns an integer or float, applies the function to the embedded text of the TextValue object and returns an integer or float.

**Required Arguments:**

- **str_to_number_function**: A function that takes a string and returns an integer or float.

**Returns:** An integer or float.

### apply_as_datetime

```python
def apply_as_datetime(self, str_to_datetime_function: typing.Callable[[str], datetime.datetime]) -> datetime.datetime:
```

Given a function that takes a string and returns a datetime object, applies the function to the embedded text of the TextValue object and returns a datetime object.

**Required Arguments:**

- **str_to_datetime_function**: A function that takes a string and returns a datetime object.

**Returns:** A datetime object.

## Example

```python
from squirrels import types, arguments as args, parameters as p

def main(sqrl: args.ContextArgs) -> None:
    ...
    my_text_param = sqrl.prms["my_text_param"]
    assert isinstance(my_text_param, p.TextParameter)

    my_text_value: types.TextValue = my_text_param.get_entered_text()

    new_text_value: types.TextValue = my_text_value.apply(lambda x: x.upper())

    sqrl.set_placeholder("entered_text_uppercase", new_text_value)
```


[TextParameter]: ../../../tba
