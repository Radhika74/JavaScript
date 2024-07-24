//Null coalescing operator ??
let val1;
let var2;
let val3;
//val1 = 5 ?? 10
val1 = null ?? 100
val2 = undefined ?? 100
val3 =null ?? 10 ?? 20
console.log(val1)
console.log(val2)
console.log(val3)


//ternary operator
let age = 20;
let message = age >= 18 ? "Welcome" : "Sorry, you are underage";
console.log(message);