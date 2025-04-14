# DayIdxOf...

All classes in dateutils that start with "DayIdxOf" can be used for getting the i-th day of some calendar cycle (such as year, quarter, month, week, etc.) that the input date resides in. These classes are:

- [DayIdxOfMonthsCycle](./DayIdxOfMonthsCycle)
- [DayIdxOfYear](./DayIdxOfYear)
- [DayIdxOfQuarter](./DayIdxOfQuarter)
- [DayIdxOfMonth](./DayIdxOfMonth)
- [DayIdxOfWeek](./DayIdxOfWeek)

## Constructor

The constructor of these classes all take "idx" as the first argument:

- **idx**: An integer for the day index of the calendar cycle. Use positive numbers to count from the beginning or negative numbers to count backwards from the end. Cannot be zero

## Methods

All these classes include the following methods.

### modify

Given an input date object, returns the output date as the i-th day of some calendar cycle. The index and type of calendar cycle is based on the derived class and the constructor arguments used.

**Required Arguments:**

- **date**: A datetime.date object representing the input date to modify

**Returns:** The modified output date as a datetime.date object.
