# Creating a new project

Once you have the Squirrels Python library installed (see [Installation](./install) page if not), you can use the [sqrl new] command to create a new Squirrels project.

## How to use the "sqrl new" command

The sections below provide two options for using the [sqrl new] command.

### Option 1: Use default options (recommended for newcomers)

Use the following command to set up the Squirrels project in the current directory without going through any interactive prompts.

```bash
sqrl new --curr-dir --use-defaults
```

:::note

In most cases, creating an empty directory first allows you to set your virtual environment in the directory for installing Squirrels before running the command above.

However, if you wish to create a new folder for your project, you can specify a positional argument for the folder name instead of using the `--curr-dir` option.

```bash
sqrl new my-project-folder --use-defaults
```

:::

### Option 2: Use interactive prompts to set up with custom options

Run the following to customize the components or file formats you wish to include in your new project.

```bash
sqrl new
```

This will provide input prompts to answer before the project is set up. This is useful for those who have experience with Squirrels projects and understand what the prompts are asking. Command line options can also be used in place of prompts. See the [sqrl new] page for more details.


[sqrl new]: ../../references/cli/new