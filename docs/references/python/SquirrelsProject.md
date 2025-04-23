# SquirrelsProject (class)

This class is used to interact with a Squirrels project from Python. It can be imported directly from the `squirrels` module.

For example, you can create a SquirrelsProject object in Python (or Jupyter Notebook) as such:

```python
from squirrels import SquirrelsProject

sqrl = SquirrelsProject(filepath="path/to/squirrels/project/")
```

And then call methods on the SquirrelsProject object to perform various operations.

### Constructor

Creates a SquirrelsProject object.

**Optional Keyword Arguments:**

- **filepath**: A string for the path to the Squirrels project folder. Defaults to "." (the current working directory).
- **log_level**: An optional string for the logging level to include in the log file. Options are "DEBUG", "INFO", and "WARNING". Default is "INFO".
- **log_format**: An optional string for the format of the log file. Options are "text" and "json". Default is "text".
- **log_file**: An optional string for the name of the log file to write to, relative to the "logs/" subfolder. If None or empty string, then file logging is disabled. Default is "squirrels.log".

## Attributes

Attributes of the SquirrelsProject object.

### User

A reference to the User class defined in [user.py] of the Squirrels project. If no [user.py] file exist, then it's a reference to the default [BaseUser](../../tba) class that comes with Squirrels.

As an example, you can create a user object as such:

```python
user = sqrl.User(username="username")
```

[user.py]: ../../docs/concepts/user

## Methods

Methods that can be invoked from the SquirrelsProject object.

### compile

Async method to compile the SQL templates into files in the "target/" folder. Same functionality as the "sqrl compile" CLI.

**Optional Keyword Arguments:**

- **dataset**: A string for the name of the dataset to compile. Ignored if `do_all_datasets` argument is True, but required (i.e., cannot be None) if `do_all_datasets` is False. Default is None.
- **do_all_datasets**: A boolean for whether to compile all datasets. If True, the `dataset` argument is ignored. Default is False.
- **selected_model**: A string for the name of the model to compile. If specified, the compiled SQL query is also printed in the terminal. If None, all models for the selected dataset are compiled. Default is None.
- **test_set**: A string for the name of the test set to compile with. If None, the default test set is used (which can vary by dataset). Ignored if `do_all_test_sets` argument is True. Default is None.
- **do_all_test_sets**: A boolean for whether to compile all applicable test sets for the selected dataset(s). If True, the `test_set` argument is ignored. Default is False.
- **runquery**: A boolean for whether to run all compiled queries and save each result as a CSV file. If True and `selected_model` is specified, all upstream models of the selected model is compiled as well. Default is False.

**Returns:** None

### seed

Method to retrieve a seed as a polars LazyFrame given a seed name.

**Required Arguments:**

- **name**: A string for the name of the seed to retrieve.

**Returns:** A polars LazyFrame

### build

Async method to build the virtual data environment. Same functionality as the "sqrl build" CLI.

**Optional Keyword Arguments:**

- **full_refresh**: Whether to drop all tables and rebuild the virtual data environment from scratch. Default is False.
- **select**: A string for the name of a single data model to build, or None to build all data models. Default is None.
- **stage_file**: If the virtual data environment is in use and cannot be modified, set this to True to stage the DuckDB file to commit modifications later. Default is False.

**Returns:** None

### dataset_metadata

Method to retrieve the metadata (descriptions, columns, etc.) for a dataset.

**Required Arguments:**

- **name**: A string for the name of the dataset to retrieve metadata for.

**Returns:** A [DatasetMetadata](../../tba) object

### dataset

Async method to retrieve the dataset result given parameter selections.

**Required Arguments:**

- **name**: A string for the name of the dataset to retrieve.

**Optional Keyword Arguments:**

- **selections**: A dictionary of parameter selections to apply to the dataset. Optional, default is empty dictionary.
- **user**: A User object to use for authentication. If None, no user is used. Default is None.
- **requires_auth**: A boolean for whether the dataset requires authentication. If True, the user object must be provided to access protected or private datasets. Default is True.

:::warning

Do not set the `requires_auth` argument to False if the dataset (or data models used by the dataset) may change behaviour based on the user attributes.

:::

**Returns:** A [DatasetResult](../../tba) object

### dashboard

Async method to retrieve a dashboard given parameter selections.

**Required Arguments:**

- **name**: The name of the dashboard to retrieve.

**Optional Keyword Arguments:**

- **selections**: A dictionary of parameter selections to apply to the dashboard. Optional, default is empty dictionary.
- **user**: A User object to use for authentication. If None, no user is used. Default is None.
- **dashboard_type**: Return type of the method, mainly used for type hints (no need to specify if you do not rely on type hints). For instance, provide [PngDashboard](../../tba) if the return type should be [PngDashboard](../../tba). Optional, default is [PngDashboard](../../tba).

**Returns:** A [PngDashboard](../../tba) or [HtmlDashboard](../../tba) object based on the dashboard type specified by the `dashboard_type` argument

### query_models

Async method to query the data models with SQL given parameter selections.

**Required Arguments:**

- **sql_query**: A string for the SQL query to execute.
- **selections**: A dictionary of parameter selections to apply to the data models. Optional, default is empty dictionary.
- **user**: A User object to use for attributes of authenticated user. If None, no user is used. Default is None.

**Returns:** A [DatasetResult](../../tba) object

### close

Use this method to deliberately close any database connections opened by the SquirrelsProject object.

The database connections may still be opened again by other methods invoked on the SquirrelsProject object after this method is called.
