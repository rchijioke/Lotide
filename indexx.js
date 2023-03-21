// index.js
const head = require("./head");
const tail = require("./tail");
const middle = require("./middle");
const assertEqual = require("./assertEqual");
const { assertArraysEqual } = require("./assertArraysEqual");
const eqArrays = require("./eqArrays");
const eqObjects = require("./eqObjects");

module.exports = {
  head,
  tail,
  middle,
  assertEqual,
  assertArraysEqual,
  eqArrays,
  eqObjects,
};
