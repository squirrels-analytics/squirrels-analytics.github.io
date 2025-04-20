# User Management

The User Management APIs allow administrators to manage users in the system. Endpoints marked with 🔒 require admin privileges to access.

Note that API responses may contain additional user fields not shown in the example responses below, based on the user fields defined in the [user.py] file of the Squirrels project.

## Get User Fields

Get details of the available user fields.

**Endpoint:** `GET /api/squirrels-v0/project/{name}/{version}/user-fields`

### Response

**Success Response (200 OK)**

```json
[
    {
        "name": "username",
        "type": "string",
        "required": true
    },
    {
        "name": "is_admin",
        "type": "boolean",
        "required": false,
        "default": false
    },
    // Additional custom fields as configured
]
```

## List All Users

Retrieve a list of all users in the system.

**Endpoint:** `GET /api/squirrels-v0/project/{name}/{version}/users`

### Response

**Success Response (200 OK)**

```json
[
    {
        "username": "johndoe",
        "is_admin": false,
        // Additional user fields
    }
]
```

## Add User 🔒

Add a new user to the system.

**Endpoint:** `POST /api/squirrels-v0/project/{name}/{version}/users`

### Request

**Content-Type:** `application/json`

```json
{
    "username": "newuser",
    "password": "user_password",
    "is_admin": false,
    // Additional user fields
}
```

### Response

**Success Response (200 OK)**

Empty response body on success.

**Error Responses**
- `400 Bad Request` - If the username already exists or required fields are missing
- `403 Forbidden` - If the authenticated user is not an admin

## Update User 🔒

Update an existing user's details.

**Endpoint:** `PUT /api/squirrels-v0/project/{name}/{version}/users/{username}`

### Request

**Content-Type:** `application/json`

```json
{
    "is_admin": false,
    // Additional user fields to update
}
```

**Notes**:
- The password cannot be updated through this endpoint. Use the [Change Password](./authentication#change-password-) endpoint instead.
- The "admin" user cannot be set to non-admin.

### Response

**Success Response (200 OK)**

Empty response body on success.

**Error Responses**
- `400 Bad Request` - If the user does not exist or the update is invalid
- `403 Forbidden` - If the authenticated user is not an admin

## Delete User 🔒

Delete a user from the system.

**Endpoint:** `DELETE /api/squirrels-v0/project/{name}/{version}/users/{username}`

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| username | string | Yes | The username of the user to delete |

### Response

**Success Response (200 OK)**

Empty response body on success.

**Error Responses**
- `400 Bad Request` - If the user does not exist
- `403 Forbidden` - If the authenticated user is not an admin
- `400 Bad Request` - If attempting to delete the admin user

**Notes**:
- The admin user cannot be deleted
- Cannot delete the currently authenticated user
- Deleting a user will also revoke all their access tokens


[user.py]: ../../docs/concepts/user
