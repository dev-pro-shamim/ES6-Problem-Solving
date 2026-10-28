const responseExtractor  = (obj) => {

    const {user : {name : userName, age= 18, country : userCountry}} = obj;
    console.log(userName, age, userCountry);
    return {
        name: userName,
        age: age,
        country: userCountry
    }
}

console.log(responseExtractor({user : {name: "Shamim", age: 25, country: "Bangladesh"}}));
console.log(responseExtractor({user : {name: "Rafi", country: "Bangladesh"}}));