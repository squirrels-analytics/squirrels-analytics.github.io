# sqrl init

The `sqrl init` command is used to set up a new Squirrels project. When used, it will populate the current directory with a barebones Squirrels project, where the files added depend on the user's preference. By default, the files created will not overwrite files that already exist. Instead, each file whose name already exists will be created with a timestamp added to the new file name, or skipped if the existing file is identical. This behaviour can be changed by using the `--overwrite` or `-o` option.

When executing the command without addition options (other than `-o` if desired), the user would be able to specify which files should be initialized by answering the following prompts:

- **How would you like to configure the database connections? (yml/py)**
- **How would you like to configure the parameters? (py/yml)**
- **What's the file format for the database view model? (sql/py)**
- **What's the file format for the federated model? (sql/py)**
- **Do you want to include a dashboard example? (y/N)**
- **Do you want to add the 'auth.py' file? (y/N)**

The core files include:

- `squirrels.yml`, `env.yml`, and `.gitignore` files in the project root
- A `dbview_example.sql` or `dbview_example.py` file in `models/dbviews/` folder based on the file format specified (question 3)
- A `federate_example.sql` or `federate_example.py` file in the `models/federates/` folder based on the file format specified (question 4)
- `seed_categories.csv` and `seed_subcategories.csv` in the `seeds` folder
- In the `pyconfigs/` folder:
    - A `context.py` file
    - A `connections.py` file if `py` was specified for database connections (question 1)
    - A `parameters.py` file if `py` was specified for parameters (question 2)
    - A `auth.py` file if `y` was specified for adding 'auth.py' (question 6)
- A `dashboard_example.py` file in the `dashboards/` folder if `y` was specified for dashboard example (question 5)
- An `expenses.db` file in the `assets/` folder

Below is a description of these files.

|File|Description|
|:---|:----------|
|`squirrels.yml`|The project-level configurations for any Squirrels project. See [Squirrels Project File](../../docs/topics/project-file) for more details.|
|`env.yml`|Includes variables specific to the environment (secrets, credentials, etc.). See [Environment Configuration File](../../docs/topics/environcfg) for more details.|
|`pyconfigs/connections.py`|Database connections can be defined here if preferred to do so in Python instead of in `squirrels.yml`. See [Database Connections](../../docs/topics/connections) for more details.|
|`pyconfigs/parameters.py`|Parameter widgets (for making data analytics **dynamic**) are defined here. Alternatively, they can be defined in `squirrels.yml`, though it can be more verbose. See [Widget Parameters](../../docs/topics/parameters) for more details.|
|`pyconfigs/context.py`|The place to define meaningful variables in Python (derived from parameter selections, dataset traits, etc.) which can then be used to change behaviour of models. See the [Context File](../../docs/topics/context) for more details.|
|`pyconfigs/auth.py`|If authentication is involved, the user model and authentication function is defined here. See [Authentication](../../docs/topics/auth) for more details.|
|`models/dbviews/*`|SQL Jinja templates or Python files that define dynamic views of external database(s). See [SQL Models](../../docs/topics/models-sql) or [Python Models](../../docs/topics/models-python) for more details.|
|`models/federates/*`|SQL Jinja templates or Python files that define dynamic tables/views that may depend on other models. These tables/views are written to a temporary database embedded in server memory. See [SQL Models](../../docs/topics/models-sql) or [Python Models](../../docs/topics/models-python) for more details.|
|`seeds/*`|CSV files that can be used as lookup tables for parameters or models.|
|`dashboards/*`|Python files for dashboard contents. See [Dashboards](../../docs/topics/dashboards) for more details.|
|`assets/expenses.db`|A sample SQLite database on expenses that the dbview models query. In most real-life projects, this database would not be stored within the Squirrels project.|

Further usage details can be found by running `sqrl init --help` or `sqrl init -h` which prints the text below. The user can also choose which files to include through command line options without using the prompts above. All command line options below except for `-h` and `-o` disables the prompts.

```bash
usage: sqrl init [-h] [-o] [--core] [--connections {yml,py}] [--parameters {yml,py}] [--dbview {sql,py}] [--federate {sql,py}] [--dashboard]
                 [--auth]

Initialize a squirrels project

options:
  -h, --help            Show this help message and exit
  -o, --overwrite       Overwrite files that already exist
  --core                Include all core files
  --connections {yml,py}
                        Configure database connections as yaml (default) or python
  --parameters {yml,py}
                        Configure parameters as python (default) or yaml
  --dbview {sql,py}     Create database view model as sql (default) or python file
  --federate {sql,py}   Create federated model as sql (default) or python file
  --dashboard           Include a sample dashboard file
  --auth                Include the auth.py file
```

Note that the `--core` option simply omits the prompts while leaving the other options as the default. So for instance, the following two commands do the same thing since yaml is already the default format for database connections.

```bash
sqrl init --core
```

```bash
sqrl init --connections yml
```