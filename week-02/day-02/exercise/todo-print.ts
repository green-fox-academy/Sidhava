    'use strict';
// Add "My todo:" to the beginning of the todoText
// Add " - Download games" to the end of the todoText
// Add " - Diablo" to the end of the todoText but with indention

// Expected outpt:

// My todo:
//  - Buy milk
//  - Download games
//      - Diablo

let todoText: string = ' - Buy milk\n';

function makeItWhole() {
    let stringBefore: string = 'My todo: \n';
    let stringAfter1: string = ' - Download games\n';
    let stringAfter2: string = '    - Diablo';

    todoText = stringBefore.concat(todoText).concat(stringAfter1).concat(stringAfter2);
    console.log(todoText);
}

makeItWhole();
