'use strict';

/* eslint-disable no-process-env */

var nodeenv = function nodeenv(key, value) {
  var environmentVariables = void 0;

  if (typeof key === 'string') {
    if (arguments.length === 1) {
      value = key;
      key = 'NODE_ENV';
    }

    environmentVariables = {};
    environmentVariables[key] = value;

    return nodeenv(environmentVariables);
  }

  environmentVariables = key;

  var backupValues = {};

  Object.keys(environmentVariables).forEach(function (envKey) {
    var envValue = environmentVariables[envKey];

    backupValues[envKey] = process.env[envKey];

    if (envValue === undefined) {
      Reflect.deleteProperty(process.env, envKey);
    } else {
      process.env[envKey] = envValue;
    }
  });

  var restore = function restore() {
    Object.keys(backupValues).forEach(function (backupKey) {
      var backupValue = backupValues[backupKey];

      if (!backupValue) {
        Reflect.deleteProperty(process.env, backupKey);
      }
      process.env[backupKey] = backupValue;
    });
  };

  return restore;
};
/* eslint-enable no-process-env */

module.exports = nodeenv;