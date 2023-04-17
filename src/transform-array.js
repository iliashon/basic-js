const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */

// function type(value) {
//   var regex = /^\[object (\S+?)\]$/;
//   var matches = Object.prototype.toString.call(value).match(regex) || [];

//   return (matches[1] || 'undefined').toLowerCase();
// }
// function transform(arr) {
//   // throw new NotImplementedError('Not implemented');
//   if (type(arr) !== 'array'){
//     throw new Error("'arr' parameter must be an instance of the Array!");
//   }
//   let doneArr = arr;
//   if(doneArr.indexOf('--discrard-prev')) {
//     return doneArr;
//   }
//   for(let i = 0; i < doneArr.length; i++){
//     if(doneArr[i] === '--discard-next'){
//       if(doneArr[i + 2] === '--double-prev' || doneArr[i + 2] === '--discard-prev') {
//         doneArr.splice(i, 3);
//       } else {
//         doneArr.splice(i, 2);
//       }
//     } else if (doneArr[i] === '--discard-prev') {
//       if(doneArr[i - 2] !== undefined) {
//         doneArr.splice(i - 1, 2);
//       } else {
//         doneArr.splice(i, 1);
//       }
//     }

//     if(doneArr[i] === '--double-next'){
//       if(doneArr[i + 1] !== undefined) {
//         doneArr.splice(i + 1, 0, doneArr[i + 1]);
//         doneArr.splice(i, 1);
//       } else {
//         doneArr.splice(i, 1);
//       }
//     } else if (doneArr[i] === '--double-prev') {
//       if(doneArr[i - 1] !== undefined) {
//         doneArr.splice(i - 1, 0, doneArr[i - 1]);
//         doneArr.splice(i + 1, 1);
//       } else {
//         doneArr.splice(i, 1);
//       }
//     }
//   }
//   return doneArr;
// }

// console.log('--double-next' === '--double-next')
// console.log(transform(["--discrard-next", "1", "--double-prev", 1]));

module.exports = {
  transform
};



function transform(arr) {

  //myLog(arr);
  if (!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!");
  let res = arr.slice();


  arr.forEach((el, ind) => {
    switch (el) {
      case '--discard-next':
        if (ind < res.length-1) {
          res[ind+1] = null;
          res[ind] = null;
        } else {
          res[ind] = null;
        }
        break;
      case '--discard-prev':
        if (ind > 0) {
          res[ind-1] = null;
          res[ind] = null;
        } else {
          res[ind] = null;
        }
        break;
      case '--double-next':
        if (ind < res.length-1) res[ind] = res[ind+1];
        else {
          res[ind] = null;
        }
        break;
      case '--double-prev':
        if (ind > 0)  res[ind] = res[ind-1];
        else {
          res[ind] = null;
        }
        break;
    }
  })
  console.log(res)
  return res.filter(el => el !== null);
}
// console.log(transform([ '--double-prev', { foo: 'bar' } ]));