# DayIdxOfMonth (class)

The class to get the i-th day of the month. See [DayIdxOf...] for more details.

## Constructor

```python
def __init__(self, idx: int) -> None:
```

Creates a DayIdxOfMonth object.

**Required Arguments:**

- **idx**: See [DayIdxOf...]

## Methods

See [DayIdxOf...] for all methods.

## Example

Suppose you have a date that you want to find the 15th day of the month. This can be done as follows:

```python
from dateutils import DayIdxOfMonth
import datetime

date_modifier = DayIdxOfMonth(idx=15)

input_date = datetime.date(2025, 4, 5)
output_date = date_modifier.modify(input_date)
print(output_date) # prints 2025-04-15
```


[DayIdxOf...]: ./DayIdxOf
