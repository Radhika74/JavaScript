//non primitive types
let userOne = {
    email: "user@google.com",
    upi: "user@ybl"   
}

let userTwo = userOne

userTwo.email = "user@info.com"

console.log(userOne.email)
console.log(userTwo.email)//original value changes as same memory allocation