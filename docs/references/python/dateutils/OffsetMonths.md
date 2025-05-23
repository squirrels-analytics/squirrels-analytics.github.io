# OffsetMonths (class)

The class to offset an input date by some number of months. See [Offset...] for more details.

## Constructor

```python
def __init__(self, offset: int) -> None:
```

Creates an OffsetMonths object.

**Required Arguments:**

- **offset**: An integer for the number of months to add

## Methods

See [Offset...] for all methods.

## Example

Suppose you have a date that you want to offset by 2 months. This can be done as follows:

```python
from dateutils import OffsetMonths
import datetime

date_modifier = OffsetMonths(offset=2)

input_date = datetime.date(2025, 4, 5)
output_date = date_modifier.modify(input_date)
print(output_date) # prints 2025-06-05
```


[Offset...]: ./Offset
