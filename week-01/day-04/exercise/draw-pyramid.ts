'use strict';

 let lineCount: number = 4;

 for (let i: number = 0; i < 4; i++) {
    let row: string = '';
    for (let j: number = 0; j < lineCount - i; j++) {
      row += ' ';
    }
    for (let k: number = 1; k <= 2 * i + 1; k++){
      row += '*';
    }
    console.log(row);
 }



// Write a program that draws a
// pyramid like this:
//
//    *
//   ***
//  *****
// *******