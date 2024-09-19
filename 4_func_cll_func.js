'use strict';
function cutFruit(fruit){
    return fruit *  4
}

function fruitprocessor(apples,oranges){
    const applecut = cutFruit(apples)
    const orangecut= cutFruit(oranges)
    const run=`juice with ${applecut} pieces of apple and ${orangecut} pieces of oranges`
    return run;
}
console.log(fruitprocessor(5,6))