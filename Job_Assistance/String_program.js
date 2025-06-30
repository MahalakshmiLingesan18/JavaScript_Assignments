/*1. print login and the opentaps string from the URL?
http://leaftaps.com/opentaps/control/login */

function href(url) {
    console.log(url.substring(20, 28));
    console.log(url.slice(-5));
}

href("http://leaftaps.com/opentaps/control/login");

/*2.check if a string is a palindrome?
input: madam
output: madam */

function isPalindrome(string) {
    let reversedString = "";
    for (let i=string.length-1; i>=0; i--) {
        reversedString=reversedString+string[i];
    }
    console.log("The reversed String is "+reversedString);

    if (string===reversedString) {
        console.log(`The given string ${string} is palindrome`);
    } else {
        console.log(`The given string ${string} is not a palindrome`);
    }
}

isPalindrome("hello");
isPalindrome("madam");

/* 3.find the most frequent character in a string?
input : javascript */

let input = (string) => {
    let maxRepChar = ''; //Empty string to store the repeated character
    let maxCount = 1 ; //Every letter in a String will appear once 
    for (let i=0; i<=string.length; i++) {
        let currChar = string[i];
        let currCount = 0; //To store the number of occurences of a character 
        for (let j=0; j<=string.length; j++) {
            if (string[j]===currChar) {
                currCount++;//Incrementing the count if the occurence of a character is more than once
            }
        }
        if (currCount>maxCount) {
            maxCount = currCount; //changing 'maxCount' value to ensure any other characters occurences is more than 'maxCount' value
            maxRepChar = currChar;
            return("The most frequent character in "+string+" is " +maxRepChar);
        }
    }
     
}

console.log(input("javascript"));
console.log(input("Assessment"));

/* 4.count the number of vowels in a string
input: function */

let str1 = (input) => {
    let str2 = input.toLowerCase();
    console.log(str2);

    let vowelsCount = 0;

    for (let i=0; i<=str2.length; i++) {
        if ((str2[i]==="a") || (str2[i]==="e") || (str2[i]==="i") || (str2[i]==="o") || (str2[i]==="u")) {
            console.log(str2[i]);
            vowelsCount++;
        }
    }
    return (`The number of vowels in ${str2} is ${vowelsCount}`);
}

console.log(str1("Function"));
console.log(str1("Obsession"));