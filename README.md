# NestJS Prisma Swagger App

This project is a NestJS application integrated with Prisma for database management using PostgreSQL, and it includes Swagger for API documentation.

## Features

- **NestJS Framework**: A progressive Node.js framework for building efficient and scalable server-side applications.
- **Prisma**: An ORM that simplifies database access and management.
- **PostgreSQL**: A powerful, open-source relational database system.
- **Swagger**: A tool for documenting APIs, making it easier to understand and interact with the API endpoints.
- **Docker Support**: Easily deploy and manage the application using Docker.

## Project Structure

```
nestjs-prisma-swagger-app
├── src
│   ├── app.controller.ts
│   ├── app.module.ts
│   ├── app.service.ts
│   ├── main.ts
│   ├── prisma
│   │   └── prisma.service.ts
│   ├── modules
│   │   └── example
│   │       ├── example.controller.ts
│   │       ├── example.module.ts
│   │       └── example.service.ts
│   └── common
│       └── swagger.config.ts
├── prisma
│   └── schema.prisma
├── docker
│   └── docker-compose.yml
├── Dockerfile
├── package.json
├── tsconfig.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- PostgreSQL
- Docker (optional, for containerization)

### Installation

1. Clone the repository:

   ```
   git clone <repository-url>
   cd nestjs-prisma-swagger-app
   ```

2. Install dependencies:

   ```
   npm install
   ```

3. Set up the PostgreSQL database and update the connection string in the `.env` file.

### Running the Application

To run the application locally, use the following command:

```
npm run start:dev
```

### Accessing Swagger Documentation

Once the application is running, you can access the Swagger documentation at:

```
http://localhost:3000/api
```

### Docker

To run the application using Docker, use the following command:

```
docker-compose up --build
```

## License

This project is licensed under the MIT License. See the LICENSE file for details.
