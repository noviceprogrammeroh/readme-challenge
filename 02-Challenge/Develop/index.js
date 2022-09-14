
function init() {
  // TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
// const questions = [];

const generateReadMe = ({ title, description, installation, usage, test, license, contribution, email }) =>
`
#Project ${title};
## Description ${description};

## Table of Contents
- [installation](#installation)
- [usage](#usage)
- [License](#license)
- [Badges](#Badges};
- [Tests](#Tests};
- [Contribution](#Contribution)

##installation
${installation}

## License 
${license}

## Usage 
${usage}

## Badges

## How to Contribute
${contribution}

## Tests 
${test}

`;

inquirer
.prompt ([
    {
        type: 'input',
        message: 'What is the title of the project?',
        name: 'title',
      },

      {
        type: 'input',
        message: 'Please write a description of your project?',
        name: 'description',
      },

      {
        type: 'input',
        message: 'Please explain the steps of the installation process?',
        name: 'installation',
      },

      {
        type: 'input',
        message: 'What is the usage of this program?',
        name: 'usage',
      },
      {
        type: 'input',
        message: 'Please command should be run to run test?',
        name: 'test',
      },

      {
        type: 'input',
        message: 'What kind of license your project have?',
        name: 'license',
      },

      {
        type: 'input',
        message: 'What does the user need to know about contributing to the repo?',
        name: 'contribution',
      },

      {
        type: 'input',
        message: 'Enter email address?',
        name: 'email',
      },

      {
        type: 'input',
        message: 'Enter linkedin?',
        name: 'linkedin',
      }


])
.then((answers) => {
    const htmlContent = generateReadMe(answers)
    // TODO: Create a function to write README file
    fs.writeFile('README.md', htmlContent, (err) =>
    err ? console.log(err) : console.log('Successfully created index.html!')
  );

});

// TODO: Create a function to initialize app
}

// Function call to initialize app
init();
