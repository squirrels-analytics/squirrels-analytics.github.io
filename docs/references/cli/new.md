# sqrl new

The `new` command creates a new Squirrels project with a basic structure and sample files.

## Usage

```bash
sqrl new [name] [options]
```

## Arguments

| Argument | Description |
|----------|-------------|
| `name` | The name of the project folder to create. Ignored if `--curr-dir` is used |

## Options

| Option | Description |
|--------|-------------|
| `--curr-dir` | Create the project in the current directory |
| `--use-defaults` | Use default values for unspecified options (except project folder name) instead of prompting for input |
| `--connections` | Configure database connections as yaml (default) or python |
| `--parameters` | Configure parameters as python (default) or yaml |
| `--build` | Create build model as sql (default) or python file |
| `--federate` | Create federated model as sql (default) or python file |
| `--dashboard` | Include (y) or exclude (n, default) a sample dashboard file |
| `--admin-password` | The password for the admin user. If `--use-defaults` is used, then a random password is generated |

## Examples

Create a new project folder named "my-project" and answer input prompts for setup:
```bash
sqrl new my-project
```

Create a project in the current directory:
```bash
sqrl new --curr-dir
```

Create a new project folder named "my-project" with Python-based parameters and SQL-based build model:
```bash
sqrl new my-project --parameters py --build sql
```

Create a project folder named "my-project" using default settings instead of prompting for input:
```bash
sqrl new my-project --use-defaults
```

## Generated Files

The command creates the following files and directories:

- `squirrels.yml` - Project configuration file
- `.env` and `.env.example` - Environment variable files
- `.gitignore` - Git ignore file
- `models/` - Directory for data models
- `pyconfigs/` - Directory for Python configuration files
- `seeds/` - Directory for seed data
- `macros/` - Directory for Jinja macros
- `dashboards/` - Directory for dashboard configurations (if enabled)
- Sample model files and configurations

## Notes

- If no options are specified, the command will prompt for input
- The `--use-defaults` option can be used to skip all prompts
- The generated `.env` file contains sensitive information and should not be committed to version control
- The project structure can be customized after creation by adding or modifying files 