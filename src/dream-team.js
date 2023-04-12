const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */

function alphabetize(str) {
  return str.split('').sort().join('');
}

function createDreamTeam(members) {
  if (typeof members !== 'object' || members === null) {
    return false;
  }

  let secretStr = '';

  // const newMembers = members.map(e => e)
  // console.log(newMembers);

  for(let i = 0; i < members.length; i++) {
    if (typeof members[i] === 'string') {
      let str = members[i].trim().toUpperCase();
      secretStr += str[0];
    }
  }

  return alphabetize(secretStr);
}

console.log(createDreamTeam(['Olivia', 1111, '  lily', 'Oscar', true, null]));

module.exports = {
  createDreamTeam
};
