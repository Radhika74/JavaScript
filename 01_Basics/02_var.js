const accountId = 14455
let accountEmail = "rthakur1103@gmail.com" 
let accountState;

/*
prefer not to use var 
because of issue in block scope and functional scope

 */
var accountPassword = "1234"
accoutnCity = "Jaipur"

// accountId = 2
//not allowed as it  is declared as const 
accountEmail = "rthakur@gmail.com"
accountPassword = "12345"
accountCity = "Delhi"

console.log(accountId);
console.log([accountEmail, accountPassword, accountState])