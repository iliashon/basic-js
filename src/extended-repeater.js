const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */


function repeater(str, options) {

  console.log(((!options.repeatTimes)? 0: options.repeatTimes - 1))
  function creatBlock(str, options) {
    let dStr = '';
    let addStr = '';
    if (options.addition !== undefined) {
      for(let i = 0; i < ((!options.additionRepeatTimes)? 1: options.additionRepeatTimes); i++) {
        addStr += options.addition;
        if (i !== ((!options.additionRepeatTimes)? 0: options.additionRepeatTimes - 1)) {
          addStr += (!options.additionSeparator)? "|": options.additionSeparator;
        }
      }
    }
    dStr += str;
    dStr += addStr;
    return dStr
  }
  // throw new NotImplementedError('Not implemented');
  let doneArr = [];
  let i = 0;

  while (i < ((!options.repeatTimes)? 1: options.repeatTimes)) {
    doneArr.push(creatBlock(str, options));
    if (i !== ((!options.repeatTimes)? 0: options.repeatTimes - 1)) {
      doneArr.push((!options.separator) ? '+': options.separator)
    }
    i++;
  }

  return (doneArr.join(''));
}

// console.log(repeater('la', { repeatTimes: 3, separator: 's', addition: '+', additionRepeatTimes: 1 }))


module.exports = {
  repeater
};