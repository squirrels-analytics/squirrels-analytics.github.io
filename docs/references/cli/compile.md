# sqrl compile

The `compile` command creates rendered SQL files in the `./target/compile` folder. This command is useful for debugging and understanding how your models are transformed into SQL queries.

## Usage

```bash
sqrl compile [options]
```

## Options

| Option | Description |
|--------|-------------|
| `-d, --dataset` | Select dataset to use for dataset traits. Required unless using `--all-datasets` |
| `-D, --all-datasets` | Compile models for all datasets |
| `-t, --test-set` | The selection test set to use. If not specified, default selections are used |
| `-T, --all-test-sets` | Compile models for all selection test sets |
| `-s, --select` | Select a single model to compile. If not specified, all models for the dataset are compiled |
| `-r, --runquery` | Runs all applicable models and produce the results as CSV files |

## Description

The compile command:
1. Reads the specified dataset configuration
2. Applies the selected test set parameters
3. Renders all SQL templates with the parameter values
4. Saves the rendered SQL to files in the `target/compile` directory
5. Optionally executes the queries and saves results as CSV files

## Examples

Compile a specific dataset:
```bash
sqrl compile --dataset my_dataset
```

Compile with a specific test set:
```bash
sqrl compile --dataset my_dataset --test-set my_test_set
```

Compile all datasets and test sets:
```bash
sqrl compile --all-datasets --all-test-sets
```

Compile and run queries:
```bash
sqrl compile --dataset my_dataset --runquery
```

## Notes

- The compiled SQL files are saved in the `target/compile` directory
- Each subfolder is named according to the dataset and test set used
- Test sets are defined in the `squirrels.yml` file
- The compile command is useful for debugging and understanding query generation