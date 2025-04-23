# Connections

Database connections in Squirrels projects can be configured in two ways:
1. Through the `connections` section in `squirrels.yml`
2. Through the `connections.py` file in the `pyconfigs` directory

## Connection Types

Squirrels supports three types of database connections:

| Type | Description |
|------|-------------|
| `sqlalchemy` | Uses [SQLAlchemy](https://www.sqlalchemy.org/) for database operations |
| `connectorx` | Uses [ConnectorX](https://sfu-db.github.io/connector-x/intro.html) for high-performance data loading |
| `adbc` | Uses [ADBC](https://arrow.apache.org/adbc/current/index.html) (Arrow Database Connectivity) |

## Configuration in squirrels.yml

You can configure database connections in the `connections` section of `squirrels.yml`:

```yaml
connections:
  - name: default
    label: SQLite Expenses Database
    type: sqlalchemy
    uri: sqlite:///{project_path}/path/to/database.db
    sa_create_engine_args: {}  # optional
```

You can use environment variables for the connection URIs, especially if it contains sensitive information or is different for different environments:

```yaml
connections:
  - name: default
    type: sqlalchemy
    uri: {{ env_vars.DATABASE_URI }}
```

The `{project_path}` variable is automatically replaced with the path to the project root. It can be included in the environment variable value as well.

### Connection Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `name` | string | Yes | Unique identifier for the connection |
| `label` | string | No | Display name for the connection |
| `type` | string | Yes | One of: `sqlalchemy`, `connectorx`, or `adbc` |
| `uri` | string | Yes | Database connection URI |
| `sa_create_engine_args` | object | No | Additional arguments for SQLAlchemy engine creation |

### URI Format Examples

#### SQLite
- SQLAlchemy: `sqlite:///relative/path/to/database.db`
- ConnectorX/ADBC: `sqlite://relative/path/to/database.db`

#### PostgreSQL
- All Types: `postgresql://username:password@host:port/database`

Check out documentation for the specific connection type for supported databases and URI formats:

- [SQLAlchemy](https://docs.sqlalchemy.org/en/latest/core/engines.html#database-urls)
- [ConnectorX](https://sfu-db.github.io/connector-x/databases.html)
- ADBC uses the same URI format as ConnectorX but with different [supported databases](https://arrow.apache.org/adbc/current/driver/status.html)

## Configuration in connections.py

For more complex connection setups, you can use Python code in `pyconfigs/connections.py`. The file should define a `main` function that takes two parameters. The following is an example:

```python
from typing import Any
from squirrels import ConnectionsArgs, ConnectionProperties, ConnectionTypeEnum

def main(connections: dict[str, ConnectionProperties | Any], sqrl: ConnectionsArgs) -> None:
    """
    Define database connections by adding them to the "connections" dictionary.
    
    Args:
        connections: Dictionary to add connections to
        sqrl: Object containing project variables and environment variables
    """
    # Get connection string from environment variable
    conn_str: str = sqrl.env_vars["SQLITE_URI"].format(project_path=sqrl.project_path)
    
    # Add connection using ConnectionProperties
    connections["default"] = ConnectionProperties(
        label="SQLite Expenses Database",
        type=ConnectionTypeEnum.SQLALCHEMY,
        uri=conn_str
    )
```

The `main` function receives:
- `connections`: Dictionary to add connections to, usually as ConnectionProperties objects for database connections
- `sqrl`: Object containing:
  - `project_path`: Path to the project root
  - `env_vars`: Dictionary of environment variables
  - `project_variables`: Dictionary of project variables from `squirrels.yml`

Since `sqrl.env_vars` is a dictionary containing the raw value of environment variables, you must substitute the `{project_path}` placeholder in the URI yourself if it comes from an environment variable.

:::tip

You can also cache values other than ConnectionProperties into the `connections` dictionary at server startup time. For example, you can read a machine learning model from a pickle file and cache it into the `connections` dictionary as a scikit-learn model. Then, you can use the machine learning model in a Python data model to make inferences.

:::

## Default Connection

The default connection is specified by the `SQRL_CONNECTIONS__DEFAULT_NAME_USED` environment variable (defaults to `default`). This connection is used for:
- Source models that don't specify a connection
- Dbview models that don't specify a connection

## Notes

- Connection names must be unique
- Specifying connections in both squirrels.yml and connections.py is allowed. If a connection name is specified in both places, the value in connections.py takes precedence
- The `sqlalchemy` type supports SQL parameter placeholders in queries
- The `connectorx` and `adbc` types do not support SQL parameter placeholders
- Connection URIs should not be committed to version control if they contain sensitive information
- Use environment variables for sensitive connection details
