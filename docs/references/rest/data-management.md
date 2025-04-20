# Data Management

The Data Management APIs provide functionality to manage and update the data components of the project, including building and updating the virtual data environment. Endpoints marked with 🔒 require admin privileges to use.

## Build Project 🔒

Build or update the virtual data environment for the project.

**Endpoint:** `POST /api/squirrels-v0/project/{name}/{version}/build`

### Response

**Success Response (200 OK)**

Empty response body on success.

**Error Responses**
- `403 Forbidden` - If the authenticated user does not have permission to build the virtual data environment
- `400 Bad Request` - If a concurrent build process is already running

**Notes**:
- This endpoint will create or update the virtual data environment based on the project's configuration
- If a concurrent build process is already running, the request will be rejected
- The build process includes:
  - Creating or updating the DuckDB virtual data environment
  - Building all static data models defined in the project
  - Staging the changes if the virtual data environment is in use

## Query Models 🔒

Execute a custom SQL query against the data models in the project.

**Endpoint:** `POST /api/squirrels-v0/project/{name}/{version}/query-models`

### Query Parameters

Any parameter name can be used as a query parameter to filter the options of other parameters. See [Working with Parameters] for more details on how to pass parameter selections to this endpoint.

In addition to widget parameters and `x_verify_params`, the following built-in parameters are available:

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| x_sql_query | string | | Required. The SQL query to execute |
| x_orientation | string | "records" | How to structure the response. Options: "records" (array of objects), "rows" (array of arrays), "columns" (object of arrays) |
| x_limit | integer | 1000 | Maximum number of rows to return |
| x_offset | integer | 0 | Number of rows to skip |

### Response

**Success Response (200 OK)**

```json
{
    "schema": {
        "fields": [
            {
                "name": "column_name",
                "type": "string",
                "description": "Column description",
                "category": "dimension",
                "condition": "Column condition"
            }
        ]
    },
    "data": [
        {
            "column_name": "value"
        }
    ]
}
```

**Error Responses**
- `400 Bad Request` - If the SQL query is invalid
- `403 Forbidden` - If the authenticated user does not have permission to query the models

### POST Method (Alternative)

You can also use POST method to submit parameter selections in the request body instead of query parameters:

**Endpoint:** `POST /api/squirrels-v0/project/{name}/{version}/query-models`

### Request

**Content-Type:** `application/json`

```json
{
    "sql_query": "SELECT * FROM my_model WHERE column = 'value'",
    "parameters": {
        "param_name": "param_value"
    }
}
```


[Working with Parameters]: ./parameters