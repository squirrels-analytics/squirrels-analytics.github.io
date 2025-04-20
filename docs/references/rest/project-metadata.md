# Project Metadata

The Project Metadata APIs provide information about the project configuration, available datasets, dashboards, and other project-related metadata.

## Get Project Information

Get basic information about the project.

**Endpoint:** `GET /api/squirrels-v0/project/{name}/{version}`

### Response

**Success Response (200 OK)**

```json
{
    "name": "myproject",
    "version": "v1",
    "label": "My Project",
    "description": "My project description",
    "squirrels_version": "0.1.0"
}
```

## Get Data Catalog 🔒

Get a catalog of all available datasets and dashboards for the authenticated user.

**Endpoint:** `GET /api/squirrels-v0/project/{name}/{version}/data-catalog`

### Response

**Success Response (200 OK)**

```json
{
    "parameters": [
        {
            "widget_type": "single_select",
            "name": "my_unique_param_name",
            "label": "My Parameter",
            "description": "",
            "options": [
                {
                    "id": "my_option_id",
                    "label": "My Option"
                }
            ],
            "trigger_refresh": false,
            "selected_id": "my_option_id"
        },
    ],
    "datasets": [
        {
            "name": "dataset_name",
            "label": "Dataset Label",
            "description": "Dataset description",
            "schema": {
                "fields": [
                    {
                        "name": "mycol",
                        "type": "string",
                        "description": "My column description",
                        "category": "dimension",
                        "condition": "My condition"
                    }
                ]
            },
            "parameters": ["param1", "param2"],
            "parameters_path": "/api/squirrels-v0/project/{name}/{version}/datasets/dataset_name/parameters",
            "result_path": "/api/squirrels-v0/project/{name}/{version}/datasets/dataset_name/results"
        }
    ],
    "dashboards": [
        {
            "name": "dashboard_name",
            "label": "Dashboard Label",
            "description": "Dashboard description",
            "result_format": "html",
            "parameters": ["param1", "param2"],
            "parameters_path": "/api/squirrels-v0/project/{name}/{version}/dashboards/dashboard_name/parameters",
            "result_path": "/api/squirrels-v0/project/{name}/{version}/dashboards/dashboard_name/results"
        }
    ],
    "connections": [],
    "models": [],
    "lineage": []
}
```

**Notes**:
- For admin users, the response includes additional information about connections, data models, and data lineage
- The `parameters` section lists all available parameters that can be used with datasets and dashboards
- Each dataset and dashboard entry includes endpoint URLs for their parameters and results API endpoints
- See [Working with Parameters] for a full example of the "parameters" field in the response that includes all widget types

## Get Project Parameters 🔒

Get the available parameter options for the project. Parameter selections may cascade, meaning the selection of one parameter may affect the available options for other parameters.

**Endpoint:** `GET /api/squirrels-v0/project/{name}/{version}/parameters`

### Query Parameters

Any parameter name can be used as a query parameter to filter the options of other parameters. See [Working with Parameters] for more details on how to pass parameter selections to this endpoint.

### Response

**Success Response (200 OK)**

```json
{
    "parameters": [
        {
            "widget_type": "single_select",
            "name": "my_unique_param_name",
            "label": "My Parameter",
            "description": "",
            "options": [
                {
                    "id": "my_option_id",
                    "label": "My Option"
                }
            ],
            "trigger_refresh": false,
            "selected_id": "my_option_id"
        },
    ]
}
```

**Notes**:
- If a parameter has `trigger_refresh` as true, provide the parameter selection to this endpoint whenever it changes to refresh the parameter options of dependent parameters
- See [Working with Parameters] for a full example of the response that includes all widget types, and more details on triggering parameter refresh

### POST Method (Alternative)

You can also use POST method to submit parameter selections in the request body instead of query parameters:

**Endpoint:** `POST /api/squirrels-v0/project/{name}/{version}/parameters`

### Request

**Content-Type:** `application/json`

```json
{
    "param_name": "selected_value"
}
```

See [Working with Parameters] for more details on how to pass parameter selections to this endpoint.

The response format is the same as the GET method.


[Working with Parameters]: ./parameters