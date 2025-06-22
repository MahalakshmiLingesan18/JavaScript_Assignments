/*Assignment:
Input -> 30
print Odd number 0 to 30
use for loop
use if condition
print Value*/

let input = 30

for (let i=0; i<=input; i++) {
    if (i%2!==0) {
        console.log("Odd number: "+i)
    }
}

console.log(`The input is ${input}`)