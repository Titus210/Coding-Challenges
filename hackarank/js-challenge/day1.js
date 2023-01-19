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

// Objective

// In this challenge, we practice declaring variables using the let and const keywords. Check out the attached tutorial for more details.

// Task

// Declare a constant variable, , and assign it the value Math.PI. You will not pass this challenge unless the variable is declared as a constant and named PI (uppercase).
// Read a number, , denoting the radius of a circle from stdin.
// Use  and  to calculate the  and  of a circle having radius .
// Print  as the first line of output and print  as the second line of output.
// Input Format

// A single integer, , denoting the radius of a circle.

// Constraints

//  is a floating-point number scaled to at most  decimal places.
// Output Format

// Print the following two lines:

// On the first line, print the  of the circle having radius .
// On the second line, print the  of the circle having radius .
// Sample Input 0

// 2.6
// Sample Output 0

// 21.237166338267002
// 16.336281798666924
// Explanation 0

// Given the radius , we calculate the following:

// We then print  as our first line of output and  as our second line of output.

function main() {
  // Write your code here. Read input using 'readLine()' and print output using 'console.log()'.
  const PI = Math.PI;

  // Print the area of the circle:
  console.log(PI * r * r);

  // Print the perimeter of the circle:
  console.log(2 * PI * r);

  try {
    // Attempt to redefine the value of constant variable PI
    PI = 0;
    // Attempt to print the value of PI
    console.log(PI);
  } catch (error) {
    console.error("You correctly declared 'PI' as a constant.");
  }
}

// Objective

// In this challenge, we learn about if-else statements. Check out the attached tutorial for more details.

// Task

// Complete the getGrade(score) function in the editor. It has one parameter: an integer, , denoting the number of points Julia earned on an exam. It must return the letter corresponding to her  according to the following rules:

// If , then .
// If , then .
// If , then .
// If , then .
// If , then .
// If , then .
// Input Format

// Stub code in the editor reads a single integer denoting  from stdin and passes it to the function.

// Constraints

// Output Format

// The function must return the value of  (i.e., the letter grade) that Julia earned on the exam.

// Sample Input 0

// 11
// Sample Output 0

// D
// Explanation 0

// Because , it satisfies the condition  (which corresponds to D). Thus, we return D as our answer.


function getGrade(score) {
  let grade;
  // Write your code here
  switch (s[0]) {
    case "a" || "e" || "i" || "o" || "u":
      letter = "A";
      break;
    case "b" || "c" || "d" || "f" || "g":
      letter = "B";
      break;
    case "h" || "j" || "k" || "l" || "m":
      letter = "C";
      break;
    case "n" ||
      "p" ||
      "q" ||
      "r" ||
      "s" ||
      "t" ||
      "v" ||
      "w" ||
      "x" ||
      "y" ||
      "z":
      letter = "D";
      break;
  }

  return grade;
}

function main() {
  const score = +readLine();

  console.log(getGrade(score));
}