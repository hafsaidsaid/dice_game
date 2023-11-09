//Get HTML Elements
const joueur1=document.querySelector(".container #joueur1");
const joueur2=document.querySelector(".container #joueur2");


const tempScore1Elm=document.querySelector("#tempScore1Elm");
console.log(tempScore1Elm);
const tempScore2Elm=document.querySelector("#tempScore2Elm");
console.log(tempScore2Elm);

const totalScore1Elm=document.querySelector("#totalScore1Elm");
console.log(totalScore1Elm);

const totalScore2Elm=document.querySelector("#totalScore2Elm");
console.log(totalScore2Elm);

const newGameBtn=document.querySelector("button#newGameBtn");
console.log(newGameBtn);

const dieImgElm=document.querySelector("#diceImg");

const lanceBtn=document.querySelector("#lanceBtn");
const passBtn=document.querySelector("#passBtn");


// const scoreMaxElm=document.querySelector(".scoreMaxElm");

const SCORE_MAX=20;

let tempScore1=0;
let tempScore2=0;
let totalScore1=0;
let totalScore2=0;
let currentPlayer;


let dieNumber;
window.addEventListener("DOMContentLoaded",init);
newGameBtn.addEventListener("click",init);

//dice images array
let diceImages=["images/dice1.png","images/dice2.png","images/dice3.png",
"images/dice4.png","images/dice5.png","images/dice6.png"];


//click on lance button
lanceBtn.addEventListener("click",lance);


//click on jouerSuivant
passBtn.addEventListener("click",jouerSuivant);