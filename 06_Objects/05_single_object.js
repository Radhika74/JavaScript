//singleton 
const tinderUser= new Object() //singleton object
const tinderUser1={}           //non singleton  object

console.log(tinderUser)
console.log(tinderUser1)

tinderUser.id="123"
tinderUser.name="Sam"

tinderUser.isLoggedIn=false
console.log(tinderUser)
console.log(Object.keys(tinderUser))
//enteries
console.log(Object.entries(tinderUser))

//value exist or not
console.log("id" in tinderUser)
console.log("isLoggedIn" in tinderUser)


//get value
console.log(tinderUser.id)
console.log(tinderUser.isLoggedIn)

//delete property
delete tinderUser.id
delete tinderUser.isLoggedIn
console.log(tinderUser)
console.log(Object.keys(tinderUser))


