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
      //Title
      {
        type: "input",
        message: "Give a description of your project.",
        name: "description",
      },
      //Description
      {
        type: "input",
        message: "What are the your Table of Contents?",
        name: "toc",
      },
      // ??I want to try and get these to be a list???
      {
        type: "input",
        message: "How does the user install your application?",
        name: "install",
      },
      {
        type: "input",
        message: "Who were your contributors to your project?",
        name: "contribution",
      },
      {
        type: "input",
        message: "What is your GitHub username?",
        name: "username",
      },
      {
        type: "input",
        message: "What is your email address?",
        name: "emailaddress",
      },
      {
        type: "list",
        message: "which license would you like to attach?",
        name: "license",
        choices: [ "MIT","apache2.0","GNUv3.0","BSD3","none"]
  
      },
      
      
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
