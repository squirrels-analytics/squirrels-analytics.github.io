# Environment Variables

Squirrels projects use environment variables for specific settings and sensitive information. The environment variable names of Squirrels settings are always prefixed with `SQRL_`. These variables can be set in the `.env` file, the `.env.local` file, or in the system environment.

You can create a sample `.env` and `.env.example` files using the [sqrl get-file] command.

```bash
sqrl get-file .env
```

The following are more details on the environment variables that are used as Squirrels settings.

## Authentication Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `SQRL_SECRET__KEY` | Secret key used for JWT token generation | Required if authentication features are desired |
| `SQRL_SECRET__ADMIN_PASSWORD` | Password for the admin user | Required if authentication features are desired |
| `SQRL_AUTH__DB_FILE_PATH` | Path to the SQLite database file for authentication | `target/auth.sqlite` |
| `SQRL_AUTH__TOKEN_EXPIRE_MINUTES` | JWT token expiration time in minutes | `30` |

## Cache Configuration

| Variable | Description | Default |
|----------|-------------|---------|
| `SQRL_PARAMETERS__CACHE_SIZE` | Maximum number of parameter values to cache | `1024` |
| `SQRL_PARAMETERS__CACHE_TTL_MINUTES` | Time-to-live for parameter cache in minutes | `60` |
| `SQRL_DATASETS__CACHE_SIZE` | Maximum number of dataset results to cache | `128` |
| `SQRL_DATASETS__CACHE_TTL_MINUTES` | Time-to-live for dataset cache in minutes | `60` |
| `SQRL_DASHBOARDS__CACHE_SIZE` | Maximum number of dashboard results to cache | `128` |
| `SQRL_DASHBOARDS__CACHE_TTL_MINUTES` | Time-to-live for dashboard cache in minutes | `60` |

## Database and Seeds

| Variable | Description | Default |
|----------|-------------|---------|
| `SQRL_SEEDS__INFER_SCHEMA` | Whether to infer schema from seed data (either "true" or "false") | `true` |
| `SQRL_SEEDS__NA_VALUES` | List of values to treat as null values as a JSON array | `["NA"]` |
| `SQRL_CONNECTIONS__DEFAULT_NAME_USED` | Default connection name to use for source and dbview models that do not specify a connection | `default` |
| `SQRL_DUCKDB_VENV__DB_FILE_PATH` | Path to the DuckDB database file for the virtual data environment | `target/venv.duckdb` |

## Test Sets

| Variable | Description | Default |
|----------|-------------|---------|
| `SQRL_TEST_SETS__DEFAULT_NAME_USED` | Default test set name to use | `default` |

## Usage in Configuration Files

Environment variables can be used in the [squirrels.yml] file using Jinja2 syntax:

```yaml
connections:
  - name: default
    type: sqlalchemy
    uri: {{ env_vars.SQLITE_URI }}
```

## Setting Environment Variables

### Using .env Files

Create a `.env` file in your project root:

```bash
SQRL_SECRET__KEY=your-secret-key
SQRL_SECRET__ADMIN_PASSWORD=your-admin-password
SQLITE_URI=sqlite:///path/to/database.db
```

For local development, you can create a `.env.local` file that overrides values from `.env`.

## Security Best Practices

1. Do not commit `.env` files that contain sensitive information to version control
2. Use strong, randomly generated values for secret keys and passwords
3. Keep different environment variable sets for development, staging, and production
4. Use `.env.local` for local development overrides

## Notes

- Environment variables are case-sensitive
- Double underscores (`__`) are used to separate sections in variable names
- All cache-related variables accept integer values
- Time-related variables (TTL, expiration) accept integer values in minutes
- Use a `.env.example` file to share the environment variables that the project requires with others


[sqrl get-file]: ../../references/cli/get-file