# Build Models

Build models in Squirrels are materialized during the build process, creating tables or views in the DuckDB environment. They support both SQL and Python transformations and are designed for more complex data manipulations that need to be persisted for downstream use.

## Configuration

Build models consist of two files:
1. A SQL or Python file with the transformation logic
2. A YAML file with metadata

Example SQL file:
```sql
SELECT
    t.id,
    t.date::TEXT AS date,
    DATE_TRUNC('month', t.date)::TEXT AS month,
    c.category_id,
    c.category,
    sc.subcategory_id,
    sc.subcategory,
    t.amount,
    t.description
FROM {{ ref("src_transactions") }} t
LEFT JOIN {{ ref("seed_categories") }} c
    ON t.category_id = c.category_id
LEFT JOIN {{ ref("seed_subcategories") }} sc
    ON t.subcategory_id = sc.subcategory_id
```

Example Python file:
```python
def model(sqrl):
    # Load dependencies using ref()
    transactions = sqrl.ref("src_transactions")
    categories = sqrl.ref("seed_categories")
    subcategories = sqrl.ref("seed_subcategories")
    
    # Join datasets
    result = (
        transactions.join(
            categories,
            on=transactions["category_id"] == categories["category_id"],
            how="left"
        )
        .join(
            subcategories,
            on=transactions["subcategory_id"] == subcategories["subcategory_id"],
            how="left"
        )
    )
    
    # Add month column
    result = result.with_columns(
        pl.col("date").dt.truncate("1mo").cast(pl.Utf8).alias("month")
    )
    
    return result  # Return a Polars LazyFrame
```

Example YAML file:
```yaml
description: |
  This is an example of a build model. It adds a new column called "month" to the source table "src_transactions".

materialization: TABLE  # Optional - defaults to "VIEW" for SQL models, always "TABLE" for Python models

depends_on:  # List of upstream dependencies, required for Python models
  - src_transactions
  - seed_categories
  - seed_subcategories

columns:
  - name: id
    depends_on:
      - src_transactions.id
    pass_through: true  # Inherit metadata from upstream column

  - name: date
    type: string
    description: The day of the transaction as a string in 'YYYY-MM-DD' format
    depends_on:
      - src_transactions.date

  - name: month
    type: string
    description: The month of the transaction as a string in 'YYYY-MM' format
    depends_on:
      - src_transactions.date
```

## Key Properties

- **description**: A human-readable description of the build model
- **materialization**: The materialization type (TABLE or VIEW)
  - Default is "VIEW" for SQL models
  - Python models are always materialized as "TABLE"
- **depends_on**: List of models this model depends on (automatically populated for SQL models when using `ref()`)
- **columns**: Definitions of columns produced by the model
  - **name**: Column name
  - **type**: Data type for the column. This is metadata exposed through API endpoints, and not enforced if the query produces a different type
  - **description**: Human-readable description of the column
  - **category**: Category of the column (dimension, measure, misc)
  - **depends_on**: List of upstream columns this column depends on
  - **pass_through**: Whether this column is passed through from an upstream model (boolean)

## How Build Models Work

Build models are processed in a specific sequence during the build process:

1. **Dependency Resolution**: Squirrels constructs a directed acyclic graph (DAG) of all models to determine the correct build order.

2. **Compilation**: For each build model:
   - SQL models: The template is rendered with Jinja, resolving all `ref()` calls
   - Python models: The function is prepared for execution with the appropriate arguments

3. **Execution**: Models are executed according to their dependency order:
   - SQL models: The compiled SQL is executed to create a table or view
   - Python models: The Python function is executed, and the resulting dataframe is materialized as a table

4. **Materialization**: The results are stored in DuckDB / the virtual data environment.

Build models can depend on [sources] (with `load_to_duckdb: true`), [seeds], or other build models.

## Pass-Through Columns

Build models support "pass-through" columns, which inherit metadata from upstream columns. This is useful for:

- Preserving column descriptions and metadata through transformations
- Ensuring consistent metadata across models
- Reducing redundancy in YAML configurations

When a column is defined with `pass_through: true`, it must have exactly one dependency in `depends_on`. Unless explicitly overridden, the column inherits:
- Type
- Description
- Category

## Usage

Build models can be referenced by [federate models] and other build models using the `ref()` function:

```sql
-- In another SQL model
SELECT * FROM {{ ref("build_example") }}
```

```python
# In a Python model
def model(args):
    df = args.ref("build_example")
    return df
```

## Loading to the Virtual Data Environment

By default, all build models are recreated during each build process with [sqrl build]. However, if a partial build is performed by specifying which models to build:

```bash
sqrl build --select build_example
```

Only the specified models and their downstream dependencies will be rebuilt.

:::note

Currently, incremental loading is not supported for build models. This will be supported in a future version of Squirrels.

:::

## Best Practices

1. **Choose the right materialization**:
   - Use TABLE for frequently accessed models or when performance is critical
   - Use VIEW for models that don't need materialization or are accessed infrequently

2. **Structure complex transformations as build models**:
   - Build models allow you to pre-compute complex joins and transformations
   - This improves performance for downstream models

3. **Use Python for complex logic**:
   - When SQL becomes too complex, consider using Python
   - Python models provide access to the full Polars/Pandas API for advanced operations

4. **Define columns completely**:
   - Document all columns with types, descriptions, and categories
   - Use pass-through columns to inherit metadata when appropriate

5. **Consider dependency management**:
   - Explicitly list all dependencies in the YAML file
   - Although SQL models automatically track dependencies through `ref()` calls, it is recommended to explicitly list dependencies in the YAML file
   - Python models require explicit dependency declarations


[sqrl build]: ../../references/cli/build
[sources]: ./models-source
[seeds]: ./models-seed
[federate models]: ./models-federate
