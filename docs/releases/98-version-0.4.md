# What's New in v0.4 (TBD)

The following are changes and new features introduced in v0.4 of Squirrels when compared to v0.3.

Note that Squirrels Analytics is committed to minimizing breaking changes across major versions of the Squirrels library, except for the version compatibility project changes specified below. If you encounter any problems when upgrading, please raise an issue [here](https://github.com/squirrels-analytics/squirrels/issues).

## Project Changes for Version Compatibility

The filename "environcfg.yml" was deprecated in v0.3.1 and replaced with "env.yml" instead. As of v0.4.0, the "environcfg.yml" file is no longer supported. Any existing files named "environcfg.yml" must be renamed to "env.yml".

## New Features

### Dashboard APIs

In addition to creating APIs for datasets, we now also support creating APIs for dashboards! Dashboards metadata can be configured in the [squirrels.yml] file for things like dashboard name and parameters used. The dashboard content is defined in Python files under the "dashboards" folder by creating them with your favourite data visualization library (such as matplotlib or plotly).

The [sqrl init] command has been enhanced to create an example dashboard as well.

See the [Dashboards](../docs/topics/dashboards) page for more details.

### Settings for Cache Size and TTL

Settings for "results.cache.size" and "results.cache.ttl_minutes" have been deprecated and replaced with new settings called "datasets.cache.size" and "datasets.cache.ttl_minutes" respectively. The old settings will continue to work, and the new settings will override the old ones if both are defined.

Settings for "dashboards.cache.size" and "dashboards.cache.ttl_minutes" have also been added.

See the [Settings](../docs/topics/settings) page for more details.


[squirrels.yml]: ../docs/topics/project-file
[sqrl init]: ../references/cli/init