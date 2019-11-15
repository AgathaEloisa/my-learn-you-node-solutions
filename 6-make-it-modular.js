//controla errores y aciertos, enviando un mensaje para informar sobre ello
//Envía la información a la terminal

const mymodule = require ('./6-mymodule');
const route = process.argv[2];
const ext = process.argv[3];

//Esta es la invocación de la función hecha en mymodule.js.
mymodule(route, ext, (err, data) => {
    //Control de errores.
    if(err){
        return console.log('hubo un error: ', err);
    }

    //Recorro el array "files" hecho en mymodule.js, para finalmente mostrarlo en la terminal.
    for (let i = 0; i < data.length; i++) {
           console.log(data[i]);
    }
})