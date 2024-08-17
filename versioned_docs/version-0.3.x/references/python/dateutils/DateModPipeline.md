# DateModPipeline

The class to chain together a series of date modifier classes into a pipeline where the pipeline can be used to apply multiple modifications to an input date. A date modifier class is any class in squirrels.dateutils that starts with "DayIdxOf", "Offset", or "DateModPipeline".

Can be found in the classpath `squirrels.dateutils.DateModPipeline`.

### Constructor

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

This method modifies the input date, and returns all dates from the input date to the modified date, 
incremented by a DateModifier step

If the step is positive and start date is less than end date, then it'll return an increasing list of
dates starting from the start date. If the step is negative and start date is greater than end date, 
then it'll return a decreasing list of dates starting from the start date. Otherwise, an empty list
is returned

**Required Arguments:**

- **start_date**: A datetime.date object for the start date
- **step**: An [_OffsetUnits] object for the increments to take. The offset cannot be zero

**Returns:** A list of datetime.date objects


[_OffsetUnits]: ./OffsetUnits
