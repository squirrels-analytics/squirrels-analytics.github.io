# DateStringModifier (class)

Similar to [DateModPipeline] except all input and output dates are strings instead of datetime.date.

## Specifying the date format

The constructor of the DateStringModifier takes a `date_format` argument as an optional second argument. This argument is a string that specifies the format of the output date string using [Python's date format codes](https://www.w3schools.com/python/gloss_python_date_format_codes.asp). If not provided, the default format is `%Y-%m-%d`.

In addition, both the `modify` method and the `get_date_list` method both take an additional `input_format` optional argument that specifies the format of the input date string. If not provided, the default format is the same as the output format (i.e., the value of the `date_format` argument from the constructor).


[DateModPipeline]: ./DateModPipeline
