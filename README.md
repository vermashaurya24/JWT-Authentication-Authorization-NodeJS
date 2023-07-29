
# JSON Web Tokens based Authentication / Authorization in NodeJS



## Introduction
This project is a stateless user authentication and authorization system based on JSON Web Tokens (JWT). It allows users to register, log in, and access protected routes using JWT for secure authentication.
## Features

- User registration with a unique username and password
- JWT token generation upon successful login
- Access protected routes only with valid JWT authentication

## Installation

To run this project locally, you'll need the following installed on your system:

- Node.js (version 12 or higher)
- npm or yarn

```bash
git clone https://github.com/vermashaurya24/JWT-Authentication-Authorization-NodeJS.git
```
Install the dependencies
```bash
npm install
```
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`MONGO_URI`

`JWT_SECRET_KEY`

Start the server by moving to the cloned directory and running the command
```bash
npm start
```
## API Reference

#### User Registration
- Description: Register a new user with a unique username and password.

```http
  POST /api/v1/register
```
- Request body in JSON format:
```json
{
  "userName": "your_username",
  "password": "your_password"
}
```

- Response:
```json
{
  "msg": "User registration successful"
}
```

#### Login

- Description: Authenticate an existing user and obtain a JWT token for subsequent requests.

```http
  POST /api/login
```
- Request body in JSON format:
```json
{
  "userName": "your_username",
  "password": "your_password"
}
```

- Response:
```json
{
  "msg": "Login successful",
  "token": "your_jwt_token_here"
}
```

- This API also returns a cookie with the JSON Web Token embedded into it. The cookie is secure and is set to expire in 1 hour.


#### Protected Route
- Description: Access a protected route that requires valid JWT authentication.

```http
  GET /api/v1/protectedRoute
```

- This route can lead to anywhere, as per the users demands, and can be customized. 

- In order to access the response of this route, the request must provide the previously returned valid JWT.

- Authorization Header: `YOUR_JWT_TOKEN`

- Response:
```json
{
    "msg": "Token verification successful. You can now access this route."
}
```
## API Requests and Responses Demo

In this section, you can find screenshots of API calls made via Postman for each of the endpoints.

#### User Registration API Call
![image](https://github.com/vermashaurya24/JWT-Authentication-Authorization-NodeJS/assets/58764912/b7867a10-bcab-4a3f-8140-aac784cdf3ea)

#### Login API Call
![image](https://github.com/vermashaurya24/JWT-Authentication-Authorization-NodeJS/assets/58764912/dbb9dda9-54e9-4409-9c86-cd1c7e946768)

#### Protected Route API Call
![image](https://github.com/vermashaurya24/JWT-Authentication-Authorization-NodeJS/assets/58764912/369b8b92-a6b6-4d5f-87d9-8198b7257b4b)
