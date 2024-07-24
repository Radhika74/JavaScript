const userloggedIn =true
const debitCard = false
const google = true


if (userloggedIn && debitCard && google) {
    console.log("User can access google account")
} else if (userloggedIn && google) {
    console.log("User can access google account with debit card")
} else if (userloggedIn && debitCard) {
    console.log("User can access debit card with google")
} else if (userloggedIn || google) {
    console.log("User can access account")
}

