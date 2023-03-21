const {assertArraysEqual} = require("./assertArraysEqual")
const eqArrays = require("./eqArrays")

const letterPositions = function(sentence) {
  const results = {};
  for(let i=0; i< sentence.length; i++){
    const letter = sentence[i];
    if (letter !== ' ') { // ignore spaces
      if (!results[letter]) {
        results[letter] = [];
      }
      results[letter].push(i);
    }
  }
  return results;
};

console.log(letterPositions("lighthouse in the house"))

assertArraysEqual(letterPositions("hello").e, [1]);