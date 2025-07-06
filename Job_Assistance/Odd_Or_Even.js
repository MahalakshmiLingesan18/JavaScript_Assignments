/* Write a function in JavaScript to check if a number is even or odd using function 
expression and arrow function. */

//using function expression or anonymous function
const isOddOrEven = function(num) {
    if (num%2!=0) {
        return (`${num} is a odd number`);
    } else {
        return (`${num} is an even number`);
    }
}

console.log(isOddOrEven(30));
console.log(isOddOrEven(27));

//using arrow function
const isEvenOrOdd = number => {
    if (number%2==0) {
        return (`${number} is an even number`);
    } else {
        return (`${number} is a odd number`);
    }
}

console.log(isEvenOrOdd(18));
console.log(isEvenOrOdd(45));

        