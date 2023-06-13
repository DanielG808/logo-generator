// DEPENDENCIES
const inquirer = require('inquirer')
const fs = require('fs');

const Shape = require('./lib/Shape');
const Circle = require('./lib/Circle');
const Square = require('./lib/Square');
const Triangle = require('./lib/Triangle');


// DATA
const questions = [
    {
        name: 'text',
        message: 'Enter your logo text (must be 3 characters or less):',
        type: 'input'
    },
    {
        name: 'textColor',
        message: 'Choose a color for your text (OR choose a hexidecimal code):',
        type: 'input'
    },
    {
        name: 'shape',
        message: 'Choose what shape you want to appear on your logo:',
        type: 'list',
        choices: ['square', 'triangle', 'circle']
    },
    {
        name: 'shapeColor',
        message: 'Choose a color for your shape (OR choose a hexidecimal code):',
        type: 'input'
    }
]

// FUNCTIONS

function chooseLogo(data) {
    const { text, textColor, shapeColor } = data;

    if (data.shape === 'circle') {
        const circle = new Circle(text, textColor, shapeColor);
        return circle.render();
    }
    else if (data.shape === 'square') {
        const square = new Square(text, textColor, shapeColor);
        return square.render();
    }
    else {
        const triangle = new Triangle(text, textColor, shapeColor);
        return triangle.render();
    }
}

function writeFile(filename, data) {
  fs.writeFile(filename, data, (error) => {
    if (error) throw error;
    console.log('logo.svg has been created!')
  })
}

function handleAnswers(answers) {
    if (answers.text.length > 3) {
        console.log("Logo text must be a max of 3 characters");
        init();
    }
    else {
        // write the file
        writeFile('logo.svg', chooseLogo(answers))
    }
}

function init() {
    inquirer
    .prompt(questions)
    .then(handleAnswers);
}

// USER INTERACTIONS

// INITIALIZATION
init();