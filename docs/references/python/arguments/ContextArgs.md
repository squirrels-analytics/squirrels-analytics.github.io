# ContextArgs (class)

ContextArgs is the class type of the "sqrl" argument for the main function of [context.py], which runs per (uncached) API request for data results.

The class can be imported from the `squirrels.arguments` or `squirrels` module.

## Attributes

Attributes of ContextArgs that can be accessed.

### project_path

The path to the project directory.

**Type:** `str`

### proj_vars
    
A dictionary to access a project variable defined in [squirrels.yml].

**Type:** `dict[str, Any]`

### env_vars

A dictionary of [environment variables].

**Type:** `dict[str, str]`

### user

The authenticated user of type [BaseUser] or User (defined in [user.py], if applicable), or None if no user authenticated.

**Type:** `BaseUser | None`

### prms

A dictionary of [Parameter] objects (containing the real-time parameter selections) by parameter name.

**Type:** `dict[str, squirrels.types.Parameter]`

### traits

A dictionary of the dataset traits.

**Type:** `dict[str, Any]`

## Methods

Methods that can be invoked from ContextArgs.

### set_placeholder

```python
def set_placeholder(self, placeholder: str, value: squirrels.types.TextValue | Any) -> str:
```

Sets a placeholder value, including a [TextValue] object.

**Required Arguments:**

- **placeholder**: A string for the placeholder name
- **value**: A value (a [TextValue] object or any primitive type) for the placeholder. 

**Returns:** An empty string

### param_exists

```python
def param_exists(self, param_name: str) -> bool:
```

Checks whether a parameter exists and is enabled

**Required Arguments:**

- **param_name**: A string for the parameter name

**Returns:** A boolean for whether the parameter name exists and is enabled


[context.py]: ../../../docs/concepts/context
[squirrels.yml]: ../../../docs/concepts/squirrels-yml
[environment variables]: ../../../docs/concepts/environment
[BaseUser]: ../types/BaseUser
[user.py]: ../../../docs/concepts/user
[Parameter]: ../types/Parameter
[TextValue]: ../types/TextValue
