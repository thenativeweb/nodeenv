'use strict';

var assert = require('node-assertthat');

var nodeenv = require('../lib/nodeenv');

suite('nodeenv', function () {
  /*eslint-disable no-process-env*/
  test('is a function.', function (done) {
    assert.that(nodeenv, is.ofType('function'));
    done();
  });

  test('does not throw an exception if no key is given.', function (done) {
    assert.that(function () {
      nodeenv('9e952479-953f-418b-9b5f-d24be4e2e443', function () {});
    }, is.not.throwing());
    done();
  });

  test('does not throw an exception if an empty value is given.', function (done) {
    assert.that(function () {
      nodeenv('8fa2f046-22af-475f-be5f-8e0546b164a5', undefined, function () {});
    }, is.not.throwing());
    done();
  });

  test('throws an exception if no callback is given.', function (done) {
    assert.that(function () {
      nodeenv('bda3f52f-46eb-43d0-9d5a-e657cdaa28e5', 'dfb86dcc-07c5-44ec-9d03-f4652512b538');
    }, is.throwing());
    done();
  });

  test('throws an exception if no callback is given even when no key is given.', function (done) {
    assert.that(function () {
      nodeenv('8598a3f3-77e2-4b48-83d3-dc17990cd8d8');
    }, is.throwing());
    done();
  });

  test('runs the callback.', function (done) {
    var hasBeenRun = false;
    nodeenv('f580d7f8-4c1c-4169-9464-3e7f6295bb70', '70f73003-c717-4dd3-98c3-1d613e1805d4', function (restore) {
      hasBeenRun = true;
      restore();
      assert.that(hasBeenRun, is.true());
      done();
    });
  });

  test('runs the callback using the given value.', function (done) {
    nodeenv('d080c1f2-3c9e-445b-8921-701fd367d7ef', 'b8bf059f-d703-447c-82c8-977f78c8c0db', function (restore) {
      assert.that(process.env['d080c1f2-3c9e-445b-8921-701fd367d7ef'], is.equalTo('b8bf059f-d703-447c-82c8-977f78c8c0db'));
      restore();
      done();
    });
  });

  test('runs the callback using the given value even if the value is undefined.', function (done) {
    nodeenv('a1563015-08e1-4895-a8ca-e64edb89ca98', undefined, function (restore) {
      assert.that(process.env['a1563015-08e1-4895-a8ca-e64edb89ca98'], is.undefined());
      restore();
      done();
    });
  });

  test('runs the callback using the key NODE_ENV when no key is given.', function (done) {
    nodeenv('705a6ce0-740d-4ebe-a3b8-cb7dbed385f5', function (restore) {
      assert.that(process.env.NODE_ENV, is.equalTo('705a6ce0-740d-4ebe-a3b8-cb7dbed385f5'));
      restore();
      done();
    });
  });

  test('restores the original value after running the callback.', function (done) {
    var originalEnvironment = process.env['dac75669-af5b-4b66-9777-b8dab5e29d13'];
    nodeenv('dac75669-af5b-4b66-9777-b8dab5e29d13', '3362e020-a786-495d-8855-da5943354434', function (restore) {
      restore();
      assert.that(process.env['dac75669-af5b-4b66-9777-b8dab5e29d13'], is.equalTo(originalEnvironment));
      done();
    });
  });
  /*eslint-enable no-process-env*/
});
