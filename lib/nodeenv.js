'use strict';

var nodeenv = function (key, value, callback) {
  if (!key) {
    throw new Error('Key is missing.');
  }
  if (!callback) {
    throw new Error('Callback is missing.');
  }

  var oldValue = process.env[key];

  process.env[key] = value;
  callback(function () {
    if (!oldValue) {
      return delete process.env[key];
    }
    process.env[key] = oldValue;
  });
};

module.exports = nodeenv;
