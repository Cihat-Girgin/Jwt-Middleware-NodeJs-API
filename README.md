# JWT Protected NodeJs API


This project shows how you can easily jwt protect your endpoints in web api apps built with node js.
It is an easy and simple application.
So, it will be suitable for those who are new to coding and those who do not know jwt at all.


## Installation

Run the following commands in order to start the application.

```sh
npm i
node app
```

## About application
"http://localhost:3005/api/auth/login"  -> it's public endpoint
1-First, we get a token by sending a request to the login endpoint.
![jwt1](https://user-images.githubusercontent.com/73026903/136690318-b2eec96e-9093-4cb7-a158-f6c4aaf2655a.png)

2-Then let's send request to protected end point without token.
![jwt2](https://user-images.githubusercontent.com/73026903/136690477-7f565ae6-1767-4d46-8cff-fc7912c38400.png)
As seen when we send request without token we get unauthorized transaction status code

3-Now let's send request to same endpoint with token
![jwt3](https://user-images.githubusercontent.com/73026903/136690625-24d546ee-e59e-4077-8123-d65197159827.png)


We have successfully received our list.
You can review project code for more.


