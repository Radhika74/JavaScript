const coding = ["js", "css", "java", "xml", "pythons"];

// Using a named function
function printMe(item) {
    console.log(item)
}
coding.forEach(printMe)

// Using an arrow function
coding.forEach((item) => {
    console.log(item)
})

// Using forEach with additional parameters
coding.forEach((item, index, arr) => {
    console.log(`Index: ${index}, Item: ${item}`)
})

// for each 
coding.forEach(function (val) {
    console.log(val)
})


