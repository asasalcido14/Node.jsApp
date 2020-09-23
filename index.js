const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");



// array of questions for user

const questions = [{
    type: "input",
    message: "What is the title of your project?",
    name: "title"
  },

  {
    type: "input",
    message: "Give a description of your project.",
    name: "description",
  },
 
  {
    type: "input",
    message: "How does the user install your application?",
    name: "install",
  },
  {
    type: "input",
    message: "what are the instructions on how to use your application ",
    name: "usage",
  },
  {
    type: "input",
    message: "Who were your contributors to your project?",
    name: "contribution",
  },
  {
    type: "input",
    message: "How could tests be applied to your application?",
    name: "tests",
  },
  {
    type: "list",
    message: "which license would you like to attach?",
    name: "license",
    choices: ["MIT", "apache2.0", "GNUv3.0", "BSD3", "none"]

  },
  {
    type: "input",
    message: "What is your GitHub username?",
    name: "username",
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "email",
  },
  {
    type: "number",
    message: "What is your phone number?",
    name: "pnumber",
  },

];

// function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// function to initialize program
function init() {
  inquirer
    .prompt(questions).then(function (response) {
      writeToFile("README.md", generateMarkdown({
        ...response
      }));
    });
}

// function call to initialize program
init();
