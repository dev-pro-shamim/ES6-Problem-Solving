/*
  Problem 1: Bulk Discount Applier
  applyDiscount(prices, rate) — apply a discount % to every price in the
  array and return a NEW array. The ORIGINAL prices array must stay
  exactly the same.

  Input:
    prices = [500, 1000, 250]
    rate   = 10   (10% discount)

  Output:
    [450, 900, 225]

  Original prices array must remain [500, 1000, 250] afterwards.
*/

let applyDiscount = (prices, rate) => {
    console.log(prices);
  let pricesAfterDiscount = prices.map((elem, ind, arr)=>{
    console.log(elem, ind, arr);
    let discountedPrice = elem - (elem * rate) / 100;
    return discountedPrice;

  })

  console.log(pricesAfterDiscount);
   
}

let productPrices = [500, 1000, 250];
console.log(applyDiscount(productPrices, 10));