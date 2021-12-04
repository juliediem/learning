'use strict';

//Put Scores to 0 and remove dice when initializing

//The following two lines do the same thing
//El--> Element
//We are defining all the elements once first so that we don't have to call them each time later
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//If you are initializing empty variables, you can simply write the name and separate the variables with a comma
let scores, currentScore, activePlayer, playing;

//Starting Conditions
const startConditions = function () {
  //Scores are stored in an array
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};

startConditions();

//Function for switching players

const switchPlayer = function () {
  //Switch to next player
  //Reset Current Score back to 0
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  //Reset the current score to 0 in a local variable
  currentScore = 0;
  //Switch to other player
  activePlayer = activePlayer === 0 ? 1 : 0;
  //Toggle add class if it's not there, and remove class if it is there
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

//Listen to roll dice button
btnRoll.addEventListener('click', function () {
  //None of the code will execute if playing is false;
  if (playing) {
    //1. Generate Random Dice Roll
    //This is not a global variable because each time you roll the die, if should generate a new number
    const dice = Math.floor(Math.random() * 6) + 1;
    console.log(dice);
    //2.Display a dice
    //Show dice
    diceEl.classList.remove('hidden');
    //Use template literals to dynamically display dice image
    diceEl.src = `dice-${dice}.png`;
    //3.Check if rolled 1: true
    if (dice !== 1) {
      //Add dice to current score
      currentScore += dice;
      //Dynamically generating the current score for the current active player
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    //1. Add current score to the score of the active player's score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    //2. Check if score is at least 100
    //Finish Game
    if (scores[activePlayer] >= 20) {
      playing = false;
      diceEl.classList.add('hidden');
      //Add the winner class to the active player
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      //There's a competing class you want to remove so the winner class pulls through
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      switchPlayer();
    }
  }
});

// //New Game reset variables
// btnNew.addEventListener('click', function () {
//   if (activePlayer === 1) {
//     player0El.classList.add('player--active');
//     player1El.classList.remove('player--active');
//   }
//   document
//     .querySelector(`.player--${activePlayer}`)
//     .classList.remove('player--winner');

//   player0El.classList.add('player--active');
//   startConditions();
// });

//If class is already there, or not there already, nothing will happen
btnNew.addEventListener('click', function () {
  startConditions();
});
