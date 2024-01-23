const fs = require('fs');
const path = require('path')
/*fs.writeFileSync('02-write-file/project-dist/bundle.css', 'Hello World', 'utf-8');
const result = fs.readFileSync('text.txt', 'utf-8');
console.log(result);*/

function bundle() {
    const files = fs.readdirSync('05-merge-styles/test-files/styles');
    console.log(files);

    fs.mkdirSync('05-merge-styles/project-dist/styles', {recursive: true});
    console.log('the folder is created');

    for (let i = 0; i < files.length; i++) {
      const content = fs.readFileSync(path.join(__dirname, 'test-files', 'styles', files[i]), 'utf-8');
      console.log(content);
      fs.appendFileSync('05-merge-styles/project-dist/styles/bundle.css', content + '\n', 'utf-8'); // добавляем перенос строки в конец каждого файла стиля
    }
  }
  bundle();

