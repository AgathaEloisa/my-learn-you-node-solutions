//Este modulo desarrolla el proceso
const fs = require('fs');
const path = require('path');

module.exports = function (route, ext, callback) {

    fs.readdir(route, 'utf-8', (err, data) => {
        if (err) {
            return callback(err);
        }

        let files = [];
        //recorro la carpeta
        for (let i = 0; i < data.length; i++) {
            //compruebo que la extención de cada archivo sea la que ingresó el usuario
            if (path.extname(data[i]) === '.' + ext) {
            files.push(data[i]);
            }
        }

        callback(null, files);
    });
};