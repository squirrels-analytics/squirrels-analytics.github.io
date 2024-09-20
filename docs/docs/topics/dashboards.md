# Dashboards

With Squirrels, you can create visualization dashboards from your datasets and serve them as API endpoints with parameters.

You can use the [sqrl init] command to create an example dashboard from an empty project:

```bash
sqrl init --core --dashboard
```

This creates a "dashboards" section in [squirrels.yml] and a "dashboard_example.py" file in the "dashboards" folder.

Or, run this to create the sample "dashboard_example.py" file in an existing project:

```bash
sqrl init --dashboard
```

However, this approach does not add the "dashboards" section in [squirrels.yml]. Fortunately, this is straightforward to add yourself. See the "dashboards" section in the [Squirrels Project File](./project-file) page for more details.

## Creating Dashboards in Python

The contents of dashboards are Python files under the "dashboards" folder in the Squirrels project. The name of the Python file must match the name of the dashboard defined in [squirrels.yml].

The main ideas are simple. In the main function of the Python file, you:
1. Use the `sqrl.dataset` function to retrieve dataset(s) as a pandas DataFrame(s).
2. Create plots from the dataset(s) as either a matplotlib figure, bytes/bytes buffer for a PNG image, or string/string buffer for an HTML representation.
3. Return the plots as an instance of one of the Dashboard classes from `squirrels.dashboards`. For example, a [PngDashboard] can be constructed by passing either a matplotlib figure or bytes/bytes buffer as the only argument, or an [HtmlDashboard] can be constructed by passing either a string/string buffer as the only argument.

Below is a simple example of what a dashboard Python file can look like:

```python
from squirrels import DashboardArgs, dashboards as d
from matplotlib import pyplot as plt

async def main(sqrl: DashboardArgs) -> d.PngDashboard:
    df = await sqrl.dataset("dataset_example")

    fig, ax = plt.subplots()

    df.plot(x="col1", y="col2", ax=ax)

    return d.PngDashboard(fig)
```

Although this example uses matplotlib as the Python graphing library, you can use any library you like, as long as the graphs can be converted to a PNG image or HTML string. For instance, you can use the plotly library (which would require you to pip install plotly) to create interactive HTML graphs. Example code is provided below for illustration purposes:

```python
from squirrels import DashboardArgs, dashboards as d
import plotly.express as px, io

async def main(sqrl: DashboardArgs) -> d.HtmlDashboard:
    df = await sqrl.dataset("dataset_example")

    fig = px.scatter(df, x="col1", y="col2")

    buffer = io.StringIO()
    fig.write_html(buffer)

    return d.HtmlDashboard(buffer)
```

Similarly, the last few lines can be changed as such to return a PNG image instead:

```python
...
async def main(sqrl: DashboardArgs) -> d.PngDashboard:
    ...
    buffer = io.BytesIO()
    fig.write_image(buffer, format="png")

    return d.PngDashboard(buffer)
```

:::important

Always set the return type of the main function appropriately!

Squirrels uses the signature of the main function to determine the output format of the dashboard (i.e. PNG, HTML, etc.). This format is provided in the output of the data catalog API such that the front-end client knows what to expect and how to render the dashboard.

:::

:::tip

It is often easier to experiment in a Jupyter notebook first (to create a static dashboard) before moving the code to a dashboard Python file to create a dynamic dashboard. See [Interacting with Squirrels in Python](./interact-in-python) for more details.

:::

### More information on `sqrl.dataset` function

The `sqrl.dataset` function is analogous to using the REST API to retrieve a dataset, except that is returns a pandas DataFrame instead of JSON. It is an asynchronous function so it must be called with the `await` keyword (or handled with methods that deal with Python async functions).

The `sqrl.dataset` function takes an optional keyword argument for **fixed_parameters**. This is a dictionary of parameter names to selected ID(s), similar to how you would use the dataset result REST API query parameters to specify specific parameter selections.

In addition, parameters can be made available to the dashboard for real-time parameter selections as well by configuring it in the [squirrels.yml] file. Squirrels will automatically pass down the real-time selections (and authenticated user) to the datasets without having to refer to the parameters in the dashboard Python file. 

If a parameter selection is specified through both the real-time selections and fixed parameters, the fixed parameters take precedence. Any parameter values used by the dataset that are not specified in either real-time selections or fixed parameters simply uses the default value of the parameter.

As an example, you can construct a dashboard that calls `sqrl.dataset` twice on the same dataset but with different fixed parameters. For instance, the "sqrl init" command creates a dashboard that looks like this:

```python
from squirrels import DashboardArgs, dashboards as d
from matplotlib import pyplot as plt, figure as f, axes as a

async def main(sqrl: DashboardArgs) -> d.PngDashboard:
    spending_by_month_df = await sqrl.dataset("dataset_example", fixed_parameters={"group_by": "g4"})
    spending_by_subcategory_df = await sqrl.dataset("dataset_example", fixed_parameters={"group_by": "g3"})

    # Create a figure with two subplots
    fig, (ax0, ax1) = plt.subplots(2, 1, figsize=(8, 8), height_ratios=(1, 2))
    fig: f.Figure; ax0: a.Axes; ax1: a.Axes
    fig.tight_layout(pad=4, h_pad=6)

    # Create a bar chart of spending by month
    spending_by_month_df.sort_values("month").plot(x="month", y="total_amount", ax=ax0)
    ax0.set_title("Spending by Month")

    # Create a pie chart of spending by subcategory
    df_by_subcategory = spending_by_subcategory_df.set_index("subcategory").sort_values("total_amount", ascending=False)
    autopct = lambda pct: ('%.1f%%' % pct) if pct > 6 else ''
    df_by_subcategory.plot(y="total_amount", kind='pie', ax=ax1, autopct=autopct, legend=False, ylabel="")
    ax1.set_title("Spending by Subcategory")
    
    return d.PngDashboard(fig)
```

In this example, both `spending_by_month_df` and `spending_by_subcategory_df` are pandas DataFrames of the `dataset_example` dataset which changes results dynamically based on the parameter selections for "start_date", "end_date", and the "category" filter. However, `spending_by_month_df` is grouped by "Month" (the value of ID "g4") and `spending_by_subcategory_df` is grouped by "Subcategory" (the value of ID "g3").


[squirrels.yml]: ./project-file
[PngDashboard]: ../../references/python/dashboards/PngDashboard
[HtmlDashboard]: ../../references/python/dashboards/HtmlDashboard
