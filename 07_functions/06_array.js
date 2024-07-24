const myNewArray = [200, 400, 100, 600]

function returnvalue(getArray){
    return getArray[1]
}

console.log(returnvalue(myNewArray)) //400
console.log(returnvalue([100,200,300,400]))
