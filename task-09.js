import * as allUsers from "./users.js";
let users = allUsers.default;

const getNamesSortedByFriendsCount = (users) => {
   return users
      .sort((a, b) => a.friends.length - b.friends.lenght)
      .map((user) => user.name);
};

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]