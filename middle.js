const eqArrays = require('./eqArrays');
const {assertArraysEqual} = require('./assertArraysEqual');
    

const middle = function (optionA){
  if( optionA.length < 2){
    return []
  }
  let theMiddle = []
 if (optionA.length % 2 !== 0){
  let middleIndex = (optionA.length - 1) / 2
  let middleElement = optionA[middleIndex]
  theMiddle.push(middleElement)
 }
 else {
  let middleIndex1 = (optionA.length - 2) / 2
  let middleIndex2 = ( middleIndex1 + 1)
  let middleElement1 = optionA[middleIndex1]
  let middleElement2 = optionA[middleIndex2]
  theMiddle.push(middleElement1)
  theMiddle.push(middleElement2)
}
  return theMiddle
}
  
module.exports = middle