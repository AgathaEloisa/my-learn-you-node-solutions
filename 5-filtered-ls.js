/* Create a program that prints a list of files in a given directory,  
  filtered by the extension of the files. You will be provided a directory  
  name as the first argument to your program (e.g. '/path/to/dir/') and a  
  file extension to filter by as the second argument.  
*/

const fs = require('fs');

const filteredls = (dirPath, ext) => {
    ext = '.' + ext.toLowerCase()
    fs.readdir(dirPath,'utf8', (err, files) => {
        if (err) {
            console.error('Error reading directory:', err);
            return;
        }
        files.filter(el => {
            let transformacion = el.split('').reverse().indexOf('.');
            let theExt = el.split('').reverse().slice(0,transformacion+1).reverse().join('');
            if ( theExt == ext ) {console.log(el)};
        });
    });
};

filteredls(process.argv[2], process.argv[3]);

/*
    'use strict'
    const fs = require('fs')
    const path = require('path')

    const folder = process.argv[2]
    const ext = '.' + process.argv[3]

    fs.readdir(folder, function (err, files) {
      if (err) return console.error(err)
      files.forEach(function (file) {
        if (path.extname(file) === ext) {
          console.log(file)
        }
      })
    })
*/