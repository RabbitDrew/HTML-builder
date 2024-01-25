let fs = require('fs');
let path = require('path')
let folder = `03-files-in-folder/secret-folder`

fs.readdir('03-files-in-folder/secret-folder', { withFileTypes: true }, function (err, files) {
  if (err) {
    console.log(err);
  } else {
    files.forEach (el => { 
      if (el.isFile()) {
        getFilesData([el.name]); 
      }
    })
  }
});

function getFilesData(files) {
  for (let i = 0; i < files.length; i++) {
    fs.stat(
      `03-files-in-folder/secret-folder/${files[i]}`,
      function (err, stats) {
        if (err) {
          console.log(err);
        } else  {
          const { name, ext } = path.parse(files[i]);
          const size = stats.size / 1024; 

          console.log(`${name} - ${ext}  - ${size}kb;` );
        }
      },
    );
  }
}