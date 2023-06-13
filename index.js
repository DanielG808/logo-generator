// DEPENDENCIES
import inquirer from "inquirer";

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

function handleAnswers(answers) {
    if (answers.text.length < 3) {
        console.log("Logo text must be a minimum of 3 characters");
        init();
    }
    else {
        // write the file
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