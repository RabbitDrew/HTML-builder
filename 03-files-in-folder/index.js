let fs = require('fs');
let path = require('path');
let folder = `03-files-in-folder/secret-folder`;

// get all the files from the folder
function getTheFiles() {
  fs.readdir(`${folder}`, function (err, files) {
    if (err) {
      throw err;
    } else {
      getStats(files); // get all filse from secret folders to the getStats function
    }
  });
}
//function for getting stats
function getStats(arrFiles) {
  for (let i = 0; i < arrFiles.length; i++) {
    if (!arrFiles[i].endsWith('.jpg')) {
      // check type of files  to chose  right files
      fs.stat(`${folder}/${arrFiles[i]}`, function (err, stat) {
        //get whole sstats
        const { name, ext } = path.parse(arrFiles[i]); // get the name and extention
        let size = stat.size.toString(); // get the size of files
        console.log(name + ' - ' + ext + ' - ' + size);
      });
    }
  }
}
getTheFiles();
