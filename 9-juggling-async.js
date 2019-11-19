const http = require('http');
const bl = require('bl');

const url = process.argv[2];
const prArgv = process.argv;

http.get(url, (res) => {
    res.pipe(bl((err, data) => {
        if (err) {
            throw err;
        }   
        let result;          
        //itero process argv desde el indice 2 al 4
        for(let i = 2; i < prArgv.length; i++){
                let blx = new bl();
                result = blx.append(data[i]);
                console.log(data.toString());      
        }
    }))
})