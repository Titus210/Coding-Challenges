// Objective

// Today, we're discussing JavaScript functions. Check out the attached tutorial for more details.

// Task

// Implement a function named factorial that has one parameter: an integer, . It must return the value of  (i.e.,  factorial).

// Input Format

// Locked stub code in the editor reads a single integer, , from stdin and passes it to a function named factorial.

// Constraints

// Output Format

// The function must return the value of .

// Sample Input 0

// 4
// Sample Output 0

// 24

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
/*
 * Create the function factorial here
 */

function factorial(n) {
  // Use loops that multiply the current number with the previous number, have a check for the first number to prevent a runtime error

  // Or use Recursion to get the factorial, i'll use recursion
  if (n === 0) return 1;
  return n * factorial(n - 1);
}

function main() {
  const n = +readLine();

  console.log(factorial(n));
}