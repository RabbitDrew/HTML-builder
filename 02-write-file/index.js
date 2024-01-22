const fs = require('fs');
fs.writeFileSync('02-write-file/text.txt', 'Hello World', 'utf-8');
const result = fs.readFileSync('text.txt', 'utf-8');
console.log(result);