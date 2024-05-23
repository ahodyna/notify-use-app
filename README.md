#  Microservices Project: User Service & Notification Service


This project consists of two microservices: user-service and notification-service. The purpose of these microservices is to manage users and send notifications, respectively.

## Prerequisites
    Docker
    Node.js and npm
    PostgresSQL
    RabbitMQ


## Getting Started

#### Setup

    docker compose up

 Once Docker has finished setting up the environment, you can start the microservices.


#### Running Microservices
 
To run the microservices, execute the following command in projects:

    npm run start


## Microservices Details


#### User Service

-  Framework: NestJS
-  Database: PostgreSQL
-  Message Broker: RabbitMQ
 
 Description: Manages user-related operations such as create user.


#### Notification Service
-  Framework: NestJS
-  Message Broker: RabbitMQ
 
 Description: Sends notifications to users. On this stage of implementation we only use request catcher.


## External API Call
An external API call is made using a request catcher. You can open the defined URL to see the request and its details.


## Example for Postman request

POST

    localhost:3000/users
      {
      "name": "user-name",
      "email": "user.email@test.com"
      }
