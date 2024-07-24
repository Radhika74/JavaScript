const myNums=[1,2,3,4,5,6,7,8,9,10]
const myNumbers=[11,12 ,13,14,15,]
const newNums= myNums.filter((num) => num>4)


console.log(newNums)

const newNums1= myNumbers.filter((num) => {
    // num>4 give []
    return num>4
})

console.log(newNums1)

//empty 
const newNo=[]
myNums.forEach((num) => {
     if(num>4){
         newNo.push(num)
     }
})

console.log(newNo)


