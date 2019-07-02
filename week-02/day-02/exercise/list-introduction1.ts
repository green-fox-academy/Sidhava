'use strict';

let nameList: string[] = new Array(3);

console.log(nameList);

nameList[0] = 'William';

console.log(nameList);

nameList[1] = 'John';
nameList[2] = 'Amanda';

/* 
OR let nameList: string[] = [];
console.log(nameList.length);
nameList.push('William')
nameList.push('John')
nameList.push('Amanda')

*/

console.log(nameList);
console.log(nameList[2]);

nameList.forEach(function(item) {
    console.log(item);
})

for (let index: number = 1; index <= nameList.length; index++) {
    console.log(index  + '. ' + nameList[index-1] );
}

nameList.splice(1, 1);
console.log(nameList);

nameList.reverse();

nameList.forEach(function(item) {
    console.log(item);
})

nameList.splice(0);

console.log(nameList);