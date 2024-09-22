'use strict';
function fruitprocessor(apple,orange){
    console.log(apple,orange);
}

fruitprocessor(2,3);

//OUTPUT IS (2 3)

//WE CAN USE THE FUNCTION BEFORE ALSO//


let x=fruitprocessor(2,3);
function fruitprocessor(apple,orange){
    console.log(apple,orange);
}
//OUTPUT IS (2 3)

//using the variables//

function fruitprocessor(apple,orange){
    console.log(apple,orange);
    const juice=`juice with ${apple}apples and ${orange}oranges`;
    return(juice);    //RETURN STATMENT STOP THE EXICUTION OF THE FUNCTION AND RETURN THE VALUE//
    
}

fruitprocessor(2,3);
console.log(fruitprocessor(2,3)
)
/*OUTPUT IS (2 3)
juice with 2 apples and 3 oranges*/


