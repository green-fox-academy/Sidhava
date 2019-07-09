'use strict';
declare function require(path: string): any;
export {};

const fs = require('fs');

// Write a function that is able to manipulate a file
// By writing your name into it as a single line
// The file should be named "my-file.txt"
// In case the program is unable to write the file,
// It should print the following error message: "Unable to write file: my-file.txt"

function writeToFile(filename: string, contentToFile: any) {
    if (filename !== 'my-file.txt') {
        throw Error('Unable to write file: my-file.txt');
    }
    let content = fs.writeFileSync(filename, contentToFile)
}
try {
    writeToFile('my-file.txt' ,'jasdasd');
} catch {
    console.log(`Unable to write file: my-file.txt`);
}