'use strict';

var nodeenv = function (key, value, callback) {
  var oldValue;

  if (!callback) {
    callback = value;
    value = key;
    key = 'NODE_ENV';
  }

  if (!callback) {
    throw new Error('Callback is missing.');
  }

  oldValue = process.env[ key ];

  process.env[ key ] = value;
  callback(function () {
    if (!oldValue) {
      return delete process.env[ key ];
    }
    process.env[ key ] = oldValue;
  });
};

module.exports = nodeenv;
