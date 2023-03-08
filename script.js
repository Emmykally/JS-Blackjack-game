let sum = 0;
let myCards = [];
let gotBlackjack = false;
let isAlive = false;
let message = "";
const startGame = document.querySelector("#start-game");
const messageEl = document.querySelector("#message-el");
const sumElement = document.querySelector("#sum-el");
const cardEl = document.querySelector("#card-el");
const newCard = document.querySelector("#new-card");
const playerEl = document.getElementById("player-el");

let playerMoney = {
    playername : "Emmykally",
    playerchips : 145
}
playerEl.textContent = `${playerMoney.playername} $${playerMoney.playerchips}`;


startGame.addEventListener("click", startedGame);

function startedGame() {
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    sum = firstCard + secondCard;
    myCards = [firstCard, secondCard];
    rendergame();
}
 function getRandomCard() {
    let randomNumber =  Math.floor(Math.random()*13) + 1;
    if (randomNumber > 10) {
        return 10;
    } else if (randomNumber === 1){
        return 11;
    } else{
        return randomNumber;
    }
 }

function rendergame(){
    cardEl.textContent = `Cards: `;
    for (let i = 0; i< myCards.length; i++) {
       cardEl.textContent += `${myCards[i]} `;  
    }
    sumElement.textContent = "Sum: " + sum;
    if (sum < 21) {
        message = "Do you want to draw a new card";
    } else if(sum === 21){
        message = "wohoo you won the game";
        gotBlackjack = true
    } else{
        message = "You lost the game";
        isAlive = false;
    } 

    messageEl.textContent = message;
}


newCard.addEventListener("click", function(){
    if(isAlive === true && gotBlackjack === false){
        let card = getRandomCard();
        sum += card;
        myCards.push(card);
        startedGame();
    }
    
})