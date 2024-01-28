const fs = require('fs');
const path = require('path');
const pathFiles = '04-copy-directory/files';

//create the folder
function createTheFolder() {
  fs.mkdir('04-copy-directory/files-copy', { recursive: true }, function (err) {
    if (err) {
      throw err;
    } else {
      getTheFiles();
    }
  });
}

createTheFolder();
//get all files from the source folder
function getTheFiles() {
  fs.readdir(`${pathFiles}`, function (err, files) {
    if (err) {
      throw err;
    } else {
      for (let i = 0; i < files.length; i++) {
        copyDir(files[i]);
      }
    }
  });
}

// copy files from files folder to copy folder
function copyDir(file) {
  fs.copyFile(
    `04-copy-directory/files/${file}`,
    `04-copy-directory/files-copy/${file}`,
    (err) => {
      if (err) {
        throw err;
      } else {
        console.log('copied');
      }
    },
  );
}

//the function for deleting folder files-copy
/*fs.rm('04-copy-directory/files-copy', { recursive: true }, (err) => {
    if (err) {
      console.error(err)
    } else {
      console.log('Directory deleted successfully')
    }
})*/
