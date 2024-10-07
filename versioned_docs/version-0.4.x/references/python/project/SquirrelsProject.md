# SquirrelsProject

This class is used to interact with a Squirrels project from Python.

For example, you can create a SquirrelsProject object in Python as such:

```python
from squirrels import SquirrelsProject

sqrl = SquirrelsProject(filepath="path/to/squirrels/project/")
```

And then call methods on the SquirrelsProject object to perform various operations.

Can be found in the classpath `squirrels.project.SquirrelsProject` or `squirrels.SquirrelsProject`.

### Constructor

Creates a SquirrelsProject object.

**Required Arguments:**

- **filepath**: A string for the path to the Squirrels project folder.

## Attributes

Attributes of the SquirrelsProject object.

### User

A reference to the User class defined in `auth.py` of the Squirrels project. If no `auth.py` file exist, then it's a reference to the default [User](../user_base/User) class that comes with Squirrels.

As an example, you can create a user object as such:

```python
user = sqrl.User(username="username")
```

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

Method to retrieve a seed as a pandas DataFrame given a seed name.

**Required Arguments:**

- **name**: A string for the name of the seed to retrieve.

**Returns:** A pandas DataFrame

### dataset

Async method to retrieve a dataset as a pandas DataFrame given parameter selections.

**Required Arguments:**

- **dataset_name**: A string for the name of the dataset to retrieve.

**Optional Keyword Arguments:**

- **selections**: A dictionary of parameter selections to apply to the dataset. Optional, default is empty dictionary.
- **user**: A User object to use for authentication. If None, no user is used. Default is None.

**Returns:** A pandas DataFrame

### dashboard

Async method to retrieve a dashboard given parameter selections.

**Required Arguments:**

- **name**: The name of the dashboard to retrieve.

**Optional Keyword Arguments:**

- **selections**: A dictionary of parameter selections to apply to the dashboard. Optional, default is empty dictionary.
- **user**: A User object to use for authentication. If None, no user is used. Default is None.
- **dashboard_type**: Return type of the method (mainly used for type hints). For instance, provide PngDashboard if you want the return type to be a PngDashboard. Optional, default is squirrels.Dashboard.

**Returns:** A Dashboard object, or a subclass of Dashboard (e.g., PngDashboard) based on the dashboard type specified by the `dashboard_type` argument

### close

Use this method to deliberately close any database connections opened by the SquirrelsProject object.

The database connections may still be opened again by other methods invoked on the SquirrelsProject object after this method is called.
