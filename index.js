const fs = require('fs');
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
      choices: [],
      name: 'comms',
    },
  ])
  .then((response) => {
    console.log(response)
    const filename = `${response.name.split(' ').join('')}.json`;
    fs.writeFile(filename, JSON.stringify(Data, null, '\t'), (err) =>
        err ? console.log(err) : console.log('Success'));
  }
  );