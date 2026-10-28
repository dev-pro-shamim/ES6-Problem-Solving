/*
  Problem 2: Shopping Cart Total (reduce)
  getCartTotal(cart) — sum price * qty across every item in the cart
  using reduce().

  Input:
    cart = [
      { name: "Pen", price: 20, qty: 3 },
      { name: "Notebook", price: 50, qty: 2 },
    ]

  Output:
    160   (20*3 + 50*2)
*/



// Accumulator -> 0
// Pen -> Accumulator =  0 + (20 * 3) = 60
// Notebook -> Accumulator = 60 + (50 * 2)
// Accumulator -> 160


let getCartTotal = (cart) =>{

    let total = cart.reduce((accumulator, elem)=>{

        console.log(accumulator, "accumulator");
        console.log(elem, "elem");

        return accumulator + (elem.price * elem.qty);
    }, 0);

    return total;
}






let cart = [
      { name: "Pen", price: 20, qty: 3 },
      { name: "Notebook", price: 50, qty: 2 },
      { name: "Eraser", price: 10, qty: 5 },
      { name: "Pencil", price: 5, qty: 10 },
    ]


    
console.log(getCartTotal(cart));