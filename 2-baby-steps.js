let input = process.argv;

const sum = (num) => {

    let result = 0;

    for(let i = 2; i < num.length; i++){
        result += parseInt(num[i]);
   }
   
    return result;
}

console.log(sum(input));