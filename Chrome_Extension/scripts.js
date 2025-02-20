let myLeads = [];
const inputEl = document.querySelector("#input-el");
const ulEl = document.querySelector("#ul-el");
let saveEl = document.querySelector("#save-el");

//When the button click, the input value is saved to the myLeads array
//Then the renderLeads function is called to render the list items to the unordered list
saveEl.addEventListener("click", function () {
    myLeads.push(inputEl.value);
    //Clear the input field when the button is clicked
    inputEl.value = "";
    renderLeads();
});

function renderLeads() {
    //Create a variable to store the list items
    let listItems = " ";
    //Loop through the myLeads array
    for (let i = 0; i < myLeads.length; i++) {
        //Add each item to the listItems variable with a li HTML tag
        listItems += "<li>" + myLeads[i] + "</li>";
    }
    //Render the list items to the unordered list
    ulEl.innerHTML = listItems;
}


