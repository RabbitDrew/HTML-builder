const fs = require('fs');
const path = require('path');
const readLine = require('readline');
const filePath = path.join(__dirname, 'text.txt');
//check wheather the file exist or not
const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const fileCreator = (filePath, content) => {
  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
      writeFile(filePath, content);
    } else {
      appendFile(filePath, content);
    }
  });

  const writeFile = (filePath, content) => {
    fs.writeFile(filePath, content + '\n', (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log('file is written');
      }
    });
  };

  const appendFile = (filePath, content) => {
    fs.appendFile(filePath, content + '\n', (err) => {
      if (err) {
        console.log(err);
      } else {
      }
    });
  };
};

const getInput = function () {
  rl.question('Enter the message: ', (input) => {
    if (input === 'exit') {
      console.log('Goodbye!');
      rl.close();
      process.exit();
    } else {
      fileCreator(filePath, input);
      getInput();
    }
  });
};

getInput();

rl.on('SIGINT', () => {
  rl.setPrompt('Goodbye!\n');
  rl.prompt();
  rl.close();
  process.exit();
});
