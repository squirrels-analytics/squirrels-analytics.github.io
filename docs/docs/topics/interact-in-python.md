# Interacting with Squirrels in Python

You can interact with a Squirrels Project in Python (such as in a Jupyter Notebook or a Python script) by using the [SquirrelsProject] class from the squirrels library.

```python
from squirrels import SquirrelsProject

sqrl = SquirrelsProject(filepath="path/to/squirrels/project/")
```

The [SquirrelsProject] class takes an optional argument for the file path to the Squirrels project. If not provided, the current working directory is used.

From here, you can use the [SquirrelsProject] instance to call various methods such as retrieving a seed, dataset, or dashboard contained within the project.

After you are done with the project, you can choose to close it by calling the "close" method:

```python
sqrl.close()
```

This can be useful if you wish to close all the database connections opened by the project.

## Retrieving a Seed

The following example retrieves a seed called "seed_name" as a pandas DataFrame using the `seed` method. The seed name is the name of the csv file without the .csv extension.

```python
seed = sqrl.seed("seed_name")
```

## Retrieving a Dataset

The following example retrieves a dataset called "dataset_name" as a pandas DataFrame using the `dataset` method. The `dataset` method is an async method, so you must use the `await` keyword. 

```python
user = sqrl.User.Create("username", custom_attribute="custom_value")
dataset = await sqrl.dataset("dataset_name", selections={"param1": "option_id_1"}, user=user)
```

The `dataset` method takes optional arguments for parameter selections and user. 

For the `selections` argument, any parameter not specified in the dictionary of selections will use the default value of the parameter. If the `selections` argument is not provided, an empty dictionary is used. 

The `sqrl.User` is a direct reference to the User class defined in the [auth.py] file of the Squirrels project if it exists, or the default User class that comes with Squirrels. The `user` argument of the `dataset` method can take an instance of the User class which can be useful for datasets that require authentication or change behaviour based on the authenticated user. If the `user` argument is not provided, it will not authenticate with any user.

:::tip

A common use case for the `dataset` method is to call it in a Jupyter notebook to experiment with creating visualizations for [Squirrels dashboards](./dashboards).

:::

## Retrieving a Dashboard

The following example retrieves a dashboard called "dashboard_name" as a [squirrels.Dashboard] instance using the `dashboard` method. The `dashboard` method is an async method, so you must use the `await` keyword. 

```python
dashboard = await sqrl.dashboard("dashboard_name", dashboard_type=PngDashboard)
```

Just like the `dataset` method, the `dashboard` method also takes optional arguments for `selections` and `user`. This is not shown in the above example.

The `dashboard` method also takes an optional argument for `dashboard_type` to specify the dashboard class that the method returns (mainly useful for Python type hints). If not provided, the [squirrels.Dashboard] class is used.


[SquirrelsProject]: ../../references/python/project/SquirrelsProject
[squirrels.Dashboard]: ../../references/python/dashboards/Dashboard
[auth.py]: ./auth
