const bl = require('bl');
const http = require('http');

let url = process.argv[2];

http.get(url, function (response) {
    response.pipe(bl(function (err, data) {
        if (err) { console.error(err); return; }
        data = data.toString();
        console.log(data.length);
        console.log(data);
    }
    ));
}   ).on('error', function (e) {
    console.error(`Got error: ${e.message}`);
});