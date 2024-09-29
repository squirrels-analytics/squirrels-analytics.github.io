# sqrl [...]

After pip installing Squirrels, the `sqrl` command can be used to run the Squirrels CLI.

Running `sqrl --help` or `sqrl -h` lets you see the available commands and options that are applicable to all commands.

```bash
usage: sqrl [-h] [-V] [--log-level {DEBUG,INFO,WARNING}] [--log-format {text,json}] [--log-file LOG_FILE] {init,get-file,deps,compile,run} ...

Command line utilities from the squirrels python package

options:
  -h, --help            Show this help message and exit
  -V, --version         Show the version and exit
  --log-level {DEBUG,INFO,WARNING}
                        Level of logging to use
  --log-format {text,json}
                        Format of the log records
  --log-file LOG_FILE   Name of log file to write to in the "logs/" folder. Default is squirrels.log. If name is empty, then file logging is disabled

commands:
  {init,get-file,deps,compile,run}
    init                Initialize a squirrels project
    get-file            Get a sample file for the squirrels project. If the file name already exists, it will be prefixed with a timestamp.
    deps                Load all packages specified in squirrels.yml (from git)
    compile             Create rendered SQL files in the folder "./target/compile"
    run                 Run the API server
```

For the logging levels, the scope of records logged is more for DEBUG, less for INFO, and even less for WARNING. For instance, using `sqrl --log-level DEBUG run` will log more information than using `sqrl --log-level INFO run`.

The format of the logged records can be either text or json. The default is text if it's not provided. Although the text format is more human-readable, the json format is easier for machines to read, which can be useful to integrate with other programs.
