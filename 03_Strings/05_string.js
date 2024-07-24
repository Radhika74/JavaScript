const Name = new String('Hello World');

//other methods 
console.log(Name.toString());          // 'Hello World'
//console.log(Name.toDateString());      // TypeError: Name.toDateString is not a function
//console.log(Name.toTimeString());      // TypeError: Name.toTimeString is not a function
console.log(Name.toLocaleString());    // 'Hello World'
//console.log(Name.toISOString());       // TypeError: Name.toISOString is not a function
console.log(Name.valueOf());           // 'Hello World'
console.log(Name.toUTCString);         // [Function: toUTCString]
