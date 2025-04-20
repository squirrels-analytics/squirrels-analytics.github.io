# Working with Parameters

The response for API endpoints that end in `/parameters` (and the "Get Data Catalog" endpoint) includes a list of widget parameters objects. The fields of the objects depend on the value of the `widget_type` field. The following is an example response that includes all the possible widget types with mock values for the fields:

```json
{
  "parameters": [
    {
      "widget_type": "disabled",
      "name": "my_unique_param_name1",
      "label": "My Parameter",
      "description": ""
    },
    {
      "widget_type": "single_select",
      "name": "my_unique_param_name2",
      "label": "My Parameter",
      "description": "",
      "options": [
        {
          "id": "my_option_id",
          "label": "My Option"
        }
      ],
      "trigger_refresh": true,
      "selected_id": "my_option_id"
    },
    {
      "widget_type": "multi_select",
      "name": "my_unique_param_name3",
      "label": "My Parameter",
      "description": "",
      "options": [
        {
          "id": "my_option_id",
          "label": "My Option"
        }
      ],
      "trigger_refresh": true,
      "show_select_all": true,
      "order_matters": true,
      "selected_ids": [
        "my_option_id"
      ]
    },
    {
      "widget_type": "date",
      "name": "my_unique_param_name4",
      "label": "My Parameter",
      "description": "",
      "min_date": "2023-01-01",
      "max_date": "2023-12-31",
      "selected_date": "2023-01-01"
    },
    {
      "widget_type": "date_range",
      "name": "my_unique_param_name5",
      "label": "My Parameter",
      "description": "",
      "min_date": "2023-01-01",
      "max_date": "2023-12-31",
      "selected_start_date": "2023-01-01",
      "selected_end_date": "2023-12-31"
    },
    {
      "widget_type": "number",
      "name": "my_unique_param_name6",
      "label": "My Parameter",
      "description": "",
      "min_value": 0,
      "max_value": 10,
      "increment": 1,
      "selected_value": 2
    },
    {
      "widget_type": "number_range",
      "name": "my_unique_param_name7",
      "label": "My Parameter",
      "description": "",
      "min_value": 0,
      "max_value": 10,
      "increment": 1,
      "selected_lower_value": 2,
      "selected_upper_value": 8
    },
    {
      "widget_type": "text",
      "name": "my_unique_param_name8",
      "label": "My Parameter",
      "description": "",
      "entered_text": "sushi",
      "input_type": "text"
    }
  ]
}
```

These objects can be used to create custom UI widgets for the end user to interact with. You can then pass the selected values to other endpoints such as [Querying Models](../../tba), [Getting Dataset Results](../../tba), or [Getting Dashboards](../../tba).

Parameter selections can even be passed to the `/parameters` endpoint to update available parameter options based on the selected values of parent parameters with `trigger_refresh: true`.

## How to Pass Parameter Values

Usually, endpoints that accept parameter selections can either accept them as query parameters of a GET request or in the request body of a POST request. The name of the query parameter, or the key of the JSON object in the request body, is the name of the parameter.

In addition, all endpoints that accept widget parameters include the following built-in parameters as well:
- `x_verify_params`: If set to `true`, the endpoint will verify that all parameter names are valid.

The way that the parameter values are passed depends on the `widget_type` of the parameter. Do not pass any parameter values for parameters with `widget_type: "disabled"`.

### Single Select

For single select parameters (i.e., `widget_type: "single_select"`), simply pass the `id` of the selected option as a string.

For example, if the parameter is called `my_single_select` and the selected option has an id of `id0`, the selected value can be passed in a GET request as follows:

```
GET /endpoint?my_single_select=id0
```

Or in a POST request as follows:

```json
{
  "my_single_select": "id0"
}
```

### Multi Select

For multi select parameters (i.e., `widget_type: "multi_select"`), pass an array of `id`s of the selected options as strings.

For example, if the parameter is called `my_multi_select` and the selected options have ids of `id0` and `id1`, the selected values can be passed in a GET request as follows:

```
GET /endpoint?my_multi_select=id0&my_multi_select=id1
```

Or in a POST request as follows:

```json
{
  "my_multi_select": ["id0", "id1"]
}
```

### Date

For date parameters, pass the selected date in the format `YYYY-MM-DD`.

For example, if the parameter is called `my_date` and the selected date is `2023-01-01`, the selected value can be passed in a GET request as follows:

```
GET /endpoint?my_date=2023-01-01
```

Or in a POST request as follows:

```json
{
  "my_date": "2023-01-01"
}
```

### Date Range

For date range parameters, pass an array of the selected start and end dates in the format `YYYY-MM-DD`.

For example, if the parameter is called `my_date_range` and the selected dates are `2023-01-01` and `2023-07-15`, the selected values can be passed in a GET request as follows:

```
GET /endpoint?my_date_range=2023-01-01&my_date_range=2023-07-15
```

Or in a POST request as follows:

```json
{
  "my_date_range": ["2023-01-01", "2023-07-15"]
}
```

### Number

For number parameters (i.e., `widget_type: "number"`), pass the selected number as a string.

For example, if the parameter is called `my_number` and the selected number is `10`, the selected value can be passed in a GET request as follows:

```
GET /endpoint?my_number=10
```

Or in a POST request as follows:

```json
{
  "my_number": "10"
}
```

### Number Range

For number range parameters (i.e., `widget_type: "number_range"`), pass an array of the selected lower and upper numbers as strings.

For example, if the parameter is called `my_number_range` and the selected numbers are `2` and `8`, the selected values can be passed in a GET request as follows:

```
GET /endpoint?my_number_range=2&my_number_range=8
```

Or in a POST request as follows:

```json
{
  "my_number_range": ["2", "8"]
}
```

### Text

For text parameters (i.e., `widget_type: "text"`), pass the entered text as a string.

For example, if the parameter is called `my_text` and the entered text is `sushi`, the selected value can be passed in a GET request as follows:

```
GET /endpoint?my_text=sushi
```

Or in a POST request as follows:

```json
{
  "my_text": "sushi"
}
```

## How to Trigger a Refresh

Some single select or multi select parameters have a `trigger_refresh` field that can be set to `true`. When this field is set to `true`, the parameters should be refreshed when the user selects an option.

For example, suppose there is a multi select parameter called `countries` with the `trigger_refresh` field set to `true`, and there is another multi select parameter called `cities` that depends on the selected values of `countries`. The following request body would refresh the `cities` parameter when a new country is selected in the `countries` parameter:

```
GET /parameters?countries=usa&countries=canada
```

Or in a POST request as follows:

```json
{
  "countries": ["usa", "canada"]
}
```

The `/parameters` endpoint also comes with the following built-in parameters (in addition to `x_verify_params`):
- `x_parent_param`: The name of the parameter that triggered the refresh. Not needed if only one parameter is provided to the endpoint.

For examples, the following clarifies that `countries` triggered the refresh:

```
GET /parameters?x_parent_param=countries&countries=usa&countries=canada&another_param=123
```

The response will only include parameters that depend on `countries` (and the `countries` parameter itself with the selected values) instead of all parameters. This avoids overriding the user's selections in other parameters.

Note that this mechanism is also able to change the widget type of other parameters to (or from) `disabled`.
