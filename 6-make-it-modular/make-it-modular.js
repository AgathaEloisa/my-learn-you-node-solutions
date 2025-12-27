const mymodule = require('./mymodule.js');

let folder = process.argv[2];
let ext = process.argv[3];
let callback = function (err, files) { 
    if (err) return console.error(err)
    files.forEach(function (file) {
            console.log(file);
    })
};

mymodule(folder, ext, callback);
