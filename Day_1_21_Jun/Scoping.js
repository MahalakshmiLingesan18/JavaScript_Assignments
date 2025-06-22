/*Assignment Requirements:
1. Declare a const name as browserVersion (global)
2. Assign value as Chrome
3. Create a function by name getBrowserVersion
4. Create if condition inside function to check if browser is chrome, then
5. Declare a local variable (browserVersion) and print that variable inside function (outside block)
6. Call that function from the javascript
Hints to Solve:
- Use 'var' first as block variable and then convert that as 'let'
- Confirm how it works*/

const browserVersion = 'Chrome' //Global variable Initialization
getBrowserVersion() //Hoisting

function getBrowserVersion() {
    if (browserVersion=='Chrome') {
        var browserVersion = 'Chrome version 01'
        //let browserVersion = 'Chrome version 02'
    } 
    console.log("Local browser is " +browserVersion)
}
console.log("Default browser is " +browserVersion)



