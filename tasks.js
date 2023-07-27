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
  
  // Test the program
  const inputArray = [3, 5, 2, 5, 3, 3, 1, 4, 5];
  const mostFrequent = findMostFrequentElement(inputArray);
  console.log(mostFrequent);




// Task 4: Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers.




// Task 8: Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.


const array = [32, 22, 53, 92, 20, 34, 23, 11, 17];

let smallestNum = array[0];
let secondSmallestNum = 0;
for (let i = 1; i < array.length; i++) {
  if (array[i] < smallestNum) {
    secondSmallestNum = smallestNum;
    smallestNum = array[i];
  }
  else if (array[i] !== smallestNum && array[i] < secondSmallestNum) {
    secondSmallestNum = array[i];
  }
}
// console.log(smallestNum);
console.log(secondSmallestNum);