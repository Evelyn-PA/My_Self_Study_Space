// // // // // // //practice ternaries and if else statements
// // // // // // //Question 1:
// // // // // // // 1. If the user is under 16, tell them they can't drive
// // // // // // // 2. If the user is 16, tell them they can drive

// // // // // // //using ternary
// // // // // // let userAge = 18
// // // // // // let message = userAge < 16 ? "You can't drive" : "You can drive"
// // // // // // console.log(message)

// // // // // // //using if else
// // // // // // if (userAge < 16) {
// // // // // //     console.log("You can't drive")
// // // // // // }
// // // // // // else {
// // // // // //     console.log("You can drive")
// // // // // // }

// // // // // // // Challenge 2: Check if the user is allowed to add an "iPad" to its shopping cart. Write a ternary that sets the shoppingCart variable to "iPad" if the user is authenticated, and an empty string if the user isn't authenticated

// // // // // // const isAuthenticated = true;
// // // // // // let shoppingCart;

// // // // // // // write your code here

// // // // // // shoppingCart = isAuthenticated ? "iPad" : ""

// // // // // // console.log("shoppingCart: ", shoppingCart);


// // // // // // // Challenge 2: Check if user is old enough. Write a ternary that sets allowedAccess to true if the age is 18 or more, or false if not
// // // // // // const age = 20;
// // // // // // let allowedAccess;

// // // // // // // write your code here
// // // // // // allowedAccess = age >= 18 ? true : false

// // // // // // console.log("allowedAccess: ", allowedAccess);

// // // // // // /* NEW PRACTICE*/

// // // // // // /* Challenge 1: Let's say you're building Reddit. Only users that are either moderators or have reached a certain karma threshold are allowed to upvote. */

// // // // // // const karma = 90;
// // // // // // const isModerator = true;

// // // // // // // first use a ternary to set hasEnoughKarma to true if karma is above 100. If not, set it to false
// // // // // // let hasEnoughKarma;
// // // // // // hasEnoughKarma = karma > 100 ? true : false

// // // // // // //  set the value of canUpvote with short-circuiting (using hasEnoughKarma and isModerator)
// // // // // // let canUpvote;
// // // // // // canUpvote = hasEnoughKarma || isModerator
// // // // // // console.log("canUpvote:", canUpvote);

// // // // // // /* Challenge 2: Let's say that only moderators who have enough karma are allowed to delete posts.  How would you set the canDelete variable */

// // // // // // // set canDelete to true if both hasEnoughKarma and isModerator is true
// // // // // // let canDelete;
// // // // // // canDelete = hasEnoughKarma && isModerator

// // // // // // console.log("canDelete:", canDelete);


// // // // // // // Challenge 3: what is the value of user? What if you switch the hasValidEmail variable to false? What if the response is empty?

// // // // // // const response = "JohnDoe";
// // // // // // const hasValidEmail = true;
// // // // // // //const user = hasValidEmail && (response || "guest");
// // // // // // // console.log("user: ", user);

// // // // // // // ------------------------------------//

// // // // // // // Challenge: Write a function splitBill() that lets you know how much
// // // // // // // you need to pay to split any bill between you and your friends.
// // // // // // // It should return a message with a number.

// // // // // // // Write your code below:
// // // // // // // function splitBill(amount, people) {
// // // // // // //     let message = `Each people will pay ${(amount / people).toFixed(2)} for the bill of ${amount}`
// // // // // // //     return message
// // // // // // // }

// // // // // // // //Closure testing
// // // // // // // // Challenge: Write a countdown function with a hard-coded starting number inside closure
// // // // // // // // Stretch goal: Write a countdown function that can count from a provided number,
// // // // // // // // with a provided step

// // // // // // // // Start
// // // // // // // function countdown(startNumber, step) {
// // // // // // //     // write your code here
// // // // // // //     let count = startNumber + step
// // // // // // //     return function down() {
// // // // // // //         count -= step;
// // // // // // //         return count
// // // // // // //     }
// // // // // // // }

// // // // // // // const countingDown = countdown(10, 2);

// // // // // // // console.log(countingDown());
// // // // // // // console.log(countingDown());
// // // // // // // console.log(countingDown());

// // // // // // //Arrow Function
// // // // // // // =>

// // // // // // //const username = 'john';

// // // // // // // const capitalize = name => `${name.charAt(0).toUpperCase()}${name.slice(1)}`;

// // // // // // // function greetUser(name, callback) {
// // // // // // //     return callback(capitalize(name));
// // // // // // // }

// // // // // // // //const result = greetUser(username, name => `Hi there, ${name}!`);

// // // // // // // console.log(result);
// // // // // // // console.log((name => `Hello, nice to meet you ${name}`)("John"))

// // // // // // /* ----------------------------------- */

// // // // // // // Challenge: Rewrite your first function from a previous challnge to be an arrow function.
// // // // // // // Stretch goal: Rewrite counting down closure in arrow function form.


// // // // // // // Challenge start
// // // // // // const splitBill = (amount, numPeople) =>
// // // // // //     `Each person needs to pay ${amount / numPeople}`

// // // // // // console.log(splitBill(10, 2));
// // // // // // console.log(splitBill(10, 4));
// // // // // // console.log(splitBill(10, 5));


// // // // // // // Stretch goal start
// // // // // // const countdown = (startingNumber, step) => {
// // // // // //     let countFromNum = startingNumber + step;
// // // // // //     return () =>
// // // // // //         countFromNum -= step;
// // // // // // }

// // // // // // const countingDown = countdown(20, 2);

// // // // // // console.log(countingDown());
// // // // // // console.log(countingDown());
// // // // // // console.log(countingDown());

// // // // // // //------------------------//
// // // // // // // Challenge:
// // // // // // // 1. Create three variables - bar, cafe, restaurant - and set their values to a bar, a cafe and a restaurant in your city
// // // // // // // 2. Create an object - favouritePlaces - and populate it with your variables from task 1
// // // // // // // 3. If you're not already using the object property shorthand, refactor your code to do so
// // // // // // // 4. Create a method on the object - greeting() -  that logs out a message to the console
// // // // // // // 5. Invoke the greeting() method and also log out your favourite restaurant to the console

// // // // // // // Write your code below:
// // // // // // let bar = "Kahu"
// // // // // // let cafe = "Expresso"
// // // // // // let restaurant = "Sushi buffet"

// // // // // // const favouritePlaces = {
// // // // // //     bar,
// // // // // //     cafe,
// // // // // //     restaurant,
// // // // // //     //Create method on the object
// // // // // //     greeting: () => { console.log("Hello") }
// // // // // // }

// // // // // // console.log(favouritePlaces)
// // // // // // favouritePlaces.greeting()
// // // // // // console.log(favouritePlaces.restaurant)

// // // // // // // ------------------------ //
// // // // // // const user = {
// // // // // //     name: "Reed",
// // // // // //     username: "Reedbarger",
// // // // // //     email: "reed@gmail.com",
// // // // // //     details: {
// // // // // //         title: "Programmer"
// // // // // //     }
// // // // // // };

// // // // // // function displayUserBio({ name, username, email, details: { title } }) {
// // // // // //     console.log(`${name} is a ${title}`)
// // // // // // }
// // // // // // displayUserBio(user)

// // // // // //-------------------------------//
// // // // // // Challenge: The recommendations object contains a set of of nice places to visit in Brighton, UK,
// // // // // // organized by what you'd like to do (eat pancakes, drink coffee etc).

// // // // // // 1. Destructure the places to drink (coffee and beer) from recommendations
// // // // // // 2. Destructure the places to listen to music
// // // // // // 3. Write a function that takes the recommendations object as an argument and that
// // // // // //      a) Logs out the music venues in recommendations when invoked
// // // // // //      b) Uses object descructuring to get the "traditional" and "jazz" keys from the argument

// // // // // const recommendations = {
// // // // //     pancakes: 'Nowhere Man',
// // // // //     riceBowls: 'Pompoko',
// // // // //     beer: 'The Craft Beer Co.',
// // // // //     coffee: 'Coffee Roasters',
// // // // //     small_plates: 'Venetian Plates',
// // // // //     music: {
// // // // //         traditional: 'Fiddler\'s Elbow',
// // // // //         jazz: 'The Paris House'
// // // // //     }
// // // // // }

// // // // // const { coffee, beer } = recommendations
// // // // // const { music: { traditional, jazz } } = recommendations
// // // // // //Another way to destructing object of music:
// // // // // // const { traditional, jazz } = recommendations.music

// // // // // function musicVenues({ music: { traditional, jazz } }) {
// // // // //     console.log(`Music venues recommendation: ${traditional}, ${jazz}`)
// // // // // }

// // // // // musicVenues(recommendations)

// // // // // //Pracitce Maps

// // // // // const user1 = { name: "john" }
// // // // // const user2 = { name: "mary" }

// // // // // const secretKey1 = "asldjfalskdjf";
// // // // // const secretKey2 = "alksdjfakjsdf";

// // // // // const userAndkey = new Map([
// // // // //     [user1, secretKey1],
// // // // //     [user2, secretKey2]
// // // // // ])
// // // // // console.log(userAndkey)

// // // // // //convert to Map
// // // // // const user = {
// // // // //     name: "john",
// // // // //     verified: true
// // // // //   }

// // // // //   const newMap = new Map([
// // // // //     ["name", "John"],
// // // // //     ["verified", true]
// // // // //   ])
// // // // //   console.log(newMap)


// // // // //------------------------//
// // // // //Practice with Map Challenge//
// // // // // Challenge:
// // // // // 1. Take the object (contains a favourite place in Brighton, UK), and turn it into a Map
// // // // // 2. Add a boolean property 'visited', to indicate places that you've been to it
// // // // // 3. Add an integer property 'averageBill' with how much you spend there on average
// // // // // 4. Fetch one of the properties using the get() method

// // // // const favouritePlace = {
// // // //     music: "jazz",
// // // //     name: "Paris House"
// // // // };

// // // // //Turn object into Map
// // // // const favouritePlaceMap = new Map([
// // // //     ["music", "jazz"],
// // // //     ["name", "Paris House"],
// // // //     ["visited", true],
// // // //     ["averageBill", 1000]
// // // // ])

// // // // console.log(favouritePlaceMap.get("name"))
// // // // console.log(favouritePlaceMap)

// // // // favouritePlaceMap.forEach((value, key)=>console.log(key,value))

// // // //-------------ARRAY------------
// // // // Challenge:
// // // // 1. Create an array - favouriteSongs[] -  and add your 3 favourite songs using push()
// // // // 2. Log out the last song in the array, and make it so that your solution will log out the last one regardless of how many items there are in the array
// // // // 3. Invoke the pop method on your created array. What values do you have left in the array? 

// // // const favouriteSongs = []
// // // favouriteSongs.push("pop", "blue", "jazz")
// // // console.log(favouriteSongs[2])
// // // favouriteSongs.pop()
// // // console.log(favouriteSongs[favouriteSongs.length - 1])

// // //New Chanllege with .some & .every in array
// // // Challenge:
// // // Here's a list of 5 most popular songs on Spotify.
// // // 1) Check if any song has won a Grammy
// // // 2) Check if all the songs were streamed for at least 1.5 million times
// // // Note: the timesStreamed value is already in million
// // const songs = [
// //     { song: "Shape of You", timesStreamed: 2.384, wonGrammy: true },
// //     { song: "One Dance", timesStreamed: 1.791, wonGrammy: false },
// //     { song: "Rockstar", timesStreamed: 1.781, wonGrammy: false },
// //     { song: "Closer", timesStreamed: 1.688, wonGrammy: false },
// //     { song: "Thinking Out Loud", timesStreamed: 1.461, wonGrammy: true }
// // ]

// // //Task 1: Check if any song has won a Grammy
// // const gramyWon = songs.some(songs => songs.wonGrammy)

// // //Task 2: Check if all the song were streamed for at lease 1.5m times
// // const streamTime = songs.every(songs => songs.timesStreamed >=1.5)
// // console.log(streamTime)

// // ----------------------------- //
// // // Practice //
// // function removeItem(arr, index) {
// //     arr.splice(index, 1);
// //     return arr;
// // }

// // let numbers = [10, 20, 30, 40, 50];
// // console.log(removeItem(numbers, 2)); // Expected output: [10, 20, 40, 50]

// // Exercise 2: Finding an index using indexOf
// // Given an array of names, write a function to return the index of a given name.
// // function findNameIndex(names, nameFind) {
// //     return names.indexOf(nameFind)
// // }
// // let friends = ["Alice", "Bob", "Charlie", "David"];
// // console.log(findNameIndex(friends, "Charlie")); // Expected output: 2
// // console.log(findNameIndex(friends, "Eve")); // Expected output: -1 (not found)

// //Challenge
// // Write a function that removes all even numbers from an array.
// // function removeEvenNumber(num) {
// //     //Use fillter to make a new array that contain only non even number
// //     return num.filter (n => n %2 != 0)
// // }

// // const numbers = [10, 25, 32, 47, 51, 60, 77, 88, 99];
// // result = removeEvenNumber(numbers)
// // console.log(result)

// // const numbers = [2, 3, 4, 5];

// // // Use .reduce() to **multiply** all numbers together
// // const product = numbers.reduce((multiply, count) => multiply * count, 1)
// // console.log(product); // Expected Output: 120

// // Practice Task, try to use .reduce() to find the longest word in this array:
// const words = ["apple", "banana", "watermelon", "grape"];
// //Pesudo code
// //use recude loop through the array -> compare 2 word of array, return the most longest characters
// const longest = words.reduce(((acc, word) => {
//     return word.length > acc.length ? word: acc
// }))

// console.log(longest)

// Challenge: 
// Use reduce() to sum the weights of all the cars
// Stretch goal: 
// Use reduce to sum the weights of only the electric cars 

// const cars = [
//     { name: "Toyota", isElectric: false, weight: 1320 },
//     { name: "Ford", isElectric: false, weight: 1400 },
//     { name: "Volkswagen", isElectric: false, weight: 1370 },
//     { name: "Honda", isElectric: false, weight: 1375 },
//     { name: "Tesla", isElectric: true, weight: 1750 },
//     { name: "BMW", isElectric: true, weight: 1350 },
// ];

// const sum = cars.reduce((acc, item) => {
//     return item.isElectric == true ? acc + item.weight : acc
// }, 0)

// console.log(sum)

// const numbers = [1, 2, 3, 4, 5, 6];
// //use reduce to multiply the numbers and return in a new array
// const multiply = numbers.reduce((acc, num) =>{
//     acc.push(num*2)
//     return acc
// }, [])
// console.log(`Double numbers: ${multiply}`)
// console.log(`Numbers: ${numbers}`)

// const lunchMenu = ['salad', 'lohi keito', 'liha pullat']
// const newMenu = [...lunchMenu, "ice cream", "wine", "sandwiches"]
// console.log(lunchMenu)
// console.log(newMenu)

// const workoutRoutine = ["Jumping Jacks", "Push-ups", "Squats", "Lunges", "Burpees"];
// const jumpingIndex = workoutRoutine.findIndex(workout => workout  === "Jumping Jacks")
// const squatsIndex = workoutRoutine.findIndex (squat => squat === "Squats")

// const newWorkoutRoutine = [
//     ...workoutRoutine.slice(0,jumpingIndex+1), "Plank", ...workoutRoutine.slice(squatsIndex+1)

// ]


// console.log(newWorkoutRoutine); // Expected output: ["Jumping Jacks", "Plank", "Squat

//You have a list of students enrolled in a class, but "Alex" has dropped out. Use .findIndex() and .slice() to remove "Alex" from the list without modifying the original array.
// const students = ["John", "Sara", "Alex", "Michael", "Emily"];
// const studentIndex = students.findIndex(name => name === "Alex")

// const updatedStudents =[...students.slice(0, studentIndex), 
//     ...students.slice(studentIndex+1)
// ]


// console.log(updatedStudents); // Expected output: ["John", "Sara", "Michael", "Emily"]

// Challenge: 
// In our restaurant, the chef has some favourite dishes in two different categories.
// The chef loves all dishes that start with "S", while the rest are regular dishes
// Use array destructoring to create arrays of the chefs favourite dishes of meat and
// fish, and to create arrays of the regular meat and fish dishes

// const fishDishes = ['Salmon Rillettes', 'Grilled Tuna Provencal', 'Fish and Chips']
// const meatDishes = ['Lasagna', 'Spaghetti', 'Satay Chicken Skewers']

// function findDishesStartWithS(array){
//     return array.filter(value => value.startsWith("S"))
// }
// // Modify these four variables first
// let chefsFishDishes = findDishesStartWithS(fishDishes);
// let regularFishDishes = fishDishes.filter(fishDishes => !fishDishes.startsWith("S"))
// let chefsMeatDishes = findDishesStartWithS(meatDishes)
// let regularMeatDishes = meatDishes.filter(dish => !dish.startsWith("S"))

// // Finally, use the spread operator to create these two arrays as well
// let chefsDishes = [...chefsFishDishes, ...chefsMeatDishes]
// let regularDishes = [...regularFishDishes, ...regularMeatDishes]

// 1. create a new constructor function, Book, which logs books in the school library (id, title, author, themes[]), 
// 2. Add ids, titles and authors for your two favourite books. 
// 3. Use the prototype keyword to add a theme property to the  books. 
// 4. Add at least one theme to each of your books. 

// Beginning:

// function Book(id, title, author, themes = []) {
//     // your code here
//     this.id = id
//     this.title = title
//     this.author = author
//     this.themes = themes
// }
// //Add themes by prototype
// Book.prototype.addThemes = function (newThem) {
//     this.themes = [...this.themes, newThem]

// }

// //Add remove themes 
// Book.prototype.removeThemes = function (removeThemes) {
//     this.themes = this.themes.filter(t => t !== removeThemes);
// }

// const book1 = new Book(1, "Harry Potter", "JK")
// book1.addThemes("Fiction")
// book1.removeThemes("Fiction")
// console.log(book1)

// 1. A school's film club wants to store details of the films it has studied so far this year. Create a new class to do this. We want to store the following data about each film: id, title, director, releaseYear and genres.

// 2. Create two methods on the class: one for adding multiple genres to the films - addGenre(genre) - and one to get the title of the film - getFilmTitle().

// 3. Instantiate a new instance of the class using data from your your favourite film. Add at least 1 genre to your film using addGenre(), and get the title using getFilmTitle()

// Beginning:
// class Film {
//     //Your code here.
//     constructor(id, title, director, releaseYear, genres = []) {
//         this.id = id
//         this.title = title
//         this.director = director
//         this.releaseYear = releaseYear
//         this.genres = Array.isArray(genres) ? genres : [];
//     }

//     // Create method
//     addGenre(genre) {
//         this.genres = [... this.genres, genre];
//     }

//     //Create getFilmTitle
//     getFilmTitle() {
//         console.log(this.title)
//     }
// }

// // Rest of your code here. 
// const film1 = new Film(1, "Hello", "JK", 2003, ["fiction"])
// film1.getFilmTitle()
// film1.addGenre("novel")
// console.log(film1)

// class Product {
//     constructor(name, price, discountable) {
//       this.name = name;
//       this.price = price;
//       this.discountable = discountable;  
//     }  

//     isDiscountable() {
//       return this.discountable;  
//     }
//   }

//   class SaleProduct extends Product {
//     constructor(name, price, discountable, percentOff) {
//        super(name, price, discountable);
//        this.percentOff = percentOff; 
//     }  

//     getSalePrice() {
//        if (super.isDiscountable()) {
//          return this.price * ((100 - this.percentOff) / 100);
//        } else {
//           return `${this.name} is not eligible for a discount`;
//        }
//     }
//   }

//   const saleProduct1 = new SaleProduct("Coffee Maker", 99, false, 20);
//   console.log(saleProduct1.getSalePrice());

//Create a Vehicle class with properties brand, year, and isElectric.
//Then, create a subclass Car that extends Vehicle and adds model and mileage.
// class Vehicle {
//     constructor(brand, year, isElectric) {
//         this.brand = brand
//         this.year = year
//         this.isElectric = isElectric
//     }

//     //Add method getInfo() to check the car energy (Gas/electric)
//     getInfo() {
//         const result = (this.isElectric)=== true ? `${this.brand} (${this.year}) - Electric`: `${this.brand} (${this.year}) - Gasoline`
//         return result
//     }

// }
// class Car extends Vehicle{
//     constructor(brand, year, isElectric, model, mileage){
//         super(brand, year, isElectric)
//         this.model = model
//         this.mileage = mileage
//     }
//     //Create new nethod getMileage()
//     getMileage(){
//         return `this ${this.model} has ${this.mileage} miles.`
//     }
// }

// const myCar1 = new Car ("Toyota", 2019, false, "Corolla", 30000)
// console.log(myCar1.getInfo())
// console.log(myCar1.getMileage())

// class Product {
//     constructor(name, price, discountable) {
//       this.name = name;
//       this.price = price;
//       this.discountable = discountable;
//     }

//     get clearancePrice() {
//       return this.price * 0.5;
//     }
//   }

// const product1 = new Product("Coffee Maker", 99.95, false);
// //   product1.price = {};
// console.log(product1.clearancePrice); // Expected output: 49.975

// Challenge: 
// 1. Update text in the mini-browser to match the title of this cast
// 2. Create an h2 with class 'tagline' and text "I can create HTML elements!"
// Add it right under the modified text.

// const title = document.querySelector('h1');
// title.innerHTML = `Creating and midifying HTML elements`
// const tagLine = document.createElement("h2")
// tagLine.className = "tagline"
// tagLine.innerHTML = `I can create HTML elements!`
// title.append(tagLine)

// Challenge: 
// 1. Select h1 and add a click event listener. 
// Log the text from the element to the console.

// 2. Add the same functionality to all the elements displayed
// in Scrimba web browser. Finally, try to trigger the event when you
// hover the mouse over the elements, instead of when clicking on them

// const titleEl = document.querySelector('h1')
// titleEl.addEventListener("mouseover", (event) => {
//   console.log(event.target.textContent)
// })
// document.body.addEventListener('mouseover', (event) => {
//   console.log(event.target.textContent)
// })
// navigator.geolocation.getCurrentPosition(position => {
//   console.log(position);
// });
// console.log('done');

// GET /posts/1 - single blog post: http://jsonplaceholder.typicode.com/posts
//POST / posts -> Post a new post
// const blogPost = {
//   title: "Coolest post",
//   body: "Hello this is my first porst using fetch()",
//   userId: 1
// }
// fetch("https://jsonplaceholder.typicode.com/posts", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json"
//   },
//   body: JSON.stringify(blogPost)
// })
//   .then(response => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//   }) // Turn the data to Json format to better read
//   .then(data => console.log(data))
//   .catch(erorr => console.error(erorr))

// Challenge: 
// The JSON Placeholder API has /users endpoint, 
// just like the one we saw in the tutorial for /posts
// Get the user with ID 3 and log their name and company they work for.
// Handle errors if something does not quite work. 

// Here's the endpoint: https://jsonplaceholder.typicode.com/users/3

// fetch("https://jsonplaceholder.typicode.com/users/3")
//   .then(response => {
//     if (!response.ok) {
//       throw new Error(response.status)
//     }
//     return response.json()
//   })
//   .then(data => {
//     console.log(data.name);
//     console.log(data.company.name)
//   })
//   .catch(error => console.error(error)) 

// async function getPost(){
//   const response = await fetch("https://jsonplaceholder.typicode.com/users/3") //wait for the URL to response
//   const data = await response.json() //Wait to parse to JSON
//   console.log(data)
// }
// getPost()

// async function getGithubUser() {
//   try {
//     const response = await fetch('https://api.github.com/users/fsadfsadf')
//     if (!response.ok) {
//       throw new Error(response.status)
//     }
//   } catch (error) {
//     console.log("Could not fetch user, try reconnecting your internet.")
//     console.error(error)
//   }

// }
// getGithubUser()

// Challenge: 
// Rewrite the GET API call from the previous challenge using async-await


// // Challenge: 
// fetch('https://jsonplaceholder.typicode.com/users/3')
//   .then(response => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }

//     return response.json()
//   })
//   .then(person => console.log(`${person.name} works for ${person.company.name}`))
//   .catch(err => console.error(err))

async function getUser() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/3")
    if (!response.ok) {
      throw new Error(response.status)
    }
    const person = await response.json()
    console.log(`${person.name} works for ${person.company.name}`)
  }
  catch (err) {
    console.error(err);
  }
}

getUser()