let fs = require('fs');
const path = require('path');

fs.readdir('03-files-in-folder/secret-folder', function (err, files) {
  if (err) {
    console.log(err);
  } else {
    getFilesData(files);
  }
});

function getFilesData(files) {
  for (let i = 0; i < files.length; i++) {
    fs.stat(
      `03-files-in-folder/secret-folder/${files[i]}`,
      function (err, stats) {
        if (err) {
          console.log(err);
        } else {
          const { name, ext } = path.parse(files[i]);
          const { size } = stats;

          console.log(`file name: ${name}`);
          console.log(`file extension: ${ext}`);
          console.log(`file size: ${size} байт`);
        }
      },
    );
  }
}
