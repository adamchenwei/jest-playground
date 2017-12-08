
import requestGetListing from './requestGetListing';
export function getListing(userID) {
  console.log('whats inside requestGetListing for the real listing.js?');
  console.log(requestGetListing);
  console.log(`actual user id received is ${userID}`)
  return requestGetListing('/users/' + userID).then(user => {
    console.log('---------user -----');
    console.log(user)
    return user.name});
}