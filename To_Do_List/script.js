let checkList = document.querySelector("#list")
// Create popup box in the center of the screen to add new tasks
let modal = document.querySelector(".modal-container")
let btn = document.querySelector("#add-btn")
let closeBtn = document.querySelector("#close-btn")
const saveBtn = document.querySelector("#done-btn")
let input = document.querySelector("#input")
const list = document.querySelector("#list")
const highBtn = document.querySelector("#high-btn")
const mediumBtn = document.querySelector("#medium-btn")
const lowBtn = document.querySelector("#low-btn")
let myOutPut = []
let currentColor = ""
//When the add btn clicked, show the modal
btn.addEventListener("click", () =>
    modal.style.display = "block")

//When the close btn clicked, hide the modal
closeBtn.addEventListener("click", () =>
    modal.style.display = "none")


highBtn.addEventListener("click", function () {
    currentColor = "#FE4A49"; // Red color for high priority
});
mediumBtn.addEventListener("click", function () {
    currentColor = "#FED766"; // Yellow color for medium priority
});
lowBtn.addEventListener("click", function () {
    currentColor = "#009FB7"; // Blue color for low priority
});

//Use local storage to store the data
//When the user refresh the page, the data will still appear
localStorage.clear("myOutPut")
if (localStorage.getItem("myOutPut")) {
    myOutPut = JSON.parse(localStorage.getItem("myOutPut"))
    render(myOutPut)
}
//When the user click done, the input will appear to the screen
// And the modal will close
saveBtn.addEventListener("click", function () {
    myOutPut.push({ text: input.value, color: currentColor, checked: false })
    input.value = ""
    render(myOutPut)
    //Close the modal
    modal.style.display = "none"
    //reset the color
    currentColor = ""
    localStorage.setItem("myOutPut", JSON.stringify(myOutPut))
})



//Feature to tick the task when it's done
checkList.addEventListener("click", function (event) {
    if (event.target.tagName === "LI") {
        const index = Array.from(checkList.children).indexOf(event.target); //Find the position of the checked list item in the list.
        myOutPut[index].checked = !myOutPut[index].checked; //Flip the checked status 
        localStorage.setItem("myOutPut", JSON.stringify(myOutPut));
        event.target.classList.toggle("checked");
    }
});

//Function render the input
//Add a class, check if the item was checked -> apply the checked class
function render(input) {
    let outputItems = ""
    for (let i = 0; i < input.length; i++) {
        outputItems += ` 
        <li style="color: ${input[i].color}" class="${input[i].checked ? 'checked' : ''}">${input[i].text}</li>
        `
    }
    list.innerHTML = outputItems

}

