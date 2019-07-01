'use strict';

let myName: string = 'Dani';
let yourName: string = 'Dani';
let hisName: string = 'Dani';

let cutePuppy: string[] = ['Morzsi', 'Liza', 'Furkesz'];

console.log(myName, yourName, hisName);
console.log(cutePuppy[0]);

for (let i: number = 0; i < cutePuppy.length; i++) {
    console.log (cutePuppy[i]);
}

cutePuppy.forEach(function(item) {
    console.log(item += 'ka');
})

let diffArray: any[] = ['Daniel', 'blah', 1, 5, 10];

let diffArray2: Array<string | number> = [1, 2, 5, 8, 'Annie'];

diffArray.splice(0, 1, 'what');

cutePuppy.forEach(function(item) {
    console.log(item += 'ka');
})

let doubled: number[] = [1, 2, 3, 4, 5].map(function(i) {
    return i ** 2;
})

console.log(doubled);

let odds: number[] = [1, 2, 3, 4, 5].filter(function(item) {
    return item % 2 != 0;
})

console.log(odds);

let array1: number[] = [1, 2];
let array2: number[] = [3, 4];

let array3: any[] = [...array1, ...array2];
console.log(array3);
