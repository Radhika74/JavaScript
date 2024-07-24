const regularuser={
email : "rt@gmail.com",
password : "12345",
role : "regular",
fullname : {
    userfullname : {
        firstname : "Radhika",
        lastname : "Thakur"
    }
}
}

console.log(regularuser.email, regularuser)
console.log(regularuser.fullname.userfullname.firstname)
//use question mark to check value exist or not 
console.log(regularuser.fullname?.userfullname.firstname)
console.log(regularuser.fullname?.userfullname.lastname)

