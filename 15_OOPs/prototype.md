
# JavaScript Code Explanation

This document explains various JavaScript concepts demonstrated in the given code.

## Variables

```javascript
let myName = 'radhika';
let myEmail = 'radhika@gmail.com';
```

These lines declare two variables, `myName` and `myEmail`, and assign them string values.

## Undefined Method

```javascript
console.log(myName.trueLength); // undefined
```

This line attempts to log the `trueLength` method of the string `myName`. Since `trueLength` is not yet defined, it logs `undefined`.

## Arrays

```javascript
let myHeros = ["thor", "spiderman"];
```

This line declares an array `myHeros` with two elements: "thor" and "spiderman".

## Objects and Methods

```javascript
let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function() {
        console.log(`Spidy power is ${this.spiderman}`);
    }
};
```

This object `heroPower` contains properties `thor` and `spiderman`, and a method `getSpiderPower` which logs the power of Spiderman.

## Adding Methods to Prototypes

```javascript
Object.prototype.ram = function() {
    console.log(`ram is present in all objects`);
};

Array.prototype.heyRam = function() {
    console.log(`Ram says hello`);
};
```

These lines add a method `ram` to the `Object` prototype and a method `heyRam` to the `Array` prototype. These methods will be available to all objects and arrays, respectively.

## Inheritance

```javascript
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
```

This section demonstrates prototype inheritance. `Teacher` inherits properties from `User`, and `TASupport` inherits properties from `TeachingSupport` using modern syntax `Object.setPrototypeOf`.

## Extending String Prototype

```javascript
String.prototype.trueLength = function() {
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
};
```

This line extends the `String` prototype by adding a method `trueLength`, which logs the original string and its trimmed length.

## Using the `trueLength` Method

```javascript
let anotherUsername = "ChaiAurCode     ";
anotherUsername.trueLength();
"Ram".trueLength();
"iceTea".trueLength();
```

These lines demonstrate using the `trueLength` method on various strings.

