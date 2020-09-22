// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
![license badge here](https://img.shields.io/badge/license-${data.license}-red)

### Description
${data.description}

 

  
## Questions
Link to GitHub(https://github.com/${data.username})
Email:${data.emailaddress}







`;
}

module.exports = generateMarkdown;
