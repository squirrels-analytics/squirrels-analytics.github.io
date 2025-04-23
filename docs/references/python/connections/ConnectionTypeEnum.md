# ConnectionTypeEnum (enum)

An enumeration class that defines the types of database connections supported by the Squirrels framework.

## Values

- `SQLALCHEMY`: Use SQLAlchemy for database connections.
- `CONNECTORX`: Use ConnectorX for database connections.
- `ADBC`: Use ADBC (Arrow Database Connectivity) for database connections.

## Usage

```python
from squirrels import connections as cn

# Example usage:
connection_type = cn.ConnectionTypeEnum.SQLALCHEMY
```

