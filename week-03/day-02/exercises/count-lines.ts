'use strict';
declare function require(path: string): any;
export {};

const fs = require('fs');

// Write a function that takes a filename as string,
// then returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.

function fileAsString(filename: string):number {
    let content = fs.readFileSync(filename, 'utf-8');   
    console.log(content);
    let lines: number = 1;
    for (let i:number = 0; i < content.length; i++) {
        if (content[i] === '\n') {
            lines += 1;
        }
    }
    console.log('number of lines in file: ' + lines);
    return lines;
}
try {
fileAsString('my-file.txt');
} catch (e) {
    console.log(0);
}
