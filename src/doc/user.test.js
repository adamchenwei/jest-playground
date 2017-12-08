user-test.js
jest.mock('./request');

import * as user from './user';

// The assertion for a promise must be returned.
it('works with resolves', () => {
  expect.assertions(1);
  return expect(user.getUserName(5)).resolves.toEqual('Paul');
});