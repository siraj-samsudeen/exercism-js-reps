import { helloWorld } from './hello-world';
describe('hello world', () => {
  it('returns Hello world!', () => {
    expect(helloWorld()).toEqual('Hello world!');
  });
});
