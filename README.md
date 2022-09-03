# Express TypeScript Starter

This is a template repo for getting started with Express using TypeScript. This repo contains a minimal ESLint configuration to enforce coding styles, and comes equipped with Jest for unit and integration testing. Additionally, this repo demonstrates organizing controllers similarly to how components are organized in an Angular project. Controllers are grouped by the API resource they serve, and the associated unit (spec.ts) and integration (e2e.ts) files live in the same directory.

## Getting Started

Click the green Use this template button to copy this repo to your GitHub account. Once you've copied the repo clone it to your workspace and install the dependencies:

```sh
npm i
```

Run the unit and integration tests to ensure everything installed correctly:

```sh
npm test && npm run e2e
```

Start the development server:

```sh
npm start
```

The development server should begin listening for web requests. If you navigate to https://localhost:8080 in your browser you should see something that resembles the following:

