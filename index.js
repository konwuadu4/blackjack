let player = {
    name: "Dinou",
    chips: 200
}

let cards = []

let sum = 0

let hasBlackJack = false
let isAlive = false 

let message = " "

let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")


let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name +  ": $" + player.chips

//using css selector
//let sumEl = document.querySelector("#sum-el") //this is to select an id
//let sumEl = document.querySelector(".sum-el") //this is to select a class

function getRandomCard(){
    let randomNum = Math.floor(Math.random() * 13) + 1
    if (randomNum === 1){
        return 11
    } else if (randomNum > 10){
        return 10
    } else {
        return randomNum
    }
}

function startGame(){
    isAlive = true
    
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    
    sum = firstCard + secondCard;
    
    // this does not allow to restart the game
    // for (let i = 0; i < 2; i++){
    //     cards.push(getRandomCard())
    //     sum += cards[i]
    // }
    
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    
    for (let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " ";
    }
    
    sumEl.textContent =   `Sum: ${sum}`
    
    if (sum <= 20) {
        message = "Do you want to draw a new card";
    } else if (sum === 21) {
        message = "Woohoo! You've got Blackjack!";
        hasBlackJack = true;
    } else if (sum > 21) {
        message = "You're out the game!";
        isAlive = false;
    }
    messageEl.textContent = message;
    
}


function newCard(){
    // console.log("Drawing a new card from the deck! ");
    
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard();
        sum += card;
        cards.push(card)
        renderGame()
    }
}