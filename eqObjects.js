const assertEqual = require("./assertEqual");
let eqArrays = require("./eqArrays");
/**
 * Implement the definition for function eqObjects which will take in two objects
 * @param {*} object1
 * @param {*} object2
 * and returns true or false, based on a perfect match.
 * @returns
 *
 */

const eqObjects = function(object1, object2) {
  const object1Array = Object.keys(object1);
  const object2Array = Object.keys(object2);

  if (typeof object1 !== "object" && typeof object2 !== "object") {
    return object1 === object2;
  }

  if (object1Array.length !== object2Array.length) {
    return false;
  }

  for (const key of object1Array) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      const result = eqArrays(object1[key], object2[key]);

      if (!result) {
        return false;
      }
    }

    if (typeof object1[key] !== typeof object2[key]) {
      return false;
    }
    if (typeof object1[key] !== "object" && typeof object2[key] !== "object") {
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
  }

  return true;
};

module.exports = eqObjects;
