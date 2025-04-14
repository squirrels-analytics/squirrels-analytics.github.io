# DayIdxOfYear

The class to get the i-th day of the year. See [DayIdxOf...] for more details.

## Constructor

Creates a DayIdxOfYear object.

**Required Arguments:**

- **idx**: See [DayIdxOf...]

**Optional Keyword Arguments:**

- **first_month_of_year**: A [Month] for the first month of the year (January, February, March, etc.). Optional, default is January

## Methods

See [DayIdxOf...] for all methods.

## Example

Suppose you have a date that you want to find the 15th day of the year where the first month is February. This can be done as follows:

```python
from dateutils import DayIdxOfYear, Month
import datetime

date_modifier = DayIdxOfYear(idx=15, first_month_of_year=Month.February)

input_date = datetime.date(2025, 4, 5)
output_date = date_modifier.modify(input_date)
print(output_date) # prints 2025-02-15
```


[Month]: ./Month
[DayIdxOf...]: ./DayIdxOf
