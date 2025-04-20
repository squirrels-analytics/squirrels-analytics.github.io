# Authentication

The Squirrels API uses OAuth 2.0 Password Flow for authentication. Endpoints marked with 🔒 require authentication to access.

## Login for Access Token

Authenticate a user and obtain an access token.

**Endpoint:** `POST /api/squirrels-v0/project/{name}/{version}/login`

### Request

**Content-Type:** `application/x-www-form-urlencoded`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| username | string | Yes | The user's username |
| password | string | Yes | The user's password |
| grant_type | string | No | Must be "password" if provided |
| scope | string | No | OAuth scope (default: "") |
| client_id | string | No | OAuth client ID |
| client_secret | string | No | OAuth client secret |

### Response

**Success Response (200 OK)**

```json
{
    "access_token": "encoded_jwt_token",
    "token_type": "bearer",
    "username": "johndoe",
    "is_admin": false,
    "expiry_time": "2023-08-01T12:00:00.000000Z"
}
```

**Notes**:
- The `expiry_time` is the time when the access token will expire, and the duration is based on the `SQRL_AUTH__TOKEN_EXPIRE_MINUTES` [environment variable] (usually 30 minutes)

## Change Password 🔒

Change the password for the currently authenticated user.

**Endpoint:** `PUT /api/squirrels-v0/project/{name}/{version}/change-password`

### Request

**Content-Type:** `application/json`

```json
{
    "old_password": "current_password",
    "new_password": "new_password"
}
```

### Response

**Success Response (200 OK)**

Empty response body on success.

## Get All Tokens 🔒

Retrieve all tokens for the current user.

**Endpoint:** `GET /api/squirrels-v0/project/{name}/{version}/tokens`

### Response

**Success Response (200 OK)**

```json
[
    {
        "token_id": "token_uuid",
        "title": "My API Token",
        "username": "johndoe",
        "created_at": "2023-08-01T12:00:00.000000Z",
        "expires_at": "2023-09-01T12:00:00.000000Z"
    }
]
```

## Create Token 🔒

Create a new token for the user.

**Endpoint:** `POST /api/squirrels-v0/project/{name}/{version}/tokens`

### Request

**Content-Type:** `application/json`

```json
{
    "title": "My API Token",
    "expiry_minutes": 43200  // Optional: 30 days
}
```

**Notes**:
- If `title` is not provided, a temporary token is created and `expiry_minutes` is ignored
- Temporary tokens cannot be revoked and are not listed for the "Get All Tokens" endpoint
- The lifetime of temporary tokens is based on the `SQRL_AUTH__TOKEN_EXPIRE_MINUTES` [environment variable] (usually 30 minutes)
- If `title` is provided and `expiry_minutes` is not provided (or null), the token will not expire

### Response

**Success Response (200 OK)**

Same format as login response:
```json
{
    "access_token": "encoded_jwt_token",
    "token_type": "bearer",
    "username": "johndoe",
    "is_admin": false,
    "expiry_time": "2023-08-01T12:00:00.000000Z"
}
```

## Revoke Token 🔒

Revoke a specific token.

**Endpoint:** `DELETE /api/squirrels-v0/project/{name}/{version}/tokens/{token_id}`

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| token_id | string | Yes | The ID of the token to revoke |

### Response

**Success Response (200 OK)**

Empty response body on success.

## Get Current User 🔒

Get the authenticated user's details.

**Endpoint:** `GET /api/squirrels-v0/project/{name}/{version}/me`

### Response

**Success Response (200 OK)**

```json
{
    "username": "johndoe",
    "is_admin": false,
    "role": "employee"
}
```

**Notes**:
- Fields in addition to `username` and `is_admin` are configured in the [user.py] file of the Squirrels project


[environment variable]: ../../docs/concepts/environment
[user.py]: ../../docs/concepts/user