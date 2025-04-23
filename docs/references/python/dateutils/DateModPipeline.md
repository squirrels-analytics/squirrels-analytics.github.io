# DateModPipeline (class)

The class to chain together a series of date modifier classes into a pipeline where the pipeline can be used to apply multiple modifications to an input date. A date modifier class is any class in dateutils that starts with "DayIdxOf", "Offset", or "DateModPipeline".

## Constructor

Creates a DateModPipeline object.

**Required Arguments:**

- **date_modifiers**: A sequence of date modifier objects

## Methods

### modify

Modify an input date by applying the series of date modifiers

**Required Arguments:**

- **date**: A datetime.date object representing the input date to modify

**Returns:** The modified output date as a datetime.date object

### with_more_modifiers

Create a new DateModPipeline with more date modifiers

**Required Arguments:**

- **date_modifiers**: A sequence of date modifier objects to add

**Returns:** A new DateModPipeline object

### get_date_list

This method modifies the input date, and returns all dates from the input date to the modified date (inclusive), 
incremented by a DateModifier step.

If the step is positive and start date is less than end date, then it'll return an increasing list of
dates starting from the start date. If the step is negative and start date is greater than end date, 
then it'll return a decreasing list of dates starting from the start date. Otherwise, an empty list
is returned

**Required Arguments:**

- **start_date**: A datetime.date object for the start date
- **step**: An [Offset...] object for the increments to take. The offset cannot be zero

**Returns:** A list of datetime.date objects

## Example

Suppose you have a date and you want to get the first day of the week (starting on Monday), subtract it by 10 days, and get the first day of the month from the result. This can be done as follows:

```python
from dateutils import DateModPipeline, DayIdxOfWeek, DayIdxOfMonth, OffsetDays
import datetime

date_modifier = DateModPipeline([
    DayIdxOfWeek(idx=1, first_day_of_week=DayOfWeekEnum.Monday),
    OffsetDays(offset=-10),
    DayIdxOfMonth(idx=1),
])

input_date = datetime.date(2025, 4, 5)
output_date = date_modifier.modify(input_date)
print(output_date) # prints 2025-03-01
```

You can also use the same date modifier to get a list of dates from the input date to the modified date (inclusive):

```python
date_list = date_modifier.get_date_list(
    start_date=input_date,
    step=OffsetDays(offset=-1)
)

for date in date_list:
    print(date) 

# prints each date in the list: 
# 2025-04-05, 2025-03-29, 2025-03-22, 2025-03-15, 2025-03-08, 2025-03-01
```


[Offset...]: ./Offset
