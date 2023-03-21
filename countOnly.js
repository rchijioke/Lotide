// FUNCTION IMPLEMENTATION
const assertEqual = require("./assertEqual")

  // allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  let sCounter = 0
  const result = {};

  for (const item of allItems) {
    console.log(item);
  }
  for(i=0; i < allItems.length; i++){
    const item = allItems[i]
    if(itemsToCount[item]){
      if(result[item]){
        result[item] = result[item] += 1
      }
      else {
        result[item] = 1
      }
    }
  }
  return result
}
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);


