'use strict';

var assert = require('assertthat');

var nodeenv = require('../lib/nodeenv');

/*eslint-disable no-process-env*/
suite('nodeenv', function () {
  setup(function () {
    assert.that(process.env.foo).is.undefined();
    assert.that(process.env.NODE_ENV).is.undefined();
  });

  teardown(function () {
    assert.that(process.env.foo).is.undefined();
    assert.that(process.env.NODE_ENV).is.undefined();
  });

  test('is a function.', function (done) {
    assert.that(nodeenv).is.ofType('function');
    done();
  });

  test('sets NODE_ENV when no key is given.', function (done) {
    nodeenv('bar', function (restore) {
      assert.that(process.env.NODE_ENV).is.equalTo('bar');
      restore();
      done();
    });
  });

  test('sets an environment variable when a key and a value are given.', function (done) {
    nodeenv('foo', 'bar', function (restore) {
      assert.that(process.env.foo).is.equalTo('bar');
      restore();
      done();
    });
  });

  test('sets multiple environment variables when an object is given.', function (done) {
    nodeenv({
      foo: 'bar',
      baz: 'bas'
    }, function (restore) {
      assert.that(process.env.foo).is.equalTo('bar');
      assert.that(process.env.baz).is.equalTo('bas');
      restore();
      done();
    });
  });

  test('removes an environment variable that is set to undefined.', function (done) {
    nodeenv('foo', undefined, function (restore) {
      assert.that(process.env.foo).is.undefined();
      restore();
      done();
    });
  });

  test('removes environment variables that are set to undefined.', function (done) {
    nodeenv({
      foo: undefined,
      baz: undefined
    }, function (restore) {
      assert.that(process.env.foo).is.undefined();
      assert.that(process.env.baz).is.undefined();
      restore();
      done();
    });
  });
});
/*eslint-enable no-process-env*/
