const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname, 'files-copy');
const sourcePath = path.join(__dirname, 'files');

fs.mkdir(dirPath, { recursive: true }, (err) => {
  if (err) {
    console.log(err);
  } else {
    copyDir();
  }
});

const copyDir = () => {
  fs.readdir(sourcePath, { withFileTypes: true }, (err, files) => {
    if (err) {
      console.log(err);
      return;
    } else {
      files.forEach((file) => {
        const currFilePath = path.join(file.path, file.name);
        const destPath = path.join(dirPath, file.name);
        fs.copyFile(currFilePath, destPath, (err) => {
          if (err) {
            console.log(err);
          } else {
            console.log('copied', file.name);
          }
        });
      });
    }
  });
};
