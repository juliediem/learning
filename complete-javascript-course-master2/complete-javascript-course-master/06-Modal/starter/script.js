'use strict';

//Start by defiining your constants of the classes you know you will be working with for the project

//You know you will be using the modal, the overlay, and you will be closing the modal, modal buttons

const modal=document.querySelector('.modal');
const overlay=document.querySelector('.overlay');
const btnCloseModal=document.querySelector('.close-modal');

//When using querySelector, it will only select the first occurence of the element in the scenario that there are more than 1; you must use querySelectorAll if you want to select them all
//This returns an array
const btnsOpenModal=document.querySelectorAll('.show-modal');
console.log(btnsOpenModal);

for (let i=0; i < btnsOpenModal.length; i++){
    btnsOpenModal[i].addEventListener('click',function() {
        console.log('Button Clicked');
        //Remove the hidden class from the modal
        //The dot is only a selector for classes, don't use dot here; 
        //If you need to pass multiple classes, use a comma
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');
    })
};

const closeModal=function() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

btnCloseModal.addEventListener('click',closeModal);

overlay.addEventListener('click', closeModal);


//Listening for Escape key
//You are listening for an event everywhere in the document
//keydown - anytime you hit any key on keyboard
//there is an object created when you listen to any event that tells you what key was pressed too, it gets passed to the function in the addEventListener
document.addEventListener('keydown', function(event) {
    console.log(event.key);

    //if modal does not contain the hidden class, then close the modal.
    //This simply checks if modal is already hidden
    if (event.key==='Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
});