# User Model & Authentication

The User model in Squirrels allows you to customize the attributes associated with each user in your application. By extending the `BaseUser` class, you can define additional custom fields that will be stored in the authentication database used by your Squirrels project.

## Configuration File

Custom user fields are configured in the `pyconfigs/user.py` file. You can create a sample of this file by using the [sqrl get-file] command:

```bash
sqrl get-file user.py
```

The contents of the example file looks like this:

```python
from typing import Literal
from squirrels import auth, arguments as args


class User(auth.BaseUser):
    """
    Extend the BaseUser class with custom attributes.
    """
    role: Literal["manager", "employee"] = "employee"

    @classmethod
    def dropped_columns(cls) -> list[str]:
        return []


# @auth.provider(name="google", label="Google", icon="https://www.google.com/favicon.ico")
def google_auth_provider(sqrl: args.AuthProviderArgs) -> auth.ProviderConfigs:
    """
    Provider configs for authenticating a user using Google credentials.

    See the following page for setting up the CLIENT_ID and CLIENT_SECRET for Google specifically: 
    https://support.google.com/googleapi/answer/6158849?hl=en
    """
    def get_sqrl_user(claims: dict) -> User:
        return User(
            username=claims["email"],
            is_admin=False,
            role="employee"
        )

    # TODO: Add GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET to the .env file
    # Then, uncomment the @auth.provider decorator above and set the client_id and client_secret below
    provider_configs = auth.ProviderConfigs(
        client_id="", # sqrl.env_vars["GOOGLE_CLIENT_ID"],
        client_secret="", # sqrl.env_vars["GOOGLE_CLIENT_SECRET"],
        server_metadata_url="https://accounts.google.com/.well-known/openid-configuration",
        client_kwargs={"scope": "openid email profile"},
        get_user=get_sqrl_user
    )

    return provider_configs
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
from squirrels import auth

class User(auth.BaseUser):
    # ... other fields ...
    old_field: str | None = None  # Although this line can be safely removed, it is included as a record of what was removed

    @classmethod
    def dropped_columns(cls) -> list[str]:
    """
    List columns that should be dropped from the database.
    """
    return ["old_field"]
```

## Adding Authentication Providers

Squirrels supports adding third-party authentication providers (such as Google, Facebook, etc.) that implement the [OpenID Connect] protocol to your application.

To add an authentication provider, you must first register a client with the OpenID provider, and obtain the client ID and secret, as well as the server metadata URL and scope from the provider. For example, to register a client with Google, you can follow the instructions [here](https://support.google.com/googleapi/answer/6158849?hl=en).

Save the client ID and secret as [environment variables] in the `.env` file.

Then, for each authentication provider, you must create a function that returns a [ProviderConfigs] object. This object contains the client ID, client secret, server metadata URL, and scope for the provider. It also contains a function that maps the claims from the OpenID provider to a Squirrels user object. Each function must be decorated with the `@auth.provider` decorator to provide the name, label, and icon for the provider.

For example, to add a Google authentication provider, you can create the [environment variables] `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET`, and create a function like this:

```python
@auth.provider(name="google", label="Google", icon="https://www.google.com/favicon.ico")
def google_auth_provider(sqrl: args.AuthProviderArgs) -> auth.ProviderConfigs:
    """
    Provider configs for authenticating a user using Google credentials.

    See the following page for setting up the CLIENT_ID and CLIENT_SECRET for Google specifically: 
    https://support.google.com/googleapi/answer/6158849?hl=en
    """
    def get_sqrl_user(claims: dict) -> User:
        return User(
            username=claims["email"],
            is_admin=False,
            role="employee"
        )

    provider_configs = auth.ProviderConfigs(
        client_id=sqrl.env_vars["GOOGLE_CLIENT_ID"],
        client_secret=sqrl.env_vars["GOOGLE_CLIENT_SECRET"],
        server_metadata_url="https://accounts.google.com/.well-known/openid-configuration",
        client_kwargs={"scope": "openid email profile"},
        get_user=get_sqrl_user
    )

    return provider_configs
```

## Best Practices

1. Always provide meaningful default values for required fields
2. Use nullable fields (`Type | None`) when a field might not apply to all users
3. Consider using `Literal` types to enforce valid options
4. Document your User model fields with comments
5. When removing fields, add them to `dropped_columns()` rather than deleting them from the model


[sqrl get-file]: ../../references/cli/get-file
[environment variable]: ./environment
[environment variables]: ./environment
[Update User]: ../../references/rest/user-management#update-user-
[Squirrels Studio]: ../concepts/studio
[OpenID Connect]: https://openid.net/connect/
[ProviderConfigs]: ../../references/python/auth/ProviderConfigs
