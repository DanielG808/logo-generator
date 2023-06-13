const Shape = require("./Shape");

class Triangle extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor)
    }
    
    render() {
        return `<svg height="300" width="200">
        <polygon points="50 15, 100 100, 0 100" fill="${this.shapeColor}"/>
        <text x="30" y="75" font-size="1.5em" fill="${this.textColor}">${this.text}</text>
      </svg>`
    }
}

    

module.exports = Triangle;