# sqrl build

The `build` command builds the virtual data environment (with DuckDB) for your project. This command processes all static models (seeds, sources, and builds) and creates the necessary tables in a DuckDB database file.

## Usage

```bash
sqrl build [options]
```

## Options

| Option | Description |
|--------|-------------|
| `-f, --full-refresh` | Drop all tables before building |
| `-s, --select` | Select one static model to build. If not specified, all models are built |
| `--stage` | If the production venv file is in use, stage the duckdb file to replace the production file later |

## Description

The build command:
1. Processes all seed data files
2. Connects to source databases and extracts sources (if its load_to_duckdb value is true)
3. Executes build models to create static tables
4. Stores all data in the DuckDB database

## Examples

Build all models:
```bash
sqrl build
```

Build with full refresh:
```bash
sqrl build --full-refresh
```

Build a specific model:
```bash
sqrl build --select my_model
```

Stage a new build while the current one is in use:
```bash
sqrl build --stage
```

## Notes

- The build process creates a DuckDB database file in the `target` directory
- Build models are executed in dependency order
- The build process can be time-consuming for large datasets
- The resulting DuckDB database may be used by dbview and federate models 