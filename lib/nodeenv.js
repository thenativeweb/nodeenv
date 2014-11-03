'use strict';

var nodeenv = function (key, value, callback) {
  /*eslint-disable no-process-env*/
  var oldValue;

  if (!callback) {
    callback = value;
    value = key;
    key = 'NODE_ENV';
  }

  if (!callback) {
    throw new Error('Callback is missing.');
  }

  oldValue = process.env[key];

  if (value === undefined) {
    delete process.env[key];
  } else {
    process.env[key] = value;
  }

  callback(function () {
    if (!oldValue) {
      return delete process.env[key];
    }
    process.env[key] = oldValue;
  });
  /*eslint-enable no-process-env*/
};

module.exports = nodeenv;
