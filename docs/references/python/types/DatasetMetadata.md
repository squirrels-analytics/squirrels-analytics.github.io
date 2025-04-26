# DatasetMetadata (class)

This is the return type of the `dataset_metadata` method of a [SquirrelsProject] object.

Can be imported from the module `squirrels.types` or `squirrels`.

## Attributes

### target_model_config

An object containing the description and columns metadata of the target model of the dataset.

## Methods

### to_json

Returns a JSON representation of the columns in the dataset. Note that the dataset columns may change based on parameter selections.

**Returns:** A JSON object with a field for `schema.fields` which is an array of objects with fields for `name`, `type`, `condition`, `description`, and `category`.


[SquirrelsProject]: ../SquirrelsProject
