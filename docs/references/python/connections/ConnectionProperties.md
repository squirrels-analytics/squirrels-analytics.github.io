# ConnectionProperties (class)

A class for holding the properties of a database connection in the Squirrels framework.

Can be imported from the module `squirrels.connections` or `squirrels`.

## Constructor

Creates a ConnectionProperties object.

**Keyword Arguments:**

The only required keyword argument to the constructor is:
- `uri`

In addition, the constructor accepts the following optional keyword arguments:
- `label`
- `type`
- `sa_create_engine_args`

All of the above arguments are also attributes of the class. See the Attributes section below for more information on each.

## Attributes

Attributes of ConnectionProperties that can be accessed.

### label

Optional label for the connection. Default is `None`.

### type

The type of connection as an instance of [ConnectionTypeEnum]. Default is `ConnectionTypeEnum.SQLALCHEMY`.

### uri

The URI for the database connection.

### sa_create_engine_args

Additional arguments to pass to SQLAlchemy's `create_engine` function if the connection type is `SQLALCHEMY`. Default is an empty dictionary.

### engine

A cached property that creates and returns a SQLAlchemy engine instance if the connection type is `SQLALCHEMY`. Raises a `ValueError` for other connection types.

### dialect

A cached property that determines the database dialect from the connection. Returns the detected database dialect (e.g., 'sqlite', 'postgres', 'mysql') as a string.

### attach_uri_for_duckdb

A cached property that generates a connection string suitable for DuckDB attachments. Returns a formatted connection string for DuckDB or `None` if the dialect is not supported.

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