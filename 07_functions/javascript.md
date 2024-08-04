### JavaScript Execution 
## Global EC
   --> **Global execution contest** - 
   1. first phase (creation phase) it allocate memory to the variables and functions
   
2. second phase (Execution phase) it executed line by line and it is defining variables in memory here. Every function invoked creates its own local execution context, which is put in call stack.


--> **Function execution contest** - 

--> **Eval Execution contest**
   
 
 ### memory creation phase
 only the place is executed

 Memory Creation Phase is also known as the Variable Environment. In the Memory creation phase, the memory will be allocated to all variables and functions inside the Global Execution Context. In this phase, variable declarations are scanned and made undefined. It stores undefined to all variables.

 ###  execution phase
 When the JavaScript interpreter find an error in code's syntax or on the execution of the code it will throw an exception. These exceptions can halt the execution of the script if they are not properly handled using try... catch blocks.

 ## steps to execute the javascript code
 ```javascript
 let var1 =20
 let var2 = 30
 function addtwo(num1,num2) {
    let total =num1 + num2
    return total
 }
 let result1 = addtwo(var1,var2)
 let result2 = addtwo(13,46)
 ```

### the above code will execute the JavaScript code as
1.Global exection --> this
2.memory phase
* var1--> undefined 
* var2--> undefined
* addtwo--> defined
* result1 --> undefined
* result2 --> undefined
  
3. exection phase 
* var1 <-- 10
* var2 <-- 30
* addtwo --> new varibale + enviornment + exection thread (automatically delete after exection)                              
  * it have memory  phase  
* var1--> undefined 
* var2--> undefined  
* total--> undefined 
                              
  * and exection phase  
* num1-->10
* num2-->30
* total-->40 


### global exection
onetwo()
function()
two()
* follows LIFO order for multiple functions
  
* call stack


# Immediately Invoked Function Expression (IIFE)

IIFE stands for Immediately Invoked Function Expression. It is a JavaScript function that runs as soon as it is defined. IIFEs are useful for isolating code and creating a local scope for variables, preventing them from polluting the global scope.

## Named IIFE

A named IIFE has a name, but the name is not accessible outside its own scope.

### Example: Named IIFE

```javascript
(function chai() {
    console.log("Chai is a popular coffee brand.");
})();

```

> This IIFE is named chai.

> It immediately logs "Chai is a popular coffee brand." to the console.

## Unnamed IIFE

An unnamed IIFE does not have a name and is often used for simple immediate execution.

### Example: Unnamed IIFE (Arrow Function)

```javascript
(() => {
    console.log("DB Connected");
})();
```
> This IIFE uses an arrow function.

> It immediately logs "DB Connected" to the console.

## IIFE with Parameters

IIFEs can also accept parameters, allowing you to pass values to the function at the time of its invocation.

### Example: IIFE with Parameters

```javascript
((name) => {
    console.log(`DB connected: ${name}`);
})("MongoDB");

```

> This IIFE takes a parameter name.

> It immediately logs "DB connected: MongoDB" to the console.

> [!NOTE]
>By using IIFEs, you can execute code immediately and create a local scope for variables, which helps in avoiding global namespace pollution and potential conflicts.