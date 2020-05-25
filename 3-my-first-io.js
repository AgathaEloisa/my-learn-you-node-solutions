const fs = require('fs');
const route = process.argv[2];

let file = fs.readFileSync(route, 'utf-8');
console.log(file.split('\n').length-1);