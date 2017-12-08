'use strict';

const users = {
  4: {name: 'Mark'},
  5: {name: 'Paul'},
};

export default function request(url) {
  console.log('----I am the mocked request')
  return new Promise((resolve, reject) => {
    console.log('-------inside mocked request')
    const userID = parseInt(url.substr('/users/'.length), 10);
    () =>
        users[userID]
          ? resolve(users[userID])
          : reject({
              error: 'User with ' + userID + ' not found.',
            })
  });
}
