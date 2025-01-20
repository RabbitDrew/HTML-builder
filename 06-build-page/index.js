const fs = require('fs');
const path = require('path');
const sourceTemplate = path.join(__dirname, 'template.html');
const soursePathComponents = path.join(__dirname, 'components');
const soursePathStyle = path.join(__dirname, 'styles');
const sourcePathAssets = path.join(__dirname, 'assets');
const destFolderPath = path.join(__dirname, `project-dist`);

/*copy template*/
const copyTemplate = () => {
  fs.mkdir(destFolderPath, { recursive: true }, (err) => {
    if (err) {
      console.error('Error creating directory:', err);
    } else {
      const destFilePath = path.join(destFolderPath, 'template.html');
      fs.copyFile(sourceTemplate, destFilePath, (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log('folder is created and file is copied');
          editTemplate(destFolderPath, destFilePath);
        }
      });
      compileStyle(soursePathStyle, destFolderPath);
      copyAssets(sourcePathAssets, destFolderPath);
    }
  });
};
//tamplate editor
const editTemplate = (destFolderPath, destFilePath) => {
  const readStream = fs.createReadStream(destFilePath, { encoding: 'utf-8' });
  fs.readdir(
    destFolderPath,
    { withFileTypes: true, recursive: true },
    (err, files) => {
      if (err) {
        console.log(err);
      } else {
        let chunks = '';
        files.forEach((copiedFile) => {
          if (copiedFile.name.includes('template.html')) {
            readStream.on('err', (err) => {
              if (err) {
                console.log(err);
              }
            });
            readStream.on('data', (chunk) => {
              chunks += chunk;
            });
            readStream.on('end', () => {
              fs.readdir(
                soursePathComponents,
                { withFileTypes: true, recursive: true },
                (err, components) => {
                  if (err) {
                    console.log(err);
                    return;
                  } else {
                    components.forEach((component) => {
                      const currPath = path.join(
                        soursePathComponents,
                        component.name,
                      );
                      const readStreamComponents = fs.createReadStream(
                        currPath,
                        { encoding: 'utf-8' },
                      );

                      readStreamComponents.on('data', (componentChunk) => {
                        if (component.name.includes('header')) {
                          chunks = chunks.replace('{{header}}', componentChunk);
                        } else if (component.name.includes('articles')) {
                          chunks = chunks.replace(
                            '{{articles}}',
                            componentChunk,
                          );
                        } else if (component.name.includes('footer')) {
                          chunks = chunks.replace('{{footer}}', componentChunk);
                        }
                      });

                      readStreamComponents.on('end', () => {
                        const writeStream = fs.createWriteStream(destFilePath, {
                          flags: 'w',
                        });
                        writeStream.write(chunks);
                        writeStream.end();
                      });
                    });
                  }
                },
              );
            });
          }
        });
      }
    },
  );
};
// bundle styles
const compileStyle = (soursePathStyle, destFolderPath) => {
  const destFilePath = path.join(destFolderPath, 'style.css');
  const writeStream = fs.createWriteStream(destFilePath, { flags: 'w' });

  fs.readdir(
    soursePathStyle,
    { withFileTypes: true, recursive: true },
    (err, files) => {
      if (err) {
        console.log(err);
        return;
      } else {
        let chunks = '';
        let fileCount = files.length;

        files.forEach((file) => {
          const currFilePath = path.join(soursePathStyle, file.name);
          const readStream = fs.createReadStream(currFilePath, {
            encoding: 'utf-8',
          });

          readStream.on('data', (styleChunk) => {
            chunks += styleChunk;
          });

          readStream.on('end', () => {
            fileCount--;
            if (fileCount === 0) {
              writeStream.write(chunks);
              writeStream.end();
            }
          });
        });
      }
    },
  );
};
//copy assets
const copyAssets = (sourcePathAssets, destFolderPath) => {
  const destAthetsFolder = path.join(destFolderPath, 'assets');
  fs.cp(sourcePathAssets, destAthetsFolder, { recursive: true }, (err) => {
    if (err) {
      console.error('Error copying directory:', err);
    } else {
      console.log('copied');
    }
  });
};


copyTemplate();