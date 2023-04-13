const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  // throw new NotImplementedError('Not implemented');
  let countSimbol = 0;
  let l1 = s1.split("");
  let l2 = s2.split("");

  for(let i = 0; i < l1.length; i++){
    for(let j = 0; j < l2.length; j++){
      if(l1[i] === l2[j]){
        countSimbol++;
        delete l2[j];
        break;
      }
    }
  }
  return (countSimbol)
}

module.exports = {
  getCommonCharacterCount
};


// for(let i = 0; i < s1.length; i++){

//   for(let j = 0; j < s2.length; i++){
//     if (s1[i] === s2[j]) {
//       countSimbol++;
//     }
//   }
// }
// return countSimbol;