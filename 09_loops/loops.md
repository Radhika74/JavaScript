### Types of loops in JS

 * ### JavaScript for Loop-

The JS for loop provides a concise way of writing the loop structure. The for loop contains initialization, condition, and increment/decrement in one line thereby providing a shorter, easy-to-debug structure of looping.
### syntax:
for (initialization; testing condition; increment/decrement) {
    statement(s)
}

* ### JavaScript while Loop-
  
The JS while loop is a control flow statement that allows code to be executed repeatedly based on a given Boolean condition. The while loop can be thought of as a repeating if statement. 

### Syntax:
while (boolean condition) {
    loop statements...
}

* ### JavaScript do-while Loop-

The JS do-while loop is similar to the while loop with the only difference is that it checks for the condition after executing the statements, and therefore is an example of an Exit Control Loop. It executes loop content at least once event the condition is false

### Syntax:
do {
    Statements...
}
while (condition);

* ### JavaScript for-in Loop-
  
JS for-in loop is used to iterate over the properties of an object. The for-in loop iterates only over those keys of an object which have their enumerable property set to “true”. 
### Syntax :
for(let variable_name in object_name) {
    // Statement
}

* ### JavaScript for-of Loop-
  
JS for-of loop is used to iterate the iterable objects for example – array, object, set and map. It directly iterate the value of the given iterable object and has more concise syntax than for loop

### Syntax:
for(let variable_name of  object_name) {
    // Statement
}

### Some more statements are:
* Break
* Continue
* label
  


## Map Chaining 
Map chaining refers to applying multiple array methods sequentially in a concise manner. It’s particularly useful for transforming data.
* filter: Retains elements that pass the condition.
* map: Transforms each element.
* reduce: Combines elements into a single value.

------

## Arrow Functions
* Arrow Functions without parameters 
```javascript 
  const ab = () => {
    console.log( "Hi!" );}
    ab();
```

* Arrow Functions with parameters
```javascript
const square = x => x*x;
console.log(square(4));
```

* Arrow Functions with multiple parameters
```javascript
const abc = ( x, y, z ) => {
    console.log( x + y + z )
}

abc( 10, 20, 30 ); 
```

* Return Object Literals
 ```javascript
   onst makePerson = (firstName, lastName) =>
({first: firstName, last: lastName});
console.log(makePerson("Pankaj", "Bind"));
```

* Arrow Function with Default Parameters
```javascript
const abc= ( x, y, z = 30 ) => {
    console.log( x + " " + y + " " + z);
}

abc( 10, 20 );
```


