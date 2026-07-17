// Reverse a string in JavaScript using different methods. Here are a few examples:
// 1. Using built-in methods:```javascript
function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log(reverseString("Hello, World!")); // Output: !dlroW ,olleH


// 2. Using a for loop:```javascript
function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

console.log(reverseString("Hello, World!")); // Output: !dlroW ,olleH

// 3. Using recursion:```javascript
function reverseString(str) {
    if (str === "") {
        return str;
    } else {
        return reverseString(str.substr(1)) + str.charAt(0);
    }
}

console.log(reverseString("Hello, World!")); // Output: !dlroW ,olleH


// Example usage:
const name = "Ragavendiran"

const ReversedStr = (params) => {
    return params.split("").reverse().join("")
}
console.log(ReversedStr(name))

// *********************
const name = "Ragavendiran"
const ReversedStr = (params) => {

    let ReversedName = ""    
    for(let i=params.length-1; i >= 0; i--) {
        ReversedName = ReversedName + params[i]
    }
    
    return ReversedName
}

console.log(ReversedStr(name))



