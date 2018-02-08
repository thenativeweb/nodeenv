# nodeenv

nodeenv enables tests to control Node.js environment variables.

## Installation

```shell
$ npm install nodeenv
```

## Quick start

To use nodeenv you need to integrate it in your application.

```javascript
const nodeenv = require('nodeenv');
```

Then, to set environment variables, call the `nodeenv` function and provide an object whose keys are the environment variables' names and the values are their values. If you set a value to `undefined`, the environment variable will be removed.

```javascript
const restore = nodeenv({
  NODE_ENV: 'dev'
});

// ...

restore();
```

Once you call `restore`, the previous values of the environment variables will be restored.

### Setting a single variable

If you only want to set a single environment variable, you can specify its key and value without needing an object.

```javascript
const restore = nodeenv('NODE_ENV', 'dev');

// ...

restore();
```

### Setting NODE_ENV

If you only want to set the `NODE_ENV` environment variable you only need to provide the value and the `nodeenv` function will take care of the rest.

```javascript
nodeenv('dev');

// ...

restore();
```

## Running the build

To build this module use [roboter](https://www.npmjs.com/package/roboter).

```shell
$ bot
```

## License

The MIT License (MIT)
Copyright (c) 2013-2018 the native web.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
