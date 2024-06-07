// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
    {
      type: "input",
      name: "title",
      message: "What is the title of this README?",
    },
    {
      type: "input",
      name: "description",
      message: "What would you like on your README file?",
    },
    {
      type: "input",
      name: "installation",
      message: "How can you install this?",
    },
    {
      type: "input",
      name: "usage",
      message: "How do you use this?",
    },
    ]

inquirer
.prompt(questions)
.then((answers) => {
  const fileName = "README.md";
  const generateREADME = `
# ${answers.title}

## Description
${answers.description}

## Installation
${answers.installation}

## Usage
${answers.usage}

## Contributing
${answers.contributing}

## License 
${answers.license}
`;

  writeToFile(fileName, generateREADME);
});

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
      if (err) {
          console.error(err);
          return;
      }
      console.log("Successfully created README file");
  });
}

// function writeToFile(fileName, data) {
//   const generateREADME = ({ title, description, installation, usage, contributing, license})`
//     # ${data.title}
    
//     ## Description
//     ${data.description}
    
//     ##Installation
//     ${data.installation}
    
//     ## Usage
//     ${data.usage}
    
//     ## Contributing
//     ${data.contributing}
    
//     ## License 
//     ${data.license}
//     `;
// writeToFile(fileName, generateREADME, (err) => {
//   err ? console.log(err) : console.log("Successfully created README file");
// });
// }
// TODO: Create a function to initialize app
function init() {
//   console.log("Initializing app...");
//   createDirectories();
// }
// function createDirectories() {
//   console.log("Creating necessary directories...");
}
// Function call to initialize app
init();
