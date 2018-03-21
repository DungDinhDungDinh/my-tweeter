I use create-react-app to build an React app without configuration like Webpack or Babel, or any build configuration in case I want to deploy this application to production.

## About splitTweet function:

* I have a standalone function which receives an orginal tweet and return the result.
* I have a recursive function which split tweet. If tweet does not satisfy conditions, I would return the code error.
* With long tweet, I cannot split tweet correctly first time bacause the child tweet length (50 chars maximum) dependent on indexing length (likes 2/2, 500/555). So I need to have a functtion is called [calcRedundantTweetsLength], I rely on calcRedundantTweetsLength function result to re-split tweet.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!
