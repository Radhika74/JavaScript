//dates 
let myDate = new Date()
console.log(myDate)
console.log(myDate.getFullYear())
console.log(myDate.getMonth()) //0-11
console.log(myDate.getDate())
console.log(myDate.getDay()) //0-6
console.log(myDate.getHours())
console.log(myDate.getMinutes())
console.log(myDate.getSeconds())
console.log(myDate.getMilliseconds())


//convert to string
console.log(myDate.toDateString())
console.log(myDate.toLocaleString())
console.log(myDate.toLocaleTimeString())

//set date
myDate.setDate(myDate.getDate() + 7)
console.log(myDate.toDateString())

console.log(typeof myDate) //object

//set time
myDate.setHours(10, 30, 0, 0)
console.log(myDate.toLocaleTimeString())

