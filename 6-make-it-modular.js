//controla errores y aciertos, enviando un mensaje para informar sobre ello
//Envía la información a la consola
const mymodule = require ('./6-mymodule');
const route = process.argv[2];
const ext = process.argv[3];

function  gg (callback) {
    (err, data) => {
        if(err){
            return callback(err);
        }
        //more code
       return callback(null, data);
    }
};

console.log(gg(route,ext))