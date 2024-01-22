const fs = require('fs'); //file sistem
const path = require('path');

fs.readFile(path.join(__dirname, 'text.txt'), 'utf-8', function (err, data) {
  if (err) {
    console.error(err);
  } else {
    console.log(data);
  }
});
