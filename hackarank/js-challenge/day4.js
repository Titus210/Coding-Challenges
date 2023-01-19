// Objective [Link](https://www.hackerrank.com/challenges/js10-objects/problem?isFullScreen=true)

// In this challenge, we practice creating objects. Check out the attached tutorial for more details.

// Task

// Complete the function in the editor. It has two parameters:  and . It must return an object modeling a rectangle that has the following properties:

// : This value is equal to .
// : This value is equal to .
// : This value is equal to
// : This value is equal to
// Note: The names of the object's properties must be spelled correctly to pass this challenge.

// Input Format

// The first line contains an integer denoting .
// The second line contains an integer denoting .

// Constraints

// Output Format

// Return a object that has the properties specified above. Locked code in the editor prints the returned object's , , , and  to STDOUT.

// Sample Input 0

// 4
// 5
// Sample Output 0

// 4
// 5
// 18
// 20
// Explanation 0

// Given a  of  and a  of , the Rectangle object's  is  and its  is .

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
 * Complete the Rectangle function
 */
function Rectangle(a, b) { 
    return { length: a, width: b, perimeter: 2 * (a + b), area: a * b };
}

function main() {
  const a = +readLine();
  const b = +readLine();

  const rec = new Rectangle(a, b);

  console.log(rec.length);
  console.log(rec.width);
  console.log(rec.perimeter);
  console.log(rec.area);
}

// Objective

// In this challenge, we learn about iterating over objects. Check the attached tutorial for more details.

// Task

// Complete the function in the editor. It has one parameter: an array, , of objects. Each object in the array has two integer properties denoted by  and . The function must return a count of all such objects  in array  that satisfy .

// Input Format

// The first line contains an integer denoting .
// Each of the  subsequent lines contains two space-separated integers describing the values of  and .

// Constraints

// Output Format

// Return a count of the total number of objects  such that . Locked stub code in the editor prints the returned value to STDOUT.

// Sample Input 0

// 5
// 1 1
// 2 3
// 3 3
// 3 4
// 4 5
// Sample Output 0

// 2
// Explanation 0

// There are  objects in the  array:

// Because we have two objects  that satisfy  (i.e.,  and ), we return  as our answer.

/*
 * Return a count of the total number of objects 'o' satisfying o.x == o.y.
 * 
 * Parameter(s):
 * objects: an array of objects with integer properties 'x' and 'y'
 */
function getCount(objects) {
  let count = 0;

  let x = objects[0].x;
  let y = objects[0].y;

  for (let i = 0; i < x.length; i++) {
       if (x[i] == y[i]) {
         count += 1;
       }
  }

  return count;
}