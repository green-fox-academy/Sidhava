    'use strict';
// -  Create a two dimensional list
//    which can contain the different shades of specified colors
// -  In `colors[0]` store the shades of green:
//    `"lime", "forest green", "olive", "pale green", "spring green"`
// -  In `colors[1]` store the shades of red:
//    `"orange red", "red", "tomato"`
// -  In `colors[2]` store the shades of pink:
//    `"orchid", "violet", "pink", "hot pink"`

let colors = [];

let shadesOfGreen: string[] = ["lime", "forest green", "olive", "pale green", "spring green"];
let shadesOfRed: string[] = ["orange red", "red", "tomato"];
let shadesOfPink: string[] = ["orchid", "violet", "pink", "hot pink"];

colors[0] = shadesOfGreen;
colors[1] = shadesOfRed;
colors[2] = shadesOfPink;

console.log(colors[0]);
console.log(colors[1]);
console.log(colors[2]);

console.log(colors);