const user ={
    username: "John",
    age: 30,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`) 
        // console.log(this)   
    }

}

user.welcomeMessage()
user.username = "Sam"
user.welcomeMessage()
console.log(this)   //here it give empty

