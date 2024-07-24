//primitive datatypes
// 7types :String, Number, Boolean, null, undefined, symbol, bigint
const id =Symbol('123')
const anotherId =Symbol('123')
console.log(id === anotherId) // false

//reference type/non primitive datatypes :
//array, objects ,function

let person = {
   name: 'John',
   age: 30
}
const otherPerson =['John', 'dogal']

function myFunction() {
    console.log('Hello')
}
console.log(typeof myFunction)

