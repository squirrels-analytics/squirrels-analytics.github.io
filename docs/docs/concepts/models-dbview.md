# Dbview Models

Dbview models are SQL transformations that run directly on the source database. They are useful for performing initial transformations and aggregations close to the data source, which can improve performance by reducing the amount of data transferred.

## Configuration

Dbview models consist of two files:
1. A SQL file with the transformation logic
2. A YAML file with metadata

Example SQL file:
```sql
SELECT
    date_trunc('month', date)::text AS month,
    sum(amount) AS total_amount
FROM {{ source("src_transactions") }}
WHERE date >= '{{ ctx.min_date }}'
    AND date <= '{{ ctx.max_date }}'
GROUP BY 1
ORDER BY 1 DESC
```

Example YAML file:
```yaml
description: |
  This is an example of a database view model. It finds the total amount spent by month.

  Parameters are available to filter the date and amount of the transactions.

connection: default        # Connection name from connections.yml
translate_to_duckdb: true  # Whether to translate and run in DuckDB (default: false)

depends_on:                # Optional - the "source" macro automatically adds to this set
  - src_transactions

columns:
  - name: month
    type: string
    description: The months for which the amount is aggregated by, in descending order
    category: dimension
    depends_on:
      - src_transactions.date
  
  - name: total_amount
    type: float
    description: The total amount spent by the group-by dimension
    category: measure
    depends_on:
      - src_transactions.amount
```

## Key Properties

- **description**: A human-readable description of the dbview model
- **connection**: The connection name as defined in your connections.yml file
- **translate_to_duckdb**: Whether to translate the SQL to DuckDB dialect (default: false)
- **depends_on**: List of models this model depends on (source models are automatically added when using the `source()` macro)
- **columns**: Definitions of columns produced by the model
  - **name**: Column name
  - **type**: Data type for the column. This is metadata exposed through API endpoints, and not enforced if the query produces a different type
  - **description**: Human-readable description of the column
  - **category**: Category of the column (dimension, measure, misc)
  - **depends_on**: List of upstream columns this column depends on

## How Dbview Models Work

Dbview models offer a unique capability within Squirrels: they allow you to execute SQL directly on the source database, rather than in DuckDB.

1. **Connection**: Dbview models use the specified database connection to execute SQL
   - The connection must be configured in your connections.yml file

2. **Source References**: Dbview models can reference source models using the `source()` macro
   - The source model definition provides the actual table name in the source database

3. **SQL Translation Options**:
   - If `translate_to_duckdb: false` (default): SQL executes directly on the source database
   - If `translate_to_duckdb: true`: SQL is translated to DuckDB dialect and executed in DuckDB / the virtual data environment

4. **Parameter Support**: Dbview models support Jinja templating for dynamic SQL generation
   - Access context variables with `{{ ctx.variable }}`
   - Use conditional logic with `{% if %}...{% endif %}`

Dbview models can only depend on sources that share the same connection.
- In addition, if `translate_to_duckdb: true`, then all the dependent sources must have `load_to_duckdb: true`

## When to Translate to DuckDB

The `translate_to_duckdb` setting determines where your query is executed:

**With `translate_to_duckdb: false` (default):**
- SQL executes directly on the source database / data warehouse
- Useful for database-specific SQL features
- Ideal for transformations that benefit from the source database's processing power

**With `translate_to_duckdb: true`:**
- SQL is translated to DuckDB dialect and executed in the virtual data environment
- Useful for taking advantage of DuckDB's performance optimizations for data analytics
- Requires sources to be loaded into the virtual data environment (`load_to_duckdb: true`)

## Usage

Dbview models can be referenced by [federate models] using the `ref()` function:

```sql
-- In another SQL model
SELECT * FROM {{ ref("dbview_example") }}
```

```python
# In a Python model
def model(sqrl):
    df = sqrl.ref("dbview_example")
    return df
```

## Best Practices

1. **Consider source database capabilities**:
   - Use database-specific SQL features when appropriate
   - Set `translate_to_duckdb: true` when you need DuckDB features or optimizations

2. **Use parameters effectively**:
   - Leverage parameters for dynamic behavior

3. **Optimize query performance**:
   - Include appropriate filters to reduce data transfer
   - Use the source database's indexing and query optimization features

4. **Document your models thoroughly**:
   - Add clear descriptions to the YAML file
   - Document the purpose of each column
   - Specify column dependencies accurately

Dbview models are particularly useful for:
- Performing complex transformations close to the data source
- Creating reusable transformations on live data that are used by multiple downstream models
- Reducing data transfer by pre-aggregating data at the source


[federate models]: ./models-federate
