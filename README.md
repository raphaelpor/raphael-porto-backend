# raphael-porto-backend

* Read the comments of this test, on **`COMMENTS.md`** file.

* See the **API Documentation** on **`docs/api-docs.html`** file.

## Setup environment

1. Install [Node.js v10](https://nodejs.org/en/download/)
2. Install [Yarn v1](https://yarnpkg.com/en/docs/install)
3. Run `yarn` to install project dependencies

## Commands available

### start

Runs the tests and a local server.

**Important**: you need a TMDB API key to run the project. You can set one with the command: `env API_KEY=my-key yarn start`.

### watch-start

Runs just a local server with watch mode

### prebuild

Runs all code validation (recommended before commit).

### deploy

Runs `yarn audit` with all code validation and deploys your application.

### performance [`host`]

Run `yarn performance host` to have a basic view of your app performance.
