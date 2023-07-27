// Task 1: Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method.

function reverseString(string) {
  return string.split("").reverse().join("");
}
const string = "Let's reverse the string";
const reversedString = reverseString(string);
console.log(reversedString);




// Task 2: Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array.

function positiveNumbers(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum += arr[i];
    }
  }
  return sum;
}

const arrayOfNumbers = [2, -5, 10, -3, 7];
const positiveNumberOfNumbers = positiveNumbers(arrayOfNumbers);
console.log(positiveNumberOfNumbers);




// Task 3: Write a JavaScript program to find the most frequent element in an array and return it.

function findMostFrequentElement(inputArray) {
  if (inputArray.length === 0) {
    return null; // Return null for an empty array
  }

  const frequencyCount = {};
  let mostFrequentElement;
  let maxFrequency = 0;

  for (const num of inputArray) {
    frequencyCount[num] = (frequencyCount[num] || 0) + 1;

    if (frequencyCount[num] > maxFrequency) {
      maxFrequency = frequencyCount[num];
      mostFrequentElement = num;
    }
  }

  return mostFrequentElement;
}

const inputArray = [3, 5, 7, 5, 3, 3, 8, 4, 5, 6, 6];
const mostFrequent = findMostFrequentElement(inputArray);
console.log(mostFrequent);




// Task 4: Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers.

function findTwoNumbersSum(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const sum = arr[left] + arr[right];

    if (sum === target) {
      return [left, right];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }

  return null;
}

const sortedArray = [1, 3, 5, 7, 9, 11, 13];
const targetValue = 16;
// const indices = findTwoNumbersSum(sortedArray, targetValue);
console.log(findTwoNumbersSum(sortedArray, targetValue));



// Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.

function calculator(num1, operator, num2) {
  // Check if the operator is addition (+)
  if (operator === "+") {
    return num1 + num2;
  }
  // Check if the operator is subtraction (-)
  else if (operator === "-") {
    return num1 - num2;
  }
  // Check if the operator is multiplication (*)
  else if (operator === "*") {
    return num1 * num2;
  }
  // Check if the operator is division (/)
  else if (operator === "/") {
    // Check if num2 is zero to prevent division by zero
    if (num2 === 0) {
      return "Cannot divide by zero";
    }
    return num1 / num2;
  }
  // If the operator is not recognized, return an error message
  else {
    return "Invalid operator";
  }
}

console.log(calculator(5, "+", 3)); // Output: 8
console.log(calculator(10, "-", 4)); // Output: 6
console.log(calculator(3, "*", 6)); // Output: 18
console.log(calculator(8, "/", 2)); // Output: 4
console.log(calculator(5, "%", 3));




// Task 6: Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.

function generateRandomPassword(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*().,_-+=<>?';
    let password = '';
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      password += characters.charAt(randomIndex);
    }
  
    return password;
  }
  
  const passwordLength = 12; // You can adjust the length as needed
  const randomPassword = generateRandomPassword(passwordLength);
  console.log(randomPassword);
  



// Task 8: Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.

const array = [32, 22, 53, 92, 20, 34, 23, 11, 17];

let smallestNum = array[0];
let secondSmallestNum = 0;
for (let i = 1; i < array.length; i++) {
  if (array[i] < smallestNum) {
    secondSmallestNum = smallestNum;
    smallestNum = array[i];
  } else if (array[i] !== smallestNum && array[i] < secondSmallestNum) {
    secondSmallestNum = array[i];
  }
}
// console.log(smallestNum);
console.log(secondSmallestNum);



