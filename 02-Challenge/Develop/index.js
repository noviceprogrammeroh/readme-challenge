
// TODO: Create a function to initialize app
function init() {


  // TODO: Include packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown.js')
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input

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
        type: 'list',
        message: 'What kind of license your project have?',
        name: 'license',
        choices:[
          'No license',
          'Mozilla Public License 2.0',
          'Apache License 2.0', 
          'MIT License', 
          'Boost Software License 1.0', 
          'The Unlicense'      
      ],
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
.then((data) => {
    const htmlContent = generateMarkdown(data);

    // TODO: Create a function to write README file
    writeToFile('README.md', htmlContent);
});


function writeToFile(fileName, htmlContent) {
  fs.writeFile(fileName, htmlContent, (err) =>
  err ? console.log(err) : console.log('Successfully created readme file!')
);
}

}

// Function call to initialize app
init();
