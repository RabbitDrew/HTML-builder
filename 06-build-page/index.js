const fs = require('fs')
const path = require('path')
//html 
function createFolder () {
  fs.mkdirSync ('06-build-page/project-dist', {recursive: true})
}

let files
function getElement() {
 files = fs.readdirSync('06-build-page/components')
 console.log(files)
}
getElement() 

let readFiles 
function readHtmlComponents () {
   for (let i = 0; i < files.length; i++) {
    readFiles += fs.readFileSync(path.join(__dirname,'components', files[i],), 'utf-8') + '\n'
   }  
   console.log(readFiles)
}
readHtmlComponents () 

let readHtml
let regex 
function readTemplate () {
    readHtml = fs.readFileSync(path.join(__dirname,'template.html'), 'utf-8')
    console.log(readHtml)
    regex = /{{(\w+)}}/g
}
readTemplate ()


