# nodeenv

nodeenv enables tests to control the NODE_ENV variable.

If you have any questions or feedback, feel free to contact me using [@goloroden](https://twitter.com/goloroden) on Twitter.

## Installation

    $ npm install nodeenv

## Quick start

To use nodeenv you need to integrate it to your unit-tests using the `require` function.

```javascript
var nodeenv = require('nodeenv');
```

Then, you can call the `nodeenv` function and specify the value for `NODE_ENV` you would like to use as well as a callback that contains the code that shall be run in the given environment.

```javascript
nodeenv('dev', function () {
  // ...
});
```

Once the callback returns, the previous value of `NODE_ENV` is automatically restored.

## Running the tests

nodeenv has been developed using TDD. To run the tests, go to the folder where you have installed nodeenv to and run `npm test`. You need to have [mocha](https://github.com/visionmedia/mocha) installed.

    $ npm test

Additionally, this module can be built using [Grunt](http://gruntjs.com/). Besides running the tests, Grunt also analyses the code using [JSHint](http://www.jshint.com/). To run Grunt, go to the folder where you have installed nodeenv and run `grunt`. You need to have [grunt-cli](https://github.com/gruntjs/grunt-cli) installed.

    $ grunt
