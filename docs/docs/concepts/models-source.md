# Sources

Sources in Squirrels connect your project to external data sources such as databases, APIs, or files. They define how data is extracted from these sources and loaded into your project's DuckDB environment.

## Configuration

Sources are defined in the `models/sources.yml` file. Here's an example configuration:

```yaml
sources:
  - name: src_transactions
    description: "The source table for transactions"
    connection: default           # connection name from connections.yml
    table: expenses               # table name in the source database
    load_to_duckdb: true          # load data into DuckDB / virtual data environment
    primary_key: [id]             # column(s) for upserts
    
    update_hints:
      increasing_column: date     # column to track incremental updates
      strictly_increasing: false  # whether max value should be deleted during incremental loads

    columns:                      # columns to load (if empty, all columns are loaded)
      - name: id
        type: string
        description: The unique identifier for the transaction
        category: dimension

      - name: date
        type: date
        description: The date of the transaction
        category: dimension

      - name: amount
        type: float
        description: The amount of the transaction
        category: measure
```

## Key Properties

### Basic Configuration

- **name**: A unique identifier for the source model
- **description**: A human-readable description of the source model
- **connection**: The connection name as defined in your connections.yml file
- **table**: The table or view name in the source database (defaults to the source name if not provided)
- **load_to_duckdb**: Whether to load the data into DuckDB (required for models other than dbview models to reference this source)

If `connection` is not specified, the source will be loaded from the default connection (usually `default`) specified with the [environment variable] `SQRL_CONNECTIONS__DEFAULT_NAME_USED`.

:::important

Currently, setting `load_to_duckdb` to true is only supported if the connection uses `sqlite`, `postgres`, and `mysql`. Support for additional dialects will be included in future releases. **Do not set this to true for other dialects!**

:::

### Keys and Incremental Loading

- **primary_key**: Columns that uniquely identify a record, used for upserts during incremental loads
- **update_hints**: Configuration for incremental loading
  - **increasing_column**: Column used to identify new or changed records (e.g., timestamp, ID)
  - **strictly_increasing**: Whether values in the increasing_column only increase (true) or can also change (false)
  - **selective_overwrite_value**: Specific value to use for deleting records before incremental load

If `increasing_column` is not specified, the source model will always do a full refresh during builds. When specified, it enables incremental loading, which only fetches new or changed records since the last build.

### Column Definitions

- **columns**: Definitions of columns to load from the source
  - **name**: Column name in the source
  - **type**: Data type for the column. See the [Column Types] documentation for supported types
  - **description**: Human-readable description of the column
  - **category**: Category of the column (dimension, measure, misc)

If `load_to_duckdb` is set to `true` and no columns are specified, all columns from the source table will be loaded. When columns are specified, only those columns with their specified types will be loaded into the virtual data environment.

## Usage

Sources serve as the foundation of your data pipeline and are referenced by other models.

### In Dbview Models

[Dbview models] can reference source models using the `source()` macro:

```sql
-- In a dbview model
SELECT 
    date,
    amount
FROM {{ source("src_transactions") }}
WHERE amount > 100
```

If the dbview model has `translate_to_duckdb: true`, then the dbview model can only depend on sources that have `load_to_duckdb: true`.

### In Other Models

[Build models] and [federate models] can reference source models using the `ref()` function, but only if `load_to_duckdb` is set to `true`:

```sql
-- In a build or federate SQL model
SELECT 
    date,
    amount
FROM {{ ref("src_transactions") }}
WHERE amount > 100
```

```python
# In a Python model
def model(sqrl):
    df = sqrl.ref("src_transactions")
    return df.filter(pl.col("amount") > 100)
```

## Incremental Loading Patterns

### Always Full Refresh

When a source model doesn't specify an `increasing_column`, it will perform a full refresh during each build:

```yaml
sources:
  - name: src_small_lookup_table
    connection: default
    table: lookup_table
    load_to_duckdb: true
    # No increasing_column = full refresh every time
```

### Strictly Increasing Values

For columns with values that only increase (like auto-incrementing IDs):

```yaml
sources:
  - name: src_orders
    connection: default
    table: orders
    load_to_duckdb: true
    primary_key: [order_id]
    update_hints:
      increasing_column: order_id
      strictly_increasing: true
```

### Timestamps with Possible Updates

For timestamps where records might be updated:

```yaml
sources:
  - name: src_customers
    connection: default
    table: customers
    load_to_duckdb: true
    primary_key: [customer_id]
    update_hints:
      increasing_column: updated_at
      strictly_increasing: false  # Max timestamp will be removed before load
```

It is important to set `strictly_increasing` to `false` in this example if it's possible for records to have the same value `updated_at`. And by defining the primary key, you ensure that records that pre-existed in Duckdb will be replaced with an updated value for `updated_at`.

### Selective Overwrite

For cases where you want to overwrite records from a specific date forward:

```yaml
sources:
  - name: src_daily_metrics
    connection: default
    table: metrics
    load_to_duckdb: true
    update_hints:
      increasing_column: date
      selective_overwrite_value: "2023-01-01"  # All records >= this date will be deleted before load
```

:::note

In a future version of Squirrels, we may provide a more elegant way to specify selective overwrite values by providing arguments to the [sqrl build] command or the `/build` API endpoint.

:::

## Loading to the Virtual Data Environment

Sources that have `load_to_duckdb: true` will be loaded into the virtual data environment when running [sqrl build]. This command has a `--full-refresh` or`-f` flag that can be used to force a full refresh of the source. If running [sqrl run] with the `--build` flag, this would always build with a full refresh before activating the API server.

It is recommended to perform a full refresh if the following changes are made to a source that has `load_to_duckdb: true`:

- A column is added or removed
- A column name or type is changed

:::note

In a future version of Squirrels, we may automatically detect these changes and perform a full refresh of the sources with these changes, and their downstream build models, without having to specify the `--full-refresh` flag and perform a full refresh for the entire project.

:::

## Best Practices

1. **Use load_to_duckdb strategically**:
    - Set `load_to_duckdb: true` for tables that need to be referenced by multiple models or for smaller datasets
    - Use `load_to_duckdb: false` for large tables that are only used in dbview models

2. **Define column types explicitly**:
    - Always specify column types to ensure proper type handling

3. **Use primary keys for updatable sources**:
    - Define primary keys for tables where records might be updated
    - This enables proper upsert behavior during incremental loads

4. **Choose the right incremental loading pattern**:
    - Use timestamps for tables that have records that can be updated
    - Use auto-incrementing IDs for append-only tables
    - Consider full refresh for small lookup tables

5. **Document your sources**:
    - Add clear descriptions to sources and columns
    - Categorize columns properly (dimension, measure, misc)


[environment variable]: ./environment
[Column Types]: ./column-types
[Dbview models]: ./models-dbview
[Build models]: ./models-build
[Federate models]: ./models-federate
[sqrl build]: ../../references/cli/build
[sqrl run]: ../../references/cli/run
