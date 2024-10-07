# _DayIdxOfCalendarUnit (abstract)

This is an abstract class for getting the i-th day of some calendar cycle (such as year, quarter, month, week, etc.) that the input date resides in. All classes in squirrels.dateutils that start with "DayIdxOf" is derived from this class.

Each of the constructor of the derived classes take "idx" as the first argument. Here is a description of this argument:

Can be found in the classpath `squirrels.dateutils.DayOfWeek`.

- **idx**: An integer for the day index of the calendar cycle. Use positive numbers to count from the beginning or negative numbers to count backwards from the end. Cannot be zero

## Methods

Methods available in all derived classes of this class.

### modify

Given an input date object, returns the output date as the i-th day of some calendar cycle. The index and type of calendar cycle is based on the derived class and the constructor arguments used.

**Required Arguments:**

- **date**: A datetime.date object representing the input date to modify

**Returns:** The modified output date as a datetime.date object.
