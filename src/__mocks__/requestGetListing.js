// const users = {
//   4: {name: 'Mark'},
//   5: {name: 'Paul'},
// };

// export default function (url) {
//   console.log('a mocked service got called!')
// return new Promise((resolve, reject) => {
//   const userID = parseInt(url.substr('/users/'.length), 10);
//   console.log(`userID in the mock servce is ...... ${userID}`)
//   process.nextTick(
//   () =>
//     users[userID]
//     ? resolve(users[userID])
//     : reject({
//       error: 'User with ' + userID + ' not found.',
//       }),
//     );
// });
// }