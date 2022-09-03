# Express TypeScript Starter 

![image](https://user-images.githubusercontent.com/2646053/188286090-0b07eb1a-7312-48be-af5c-c24a7479517e.png)

## Definitions

| Library | Description |
| ------- | ----------- |
| Express | Minimal and flexible Node.js web application framework for creating [APIs](https://en.wikipedia.org/wiki/API). |
| TypeScript | A [strongly typed](https://en.wikipedia.org/wiki/Strong_and_weak_typing) programming language that builds on JavaScript, giving you better tooling at any scale. |
| ESLint  | [Statically analyzes](https://en.wikipedia.org/wiki/Static_program_analysis) your code to quickly find problems. |
| Jest    | A delightful JavaScript testing framework with a focus on simplicity. |

## About

This is a template repo for getting started with [Express](https://expressjs.com/) using [TypeScript](https://www.typescriptlang.org/). This repo contains a minimal [ESLint](https://eslint.org/) configuration to enforce coding styles, and comes equipped with [Jest](https://jestjs.io/) for unit and integration testing. Additionally, this repo demonstrates organizing controllers similarly to how components are organized in an [Angular](https://angular.io/guide/file-structure) project. Controllers are grouped by the API resource they serve, and the associated unit (spec.ts) and integration (e2e.ts) files live in the same directory.

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

<img width="1728" alt="image" src="https://user-images.githubusercontent.com/2646053/188285900-dd9af5d3-95fc-43a0-ab65-3dc1305d1da2.png">
