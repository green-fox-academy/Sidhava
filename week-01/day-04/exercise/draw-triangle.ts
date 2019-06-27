'use strict';

let lineCount: number = 4;
let triangle: string = '';

for (let i: number = 1; i <= 4; i++) {
    triangle += '*';
    console.log(triangle);
}

// Write a program that draws a triangle like this:
//
// *
// **
// ***
// ****
//
// The triangle should have as many lines as lineCount is