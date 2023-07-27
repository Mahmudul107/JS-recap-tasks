// Task 1: Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method. 

function reverseString(string) {
    return string.split('').reverse().join('');
}
const string = "Let's reverse the string";
const reversedString = reverseString(string);
console.log(reversedString);



// Task 2: Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array. 

function positiveNumbers(arr){
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0){
            sum += arr[i];
        }
    }
    return sum;
}

const arrayOfNumbers = [2, -5, 10, -3, 7];
const positiveNumberOfNumbers = positiveNumbers(arrayOfNumbers);
console.log(positiveNumberOfNumbers);


