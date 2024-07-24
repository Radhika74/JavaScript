//nested scope 
function one(){
    const username = "hello"

    function two(){
        const web = "http://hello.com"
        console.log(username) //access variable from outer function
    }
    console.log(web)  //out of scope
    two()
}

one()

// if (true){
//     const username= "Sam"
//     if (username == "Sam"){
//         const web = 'YOUTUBE'
//         console.log(username + web)

//     }
//     console.log(web) //out of scope

// }

// console.log(username) //out of scope
