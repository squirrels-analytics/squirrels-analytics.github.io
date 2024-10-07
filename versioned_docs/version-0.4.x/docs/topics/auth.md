# Authentication

Squirrels lets you integrate with your own user authentication system in Python with a `pyconfigs/auth.py` file. To create a sample file, simply run:

```bash
sqrl get-file auth.py
```

The `auth.py` file lets you define two things:

- A user class called **User** that lets you define custom attributes on the class using the **set_attributes** method.
- An authentication function called **get_user_if_valid** that returns a user if the input username and password are valid.

The sections below provide more details on the **User** class, the authentication function, and how the user attributes can be used to change behaviour of widget parameters and models.

## The User Class

Squirrels comes with a default [User] class that can be imported in the `auth.py` file:

```python
from squirrels import User
```

This class already contains attributes for **username** and **is_internal**. The **is_internal** attribute is a boolean that controls the scope of datasets it has access to:

- Datasets with "public" scope can be accessed without authentication
- Datasets with "protected" scope can only be accessed by any authenticated user
- Datasets with "private" scope can only be accessed by an authenticated user with **is_internal** set to True

The scope of the dataset is defined in the datasets section of [squirrels.yml].

To define your own user class with additional custom attributes, you can extend the one provided by Squirrels and override the **set_attributes** method. The new user class must also be called **User** so the one imported from Squirrels should be renamed by importing it like this: `from squirrels import User as UserBase`. See the example below:

```python
from squirrels import User as UserBase
from typing import Any

class User(UserBase):
    def set_attributes(self, **kwargs) -> None:
        self.department = kwargs["department"]
```

The **set_attributes** method takes uses **kwargs** to access user attributes defined in the authentication function.

## The Authentication Function

The authentication function must be called **get_user_if_valid** in the `auth.py` file. It takes an argument **sqrl** of type [AuthArgs] which contains member variable strings for **sqrl.username** and **sqrl.password**. You can also use [Database Connections] that you've predefined with member variable **sqrl.connections** (a dictionary of database connection names to SQLAlchemy engines).

The signature of the function should look like this:

```python
from typing import Union
from squirrels import User as UserBase, AuthArgs, WrongPassword
...
def get_user_if_valid(sqrl: AuthArgs) -> Union[User, WrongPassword, None]:
    ...
```

Typically, this function would do the following:
- Use the input **sqrl.username** to find the corresponding user in your authentication system.
  - If the user is not found, return **None**.
- Turn the user record into a dictionary (let's call it `user_obj`) and validate the input **sqrl.password** (usually by comparing hashed/encrypted password values).
  - If the password is invalid, return `WrongPassword()` (the [WrongPassword] class can be imported from squirrels).
- If the password is valid, create a user with the **User.Create** factory method which takes **username** as required arguments, and optional arguments for **is_internal** (which is False by default) and other custom arguments you wish to pass to the **set_attributes** method.
  - Example: `user = User.Create(username, is_internal=user_obj["is_admin"], role=user_obj["role"])`
- Return the user.

For example, suppose we had existing functions for `get_user_obj_if_valid(username)`, `encrypt(password)`, and `get_encrypted_password(username)`. Then the authentication function can look something like this:

```python
def get_user_if_valid(sqrl: AuthArgs) -> Union[User, WrongPassword, None]:
    user_obj = get_user_obj_if_valid(sqrl.username)
    if user_obj is None:
        return None
    
    if encrypt(sqrl.password) == get_encrypted_password(sqrl.username):
        return User.Create(sqrl.username, **user_obj)
    else:
        return WrongPassword()
```

When **None** is returned instead of a [WrongPassword] object, Squirrels will continue looking for the username in the "users" section of [env.yml]. The section is generally used for specifying mock users to test with for the environment. It is represented as a dictionary where keys are usernames and values are nested dictionaries of user attributes. The user attributes dictionary must include **password** and **is_internal**.

## Users and Parameters

The attributes defined in the User model can be used to change the visible parameters options for different groups of user. This is done using the following parameter arguments:

- The **user_attribute** argument of the **CreateWithOptions** or **CreateFromSource** factory methods of the [parameter classes](../../references/python/parameters/Parameter). This is an optional string, and defines the attribute of the user model to consider.
- The **user_groups** argument of the constructor for [parameter option classes](../../references/python/parameter_options/ParameterOption). This is usually a string or sequence of strings. The parameter option is only enabled when the value of the **user_attribute** (from the point above) of the current user is one of the values defined in **user_groups**.
- The **user_group_col** argument of the constructor for [parameter datasource classes](../../references/python/data_sources/DataSource). This is an optional string, and works similarly to **user_groups** except it defines the column of a lookup table instead of the the values themselves.

As an example, suppose that the user model has an attribute defined for "department" with "engineering" and "sales" as possible values. And we want to create a single-select parameter called "region" with choices "San Francisco" and "New York" for "engineering", and "Chicago" and "New York" for "sales". Then the constructed parameter may look like this:

```python
import squirrels as sr

region_options = [
    sr.SelectParameterOption("sf", "San Francisco", user_groups=["engineering"]),
    sr.SelectParameterOption("ch", "Chicago", user_groups=["sales"]),
    sr.SelectParameterOption("ny", "New York", user_groups=["engineering", "sales"])
]
region_param = sr.SingleSelectParameter.CreateWithOptions(
    "region", "Region", region_options, user_attribute="department"
)
```

If the options were coming from a lookup table instead, then it may look something like this:

```python
region_datasource = sr.SelectDataSource(
    "lookup_table", "region_id", "region_values", user_group_col="department_col"
)
region_param = sr.SingleSelectParameter.CreateFromSource(
    "region", "Region", region_datasource, user_attribute="department"
)
```

:::warning

If a parameter is created with **user_attribute**, the parameter should not be used by public datasets. If an unauthenticated user tries to access a public dataset that uses the parameter, an internal server error is raised.

:::

## Users and Models

The **user** variable (an instance of the User model) is available to reference in the models directly.

For example, we can use it to mask column values based on the authenticated user:

```sql
SELECT
{%- if user.department == "sales" %}
    revenue
{%- else %}
    '***' as revenue
{%- endif %}
FROM mytable
```

The **user** is also available as a member variable of the **sqrl** argument of [context.py] and Python model functions (both **dependencies** and **main**). The example below demonstrates setting an `is_sales` context variable.

```python
ctx["is_sales"] = (sqrl.user.department == "sales")
```

:::warning

If not authenticated, Jinja will treat both the user object and any attributes on the user object as null in SQL models. So for instance, the condition in `{% if user.my_attribute %}` is evaluated to false if the user is null.

However, in Python models, when the `sqrl.user` is None, attempting to access a user attribute will raise an error, which is a different behaviour than Jinja.

:::


[squirrels.yml]: ./project-file
[context.py]: ./context
[AuthArgs]: ../../references/python/arguments/AuthArgs
[User]: ../../references/python/user_base/User
[WrongPassword]: ../../references/python/user_base/WrongPassword
[Database Connections]: ./connections
[env.yml]: ./environcfg
