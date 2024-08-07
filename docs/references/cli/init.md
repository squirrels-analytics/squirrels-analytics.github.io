# sqrl init

The `sqrl init` command is used to set up a new Squirrels project, or add files to an existing one. When used, it will populate the current directory with a barebones version of a Squirrels project, where the files added depend on the user's preference. By default, the files created will not overwrite files that already exist. This behaviour can be changed by using the `--overwrite` or `-o` option.

After executing the command, the user would be able to specify which files should be initialized by answering the following prompts:

- **Include all core project files? (Y/n)**
    - If `Y` or `y` is entered, the following will also be asked:
        - **How would you like to configure the database connections? (yml/py)**
        - **How would you like to configure the parameters? (py/yml)**
        - **What's the file format for the database view model? (sql/py)**
        - **What's the file format for the federated model? (sql/py)**
- **Do you want to add the 'auth.py' file? (y/N)**
- **What sample sqlite database do you wish to use (if any)? (expenses/weather/none)**

The core files include:

- `squirrels.yml`, `env.yml`, and `.gitignore` files in the project root
- A `database_view1.sql` or `database_view1.py` file in `models/dbviews/` folder
- A `dataset_example.sql` or `dataset_example.py` file in the `models/federates/` folder
- `seed_categories.csv` and `seed_subcategories.csv` in the `seeds` folder
- In the `pyconfigs/` folder
    - A `connections.py` file if `py` was specified for database connections
    - A `parameters.py` file if `py` was specified for parameters
    - A `context.py` file

Additional prompts are also provided to inquire whether certain files (such as `pyconfigs/auth.py`) are needed. Below is a description of files specific to a Squirrels project.

|File|Description|
|:---|:----------|
|`squirrels.yml`|The project-level configurations for any Squirrels project. See [Squirrels Project File](../../docs/topics/project-file) for more details.|
|`env.yml`|Includes variables specific to the environment (secrets, credentials, etc.). See [Environment Configuration File](../../docs/topics/environcfg) for more details.|
|`pyconfigs/connections.py`|Database connections can be defined here if preferred to do so in Python instead of in `squirrels.yml`. See [Database Connections](../../docs/topics/database) for more details.|
|`pyconfigs/parameters.py`|Parameter widgets (for making data analytics **dynamic**) are defined here. Alternatively, they can be defined in `squirrels.yml`, though it can be more verbose. See [Widget Parameters](../../docs/topics/parameters) for more details.|
|`pyconfigs/context.py`|The place to define meaningful variables in Python (derived from parameter selections, dataset traits, etc.) which can then be used to change behaviour of models. See the [Context File](../../docs/topics/context) for more details.|
|`pyconfigs/auth.py`|If authentication is involved, the user model and authentication function is defined here. See [Authentication](../../docs/topics/auth) for more details.|
|`models/dbviews/*`|SQL Jinja templates or Python files that define dynamic views of external database(s). See [SQL Models](../../docs/topics/models-sql) or [Python Models](../../docs/topics/models-python) for more details.|
|`models/federates/*`|SQL Jinja templates or Python files that define dynamic tables/views that may depend on other models. These tables/views are written to a temporary database embedded in server memory. See [SQL Models](../../docs/topics/models-sql) or [Python Models](../../docs/topics/models-python) for more details.|
|`seeds/*`|CSV files that can be used as lookup tables for parameters or models.|

Further usage details can be found by running `sqrl init --help` or `sqrl init -h` which prints the text below. The user can also choose which files to include through command line options without using the prompts above. All command line options below except for `-h` and `-o` disables the prompts.

```bash
usage: sqrl init [-h] [-o] [--core] [--connections {yml,py}] [--parameters {yml,py}] [--dbview {sql,py}] [--federate {sql,py}] [--auth]
                 [--sample-db {expenses,weather,none}]

optional arguments:
  -h, --help            Show this help message and exit
  -o, --overwrite       Overwrite files that already exist
  --core                Include all core files
  --connections {yml,py}
                        Configure database connections as yaml (default) or python. Ignored if "--core" is not specified
  --parameters {yml,py}
                        Configure parameters as python (default) or yaml. Ignored if "--core" is not specified
  --dbview {sql,py}     Create database view model as sql (default) or python file. Ignored if "--core" is not specified
  --federate {sql,py}   Create federated model as sql (default) or python file. Ignored if "--core" is not specified
  --auth                Include the auth.py file
  --sample-db {expenses,weather,none}
                        Sample sqlite database to include
```
