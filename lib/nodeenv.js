'use strict';

/* eslint-disable no-process-env, no-param-reassign */
const nodeenv = function (key, value) {
  let environmentVariables;

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

  const backupValues = {};

  Object.keys(environmentVariables).forEach(envKey => {
    const envValue = environmentVariables[envKey];

    backupValues[envKey] = process.env[envKey];

    if (envValue === undefined) {
      Reflect.deleteProperty(process.env, envKey);
    } else {
      process.env[envKey] = envValue;
    }
  });

  const restore = function () {
    Object.keys(backupValues).forEach(backupKey => {
      const backupValue = backupValues[backupKey];

      if (!backupValue) {
        Reflect.deleteProperty(process.env, backupKey);
      } else {
        process.env[backupKey] = backupValue;
      }
    });
  };

  return restore;
};
/* eslint-enable no-process-env, no-param-reassign */

module.exports = nodeenv;
