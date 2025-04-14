# Offset...

All classes in dateutils that start with "Offset" can be used for offseting the input date by some number of time units (years, months, weeks, days, etc.). These classes are:

- [OffsetYears](./OffsetYears)
- [OffsetMonths](./OffsetMonths)
- [OffsetWeeks](./OffsetWeeks)
- [OffsetDays](./OffsetDays)

## Methods

Methods available in all derived classes of this class.

### modify

Given an input date object, returns the output date that is exactly some number of time units apart. The count and time unit used is based on the derived class and the constructor arguments.

**Required Arguments:**

- **date**: A datetime.date object representing the input date to modify

**Returns:** The modified output date as a datetime.date object.
