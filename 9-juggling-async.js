const bl = require('bl');
const http = require('http');
const async = require("async");

let urls = [
    process.argv[2], 
    process.argv[3], 
    process.argv[4]
];
let results = [];

async.forEachOf(urls, (url, index, callback) => {
    http.get(url, (res) => {
    res.pipe(bl((err, data) => {
        if (err) return callback(err);
        results[index] = data.toString();
        callback(); 
    }    ))
}).on('error',callback);
}, (err) => {
    if (err) {
        console.error(`error: ${err.message}`);
    } else {
        results.forEach(result => console.log(result));
    }
});