# Datasets and Dashboards

The Datasets and Dashboards APIs provide access to the user-facing data and visualizations defined in the project. These endpoints allow you to retrieve parameter options and results for specific datasets and dashboards.

## Get Dataset Parameters 🔒

Get the available parameter options for a specific dataset. Parameter selections may cascade, meaning the selection of one parameter may affect the available options for other parameters.

**Endpoint:** `GET /api/squirrels-v0/project/{name}/{version}/datasets/{dataset}/parameters`

### Path Parameters

Each dataset configured in the project has one of these endpoints defined. Each of these endpoints may take a different set of query parameters.

### Query Parameters

Any parameter name that is available for the dataset can be used as a query parameter to filter the options of other parameters.

See [Working with Parameters] for more details.

### Response

**Success Response (200 OK)**

```json
{
    "parameters": [
        {
            "widget_type": "single_select",
            "name": "region",
            "label": "Region",
            "description": "Geographic region to filter by",
            "options": [
                {
                    "id": "north",
                    "label": "North"
                },
                {
                    "id": "south",
                    "label": "South"
                }
            ],
            "trigger_refresh": true,
            "selected_id": "north"
        }
    ]
}
```

**Notes**:
- If a parameter has `trigger_refresh` as true, provide the parameter selection to this endpoint whenever it changes to refresh the parameter options of dependent parameters

### POST Method (Alternative)

You can also use POST method to submit parameter selections in the request body instead of query parameters:

**Endpoint:** `POST /api/squirrels-v0/project/{name}/{version}/datasets/{dataset}/parameters`

### Request

**Content-Type:** `application/json`

```json
{
    "region": "north"
}
```

The response format is the same as the GET method.

## Get Dataset Results 🔒

Get the results of a dataset with specified parameter selections.

**Endpoint:** `GET /api/squirrels-v0/project/{name}/{version}/datasets/{dataset}/results`

### Path Parameters

Each dataset configured in the project has one of these endpoints defined. Each of these endpoints may take a different set of query parameters.

### Query Parameters

Any parameter name that is available for the dataset can be used as a query parameter to filter the results.

In addition to widget parameters and `x_verify_params`, the following built-in parameters are available:

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| x_orientation | string | "records" | How to structure the response. Options: "records" (array of objects), "rows" (array of arrays), "columns" (object of arrays) |
| x_select | array | [] | Array of column names to include in the result (empty means all columns) |
| x_limit | integer | 1000 | Maximum number of rows to return |
| x_offset | integer | 0 | Number of rows to skip |

### Response

**Success Response (200 OK)**

```json
{
    "schema": {
        "fields": [
            {
                "name": "region",
                "type": "string",
                "description": "Geographic region",
                "category": "dimension"
            },
            {
                "name": "sales",
                "type": "integer",
                "description": "Total sales amount",
                "category": "measure"
            }
        ]
    },
    "total_num_rows": 100,
    "data_details": {
        "num_rows": 10,
        "orientation": "records"
    },
    "data": [
        {
            "region": "North",
            "sales": 1234
        },
        {
            "region": "South",
            "sales": 5678
        }
    ]
}
```

**Notes**:
- The `schema.fields` array describes each column in the result
- The `total_num_rows` is the total number of rows in the dataset before applying limit/offset
- The `data_details.num_rows` is the number of rows returned in this response
- The `data` format depends on the `x_orientation` parameter:
  - "records" (default): An array of objects, each representing a row
  - "rows": An array of arrays, each representing a row's values
  - "columns": An object with column names as keys and arrays of values

### POST Method (Alternative)

You can also use POST method to submit parameter selections in the request body instead of query parameters:

**Endpoint:** `POST /api/squirrels-v0/project/{name}/{version}/datasets/{dataset}/results`

### Request

**Content-Type:** `application/json`

```json
{
    "region": "north",
    "x_orientation": "records",
    "x_limit": 10
}
```

The response format is the same as the GET method.

## Get Dashboard Parameters 🔒

Get the available parameter options for a specific dashboard. Parameter selections may cascade, meaning the selection of one parameter may affect the available options for other parameters.

**Endpoint:** `GET /api/squirrels-v0/project/{name}/{version}/dashboards/{dashboard}/parameters`

#### Path Parameters

Each dashboard configured in the project has one of these endpoints defined. Each of these endpoints may take a different set of query parameters.

### Query Parameters

Any parameter name that is available for the dashboard can be used as a query parameter to filter the options of other parameters.

See [Working with Parameters] for more details.

### Response

**Success Response (200 OK)**

The response format is identical to the dataset parameters endpoint.

### POST Method (Alternative)

You can also use POST method to submit parameter selections in the request body instead of query parameters:

**Endpoint:** `POST /api/squirrels-v0/project/{name}/{version}/dashboards/{dashboard}/parameters`

### Request

**Content-Type:** `application/json`

```json
{
    "date_range": ["2024-01-01", "2024-01-31"]
}
```

The response format is the same as the GET method.

## Get Dashboard Results 🔒

Get the rendered dashboard with specified parameter selections.

**Endpoint:** `GET /api/squirrels-v0/project/{name}/{version}/dashboards/{dashboard}/results`

### Path Parameters

Each dashboard configured in the project has one of these endpoints defined. Each of these endpoints may take a different set of query parameters.

### Query Parameters

Any parameter name that is available for the dashboard can be used as a query parameter to filter the results.

### Response

**Success Response (200 OK)**

The response format depends on the dashboard's configured format:

1. For HTML dashboards:
   - **Content-Type:** `text/html`
   - Response body contains the HTML content of the dashboard

2. For PNG dashboards:
   - **Content-Type:** `image/png`
   - Response body contains the PNG image of the dashboard

### POST Method (Alternative)

You can also use POST method to submit parameter selections in the request body instead of query parameters:

**Endpoint:** `POST /api/squirrels-v0/project/{name}/{version}/dashboards/{dashboard}/results`

### Request

**Content-Type:** `application/json`

```json
{
    "date_range": ["2024-01-01", "2024-01-31"],
    "category": ["electronics", "books"]
}
```

The response format is the same as the GET method, depending on the dashboard type.


[Working with Parameters]: ./parameters