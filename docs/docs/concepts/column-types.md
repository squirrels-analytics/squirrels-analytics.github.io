# Column Types

This document outlines the column types supported in Squirrels and how they map to both Polars and DuckDB data types.

## Supported Data Types

Squirrels supports a variety of data types that map to both [Polars types](https://docs.pola.rs/api/python/stable/reference/datatypes.html) and [DuckDB types](https://duckdb.org/docs/stable/sql/data_types/overview). The table below shows these mappings:

| Squirrels Type | Polars Type | DuckDB Type | Description |
|----------------|-------------|-------------|-------------|
| `string`, `varchar`, `char`, `text` | `pl.String` | VARCHAR | Variable-length character string |
| `tinyint`, `int1` | `pl.Int8` | TINYINT | Signed one-byte integer |
| `smallint`, `short`, `int2` | `pl.Int16` | SMALLINT | Signed two-byte integer |
| `integer`, `int`, `int4` | `pl.Int32` | INTEGER | Signed four-byte integer |
| `bigint`, `long`, `int8` | `pl.Int64` | BIGINT | Signed eight-byte integer |
| `float`, `float4`, `real` | `pl.Float32` | FLOAT | Single precision floating-point number (4 bytes) |
| `double`, `float8`, `decimal` | `pl.Float64` | DOUBLE | Double precision floating-point number (8 bytes) |
| `boolean`, `bool`, `logical` | `pl.Boolean` | BOOLEAN | Logical Boolean (true/false) |
| `date` | `pl.Date` | DATE | Calendar date (year, month, day) |
| `time` | `pl.Time` | TIME | Time of day (no time zone) |
| `timestamp`, `datetime` | `pl.Datetime` | TIMESTAMP | Combination of time and date |
| `interval` | `pl.Duration` | INTERVAL | Date/time delta |
| `blob`, `binary`, `varbinary` | `pl.Binary` | BLOB | Variable-length binary data |

## Type Conversion

Squirrels automatically handles type conversion between the supported formats. When defining columns in your model definitions, you can use any of the Squirrels type names listed in the table above, and the framework will map them to the appropriate Polars and DuckDB types when necessary.

For instance, conversion is applied for the following scenarios:
- When building [sources](./models-source) with `load_to_duckdb: true`, Squirrels uses the column types to create the table with appropriate column types in DuckDB
- When loading [seeds](./models-seed) with `cast_columns: true` into memory as Polars DataFrames, Squirrels uses the column types to cast the columns. At build time, Squirrels uses DuckDB features to create the table from the Polars DataFrame

Outside of these scenarios, specifying the type for model columns serve as documentation or metadata provided through the `/data-catalog` API endpoint, which can be useful for AI agents or other external systems.

### Example

```yaml
# Example model definition
sources:
  - name: my_source
    description: This is a description of the source
    load_to_duckdb: true
    columns:
      - name: id
        type: bigint
      - name: name
        type: string
      - name: created_at
        type: timestamp
      - name: is_active
        type: boolean
```

## Notes on Specific Types

- **Decimal**: Squirrels uses `Float64` to represent `decimal` types as the [Polars Decimal type](https://docs.pola.rs/api/python/stable/reference/api/polars.datatypes.Decimal.html) is considered unstable.
- **Timestamp**: The `timestamp` type in Squirrels maps to `pl.Datetime` in Polars and the `TIMESTAMP` type in DuckDB.
