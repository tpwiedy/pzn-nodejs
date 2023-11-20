# USER API Spec

## Register User API

Endpoint : POST /api/users

Request Body:

```json
{
  "username": "wiedy",
  "password": "123456",
  "name": "Wiedy Tira Pratama"
}
```

Response Body Success :

```json
{
  "data": {
    "username": "wiedy",
    "name": "Wiedy Tira Pratama"
  }
}
```

Response Body Error :

```json
{
  "errors": "Username already registered"
}
```

## Login User API

Endpoint : POST /api/users/login

Request Body :

```json
{
  "username": "wiedy",
  "password": "123456"
}
```

Response Body Success :

```json
{
  "data": {
    "token": "unique-token"
  }
}
```

Response Body Error :

```json
{
  "errors": "Username or password is invalid"
}
```

## Update User API

Endpoint : PATCH /api/users/current

Headers :

- Authorization : token

Request Body:

```json
{
  "name": "Wiedy Tira Pratama kedua", //optional
  "password": "new password" //optional
}
```

Response Body success:

```json
{
  "data": {
    "username": "wiedy",
    "name": "Wiedy Tira Pratama kedua"
  }
}
```

Response Body Error :

```json
{
  "errors": "Name length max 100"
}
```

## Get User API

Endpoint : GET /api/users/current

Headers :

- Authorization : token

Response Body Success :

```json
{
  "data": {
    "username": "wiedy",
    "name": "Wiedy Tira Pratama"
  }
}
```

Response Body Error :

```json
{
  "errors": "Unauthorized"
}
```

## Logout User API

Endpoint : DELETE /api/users/logout
Headers :

- Authorization : token

Response Body Success :

```json
{
  "data": "OK"
}
```

Response Body Error :

```json
{
  "errors": "Unathorized"
}
```
