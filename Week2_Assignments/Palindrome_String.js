/* Assignment Details:
Create a JavaScript function that accepts a string, reverses it, and checks if the reversed 
string is a palindrome, then test your function with various strings and print the results.
Assignment Requirements:
Write a function to reverse the string.
1. Convert the input into characters
2. Loop them in reverse direction
3. Concatenate the string
4. Print the new string
Write a function to check the given string is a palindrome
[If the given string and reverse string are the same, it is a palindrome]
1. Check if the reverse string and original string are the same
2. Return true if same, else the false.
Hints to Solve:
1. Split string into characters using `split("")`.
2. Iterate backward through characters to build reversed string.
3. Use strict equality to compare original and reversed strings for palindrome check. */

//To reverse the String
let inputString = "madam";

let inputCharacters = inputString.split(''); //To split the String into characters
console.log("The characters of the String are: "+inputCharacters);

let reversedString = ""; //Initializing empty string to store the reversed string

for(let i=inputCharacters.length-1; i>=0; i--) {
    reversedString=reversedString+inputCharacters[i];
}

console.log(`The reversed String is ${reversedString}`);

//To check if the String is palindrome
if(reversedString===inputString) {
    let isPalindrome = true;
    console.log(`${isPalindrome}, ${inputString} is a Palindrome String`);
} else {
    let isPalindrome = false;
    console.log(`${isPalindrome}, ${inputString} is not a Palindrome String`);
}
