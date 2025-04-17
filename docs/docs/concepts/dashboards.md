# Dashboards

Dashboards in the Squirrels framework allow you to create visual representations of your data analysis. They can be configured to display data in various formats, such as PNG images or HTML content.

## Creating a Dashboard

To create a dashboard, follow these steps:

1. Create a Python file in the `dashboards` folder with a `main` function that returns a Dashboard object. The name of the file becomes the name of the dashboard
2. Optionally, create a corresponding YAML configuration file with the same name

### Dashboard Python File

The Python file should contain an async `main` function that:
- Takes a `DashboardArgs` parameter
- Returns a Dashboard object (either `PngDashboard` or `HtmlDashboard`)
  - The constructor for `PngDashboard` takes either a matplotlib.figure.Figure object or bytes / io.BytesIO object containing the PNG image
  - The constructor for `HtmlDashboard` takes a string / io.StringIO object containing the HTML content
- **Important**: The return type of your `main` function must match the `format` specified in the YAML configuration file

You can use any Python visualization library to create your dashboards, including:
- Matplotlib
- Plotly
- Seaborn
- Bokeh
- Any other library that can generate visual output

```python
from squirrels import DashboardArgs, dashboards as d
from matplotlib import pyplot as plt

async def main(sqrl: DashboardArgs) -> d.PngDashboard:
    # Fetch data from datasets
    data = await sqrl.dataset("your_dataset_name", fixed_parameters={"param": "value"})
    
    # Create visualization
    fig, ax = plt.subplots(figsize=(8, 6))
    # ... create your visualization ...
    
    # Return as dashboard
    return d.PngDashboard(fig)
```

### Dashboard Configuration (YAML)

The YAML configuration file defines metadata and dependencies for your dashboard:

```yaml
label: Human-readable dashboard name

description: Detailed description of what the dashboard shows

scope: private|protected|public

format: png|html  # Must match the return type of your main function (PngDashboard or HtmlDashboard)

parameters:
  - param1
  - param2

depends_on:
  - name: dependency_name
    dataset: dataset_name
    fixed_parameters:
      - param_name: param_value
```

The `parameters` field is for parameters that end users can interact with, while the `fixed_parameters` field is for parameter selections that are fixed for specific dependencies / charts in the dashboard.

## Dashboard Formats

Squirrels supports two dashboard formats:

### PNG Dashboards

PNG dashboards can be created using Matplotlib figures directly:

```python
from squirrels import DashboardArgs, dashboards as d
from matplotlib import pyplot as plt

async def main(sqrl: DashboardArgs) -> d.PngDashboard:
    fig, ax = plt.subplots()
    # ... create visualization ...
    return d.PngDashboard(fig)
```

PNG dashboards can also be created from bytes / io.BytesIO objects containing the PNG image:

```python
return d.PngDashboard(bytes_io)
```

### HTML Dashboards

HTML dashboards allow for interactive content. For example, you can use interactive visualization libraries like Plotly to produce HTML:

```python
from squirrels import DashboardArgs, dashboards as d
import plotly.express as px

async def main(sqrl: DashboardArgs) -> d.HtmlDashboard:
    # Get data from a dataset
    data = await sqrl.dataset("your_dataset_name")
    df = data.to_pandas()
    
    # Create interactive Plotly visualization
    fig = px.scatter(
        df, x="x_column", y="y_column", 
        color="category_column"
    )
    
    # Convert to HTML and return
    html_str = fig.to_html(include_plotlyjs="cdn")
    return d.HtmlDashboard(html_str)
```

In general, HTML dashboards can be created from any string / io.StringIO object containing the HTML content.

## Dashboard Dependencies

Dashboards can depend on datasets. Define these dependencies in your YAML configuration:

```yaml
depends_on:
  - name: monthly_spending
    dataset: spending_data
    fixed_parameters:
      - group_by: month
  
  - name: category_breakdown
    dataset: spending_data
    fixed_parameters:
      - group_by: category
```

This is metadata that is made available to the data catalog API endpoint without having to run the dashboard Python code.

## Examples

### Matplotlib Example (PNG)

Here's a complete example of a dashboard that visualizes spending data using Matplotlib:

```python
# dashboards/spending_dashboard.py
from squirrels import DashboardArgs, dashboards as d
from matplotlib import pyplot as plt

async def main(sqrl: DashboardArgs) -> d.PngDashboard:
    # Get data from datasets
    monthly_data = await sqrl.dataset("spending_data", fixed_parameters={"group_by": "month"})
    category_data = await sqrl.dataset("spending_data", fixed_parameters={"group_by": "category"})
    
    # Create visualization
    fig, (ax1, ax2) = plt.subplots(2, 1, figsize=(8, 10))
    
    # Plot monthly spending
    monthly_df = monthly_data.to_pandas()
    monthly_df.plot(x="month", y="amount", ax=ax1)
    ax1.set_title("Monthly Spending")
    
    # Plot category breakdown
    category_df = category_data.to_pandas()
    category_df.plot(kind="pie", y="amount", ax=ax2)
    ax2.set_title("Spending by Category")
    
    return d.PngDashboard(fig)
```

```yaml
# dashboards/spending_dashboard.yml
label: Spending Dashboard
description: Visualizes spending patterns by month and category
scope: protected
format: png  # Corresponds to PngDashboard return type

parameters:
  - date_range

depends_on:
  - name: monthly_spending
    dataset: spending_data
    fixed_parameters:
      - group_by: month
  
  - name: category_breakdown
    dataset: spending_data
    fixed_parameters:
      - group_by: category
```

### Plotly Example (HTML)

Here's an example using Plotly to create an interactive HTML dashboard:

```python
# dashboards/iris_dashboard.py
from squirrels import DashboardArgs, dashboards as d
import plotly.express as px

async def main(sqrl: DashboardArgs) -> d.HtmlDashboard:
    # For this example, we're using sample data from Plotly
    # In practice, you'd use your own dataset
    df = px.data.iris()
    
    # Create an interactive scatter plot
    fig = px.scatter(
        df, x="sepal_width", y="sepal_length", 
        color="species"
    )
    
    # Convert to HTML and return
    html_str = fig.to_html(include_plotlyjs="cdn")
    return d.HtmlDashboard(html_str)
```

```yaml
# dashboards/iris_dashboard.yml
label: Iris Species Dashboard
description: Interactive visualization of iris dataset 
scope: public
format: html  # Corresponds to HtmlDashboard return type

parameters:
  - species
```
