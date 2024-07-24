const arr=[2,3,4,5,6,7,8,9,10,11]
const arr2=[12, 13, 14, 15, 16,]
//method 
console.log(arr.concat(arr2))
//spread operator
console.log([...arr, ...arr2])
console.log(arr.push(15))
console.log(arr.unshift(1))
console.log(arr.push(10))
console.log(arr.pop())
console.log(arr.length)
console.log(arr.shift())
console.log(arr.slice(2,5))
console.log(arr.splice(2,5))
// original array is manipulated in slice and splice method as spilce include the last element also and it changes the original array to the new array
console.log(arr.reverse())
console.log(arr.sort())
console.log(arr.includes(15))
console.log(arr.indexOf(15))
console.log(arr.lastIndexOf(15))
console.log(arr.join(','))
console.log(arr.values())





