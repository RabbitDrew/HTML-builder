const fs = require('fs');
const path = require('path');
const readLine = require('readline');
const filePath = path.join(__dirname, 'text.txt');
const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const getInput = function () {
  rl.question('Enter the message: ', (input) => {
    if (input === 'exit') {
      console.log('Goodbye!');
      rl.close();
      process.exit();
    } else {
      const writeStream = fs.createWriteStream (filePath, { flags: 'a', encoding: 'utf-8' }) 
      writeStream.on('open', () => {})
      writeStream.write(input + `\n`)
      writeStream.end();
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