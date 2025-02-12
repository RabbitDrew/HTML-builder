const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, 'text.txt');

const readStream = fs.createReadStream(filePath, 'utf-8');
readStream.on('error', (err) => {
  console.log(err);
});

readStream.on('data', (chunk) => {
  console.log(chunk);
});

readStream.on('end', () => {
  console.log('finish reading');
});
