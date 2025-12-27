'use strict'
const fs = require('fs')
const path = require('path')

module.exports = function (dirPath, ext,callback) {
    ext = '.' + ext.toLowerCase();
    fs.readdir(dirPath, 'utf8', (err, files) => {
        if (err) return callback(err);
        else {
        files = files.filter(el => { if (path.extname(el) === ext) return true})
        // files.forEach(function (file) {
        // if (path.extname(file) === ext) {
        //     console.log(file)
        // }
        // })
        }
        return callback(null, files);
    })
};

//   'use strict'
//     const fs = require('fs')
//     const path = require('path')

//     module.exports = function (dir, filterStr, callback) {
//       fs.readdir(dir, function (err, list) {
//         if (err) {
//           return callback(err)
//         }

//         list = list.filter(function (file) {
//           return path.extname(file) === '.' + filterStr
//         })

//         callback(null, list)
//       })
//     }