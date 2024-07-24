const num= [1, 2, 3, 4, 5]
const total = num.reduce(function(acc, curval) {
    console.log(`acc: ${acc}, and currentvalue:  ${curval}`)
    return acc + curval}, 0)

console.log(total)

//using arrow function
const totalArrow = num.reduce((acc, curval) => acc + curval, 0)

console.log(totalArrow)

//shopping cart
const cart = [
    {item: "apple", price: 27, quantity: 2},
    {item: "banana", price: 100, quantity: 3},
    {item: "orange", price: 30, quantity: 1}
]

const totalCartPrice = cart.reduce((acc, curval) => acc + (curval.price * curval.quantity), 0)

console.log(totalCartPrice)