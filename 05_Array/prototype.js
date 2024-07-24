const marval_heroes = ["thor", "Ironman", "spiderman" ]
const dc_heroes=["flash", "superman", "batman"]

// marval_heroes.push(dc_heroes)
// console.log(marval_heroes)
// console.log(marval_heroes[3][1])
const arr=marval_heroes.concat(dc_heroes)
console.log(arr)

//spread method
const arr2=[...marval_heroes,...dc_heroes]
console.log(arr2)

marval_heroes.pop()
console.log(marval_heroes)

marval_heroes.shift()
console.log(marval_heroes)

const arr3 =[1, 2, 3, [4, 5, 6], 7, [6, 7,[4,5] ]]
const arr4 =arr3.flat(Infinity)
console.log(arr3)
//flat method  spread out all the values
console.log("after using flat method on arr3",arr4)

//ask it is arrray ot not
console.log(Array.isArray("Name"))
console.log(Array.isArray(arr4))

//make array
console.log(Array.from("Radhika"))
//empty array 
console.log(Array.from({from: "Radhika"}))

