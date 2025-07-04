/*Example 1:
Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.*/

console.log("Example 1:");
let string1 = s1 => {
    let splittedString1 = s1.split(" ");
    console.log(splittedString1);
    let newString1 = "";
    for (let i=splittedString1.length-1; i>=0; i--) {
        if(i===1) {
            newString1=newString1+splittedString1[i];
        }
    }
    console.log(`The last word is ${newString1} with length ${newString1.length}`);
}
string1("Hello World");

/*using subString
let subString1 = string1.substring(6, 11);
console.log(`The last word is ${subString1} with length ${subString1.length}`);*/

/* Example 2:
Input: s = " fly me to the moon "
Output: 4
Explanation: The last word is "moon" with length 4. */

console.log("Example 2:");
let string2 = s2 => {
    console.log("String before Trimming:"+s2);
    let trimmedString = s2.trim();
    console.log("String after Trimming:"+trimmedString);
    let splittedString2 = trimmedString.split(" ");
    console.log(splittedString2);
    let newString2 = ""; 
    for (let i=0; i<=splittedString2.length-1; i++) {
        if (i===4) {
            newString2=newString2+splittedString2[i];
        }
    }
    console.log(`The last word is ${newString2} with length ${newString2.length}`);
}

string2(" fly me to the moon ");

/*using subString
let subString2 = trimmedString.substring(14, 18);
console.log(`The last word is ${subString2} with length ${subString2.length}`);*/

/* Example 3:
Write a function to check if two strings are anagrams.
Input: isAnagram('listen', 'silent')
Output: true
Input: isAnagram('hello', 'world')
Output: false
Explanation: An anagram is when you mix up the letters of a word to make a new one, using all the letters.*/

console.log("Example 3:");
function isAnagram(string3, string4) {
    let toUpperCase1 = string3.toUpperCase();
    console.log(toUpperCase1);
    let toUpperCase2 = string4.toUpperCase();
    console.log(toUpperCase2);

    let length1 = toUpperCase1.length;
    console.log("The length of the string1 is "+length1);
    let length2 = toUpperCase2.length;
    console.log("The length of the string2 is "+length2);

    if (length1===length2) {
        let sortedString1 = toUpperCase1.split("").sort();
        console.log("The sorted string is "+sortedString1);
        let sortedString2 = toUpperCase2.split("").sort();
        console.log("The sorted string is "+sortedString2);
        for (let i=0; i<=length1; i++) {
            if (sortedString1[i]===sortedString2[i]) {
            return true;
        } else {
            return false;
        } 
    } 
} else {
        console.log("The length of the words are different. Hence, it is not possible to be anagram")
    }
}

console.log(isAnagram("listen", "silent"));
console.log(isAnagram("hello", "world"));