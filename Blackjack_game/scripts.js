let sum = 0
let hasBlackJack = false
let isAlive = false
let cards = [] //array

// Store the el-messages & sum-el & cards-el in variable called messageEl
let messageEl = document.getElementById("el-messages")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")

// Declaire variables and assign its values to an emty string
let message = ""

//Declare the restart varialbe 
let restart = document.getElementById("restart-btn")


// Declaire the player name and money
let player = {
    name: "Evelyn",
    money: 100,
    addMoney() {
        this.money += 10; // Increase money by 10 when winning
    }
}

//Declare the player money:
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.money

//create getRandomCard function
function getRandomCard() {
    let randomCard = Math.floor(Math.random() * 13) + 1
    /*Update for the game: 
    if 1 -> return 11
    if 11 - 13 return 10*/
    if (randomCard > 10) {
        return 10
    }
    else if (randomCard === 1) {
        return 11
    }
    return randomCard

}

//create startGame function
function startGame() {
    isAlive = true
    hasBlackJack = false
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    sum = firstCard + secondCard
    cards = [firstCard, secondCard]
    renderGame()
}

//create renderGame function
function renderGame() {
    //Display the sum on the screen
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    //Display the cards on the screen
    sumEl.textContent = "Sum: " + sum
    if (sum < 21) {
        message = "Do you want to draw a new card?"
        console.log(message)
    }
    else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
        player.addMoney()
        console.log(message)
    }
    else {
        message = "You're out of the game!"
        isAlive = false
        console.log(message)
    }

    //Display the message on the screen
    messageEl.textContent = message

    //Display the player name and money on the screen
    playerEl.textContent = player.name + ": $" + player.money

}

// Create newCard function
function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }

}

//Create the restartGame function
function restartGame() {
    cardsEl.textContent = "Cards: "
    sumEl.textContent = "Sum: "
    sum = 0
    hasBlackJack = false
    isAlive = false
    cards = []
    player.money = 100
    playerEl.textContent = player.name + ": $" + player.money

}
