const eqObjects = require("./eqObjects")


/**
 * our assertObjectsEqual function which will help us easily test functions that return objects
 * @param {*} actual 
 * @param {*} expected 
 */
const assertObjectsEqual = function(actual, expected) {
  
  const inspect = require('util').inspect;
  console.log(`Example label: ${inspect(actual)}`);

  if(eqObjects(actual, expected)){
    console.log("Assertion Pass")
  }
  else{console.log("Assertion Failed")
}

}
assertObjectsEqual()