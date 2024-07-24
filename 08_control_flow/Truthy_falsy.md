## Falsy value
* false
* 0
* -0
* -1
* ""
* null
* undefined
* NaN
* BigInt
* On
## Truthy values
* "0"
* "false"
* " "
* { }
* [ ]
* function( ){ }

//detect object or array is empty or not 
```javascript
const emptyobj ={}
if (Object.keys(emptyobj).length===0){
 console.log("empty")
}
```

##  Nullish Caolescing operator (??) : null undefined
The nullish coalescing operator can be seen as a special case of the logical OR (||) operator. The latter returns the right-hand side operand if the left operand is any falsy value, not only null or undefined. In other words, if you use || to provide some default value to another variable foo, you may encounter unexpected behaviors if you consider some falsy values as usable.

### Ternary operator is different from the nullish coalescing operator

  