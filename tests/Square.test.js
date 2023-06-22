const Square = require("../lib/Circle");

describe("Shape", () => {
  it("should make a Square.svg", () => {
    const shape = new Square("XYZ", "white", "purple");

    expect(shape.text).toBe("XYZ");
    expect(shape.textColor).toBe("white");
    expect(shape.shapeColor).toBe("purple");
  });
});
