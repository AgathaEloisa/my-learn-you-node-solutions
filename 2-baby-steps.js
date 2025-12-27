const sumNums = (nums) => {
    const sizeArr = nums.length;
    let sum = 0;

    for (let i = 2; i < sizeArr; i++) {
      sum += +nums[i];  
    }
    console.log(sum);  
};

sumNums(process.argv);