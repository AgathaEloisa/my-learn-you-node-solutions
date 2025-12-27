/* program that uses a single synchronous filesystem operation to  
  read a file and print the number of newlines (\n) it contains to the  
  console (stdout), similar to running cat file | wc -l. */

const fs = require('fs');
const documentToRead = fs.readFileSync(process.argv[2]).toString();

const jumpCounter = (file) => {
    const caracter = '\n'
    let result = file.split('').filter(el => el === caracter).length;
    console.log(result);
}

jumpCounter(documentToRead)