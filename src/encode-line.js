const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  // throw new NotImplementedError('Not implemented');
  let doneStr = str;
  let secretArr = [];
  while (doneStr != '') {
    secretArr.push([doneStr.length - doneStr.replace(RegExp(`${doneStr[0]}+`), '').length, doneStr[0]]);
    doneStr = doneStr.replace(RegExp(`${doneStr[0]}+`), '');
  }
  return secretArr.flat(Infinity).filter(e => e != '1').join('').replace();
}

module.exports = {
  encodeLine
};
