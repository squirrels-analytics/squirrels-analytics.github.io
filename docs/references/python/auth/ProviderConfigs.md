# ProviderConfigs (class)

This is a class that contains the configuration for third-party authentication providers (such as Google, Facebook, etc.) that implement the [OpenID Connect] protocol. It is returned by functions decorated with the [provider] decorator in [user.py].

Can be imported from the module `squirrels.auth` or `squirrels`.

## Required Arguments

### client_id

The client ID obtained from the OpenID provider when registering your application.

**Type:** `str`

### client_secret

The client secret obtained from the OpenID provider when registering your application.

**Type:** `str`

### server_metadata_url

The server metadata URL (well-known configuration endpoint) of the OpenID provider.

**Type:** `str`

### client_kwargs

Additional client configuration parameters, typically including the scope for the authentication request.

**Type:** `dict`

### get_user

A function that maps the claims from the OpenID provider to a Squirrels User object. This function receives the claims dictionary from the provider and must return a User instance.

**Type:** `Callable[[dict], User]`

## Example

```python
@provider(name="google", label="Google", icon="https://www.google.com/favicon.ico")
def google_auth_provider(sqrl: AuthProviderArgs) -> ProviderConfigs:
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
[provider]: ./provider
[OpenID Connect]: https://openid.net/connect/