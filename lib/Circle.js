const Shape = require("./Shape");

class Circle extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor)
    }

    render() {
        return `<svg height="300" width="200">
        <circle cx="100" cy="100" r="80" fill="${this.shapeColor}"/>
        <text x="48" y="115" font-size ="4em" fill="${this.textColor}">${this.text}</text>
    </svg>`
    }
}

module.exports = Circle;