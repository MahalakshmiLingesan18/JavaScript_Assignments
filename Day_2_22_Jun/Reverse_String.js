/*Assignment:
Reverse your name*/

let personName = "Mahalakshmi Lingesan"

//using for loop (Reverse the letters)
let reversedString = ""
for (i=personName.length-1; i>=0; i--) {
    reversedString=reversedString+personName[i] 
}
console.log("Using for loop: "+reversedString)

/*reversedString=reversedString+personName[i] ---->concats the value of reversedString
reversedString = ""
length-1 = 20-1 = 19
i=19; i>=0 --> true;
reversedString = "n"
i-- --> 18
i=18; i>=0 --> true;
reversedString = "na"
*/

/*reversedString=personName[i] ---->replace the value of reversedString
reversedString = ""
length-1 = 20-1 = 19
i=19; i>=0 --> true;
reversedString = "n"
i-- --> 18
i=18; i>=0 --> true;
reversedString = "a"
i-- --> 17
i=17; i>=0 --> true;
reversedString = "s"
*/

//using reverse method (Reverse the letters)
let reverse = personName.split('').reverse().join('')
//split function - M,a,h,a,l,a,k,s,h,m,i, ,L,i,n,g,e,s,a,n
//reverse function - n,a,s,e,g,n,i,L, ,i,m,h,s,k,a,l,a,h,a,M
//Join function - nasegniL imhskalahaM
console.log("Using reverse method: "+reverse)

//using reverse method (Reverse the first and last name)
let reverseName = personName.split(' ').reverse().join(' ')
//split function - Mahalakshmi,Lingesan
//reverse function - Lingesan,Mahalakshmi
//Join function - Lingesan Mahalakshmi
console.log("Using reverse method: "+reverseName)