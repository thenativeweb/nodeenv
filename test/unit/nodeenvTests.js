'use strict';

const assert = require('assertthat');

const nodeenv = require('../../lib/nodeenv');

/* eslint-disable no-process-env */
suite('nodeenv', () => {
  let originalNodeEnv;

  setup(() => {
    originalNodeEnv = process.env.NODE_ENV;
    process.env.NODE_ENV = undefined;
  });

  teardown(() => {
    process.env.NODE_ENV = originalNodeEnv;
  });

  test('is a function.', done => {
    assert.that(nodeenv).is.ofType('function');
    done();
  });

  test('sets NODE_ENV when no key is given.', done => {
    const restore = nodeenv('bar');

    assert.that(process.env.NODE_ENV).is.equalTo('bar');
    restore();
    done();
  });

  test('sets an environment variable when a key and a value are given.', done => {
    const restore = nodeenv('foo', 'bar');

    assert.that(process.env.foo).is.equalTo('bar');
    restore();
    done();
  });

  test('sets multiple environment variables when an object is given.', done => {
    const restore = nodeenv({
      foo: 'bar',
      baz: 'bas'
    });

    assert.that(process.env.foo).is.equalTo('bar');
    assert.that(process.env.baz).is.equalTo('bas');
    restore();
    done();
  });

  test('removes an environment variable that is set to undefined.', done => {
    const restore = nodeenv('foo', undefined);

    assert.that(process.env.foo).is.undefined();
    restore();
    done();
  });

  test('removes environment variables that are set to undefined.', done => {
    const restore = nodeenv({
      foo: undefined,
      baz: undefined
    });

    assert.that(process.env.foo).is.undefined();
    assert.that(process.env.baz).is.undefined();
    restore();
    done();
  });
});
/* eslint-enable no-process-env */
