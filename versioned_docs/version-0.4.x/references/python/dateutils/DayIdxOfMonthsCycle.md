# DayIdxOfMonthsCycle

The class to get the i-th day of a predefined cycle of months. See [_DayIdxOfCalendarUnit] for more details.

Can be found in the classpath `squirrels.dateutils.DayIdxOfMonthsCycle`.

### Constructor

Creates a DayIdxOfMonthsCycle object.

**Required Arguments:**

- **idx**: See [_DayIdxOfCalendarUnit]
- **num_months_in_cycle**: An integer for the number of months per cycle. This must go into 12 evenly such that the cycle fits evenly in a year

**Optional Keyword Arguments:**

- **first_month_of_cycle**: A [Month] for the first month of the cycle (January, February, March, etc.). Optional, default is January

**Example:**

Suppose you have 4-month "trimesters" starting in either March, July, or November. Given an input date, you want to find the 66th day of the current trimester. This can be done as follows:

```python
from squirrels.dateutils import DayIdxOfMonthsCycle, Month
...
date_modifier = sr.dateutils.DayIdxOfMonthsCycle(66, 4, first_month_of_cycle=Month.March)
output_date = date_modifier.modify(input_date)
```


[Month]: ./Month
[_DayIdxOfCalendarUnit]: ./DayIdxOfCalendarUnit
