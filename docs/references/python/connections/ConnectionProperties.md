# ConnectionProperties (class)

ConnectionProperties objects hold the properties of a database connection in the Squirrels framework.

The class can be imported from the `squirrels.connections` or `squirrels` module.

## Constructor

```python
def __init__(
    self, uri: str, *, label: str = None, 
    type: squirrels.ConnectionTypeEnum = squirrels.ConnectionTypeEnum.SQLALCHEMY, 
    sa_create_engine_args: dict = {}
) -> None:
```

Creates a ConnectionProperties object.

**Keyword Arguments:**

The only required keyword argument to the constructor is:
- `uri`

In addition, the constructor accepts the following optional keyword arguments:
- `label` - Default is `None`
- `type` - Default is `ConnectionTypeEnum.SQLALCHEMY`
- `sa_create_engine_args` - Default is an empty dictionary

All of the above arguments are also attributes of the class. See the Attributes section below for more information on each.

## Attributes

Attributes of ConnectionProperties that can be accessed.

### label

Human-readable label for the connection. If `None`, the connection name is used as the label.

**Type:** `str | None`

### type

The type of connection as an instance of [ConnectionTypeEnum]. Default is `ConnectionTypeEnum.SQLALCHEMY`.

**Type:** `squirrels.ConnectionTypeEnum`

### uri

The URI for the database connection.

**Type:** `str`

### sa_create_engine_args

Additional arguments to pass to SQLAlchemy's `create_engine` function if the connection type is `SQLALCHEMY`. Default is an empty dictionary.

**Type:** `dict[str, Any]`

### engine

A cached property that creates and returns a SQLAlchemy engine instance if the connection type is `SQLALCHEMY`. Raises a `ValueError` for other connection types.

**Type:** `sqlalchemy.engine.Engine`

### dialect

A cached property that determines the database dialect from the connection. Returns the detected database dialect (e.g., 'sqlite', 'postgres', 'mysql') as a string.

**Type:** `str`

### attach_uri_for_duckdb

A cached property that generates a connection string suitable for DuckDB attachments. Returns a formatted connection string for DuckDB or `None` if the dialect is not supported.

**Type:** `str | None`

## Example

```python
from squirrels import connections as cn

# Create a SQLite connection
connection = cn.ConnectionProperties(
    label="my_database",
    type=cn.ConnectionTypeEnum.SQLALCHEMY,
    uri="sqlite:///path/to/database.db"
)

# Access the engine
engine = connection.engine

# Get the dialect
dialect = connection.dialect
```


[ConnectionTypeEnum]: ./ConnectionTypeEnum