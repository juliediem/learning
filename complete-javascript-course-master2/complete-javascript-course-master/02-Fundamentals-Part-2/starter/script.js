'use strict';
// has to be the very first line of  code, or strict mode will not be activated
// catches spelling errors
let hasDriversLicense=false;
const passTest=true;

if (passTest) hasDriversLicense=true;
if (hasDriversLicense) console.log('I can drive');

// const interface='Audio';
//interface is a reserved word so strict mode will log error

function logger() {
    console.log('My name is Julie');
}

logger();

//Function Declaration 
function fruitProcessor(apples,oranges) {
    console.log(apples,oranges);
    const juice =`Juice with ${apples} apples and ${oranges} oranges.`
    return juice;
}

fruitProcessor(5,0);

//Store in variable a result will be saved (the string that is supposed to be returned)
const myJuice=fruitProcessor(5,0);
console.log(myJuice);


function calcAge1(birthYear) {
    return 2021-birthYear;
}

console.log(calcAge1(1994));



//Function Expression - Anonymous Function
//Value is stored into a variable; Expression produces a value
const calcAge2=function (birthYear) {
    return 2021-birthYear;
}

console.log(calcAge2(1994));

//We can call function declarations before they are defined in the code
//You can't do this with expressions



//Arrow Functions
//Shorter and faster

const calcAge3 = birthYear => 2021-birthYear;
console.log(calcAge3(1994));


//Calculate Retirement
const yearsUntilRetirement=(birthYear,firstName)=> {
    const age=2021-birthYear;
    const retirement=65-age;
    return `${firstName} retires in ${retirement} years`; 
}

console.log(yearsUntilRetirement(1994,'Julie'));



//Functions within Functions
function cutFruitPieces(fruit) {
    return fruit *4;
}

function fruitProcessor(apples,oranges) {
    const applePieces=cutFruitPieces(apples);
    const orangePieces=cutFruitPieces(oranges);
    const juice =`Juice with ${applePieces} apple pieces and ${orangePieces} orange pieces.`;
    return juice;
}

console.log(fruitProcessor(2,3));



/*Coding Challenge #1*/

const calcAverage=(score1,score2,score3)=>(score1+score2+score3)/3