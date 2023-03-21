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
