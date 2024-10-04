//    how to activat button action 

/*      1   selct the button and add event listener
        2   then write the action(click) what you will do
        3   the creat the function to using listener
        
        */



'use strict'





            //for automatic selecting random number



let selectnumber=Math.trunc(Math.random()*20)+1



            //  for intialising the intial score and high score


let score=20;
let highscore=0;


            // for button event


document.querySelector('.check').addEventListener('click',function(){
    let guess = Number(document.querySelector('.guess').value)
    console.log(guess);




const dispmessage= function(message){
    document.querySelector('.message').textContent=message;
   
}


            
            //if no number typed



    if(!guess){
        if(score>1){
        // document.querySelector('.message').textContent='No number';

        dispmessage('No number');
        }
        else{
            document.querySelector('.score').textContent='you loss the game';

        }
    }






            //if number is cirrect


    else if(guess===selectnumber){
        if(score>1){
        // document.querySelector('.message').textContent='correct number';

        dispmessage('correct number');

        document.querySelector('body').style.backgroundColor='green';           //chenging color

        document.querySelector('.number').style.width='30rem';                  // chenging width

        document.querySelector('.number').textContent=selectnumber;

        if(highscore<score){
            highscore=score
            document.querySelector('.highscore').textContent=highscore          // for high score
        }
        


        }
        else{
            document.querySelector('.score').textContent='you loss the game';

        }

    }






             // if the number is too high or to low

             else if (guess!==selectnumber){
                if(score>1){

                    dispmessage(
                guess>selectnumber? 'to high' : 'to low');
        
                score--;
                document.querySelector('.score').textContent=score;                //to decrese the score
        
                }
                else{
                    document.querySelector('.score').textContent='you loss the game';
        
                }
            }
        })

    // else if(guess>selectnumber){
    //     if(score>1){
    //     document.querySelector('.message').textContent='to high';

    //     score--;
    //     document.querySelector('.score').textContent=score;                 //to decrese the score
    //     }

    //     else{
    //         document.querySelector('.score').textContent='you loss the game';

    //     }


    // }




                //if the number is too  low


//     else if(guess<selectnumber){
//         if(score>1){
//         document.querySelector('.message').textContent='to to low';

//         score--;
//         document.querySelector('.score').textContent=score;                //to decrese the score

//         }
//         else{
//             document.querySelector('.score').textContent='you loss the game';

//         }
//     }

// })





                    //restart the game by AGAIN button


document.querySelector('.again').addEventListener('click',function(){

    score=20;
    dispmessage('Start guessing...');         //changing message
    
    document.querySelector('body').style.backgroundColor='black';          //changing color

    document.querySelector('.number').style.width='15rem';              //changing width

    document.querySelector('.number').textContent='?';              


    document.querySelector('.score').textContent=score;                //to decrese the score

    document.querySelector('.guess').value=''

    selectnumber=Math.trunc(Math.random()*20)+1


});

