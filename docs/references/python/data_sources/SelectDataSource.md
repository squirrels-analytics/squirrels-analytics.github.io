# SelectDataSource (class)

SelectDataSource objects are used to define the database lookup table to use for constructing the parameter options for single-select parameters or multi-select parameters. This is a subclass of [DataSource].

The class can be imported from the `squirrels.data_sources` or `squirrels` module.

## Constructor

```python
def __init__(
    self, table_or_query: str, id_col: str, options_col: str, *, 
    order_by_col: str | None = None, is_default_col: str | None = None, 
    custom_cols: dict[str, str] = {}, from_seeds: bool = False, user_group_col: str | None = None, 
    parent_id_col: str | None = None, connection_name: str | None = None
) -> None:
```

Creates a SelectDataSource object.

**Required Arguments:**

- **table_or_query**: A string for the table name or SQL query that represents the source. The string is treated as a SQL query if it starts with "select " (case-insensitive)
- **id_col**: A string for the column name of the ID of the parameter options
- **options_col**: A string for the column name of the human-friendly display name of the parameter options.

**Optional Keyword Arguments:**

- **order_by_col**: A string for the column (usually of type int) that can be used to order the parameter options. If None, then "id_col" becomes the ordering column. Default is None
- **is_default_col**: A string for the column (usually of type bool or int) that flags the default parameter options. If multiple are flagged as default, then only the first one is used. If None, the first parameter option is selected. Default is None
- **custom_cols**: A dictionary of custom field names (of the parameter option) to column names. Default is empty dictionary
- **from_seeds**: A boolean for whether the datasource is derived from seeds (CSV files in the "seeds" folder of the project). When True, the file stems of the CSV files can be treated as table names for **table_or_query** argument. Default is False
- **user_group_col**: A string for the column name of the groups of users the parameter options apply to. Default is None
    - If multiple rows have the same value for "id_col" but different value for "user_group_col", then the parameter option (identified by ID) is applicable to multiple user groups
- **parent_id_col**: A string for the column name of the parameter option IDs of the parent parameter that the parameter options of this parameter apply to. Default is None
    - If multiple rows have the same value for "id_col" but different value for "parent_id_col", then the parameter option (identified by ID) has multiple parent IDs
- **connection_name**: A string for the connection name to the database that the datasource should come from. If None, uses the default connection name configured by the `SQRL_CONNECTIONS__DEFAULT_NAME_USED` [environment variable] (usually "default"). Default is None


[DataSource]: ../types/DataSource
[environment variable]: ../../../docs/concepts/environment