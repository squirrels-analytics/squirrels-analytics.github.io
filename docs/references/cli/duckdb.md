# sqrl duckdb

The `duckdb` command runs the DuckDB command-line interface (CLI) to interact with your project's embedded database. You must have [DuckDB installed](https://duckdb.org/docs/installation) on your system to use this command.

## Usage

```bash
sqrl duckdb [options]
```

## Options

| Option | Description |
|--------|-------------|
| `--ui` | Run the DuckDB local UI in the web browser in addition to the CLI |

## Description

This command:
1. Locates your project's DuckDB database file
2. Launches the DuckDB CLI and/or UI
3. Allows you to interact with your DuckDB database directly

## Examples

Start the DuckDB CLI:
```bash
sqrl duckdb
```

Start the DuckDB UI:
```bash
sqrl duckdb --ui
```

## DuckDB Commands

Once in the DuckDB CLI, you can use standard SQL commands and DuckDB-specific commands:

```sql
-- List all tables
SHOW TABLES;

-- Describe a table
DESCRIBE table_name;

-- Query data
SELECT * FROM table_name;

-- Exit the CLI
.exit
```

## Notes

- The DuckDB database file is located in the `target` directory by default
- The CLI provides direct access to your project's data
- The UI offers a more user-friendly interface for exploring data
- You can use standard SQL to query your data
- The database is read-only to prevent accidental modifications
- The CLI is useful for debugging and data exploration
- Make sure DuckDB is installed on your system to use this command 