# About squirrels.yml

The `squirrels.yml` file is the main configuration file for a Squirrels project. It defines the project's metadata, database connections, parameters, datasets, and other settings.

You can create a sample `squirrels.yml` file using the [sqrl get-file] command (with a time-based suffix if the file already exists).

```bash
sqrl get-file squirrels.yml
```

See `sqrl get-file squirrels.yml --help` for additional options (such as the sections to include or exclude from the file).

## Basic Structure

```yaml
project_variables:
  name: sample
  label: Sample Project - Expenses
  description: This is a sample squirrels project for analyzing expense transactions
  major_version: 1

packages:
  - git: https://github.com/owner/repo.git
    revision: v0.1.0
    directory: custom_name

connections:
  - name: default
    label: SQLite Expenses Database
    type: sqlalchemy
    uri: sqlite:///path/to/database.db

dataset_traits:
  - name: show_details
    default: false

datasets:
  - name: dbview_dataset_example
    label: Example Dataset from DBView Model
    description: Aggregated expense transactions by month using dbview_example model
    model: dbview_example
    scope: public
    parameters:
      - start_date
      - end_date
      - min_filter
      - max_filter
    traits: {}
    default_test_set: default

selection_test_sets:
  - name: no_auth_test1
    datasets:
      - dbview_dataset_example
    parameters:
      start_date: 2024-07-01
  
  - name: auth_test1
    datasets:
      - federate_dataset_example
    user_attributes:
      role: employee
    parameters:
      date_range: [2024-02-01,2024-12-01]
```

## Configuration Sections

### Project Variables

The `project_variables` section defines basic metadata about your project:

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes | The name of your project |
| `label` | string | No | A display name for your project. Defaults to `name` if not specified |
| `description` | string | No | A description of your project |
| `major_version` | integer | Yes | The major version number of your project |

### Packages

The `packages` section defines Git repositories to be used as dependencies as a list of objects. Each object has the following fields:

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `git` | string | Yes | The Git repository URL |
| `revision` | string | Yes | The Git revision (tag, branch, or commit hash) |
| `directory` | string | No | Custom directory name. Defaults to repository name |

See the [sqrl deps] page for more information on loading packages.

### Connections

The `connections` section defines database connections as a list of objects. Each object has the following fields:

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes | Unique identifier for the connection |
| `label` | string | No | Display name for the connection. Defaults to `name` if not specified |
| `type` | string | Yes | Connection type: `sqlalchemy`, `connectorx`, or `adbc` |
| `uri` | string | Yes | Database connection URI |
| `sa_create_engine_args` | object | No | Additional arguments for SQLAlchemy engine creation |

Connections can also be defined in the `pyconfigs/connections.py` file. See the [Connections] page for more information.

### Parameters

The `parameters` section defines widget parameters for datasets as a list of objects. Each object has the following fields:

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `type` | string | Yes | Parameter type (e.g., `SingleSelectParameter`) |
| `factory` | string | Yes | Factory method to create the parameter |
| `arguments` | object | Yes | Arguments for the factory method of the parameter type |

The `arguments` object is specific to the `type` and `factory` values. Parameters can also be defined in the `pyconfigs/parameters.py` file (the preferred method). See the [Widget Parameters] page for more information.

### Selection Test Sets

The `selection_test_sets` section defines test configurations as a list of objects. Each object has the following fields:

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes | Unique identifier for the test set |
| `datasets` | array | No | List of datasets this test set can be applied to |
| `user_attributes` | object | No | User attributes for testing. Including this field (even if empty) means authentication is applied, which is needed for non-public datasets. The `is_admin` attribute must be true to access private datasets |
| `parameters` | object | No | Default parameter values |

See the [sqrl compile] page for more information on using test sets.

### Dataset Traits

The `dataset_traits` section defines traits that can be applied to datasets as a list of objects. Each object has the following fields:

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes | Unique identifier for the trait |
| `default` | any | Yes | Default value for the trait |

If the name is not applied to the `traits` field of a dataset, then the default value will be used.

### Datasets

The `datasets` section defines the available datasets as a list of objects. Each object has the following fields:

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes | Unique identifier for the dataset |
| `label` | string | No | Display name. Defaults to `name` if not specified |
| `description` | string | No | Description of the dataset |
| `model` | string | No | Name of the model to use. Defaults to `name` if not specified |
| `scope` | string | No | Access scope: `public`, `protected`, or `private`. Defaults to `public` |
| `parameters` | array | No | List of parameter names used by the dataset |
| `traits` | object | No | Dataset-specific trait values |
| `default_test_set` | string | No | Default test set to use for [sqrl compile] if not specified by the command. Defaults to the "globally default" test set name (usually called `default`) |

## Referencing Environment Variables

The `squirrels.yml` file supports environment variable substitution using Jinja2 syntax:

```yaml
connections:
  default:
    uri: {{ env_vars.DATABASE_URI }}
```

See the [Environment Variables] page for defining environment variables.

## Notes

- All names (packages, connections, parameters, test sets, traits, datasets) must be unique within their respective sections
- Environment variables can be used for sensitive information
- The "globally default" test set name is defined by the `SQRL_TEST_SETS__DEFAULT_NAME_USED` environment variable (usually called `default`)
- If a source or dbview model does not specify a connection, then the default connection used is configured by the `SQRL_CONNECTIONS__DEFAULT_NAME_USED` environment variable (usually called `default`)
- Comments can be added using the `#` symbol


[sqrl get-file]: ../../references/cli/get-file
[sqrl deps]: ../../references/cli/deps
[sqrl compile]: ../../references/cli/compile
[Connections]: ./connections
[Widget Parameters]: ./parameters
[Environment Variables]: ./environment