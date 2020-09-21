// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
![license badge here](https://img.shields.io/badge/license-${data.license}-red)

### Description
${data.description}

`;
}

module.exports = generateMarkdown;
