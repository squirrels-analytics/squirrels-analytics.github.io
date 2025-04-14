# OffsetWeeks

The class to offset an input date by some number of weeks. See [Offset...] for more details.

## Constructor

Creates an OffsetWeeks object.

**Required Arguments:**

- **offset**: An integer for the number of weeks to add

## Methods

See [Offset...] for all methods.

## Example

Suppose you have a date that you want to offset by 2 weeks. This can be done as follows:

```python
from dateutils import OffsetWeeks
import datetime

date_modifier = OffsetWeeks(offset=2)

input_date = datetime.date(2025, 4, 5)
output_date = date_modifier.modify(input_date)
print(output_date) # prints 2025-04-19
```


[Offset...]: ./Offset
