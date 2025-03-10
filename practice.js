//practice ternaries and if else statements
//Question 1: 
// 1. If the user is under 16, tell them they can't drive
// 2. If the user is 16, tell them they can drive

//using ternary
let userAge = 18
let message = userAge < 16 ? "You can't drive" : "You can drive"
console.log(message)

//using if else
if (userAge < 16) {
    console.log("You can't drive")
}
else {
    console.log("You can drive")
}

// Challenge 2: Check if the user is allowed to add an "iPad" to its shopping cart. Write a ternary that sets the shoppingCart variable to "iPad" if the user is authenticated, and an empty string if the user isn't authenticated

const isAuthenticated = true;
let shoppingCart;

// write your code here

shoppingCart = isAuthenticated ? "iPad" : ""

console.log("shoppingCart: ", shoppingCart);


// Challenge 2: Check if user is old enough. Write a ternary that sets allowedAccess to true if the age is 18 or more, or false if not
const age = 20;
let allowedAccess;

// write your code here
allowedAccess = age >= 18 ? true : false 

console.log("allowedAccess: ", allowedAccess);

/* NEW PRACTICE*/

/* Challenge 1: Let's say you're building Reddit. Only users that are either moderators or have reached a certain karma threshold are allowed to upvote. */

const karma = 90;
const isModerator = true;

// first use a ternary to set hasEnoughKarma to true if karma is above 100. If not, set it to false
let hasEnoughKarma;
hasEnoughKarma = karma > 100 ? true : false

//  set the value of canUpvote with short-circuiting (using hasEnoughKarma and isModerator)
let canUpvote;
canUpvote = hasEnoughKarma || isModerator 
console.log("canUpvote:", canUpvote);

/* Challenge 2: Let's say that only moderators who have enough karma are allowed to delete posts.  How would you set the canDelete variable */

// set canDelete to true if both hasEnoughKarma and isModerator is true
let canDelete;
canDelete = hasEnoughKarma && isModerator

console.log("canDelete:", canDelete);


// Challenge 3: what is the value of user? What if you switch the hasValidEmail variable to false? What if the response is empty?

const response = "JohnDoe";
const hasValidEmail = true;
const user = hasValidEmail && (response || "guest");
// console.log("user: ", user);

// ------------------------------------//

// Challenge: Write a function splitBill() that lets you know how much 
// you need to pay to split any bill between you and your friends. 
// It should return a message with a number. 

// Write your code below:
function splitBill(amount, people){
    let message = `Each people will pay ${(amount/people).toFixed(2)} for the bill of ${amount}`
    return message
}



// Testing your solution
console.log(splitBill(10, 2))
console.log(splitBill(16, 4))
console.log(splitBill(350, 9))
 




