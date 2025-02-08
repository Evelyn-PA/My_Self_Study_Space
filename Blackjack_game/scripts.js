let firstCard = 2
let secondCard = 10
let sum = firstCard + secondCard + 1
let hasBlackJack = false
let isAlive = true
let cards = [firstCard, secondCard] //array

// Store the el-messages & sum-el & cards-el in variable called messageEl
let messageEl = document.getElementById("el-messages")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")

// Declaire variables and assign its values to an emty string
let message = ""

//create startGame function
function startGame() {
    renderGame()
}

//create renderGame function
function renderGame() {
    //Display the sum on the screen
    sumEl.textContent = "Sum: " + sum

    //Display the cards on the screen
    cardsEl.textContent = "Sum: " + cards
    if (sum < 21) {
        message = "Do you want to draw a new card?"
        console.log(message)
    }
    else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
        console.log(message)
    }
    else {
        message = "You're out of the game!"
        isAlive = false
        console.log(message)
    }

    //Display the message on the screen
    messageEl.textContent = message
}

// Create newCard function
function newCard() {
    let card = 2
    sum += card
    cards.push(card)
    startGame()
}
