const inquirer = require('inquirer');

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your name?',
      name: 'name',
    },
    {
      type: 'input',
      message: 'What languages do you know?',
      name: 'language',
    },
    {
      type: 'input',
      message: 'What is your preferred method of communication?',
      name: 'comms',
    },
  ])
  .then((response) => {
    console.log(response)
  }
  );