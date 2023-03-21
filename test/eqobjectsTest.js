
const eqObjects = require("../eqObjects")
const assertEqual = require("../assertEqual")


const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject= { size: "medium", color: "red" };
console.log(eqObjects(shirtObject , anotherShirtObject)); // => true

const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
console.log(eqObjects(shirtObject , longSleeveShirtObject)); // => false

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
console.log(eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject)); // => true

const longSleeveMultiColorShirtObject= { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
console.log(eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject)); // => false

console.log(eqObjects({a:1, b:2}, {b:1, a:1})); // => false
console.log(eqObjects({a:1, b:[1,2]}, {b:[1,3], a:1})); // => false
console.log(eqObjects({a:[1,2], b:1}, {a:[1,2], b:2})); // => false