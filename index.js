const fs = require('fs');
const inquirer = require('inquirer');

inquirer
  .prompt([

    // Title header
    {
      type: 'input',
      message: 'What is your projects title?',
      name: 'title',
    },

    // Main section
    {
      type: 'input',
      message: 'What is the purpose of your project?',
      name: 'd-purpose',
    },
    {
      type: 'input',
      message: 'What skills did you use to make this project?',
      name: 'd-skills',
    },
    {
      type: 'input',
      message: 'What languages did you need for this project?',
      name: 'd-language',
    },
    {
      type: 'input',
      message: 'How would you install this project?',
      name: 'installation',
    },
    {
      type: 'input',
      message: 'How do you use this project?',
      name: 'usage',
    },
    {
      type: 'input',
      message: 'How would someone contact you to contribute to this project?',
      name: 'contribution',
    },
    {
      type: 'input',
      message: 'How would you test this project?',
      name: 'test',
    },

    // License section
    {
      type: 'checkbox',
      message: 'What license are you using?',
      choices: ["MIT", "GNU GPLv3"],
      name: 'license',
    },

    // Questions section
    {
      type: 'input',
      message: 'What is your Github username?',
      name: 'github',
    },
    {
      type: 'input',
      message: 'What is your email address?',
      name: 'email',
    },
  ])
  .then((response) => {
    console.log(response)
    const filename = `${response.name.split(' ').join('')}.json`;
    fs.writeFile(`${response.name}readme.md`, JSON.stringify(Data, null, '\t'), (err) =>
        err ? console.log(err) : console.log('Successfully created readme'));
  }
  );