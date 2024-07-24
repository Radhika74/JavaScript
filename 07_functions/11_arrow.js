// console.log(this)
// function chai (){
//     let username = "RADHIKA"
//     console.log(this)
// }
// chai()

// const chai = function(){
//     let username = "RADHIKA"
//     console.log(this.username) //error 
// }
// chai()


const chai = () => {
    let username = "RADHIKA"
    console.log(this.username) 
}

chai()
