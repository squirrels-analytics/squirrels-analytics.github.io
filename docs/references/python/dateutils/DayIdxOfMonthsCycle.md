# DayIdxOfMonthsCycle

The class to get the i-th day of a predefined cycle of months. See [DayIdxOf...] for more details.

## Constructor

Creates a DayIdxOfMonthsCycle object.

**Required Arguments:**

- **idx**: See [DayIdxOf...]
- **num_months_in_cycle**: An integer for the number of months per cycle. This must go into 12 evenly such that the cycle fits evenly in a year (i.e., 12, 6, 4, 3, 2, or 1).

:::note

- Setting `num_months_in_cycle` to 12 is equivalent to using [DayIdxOfYear](./DayIdxOfYear)
- Setting `num_months_in_cycle` to 3 is equivalent to using [DayIdxOfQuarter](./DayIdxOfQuarter)
- Setting `num_months_in_cycle` to 1 is equivalent to using [DayIdxOfMonth](./DayIdxOfMonth)

:::

**Optional Keyword Arguments:**

- **first_month_of_cycle**: A [Month] for the first month of the cycle (January, February, March, etc.). Optional, default is January

## Methods

See [DayIdxOf...] for all methods.

## Example

Suppose you have 4-month "trimesters" starting in either March, July, or November. Given an input date, you want to find the 66th day of the current trimester. This can be done as follows:

```python
from dateutils import DayIdxOfMonthsCycle, Month
import datetime

date_modifier = DayIdxOfMonthsCycle(idx=95, num_months_in_cycle=4, first_month_of_cycle=Month.March)

input_date = datetime.date(2025, 4, 5)
output_date = date_modifier.modify(input_date)
print(output_date) # prints 2025-06-03, 95th day of period "March 1st to June 30th"
```


[Month]: ./Month
[DayIdxOf...]: ./DayIdxOf
