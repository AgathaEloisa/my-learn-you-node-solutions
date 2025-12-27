/*program that uses a single asynchronous filesystem operation to  
  read a file and print the number of newlines it contains to the console  
  (stdout), similar to running cat file | wc -l. */

const fs = require('fs');

fs.readFile(process.argv[2], 'utf8', (err, data) => {
    if(err){
        console.error('Error reading file:', err);
        return;
    }
    console.log(data.split('').filter(el => el === '\n').length);
});