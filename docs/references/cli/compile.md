# sqrl compile

The `sqrl compile` command is used to facilitate testing of generated SQL queries from SQL templates and parameter selections.

All the details on command line arguments can be found using `sqrl compile --help` or `sqrl compile -h`. The result is as follows:

```bash
usage: sqrl compile [-h] (-d DATASET | -D) [-t TEST_SET | -T] [-s SELECT] [-r]

Create rendered SQL files in the folder "./target/compile"

options:
  -h, --help            Show this help message and exit
  -d DATASET, --dataset DATASET
                        Select dataset to use for dataset traits. Is required, unless using --all-datasets
  -D, --all-datasets    Compile models for all datasets. Only required if --dataset is not specified
  -t TEST_SET, --test-set TEST_SET
                        The selection test set to use. If not specified, default selections are used, unless using --all-test-sets
  -T, --all-test-sets   Compile models for all selection test sets
  -s SELECT, --select SELECT
                        Select single model to compile. If not specified, all models for the dataset are compiled. Ignored if using --all-datasets
  -r, --runquery        Runs all target models, and produce the results as csv files
```

Unless using the `-h` option, only one of `--dataset` and `--all-datasets` options (or `-d` and `-D` for short) can be specified, and both cannot be specified at the same time. Also, `--test-set` and `--all-test-sets` options (or `-t` and `-T` for short) cannot both be specified at the same time.

For each combination of dataset and test set being compiled for, the following files are produced:
- SQL files for the compiled SQL models
- A JSON file for the dictionary of placeholder names and values
- A PNG file for the lineage of the models
- If running with `--runquery` or `-r` option, CSV files for the result of the models

All files are written to some `target/compile/<dataset>/<test_set>/` folder (after deleting all pre-existing files in that folder). The folders created depends on the command options specified:
- If `--dataset` is specified, then the specified dataset is the name of the `<dataset>/` folder.
- If `--all-dataset` is specified, then a `<dataset>/` folder is created for every dataset. 
- If neither `--test-set` or `--all-test-sets` is specified, then the `<test_set>/` folder is simply the default test set for the dataset (typically called `default/` unless specified otherwise).
- If `--test-set` is specified, then the specified test set is the name of the `<test_set>/` folder
- If `--all-test-sets` is specified, then a `<test_set>/` folder is created for all test sets applicable to the dataset.

Also, if `--select` is specified (in addition to `--dataset`), the compiled query of the selected model is printed in terminal. The `<dataset>/` folder will only contain the compiled query of the selected model as well (without the upstream models). An exception to this is when `--runquery` is specified, since upstream model results must be created first in order to create the selected model result.

For more information on using selection test sets, see the "selection_test_sets" section of the [Squirrels Project File](../../docs/topics/project-file) page.
