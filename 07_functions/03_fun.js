function loginUserMessage(username="sam") //minimum username so it can not enter if block
{
    if (username === undefined){
        console.log("Please enter a username")
        return 
    }
    return `Welcome ${username}! You are logged in.`;
}
 //loginUserMessage("radhika") not print anything

//console.log(loginUserMessage("Radhika"))
console.log(loginUserMessage()) //undefined

