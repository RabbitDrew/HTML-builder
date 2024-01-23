const fs = require('fs'); //file sistem

// Создаем объект fs.ReadStream для файла input.txt
let reader = fs.createReadStream('01-read-file/text.txt');
reader.on ('data', (chank) => {
  console.log(chank.toString())
})