const fs = require('fs');
const route = process.argv[2];

//haciendolo asincrono
fs.readFile(route, 'utf8', (err, data) => {
    if(err){
        throw console.log('hhh', err);
    }
    let counter = 0;
    for(let i = 0; i < data.length; i++){
        if(data[i] == '\n'){
            counter++;
        }
    }
    return console.log(counter);
})