# DatasetResult (class)

This is the return type of the `dataset` method of a [SquirrelsProject] object. It is also a subclass of [DatasetMetadata].

Can be imported from the module `squirrels.types` or `squirrels`.

## Attributes

### target_model_config

An object containing the description and columns metadata of the target model of the dataset.

### df

A polars DataFrame of the full dataset results.

## Methods

### to_json

Returns a JSON representation of the columns in the dataset. Note that the dataset columns may change based on parameter selections.

**Required Arguments:**

- **orientation**: The orientation of the returned `data` field. Can be `records`, `rows`, or `columns`.
- **select**: A tuple of column names to return. If empty, all columns are returned.
- **limit**: The maximum number of rows to return.
- **offset**: The number of rows to skip.

**Returns:** A JSON object with fields for `schema.fields`, `total_num_rows`, `data_details.num_rows`, `data_details.orientation`, and `data`.


[SquirrelsProject]: ../SquirrelsProject
[DatasetMetadata]: ./DatasetMetadata
