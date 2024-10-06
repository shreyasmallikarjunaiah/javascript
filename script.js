"use strict";
let modal=document.querySelector('.modal');
let overlay=document.querySelector('.overlay')
let showmodal = document.querySelectorAll('.show-modal')
let closemodal=document.querySelector('.close-modal')


for(let i=0;i<showmodal.length;i++)
   showmodal[i].addEventListener('click',function(){
modal.classList.remove('hidden')
overlay.classList.remove('hidden')
});

let close_modal=function(){
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
}
    
closemodal.addEventListener('click',close_modal)
overlay.addEventListener('click',close_modal)

document.addEventListener('keydown',function(e){
    
    if(e.key==='Escape'){

        if(!modal.classList.contains('hidden')){
            close_modal();
        }
    }
        
    
})

