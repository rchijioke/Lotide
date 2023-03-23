const { assertArraysEqual } = require("./assertArraysEqual");
const eqArrays = require("./eqArrays");

/**
 * The map funtion takes in an array and a callback function, applies the callback function to each element of the array and returns a new array
 */
const words = ["ground", "control", "to", "major", "tom"];
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

/**
 * it uses the new result to create a new array "results1" by applying a callback function that extracts the first letter of each word in the "words" array, which is logged to the console.
 */
const results1 = map(words, (word) => {
  return word[0];
});
console.log(results1);

module.exports = map;
