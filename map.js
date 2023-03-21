const assertArraysEqual = function (firstOne, secondOne){
  if(eqArrays(first, second)){
    console.log("Assertion Pass")
  }
  else{console.log("Assertion Failed")}
  
    
}

const eqArrays = function(first, second){
  if(first.length !== second.length){
    return false
  }
  for(let i=0; i<first.length; i++){
    if (first[i] !== second[i]){
      return false
    }
  }
  return true
}


const words = ["ground", "control", "to", "major", "tom"];
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    // console.log('item BEFORE: ', item);
    // console.log('item AFTER: ', callback(item));
    // console.log('---');
    results.push(callback(item));
  }
  return results;
}

// const results1 = map(words, word => word[0]);
const results1 = map(words,(word) => {
  return word[0]
})
console.log(results1);

