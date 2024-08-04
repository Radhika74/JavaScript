class User{
    constructor(username ){
    this.username= username;
}

logMe(){
    console.log(`USERNAME is ${this.username}`)
}
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }
    addcourses(){
        console.log(`A new course is added by ${this.username}`)
    }
    
}
const chai = new Teacher("chai, chai@gmail.com","1234")
chai.addcourses()
const masalaChai = new User("masalaChai")
masalaChai.logMe()
chai.logMe()

console.log(chai === masalaChai)
console.log(chai === Teacher)
console.log(chai instanceof Teacher)
console.log(chai instanceof User)



