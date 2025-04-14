# Seeds

Seeds are small, static datasets that are included directly in your Squirrels project. They are typically used for lookup tables, reference data, or other small datasets that change infrequently.

## Configuration

Seeds consist of two files:
1. A CSV file containing the data
2. A YAML file with metadata (optional but recommended)

Example CSV file:
```csv
"category_id","category"
"0","Food"
"1","Bills"
"2","Shopping"
"3","Transportation"
"4","Entertainment"
```

Example YAML file:
```yaml
description: |
  Lookup table for the category IDs and names of transactions.

cast_column_types: true  # Apply column types defined below

columns:
  - name: category_id
    type: string
    description: The category ID
    category: dimension
  
  - name: category
    type: string
    description: The human-readable category name
    category: dimension
```

## Key Properties

- **description**: A human-readable description of the seed model
- **cast_column_types**: Whether to apply the column types defined in the YAML file (default: false)
- **columns**: Definitions of columns in the seed data
  - **name**: Column name (must match the CSV header)
  - **type**: Data type for the column
  - **description**: Human-readable description of the column
  - **category**: Category of the column (dimension, measure, etc.)

## Schema Inference and Type Casting

Squirrels provides two ways to handle column types in seed files:

1. **Automatic Schema Inference**: By default, Squirrels attempts to infer the schema from the CSV data. This behavior is controlled by the [environment variable] `SQRL_SEEDS__INFER_SCHEMA` (defaults to "true").

2. **Explicit Type Casting**: When you set `cast_column_types: true` in the YAML file, Squirrels will use the column types you've defined, overriding the schema inference.

For explicit type casting, the supported types are the same as the "general-purpose" data types supported by DuckDB, which can be found [here](https://duckdb.org/docs/stable/sql/data_types/overview.html#general-purpose-data-types). One exception is that the "decimal" type is treated as "double" since the seed gets stored in memory as a Polars DataFrame, and the "decimal" type for Polars is not stable according to the [Polars documentation](https://docs.pola.rs/api/python/stable/reference/api/polars.datatypes.Decimal.html).

If both `SQRL_SEEDS__INFER_SCHEMA` and `cast_column_types` are false, the columns will be loaded as strings.

## Handling Null Values

You can configure which string values should be treated as null (missing) values by setting the [environment variable] `SQRL_SEEDS__NA_VALUES`. This is a JSON array of strings, for example:

```
SQRL_SEEDS__NA_VALUES='["", "NULL", "null", "NA", "na", "N/A", "n/a"]'
```

By default, this is simply set to `["NA"]`.

## Usage

Seed models are loaded into DuckDB tables during the build process and can be referenced by other models using the `ref()` function in Python or SQL:

```sql
-- In a SQL model
SELECT * FROM {{ ref("seed_categories") }}
```

```python
# In a Python model
def model(sqrl):
    categories_df = sqrl.ref("seed_categories")
    return categories_df
```

Seeds are materialized as tables in the virtual data environment during the build process. This ensures they're available to be referenced by build models.

## Best Practices

1. **Use seeds for small, static datasets**:
   - Reference data that doesn't change often
   - Lookup tables
   - Mapping tables
   - Configuration data

2. **Keep CSV files clean and consistent**:
   - Use consistent quote and delimiter characters
   - Include headers that match your column configurations
   - Keep files small enough to comfortably store in version control

3. **Version control your seed data**:
   - Track changes to both CSV and YAML files

4. **Document your seeds thoroughly**:
   - Add clear descriptions to the YAML file
   - Categorize columns properly (dimension, measure, misc)
   - Include source information where relevant


[environment variable]: ./environment
