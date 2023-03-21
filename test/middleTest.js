const middle = require("../middle");

const assert = require("chai").assert;

describe("#middle", () => {
  it("returns [2]for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });

  it("returns [] for [5,3]", () => {
    assert.deepEqual(middle([5, 3]), [5, 3]);
  });
  it("returns [] for ['5']", () => {
    assert.deepEqual(middle(["5"]), []);
  });
});
