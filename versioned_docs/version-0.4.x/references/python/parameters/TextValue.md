# TextValue

The return type of the "get_entered_value" method of the [TextParameter] class.

Internally, this class contains a string value. However, the internal string value should not be accessed directly to avoid SQL injection. Instead, the "apply_as_" methods can be used to transform the value into other non-string types (bool, int, float, etc.), or instances of this class can be used directly as a placeholder value.

## Methods

### apply

Applies the given function to the internal string value to create a new TextValue instance.

**Required Arguments:**

- **str_to_str_function**: A function that takes a string as input and returns a string.

**Returns:** A TextValue object.

### apply_percent_wrap

Create a new TextValue instance with the internal string value wrapped in percent signs.

**Returns:** A TextValue object.

### apply_as_bool

Applies the given function to the internal string value to create a boolean.

**Required Arguments:**

- **str_to_bool_function**: A function that takes a string as input and returns a boolean.

**Returns:** A boolean.

### apply_as_number

Applies the given function to the internal string value to create a number.

**Required Arguments:**

- **str_to_number_function**: A function that takes a string as input and returns an integer or float.

**Returns:** An integer or float.


[TextParameter]: ../parameters/TextParameter