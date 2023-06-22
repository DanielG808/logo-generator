const Triangle = require("../lib/Circle");

describe("Shape", () => {
  it("should make a triangle.svg", () => {
    const shape = new Triangle("XYZ", "white", "purple");

    expect(shape.text).toBe("XYZ");
    expect(shape.textColor).toBe("white");
    expect(shape.shapeColor).toBe("purple");
  });
});
