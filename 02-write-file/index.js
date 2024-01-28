const fs = require('fs');
const path = require('path');
const readline = require('readline');
//interface of readline
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
//ask question
function quest() {
  rl.question(
    "Hi) You've got three wishes\n What would you chose ?\n",
    function (answer) {
      //add first answer
      fs.appendFile('02-write-file/text.txt', `${answer}` + '\n', (err) => {
        if (err) {
          throw err;
        } else {
          if (answer === 'exit' || answer === 'quite') {
            //if we print the words quite or exit the function will be close
            exit();
          }
          //callback for adding the rest of answers to the text.txt file
          writeAnswer();
        }
      });
    },
  );
}
quest();
//write answer to th file
function writeAnswer() {
  rl.on('line', (a) => {
    fs.appendFile('02-write-file/text.txt', `${a}` + '\n', (err) => {
      if (err) {
        throw err;
      } else {
        if (a === 'exit' || a === 'quite') {
          //if we print the words quite or exit the function will be close
          exit();
        }
      }
    });
  });
}
//handler for 'ctrl+c' to  the "Good luck bro, see you"
process.on('exit', (code) => {
  console.log(`Good luck bro, see you`);
});
//exit function
function exit() {
  rl.close();
}
