# Insurance Policy Management API

This project implements a RESTful API service for managing insurance policies using NestJS, a progressive Node.js framework. The API allows for creating, reading, updating, and deleting insurance policies. It features basic authentication, middleware for logging and error handling, and connects to a mock database for demonstration purposes. The backend infrastructure is designed to be scalable and reliable, integrating with Google Cloud services for enhanced performance.

## Features

- CRUD operations for insurance policies.
- Basic authentication with JWT.
- Middleware integration for logging and error handling.
- Connection to a PostgreSQL mock database.
- Scalable backend infrastructure design suitable for cloud deployment.

## Getting Started

### Prerequisites

- Node.js (v14 or later).
- NestJS CLI.
- PostgreSQL installed locally or access to a PostgreSQL database.
- Google Cloud account (optional for cloud deployment enhancements).

### Installation

1. **Clone the repository:**

    ```bash
    git clone <repository-url>
    ```

2. **Navigate to the project directory:**

    ```bash
    cd insurance-api
    ```

3. **Install dependencies:**

    ```bash
    npm install
    ```

4. **Configure your database connection in `app.module.ts`** by updating the TypeORM configuration with your database credentials.

5. **(Optional) Set up environment variables** for database credentials and JWT secret in a `.env` file for better security and configurability.

### Running the Application

- **Run the application in development mode:**

    ```bash
    npm run start:dev
    ```

    The API will be available at `http://localhost:3000/`.

### Accessing API Documentation

This project utilizes Swagger for API documentation. Once the application is running, access the Swagger UI at `http://localhost:3000/api` to view the available endpoints and their specifications.

## Backend Infrastructure Design

The backend infrastructure is designed with scalability and reliability in mind. It incorporates:

- **Microservices Architecture**: For handling different aspects of the system efficiently.
- **API Gateway**: As the single entry point, routing requests to appropriate services.
- **Message Queues**: For asynchronous communication between services.
- **Load Balancers**: To distribute incoming traffic and ensure high availability.
- **Database Design**: Utilizing PostgreSQL for structured data and considering NoSQL options for scalability.

### Google Cloud Services Integration (Optional)

For projects requiring enhanced scalability and reliability, the following Google Cloud services are recommended:

- **Compute Engine or Kubernetes Engine**: For hosting services.
- **Pub/Sub**: For message queue management.
- **Cloud SQL & Firestore**: For managed database services.
- **Cloud Load Balancing**: For traffic distribution.
- **Cloud IAM**: For secure authentication and authorization.

## License

This project is licensed under the [MIT License](LICENSE.md) - see the file for details.

## Acknowledgments

- NestJS for the comprehensive and powerful framework.
- TypeORM for database management.
- Google Cloud for scalable cloud services.
