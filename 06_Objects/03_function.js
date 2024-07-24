const JsUser={
    name: 'John Doe',
    age: 30,
}

//use of function 
JsUser.greeting = function(){
    console.log("Hello, Js user")
}
JsUser.greeting2= function(){
    console.log(`Hello, Js user2, ${this.name}`)

}
    
console.log(JsUser.greeting)
console.log(JsUser.greeting())
console.log(JsUser.greeting2())


// access value always with .
console.log(JsUser.name)
console.log(JsUser.age)



