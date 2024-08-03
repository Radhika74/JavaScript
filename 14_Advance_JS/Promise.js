// Example of a basic promise
const promiseOne = new Promise(function(resolve, reject) {
    // Simulate an async task
    setTimeout(function() {
        console.log('Async Task is Completed');
        resolve();
    }, 1000);
});

promiseOne.then(function() {
    console.log('Promise One is resolved');
});

// Another promise
new Promise(function(resolve, reject) {
    // Simulate another async task
    setTimeout(function() {
        console.log('Another async Task is Completed');
        resolve();
    }, 1000);
}).then(function() {
    console.log('Promise Two is resolved');
});

// Promise with data
const promiseThree = new Promise(function(resolve, reject) {
    // Simulate an async task with data
    setTimeout(function() {
        resolve({username: "test", email: "test@example.com"});
    }, 2000);
});

promiseThree.then(function(user) {
    console.log('Promise Three is resolved with data:', user);
});

// Promise with error handling
const promiseFour = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = true; // Change to `false` to test success
        if (!error) {
            resolve({username: "Radhika", password: "123"});
        } else {
            reject('An error occurred');
        }
    }, 1000);
});

promiseFour
    .then(user => {
        console.log('Promise Four is resolved with data:', user);
        return user.username;
    })
    .then(username => {
        console.log('Username is:', username);
    })
    .catch(error => {
        console.log(error);
    })
    .finally(() => {
        console.log("The promise is either fulfilled or rejected");
    });

// Using async/await
const promiseFive = new Promise((resolve, reject) => {
    setTimeout(function() {
        let error = true; // Change to `false` to test success
        if (!error) {
            resolve({username: "Radhika", password: "123"});
        } else {
            reject('An error occurred');
        }
    }, 1000);
});

async function consumePromiseFive() {
    try {
        const response = await promiseFive;
        console.log('Promise Five is resolved with data:', response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive();

async function getAllUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json(); // Await the JSON parsing
        console.log(data);
    } catch (error) {
        console.error('Error fetching users:', error); // Handle errors
    }
}

getAllUsers();

//same thing can be done (function) with .then and .catch 

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error fetching users:', error));

// Promise chaining
const promiseSix = new Promise((resolve, reject) => {
    setTimeout(function() {
        resolve('Promise Six');
    }, 1000);
});