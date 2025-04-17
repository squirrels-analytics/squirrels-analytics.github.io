# Federate Models

Federate models in Squirrels are the final layer in your data transformation pipeline. They combine data from multiple sources and models, apply final transformations, and expose data to end users. They support both SQL and Python transformations and are designed for user-facing data models that respond to user attributes and parameter selections.

## Configuration

Federate models consist of two files:
1. A SQL or Python file with the transformation logic
2. A YAML file with metadata

Example SQL file:
```sql
    SELECT *
    FROM {{ ref("build_example") }}
    WHERE date >= '{{ ctx.min_date }}'
        AND date <= '{{ ctx.max_date }}'
        AND amount >= {{ ctx.min_amount }}
        AND amount <= {{ ctx.max_amount }}
    {%- if ctx.has_categories %}
        AND category_id IN ({{ ctx.category_ids_quoted_joined }})
    {%- endif %}
    {%- if ctx.has_subcategories %}
        AND subcategory_id IN ({{ ctx.subcategory_ids_quoted_joined }})
    {%- endif %}
```


Example Python file:
```python
def model(sqrl):
    # Get dependency
    build_df = sqrl.ref("build_example")
    
    # Apply filters
    result = build_df.filter(
        (pl.col("date") >= sqrl.ctx["min_date"]) &
        (pl.col("date") <= sqrl.ctx["max_date"]) &
        (pl.col("amount") >= sqrl.ctx["min_amount"]) &
        (pl.col("amount") <= sqrl.ctx["max_amount"])
    )
    
    if "categories" in sqrl.ctx:
        result = result.filter(pl.col("category_id").is_in(sqrl.ctx["category_ids"]))
    
    if "subcategories" in sqrl.ctx:
        result = result.filter(pl.col("subcategory_id").is_in(sqrl.ctx["subcategory_ids"]))
    
    return result
```

Example YAML file:
```yaml
description: |
  This is an example of a federate view model. It takes the build example model and groups or filters the results based on the parameter selections provided.

  Parameters are available to specify the group by dimension and filter by date, amount of the transaction, category, and subcategory.

depends_on:                # List of models this federate depends on
  - build_example

eager: false               # Whether to materialize as a table (true) or view (false) in memory before proceeding to downstream models

columns:
  - name: date
    type: string
    condition: parameter 'group_by' (Group By) is 'g0' (Transaction)
    description: The date of the transaction in 'YYYY-MM-DD' format, in descending order
    category: dimension
    depends_on:
      - build_example.date
  
  - name: day
    type: string
    condition: parameter 'group_by' (Group By) is 'g1' (Day)
    description: The day for which the amount is aggregated by, in descending order
    category: dimension
    depends_on:
      - build_example.date
  
  - name: month
    type: string
    condition: parameter 'group_by' (Group By) is 'g4' (Month)
    description: The month for which the amount is aggregated by, in descending order
    category: dimension
    depends_on:
      - build_example.month

  - name: category
    type: string
    condition: parameter `group_by` (Group By) is `g0` (Transaction), `g2` (Category), or `g3` (Subcategory)
    description: The category for which the amount is aggregated by
    category: dimension
    depends_on:
      - build_example.category
  
  - name: total_amount
    type: float
    description: The total amount spent by the group by dimension
    category: measure
    depends_on:
      - build_example.amount
```

## Key Properties

- **description**: A human-readable description of the federate model
- **depends_on**: List of models this model depends on
- **eager**: Whether to materialize as a table (true) or view (false, default) in memory before proceeding to downstream models
- **columns**: Definitions of columns produced by the model
  - **name**: Column name
  - **type**: Data type for the column. See the [Column Types] documentation for supported types
  - **description**: Human-readable description of the column
  - **category**: Category of the column (dimension, measure, misc)
  - **depends_on**: List of upstream columns this column depends on
  - **condition**: Condition that determines when this column is present in the result

## How Federate Models Work

Federate models are the final layer in your data pipeline, providing a flexible interface for user interaction:

1. **Parameters and Context**: Federate models can access:
   - Context variables via `ctx` (set by context.py, often derived from parameters or user fields)
   - Parameter values via `prms` (selected from parameter dropdowns)

2. **Dynamic SQL/Python**: Federate models typically contain:
   - Conditional logic that changes based on parameter selections
   - Dynamic filters applied based on user inputs
   - Different aggregation levels determined by parameters

3. **Materialization Options**:
   - `eager: false` (default): Materializes as a view in memory, optimized based on downstream queries and executed on-demand
   - `eager: true`: Materializes as a table in memory before proceeding to downstream models

4. **Column Metadata with Conditions**: Column definitions can include conditions that:
   - Document when columns appear in results based on parameter selections
   - Help generate accurate metadata for visualizations and APIs
   - Enable automatic parameter-dependent schema changes

Federate models can depend on [sources] (with `load_to_duckdb: true`), [seeds], [build models], [dbview models], and other federate models. This is all data models except sources with `load_to_duckdb: false`.

## Conditional Columns

Federate models may have conditional columns that appear or disappear based on parameter selections. The `condition` property in column definitions serves two purposes:

1. **Documentation**: Clearly explains when each column appears
2. **Metadata**: Helps tools understand the dynamic schema

Example:
```yaml
- name: day
  type: string
  condition: parameter 'group_by' (Group By) is 'g1' (Day)
  description: The day for which the amount is aggregated by
```

## Best Practices

1. **Apply defensive programming**:
   - Check for parameter existence before using values
   - Handle edge cases and missing values gracefully

2. **Balance flexibility and performance**:
   - Use `eager: true` for calculations that are reused by many downstream models
   - Use `eager: false` for saving memory and improving performance when the model is not reused

3. **Document conditional behavior**:
   - Use the `condition` property to document when columns appear
   - Keep column conditions consistent with the actual code logic


[Column Types]: ./column-types
[sources]: ./models-source
[seeds]: ./models-seed
[build models]: ./models-build
[dbview models]: ./models-dbview
