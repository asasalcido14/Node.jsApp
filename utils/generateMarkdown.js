// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  ## Description:
  ${data.description}
  
  ## Table of Contents:
  ${data.toc}
  ## Installation Instructions:
  ${data.install}
  ## Usage Information:
  
  ## Contributing Guidelines: 
  
  ## Tests:
  
  ## Questions:
  
  Link to GitHub: (https://github.com/${data.username})
  Email:${data.emailaddress}
  
  ## License:
  
  ![license badge here](https://img.shields.io/badge/license-${data.license}-red)

`;
}

module.exports = generateMarkdown;
