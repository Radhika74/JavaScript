function add(num1, num2)  //parameters
{
    console.log(num1 + num2)
}
function add2(num1, num2) //parameters
{
    console.log('hello')
    return num1 + num2
    console.log('world') //it will not print as after return it will not execute
}

add() //return NaN 
add(10, 20) // arguement 
add(10, "30") // arguement return 1030
add(3, null) 
add(4, undefined)
add(5, NaN)


const result = add(3,7) //not return value
console.log(result)


const result2 = add2(3,7)
