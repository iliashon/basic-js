const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

function isNumber(num) {
	return typeof num === 'number' && !isNaN(num);
}

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 * 
 */
function dateSample(sampleActivity) {  
  if (typeof sampleActivity !== 'string'
    || Number.isInteger(sampleActivity) 
    || +sampleActivity < 0 
    || typeof +sampleActivity !== 'number' 
    || typeof sampleActivity == 'undefined' 
    || !isNumber(+sampleActivity)) 
  // if (!(parseInt(sampleActivity) >= 0)) 
  {
    return false;
  }

  const k = 0.693 / HALF_LIFE_PERIOD;
  const ln = Math.log(MODERN_ACTIVITY / +sampleActivity);

  if ((Math.ceil(ln / k)) === Infinity || (Math.ceil(ln / k)) < 0) {
    return false;
  }
  return Math.ceil(ln / k);
}

// console.log(dateSample(' \n\t\r'))

module.exports = {
  dateSample
};
