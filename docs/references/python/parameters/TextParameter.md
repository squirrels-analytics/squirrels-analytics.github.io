# TextParameter (class)

TextParameter objects can be used to interact with real-time selections for text parameters. It also contains factory methods as static / class methods for creating text parameters. This is a subclass of [Parameter].

The class can be imported from the `squirrels.parameters` or `squirrels` module.

## Static / Class Methods

**CreateSimple**, **CreateWithOptions** and **CreateFromSource** are factory methods for creating text widget parameters in the Squirrels application.

### CreateSimple

```python
@classmethod
def CreateSimple(
    cls, name: str, label: str, *, 
    description: str = "", default_text: str = "", input_type: str = "text"
) -> None:
```

Creates the configurations for a text parameter by specifying the default text directly without specifying any [TextParameterOption](../parameter_options/TextParameterOption) instances. The parameter configurations get added to a pool of parameter configurations that datasets can pick from.

Unlike the **CreateWithOptions** factory method, this factory method assumes only one parameter option is needed with no arguments for "user_attribute" and "parent_name".

**Required Arguments:**

- **name**: A string for the name of the parameter
- **label**: A string for human-friendly display name for this parameter

**Optional Keyword Arguments:**

- **description**: A string for the explanation / purpose of the parameter. Default is empty string
- **default_text**: A string for the default text value. Default is empty string
- **input_type**: The type of input field to use. Must be one of "text", "textarea", "number", "color", "date", "datetime-local", "month", "time", and "password". Default is "text"
  - More information on input types other than "textarea" can be found at https://www.w3schools.com/html/
  html_form_input_types.asp
  - More information on "textarea" can be found at https://www.w3schools.com/tags/tag_textarea.asp

**Returns:** None

### CreateWithOptions

```python
@classmethod
def CreateWithOptions(
    cls, name: str, label: str, all_options: typing.Sequence[squirrels.TextParameterOption | dict], *, 
    description: str = "", input_type: str = "text", user_attribute: str | None = None, 
    parent_name: str | None = None
) -> None:
```

Creates the configurations for a text parameter by providing a list of the parameter option objects, and adds it to a pool of parameter configurations that datasets can pick from.

**Required Arguments:**

- **name**: A string for the name of the parameter
- **label**: A string for human-friendly display name for this parameter
- **all_options**: A sequence of [TextParameterOption](../parameter_options/TextParameterOption) objects (or serialization of the objects as dictionaries) for all parameter options associated to this parameter

**Optional Keyword Arguments:**

- **description**: A string for the explanation / purpose of the parameter. Default is empty string
- **input_type**: The type of input field to use. Must be one of "text", "textarea", "number", "color", "date", "datetime-local", "month", "time", and "password". Default is "text"
  - More information on input types other than "textarea" can be found at https://www.w3schools.com/html/
  html_form_input_types.asp
  - More information on "textarea" can be found at https://www.w3schools.com/tags/tag_textarea.asp
- **user_attribute**: An optional string for the user attribute that may affect the default text for this parameter. If None, then the authorized user has no effect on the default text. Default is None
- **parent_name**: An optional string for the name of the parent parameter that may affect the default text for this parameter. If None, then other parameters have no effect on the default text. Default is None

**Returns:** None

### CreateFromSource

```python
@classmethod
def CreateFromSource(
    cls, name: str, label: str, data_source: squirrels.TextDataSource | dict, *, 
    description: str = "", input_type: str = "text", user_attribute: str | None = None, 
    parent_name: str | None = None
) -> None:
```

Creates the configurations for a widget parameter by providing a lookup table to query from, and adds it to a pool of parameter configurations that datasets can pick from.

**Required Arguments:**

- **name**: A string for the name of the parameter
- **label**: A string for human-friendly display name for this parameter
- **data_source**: A [TextDataSource](../data_sources/TextDataSource) object (or serialization of the object as a dictionary) which contains details of the lookup table from the external database

**Optional Keyword Arguments:**

Same optional arguments as the **CreateWithOptions** static method described above.

**Returns:** None

:::note

The string format of the default text must follow the accepted format for the input type. For example:
- if the input type is "number", the default text must be an integer
- if the input type is "color", the default text must be a string in the format of "#RRGGBB" (e.g. "#FF0000" for red)
- if the input type is "date", the default text must be a string in the format of "YYYY-MM-DD"
- if the input type is "datetime-local", the default text must be a string in the format of "YYYY-MM-DDTHH:MM" (e.g. "2023-01-01T12:00")
- if the input type is "month", the default text must be a string in the format of "YYYY-MM" (e.g. "2023-01")
- if the input type is "time", the default text must be a string in the format of "HH:MM" (e.g. "12:00")

For all other input types, the default text can be any string.

:::

## Non-Static Methods

In the [context.py](../../../docs/concepts/context) file or data model, the methods below can be invoked on a TextParameter object to retrieve details for the selected parameter option at runtime. For example, the following code demonstrates getting the TextParameter object in `context.py`, and calling the "get_entered_value" method on it.

```python
if sqrl.param_exists("my_text_param"):
    my_text_param = prms["my_text_param"]
    assert isinstance(my_text_param, p.TextParameter)
    my_text_value = my_text_param.get_entered_value()
    sqrl.set_placeholder("text_value", my_text_value)
    ...
```

### get_entered_value

```python
def get_entered_value(self) -> squirrels.TextValue:
```

Gets the entered value as a [TextValue]. The [TextValue] object can be transformed into other non-string types (bool, int, float, etc.) using the "apply_as_" methods, or used directly as a placeholder value.

**Returns:** A [TextValue] object.

### get_entered_int

```python
def get_entered_int(self) -> int:
```

Gets the entered value as an integer. Only works if the input type is "number". Otherwise, an error is raised.

**Returns:** An integer.

### get_entered_datetime

```python
def get_entered_datetime(self) -> datetime.datetime:
```

Gets the entered value as a datetime object. Only works if the input type is "date", "datetime-local", "month", or "time". Otherwise, an error is raised.

For input type "month", the day will be set to 1.
For input type "time", the year, month, and day will be set to 1970, 1, and 1, respectively.

**Returns:** A datetime object.


[Parameter]: ../types/Parameter
[TextValue]: ../types/TextValue
