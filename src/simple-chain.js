const { reporters } = require('mocha');
const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  arr: [],

  getLength: function() {
    return this.arr.length;
  },
  addLink: function(value) {
    this.arr.push(`( ${value} )`);
    return this;
  },
  removeLink: function (position) {
    if (!Number.isInteger(position) || position < 1 || position > this.arr.length) {
      this.finishChain();
      throw new Error('You can\'t remove incorrect link!');
    }
    this.arr.splice(position - 1, 1);
    return this
  },
  reverseChain: function () {
    this.arr.reverse();
    return this;
  },
  finishChain: function () {
    let doneStr = (!this.arr[0]) ? '' : this.arr.join('~~');
    this.arr.splice(0, this.arr.length);
    return doneStr;
  }
};

console.log(chainMaker.addLink(function () { }).addLink('2nd').addLink('3rd').removeLink(2).reverseChain().finishChain())

module.exports = {
  chainMaker
};
