const getMostExpensiveItem = (product) =>{
const keys = Object.keys(product);

let highest = 0;
console.log(keys);

for(let key of keys){
    if(highest < product[key]){
        highest = product[key];
    }
    console.log(key, product[key]);
}


console.log("Highest Price:", highest);
}

console.log(getMostExpensiveItem({pen : 10, book : 100, bag : 500}));