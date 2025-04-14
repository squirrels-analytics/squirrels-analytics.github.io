# DayIdxOfQuarter

The class to get the i-th day of the quarter. See [DayIdxOf...] for more details.

## Constructor

Creates a DayIdxOfQuarter object.

**Required Arguments:**

- **idx**: See [DayIdxOf...]

**Optional Keyword Arguments:**

- **first_month_of_quarter**: A [Month] for the first month of one of the quarters (January, February, March, etc.). The first month of other quarters are implied based on this value. Optional, default is January

## Methods

See [DayIdxOf...] for all methods.

## Example

Suppose you have a date that you want to find the 15th day of the quarter where the first month is March. This can be done as follows:

```python
from dateutils import DayIdxOfQuarter, Month
import datetime

date_modifier = DayIdxOfQuarter(idx=15, first_month_of_quarter=Month.March)

input_date = datetime.date(2025, 4, 5)
output_date = date_modifier.modify(input_date)
print(output_date) # prints 2025-03-15
```

[Month]: ./Month
[DayIdxOf...]: ./DayIdxOf
