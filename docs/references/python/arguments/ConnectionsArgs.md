# ConnectionsArgs (class)

ConnectionsArgs is the class type of the "sqrl" argument for the main function of [connections.py], which runs at server startup time.

The class can be imported from the `squirrels.arguments` or `squirrels` module.

## Attributes

Attributes of ConnectionsArgs that can be accessed.

### project_path

The path to the project directory.

**Type:** `str`

### proj_vars

A dictionary to access a project variable defined in [squirrels.yml].

**Type:** `dict[str, Any]`

### env_vars

A dictionary of [environment variables].

**Type:** `dict[str, str]`


[connections.py]: ../../../docs/concepts/connections
[squirrels.yml]: ../../../docs/concepts/squirrels-yml
[environment variables]: ../../../docs/concepts/environment
