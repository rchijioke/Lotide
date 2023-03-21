const assertEqual = require("./assertEqual");
/**
 * The eqArrays function takes two arrays as input and checks if they are equal in value and order. If the arrays are not of the same length, the function returns false. It then iterates over the elements of both arrays, and if it finds any mismatched elements, it returns false.
 * @param {*} first
 * @param {*} second
 * @returns
 */
const eqArrays = function(first, second) {
  if (first.length !== second.length) {
    return false;
  }
  for (let i = 0; i < first.length; i++) {
    if (first[i] !== second[i]) {
      return false;
    }
  }
  return true;
};

module.exports = eqArrays;
