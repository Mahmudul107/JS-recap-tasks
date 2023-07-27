// Task 1:Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method. 

function reverseString(string) {
    return string.split('').reverse().join('');
}
const string = "Let's reverse the string";
const reversedString = reverseString(string);
console.log(reversedString);
