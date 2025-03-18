
// Create popup box in the center of the screen to add new tasks
let modal = document.querySelector(".modal-container")
let btn = document.querySelector("#add-btn")
let closeBtn = document.querySelector("#close-btn")
const saveBtn = document.querySelector("#done-btn")
let input = document.querySelector("#input")
const list = document.querySelector("#list")
let myOutPut = []

//When the add btn clicked, show the modal
btn.addEventListener("click", () =>
    modal.style.display = "block")

//When the close btn clicked, hide the modal
closeBtn.addEventListener("click", () =>
    modal.style.display = "none")

//When the user click done, the input will appear to the screen
// And the modal will close
saveBtn.addEventListener("click", function () {
    myOutPut.push(input.value)
    input.value = " "
    render(myOutPut)
})

//Function render the input
function render(input) {
    let outputItems = " "
    for (let i = 0; i < input.length; i++) {
        outputItems += `
        <li>${input[i]}</li>
        `
    }
    list.innerHTML = outputItems
    let listEl = document.querySelectorAll("#list li") // select all the list items
    // loop through the list items and add an event listener to each one
    // if the list item already has the class "checked", remove it
    listEl.forEach(function (item) {
        item.addEventListener("click", function () { // when the list item is clicked, add the class "checked" to the list item
            this.classList.toggle("checked")
        })
    })

}

