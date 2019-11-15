//url de prueba: http://127.0.0.1:5500/test-files/abc.html
const http = require('http');
const url = process.argv[2];

http.get(url, (res) => {
    res.setEncoding('utf8');
    res.on('data', data => {
        console.log(data);
    });
});