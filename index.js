let firstCard = 4
let secondCard = 10
let cards = [firstCard, secondCard]

let sum = firstCard + secondCard;

let hasBlackJack = false
let isAlive = true 

let message = " "

let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

//using css selector
//let sumEl = document.querySelector("#sum-el") //this is to select an id
//let sumEl = document.querySelector(".sum-el") //this is to select a class

function startGame(){
    renderGame()
}

function renderGame() {
    if (sum <= 20) {
        message = "Do you want to draw a new card";
    } else if (sum === 21) {
        message = "Woohoo! You've got Blackjack!";
        hasBlackJack = true
    } else if (sum > 21) {
        message = "You're out the game!";
        isAlive = false
    }
    
    messageEl.textContent = message;
    sumEl.textContent =   `Sum: ${sum}`
    cardsEl.textContent = `Cards: ${cards[0]}   ${cards[1]}`
}

function newCard(){
    console.log("Drawing a new card from the deck! ");

    let card = 7;
    cards.push(card)

    sum += card;
    renderGame()
}