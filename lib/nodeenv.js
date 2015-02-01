'use strict';

/*eslint-disable no-process-env*/
var nodeenv = function (key, value, callback) {
  var backupValues,
      environmentVariables;

  if (typeof key === 'string') {
    if (typeof value === 'function') {
      callback = value;
      value = key;
      key = 'NODE_ENV';
    } else if (typeof callback === 'undefined') {
      throw new Error('Callback is missing.');
    }

    environmentVariables = {};
    environmentVariables[key] = value;

    return nodeenv(environmentVariables, callback);
  }

  if (typeof value === 'undefined') {
    throw new Error('Callback is missing.');
  }

  environmentVariables = key;
  callback = value;
  backupValues = {};

  Object.keys(environmentVariables).forEach(function (envKey) {
    var envValue = environmentVariables[envKey];

    backupValues[envKey] = process.env[envKey];

    if (envValue === undefined) {
      delete process.env[envKey];
    } else {
      process.env[envKey] = envValue;
    }
  });

  callback(function () {
    Object.keys(backupValues).forEach(function (backupKey) {
      var backupValue = backupValues[backupKey];

      if (!backupValue) {
        return delete process.env[backupKey];
      }
      process.env[backupKey] = backupValue;
    });
  });
};
/*eslint-enable no-process-env*/

module.exports = nodeenv;
