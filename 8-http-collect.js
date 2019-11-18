// Recuerda hacer data.toString() para convertir al Buffer de Node a String.
const http = require('http');
const bl = require('bl');
const url = process.argv[2];

http.get(url, (res) => {
    res.pipe(bl((err, data) => {
        if (err) {
            throw err;
        }       
        let blx = new bl()
        blx.append(data)
        console.log(blx.length);
        console.log(data.toString()) 

    }))

})