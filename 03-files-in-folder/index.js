let fs = require('fs');
const path = require('path');

const files = ['data.csv', 'script.js', 'style.css', 'text.txt'];
for (let i = 0; i < files.length; i++) {
  fs.readFile(
    path.join(__dirname, 'secret-folder', files[i]),
    'utf-8',
    function (err, data) {
      if (err) {
        console.error(err);
      } else {
        console.log(data);
      }
    },
  );
}
