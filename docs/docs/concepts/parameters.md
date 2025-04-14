# Widget Parameters

The set of all widget parameters for all datasets can be defined in Python in the **main** function of `pyconfigs/parameters.py` or in YAML in the "parameters" section of [squirrels.yml]. This set of parameters is created when the API server starts with the [sqrl run] command, which includes reading lookup tables to create parameters from a data source. Each dataset may only use a subset of the parameters (configured in the "datasets" section of [squirrels.yml]), so for each dataset request, only that subset will be available to work with (for instance, in the [context.py] or model files).

It is recommended to specify parameters in Python. To create a sample `pyconfigs/parameters.py` file, you can run:

```bash
sqrl get-file parameters.py
```

The file has one main function that takes an argument called `sqrl`.

```python
from squirrels import ParametersArgs, parameters as p, parameter_options as po

def main(sqrl: ParametersArgs) -> None:
    ...
```

The `sqrl` object contains:
- `project_path`: Path to the project root
- `env_vars`: Dictionary of environment variables
- `project_variables`: Dictionary of project variables from `squirrels.yml`

## Parameter Types

Squirrels supports the following parameter types:

- [SingleSelectParameter] - Dropdown for selecting a single option
- [MultiSelectParameter] - Multiple-choice selection widget
- [DateParameter] - Date picker with a single date
- [DateRangeParameter] - Date picker with start and end dates
- [NumberParameter] - Numeric input with validation
- [NumberRangeParameter] - Range input with lower and upper numeric values
- [TextParameter] - Text input field with various formats

We classify [SingleSelectParameter] and [MultiSelectParameter] as "selection parameters", and the other parameter types as "non-selection parameters".

## Factory Methods

Each parameter type provides three factory methods:

- **CreateSimple**
    - Specify parameter attributes in code without cascading effects
- **CreateWithOptions** 
    - Specify parameter options with the option to define parent parameters (for cascading effects)
- **CreateFromSource**
    - Create parameter options based on a lookup table in a database

All factory methods require **name** and **label** as the first two string arguments. The **name** is used to set or reference parameter selections (set using query parameters of API requests and referenced with the **prms** dictionary in your code). The **label** is a human-friendly name shown to users in the frontend.

## Selection Parameters

The **CreateSimple** and **CreateWithOptions** methods for selection parameters take **all_options** as the third required argument. The main difference is that **CreateWithOptions** also accepts optional arguments for **parent_name** and **user_attribute**.

The **all_options** argument requires a sequence of [SelectParameterOption] instances. This class requires two arguments:
- **id** - Used for the frontend to specify selected parameter option(s). Once set, this should never change.
- **label** - The human-friendly name shown in the dropdown widget.

### SingleSelectParameter Example

Here's an example of creating a [SingleSelectParameter]:

```python
from squirrels import ParametersArgs, parameters as p, parameter_options as po

def main(sqrl: ParametersArgs) -> None:
    select_options = [
        po.SelectParameterOption("s01", "Option 1"),
        po.SelectParameterOption("s02", "Option 2", is_default=True)
    ]
    p.SingleSelectParameter.CreateWithOptions("single_param", "Single Select Parameter", select_options)
```

### MultiSelectParameter Example

For [MultiSelectParameter], you can use additional options:

```python
def main(sqrl: ParametersArgs) -> None:
    select_options = [
        ...
    ]
    p.MultiSelectParameter.CreateWithOptions(
        "multi_param", "Multi Select Parameter", 
        select_options,
        show_select_all=True,       # Show a "select all" option
        order_matters=False,        # Whether selection order matters
        none_is_all=True            # Whether having no options selected means all options are selected
    )
```

### Custom Fields

[SelectParameterOption] can specify custom fields as optional arguments:

```python
group_by_options = [
    po.SelectParameterOption("g1", "None"),
    po.SelectParameterOption("g2", "Category", columns=["category"]),
    po.SelectParameterOption("g3", "Subcategory", columns=["category", "subcat"], aliases=["category", "subcategory"]),
]
```

You can access these custom fields in your [context.py] file:

```python
# Get the 'aliases' field or use 'columns' as backup, or empty list as default
aliases = prms["group_by"].get_selected("aliases", default_field="columns", default=[])
```

## Non-Selection Parameters

Non-selection parameters have simpler usage patterns.

### DateParameter Example

```python
## parameters.py ##

# Simple date parameter with default date
p.DateParameter.CreateSimple(
    "my_date", "Select Date", 
    "2024-01-01",                     # Default date
    min_date="2023-01-01",            # Earliest selectable date
    max_date="2024-12-31",            # Latest selectable date
    date_format="%Y-%m-%d"            # Date format
)

## context.py ##

# Access the selected date
date_str = prms["my_date"].get_selected_date()
# Or with quotes for SQL
quoted_date = prms["my_date"].get_selected_date_quoted()
```

### DateRangeParameter Example

```python
## parameters.py ##

# Date range with start and end dates
p.DateRangeParameter.CreateSimple(
    "date_range", "Date Range",
    "2024-01-01",                     # Default start date
    "2024-03-31",                     # Default end date
    min_date="2023-01-01",            # Earliest selectable date
    max_date="2024-12-31"             # Latest selectable date
)

## context.py ##

# Access the selected dates
start_date = prms["date_range"].get_selected_start_date()
end_date = prms["date_range"].get_selected_end_date()
```

### NumberParameter Example

```python
## parameters.py ##

# Number parameter with min, max and increment
p.NumberParameter.CreateSimple(
    "my_number", "Select Number",
    min_value=0,                      # Minimum value
    max_value=100,                    # Maximum value
    increment=5,                      # Step size
    default_value=50                  # Default value
)

## context.py ##

# Access the selected number
value = prms["my_number"].get_selected_value()
```

### NumberRangeParameter Example

```python
## parameters.py ##

# Number range with lower and upper values
p.NumberRangeParameter.CreateSimple(
    "number_range", "Number Range",
    min_value=0,                       # Minimum value
    max_value=100,                     # Maximum value
    increment=5,                       # Step size
    default_lower_value=25,            # Default lower value
    default_upper_value=75             # Default upper value
)

## context.py ##

# Access the selected values
lower = prms["number_range"].get_selected_lower_value()
upper = prms["number_range"].get_selected_upper_value()
```

### TextParameter Example

[TextParameter] allows users to input text with various formats:

```python
# Simple text input
p.TextParameter.CreateSimple(
    "search_text", "Search", input_type="text", default_text="",
)
```

Available input types include: "text", "textarea", "number", "color", "date", "datetime-local", "month", "time", and "password".

To access the entered text safely in the [context.py] file:

```python
# Get the text value
text_value = prms["search_text"].get_entered_text()
sqrl.set_placeholder("search", text_value)
```

Using "set_placeholder" instead of using a context variable is a mechanism for preventing SQL injection for free-form text inputs. See the [Avoiding SQL Injection] page for details on using placeholders in data models.

## Creating Parameters from Data Sources

You can create parameters from database tables or queries:

```python
from squirrels import ParametersArgs, parameters as p, data_sources as d

def main(sqrl: ParametersArgs) -> None:

    # Single-select parameter from a lookup table
    select_ds = d.SelectDataSource(
        "lookup_table",                   # Table or query
        "id_column",                      # Column for option IDs
        "label_column",                   # Column for option labels
        is_default_col="default_flag",    # Column for default selection
        order_by_col="sort_order",        # Column for ordering options
        custom_cols={"value": "value_col"}  # Map of custom fields to columns
    )
    p.SingleSelectParameter.CreateFromSource("param_name", "Parameter Label", select_ds)

    # Date parameter from database
    date_ds = d.DateDataSource(
        "date_lookup", 
        "default_date_col",
        min_date_col="min_date_col",      # Column for minimum date
        max_date_col="max_date_col",      # Column for maximum date
        date_format="%Y-%m-%d"            # Date format
    )
    p.DateParameter.CreateFromSource("date_param", "Date Parameter", date_ds)
```

This example shows how to use the [SelectDataSource] and [DateDataSource] classes. Other data sources include:
- [DateRangeDataSource]
- [NumberDataSource]
- [NumberRangeDataSource]
- [TextDataSource]

## Dependent Parameters

Squirrels supports cascading parameters, where the selection of a "parent parameter" affects the available options in a "child parameter".

To create this dependency:
1. Use the **parent_name** argument in the child parameter's factory method
2. Specify **parent_option_ids** in each child parameter option to define which parent selections make it available

### Selection Parameter Example

```python
from squirrels import ParametersArgs, parameters as p, parameter_options as po

def main(sqrl: ParametersArgs) -> None:

    # Parent parameter
    parent_options = [
        po.SelectParameterOption("pr01", "Option 1"),
        po.SelectParameterOption("pr02", "Option 2")
    ]
    p.SingleSelectParameter.CreateSimple("parent_param", "Parent Parameter", parent_options)

    # Child parameter with dependencies
    child_options = [
        po.SelectParameterOption("ch01", "Child Option 1", parent_option_ids=["pr01"]),
        po.SelectParameterOption("ch02", "Child Option 2", parent_option_ids=["pr02"]),
        po.SelectParameterOption("ch03", "Child Option 3", parent_option_ids=["pr01", "pr02"])
    ]
    p.MultiSelectParameter.CreateWithOptions(
        "child_param", "Child Parameter", 
        child_options, 
        parent_name="parent_param"
    )
```

In this example, only child options 1 and 3 are available when parent option 1 is selected. And only child options 2 and 3 are available when parent option 2 is selected.

### Non-Selection Parameter Example

You can also create dependent non-selection parameters. This example shows a DateParameter that changes its default date based on the parent parameter selection:

```python
from squirrels import ParametersArgs, parameters as p, parameter_options as po

def main(sqrl: ParametersArgs) -> None:

    # Parent parameter (same as above)
    parent_options = [
        po.SelectParameterOption("pr01", "Q1 Report"),
        po.SelectParameterOption("pr02", "Q2 Report")
    ]
    p.SingleSelectParameter.CreateSimple("report_type", "Report Type", parent_options)

    # Child date parameter with dependencies
    date_options = [
        # For Q1 Report, default to March 31
        po.DateParameterOption(
            "2024-03-31", min_date="2024-01-01", max_date="2024-03-31",
            parent_option_ids=["pr01"]
        ),
        
        # For Q2 Report, default to June 30
        po.DateParameterOption(
            "2024-06-30", min_date="2024-04-01", max_date="2024-06-30",
            parent_option_ids=["pr02"]
        )
    ]

    p.DateParameter.CreateWithOptions(
        "as_of_date", "As of Date", date_options,
        description="The date to run the report for",
        parent_name="report_type"
    )
```

In this example:
- When "Q1 Report" is selected, the date parameter defaults to March 31, 2024, with date selection limited to Q1.
- When "Q2 Report" is selected, the date parameter defaults to June 30, 2024, with date selection limited to Q2.

With database sources, use the **parent_id_col** to specify which column contains the parent option IDs.

### Dependency Rules

1. Only selection parameters can be parent parameters
2. Only single-select parameters can be parents of non-selection parameters
3. For non-selection parameters, each parent option must be associated with **at most one** child option
4. Parameters can have at most one parent parameter

## User-Based Parameter Options

Parameters can also be cascaded by user attributes of the authorized user:

```python
from squirrels import ParametersArgs, parameters as p, parameter_options as po

def main(sqrl: ParametersArgs) -> None:

    # User attribute to filter options by
    user_attribute = "department"

    options = [
        # Option that's only available to the "finance" user group
        po.SelectParameterOption("option1", "Finance Option", user_groups=["finance"]),
        ...
    ]

    # Parameter with options that depend on user group
    p.SingleSelectParameter.CreateWithOptions(
        "my_param", 
        "Parameter With User-Based Options", 
        options,
        user_attribute=user_attribute 
    )
```

With database sources, use the **user_group_col** to specify which column contains the user group values.

## Configuring Parameters in squirrels.yml

Parameters can also be configured in the "parameters" section of [squirrels.yml] instead of using `pyconfigs/parameters.py`. However, this approach is not recommended because it is an easier experience to use code suggestions by the Python code editor for which widget parameters and factory methods take which arguments.

The "parameters" section of [squirrels.yml] is a list of objects, each with the following fields:

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `type` | string | Yes | Parameter type (e.g., `SingleSelectParameter`) |
| `factory` | string | Yes | Factory method to create the parameter |
| `arguments` | object | Yes | Arguments for the factory method of the parameter type |

So for example, the following parameter configuration in Python:

```python
select_options = [
    po.SelectParameterOption("s01", "Option 1"),
    po.SelectParameterOption("s02", "Option 2", is_default=True)
]
p.SingleSelectParameter.CreateSimple("param_name", "Parameter Label", select_options)
```

Would be represented in [squirrels.yml] as:

```yaml
parameters:
- type: SingleSelectParameter
  factory: CreateSimple
  arguments:
    name: param_name
    label: Parameter Label
    options:
    - id: s01
      label: Option 1
    - id: s02
      label: Option 2
      is_default: true
```


[squirrels.yml]: ./squirrels-yml
[context.py]: ./context
[sqrl run]: ../../references/cli/run
[Avoiding SQL Injection]: ../guides/sql-injection
[SingleSelectParameter]: ../../tba
[MultiSelectParameter]: ../../tba
[DateParameter]: ../../tba
[DateRangeParameter]: ../../tba
[NumberParameter]: ../../tba
[NumberRangeParameter]: ../../tba
[TextParameter]: ../../tba
[SelectParameterOption]: ../../tba
[DateParameterOption]: ../../tba
[SelectDataSource]: ../../tba
[DateDataSource]: ../../tba
[DateRangeDataSource]: ../../tba
[NumberDataSource]: ../../tba
[NumberRangeDataSource]: ../../tba
[TextDataSource]: ../../tba
