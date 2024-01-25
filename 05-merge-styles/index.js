const fs = require('fs');
const path = require('path');

function bundle() {
  fs.mkdir(
    '05-merge-styles/project-dist/styles',
    { recursive: true },
    function (err) {
      if (err) {
        console.log(err);
      } else {
        console.log('the folder is created');
      }
    },
  );

  fs.readdir('05-merge-styles/styles', function (err, files) {
    if (err) {
      console.log(err);
    } else {
      /*console.log(files);*/
      for (let i = 0; i < files.length; i++) {
        let ext = path.extname(files[i]);
        if (ext !== '.css') {
          continue;
        }
        let reader = fs.createReadStream(`05-merge-styles/styles/${files[i]}`);
        reader.on('data', (chank) => {
          /*console.log(chank.toString());*/
          fs.appendFile(
            '05-merge-styles/project-dist/styles/bundle.css',
            `${chank}`,
            function (err) {
              if (err) {
                console.log(err);
              } else {
                console.log('file has been written');
              }
            },
          );
        });
      }
    }
  });
}
bundle();
