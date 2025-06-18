# BaseUser (class)

This is the base class for the User model in Squirrels. You can extend this class to create your own User model in [user.py].

Can be imported from the module `squirrels.auth` or `squirrels`.

## Attributes

The following attributes are already defined in this class. Do not override them.

### username

The username of the user.

**Type:** `str`

### is_admin

Whether the user is an admin. Admins can manage users and have special permissions to perform certain actions. When creating a new user (such as through the REST API), this attribute is `False` by default if not specified.

**Type:** `bool`

## Static / ClassMethods

You are free to override the following methods in your own User model.

### dropped_columns

```python
@classmethod
def dropped_columns(cls) -> list[str]:
```

This method returns a list of column names that should no longer exist in the users table of the database. By default, this method returns an empty list if not overridden.

**Returns:** A list of column names.


[user.py]: ../../../docs/concepts/user