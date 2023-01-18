// ## Objective

// In this challenge, we practice looping over the characters of string. Check out the attached tutorial for more details.

// ## Task

// 1. First, print each vowel in ***s*** on a new line. The English vowels are a, e, i, o, and u, and each vowel must be printed in the same order as it appeared in ***s***.
// 2. Second, print each consonant(i.e., non - vowel) in ***s*** on a new line in the same order as it appeared in ***s***.

// ## Function Description

// Complete the vowelsAndConsonants function in the editor below.

// vowelsAndConsonants has the following parameters:

// - string s: the string to process

// ## Prints

//     - Print each vowel of *** s *** in order on a new line, then print each consonant in order on a new line.Return nothing.

// ## Input Format

// There is one line of input with the string ***s***.

// ## Output Format

// First, print each vowel in ***s*** on a new line (in the same order as they appeared in ***s***). Second, print each consonant (i.e., non-vowel) in ***s*** on a new line (in the same order as they appeared in ***s***).

// ## Sample Input 0

// ```
// javascriptloops
// ```

// ## Sample Output 0

// ```
// a
// a
// i
// o
// o
// j
// v
// s
// c
// r
// p
// t
// l
// p
// s
// ```

"use strict";

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
  // Have two loops that check for vowels and check for non vowels in that order
  // Use switch statement as a check for the vowels
  for (i = 0; i < s.length; i++) {
    switch (s[i]) {
      case "a":
        console.log("a");
        break;
      case "e":
        console.log("e");
        break;
      case "i":
        console.log("i");
        break;
      case "o":
        console.log("o");
        break;
      case "u":
        console.log("u");
        break;
    }
  }

  //   Prints all characters that are not aeiou
  for (i = 0; i < s.length; i++) {
    if (s[i] !== ("a" || "e" || "i" || "o" || "u")) {
      console.log(s[i]);
    }
  }
}


function main() {
    const s = readLine();
    
    vowelsAndConsonants(s);
}

main()


