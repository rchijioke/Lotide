const assertEqual = require("./assertEqual");

/**
 * This code defines an arrow function called tail that takes an array as input. The function returns a new array that contains all elements of the original array except the first one. If the input array has a length of one or less, the function returns the original array.
 *
 * @param {*} arr
 * @returns
 */
const tail = (arr) => (arr.length === 1 ? [] : arr.slice(1));



module.exports = tail;
