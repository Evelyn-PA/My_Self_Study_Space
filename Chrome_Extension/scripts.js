let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"];
const inputEl = document.querySelector("#input-el");
const inputBtn = document.querySelector("#input-btn");
const ulEl = document.querySelector("#ul-el");

let saveEl = document.querySelector("#save-el");
saveEl.addEventListener("click", function () {
    console.log("Button clicked with addEventListener");
    myLeads.push(inputEl.value);
    console.log(myLeads);
})

//Log out the items in myLeads array
for (let i = 0; i < myLeads.length; i++) {
    console.log(myLeads[i]);
}