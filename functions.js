//function init
function init() {
    tempScore1=0;
    tempScore2=0;
    totalScore1=0;
    totalScore2=0;
    // scoreMaxElm.innerHTML=`The score max is: ${SCORE_MAX}`;
    affiche();

    currentPlayer = 1;
    activePlayer();
    dieImgElm.style.visibility="visible";
    dieImgElm.src="images/dieM.png";


    joueur1.getElementsByTagName("h2")[0].innerHTML="Joueur 1 <i class='fa-brands fa-linux'></i>";
    joueur2.getElementsByTagName("h2")[0].innerHTML="Joueur 2 <i class='fa-brands fa-linux'></i>";

    lanceBtn.disabled=false;
    passBtn.disabled=false;
}

//Function getRandom
function getRandom() {
    return Math.floor(Math.random()*6);
}

//function lance
function lance() {
    dieNumber=getRandom();
    dieImgElm.src=diceImages[dieNumber];
    activePlayer();
    if(currentPlayer == 1) {
        if(dieNumber+1 != 1) {
            totalScore1+=1;
            tempScore1+=dieNumber+1;
        }else {
            tempScore1=0;
            currentPlayer = 2;
            jouerSuivant();
            // dieImgElm.src="images/dieM.png";
        }
    }else {
        if(dieNumber+1 != 1) {
            totalScore2+=1;
            tempScore2+=dieNumber+1;
        }else {
            tempScore2=0;
            currentPlayer = 1;
            jouerSuivant();
            // dieImgElm.src="images/dieM.png";
        }
    }
    if(dieNumber+1 == 1) {
        passBtn.disabled=true;

    }else {
        passBtn.disabled=false;
    }
    winnerFct();
    affiche();
}


//Affiche function
function affiche() {
    totalScore1Elm.textContent=totalScore1;
    totalScore2Elm.textContent=totalScore2;
    tempScore1Elm.textContent=tempScore1;
    tempScore2Elm.textContent=tempScore2;
}

function jouerSuivant(e) {
    //cache le dé

    //passe la main a l'autre joueur
    // if die number is different than 0
    if(dieNumber+1 !=1) {
        dieImgElm.src="images/dieM.png";
        if(currentPlayer==1) {
            totalScore1+=tempScore1;
            tempScore1=0;
            currentPlayer=2;
        }else {
            totalScore2+=tempScore2;
            tempScore2=0;
            currentPlayer=1;
        }
        winnerFct();
        affiche();
    }
    console.log(currentPlayer);
    activePlayer();
    //console.log(dieNumber+1);
}

function winnerFct() {
    if(totalScore1>=SCORE_MAX || totalScore2>=SCORE_MAX) {
        lanceBtn.disabled=true;
        passBtn.disabled=true;
        dieImgElm.style.visibility="hidden";
        if(totalScore1 >= SCORE_MAX) {
            joueur1.getElementsByTagName("h2")[0].textContent="🏆winner🥇";
            currentPlayer=1;
            activePlayer();
            tempScore2=0;
        }else if(totalScore2 >= SCORE_MAX) {
            joueur2.getElementsByTagName("h2")[0].textContent="🏆Winner🥇";
            currentPlayer=2;
            activePlayer();
            tempScore1=0;
        }
    }
}


function activePlayer() {
    if(currentPlayer == 1) {
        joueur1.classList.add("active");
        joueur2.classList.remove("active");
    }else {
        joueur2.classList.add("active");
        joueur1.classList.remove("active");
    }
}