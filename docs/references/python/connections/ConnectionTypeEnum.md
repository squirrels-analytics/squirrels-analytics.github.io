# ConnectionTypeEnum (enum)

An enum that defines the types of database connections supported by the Squirrels framework.

```python
class ConnectionTypeEnum(Enum):
    SQLALCHEMY = "sqlalchemy"
    CONNECTORX = "connectorx"
    ADBC = "adbc" # Arrow Database Connectivity
```

This enum can be imported from the `squirrels.connections` or `squirrels` module.
