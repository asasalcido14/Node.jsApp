// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
![license badge here](https://img.shields.io/badge/license-${data.license}-red)

### Description
${data.description}

### Questions
![website link to GitHub](https://github.com/${data.username})






`;
}

module.exports = generateMarkdown;
