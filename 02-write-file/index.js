const fs = require('fs');

const create = fs.createWriteStream('02-write-file/text.txt');
create.write('Hello');

const read = fs.createReadStream('02-write-file/text.txt');
read.on('data', (chank) => {
  console.log(chank.toString());
});
