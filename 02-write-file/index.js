const fs = require('fs');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function quest() {
  rl.question("Hi bro! what's up?", function (answer) {
    console.log(answer);
    if (answer === "exit") { // если ответ равен exit, то вызываем функцию exit
      exit();
    } else {
      fs.appendFile('02-write-file/text.txt', answer + '\n', function (err) {
        if (err) {
          console.error(err);
        } else {
          quest();
        }
      });
    }
  });
}

function exit() {
  rl.close(); 
  process.exit(0); 
}

quest();

rl.on("SIGINT", exit); 

process.on("exit", (code) => {
  console.log(`Good luck bro, see you`);
});

