// Q1 -- Reverse a String
// Link:- https://www.geeksforgeeks.org/problems/reverse-a-string/1


// Solution 1 --Reverse a String With Built-In Functions
// TC:- O(n)
function reverseString(str) {
    // split--> convert string into array
    // reverse --> reverse an array
    // join--> join the array into string
    return str.split("").reverse().join("");
}
let revString = reverseString("PIYUsh")
console.log(revString);


// Solution 2:- Reverse a String With a Decrementing For Loop
// TC:- O(n)
function reverseString(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i]
    }
    return newString
}

let rString = reverseString("PIYUsh")
console.log(rString);


// Solution 3:- Reverse a String With Recursion
function reverseString(str) {
    if (str === "")
        return "";
    else
        return reverseString(str.substr(1)) + str.charAt(0);
}
reverseString("PIYUsh");