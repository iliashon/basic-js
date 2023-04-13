const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  // throw new NotImplementedError('Not implemented');
  let varNum = [];
  let doneArr = [];
  for(let i = 0; i < ('' + n).length; i++) {
    varNum.push(('' + n).split('').map(Number));
    varNum[i].splice(i, 1);
    doneArr.push(+varNum[i].join(''))
  }
  return (Math.max(...doneArr));
}

module.exports = {
  deleteDigit
};
