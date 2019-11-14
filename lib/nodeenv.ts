/* eslint-disable no-process-env */
const nodeenv = function (key: string | NodeJS.ProcessEnv, value?: any): () => void {
  let environmentVariables: NodeJS.ProcessEnv;

  if (typeof key === 'string') {
    /* eslint-disable no-param-reassign */
    if (arguments.length === 1) {
      value = key;
      key = 'NODE_ENV';
    }
    /* eslint-enable no-param-reassign */

    environmentVariables = {};
    environmentVariables[key] = value;

    return nodeenv(environmentVariables);
  }

  environmentVariables = key;

  const backupValues: NodeJS.ProcessEnv = {};

  Object.keys(environmentVariables).forEach((envKey: string): void => {
    const envValue = environmentVariables[envKey];

    backupValues[envKey] = process.env[envKey];

    if (envValue === undefined) {
      Reflect.deleteProperty(process.env, envKey);
    } else {
      process.env[envKey] = envValue;
    }
  });

  const restore = function (): void {
    Object.keys(backupValues).forEach((backupKey: string): void => {
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

export { nodeenv };
