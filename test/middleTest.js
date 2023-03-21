const middle = require('../middle');

 
 //[1,2,3,4,5,6] (6-2/2)+1


//  console.log(middle([1])) // => []
//  middle([1, 2]) // => []
//  middle([1, 2, 3]) // => [2]
//  console.log(middle([1, 2, 3, 4, 5])) // => [3]
//  middle([1, 2, 3, 4]) // => [2, 3]
//  middle([1, 2, 3, 4, 5, 6]) // => [3, 4]

const assert = require('chai').assert;


describe("#middle", () => {
  it("returns [2]for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });

  it("returns [] for [5,3]", () => {
    assert.deepEqual(middle([5,3]), [5,3]);
  })
  it("returns [] for ['5']", () => {
    assert.deepEqual(middle(['5']), []);
  })
});