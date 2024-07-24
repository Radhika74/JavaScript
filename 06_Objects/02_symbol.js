//use of symbol in object 
const sym1 = Symbol("key1")
const sym2 = Symbol("key2")

const obj = {
  name: "John",
  age: 30,
  [sym1]: "value 1",
  [sym2]: "value 2",
}

console.log(obj[sym1])
console.log(obj[sym2])

console.log(Object.keys(obj))
console.log(Object.getOwnPropertySymbols(obj))
console.log(Reflect.ownKeys(obj))

console.log(sym1.description)
console.log(sym2.description)

//type 
console.log(typeof sym1)
console.log(typeof sym2)

//compare
console.log(sym1 === sym2)
console.log(sym1 == sym2)

//use of symbol as property name
const propName = Symbol("propName")
obj[propName] = "value 3"
console.log(obj[propName])

