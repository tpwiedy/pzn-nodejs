# Contact API Spec

## Create Contact API

Endpoint : POST /api/contacts

Headers :

- Autorization : token

Request Body :

```json
{
  "first_name": "Wiedy",
  "last_name": "Pratama",
  "email": "wiedy@pzn.com",
  "phone": "12314213123"
}
```

Response Body Success :

```json
{
  "data": {
    "id": 1,
    "first_name": "Wiedy",
    "last_name": "Pratama",
    "email": "wiedy@pzn.com",
    "phone": "12314213123"
  }
}
```

Response Body Error :

```json
{
  "errors": "Email is not valid format"
}
```

## Update Contact API

Endpoint : PUT /api/contacts/:id

Headers :

- Autorization : token

Request Body :

```json
{
  "first_name": "Wiedy",
  "last_name": "Pratama",
  "email": "wiedy@pzn.com",
  "phone": "12314213123"
}
```

Response Body Success :

```json
{
  "data": {
    "id": 1,
    "first_name": "Wiedy",
    "last_name": "Pratama",
    "email": "wiedy@pzn.com",
    "phone": "12314213123"
  }
}
```

Response Body Error :

```json
{
  "errors": "Email is not valid format"
}
```

## Get Contact API

Endpoint: GET /api/contacts

Headers :

- Autorization : token

Response Body :

```json
{
  "data": {
    "id": 1,
    "first_name": "Wiedy",
    "last_name": "Pratama",
    "email": "wiedy@pzn.com",
    "phone": "12314213123"
  }
}
```

Response Body Error :

```json
{
  "errors": "Contact not found"
}
```

## Search Contact API

Endpoint : GET /api/contacts

Headers :

- Autorization : token

Query params:

- name : Search by first_name or last_name, using like, optional
- email : Search by email using like, optional
- phone : Search by phone using like, optional
- page : number of page, default 1
- size : size per page, default 10

Response Body Success :

```json
{
  "data": [
    {
      "id": 1,
      "first_name": "Wiedy",
      "last_name": "Pratama",
      "email": "wiedy@pzn.com",
      "phone": "12314213123"
    },
    {
      "id": 2,
      "first_name": "Asep",
      "last_name": "Stroberi",
      "email": "asep@pzn.com",
      "phone": "123849813"
    }
  ],
  "paging": {
    "page": 1,
    "total_page": 3,
    "total_item": 30
  }
}
```

Response Body Error :

## Remove Contact API

Endpoint: DELETE /api/contacts/:id

Headers :

- Autorization : token

Response Body Success :

```json
"data" : "OK"
```

Response Body Error :

```json
{
  "errors": "Contact not found"
}
```
