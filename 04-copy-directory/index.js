const fs = require('fs')
fs.mkdir('04-copy-directory/files-copy', function (err) {
    if (err) {
        console.error(err);
      } else {
        console.log("the folder is created");
      }
})

function copyDir () {
    // get coppied files
    const files = fs.readdirSync("04-copy-directory/files")
    console.log(files)
    //coppie files
    for (let i = 0; i < files.length; i++) {
        fs.copyFile(`04-copy-directory/files/${files[i]}`, `04-copy-directory/files-copy/${files[i]}`, function (err) {
            if (err) {
                console.log(err)
            } else {
            }
        })
    }
}
copyDir ()


//the function for delete folde files-copy
/*fs.rm('04-copy-directory/files-copy', { recursive: true }, (err) => {
    if (err) {
      console.error(err)
    } else {
      console.log('Directory deleted successfully')
    }
})*/