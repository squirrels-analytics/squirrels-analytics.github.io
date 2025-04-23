# User Model

The User model in Squirrels allows you to customize the attributes associated with each user in your application. By extending the `BaseUser` class, you can define additional custom fields that will be stored in the authentication database used by your Squirrels project.

## Configuration File

Custom user fields are configured in the `pyconfigs/user.py` file. You can create a sample of this file by using the [sqrl get-file] command:

```bash
sqrl get-file user.py
```

The contents of the example file looks like this:

```python
from typing import Literal
from squirrels import BaseUser


class User(BaseUser):
    """
    Extend the BaseUser class with custom attributes.
    """
    role: Literal["manager", "employee"] = "employee"

    @classmethod
    def dropped_columns(cls) -> list[str]:
        return []
```

## Supported Field Types

The User model supports the following field types:

- `str`: Text fields
- `int`: Integer numbers
- `float`: Decimal numbers
- `bool`: Boolean values (True/False)
- `Literal`: Enumerated values with a fixed set of options

To make a field nullable (allow NULL values), use the Union type syntax with `None`:

```python
# Nullable string field with None as default value
organization: str | None = None

# Nullable integer field with default value of 10
employee_id: int | None = 10
```

Use the `Literal` type from the `typing` module to create fields with a fixed set of options:

```python
# Field that only accepts specific values
role: Literal["manager", "employee"] = "employee"
```

**All fields must have a default value.** When adding a new field to the User model, the field for all existing users in the database will be set to the default value.

:::note

If the `SQRL_SECRET__ADMIN_PASSWORD` [environment variable] is set, the "admin" user (i.e., username = "admin") will be created for you automatically using the default values from the User model.

If the fields of the "admin" user should be different than the default values, you can change it in [Squirrels Studio] ("Menu" -> "Manage Users") when authenticated as an admin user, or by using the [Update User] REST API.

:::

## Reserved and Disallowed Fields

The following fields are reserved and managed by the system:
- `username`: Primary identifier for the user (string)
- `is_admin`: Boolean flag indicating administrator privileges

The following fields are disallowed and cannot be used in your User model:
- `password`
- `password_hash` 
- `created_at`
- `token_id`
- `exp`

## Dropping Columns

If you need to remove previously defined columns, use the `dropped_columns` class method:

```python
from squirrels import BaseUser

class User(BaseUser):
    # ... other fields ...
    old_field: str | None = None  # Although this line can be safely removed, it is included as a record of what was removed

    @classmethod
    def dropped_columns(cls) -> list[str]:
    """
    List columns that should be dropped from the database.
    """
    return ["old_field"]
```

## Best Practices

1. Always provide meaningful default values for required fields
2. Use nullable fields (`Type | None`) when a field might not apply to all users
3. Consider using `Literal` types to enforce valid options
4. Document your User model fields with comments
5. When removing fields, add them to `dropped_columns()` rather than deleting them from the model


[sqrl get-file]: ../../references/cli/get-file
[environment variable]: ./environment
[Update User]: ../../references/rest/user-management#update-user-
[Squirrels Studio]: ../concepts/studio