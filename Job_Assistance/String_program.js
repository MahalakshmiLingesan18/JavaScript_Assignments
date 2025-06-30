/*1. print login and the opentaps string from the URL?
http://leaftaps.com/opentaps/control/login */

let url = "http://leaftaps.com/opentaps/control/login";

console.log(url.substring(20, 28));
console.log(url.slice(-5));

/*2.check if a string is a palindrome?
input: madam
output: madam */

let string = "madam";
let reversedString = "";
for (let i=string.length-1; i>=0; i--) {
    reversedString=reversedString+string[i];
}
console.log("The reversed String is "+reversedString);

if (string===reversedString) {
    console.log("The string is a Palindrome");
} else {
    console.log("The string is not a Palindrome");
}

/* 3.find the most frequent character in a string?
input : javascript */

let input = "javascript";
let maxRepChar = ''; //Empty string to store the repeated character
let maxCount = 1 ; //Every letter in a String will appear once 

for (let i=0; i<=input.length; i++) {
    let currChar = input[i];
    let currCount = 0; //To store the number of occurences of a character 
    for (let j=0; j<=input.length; j++) {
        if (input[j]===currChar) {
            currCount++;//Incrementing the count if the occurence of a character is more than once
        }
    }
    if (currCount>maxCount) {
        maxCount = currCount; //changing 'maxCount' value to ensure any other characters occurences is more than 'maxCount' value
        maxRepChar = currChar;
        console.log("The most frequent character in "+input+" is "+maxRepChar);
    }
}

/* 4.count the number of vowels in a string
input: function */

let str1 = "Function";
let str2 = str1.toLowerCase();
console.log(str2);

let vowelsCount = 0;

for (let i=0; i<=str2.length; i++) {
    if ((str2[i]==="a") || (str2[i]==="e") || (str2[i]==="i") || (str2[i]==="o") || (str2[i]==="u")) {
        console.log(str2[i]);
        vowelsCount++;
    }
}

console.log(`The number of vowels in ${str2} is ${vowelsCount}`);


