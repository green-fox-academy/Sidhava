'use strict1';

export = {}

let single: string = 'single quotes';
let double: string = "double quotes";

let backTick: string = `Today is ${(100 ** 2) - 1}`;

console.log(single, double, backTick);

console.log(single.length)
console.log(single.toUpperCase());
console.log(single.toLowerCase());

function toUpperCaseAtIndex(text: string, index: number): string {
    let prefix: string = text.slice(0, index);
    let replaceUpperCase: string = text.charAt(index).toUpperCase(); 
    let suffix: string = text.slice (index + 1);
    return prefix.concat(replaceUpperCase).concat(suffix);
}

console.log(toUpperCaseAtIndex("appletree", 2));

let greeting: string = 'hello create class create';

let lettersOfWord: string[] = greeting.split('');

console.log(lettersOfWord);

let greetingTherRightWay: string = greeting.replace(/create/g, 'Create');

console.log(greetingTherRightWay);

let textToSlice: string = '12312434456';
let spliced: string = textToSlice.slice(4, -3);
console.log(spliced);