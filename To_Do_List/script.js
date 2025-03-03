let listEl = document.querySelectorAll("#list li") // select all the list items

// loop through the list items and add an event listener to each one
// if the list item already has the class "checked", remove it
listEl.forEach(function (item) {
    item.addEventListener("click", function () { // when the list item is clicked, add the class "checked" to the list item
        this.classList.toggle("checked")
    })
})
// Create popup box in the center of the screen to add new tasks
