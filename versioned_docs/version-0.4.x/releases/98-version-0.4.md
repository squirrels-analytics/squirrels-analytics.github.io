# What's New in v0.4 (2024-10-06)

The following are changes and new features introduced in v0.4 of Squirrels when compared to v0.3.

Note that Squirrels Analytics is committed to minimizing breaking changes across major versions of the Squirrels library, except for the version compatibility project changes specified below. If you encounter any problems when upgrading, please raise an issue [here](https://github.com/squirrels-analytics/squirrels/issues).

## Project Changes for Version Compatibility

The filename "environcfg.yml" was deprecated in v0.3.1 and replaced with "env.yml" instead. As of v0.4.0, the "environcfg.yml" file is no longer supported. Any existing files named "environcfg.yml" must be renamed to "env.yml".

In addition, the "datasets catalog API" is now known as the "data catalog API" to include dashboards as well (See new feature "Dashboard APIs" below). Before v0.4.0, the endpoint use to be like this: 

`/squirrels-v0/{project_name}/v{major_version}/datasets`. 

Now, the endpoint is like this: 

`/squirrels-v0/{project_name}/v{major_version}/data-catalog`

## New Features

### Dashboard APIs

In addition to creating APIs for datasets, we now also support creating APIs for dashboards! Dashboards metadata can be configured in the [squirrels.yml] file for things like dashboard name and parameters used. The dashboard content is defined in Python files under the "dashboards" folder by creating them with your favourite data visualization library (such as matplotlib or plotly).

The [sqrl init] command has been enhanced to create an example dashboard as well.

See the [Dashboards](../docs/topics/dashboards) page for more details.

### Settings for Cache Size and TTL

Settings for "results.cache.size" and "results.cache.ttl_minutes" have been deprecated and replaced with new settings called "datasets.cache.size" and "datasets.cache.ttl_minutes" respectively. The old settings will continue to work, and the new settings will override the old ones if both are defined.

Settings for "dashboards.cache.size" and "dashboards.cache.ttl_minutes" have also been added.

See the [Settings](../docs/topics/settings) page for more details.

### SquirrelsProject Class in Python

You can now interact with the Squirrels project in Python by creating a [SquirrelsProject](../references/python/project/SquirrelsProject) object. This allows you to access the Squirrels project's datasets, dashboards, or other resources programmatically. This makes it easier to experiment with the Squirrels project in a Jupyter notebook or a Python script.

See the [Interact with Squirrels in Python](../docs/topics/interact-in-python) page for more details.

### CLI Options for File Logging

New CLI options have been added to all command to allow logging to a file. See [this page](../references/cli/sqrl) for more details.

### CLI Command for Getting Example Files

The [sqrl get-file] command has been introduced to get a single example file that is common for Squirrels projects. See the [sqrl get-file] page for more details.

### Changes to the `sqrl init` CLI

Due to the addition of the [sqrl get-file] command, the [sqrl init] command has been changed to always create a fully working Squirrels project.

For example, before v0.4.0, running `sqrl init --auth` meant only creating the `auth.py` file in the `pyconfigs/` folder. Now, it creates the full Squirrels project with the `auth.py` file.

See the [sqrl init] page for more details.

### Automatically Imported Jinja Macros for SQL Models

Before v0.4.0, you had to explicitly import Jinja macros in SQL models using [Jinja's import statement](https://ttl255.com/jinja2-tutorial-part-6-include-and-import/). Now, the Jinja macros can be called directly (in any SQL model) as long as they are in the `macros/` folder in a file with one of these extensions: `.sql`, `.j2`, `.jinja`, or `.jinja2`. 

See the "Using Custom Jinja Macros" section of the [SQL Models](../docs/topics/models-sql#using-custom-jinja-macros) page for more details.


[squirrels.yml]: ../docs/topics/project-file
[sqrl init]: ../references/cli/init
[sqrl get-file]: ../references/cli/get-file