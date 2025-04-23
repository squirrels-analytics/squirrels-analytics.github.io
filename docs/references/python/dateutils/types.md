# types (module)

The following are abstract base classes in the `dateutils.types` module that can be used for Python type hinting:

- `DayIdxOfCalendarUnit`
  - Parent class for all [DayIdxOf...] classes
- `OffsetUnits`
  - Parent class for all [Offset...] classes
- `DateRepresentationModifier`
  - Parent class for [DateStringModifier] and [TimestampModifier]
- `DateModifier`
  - Parent class for `DayIdxOfCalendarUnit`, `OffsetUnits`, `DateRepresentationModifier`, and [DateModPipeline]

Attempting to instantiate these abstract base classes will fail to work.


[DayIdxOf...]: ./DayIdxOf
[Offset...]: ./Offset
[DateStringModifier]: ./DateStringModifier
[TimestampModifier]: ./TimestampModifier
[DateModPipeline]: ./DateModPipeline
