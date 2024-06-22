# User

This class is the base class for creating a custom User model in [auth.py](../../../docs/topics/auth).

Can be found in the classpath `squirrels.user_base.User` or `squirrels.User`.

## Attributes

Attibutes available to the User model by default.

### username

A string for the username of the user

### is_internal

A boolean for whether the user can access private datasets

## Methods

Methods to overwrite in the custom User model.

### set_attributes

Sets custom attributes on the user given a user object as a Python dictionary. Should be overwritten in the custom User model, otherwise does nothing by default.

**Required Arguments:**

- **user_dict**: A dictionary representing a user object (such as a row from a database)

## Static or Class Methods

Methods to use in the "get_user_if_valid" function.

### Create

Factory method to create a user if the authentication is valid. This method will create a new User object and call "set_attributes" on it.

**Required Arguments:**

- **username**: A string for the username for the authenticated user
- **user_dict**: A dictionary representation of a user and its attributes

**Optional Keyword Arguments:**

- **is_internal**: A boolean for whether the user can access private datasets. Default is false.

**Returns:** User (the one that this class method was called on)
