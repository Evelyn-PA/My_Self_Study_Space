// document.getElementById("count").innerText = 5

let count = 0

function increment() {
    count = count + 1
    console.log("Button clicked")
    console.log(count)
    document.getElementById("count").innerText = count
}