# OffsetDays

The class to offset an input date by some number of days. See [Offset...] for more details.

## Constructor

Creates an OffsetDays object.

**Required Arguments:**

- **offset**: An integer for the number of days to add

## Methods

See [Offset...] for all methods.

## Example

Suppose you have a date that you want to offset by 10 days. This can be done as follows:

```python
from dateutils import OffsetDays
import datetime

date_modifier = OffsetDays(offset=10)

input_date = datetime.date(2025, 4, 5)
output_date = date_modifier.modify(input_date)
print(output_date) # prints 2025-04-15
```


[Offset...]: ./Offset
