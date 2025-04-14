# OffsetYears

The class to offset an input date by some number of years. See [Offset...] for more details.

## Constructor

Creates an OffsetYears object.

**Required Arguments:**

- **offset**: An integer for the number of years to add

## Methods

See [Offset...] for all methods.

## Example

Suppose you have a date that you want to offset by 2 years. This can be done as follows:

```python
from dateutils import OffsetYears
import datetime

date_modifier = OffsetYears(offset=2)

input_date = datetime.date(2025, 4, 5)
output_date = date_modifier.modify(input_date)
print(output_date) # prints 2027-04-05
```


[Offset...]: ./Offset
