const fs = require('fs');
//create the folder
fs.access('04-copy-directory/files-copy', function (err) {
  if (err && err.code === 'ENOENT') {
    fs.mkdir('04-copy-directory/files-copy', {recursive: true}, function (err) {
      if (err) {
        console.error(err);
      } else {
        copyDir();
        console.log('the folder has been created');
      }
    });
  } else {
    copyDir();
    console.log('the folder has been updated');
  }
});
//create the copy derictory
function copyDir() {
fs.readdir('04-copy-directory/files', function (err, files){
    if (err) {
      console.log(err)
    }else {
      console.log(files)
      for (let i = 0; i < files.length; i++) {
        fs.copyFile(
          `04-copy-directory/files/${files[i]}`,
          `04-copy-directory/files-copy/${files[i]}`,
          function (err) {
            if (err) {
              console.log(err);
            } else {
              console.log(files[i])
            }
          },
        );
      }
    }
  });
}

//the function for delete folde files-copy
/*fs.rm('04-copy-directory/files-copy', { recursive: true }, (err) => {
    if (err) {
      console.error(err)
    } else {
      console.log('Directory deleted successfully')
    }
})*/