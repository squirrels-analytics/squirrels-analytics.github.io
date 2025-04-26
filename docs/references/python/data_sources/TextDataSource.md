# TextDataSource (class)

TextDataSource objects are used to define the database lookup table to use for the default text value of a text parameter. This is a subclass of [DataSource].

The class can be imported from the `squirrels.data_sources` or `squirrels` module.

## Constructor

```python
def __init__(
    self, table_or_query: str, default_text_col: str, *, 
    id_col: str | None = None, from_seeds: bool = False, user_group_col: str | None = None, 
    parent_id_col: str | None = None, connection_name: str | None = None
) -> None:
```

Creates a TextDataSource object.

**Required Arguments:**

- **table_or_query**: A string for the table name or SQL query that represents the source. The string is treated as a SQL query if it starts with "select " (case-insensitive)
- **default_text_col**: A string for the column name of the default entered text

**Optional Keyword Arguments:**

- **id_col**: A string for the column name of the ID of the parameter options. Only required if the parameter has a parent parameter that changes the default value for this parameter. Default is None
- **from_seeds**: A boolean for whether the datasource is derived from seeds (CSV files in the "seeds" folder of the project). When True, the file stems of the CSV files can be treated as table names for **table_or_query** argument. Default is False
- **user_group_col**: A string for the column name of the groups of users the parameter options apply to. Default is None
    - If multiple rows have the same value for "id_col" but different value for "user_group_col", then the parameter option (identified by ID) is applicable to multiple user groups
- **parent_id_col**: A string for the column name of the parameter option IDs of the parent parameter that the parameter options of this parameter apply to. Default is None
    - If multiple rows have the same value for "id_col" but different value for "parent_id_col", then the parameter option (identified by ID) has multiple parent IDs
- **connection_name**: A string for the connection name to the database that the datasource should come from. If None, uses the default connection name configured by the `SQRL_CONNECTIONS__DEFAULT_NAME_USED` [environment variable] (usually "default"). Default is None


[DataSource]: ../types/DataSource
[environment variable]: ../../../docs/concepts/environment