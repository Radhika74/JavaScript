//break and continue
for (let index = 0; index <=20; index++) {

    if (index === 10) {
        console.log("Breaking loop at 10")
        break;
    }
    console.log(`Value of i is ${index}`)
}

//continue 
for (let index = 0; index <=20; index++) {

    if (index === 10) {
        console.log("Continuing loop at 10")
        continue;
    }
    console.log(`Value of i is ${index}`)
}
//atleast once we have execute after continue 
