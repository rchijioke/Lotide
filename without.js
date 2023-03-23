const assertArraysEqual = require("./assertArraysEqual");
const eqArrays = require("./eqArrays");



/**
 * without function removes elements from an array @param {*} source  that are present in another array @param {*} itemsToRemove , and returns @returns a new array with only the remaining element
 *  
 */
const without = (source, itemsToRemove) => {

  let newArr = [];

  for (let i = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i])) {
      newArr.push(source[i]);
    }
  }
  return newArr;
};

console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]

module.exports = without