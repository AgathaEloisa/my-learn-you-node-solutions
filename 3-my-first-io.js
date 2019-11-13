const fs = require('fs');
const route = process.argv[2];

const gg = fs.readFileSync(route, 'utf8');
let counter = 0;
for (let i = 0; i < gg.length; i++) {
    if (gg[i] == '\n') {
        counter++
    }
}
return console.log(counter);