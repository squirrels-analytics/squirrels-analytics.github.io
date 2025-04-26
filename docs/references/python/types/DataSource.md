# DataSource (class)

This is the base class for all [data source classes], used for specifying the database lookup table to use for the parameter options or details of a parameter.

Can be imported from the module `squirrels.types` or `squirrels`.

:::note

The constructor of all subclasses of this class contains a **connection_name** argument to specify the database connection to use. Using lookup tables from the virtual data environment is not yet supported. This will be implemented in a future release.

:::


[data source classes]: ../data_sources