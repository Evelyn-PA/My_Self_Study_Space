let firstCard = 2
let secondCard = 10
let sum = firstCard + secondCard + 1

//console.log(sum)

if (sum < 21) {
    console.log("Do you want to draw a new card?")
}
else if (sum === 21) {
    console.log("You've got Blackjack!")
}
else {
    console.log("You're out of the game!")
}