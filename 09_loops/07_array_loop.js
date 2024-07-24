//for of loop' this loop automatically identify no need to give iteration and increment
const array = [1, 2, 3, 4, 5]

for (const num of array) {
    console.log(num)   
}

//for in loop
const obj = { name: 'John', age: 30, city: 'New York' }

for (const key in obj) {
    console.log(key, obj[key])
}

