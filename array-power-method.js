let array = [1, 2, 3, 4, 5];
// let double = []


// for(i =0; i < array.length; i++){
//     double.push(array[i] * 2);
// }


const double = array.map(function(num) {
    // console.log(num);
    return num * 2;
});
// console.log(double);


// ForEach
let rolls = [1, 2, 3, 4, 5];
// rolls.forEach((elem, ind, arr) => {
//     console.log(elem, ind, arr);

// })



// Filter out element and create array base on condition
let prices = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let expensiveProducts = prices.filter((elem)=>{


    if(elem > 5) {
        return true;
    }
    console.log(elem);
    return false;
})

console.log(expensiveProducts);