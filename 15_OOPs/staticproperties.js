//function Based 
class User{
    constructor(username)
    {
        this.username = username
    }
    logMe(){
        console.log(`Hello, my name is ${this.username}`)
    }
    //static createId error
     createId(){  
        return `123`
     }
}
const Kahna = new User("Kahna")
Kahna.createId()
console.log(Kahna.createId())

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email= email
    }
}

const iphone = new Teacher("iphone","i@phone.com")
console.log(iphone.createId())