// Objective

// In this challenge, we learn about Arrays. Check out the attached tutorial for more details.

// Function Description

// Complete the getSecondLargest function in the editor below.

// getSecondLargest has the following parameters:

// int nums[n]: an array of integers
// Returns

// int: the second largest number in
// Input Format

// The first line contains an integer, , the size of the  array.
// The second line contains  space-separated numbers that describe the elements in .

// Constraints

// , where  is the number at index .
// The numbers in  may not be distinct.
// Sample Input 0

// 5
// 2 3 6 6 5
// Sample Output 0

// 5
// Explanation 0

// Given the array , we see that the largest value in the array is  and the second largest value is . Thus, we return  as our answer.

"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .trim()
    .split("\n")
    .map((string) => {
      return string.trim();
    });

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/**
 *   Return the second largest number in the array.
 *   @param {Number[]} nums - An array of numbers.
 *   @return {Number} The second largest number in the array.
 **/
function getSecondLargest(nums) {
  // Complete the function
    nums.sort((a, b) => b - a);
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < nums[0]) {
            return nums[i];
        }
    }
}

// Objective

// In this challenge, we learn about strings and exceptions. Check out the attached tutorials for more details.

// Task

// Complete the reverseString function; it has one parameter, . You must perform the following actions:

// Try to reverse string  using the split, reverse, and join methods.
// If an exception is thrown, catch it and print the contents of the exception's  on a new line.
// Print  on a new line. If no exception was thrown, then this should be the reversed string; if an exception was thrown, this should be the original string.
// Input Format

// Locked stub code in the editor reads variable  from stdin and passes it to the function.

// Output Format

// You must write two print statements using console.log():

// Print the contents of a caught exception's  on a new line. If no exception was thrown, this line should not be printed.
// Print  on a new line. If no exception was thrown, then this should be the reversed string; if an exception was thrown, this should be the original string.
// Sample Input 0

// "1234"
// Sample Output 0

// 4321
// Explanation 0

//  is a string type, so it can be reversed without throwing an exception. Thus, we print the reversed value, 4321, as our answer.

// Sample Input 1

// Number(1234)
// Sample Output 1

// s.split is not a function
// 1234
// Explanation 1

//  is not a string type, so it can't be reversed using string functions. When we try to reverse it anyway, it throws an exception. We then catch the exception and print its , which is s.split is not a function. Next, we finally print  which, because it wasn't able to be reversed, is Number(1234).

