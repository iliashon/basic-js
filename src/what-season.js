const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */

function type(value) {
  var regex = /^\[object (\S+?)\]$/;
  var matches = Object.prototype.toString.call(value).match(regex) || [];

  return (matches[1] || 'undefined').toLowerCase();
}

function getSeason(date) {

  if (date === undefined) {
    return 'Unable to determine the time of year!';
  }

  try {
    let err = date.getDay();
    let errF = date.getTime();

    if (type(date) !== 'date') {
      throw new Error('Invalid date!');
    }

    if (date.getMonth() == 1){
      if(date.getDay() > 28) {
        throw 'Invalid date!';
      }
    }

    let m = date.getMonth();

    if (typeof m !== 'number') {
      return 'Unable to determine the time of year!';
    }

    if (m == 11 || m == 0 || m == 1 ) {
      return 'winter';
    } else if (m == 2 || m == 3 || m == 4) {
      return 'spring';
    } else if (m == 5 || m == 6 || m == 7) {
      return 'summer';
    } else if (m == 8 || m == 9 || m == 10) {
      return 'autumn';
    }
  } catch {
      throw new Error('Invalid date!');
  }
}

module.exports = {
  getSeason
};
