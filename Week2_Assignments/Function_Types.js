/* Assignment Details:
Complete the following tasks to practice function declarations, arrow functions, anonymous functions,
and callback functions in JavaScript.
Assignment Requirements:
Task 1: Function Declaration
Create a function named `userProfile` that takes a `name` as a parameter and logs “Hello, <name>!" 
to the console.
Task 2: Arrow Function
Create an arrow function named `double` that takes a number as a parameter and returns double 
its value.
Task 3: Anonymous Function
Use an anonymous function with `setTimeout` to log `"This message is delayed by 2 seconds"` 
after 2 seconds.
Task 4: Callback Function
Create a function named `getUserData` that takes a callback function as a parameter. Inside 
`getUserData`, simulate fetching data with `setTimeout` and then call the callback function 
with a user object after 3 seconds.
Call the `getUserData` function and log the user's name and age using the callback function. */

//Task 1: Function Declaration
function userProfile(name) {
    console.log(`Hello, ${name}!`);
}

userProfile("Maha");

//Task 2: Arrow Function
let double = (a) => (a*a);
console.log(`The doubled values is ${double(3)}`);

//Task 3: Anonymous Function
setTimeout(function() {
    console.log("This message is delayed by 2 seconds");
}, 2000);

//Task 4: Callback Function
function getUserData(callback) {
    setTimeout(() => console.log("fetching data"), 3000);
    callback;
}

function userDetails(name, age) {
    console.log(`The name of the user is ${name} and her age is ${age}`)
}

getUserData(userDetails("Maha", 28));
