'use strict';
// //if you are selecting a class use a . if you using an id use #
// //Dot operator operates left to right
// console.log(document.querySelector('.message').textContent);

// //DOM --> Document Object Model
// //DOM allows access to html elements and styles to manipulate them; a connection point between js and html/css;
// //Not apart of JS; DOM is apart of Web APIs; DOM works the same in all browsers


// //Set the content to something else
// document.querySelector('.message').textContent='🎉 Correct Number!';
// console.log(document.querySelector('.message').textContent);

// //Grab the number class from the HTML and grab the Score class to change the values of them
// document.querySelector('.number').textContent=13;
// document.querySelector('.score').textContent=10;

// //Get the input class and update the input value
// document.querySelector('.guess').value=23;
// console.log(document.querySelector('.guess').value);

//Do something when "Check!" button is clicked. Use an event listener


/* PROJECT START*/

/*Define the secret number. Math.random() provides a decimal number from 0-1. We want a range of 1-20. Math.trunc() gets rid of decimal. And we add a 1 at the end of this because this will only go to 1-19.*/
let secretNumber=Math.trunc(Math.random()*20)+1;


/*Create score variable that can be updated and store score there
Don't rely on the DOM to store your value
This is a state variable
You want the data available in the code and not stored in DOM*/
let score=20;

let highscore=0;

//Refactoring the code, because we reference this line of code multiple times, so we're writing a function to replace all instances where this line is referenced
const displayMessage=function(message) {
    document.querySelector('.message').textContent=message;
}

//Grab button class. You'll notice two classes, btn check, we're only interested in the check class
//addEventListener is a method, first parameter name of the event your are listening for, the second parameter requires a function
document.querySelector('.check').addEventListener('click', function() {
    const guess= Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    //No input provided
    if (!guess) {
        displayMessage('🤔 No Number!');

    //When Player wins
    } else if (guess===secretNumber) {
        displayMessage('🎉 Correct Number!');
        //You don't need to use the dot when selecting HTML elements such as body or head. The dot is only used for classes.
        //In CSS, background-color is written with a dash. In JS, you use camelCase
        //This line changes the background color when someone wins
        //Whenever you manipulate something you have to provide a string
        document.querySelector('body').style.backgroundColor='#60b347';
        //Change the width of the Number you are supposed to guess
        //This will become an in-line style in the HTML file
        document.querySelector('.number').style.width='30rem';
        document.querySelector('.number').textContent=secretNumber;

        if (score>highscore) {
            highscore=score;
            document.querySelector('.highscore').textContent=highscore;
        }

    //When guess is too high
    } else if (guess !== secretNumber) {
        if (score>1) {
            score--;
            displayMessage(guess>secretNumber? '📈 Too High!':'📉 Too Low!');
            document.querySelector('.score').textContent=score;
        } else {
            displayMessage('LOSER!');
            document.querySelector('.score').textContent=0;
        }

    }

});

//This resets the game when you click the again button

document.querySelector('.again').addEventListener('click', function() {
    score=20;
    document.querySelector('.score').textContent=score;
    secretNumber=Math.trunc(Math.random()*20)+1;

    document.querySelector('.guess').value='';
    document.querySelector('.message').textContent='Start guessing...';
    document.querySelector('body').style.backgroundColor='#222';
    document.querySelector('.number').style.width='15rem';
    document.querySelector('.number').textContent='?';

}); 


