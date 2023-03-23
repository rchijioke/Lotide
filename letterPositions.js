const { assertArraysEqual } = require("./assertArraysEqual");
const eqArrays = require("./eqArrays");

/**
 * letterPositions function takes in a string and returns an object that maps each unique letter in the string to an array of its corresponding indices in the string, ignoring spaces
 * @param {*} sentence 
 * @returns 
 */
const letterPositions = function (sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    const letter = sentence[i];
    if (letter !== " ") {
      // ignore spaces
      if (!results[letter]) {
        results[letter] = [];
      }
      results[letter].push(i);
    }
  }
  return results;
};

console.log(letterPositions("lighthouse in the house"));

assertArraysEqual(letterPositions("hello").e, [1]);

module.exports = letterPositions
