const Shape = require("../lib/Shape");

describe("Shape", () => {
  it("should make a shape object", () => {
    const shape = new Shape();

    expect(shape instanceof Shape).toBe(true);
  });
});
