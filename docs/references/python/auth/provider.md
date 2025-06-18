# provider (decorator function)

This is a decorator function that can be used to register new authentication providers (such as Google, GitHub, etc.) in [user.py]. The decorated function must return a [ProviderConfigs] object.

Can be imported from the module `squirrels.auth` or `squirrels`.

## Required Arguments

### name

The name of the provider (must be unique, e.g. 'google')

**Type:** `str`

### label

The label of the provider (e.g. 'Google')

**Type:** `str`

### icon

The URL of the icon of the provider (e.g. 'https://www.google.com/favicon.ico')

**Type:** `str`

## Example

```python
@provider(name='google', label='Google', icon='https://www.google.com/favicon.ico')
def google_provider(sqrl: AuthProviderArgs) -> ProviderConfigs:

    def get_sqrl_user(claims: dict) -> User:
        return User(
            username=claims["email"],
            is_admin=False,
            role="employee"
        )

    provider_configs = ProviderConfigs(
        client_id=sqrl.env_vars["GOOGLE_CLIENT_ID"],
        client_secret=sqrl.env_vars["GOOGLE_CLIENT_SECRET"],
        server_metadata_url="https://accounts.google.com/.well-known/openid-configuration",
        client_kwargs={"scope": "openid email profile"},
        get_user=get_sqrl_user
    )

    return provider_configs
```


[user.py]: ../../../docs/concepts/user
[ProviderConfigs]: ./ProviderConfigs