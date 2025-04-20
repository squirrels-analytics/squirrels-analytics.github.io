# REST APIs

All endpoints start with `/api/squirrels-v0/project/{name}/{version}` where `{name}` and `{version}` are specified in the [squirrels.yml] file of the Squirrels project (under "project_variables").
- The `{name}` is the name of the Squirrels project with underscores replaced with hyphens.
- The `{version}` is "v" plus the major version number of the Squirrels project.

For example, if the project_variables section of the [squirrels.yml] file is as follows:

```yaml
project_variables:
  name: my_project
  major_version: 1
```

Then all endpoints would start with `/api/squirrels-v1/project/my-project/v1`.

The following are reference pages for REST APIs organized by category, with the endpoints provided as sub-sections:
- [Authentication](./rest/authentication)
- [User Management](./rest/user-management)
- [Project Metadata](./rest/project-metadata)
- [Data Management](./rest/data-management)
- [Datasets / Dashboards](./rest/datasets-dashboards)

Sub-sections marked with 🔒 include the option to pass an access token in the Authorization header to the endpoint:

```
Authorization: Bearer <access_token>
```

Access tokens can be created using one of the following endpoints:
- [Login for Access Token](./rest/authentication#login-for-access-token)
- [Create Token](./rest/authentication#create-token-)

:::info

Some of the API endpoints are used to retrieve metadata of widget parameters. After users provide their parameter selections, the selected values can be passed to other endpoints as query parameters or in the request body. See the [Working with Parameters](./rest/parameters) page for more information and examples.

:::


[squirrels.yml]: ../docs/concepts/squirrels-yml
