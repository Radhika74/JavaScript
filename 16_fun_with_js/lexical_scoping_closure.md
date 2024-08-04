# JavaScript Closures and Lexical Scoping

## Lexical Scoping

### Definition

Lexical scoping means that the scope of a variable is determined by its location within the source code. In JavaScript, this scope is fixed at the time the code is written, not at the time the code is executed.

### Explanation

When a function is defined, it captures the variables from its surrounding scope (also called the lexical environment). This captured environment is referred to as the function's lexical scope.

### Example

```javascript
function outerFunction() {
    let outerVariable = 'I am outside!';
    
    function innerFunction() {
        console.log(outerVariable); // Accessible due to lexical scoping
    }
    
    innerFunction();
}

outerFunction(); // Logs: I am outside!
```



## JavaScript Closures: `init` and `display` Functions

### Example: Counter Module

### `init` Function

The `init` function initializes the state of a module or component. It can set up initial values and prepare the environment for further interactions.

### `display` Function

The `display` function is used to present the current state or result of computations to the user. It typically retrieves and shows data stored or modified by other functions within the module.

### Example Code

```javascript
const counterModule = (function() {
    let count = 0; // Private variable
    
    function init(initialValue = 0) {
        count = initialValue;
        console.log(`Counter initialized to ${count}`);
    }
    
    function increment() {
        count++;
    }
    
    function display() {
        console.log(`Current count is ${count}`);
    }
    
    return {
        init: init,
        increment: increment,
        display: display
    };
})();

// Usage
counterModule.init(5); // Initializes the counter to 5
counterModule.increment(); // Increments the counter by 1
counterModule.display(); // Displays: Current count is 6
```

### Init Function: 
Initializes an array of colors and logs the initialized colors to the console. It returns the array of colors.
### Display Function:
 Logs a message to the console. This function is used within the clickHandler to log the current background color change.
### ClickHandler Function: 
Creates a closure that changes the background color and calls the display function to log the change