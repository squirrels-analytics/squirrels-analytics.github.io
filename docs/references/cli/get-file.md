# sqrl get-file

The `get-file` command retrieves sample files for your Squirrels project. If the file already exists, it will be suffixed with a timestamp.

## Usage

```bash
sqrl get-file <file_name> [options]
```

## Available Files

| File Name | Description |
|-----------|-------------|
| `.env` | Get sample `.env` and `.env.example` files |
| `.gitignore` | Get a sample `.gitignore` file |
| `squirrels.yml` | Get a sample `squirrels.yml` file |
| `user.py` | Get a sample `user.py` file |
| `connections.py` | Get a sample `connections.py` file |
| `parameters.py` | Get a sample `parameters.py` file |
| `context.py` | Get a sample `context.py` file |
| `macros_example.sql` | Get a sample `macros_example.sql` file |
| `sources.yml` | Get a sample `sources.yml` file |
| `build_example` | Get a sample build model file |
| `dbview_example` | Get a sample dbview model file |
| `federate_example` | Get a sample federate model file |
| `dashboard_example` | Get a sample dashboard file |
| `expenses.db` | Get the sample SQLite database on expenses |
| `weather.db` | Get the sample SQLite database on weather |
| `seed_categories` | Get the sample seed files for categories lookup |
| `seed_subcategories` | Get the sample seed files for subcategories lookup |

## Options

| Option | Description |
|--------|-------------|
| `--format {sql,py}` | Create model as sql (default) or python file. Only applicable for build and federate model files |
| `--no-connections` | Exclude the connections section from squirrels.yml |
| `--parameters` | Include the parameters section in squirrels.yml |
| `--dashboards` | Include the dashboards section in squirrels.yml |

## Examples

Get sample `.env` and `.env.example` files:
```bash
sqrl get-file .env
```

Get a sample build model in Python:
```bash
sqrl get-file build_example --format py
```

Get a sample `squirrels.yml` with parameters section:
```bash
sqrl get-file squirrels.yml --parameters
```

## Notes

- If a file already exists, a new file will be created with a timestamp suffix
- The `.env` file contains sensitive information and should not be committed to version control
- Build and federate model files can be created in either SQL or Python format (dbview models are always SQL)
- Getting a sample file can be useful to enhance existing projects with new file types