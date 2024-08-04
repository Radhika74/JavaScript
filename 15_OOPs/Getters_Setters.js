class User {
    constructor(email, password){
        this.email = email 
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}kahna`
    }

    set password(value){
        this._password = value
    }
}

const kahna = new User("k@hna.ai", "abc")
console.log(kahna.email)
console.log(kahna.password)