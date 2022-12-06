<p>Invenco Test by Charitha Ranasingha
</p>

## Installation

```bash
$ npm install
```

## Running the app

```bash
$ npm run dev
```

## Running the tests

```bash
# unit tests
$ npm run test

# test coverage
$ npm run test:cov

# isthanbul coverage report is on
/coverage/lcov-report/index.html

```

## Running linters

```bash
# lint run
$ npm run lint

# lint run with fix
$ npm run lint --fix
```

## Authenticating with the API

### Generate the token using below user and api path

```bash
End point : localhost:3000/api/auth/login
Username : john@doe.com
Password : 123
```

#### Sample curl request

```bash
curl --location --request POST 'localhost:3000/api/auth/login' \
--header 'Content-Type: application/json' \
--data-raw '{
    "email":"john@doe.com",
    "password":"123"

}'
```

### Signing up a new user

```bash
End point : localhost:3000/api/auth/signup
```

#### Sample curl request

```bash
curl --location --request POST 'localhost:3000/api/auth/signup' \
--header 'Content-Type: application/json' \
--data-raw '{
    "email": "newuser@new.com",
    "password":"123"
}'
```

## once the token created, use the token in the header as

```bash
Access-Token
```

# Employee related end points

## Get all Employees

```bash
GET : localhost:3000/api/employees
```

#### Sample curl request

```bash
curl --location --request GET 'localhost:3000/api/employees' \
--header 'Access-Token: <REPLACE YOUR TOKEN HERE>'
```

## Get Employee by ID

```bash
GET : localhost:3000/api/employees/:id
```

#### Sample curl request

```bash
curl --location --request GET 'localhost:3000/api/employees/1' \
--header 'Access-Token: <REPLACE YOUR TOKEN HERE>'
```

## Insert a new Employee

```bash
POST : localhost:3000/api/employees
```

#### Sample curl request

```bash
curl --location --request POST 'localhost:3000/api/employees' \
--header 'Access-Token: <REPLACE YOUR TOKEN HERE>' \
--header 'Content-Type: application/json' \
--data-raw '{
    "first_name": "Mike",
    "last_name":"Tyson",
    "age":"45"
}'
```

## Update an employee

```bash
PUT : localhost:3000/api/employees
```

#### Sample curl request

```bash
curl --location --request PUT 'localhost:3000/api/employees' \
--header 'Access-Token: <REPLACE YOUR TOKEN HERE>' \
--header 'Content-Type: application/json' \
--data-raw '{
    "id" : 3,
    "first_name":"Updated first name",
    "last_name":"Updated last name",
    "age":"45"
}'
```

## Delete an employee

```bash
DELETE : localhost:3000/api/employees/:id
```

#### Sample curl request

```bash
curl --location --request DELETE 'localhost:3000/api/employees/ewfsdfd' \
--header 'Access-Token: <REPLACE YOUR TOKEN HERE>'
```

## Swagger Documentation

<a href="http://localhost:3000/docs" target="_blank" download>http://localhost:3000/docs</a>

## Download the postman script for all the scenarios

<a href="invenco_test.postman_collection.json" target="_blank" download>Click to Download</a>

## Future Improvements

```bash
* Dockerizing
* CI & CD Implementation
* Backend pagination support
```

