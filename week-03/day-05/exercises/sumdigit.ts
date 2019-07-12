'use strict';
let somofDigits: number = 0;
function sumdigit(wholeNumber: number) {
   if (wholeNumber < 10) {
       somofDigits += wholeNumber;
   } else {
       somofDigits += wholeNumber % 10;
       sumdigit(Math.floor(wholeNumber / 10));
   }
}

sumdigit(1274234);
console.log(somofDigits);