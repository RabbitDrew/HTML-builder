const fs = require('fs');
const path = require('path');

// creates folders and files
fs.mkdir('06-build-page/project-dist/', { recursive: true }, function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log('the folder has been created');
  }
});
//write index.html

let index
let template = fs.createReadStream('06-build-page/template.html');
template.on('data', (chank) => {
  console.log(chank.toString());
  fs.writeFile(
    '06-build-page/project-dist/index.html',
    `${chank}`,
    function (err) {
      if (err) {
        console.log(err);
      } else {
        console.log('created');
        updateIndex ()
      }
    },
  );
});

function updateIndex () {
  fs.readFile(
    '06-build-page/project-dist/index.html',
    'utf-8',
    function (err, data) {
      if (err) {
        throw err;
      } else {
        index = data;
        console.log(index);
        fs.readdir('06-build-page/components', function (err, files) {
          if (err) {
            throw err;
          } else {
            console.log(files);
            let header, article, footer; 
            let headerComp = fs.createReadStream(
              `06-build-page/components/${files[2]}`,
            );
            headerComp.on('data', (chank) => {
              header = chank.toString();
              console.log(header);
              let articleComp = fs.createReadStream(
                `06-build-page/components/${files[0]}`,
              );
              articleComp.on('data', (chank) => {  
                article = chank.toString();
                console.log(article);
                let footerComp = fs.createReadStream(
                  `06-build-page/components/${files[1]}`,
                );
                footerComp.on('data', (chank) => {
                  footer = chank.toString();
                  console.log(footer);
                  let replaceHead = index.replace('{{header}}', header); 
                  let replaceArt = replaceHead.replace('{{articles}}', article); 
                  let replaceFooter = replaceArt.replace('{{footer}}', footer); 
                  fs.writeFile(
                    '06-build-page/project-dist/index.html',
                    replaceFooter,
                    function (err) {
                      if (err) {
                        console.log(err);
                      } else {
                        console.log('created');
                      }
                    },
                  );
                });
              });
            });
          }
        });
      }
    },
  );
}



//styles
fs.readdir('06-build-page/styles', function (err, files) {
  if (err) {
    console.log(err);
  } else {
   console.log(files);
    getStyles(files)
  }
});

function getStyles(files) {
 for (let i = 0; i < files.length; i++) {
    let styleRead = fs.createReadStream(`06-build-page/styles/${files[i]}`)
    styleRead.on ('data', (chunk) => {
      console.log(chunk.toString())
      fs.appendFile (`06-build-page/project-dist/style.css`,`${chunk.toString()}`, function (err) {
        if (err) {
          console.log(err)
        }else {
          console.log('style file has been created')
        }
      })
    })
 }
}


function copyFolder(from, to) {
    fs.mkdir(to, { recursive: true }, (err) => {
        if (err) throw err;
        fs.readdir(from, (err, files) => {
            if (err) throw err;
            for (let file of files) {
                let src = path.join(from, file);
                let dest = path.join(to, file);
                fs.lstat(src, (err, stats) => {
                    if (err) throw err;
                    if (stats.isFile()) {
                        fs.copyFile(src, dest, (err) => {
                            if (err) throw err;
                            console.log(`Copied ${src} to ${dest}`);
                        });
                    } else {
                        copyFolder(src, dest);
                    }
                });
            }
        });
    });
}


copyFolder('06-build-page/assets', '06-build-page/project-dist/assets'); 

/*
//the function for delete folde files-copy
fs.rmdir('06-build-page/project-dist/', { recursive: true }, (err) => {
    if (err) {
      console.error(err)
    } else {
      console.log('Directory deleted successfully')
    }
})
*/