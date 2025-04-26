# Parameter (class)

This is the base class for all [parameter classes]. It can be imported from the module `squirrels.types` or `squirrels`.

The parameter classes are used in two ways:
1. Creating a parameter in the [parameters.py](../../../docs/concepts/parameters) file using a factory method (one of **CreateSimple**, **CreateWithOptions**, or **CreateFromSource**). These factory methods tell Squirrels to create the configuration for the widget parameters for the end user to use, such that the parameter object (with parameter selections) can be accessed later in real-time. Thus, these factory methods return None instead of parameter objects.
2. Accessing a field (such as the id, label, custom field, date, etc.) of the selected parameter value in [context.py](../../../docs/concepts/context) or data models via methods on the parameter object. For example, the code below demonstrates how this would be done in `context.py`.

```python
if sqrl.param_exists("my_ss_param"):
    my_ss_param = sqrl.prms["my_ss_param"]
    assert isinstance(my_ss_param, p.SingleSelectParameter)
    # invoke some method on the parameter object "my_ss_param" here, such as:
    my_ss_param_id = my_ss_param.get_selected_id()
```


[parameter classes]: ../parameters
