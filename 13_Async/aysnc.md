## What are Async Code??
Functions running in parallel with other functions are called asynchronous.

An async function declaration creates an AsyncFunction object. Each time when an async function is called, it returns a new Promise which will be resolved with the value returned by the async function, or rejected with an exception uncaught within the async function.

Async functions can contain zero or more await expressions. Await expressions make promise-returning functions behave as though they're synchronous by suspending execution until the returned promise is fulfilled or rejected. The resolved value of the promise is treated as the return value of the await expression. Use of async and await enables the use of ordinary try / catch blocks around asynchronous code.

Async functions always return a promise. If the return value of an async function is not explicitly a promise, it will be implicitly wrapped in a promise.

A good example is JavaScript setTimeout().
callbacks are most often used with asynchronous functions

* Synchronous functions
* Single Thread

### Execution Context
execute one line at a time

## Blocking code and Non blocking code

* Blocking code refers to code that stops the execution of the subsequent code until the current operation is completed. In other words, it blocks the execution thread. This can lead to performance issues and a poor user experience, especially in a single-threaded environment like JavaScript running in the browser.
  
  Example of Non-Blocking Code
 ```javascript
// Synchronous function that blocks execution
function blockingOperation() {
  for (let i = 0; i < 1e9; i++) {
    // Some heavy computation
  }
  console.log("Blocking operation completed");
}

console.log("Before blocking operation");
blockingOperation();
console.log("After blocking operation");
```

Non-blocking code, on the other hand, allows the execution of other operations to continue before the current operation is finished. This is achieved using asynchronous programming techniques, which are crucial for creating responsive applications.

Example of Blocking Code

```javascript
console.log("Before non-blocking operation");

setTimeout(() => {
  console.log("Non-blocking operation completed");
}, 1000);

console.log("After non-blocking operation");
```
* ### Diagram Representation



![alt text](<Screenshot 2024-07-29 222208.png>)
