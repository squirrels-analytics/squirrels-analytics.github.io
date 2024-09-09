---
sidebar_position: 1
---

# REST API Types

This page describes details of the REST API types in suplement of the Swagger / OpenAPI documentation found in the **/docs** path of any Squirrels project. Please check out the Swagger / OpenAPI documentation first if you haven't already.

When interacting with the APIs for a single Squirrels project as a client, a sample workflow may look like this:

1. Login with a username and password to retrieve an authorization token for subsequent API calls. This would use the **login API**.
2. Retrieve all datasets / dashboards you have access to for the project. This would use the **data catalog API**.
3. Pick a dataset / dashboard and retrieve its parameters. This would use the **parameters API**.
4. Gather parameter selections, and use them to retrieve the dataset / dashboard result. This would use the **dataset result API** or the **dashboard result API**.

Depending on the use case, not all API types have to be used. For instance, if you only care about public datasets / dashboards, the **login API** is not needed. Or you may have a front-end application that only uses one of the datasets (assuming that it always exists), so it may not use the **data catalog API**.

Further details of each API type are described in the sections below. All paths are prefixed with **/squirrels-v0**, and the `v0` here means "use the API interface corresponding to major version 0 of the squirrels library". All APIs return a JSON response, except the **dashboard result API** which can return various formats such as PNG data as bytes or HTML string. 

For example purposes, suppose we have a Squirrels project named `my_project`, its major version is 1, and it contains a dataset named `my_dataset` and a dashboard named `my_dashboard`.

## Project Level APIs

There is a single API path for the login API and datasets catalog API per Squirrels project (and major version).

### Login API

- Request type: **POST**
- Path: **/squirrels-v0/\{project_name\}/v\{major_version\}/token**
- Path Example: **/squirrels-v0/my-project/v1/token**

This API endpoint lets you retrieve an access token by authenticating with credentials. The "username" and "password" fields must be provided as form data to the request body.

If the username and password are correct, a 200 status code is returned, and the response is a JSON object with the following fields:
- **access_token**: An encoded JSON web token to use subsequent API requests.
- **token_type**: Currently only outputs "bearer" for Bearer token.
- **username**: The username authenticated with from the form data.
- **expiry_time**: The expiry time of the access token in `yyyy-MM-dd'T'hh:mm:ss.SSSSSS'+00:00'` format. The access token usually expires 30 minutes after creation unless specified otherwise in the Squirrels project [settings] for **auth.token.expire_minutes**.

This is an example of a JSON response with 200 status code:

```json
{
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImpvaG5kb2UiLCJpc19pbnRlcm5hbCI6dHJ1ZSwib3JnYW5pemF0aW9uIjoib3JnMSIsImV4cCI6MTcwODMwOTIzN30.z3XF7Vp48mITwZECxxjd1JLOCKIURw7CFvWVs7-_vPE",
    "token_type": "bearer",
    "username": "johndoe",
    "expiry_time": "2024-02-19T02:20:37.531776+00:00"
}
```

To use the access token for the other API endpoints, simply provide the request header:

`"Authorization": "Bearer <access_token>"`

If the username or password provided to the **Login API** are invalid, a 401 status code is returned with the following JSON response.

```json
{
    "detail": "Incorrect username or password"
}
```

### Data Catalog API

- Request type: **GET**
- Path: **/squirrels-v0/\{project_name\}/v\{major_version\}/datasets**
- Path Example: **/squirrels-v0/my-project/v1/datasets**

This API endpoint retrieves the list of datasets / dashboards that the user has access to. Only public datasets / dashboards are provided if the user is not authenticated.

This returns a JSON object with "datasets" and "dashboards" fields, both of which are lists of JSON objects with the following fields:

- **name**: The name of the dataset / dashboard (usually in snake case).
- **label**: The human-friendly display name for the dataset / dashboard.
- **description**: The description of the dataset / dashboard.
- **parameters_path**: The API path for the dataset's / dashboard's parameters API.
- **result_path**: The API path for the dataset's / dashboard's result API.

The JSON objects in the "dashboards" list have an additional field:

- **result_format**: The format of the dashboard's result API response (one of png, html, etc.).

Here is a sample JSON response:

```json
{
    "datasets": [
        {
            "name": "my_dataset",
            "label": "Dataset Example",
            "description": "This is an example dataset",
            "parameters_path": "/squirrels-v0/my-project/v1/dataset/my-dataset/parameters",
            "result_path": "/squirrels-v0/my-project/v1/dataset/my-dataset"
        }
    ],
    "dashboards": [
        {
            "name": "my_dashboard",
            "label": "Dashboard Example",
            "description": "This is an example dashboard",
            "parameters_path": "/squirrels-v0/my-project/v1/dashboard/my-dashboard/parameters",
            "result_path": "/squirrels-v0/my-project/v1/dashboard/my-dashboard",
            "result_format": "png"
        }
    ]
}
```

## Data Analytics APIs

Within a Squirrels project, each dataset / dashboard has a different API path for the parameters and the results. Both API types can either be a **GET** request that takes parameter selections through query parameters, or a **POST** request that takes parameters selections as a JSON in the request body.

The input format for the parameter selections depend on the parameter type. More details on identifying the parameter type for a parameter will be discussed soon in the "Parameters API" section. Below are the available parameter types and their input formats for parameter selections. Note that only string inputs are accepts for **GET** requests, while accepted inputs for **POST** requests include any valid JSON. The key for the parameter selection is the parameter name, and underscores can be replaced with dashes if desired.

- **single_select**: A string for the id of the selected option (ex. `id0`).
- **multi_select**: Either a comma delimited string of the selected options (ex. `id0,id1,id2`), a JSON list of strings (for **POST** requests only; ex. `["id0","id1","id2"]`), a string representation of the JSON list with escaped quotes, or multiple query parameters of the same parameter name (for **GET** requests only; ex. `param=id0&param=id1&param=id2`).
- **date**: A string with format "yyyy-MM-dd" (ex. `2024-01-01`).
- **date_range**: Two dates with format "yyyy-MM-dd" as a comma joined string (ex. `2024-01-01,2024-02-01`), a JSON list of strings (ex. `["2024-01-01","2024-02-01"]` for **POST** requests only), a string representation of JSON list with escaped quotes, or multiple query parameters of the same parameter name (ex. `param=2024-01-01&param=2024-02-01` for **GET** requests only).
- **number**: A number or string representing a valid decimal number (ex. `3` or `3.0`).
- **number_range**: Two decimal numbers as a comma joined string (ex. `1,10`), a JSON list of strings or numbers (for **POST** requests only; ex. `["1","10"]` or `[1,10]`), a string representation of the JSON list, or multiple query parameters of the same parameter name (for **GET** requests only; ex. `param=1&param=10`).
- **text**: A string for the entered text (ex. `sushi`).

Suppose we want to specify selected values for parameters named "my_single_select", "my_multi_select", and "my_date" with selected values `id0`, `id00,id02`, and `2024-01-01` respectively. The following are few examples of valid inputs (ignoring URL encoding):

Using query parameters for **GET** request:
- `?my_single_select=id0&my_date=2024-01-01&my_multi_select=id00,id02`
- `?my-single-select=id0&my-date=2024-01-01&my-multi-select=id00,id02` (Note that the underscore character is replaced with the hyphen character)
- `?my-single-select=id0&my-date=2024-01-01&my-multi-select=["id00","id02"]`
- `?my-single-select=id0&my-date=2024-01-01&my-multi-select=id00&my-multi-select=id02`

Using JSON request body for **POST** request:
- `{"my_single_select": "id0", "my_date": "2024-01-01", "my_multi_select": "id00,id02"}`
- `{"my_single_select": "id0", "my_date": "2024-01-01", "my_multi_select": ["id00", "id02"]}`
- `{"my_single_select": "id0", "my_date": "2024-01-01", "my_multi_select": "[\"id00\",\"id02\"]"}`

### Parameters API

- Request type: **GET** or **POST**
- Path: **/squirrels-v0/\{project_name\}/v\{major_version\}/dataset/\{dataset_name\}/parameters**
- Path Example: **/squirrels-v0/my-project/v1/dataset/my-dataset/parameters**

This API endpoint retrieves the widget parameters for a dataset. This endpoint can also be used to get updates for the children parameters when selections change for parent parameters (for instance, selecting a value for a "continent" parameter would change the available options for "country"). This is done by passing the value as a query parameter for **GET** requests or part of the request body for **POST** requests. Passing more than one parameter selection to this request is invalid.

The response is a JSON object with a "parameters" field whose value is a list of parameters as JSON objects. The fields to a parameter JSON object varies based on the parameter type. 

The following are the possible fields based on the parameter type (i.e. value of the **widget_type**).

For parameter type **"single_select"**:

- **widget_type**: The parameter type.
- **name**: The name of the parameter. Use this as the key when providing the API request parameters.
- **label**: The human-friendly display name for the parameter.
- **options**: A list of dropdown options as JSON objects containing **id** and **label** fields.
- **trigger_refresh**: A boolean that's set to true for parent parameters that require a new parameters API call when the selection changes.
- **selected_id**: The ID of the selected / default option.

For parameter type **"multi_select"**:

- **widget_type**: The parameter type.
- **name**: The name of the parameter. Use this as the key when providing the API request parameters.
- **label**: The human-friendly display name for the parameter.
- **options**: A list of dropdown options as JSON objects containing **id** and **label** fields.
- **trigger_refresh**: A boolean that's set to true for parent parameters that require a new parameters API call when the selection changes.
- **selected_ids**: A list of ids of the selected / default options.
- **show_select_all**: A boolean for whether there should be a toggle to select all options.
- **order_matters**: A boolean for whether the ordering of the input selections would affect the result of the dataset.

For parameter type **"date"**:

- **widget_type**: The parameter type.
- **name**: The name of the parameter. Use this as the key when providing the API request parameters.
- **label**: The human-friendly display name for the parameter.
- **selected_date**: A string in "yyyy-MM-dd" format for the selected / default date.

For parameter type **"date_range"**:

- **widget_type**: The parameter type.
- **name**: The name of the parameter. Use this as the key when providing the API request parameters.
- **label**: The human-friendly display name for the parameter.
- **selected_start_date**: A string in "yyyy-MM-dd" format for the selected / default start date.
- **selected_end_date**: A string in "yyyy-MM-dd" format for the selected / default end date.

For parameter type **"number"**:

- **widget_type**: The parameter type.
- **name**: The name of the parameter. Use this as the key when providing the API request parameters.
- **label**: The human-friendly display name for the parameter.
- **min_value**: A number for the lower bound of the selectable number.
- **max_value**: A number for the upper bound of the selectable number.
- **increment**: A number for the selectable increments between the lower bound and upper bound.
- **selected_value**: A number for the selected / default number.

For parameter type **"number_range"**:

- **widget_type**: The parameter type.
- **name**: The name of the parameter. Use this as the key when providing the API request parameters.
- **label**: The human-friendly display name for the parameter.
- **min_value**: A number for the lower bound of the selectable number.
- **max_value**: A number for the upper bound of the selectable number.
- **increment**: A number for the selectable increments between the lower bound and upper bound.
- **selected_lower_value**: A number for the selected / default lower number.
- **selected_upper_value**: A number for the selected / default upper number.

For parameter type **"text"**:

- **widget_type**: The parameter type.
- **name**: The name of the parameter. Use this as the key when providing the API request parameters.
- **label**: The human-friendly display name for the parameter.
- **entered_text**: A string for the default entered text.
- **input_type**: A string for the input type. Can be one of "text", "textarea", "number", "date", "datetime-local", "month", "time", "color", or "password".

The following is an example of a simple response with just one single select parameter.

```json
{
    "parameters": [
        {
            "widget_type": "single_select",
            "name": "group_by",
            "label": "Group By",
            "trigger_refresh": false,
            "options": [
                {
                    "id": "0",
                    "label": "Year"
                },
                {
                    "id": "1",
                    "label": "Month"
                }
            ],
            "selected_id": "0"
        }
    ]
}
```

For more details, check out the auto-generated API documentation for the parameters API at the /docs path.

### Dataset Result API

- Request type: **GET** or **POST**
- Path: **/squirrels-v0/\{project_name\}/v\{major_version\}/dataset/\{dataset_name\}**
- Path Example: **/squirrels-v0/my-project/v1/dataset/my-dataset**

This API endpoint retrieves the tabular result of the dataset given parameter selections as query parameters (for **GET** requests) or JSON request body (for **POST** requests).

The response is a JSON object with fields **schema** and **data**. The response format is partially inspired by the JSON output for pandas dataframes when running `df.to_json(orient="table")` in Python. Below are more details of the fields (including nested ones):

- **schema**: A JSON object with the following fields:
    - **fields**: A list of JSON objects containing the **name** and **type** for each of the columns in the result. The possible values of **type** are "string", "number", "integer", "boolean", and "datetime".
    - **dimensions**: A list of column names (as strings) that serve as the dimensions for the dataset
- **data**: A list of JSON objects where each object is a row of the tabular results. The keys and values of the object are column names (described in **fields**) and values of the row.

The following is an example of the JSON response:

```json
{
    "schema": {
        "fields": [
            {
                "name": "year",
                "type": "string"
            },
            {
                "name": "temperature_C",
                "type": "number"
            }
        ],
        "dimensions": ["year"]
    },
    "data": [
        {
            "year": "2012",
            "temperature_C": 15.3
        },
        {
            "year": "2013",
            "temperature_C": 16.1
        },
        {
            "year": "2014",
            "temperature_C": 17.0
        },
        {
            "year": "2015",
            "temperature_C": 17.4
        }
    ]
}
```

For more details, check out the auto-generated API documentation for the dataset API at the /docs path.

### Dashboard Result API

- Request type: **GET** or **POST**
- Path: **/squirrels-v0/\{project_name\}/v\{major_version\}/dashboard/\{dashboard_name\}**
- Path Example: **/squirrels-v0/my-project/v1/dashboard/my-dashboard**

This API endpoint retrieves the dashboard (as PNG or HTML format, specified through the data catalog API) given parameter selections as query parameters (for **GET** requests) or JSON request body (for **POST** requests).

For more details, check out the auto-generated API documentation for the dashboard API at the /docs path.


[settings]: ../topics/settings
