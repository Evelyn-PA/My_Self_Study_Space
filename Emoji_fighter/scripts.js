let fighters = ["🐉", "🐥", "🐊", "💩", "🦍", "🐢", "🐩", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷", "🐆", "🦕", "🦁"]

let stageEl = document.querySelector('#display-stg')
let fightButtonEl = document.querySelector('#pick-btn')

fightButtonEl.addEventListener('click', function () {
    //pick two random fighters
    // use randome to pick a randome index 
    // random 1
    //random 2 
    //assign 1 and 2 to the stage
    let fighter1 = Math.floor(Math.random() * fighters.length)
    let fighter2 = Math.floor(Math.random() * fighters.length)
    stageEl.textContent = fighters[fighter1] + " vs " + fighters[fighter2]
})