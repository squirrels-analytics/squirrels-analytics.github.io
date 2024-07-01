# Seeds

Seeds are CSV files for lookup tables contained in the `seeds` folder. This allows reference data to be version controlled together with the Squirrels project. These lookup tables can serve as datasources for your parameter options or dimension tables that models can refer to.

To serve as an example for the rest of this guide, suppose we have a CSV file in the `seeds` folder named `seed_categories.csv` with the following contents to represent expense categories:

```csv
category_id,category
0,"Food"
1,"Bills"
2,"Shopping"
3,"Transportation"
4,"Entertainment"
```

## Reference Seeds in Parameters

The constructors for every derived class of DataSource contains an optional argument called `from_seeds` which is default to False. To make the DataSource object refer to a seed, set the first argument of the constructor to the name of the CSV file (without the ".csv" extension), and set `from_seeds` to True.

:::note

When the `from_seeds` argument is True, the `connection_name` argument is ignored.

:::

For example, creating a single select parameter by taking the options from `seed_categories.csv` would look like this:

```python
category_ds = sr.SelectDataSource("seed_categories", "category_id", "category", from_seeds=True)
sr.MultiSelectParameter.CreateFromSource(
    "category", "Category Filter", category_ds, description="The expense categories to filter by"
)
```

For more advanced use cases, you can also use a SQL query for the first argument of the DataSource constructor. For example:

```python
category_ds = sr.SelectDataSource("SELECT * FROM seed_categories WHERE category_id <> 4", "category_id", "category", from_seeds=True)
```

The SQL syntax here is either sqlite or duckdb depending on the [Project Settings] for **in_memory_database**.

## Reference Seeds in Models

Seeds can be referenced by federate models using the **ref** function, the same way as using the **ref** function to specify dependencies on other models.

The following is a sample SQL model that refers to the `seed_categories.csv` file.

```sql
SELECT a.expense_id, a.amount, lu.category
FROM {{ ref("expenses") }} AS a
LEFT JOIN {{ ref("seed_categories") }} AS lu
    ON a.category_id = lu.category_id
```

:::note

For Python models, the seed should be included in the list returned by the "dependencies" function to specify that the seed is a dependency to the model at compile time.

:::

Just like setting a model as the target model for a dataset (either setting the name of the dataset the same as the model or by defining the "model" field for the dataset), seeds can also be set as the "target model" for datasets. Doing so would mean that the dataset is static data instead of a query.

## Project Settings for Seeds

Setting are available to:
- decide whether to infer the schema of the seed or treat all columns as seeds
- provide a list of values that represent NA values in the CSV files

For more information, see the [Project Settings] page for **seeds.infer_schema** and **seeds.na_values**.


[Project Settings]: ./settings
