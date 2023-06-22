const Circle = require("../lib/Circle");

describe("Shape", () => {
  it("should make a circle.svg", () => {
    const shape = new Circle("XYZ", "white", "purple");

    expect(shape.text).toBe("XYZ");
    expect(shape.textColor).toBe("white");
    expect(shape.shapeColor).toBe("purple");
  });
});
