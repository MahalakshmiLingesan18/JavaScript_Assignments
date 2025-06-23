/*Assignment Details:
Write a JavaScript function that evaluates a student's score and returns their grade using a switch statement
to assess score ranges.
Assignment Requirements:
1. Create a function that takes a student's score as a parameter.
2. Declare and initialize the variable.
3. Use `switch` statement inside the function.
4. Return the corresponding grade.
5. Call the function and print the result.
Hints to Solve:
Use a `switch` statement with `true` for score range checks to assign grades.*/

studentScore(52)

function studentScore(marks) {
    switch (marks) {
        case 52:
            console.log("The student grade is A")
            break;
        case 90:
            console.log("The student grade is A+")
            break;
        default:
            console.log("The student has no grade")
    }
}