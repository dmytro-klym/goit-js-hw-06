import * as allUsers from "./users.js";
let users = allUsers.default;

const calculateTotalBalance = (users) => {
  return users.reduce((total, user) => total + user.balance, 0);
};

console.log(calculateTotalBalance(users)); // 20916