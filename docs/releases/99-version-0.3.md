# What's New in v0.3 (2024-07-01)

The following are changes and new features introduced in v0.3 of Squirrels when compared to v0.2.

Note that Squirrels Analytics is committed to minimizing breaking changes across major versions of the Squirrels library, except for the version compatibility project changes specified below. If you encounter any problems when upgrading, please raise an issue [here](https://github.com/squirrels-analytics/squirrels/issues).

## Project Changes for Version Compatibility

Required project changes when upgrading Squirrels from version 0.2.x to version 0.3.x is limited to the [auth.py] file. 

The signature of the `User.Create` class method has changed from this in 0.2.x:

```python
@classmethod
def Create(cls, username: str, user_dict: dict[str, Any], *, is_internal: bool = False, **kwargs):
    ...
```

To this in 0.3.0, where kwargs is now used in replacement of "user_dict":

```python
@classmethod
def Create(cls, username: str, *, is_internal: bool = False, **kwargs):
    ...
```

Thus, when creating a user object in the `get_user_if_valid` method, instead of doing something like:

```python
user_obj = {"role": "manager", "is_admin": True}
User.Create(sqrl.username, user_obj, is_internal=user_obj["is_admin"])
```

You must change it to look something like this instead:

```python
user_obj = {"role": "manager", "is_admin": True}
User.Create(sqrl.username, is_internal=user_obj["is_admin"], role=user_obj["role"])
# or alternatively: User.Create(sqrl.username, is_internal=user_obj["is_admin"], **user_obj)
```

The signature for `set_attribute` method of the `User` class has also changed from:

```python
def set_attributes(self, user_dict: dict[str, Any]) -> None:
    ...
```

To:

```python
def set_attributes(self, **kwargs) -> None:
    ...
```

Thus, when overwriting this method in your User model, the signature of `set_attributes` must also change to the new one. In the body of `set_attributes`, change all occurences of `user_dict` with `kwargs`.

[auth.py]: ../docs/topics/auth

## New Features

### Changes to DataSource Classes

Before v0.3, the CreateFromSource factory method for SingleSelectParameter and MultiSelectParameter must take a SingleSelectDataSource and MultiSelectDataSource respectively. From v0.3, SingleSelectDataSource and MultiSelectDataSource are still available but deprecated, and both are replaced with [SelectDataSource] instead.

The [SelectDataSource] constructor takes the same arguments as the SingleSelectDataSource constructor. The MultiSelectDataSource constructor contains a few additional optional arguments, which can now be provided through the CreateFromSource factory method for MultiSelectParameter instead.

[SelectDataSource]: ../references/python/data_sources/SelectDataSource

### Changes to Init CLI

When running `squirrels init`, the expenses database is now created by default even when the `--sample-db expenses` option is not specified. To initialize without a database, the `--sample-db none` option is now available.

See reference guide for [init CLI](../references/cli/init) for more details.

### Changes to Compile CLI

A few changes were made to the `squirrels compile` command.

To compile for all datasets, the `-D` or `--all-datasets` option is now available. This can be used instead of `-d DATASET` or `--dataset DATASET` which compiles for one dataset. Exactly one of `-d` or `-D` must be specified (omitting both is not allowed).

To compile for all test sets, the `-T` or `--all-test-sets` option is now available. This can be used instead of `-t TEST_SET` or `--test-set TEST_SET` which compiles for one test set. Exactly one of `-t` or `-T` must be specified (omitting both is not allowed).

The folder structure of the saved files for compiled SQL queries have changed from `targets/compile/[test_set]/[dataset]/` to `targets/compile/[dataset]/[test_set]/`

A picture of the model lineage is now produced for each dataset (as a png file somewhere in the `targets/compile/[dataset]/[test_set]/` folder).

See reference guide for [compile CLI](../references/cli/compile) for more details.

### Auto-Generated OpenAPI Docs

When running the API server with `squirrels run`, you can access the OpenAPI docs at the `/docs` path. 

In v0.2, the API docs under this path was not very useful because it treated "dataset" as a path parameter and did not show the query parameters accepted under different datasets.

In v0.3, you get more detailed information on the available dataset paths, query parameters and type for each dataset path, and what the response model looks like.

### Introducing Seeds

Seeds are CSV files representing lookup tables version controlled with your Squirrels project. Starting in v0.3, you can create seeds in the `seeds/` folder of your Squirrels project and be able to reference seeds as either data sources for your parameter options or tables that your models can reference or join with.

See topic guide for [Seeds](../docs/topics/seeds) for more details.

### Introducing Text Parameter and Placeholders

You can now create text parameters with the widget type `TextParameter`. This allows users to provide freeform text as parameter values to the Squirrels REST APIs.

The `get_entered_text` method is available on `TextParameter` objects to get the entered text. However, the return type is not a string, and is instead a special type that cannot be used directly in models due to risks of SQL injection. To avoid this risk, placeholders that can be used in SQL were introduced.

In the context.py or models files, you can use `set_placeholder` to define the name and value of placeholders, and the placeholder can be used directly in SQL (without Jinja) like `:placeholder_name`. This format of SQL is queried directly with SQLAlchemy, and is known as a parameterized query - a technique specifically known for avoiding SQL injection.

In addition to the return type of `get_entered_text`, the value for the placeholder can be other literal types as well such as strings and numbers.

See topic guide for [SQL Placeholders](../docs/topics/placeholders) for more details.

### Other Enhancements for Parameter Classes

A "description" has been added as an optional argument to the factory methods for each parameter. The description is an empty string by default, and provided through the parameters REST API response as part of each parameter.

In addition, child parameters that cascade based on parent parameters or user attributes can now be disabled (or hidden from view) when the cascaded list of options is empty (before v0.3, an error was raised if the cascaded list of options is empty). In the context.py or model file, you can use the "param_exists" function to check that a parameter name exists in the parameter set and it is not disabled. In the parameters REST API response, the "widget_type" for the parameter is set to "disabled" when disabled.

### Configuration Enhancements for squirrels.yml

Under the "selection_test_sets" section, you can now add a "datasets" field for each test set to provide the list of datasets that the test set is applicable for. When trying to compile using the test set on a dataset that is not in in the list, the process fails. If the "datasets" field is not specified, it is assumed that all datasets are applicable. Also, the dataset configuration now includes an optional field for "default_test_set" to define which test set is used by the dataset by default.

In addition, there are now more ways to substitute environment variables in `squirrels.yml`. Since before v0.3, you can use Jinja to substitute environment variables defined in `environcfg.yml` like this: `{{ my_env_var }}`. From v0.3, you can also use "env_vars" dictionary in Jinja like this: `{{ env_vars.my_env_var }}`. The latter approach is recommended since additional reserved words (such as "env_vars") may be introduced in the future.

### Changes to Project Settings

Two new [project settings] (specified in [squirrels.yml]) are introduced:
- **seeds.infer_schema**
- **seeds.na_values**

Also, the defaults for **parameters.cache.ttl_minutes** and **results.cache.ttl_minutes** are changed from 0 to 60. For situations such as performance testing where you want to disable the cache, set these settings to 0.

See the [Project Settings] page for more details.

[project settings]: ../docs/topics/settings
