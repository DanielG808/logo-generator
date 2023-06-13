const Shape = require("./Shape");

class Square extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor)
    }
    
    render() {
        return `<svg height="300" width="200">
        <rect width="160" height="160" fill="${this.shapeColor}"/>
        <text x="28" y="90" font-size="4em" fill="${this.textColor}">${this.text}</text>
     </svg>`
    }
}

module.exports = Square;