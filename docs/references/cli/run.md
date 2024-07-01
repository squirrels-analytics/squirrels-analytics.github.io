# sqrl run

The `sqrl run` command is activates the API server to interact with the datasets, such as retrieving their parameters and results.

The run command provides the following options (this can be found from `sqrl run -h`):

```bash
usage: sqrl run [-h] [--no-cache] [--host HOST] [--port PORT]

optional arguments:
  -h, --help   Show this help message and exit
  --no-cache   Do not cache any api results
  --host HOST  The host to run on
  --port PORT  The port to run on
```

The default host is `127.0.0.1` and the default port is `4465`. Behind the scenes, Squirrels run a FastAPI app. While running, you can access:
- http://127.0.0.1:4465 or http://localhost:4465 to interact with the Squirrels Testing UI
- http://127.0.0.1:4465/docs or http://localhost:4465/docs to see the auto-generated OpenAPI docs

There are additional paths that return JSON results. Assume you have a project named "my_proj" with a sample dataset named "my_ds". You can use the following REST APIs to retrieve the results:

- The Projects Catalog API
    - **Path**: GET **/squirrels-v0**
    - **Description**: Returns list of projects and list of major versions for each project. When running `sqrl run` locally in a single project, this only provides one project ("my_proj") and one major version. In the future, a platform may be provided for hosting Squirrels projects where the platform will come with a catalog API that lists all projects deployed within the account (with a similar API interface as this one).
- The Login API
    - **Path**: POST **/squirrels-v0/my-proj/v1/token**
    - **Description**: Given username and password, provides an auth token and expiry time if the credentials are valid.
- The Datasets Catalog API
    - **Path**: GET **/squirrels-v0/my-proj/v1/datasets**
    - **Description**: Given project name and major version in path, returns the list of datasets available. Only public datasets are shown if auth token is not provided.
- The Parameters API
    - **Path**: GET/POST **/squirrels-v0/my-proj/v1/dataset/my-ds/parameters**
    - **Description**: Provides the widget parameter properties for the dataset. Can provide selected value of a widget parameter (in query parameters if GET request or body if POST request) to show cascaded options of dependent parameters.
- The Dataset Result API
    - **Path**: GET/POST **/squirrels-v0/my-proj/v1/dataset/my-ds**
    - **Description**: Provides the tabular results of the dataset. Selected values of widget parameters can be provided (through query parameters if GET request or body if POST request).

More details on these API endpoints can be found at [REST API Types](../../docs/frontend/rest-api).

To shut down the API server, press Ctrl + C.
