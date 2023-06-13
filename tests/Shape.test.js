const Shape = require("../lib/Shape");

describe("Shape", () => {
    it('should make a shape object', () => {
        const shape = new Shape();

        expect(shape instanceof Shape).toBe(true);
    })
    it('should have a color property that is a string data type', () => {
        const shape = new Shape("blue");
        const color = shape.color
        
        expect(color).toBeDefined();
        expect(typeof color).toEqual("string");
    })
    it('should have a callback function called setShapeColor', () => {
        const shape = new Shape();
        
        expect(shape).toHaveProperty("setShapeColor");
        expect(typeof shape.setShapeColor).toBe("function");
    })
    it('should have a color property', () => {
        const shape = new Shape();
        const color = shape.setShapeColor("blue");
        
        expect(color).toEqual("blue");
    })
})