let numbers = [1, 2, 3, 4, 5];
let sliced = numbers.slice(1,3)

console.log(sliced);


let nums = [10, 20, 30, 40, 50];

let num = nums.reduce((accumulator, currentValue, index, array) =>{

    return currentValue + accumulator;      
    console.log(accumulator, currentValue, index, array);
},0);

console.log(num);