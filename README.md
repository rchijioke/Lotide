# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @rchijioke`

**Require it:**

`const _ = require('@rchijioke');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

- ` assertEqual`: description: function to test if the values are equal

- `assertArraysEqual`: description: function with two parameters that compare if the array values are the same

- `midde`: description:
  This block of code defines a function called middle which takes an array as a parameter called optionA. The function checks if the length of optionA is less than 2, and if so, it returns an empty array.

If optionA has a length greater than or equal to 2, the function creates a new array called theMiddle. It then checks if optionA has an odd length, and if so, it calculates the index of the middle element, retrieves that element from optionA, and adds it to theMiddle.

If optionA has an even length, the function calculates the indices of the two middle elements, retrieves them from optionA, and adds them to theMiddle. Finally, the function returns theMiddle.

- `eqArray`: description:
  The eqArrays function takes two arrays as input and checks if they are equal in value and order. If the arrays are not of the same length, the function returns false. It then iterates over the elements of both arrays, and if it finds any mismatched elements, it returns false.

- `head`: description
  The purpose of the function below is to return the first element of the input array.

- `tail`: description
  This code defines an arrow function called tail that takes an array as input. The function returns a new array that contains all elements of the original array except the first one. If the input array has a length of one or less, the function returns the original array.

- `eqObjects`: description
 function eqObjects which will take in two objects and returns true or false, based on a perfect match.

 - `assertObjectsEqual`: description
  our assertObjectsEqual function which will help us easily test functions that return objects using the 2 parameters listed below
 @param {*} actual
  @param {*} expected
 

 - `countLetters`: description
 the countLetters function should take in a sentence  @param {*} sentence (as a string) and then return  @returns a count of each of the letters in that sentenc
 
 - `countOnly`: description

 countOnly function takes in two arrays and returns an object with a count of specific items that appear in the first array according to the second array

 - `findKey`: description
 the findKey funtion searches through an object to find a specific key based on the result of a callback function provided by the user.
 its uses
 * @param {*} object
 * @param {*} callBack
 * @returns
 If none of the callBack function calls return true, the function returns undefined.
 - `findKeyByValue`: description
findKeyByValue provides a simple and efficient way to find a key in an object based on a specified value.
 @param {*} objects: The function uses a for...in loop to iterate through each key in the object
 @param {*} value: For each key, it checks if the corresponding value of that key matches the given value
 @returns If it does, the function returns the corresponding key. if it doesn's, it returns undefined
 
 - `flatten`: description
the code bellow provides a simple and effective way to flatten an array that may contain nested arrays
@param {*} ary The function flatten takes an array (ary) as its parameter and
 @returns  returns a flattened version of the input array
 
 - `letterPositions`:
 desctiption
  letterPositions function takes in a string and returns an object that maps each unique letter in the string to an array of its corresponding indices in the string, ignoring spaces
 @param {*} sentence 
 @returns 
 
 - `map`: description
   The map funtion takes in an array and a callback function, applies the callback function to each element of the array and returns a new array
 

 - `takeUntil`: description
takeUntil function takes in an array @param {*} array and a callback @param {*} callback function, iterates through the array until the callback function returns @returns true, and returns a new array with all the elements up to the element that triggered the callback function
 - `without`: descriotion
  without function removes elements from an array @param {*} source  that are present in another array @param {*} itemsToRemove , and returns @returns a new array with only the remaining element