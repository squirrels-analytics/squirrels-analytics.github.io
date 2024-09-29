# TextParameter

The class for defining and interacting with text parameters. 

Can be found in the classpath `squirrels.parameters.TextParameter` or `squirrels.TextParameter`.

## Static / Class Methods

### CreateWithOptions

Creates the configurations for a text parameter by providing a list of [TextParameterOption](../parameter_options/TextParameterOption) instances, and adds it to a pool of parameter configurations that datasets can pick from.

**Required Arguments:**

- **name**: A string for the name of the parameter
- **label**: A string for human-friendly display name for this parameter
- **all_options**: A sequence of [TextParameterOption](../parameter_options/TextParameterOption) instances for all parameter options associated to this parameter

**Optional Keyword Arguments:**

- **description**: A string for text that describes the parameter
- **input_type**: The type of input field to use. Must be one of "text", "textarea", "number", "color", "date", "datetime-local", "month", "time", and "password". Optional, default is "text". 
  - More information on input types other than "textarea" can be found at https://www.w3schools.com/html/html_form_input_types.asp
  - More information on "textarea" can be found at https://www.w3schools.com/tags/tag_textarea.asp

**Returns:** None

### CreateSimple

Creates the configurations for a text parameter without specifying [TextParameterOption](../parameter_options/TextParameterOption) instances, and adds it to a pool of parameter configurations that datasets can pick from.

Unlike the **CreateWithOptions** factory method, this factory method assumes only one parameter option is needed with no arguments for "user_attribute" and "parent_name".

**Required Arguments:**

- **name**: A string for the name of the parameter
- **label**: A string for human-friendly display name for this parameter

**Optional Keyword Arguments:**

- **description**: A string for the explanation / purpose of the parameter. Default is empty string
- **default_text**: A string for the default text value. Default is empty string
- **input_type**: The type of input field to use. Must be one of "text", "textarea", "number", "color", "date", "datetime-local", "month", "time", and "password". Optional, default is "text". 
  - More information on input types other than "textarea" can be found at https://www.w3schools.com/html/html_form_input_types.asp
  - More information on "textarea" can be found at https://www.w3schools.com/tags/tag_textarea.asp

**Returns:** None

### CreateFromSource

Creates the configurations for a text parameter by providing a lookup table to query from, and adds it to a pool of parameter configurations that datasets can pick from.

**Required Arguments:**

- **name**: A string for the name of the parameter
- **label**: A string for human-friendly display name for this parameter
- **data_source**: An instance of a [TextDataSource](../data_sources/TextDataSource) which contains details of the lookup table from the external database

**Optional Keyword Arguments:**

Same optional arguments as the **CreateWithOptions** static method.

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

In the [context.py](../../../docs/topics/context) file or data model, the methods below can be invoked on a TextParameter object to retrieve details for the selected parameter option at runtime. For example, the following code demonstrates getting the TextParameter object in `context.py`, and calling the "get_entered_value" method on it.

```python
if sqrl.param_exists("my_text_param"):
    my_text_param: sr.TextParameter = prms["my_text_param"]
    my_text_value: sr.TextValue = my_date_param.get_entered_value()
    sqrl.set_placeholder("text_value", my_text_value)
    ...
```

### get_entered_value

Gets the entered value as a [TextValue]. The [TextValue] object can be transformed into other non-string types (bool, int, float, etc.) using the "apply_as_" methods, or used directly as a placeholder value.

**Returns:** A [TextValue] object.

### get_entered_int

Gets the entered value as an integer. Only works if the input type is "number". Otherwise, an error is raised.

**Returns:** An integer.

### get_entered_datetime

Gets the entered value as a datetime object. Only works if the input type is "date", "datetime-local", "month", or "time". Otherwise, an error is raised.

For input type "month", the day will be set to 1.

For input type "time", the year, month, and day will be set to 1970, 1, and 1, respectively.

**Returns:** A datetime object.


[Parameter]: ./Parameter
[TextValue]: ./TextValue
