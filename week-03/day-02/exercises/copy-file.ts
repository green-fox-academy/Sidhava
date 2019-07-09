'use strict';
declare function require(path: string): any;
export {};

const fs = require('fs');


// Write a function that copies the contents of a file into another
// It should take the filenames as parameters
// It should return a boolean that shows if the copy was successful

function copyContent(fromFile: string, toFile: string) {
    let contentOfReadFile = fs.readFileSync(fromFile, 'utf-8');
    fs.writeFileSync(toFile, contentOfReadFile);
    if (fs.readFileSync(fromFile, 'utf-8') === fs.readFileSync(toFile, 'utf-8')) {
    return true;
}
}

console.log(copyContent('my-File.txt', 'our-file.txt'));