# nodeenv

nodeenv enables tests to control Node.js environment variables.

## Installation

    $ npm install nodeenv

## Quick start

To use nodeenv you need to integrate it to your unit-tests using the `require` function.

```javascript
var nodeenv = require('nodeenv');
```

Then, you can call the `nodeenv` function and specify the key of the environment variable you would like to set as well as its new value and a callback that contains the code that shall be run.

```javascript
nodeenv('NODE_ENV', 'dev', function (done) {
  // ...
  done();
});
```

Once you call `done`, the previous value of the environment variable is restored.

### Setting the NODE_ENV variable

In case you want to control the `NODE_ENV` environment variable there's a shortcut you may use: In this case you can skip the key and simply provide the value.

```javascript
nodeenv('dev', function (done) {
  // ...
  done();
});
```

## Running the build

This module can be built using [Grunt](http://gruntjs.com/). Besides running the tests, this also analyses the code. To run Grunt, go to the folder where you have installed nodeenv and run `grunt`. You need to have [grunt-cli](https://github.com/gruntjs/grunt-cli) installed.

    $ grunt

## License

The MIT License (MIT)
Copyright (c) 2013-2014 the native web.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
