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

/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
function reverseString(s) {
      try {
        let r = s.split("").reverse().join("");
        console.log(r);
      } catch (e) {
        console.log("s.split is not a function");
        console.log(s);
      }
}

// Objective

// In this challenge, we practice using throw and catch statements to work with custom error messages.

// Task

// Complete the isPositive function below. It has one integer parameter, . If the value of  is positive, it must return the string YES. Otherwise, it must throw an Error according to the following rules:

// If  is , throw an Error with  Zero Error.
// If  is negative, throw an Error with  Negative Error.
// Input Format

// Locked stub code in the editor reads the following input from stdin and passes each value of  to the function as an argument:
// The first line is an integer, , denoting the number of times the function will be called with some .
// Each line  of the  subsequent lines contains an integer denoting some .

// Constraints

// Output Format

// If the value of  is positive, the function must return the string YES. Otherwise, it must throw an Error according to the following rules:

// If  is , throw an Error with  Zero Error.
// If  is negative, throw an Error with  Negative Error.
// Sample Input 0

// 3
// 1
// 2
// 3
// Sample Output 0

// YES
// YES
// YES
// Explanation 0

// Each of the given values is positive, so we return YES each time. The value returned during each function call is printed on a new line by locked stub code in the editor.

// Sample Input 1

// 3
// 2
// 0
// 6
// Sample Output 1

// YES
// Zero Error
// YES
// Explanation 1

// Locked stub code in the editor makes the following three calls to the isPositive function:

// isPositive(2): This returns YES because  is positive.
// isPositive(0): Because , we throw an Error with  Zero Error. This is caught by the locked stub code and the value of its  is printed.
// isPositive(6): This returns YES because  is positive.
// Sample Input 2

// 2
// -1
// 20
// Sample Output 2

// Negative Error
// YES
// Explanation 2

// Locked stub code in the editor makes the following two calls to the isPositive function:

// isPositive(-1): Because , we throw an Error with  Negative Error. This is caught by the locked stub code and the value of its  is printed.
// isPositive(20): This returns YES because  is positive.

/*
 * Complete the isPositive function.
 * If 'a' is positive, return "YES".
 * If 'a' is 0, throw an Error with the message "Zero Error"
 * If 'a' is negative, throw an Error with the message "Negative Error"
 */
function isPositive(a) {
    
}
