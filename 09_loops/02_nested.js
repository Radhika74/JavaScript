//nested loop
for(let i=1; i<=10; i++){
    console.log(`Outer loop value: ${i}`)  
    for(let j=1; j<=10; j++){
        // console.log(`inner loop value: ${i} and outer loop: ${j}`)
        console.log(i + ' * ' + j + ' = ' + i*j )
    }
}