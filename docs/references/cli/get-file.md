# sqrl get-file

The `sqrl get-file` command allows you to create individual file examples for common file types used in Squirrels projects.

When running `sqrl get-file -h`, you will see the following help text:

```bash
usage: sqrl get-file [-h] {env.yml,squirrels.yml,auth.py,connections.py,parameters.py,context.py,dbview_example,federate_example,dashboard_example,expenses.db,weather.db} ...

Get a sample file for the squirrels project. If the file name already exists, it will be prefixed with a timestamp.

options:
  -h, --help            Show this help message and exit

file_name:
  {env.yml,squirrels.yml,auth.py,connections.py,parameters.py,context.py,dbview_example,federate_example,dashboard_example,expenses.db,weather.db}
    env.yml             Get a sample env.yml file
    squirrels.yml       Get a sample squirrels.yml file
    auth.py             Get a sample auth.py file
    connections.py      Get a sample connections.py file
    parameters.py       Get a sample parameters.py file
    context.py          Get a sample context.py file
    dbview_example      Get a sample dbview model file
    federate_example    Get a sample federate model file
    dashboard_example   Get a sample dashboard file
    expenses.db         Get the sample SQLite database on expenses
    weather.db          Get the sample SQLite database on weather
```

The file names that include command line options are `squirrels.yml`, `dbview_example`, and `federate_example`. All other files do not have command line options.

Here is the help text when running `sqrl get-file squirrels.yml -h` file:

```bash
usage: sqrl get-file squirrels.yml [-h] [--no-connections] [--parameters] [--dashboards]

Get a sample squirrels.yml file

options:
  -h, --help        Show this help message and exit
  --no-connections  Exclude the connections section
  --parameters      Include the parameters section
  --dashboards      Include the dashboards section
```

And here is the help text when running `sqrl get-file dbview_example -h` file (same options for `federate_example`):

```bash
usage: sqrl get-file dbview_example [-h] [--format {sql,py}]

Get a sample dbview model file

options:
  -h, --help         Show this help message and exit
  --format {sql,py}  Create model as sql (default) or python file
```

See the CLI reference page for [sqrl init](./init) for more information on each file.
