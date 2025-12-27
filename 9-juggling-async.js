const bl = require('bl');
const http = require('http');

let url1 = process.argv[2];
let url2 = process.argv[3];
let url3 = process.argv[4];

http.get(url1,url2,url3, function (response) {
    response.pipe(bl(function (err, data) {
        if (err) { console.error(err); return; }
        data = data.toString();
        console.log('url1',data[0]);
        console.log('url2',data[1]);
        console.log('url3',data[2]);
    }
    ));
}   ).on('error', function (e) {
    console.error(`Got error: ${e.message}`);
});