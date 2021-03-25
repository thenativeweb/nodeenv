# nodeenv

nodeenv enables tests to control Node.js environment variables.

## Status

| Category         | Status                                                                                                  |
| ---------------- | ------------------------------------------------------------------------------------------------------- |
| Version          | [![npm](https://img.shields.io/npm/v/nodeenv)](https://www.npmjs.com/package/nodeenv)                   |
| Dependencies     | ![David](https://img.shields.io/david/thenativeweb/nodeenv)                                             |
| Dev dependencies | ![David](https://img.shields.io/david/dev/thenativeweb/nodeenv)                                         |
| Build            | ![GitHub Actions](https://github.com/thenativeweb/nodeenv/workflows/Release/badge.svg?branch=main) |
| License          | ![GitHub](https://img.shields.io/github/license/thenativeweb/nodeenv)                                   |

## Installation

```shell
$ npm install nodeenv
```

## Quick start

To use nodeenv you need to integrate it in your application.

```javascript
const { nodeenv } = require('nodeenv');
```

If you use TypeScript, use the following code instead:

```typescript
import { nodeenv } from 'nodeenv';
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

## Running quality assurance

To run quality assurance for this module use [roboter](https://www.npmjs.com/package/roboter):

```shell
$ npx roboter
```
