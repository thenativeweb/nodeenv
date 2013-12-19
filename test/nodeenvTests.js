'use strict';

var assert = require('node-assertthat');

var nodeenv = require('../lib/nodeenv');

suite('nodeenv', function () {
  test('is a function.', function () {
    assert.that(nodeenv, is.ofType('function'));
  });

  test('throws an exception if no NODE_ENV value is given.', function () {
    assert.that(function () {
      nodeenv(undefined, function () {});
    }, is.throwing());
  });

  test('throws an exception if no callback is given.', function () {
    assert.that(function () {
      nodeenv('dev', undefined);
    }, is.throwing());
  });

  test('runs the callback.', function () {
    var hasBeenRun = false;
    nodeenv('dev', function () {
      hasBeenRun = true;
    });
    assert.that(hasBeenRun, is.true());
  });

  test('runs the callback using the given NODE_ENV value.', function () {
    nodeenv('b8bf059f-d703-447c-82c8-977f78c8c0db', function () {
      assert.that(process.env.NODE_ENV, is.equalTo('b8bf059f-d703-447c-82c8-977f78c8c0db'));
    });
  });

  test('restores the original NODE_ENV value after running the callback.', function () {
    var originalEnvironment = process.env.NODE_ENV;
    nodeenv('dev', function () {
    });
    assert.that(process.env.NODE_ENV, is.equalTo(originalEnvironment));
  });
});
