const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, 'secret-folder');

fs.readdir(
  filePath,
  { encoding: 'utf-8', withFileTypes: true, recursive: true },
  (err, files) => {
    if (err) {
      console.log(err);
    } else {
      files.forEach((file) => {
        if (file.isFile()) {
          const fullPath = path.join(file.path, file.name);
          fs.stat(fullPath, 'utf-8', (err, stats) => {
            if (err) {
              console.log(err);
            } else {
              let currFile = file.name;
              let ext = Array.from(path.extname(currFile)).filter(el => el!=='.').join('') ;
              let name = Array.from(path.basename(currFile, ext)).filter(el => el!=='.').join('');
                
              console.log(name, ' - ', ext, ' - ', (stats.size/1024).toFixed(3), 'kb')
            }
          });
        }
      });
    }
  },
);

