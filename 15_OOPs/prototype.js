let myName = 'radhika';
let myEmail = 'radhika@gmail.com';

console.log(myName.trueLength); // undefined

let myHeros = ["thor", "spiderman"];

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function() {
        console.log(`Spidy power is ${this.spiderman}`);
    }
};

// Adding methods to the prototype of Object
Object.prototype.ram = function() {
    console.log(`ram is present in all objects`);
};

// Adding methods to the prototype of Array
Array.prototype.heyRam = function() {
    console.log(`Ram says hello`);
};

// Inheritance
const User = {
    name: "chai",
    email: "chai@google.com"
};

const Teacher = {
    makeVideo: true
};

const TeachingSupport = {
    isAvailable: false
};

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
};

// Setting prototype
Teacher.__proto__ = User;

// Modern syntax for setting prototype
Object.setPrototypeOf(TeachingSupport, Teacher);

// Extending String prototype
String.prototype.trueLength = function() {
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
};

let anotherUsername = "ChaiAurCode     ";
anotherUsername.trueLength();
"Ram".trueLength();
"iceTea".trueLength();
