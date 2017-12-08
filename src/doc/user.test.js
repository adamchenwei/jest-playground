// Copyright 2004-present Facebook. All Rights Reserved.

'use strict';
jest.mock('./request');

import * as user from './user';

// Testing promise can be done using `.resolves`.
test('works with resolves', () => {
  console.log('what is user.getUserName');
  console.log(user.getUserName.toString());
  expect.assertions(1);
  return expect(user.getUserName(5)).resolves.toEqual('Paul');
});
