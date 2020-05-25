const fs = require('fs');
const route = process.argv[2];

//haciendolo asincrono
fs.readFile(route, 'utf-8', (err, data) => {
    if(err) throw err;
    let jumps = data.split('\n').length-1;
    console.log(jumps);
})