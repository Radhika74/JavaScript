//access value always with arrow
let JsUser = {
    name: "John",
    greet: function() {
        console.log(`Hello, Js user, ${this.name}`)
    }
}
JsUser.greet = ()=> {
    console.log(`Hello, Js user, ${this.name}`)
}

console.log(JsUser.greet())
console.log(JsUser.greet)
