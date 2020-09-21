const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");



// array of questions for user

const questions = [
    {
        type: "input",
        message: "What would you like the title of your project to be?",
        name: "title"
      },
      {
        type: "input",
        message: "Give a description of your project.",
        name: "description",
      },
      {
        type: "list",
        message: "which license would you like to attach?",
        name: "license",
        choices: [ "MIT","apache2.0","GNUv3.0","BSD3","none"]

      }

];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(),fileName),data);
}

// function to initialize program
function init() {
    inquirer
        .prompt(questions).then(function(response){
        writeToFile("README.md",generateMarkdown({...response}));
        });
}

// function call to initialize program
init();
