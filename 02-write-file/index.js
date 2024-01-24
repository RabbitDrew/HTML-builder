const fs = require('fs');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function quest() {
  rl.question("Hi bro! what's up?", function (answer) {
    console.log(answer);
    fs.appendFile('02-write-file/text.txt', answer + '\n', function (err) {
      if (err) {
        console.error(err);
      } else {
        console.log('The file was updated!');
        quest();
      }
    });
  });
}
quest();
