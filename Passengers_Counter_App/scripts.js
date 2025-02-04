// document.getElementById("count").innerText = 5

countEl = document.getElementById("count")
saveEl = document.getElementById("save-El")

let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    count = 0
    countEl.textContent = count
}

function reset() {
    count = 0
    countEl.textContent = count
    saveEl.textContent = "Previous entries: "
}
