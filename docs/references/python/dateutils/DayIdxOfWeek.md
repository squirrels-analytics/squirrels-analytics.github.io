# DayIdxOfWeek

The class to get the i-th day of the week. See [DayIdxOf...] for more details.

## Constructor

Creates a DayIdxOfWeek object.

**Required Arguments:**

- **idx**: See [DayIdxOf...]

**Optional Keyword Arguments:**

- **first_day_of_week**: A [DayOfWeekEnum] for the day of the week that each week begins. Optional, default is DayOfWeekEnum.Monday

## Methods

See [DayIdxOf...] for all methods.

## Example

Suppose you have a date that you want to find the 3rd day of the week where the week starts on Monday. This can be done as follows:

```python
from dateutils import DayIdxOfWeek, DayOfWeekEnum
import datetime

date_modifier = DayIdxOfWeek(idx=3, first_day_of_week=DayOfWeekEnum.Monday)

input_date = datetime.date(2025, 4, 5)
output_date = date_modifier.modify(input_date)
print(output_date) # prints 2025-04-02, 3rd day of week starting on Monday
```


[DayOfWeekEnum]: ./DayOfWeekEnum
[DayIdxOf...]: ./DayIdxOf
