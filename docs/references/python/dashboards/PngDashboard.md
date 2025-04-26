# PngDashboard (class)

Return an instance of this class in a [Python dashboard] to create a dashboard with PNG content.

The class can be imported from the `squirrels.dashboards` or `squirrels` module.

## Constructor

```python
def __init__(self, content: matplotlib.figure.Figure | bytes | io.BytesIO) -> None:
```

Creates a PngDashboard object.

**Required Arguments:**

- **content**: Either a matplotlib.figure.Figure object, or bytes / io.BytesIO object for the PNG content as bytes


[Python dashboard]: ../../../docs/concepts/dashboards
