<h1 align="center">🚀 Space-x code challenge 🚀</h1>

## Set up

1. `npm install`

## Available Commands

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode. Use `npm run test:no-watch` to run tests without a watcher.<br />

### `npm run test:no-watch`

Runs tests without a watcher.

### `npm run test:coverage`

Displays the code coverage within the console and also generates a coverage folder.

> To view the code coverage report in your browser open the `index.html` file within the `coverage/lcov-report` folder.

### `npm run lint`

Runs the ESLint typescript code lint checker. Running `npm run lint:fix` will automatically fix any lint errors where possible.

### `npm run build`

Builds a production version of the app inside the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run analyze`

This will run a production build and then analyze the output using [source-map-explorer] which analyzes JavaScript bundles using their source maps. This helps you understand where code bloat is coming from.

In the dropdown on top left, click on `[number].[hash].chunk.js` to see which **node_modules** packages are taking up the most space or `main.[hash].chunk.js` which is the actual source code.
