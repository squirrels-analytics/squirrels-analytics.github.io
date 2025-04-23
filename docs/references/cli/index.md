# Command Line Interface

Squirrels provides a command-line interface (CLI) for managing your project. The CLI is accessed through the `sqrl` command.

## Available Commands

| Command | Description |
|---------|-------------|
| [new](./cli/new) | Create a new squirrels project |
| [get-file](./cli/get-file) | Get a sample file for the squirrels project |
| [deps](./cli/deps) | Load all packages specified in squirrels.yml |
| [build](./cli/build) | Build the virtual data environment |
| [compile](./cli/compile) | Create rendered SQL files |
| [run](./cli/run) | Run the API server |
| [duckdb](./cli/duckdb) | Run the duckdb command line tool |

## Common Options

All commands support the following common options:

| Option | Description |
|--------|-------------|
| `--log-level` | Level of logging to use (DEBUG, INFO, WARNING). Default is INFO |
| `--log-format` | Format of the log records (text, json). Default is text |
| `--log-file` | Name of log file to write to in the "logs/" folder. Default is "squirrels.log" |

## Getting Help

To see help for any command, use the `-h` or `--help` option:

```bash
sqrl -h  # Show general help
sqrl <command> -h  # Show help for specific command
```

## Version

To check the version of squirrels, use:

```bash
sqrl -V
``` 