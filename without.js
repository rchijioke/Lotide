const assertArraysEqual = require("./assertArraysEqual")
const eqArrays = require("./eqArrays")

const without = (source, itemsToRemove) => {
// let result = []
  

// for(let i = 0; i < source.length; i++){
//   for(let j = 0; j < itemsToRemove.length; j++) {
// if (source[i] !== itemsToRemove[j]){
//   return result.push([source[i], itemsToRemove[j])
// }
// }
// }
// }

  return  source.filter(function (num) {
       return !itemsToRemove.includes(num);
  });

}


console.log(without([1, 2, 3], [1])) // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]