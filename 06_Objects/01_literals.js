const person = {
    name: 'John Doe',
    age: 30,
    location: 'Jaipur',
    email: 'john@gmail.com',
    isLoggedIn: false,
    hobbies: ['reading', 'painting', 'coding'],
    lastLoginDays: ['Monday', 'Tuesday'],
    "address": 'jaipur' // 'address' can be accessed with bracket notation
}

// Correctly access the 'email' property using bracket notation
console.log(person['email'])

// Access object properties
console.log(person.name)
console.log(person.age)
console.log(person.location)
console.log(person.email)
console.log(person.isLoggedIn)
console.log(person.hobbies)
console.log(person.lastLoginDays)

// Access 'address' using bracket notation
console.log(person["address"])
//change value 
person.email="email.com"
console.log(person.email)

//freeze the value so it is not change
Object.freeze(person)
person.email="newemail.com"
console.log(person.email)