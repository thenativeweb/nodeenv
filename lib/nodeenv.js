'use strict';

var nodeenv = function (environment, callback) {
  if (environment === undefined) { throw new Error('environment is missing.'); }
  if (!callback) { throw new Error('callback is missing.'); }

  var currentEnvironment = process.env.NODE_ENV;

  process.env.NODE_ENV = environment;
  callback();

  process.env.NODE_ENV = currentEnvironment;
};

module.exports = nodeenv;
