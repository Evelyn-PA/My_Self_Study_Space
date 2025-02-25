let myLeads = [];
const inputEl = document.querySelector("#input-el");
const ulEl = document.querySelector("#ul-el");
let saveEl = document.querySelector("#save-el");
const deleteEl = document.querySelector("#delete-btn");
const tabEl = document.querySelector("#tab-btn")

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage;
    render(myLeads);
}

//When the delete button is clicked, the myLeads will be clear
deleteEl.addEventListener("dblclick", function () {
    localStorage.clear();
    myLeads = [];
    render(myLeads);
})

//When the button click, the input value is saved to the myLeads array
//Then the renderLeads function is called to render the list items to the unordered list
saveEl.addEventListener("click", function () {
    myLeads.push(inputEl.value);
    //Clear the input field when the button is clicked
    inputEl.value = "";
    //save the myLeads array to the local storage as a string
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);
});

//Add the url (tab) while click the save tab button
tabEl.addEventListener("click", function () {
    //Using chrome API to take the current tab url
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
    })
})


function render(leads) {
    //Create a variable to store the list items
    let listItems = " ";
    //Loop through the myLeads array
    for (let i = 0; i < leads.length; i++) {
        //Add each item to the listItems variable with a li HTML tag
        listItems += `
        <li> 
            <a target= "_blank" href = "${leads[i]}">
            ${leads[i]}
            </a>
        </li>`;
    }
    //Render the list items to the unordered list
    ulEl.innerHTML = listItems;
}


