import * as allUsers from "./users.js";
let users = allUsers.default;

const getSortedUniqueSkills = (users) => {
   return users
      .reduce((acc, user) => {
         acc.push(...user.skills);
         return acc;
      }, [])
      .filter((user, index, arr) => arr.indexOf(user) === index)
      .sort();
};

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]