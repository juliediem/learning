'use strict';

//First player to reach 100 points wins the game
//Everytime you roll a one, you lose all of your points
//You have an option to reset the game

//Players can hold, or roll dice
//When players hold, this switches to the other player; the other player fades into the background when they are not playing


//Dice rolls random number each time, and adds score 


//Initialize variable
let currDiceRoll=5;

//Generate Random Dice Roll
function rollDice() {
    return Math.trunc(Math.random()*6)+1;
};





//Display Dice Roll Image
const diceImg=function(img) {
    document.querySelector('.dice').src=img;
};

let updateDiceImg=function() {
    switch(currDiceRoll) {
        case 1:
            diceImg('dice-1.png');
            break;
        case 2:
            diceImg('dice-2.png');
            break;
        case 3:
            diceImg('dice-3.png');
            break;
        case 4:
            diceImg('dice-4.png');
            break;
        case 5:
            diceImg('dice-5.png');
            break;
        case 6:
            diceImg('dice-6.png');
            break;
        default:
            break;
    };
};

// updateDiceImg(diceRoll);

//Players
const player1=document.querySelector('.player--0');

let player1Score=0;
let player1CurrScore=0;


const player2=document.querySelector('.player--1');

let player2Score=0;
let player2CurrScore=0;

//Function to execute when player becomes inactive
function playerInactive(inactivePlayer,activePlayer,score,currScore,playerNumber,inactiveBool=true) {
    let num=String(playerNumber);
    if (inactiveBool) {
        inactivePlayer.classList.remove('player--active');
        activePlayer.classList.add('player--active');
    }
    score+=currScore;
    document.getElementById('score--'+num).textContent=score;
    currScore=0;
    document.getElementById('current--'+num).textContent=currScore;
};

function getPlayerStatus(player) {
    player.classList.contains('player--active');
}



//Player 1 is the first to go, once they click the Roll Dice or Hold button, remove the class player--active from that player

//If 1 is rolled, than next player goes


//Listen to Button click on Roll Dice 

//Starting with Player 1
document.querySelector('.btn--roll').addEventListener('click',function() {

    //Get player status
    let player1Status=player1.classList.contains('player--active');
    let player2Status=player2.classList.contains('player--active');
    // let player1Status=getPlayerStatus(player1);
    // let player2Status=getPlayerStatus(player2);


    currDiceRoll=rollDice();
    updateDiceImg(currDiceRoll);


    if (player1Status===true) {
        if (currDiceRoll>1) {
            player1CurrScore+=currDiceRoll;
            document.getElementById('current--0').textContent=player1CurrScore;
        } else {
            // player1.classList.remove('player--active');
            // player2.classList.add('player--active');
            // player1Score+=player1CurrScore;
            // document.getElementById('score--0').textContent=player1Score;
            // player1CurrScore=0;
            // document.getElementById('current--0').textContent=player1CurrScore;
            playerInactive(player1,player2,player1Score,player1CurrScore,0,true);
        }
    } else if (player2Status===true) {
        if (currDiceRoll>1) {
            player2CurrScore+=currDiceRoll;
            document.getElementById('current--1').textContent=player2CurrScore;
        } else {
            // player1.classList.add('player--active');
            // player2.classList.remove('player--active');
            // player2Score+=player2CurrScore;
            // document.getElementById('score--1').textContent=player2Score;
            // player2CurrScore=0;
            // document.getElementById('current--1').textContent=player2CurrScore;
            playerInactive(player2,player1,player2Score,player2CurrScore,1,true);
        }
    } 



});

//Listen to Button click on hold
document.querySelector('.btn--hold').addEventListener('click',function() {
    let player1Status=player1.classList.contains('player--active');
    let player2Status=player2.classList.contains('player--active');
    console.log(player2Status);
    console.log(player1Status);
    if (player1Status) {
        playerInactive(player1,player2,player1Score,player1CurrScore,0,true);
    } else if (player2Status) {
        playerInactive(player2,player1,player2Score,player2CurrScore,1,true);
    }
});


//Listen to New Game button click
document.querySelector('.btn--new').addEventListener('click',function() {
    // player1Score=0;
    // player1CurrScore=0;
    // document.getElementById('score--0').textContent=player1Score;
    // document.getElementById('current--0').textContent=player1CurrScore;
    // player2Score=0;
    // player2CurrScore=0;

    // document.getElementById('score--1').textContent=player2Score;
    // document.getElementById('current--1').textContent=player2CurrScore;

    currDiceRoll=5;
    updateDiceImg(currDiceRoll);

    playerInactive(player2,player1,0,0,1,true);
    player1Score=0;
    player1CurrScore=0;
    playerInactive(player1,player2,0,0,0,false);
});