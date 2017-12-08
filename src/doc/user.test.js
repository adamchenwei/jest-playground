user-test.js
jest.mock('./request');

import * as user from './user';

// The assertion for a promise must be returned.
it('works with promises', () => {
  expect.assertions(1);
  console.log('what is user.getUserName');
  console.log(user.getUserName);
  return expect(user.getUserName(4)).resolve.toEqual('Mark');
});