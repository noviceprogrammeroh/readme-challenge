let license;
let choices;
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

// function renderLicenseBadge(license) {
//   if (license) {
//     return true;
// } else{
//   return "";
// }

// }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {
//   if(license == 'MIT') {
//     return 'https://img.shields.io/apm/l/l';

//   } else {
//     return "";
//   }
// }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string


 


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) { 
return `

# Project 
${data.title};

## License
The application is covered by license : ${data.license}.
<br />
![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)<br />

# Badges

## Description
${data.description};

## Table of Contents
- [installation](#installation)
- [usage](#usage)
- [License](#license)
- [Tests](#Tests};
- [Contribution](#Contribution)

## installation
${data.installation}

## Usage 
${data.usage}

## How to Contribute
${data.contribution}

## Tests 
${data.test}



## Contact Information
My email address is :${data.email}
[README-generator](https://github.com/noviceprogrammeroh/readme-challenge)
My Linkedin page is :${data.linkedin}

 `;
  
}

module.exports = generateMarkdown;
// module.exports = isLicence;



