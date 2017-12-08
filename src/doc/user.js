import request from './request';

export function getUserName(userID) {
  console.log('where is request')
  console.log(request)
  return request('/users/' + userID).then(user => user.name);
}