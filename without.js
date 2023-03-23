const assertArraysEqual = require("./assertArraysEqual");
const eqArrays = require("./eqArrays");

const without = (source, itemsToRemove) => {
  // let result = []

  return source.filter(function (num) {
    return !itemsToRemove.includes(num);
  });
};

console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]

module.exports = without