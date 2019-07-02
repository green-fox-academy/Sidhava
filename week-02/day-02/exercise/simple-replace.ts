'use strict';

let example: string = 'In a dishwasher far far away';
let wordNeedToBeChanged: any = /dishwasher/g;

let correctSentence: string = example.replace(wordNeedToBeChanged, "galaxy");

example = correctSentence;

// I would like to replace "dishwasher" with "galaxy" in this example
// Please fix it for me!
// Expected ouput: In a galaxy far far away

console.log(example);

export = example;