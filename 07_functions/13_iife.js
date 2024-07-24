//IIFE immediately invoked function expression

(function chai(){

    //named IIFE
    console.log(`DB CONNECTED`)
})();
//SEMICOLOUM must be added here
//for writing two iife functions

( (name) => {

    //simple IIFE
    console.log(`DB CONNECTED TWO ${name}`)
    }) ("RADHIKA")

