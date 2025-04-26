# SingleSelectParameter (class)

SingleSelectParameter objects can be used to interact with real-time selections for single-select parameters. It also contains factory methods as static / class methods for creating single-select parameters. This is a subclass of [Parameter].

The class can be imported from the `squirrels.parameters` or `squirrels` module.

## Static / Class Methods

**CreateSimple**, **CreateWithOptions** and **CreateFromSource** are factory methods for creating single-select widget parameters in the Squirrels application.

### CreateSimple

```python
@classmethod
def CreateSimple(
    cls, name: str, label: str, all_options: typing.Sequence[squirrels.SelectParameterOption | dict], *, 
    description: str = ""
) -> None:
```

Creates the configurations for a single-select parameter by providing a list of parameter option objects, and adds it to a pool of parameter configurations that datasets can pick from.

**Required Arguments:**

- **name**: A string for the name of the parameter
- **label**: A string for human-friendly display name for this parameter
- **all_options**: A sequence of [SelectParameterOption](../parameter_options/SelectParameterOption) objects (or serialization of the objects as dictionaries) for all parameter options associated to this parameter

**Optional Keyword Arguments:**

- **description**: A string for the explanation / purpose of the parameter. Default is empty string

**Returns:** None

### CreateWithOptions

```python
@classmethod
def CreateWithOptions(
    cls, name: str, label: str, all_options: typing.Sequence[squirrels.SelectParameterOption | dict], *, 
    description: str = "", user_attribute: str | None = None, parent_name: str | None = None
) -> None:
```

Creates the configurations for a single-select parameter by providing a list of the parameter option objects, and adds it to a pool of parameter configurations that datasets can pick from.

**Required Arguments:**

- **name**: A string for the name of the parameter
- **label**: A string for human-friendly display name for this parameter
- **all_options**: A sequence of [SelectParameterOption](../parameter_options/SelectParameterOption) objects (or serialization of the objects as dictionaries) for all parameter options associated to this parameter

**Optional Keyword Arguments:**

- **description**: A string for the explanation / purpose of the parameter. Default is empty string
- **user_attribute**: An optional string for the user attribute that may cascade the options for this parameter. If None, then the authorized user has no effect on the selectable parameter options. Default is None
- **parent_name**: An optional string for the name of the parent parameter that may cascade the options for this parameter. If None, then other parameters have no effect on the selectable parameter options for this parameter. Default is None

**Returns:** None

### CreateFromSource

```python
@classmethod
def CreateFromSource(
    cls, name: str, label: str, data_source: squirrels.SelectDataSource | dict, *, 
    description: str = "", user_attribute: str | None = None, parent_name: str | None = None
) -> None:
```

Creates the configurations for a single-select parameter by providing a lookup table to query from, and adds it to a pool of parameter configurations that datasets can pick from.

**Required Arguments:**

- **name**: A string for the name of the parameter
- **label**: A string for human-friendly display name for this parameter
- **data_source**: A [SelectDataSource](../data_sources/SelectDataSource) object (or serialization of the object as a dictionary) which contains details of the lookup table from the external database

**Optional Keyword Arguments:**

Same optional arguments as the **CreateWithOptions** static method described above.

**Returns:** None

## Non-Static Methods

In the [context.py](../../../docs/concepts/context) file or data model, the methods below can be invoked on a SingleSelectParameter object to retrieve details for the selected parameter option at runtime. For example, the following code demonstrates getting the SingleSelectParameter object in `context.py`, and calling the "get_selected" method on it.

```python
if sqrl.param_exists("my_ss_param"):
    my_ss_param = prms["my_ss_param"]
    assert isinstance(my_ss_param, p.SingleSelectParameter)
    my_special_field = my_ss_param.get_selected("some_field")
    ...
```

### get_selected

```python
def get_selected(
    self, field: str | None = None, *, 
    default_field: str | None = None, default: typing.Any = None
) -> squirrels.SelectParameterOption | typing.Any:
```

Gets the selected single-select option or selected custom field.

**Optional Arguments:**

- **field**: An optional string for the "custom_fields" attribute to retrieve from the selected option. If None, retrieves the selected SelectParameterOption instance instead. Default is None

**Optional Keyword Arguments:**

- **default_field**: An optional string. If not None, this is used if the "field" argument cannot be found in "custom_fields". Default is None
- **default**: A optional value (of any type) to return if the "field" and "default_field" arguments cannot be found in "custom_fields". If None, an error is thrown if "field" and "default_field" arguments cannot be found. Default is None

**Returns:** The value of the custom field (of any type) or a SelectParameterOption instance if the "field" argument is None.

### get_selected_id

```python
def get_selected_id(self) -> str:
```

Gets the ID of the selected parameter option.

**Returns:** A string for the ID.

### get_selected_id_quoted

```python
def get_selected_id_quoted(self) -> str:
```

Gets the ID of the selected parameter option surrounded by single quotes.

**Returns:** A string for the quoted ID.

### get_selected_label

```python
def get_selected_label(self) -> str:
```

Gets the label of the selected parameter option.

**Returns:** A string for the label.

### get_selected_label_quoted

```python
def get_selected_label_quoted(self) -> str:
```

Gets the label of the selected parameter option surrounded by single quotes.

**Returns:** A string for the quoted label.


[Parameter]: ../types/Parameter