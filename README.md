Grocery Booking API

Project Overview

This is a Grocery Booking API built using TypeScript with Node.js and MySQL. The system allows users to view grocery items and place orders, while administrators manage grocery items and inventory.

Features

User Role

View available grocery items.

Place an order with multiple items.

Admin Role

Add new grocery items.

View and manage inventory.

Update or delete items.

Technologies Used

Backend: Node.js (TypeScript, Express.js)

Database: MySQL

Containerization: Docker

Project Setup

Prerequisites

Install Node.js (>=16.x)

Install Docker (if using containerized setup)

Install MySQL (if running outside Docker)

Clone the Repository

Install Dependencies

Environment Variables (.env)

Create a .env file in the root directory:

Start MySQL Database

If using Docker, run:

Run Database Migrations

Start the Application

API Endpoints

User Routes

Method

Endpoint

Description

GET

/items

View items

POST

/orders

Place order

Admin Routes

Method

Endpoint

Description

POST

/admin/items

Add grocery item

PUT

/admin/items/:id

Update item

DELETE

/admin/items/:id

Delete item

Running in Docker

Testing

Run unit tests using:

Contributing

Fork the repo

Create a feature branch

Commit your changes

Push and open a Pull Request

License

MIT License