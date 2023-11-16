# Full Stack Events Application

This repository contains a full stack application with an Express.js backend (`api`) and a React.js frontend (`events`).

## Prerequisites

Before you begin, ensure you have installed:

- [Node.js](https://nodejs.org/en/) (version 18 or above)
- [Docker](https://www.docker.com/products/docker-desktop)
- [Docker Compose](https://docs.docker.com/compose/install/) (usually included with Docker Desktop)

## Getting Started

Follow these steps to get your development environment set up:

**Clone the repository**

```sh
git clone https://github.com/your-repository/full-stack-events-app.git
cd full-stack-events-app
```

## 1. Set up the Backend API

Navigate to the api directory and install the dependencies.

```sh
cd api
npm install
```

To start the API in development mode, run:

```sh
npm run dev
```

To start the built API, run:

```sh
npm start
```

## 2. Set up the Frontend (Events)

Navigate to the events directory and install the dependencies.

```sh
cd ../events
npm install
```

To start the frontend application in development mode, run:

```sh
npm start
```

This will open up a browser window to http://localhost:3000 where you can see the running application.

## 3. Running with Docker

To run the full stack application with Docker, execute the following command from the root directory:

```sh
docker-compose up --build
```

This will build and start both the api and events services. The API will be accessible at http://localhost:8080/api/events, and the frontend will be available at http://localhost.

Testing
To run the tests for the backend, navigate to the api directory and run:

```sh
npm test
```

To run the tests for the frontend, navigate to the events directory and run:

```sh
npm test
```

## 4. Observation and thoughts

This is not a complete code by any means. The UI and backend is just show the application working.
