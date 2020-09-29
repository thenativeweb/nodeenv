import { assert } from 'assertthat';
import { nodeenv } from '../../lib/nodeenv';

/* eslint-disable no-process-env */
suite('nodeenv', (): void => {
  let originalNodeEnv: string | undefined;

  setup(async (): Promise<void> => {
    originalNodeEnv = process.env.NODE_ENV;
    process.env.NODE_ENV = undefined;
  });

  teardown(async (): Promise<void> => {
    process.env.NODE_ENV = originalNodeEnv;
  });

  test('is a function.', async (): Promise<void> => {
    assert.that(nodeenv).is.ofType('function');
  });

  test('sets NODE_ENV when no key is given.', async (): Promise<void> => {
    const restore = nodeenv('bar');

    assert.that(process.env.NODE_ENV).is.equalTo('bar');
    restore();
  });

  test('sets an environment variable when a key and a value are given.', async (): Promise<void> => {
    const restore = nodeenv('foo', 'bar');

    assert.that(process.env.foo).is.equalTo('bar');
    restore();
  });

  test('sets multiple environment variables when an object is given.', async (): Promise<void> => {
    const restore = nodeenv({
      foo: 'bar',
      baz: 'bas'
    });

    assert.that(process.env.foo).is.equalTo('bar');
    assert.that(process.env.baz).is.equalTo('bas');
    restore();
  });

  test('removes an environment variable that is set to undefined.', async (): Promise<void> => {
    // eslint-disable-next-line unicorn/no-useless-undefined
    const restore = nodeenv('foo', undefined);

    assert.that(process.env.foo).is.undefined();
    restore();
  });

  test('removes environment variables that are set to undefined.', async (): Promise<void> => {
    const restore = nodeenv({
      foo: undefined,
      baz: undefined
    });

    assert.that(process.env.foo).is.undefined();
    assert.that(process.env.baz).is.undefined();
    restore();
  });
});
/* eslint-enable no-process-env */
