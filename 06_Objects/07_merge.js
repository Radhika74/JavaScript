//merging object 
const obj1={1:"a", 2:"b"}
const obj2={3:"c", 4:"d"}

//this return object inside object
const obj3={obj1, obj2}
console.log(obj3)

//betterway
//assign given emoty object means it is target and all other objects are source if not given empty the obj1 become target object
const obj4 =Object.assign({}, obj1, obj2)
console.log(obj4) 

//ANOTHER 
//spread method
const obj5 = {...obj1,...obj2}
console.log(obj5)

//concat method
const obj6 = Object.assign({}, obj1)
obj6.obj2 = {...obj2}
console.log(obj6)
