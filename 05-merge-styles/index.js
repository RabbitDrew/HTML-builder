const fs = require('fs');
const path = require('path');
const sourcePath = path.join(__dirname, 'styles');
const destPath = path.join(__dirname, 'project-dist/bundle.css');

const createBundle = () => {
  const writeStream = fs.createWriteStream(destPath, {
    flags: 'w',
    encoding: 'utf-8',
  });
  let isFileRead = 0;
  fs.readdir(
    sourcePath,
    { withFileTypes: true, recursive: true },
    (err, files) => {
      if (err) {
        console.error(err);
        return;
      } else {
        files.forEach((file) => {
          if (file.name.includes('.css')) {
            const currFilePath = path.join(sourcePath, file.name);
            const readStream = fs.createReadStream(currFilePath, 'utf-8');
            readStream.on('error', (err) => {
              console.log(err);
            });
            readStream.on('data', (chunk) => {
              writeStream.write(chunk);
            });
            readStream.on('end', (err) => {
              if (err) {
                console.log(err);
              } else {
                isFileRead++;
                if (isFileRead === files.length) {
                  writeStream.end();
                }
              }
            });
          }
        });
      }
    },
  );
};

createBundle();
