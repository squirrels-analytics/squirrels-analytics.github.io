# TextDataSource

The class for the database table source for a text parameter. See [DataSource] page for more details on the common constructor arguments.

Can be found in the classpath `squirrels.data_sources.TextDataSource` or `squirrels.TextDataSource`.

### Constructor

Creates a TextDataSource object.

**Required Arguments:**

- **table_or_query** (see [DataSource])
- **default_text_col**: A string for the column name of the default entered text

**Optional Keyword Arguments:**

- **id_col** (see [DataSource])
- **from_seeds** (see [DataSource])
- **user_group_col** (see [DataSource])
- **parent_id_col** (see [DataSource])
- **connection_name** (see [DataSource])


[DataSource]: ./DataSource