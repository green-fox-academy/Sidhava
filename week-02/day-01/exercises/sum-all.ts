'use strict';

// -  Create a variable named `ai` with the following content: `[3, 4, 5, 6, 7]`
// -  Log the sum of the elements in `ai` to the console

let ai: number[] = [3, 4, 5, 6, 7];
let sum: number = 0;

for (let index: number = 0; index < ai.length; index++) {
    sum += ai[index];
}

ai.push(sum);
console.log(ai);