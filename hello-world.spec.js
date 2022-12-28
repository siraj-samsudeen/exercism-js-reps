import { helloWorld } from './hello-world';

describe('hello world', () => {
  it('return hello world', () => {
    expect('Hello World!').toBe(helloWorld());
  });
});
