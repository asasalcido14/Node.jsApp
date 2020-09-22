// function to generate markdown for README
function generateMarkdown(data) {
  return `# Project Title: ${data.title}

  ## Description 
    * ${data.description}

  ## Table of Contents 

  * [Installation](#installation)
  
  * [Usage](#usage)
   
  * [Contributing](#contributing)
    
  * [Tests](#tests)
    
  * [Questions](#questions)
  
  ## Installation
    ${data.install}
  
  ## Usage
    ${data.usage}

  ## Contributions
    ${data.contribution}
  
  ## Tests
    ${data.tests}
  
  ## License
  ![license badge here](https://img.shields.io/badge/license-${data.license}-red)
  
  
  ## Questions
    Link to GitHub: https://github.com/${data.username})
    Email Address: ${data.email}
    Phone Number: ${data.pnumber}
  


  


`;
}

module.exports = generateMarkdown;
