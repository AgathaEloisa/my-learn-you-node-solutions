const http = require('http');
const { url } = require('inspector');
/* Arguments */
let url1 = process.argv[2];
let url2 = process.argv[3];
let url3 = process.argv[4];
/* 
const func = ( url1, url2, url3, ) => {

}; */

http.get(url, (res) => {
    res.setEncoding('utf8');
    res.on('data', data)
});