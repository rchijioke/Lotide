const assertEqual = require("./assertEqual")


/**
 *  this code provides a simple and efficient way to find a key in an object based on a specified value.
 * @param {*} objects: The function uses a for...in loop to iterate through each key in the object 
 * @param {*} value: For each key, it checks if the corresponding value of that key matches the given value
 * @returns If it does, the function returns the corresponding key. if it doesn's, it returns undefined
 */
const findKeyByValue = (objects, value) => {

  for (let key in objects) {
    if (objects[key] === value) {
      return key;
    }
  }
  return undefined
}







const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};
console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire")), "drama");
console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined));