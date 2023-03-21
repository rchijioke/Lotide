const assertArraysEqual = require("./assertArraysEqual");
const eqArrays = require("./eqArrays");

/**
 * the code bellow provides a simple and effective way to flatten an array that may contain nested arrays
 * @param {*} ary The function flatten takes an array (ary) as its parameter and
 * @returns  returns a flattened version of the input array
 */

function flatten(ary) {
  var result = [];
  for (var i = 0; i < ary.length; i++) {
    if (Array.isArray(ary[i])) {
      result = result.concat(flatten(ary[i]));
    } else {
      result.push(ary[i]);
    }
  }
  return result;
}

console.log(flatten([1, 2, [3, 4], 5, [6]]));
