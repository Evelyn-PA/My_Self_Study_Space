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
// function splitBill(amount, people) {
//     let message = `Each people will pay ${(amount / people).toFixed(2)} for the bill of ${amount}`
//     return message
// }

// //Closure testing
// // Challenge: Write a countdown function with a hard-coded starting number inside closure
// // Stretch goal: Write a countdown function that can count from a provided number,
// // with a provided step

// // Start
// function countdown(startNumber, step) {
//     // write your code here
//     let count = startNumber + step
//     return function down() {
//         count -= step;
//         return count
//     }
// }

// const countingDown = countdown(10, 2);

// console.log(countingDown());
// console.log(countingDown());
// console.log(countingDown());

//Arrow Function
// =>

const username = 'john';

const capitalize = name => `${name.charAt(0).toUpperCase()}${name.slice(1)}`;

function greetUser(name, callback) {
    return callback(capitalize(name));
}

const result = greetUser(username, name => `Hi there, ${name}!`);

console.log(result);
console.log((name => `Hello, nice to meet you ${name}`)("John"))

/* ----------------------------------- */

// Challenge: Rewrite your first function from a previous challnge to be an arrow function. 
// Stretch goal: Rewrite counting down closure in arrow function form. 


// Challenge start 
const splitBill = (amount, numPeople) =>
    `Each person needs to pay ${amount / numPeople}`

console.log(splitBill(10, 2));
console.log(splitBill(10, 4));
console.log(splitBill(10, 5));


// Stretch goal start
const countdown = (startingNumber, step) => {
    let countFromNum = startingNumber + step;
    return () =>
        countFromNum -= step;
}

const countingDown = countdown(20, 2);

console.log(countingDown());
console.log(countingDown());
console.log(countingDown());

