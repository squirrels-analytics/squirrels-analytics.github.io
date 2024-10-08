# Parameter (abstract)

This page contains the common methods of all (or most) Parameter classes. This page is provided to avoid repeated text. The "Parameter" class is actually an abstract class that other Parameter classes extend on. Do not use this class directly.

The Parameter classes are used in two ways:
1. Creating a parameter in the [parameters.py](../../../docs/topics/parameters) file using a factory method (which are static methods)
2. Accessing attributes of selected parameter options in [context.py](../../../docs/topics/context) or data models, typically using non-static methods on a parameter object. For example, the code below demonstrates how this would be done in `context.py`.

```python
if sqrl.param_exists("my_ss_param"):
    my_ss_param: sr.SingleSelectParameter = prms["my_ss_param"]
    ... # invoke some method on the parameter object "my_ss_param"
```

## Static / Class Methods

The definitions of the **CreateWithOptions** and **CreateSimple** factory methods are very similar (if not, the same) between Parameter classes.

### CreateWithOptions

Creates the configurations for a widget parameter by providing a list of the parameter option objects, and adds it to a pool of parameter configurations that datasets can pick from.

**Required Arguments:**

- **name**: A string for the name of the parameter
- **label**: A string for human-friendly display name for this parameter
- **all_options**: A sequence of [ParameterOption](../parameter_options/ParameterOption) instances for all parameter options associated to this parameter

**Optional Keyword Arguments:**

- **description**: A string for the explanation / purpose of the parameter. Default is empty string
- **user_attribute**: An optional string for the user attribute that may cascade the options for this parameter. If None, then the authorized user has no effect on the selectable parameter options. Default is None
- **parent_name**: An optional string for the name of the parameter (or "parent parameter") that may cascade the options for this parameter. If None, then other parameters have no effect on the selectable parameter options for this parameter. Default is None

**Returns:** None

### CreateFromSource

Creates the configurations for a widget parameter by providing a lookup table to query from, and adds it to a pool of parameter configurations that datasets can pick from.

**Required Arguments:**

- **name**: A string for the name of the parameter
- **label**: A string for human-friendly display name for this parameter
- **data_source**: An instance of a [DataSource](../data_sources/DataSource) which contains details of the lookup table from the external database

**Optional Keyword Arguments:**

Same optional arguments as the **CreateWithOptions** static method.

**Returns:** None
