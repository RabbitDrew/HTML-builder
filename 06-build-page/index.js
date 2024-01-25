const fs = require('fs');
const path = require('path');

/*// creates folders and files
fs.mkdir("06-build-page/project-dist/", {recursive:true}, function(err) {
  if (err) {
    console.log(err)
  } else {
    console.log("the folder has been created")
  }
})
//write index.html
fs.writeFile("06-build-page/project-dist/index.html",'', function (err) {
  if (err) {
    console.log (err)
  } else {
    console.log('created')
  }
});

let template = fs.createReadStream("06-build-page/template.html")
  template.on('data', (chank) => {
  console.log(chank.toString());
  fs.writeFile("06-build-page/project-dist/index.html",`${chank}`, function (err) {
    if (err) {
      console.log (err)
    } else {
      console.log('created')
    }
  });
  })

function readComp () {
  fs.readdir("06-build-page/components", function (err, files) {
    if (err) {
       console.log(arr)
    } else {
      console.log(files)
    }
  })
}
readComp ()

let index;
let header;
let articles;
let footer;
fs.readFile(
  '06-build-page/project-dist/index.html',
  'utf-8',
  function (err, data) {
    if (err) {
      console.log(err);
    } else {
      index = data;
      console.log(index);
      fs.readFile(
        '06-build-page/components/header.html',
        'utf-8',
        function (err, data) {
          if (err) {
            console.log(err);
          } else {
            header = data;
            console.log(index);
            let replace = index.replace('{{header}}', header);

            fs.writeFile(
              '06-build-page/project-dist/index.html',
              replace,
              function (err) {
                if (err) {
                  console.log(err);
                } else {
                  console.log('created');
                  fs.readFile(
                    '06-build-page/components/articles.html',
                    'utf-8',
                    function (err, data) {
                      if (err) {
                        console.log(err);
                      } else {
                        articles = data;
                        console.log(index);
                        let replace = index.replace('{{articles}}', articles);

                        fs.writeFile(
                          '06-build-page/project-dist/index.html',
                          replace,
                          function (err) {
                            if (err) {
                              console.log(err);
                            } else {
                              fs.readFile(
                                '06-build-page/components/footer.html',
                                'utf-8',
                                function (err, data) {
                                  if (err) {
                                    console.log(err);
                                  } else {
                                    footer = data;
                                    console.log(index);
                                    let replace = index.replace(
                                      '{{footer}}',
                                      footer,
                                    );

                                    fs.writeFile(
                                      '06-build-page/project-dist/index.html',
                                      replace,
                                      function (err) {
                                        if (err) {
                                          console.log(err);
                                        } else {
                                          console.log('created');
                                        }
                                      },
                                    );
                                  }
                                },
                              );
                            }
                          },
                        );
                      }
                    },
                  );
                }
              },
            );
          }
        },
      );
    }
  },
);


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
}*/




fs.copy('06-build-page/assets', '06-build-page/project-dist/assets', function (err) {
  if (err) {
    console.error(err);
  } else {
    console.log('Успешно скопировано!');
  }
});