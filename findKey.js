
  const assertEqual = require("./assertEqual")

  /**
   * the function below searches through an object to find a specific key based on the result of a callback function provided by the user.
   * its uses
   * @param {*} object 
   * @param {*} callBack 
   * @returns 
   * If none of the callBack function calls return true, the function returns undefined.
   */

  const findKey = function(object, callBack){
  
    for(let key in object){
      if( callBack(object[key])){
        return key
      }
    
    }
    return undefined
  }
  console.log(findKey({
    "Blue Hill": { stars: 1 },
    "Akaleri":   { stars: 3 },
    "noma":      { stars: 2 },
    "elBulli":   { stars: 3 },
    "Ora":       { stars: 2 },
    "Akelarre":  { stars: 3 }
  }, x => x.stars === 2) )// => "noma"
 

 