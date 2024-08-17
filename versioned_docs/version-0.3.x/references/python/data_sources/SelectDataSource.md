# SelectDataSource

The class for the database table source for single-select parameters and multi-select parameters. See [DataSource] page for more details on the common constructor arguments.

Can be found in the classpath `squirrels.data_sources.SelectDataSource` or `squirrels.SelectDataSource`.

### Constructor

Creates a SelectDataSource object.

**Required Arguments:**

- **table_or_query** (see [DataSource])
- **id_col** (see [DataSource])
- **options_col**: A string for the column name of the human-friendly display name of the parameter options.

**Optional Keyword Arguments:**

- **order_by_col**: A string for the column (usually of type int) that can be used to order the parameter options. If None, then "id_col" becomes the ordering column. Default is None
- **is_default_col**: A string for the column (usually of type bool or int) that flags the default parameter options. If multiple are flagged as default, then only the first one is used. If None, the first parameter option is selected. Default is None
- **custom_cols**: A dictionary of custom field names (of the parameter option) to column names. Default is empty dictionary
- **from_seeds** (see [DataSource])
- **user_group_col** (see [DataSource])
- **parent_id_col** (see [DataSource])
- **connection_name** (see [DataSource])


[DataSource]: ./DataSource