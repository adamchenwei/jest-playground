// Copyright 2004-present Facebook. All Rights Reserved.

import request from './request';

export function getUserName(userID) {
  console.log('inside actual user');
  console.log(request.toString());
  return request('/users/' + userID).then(user => user.name);
}
