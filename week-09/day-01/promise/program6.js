'use strict';

let promise = Promise.resolve('JUUUHUU');
let promise2 = Promise.reject(new Error('EEEEEEEEEEEWWWWWW'));

let promise3 = new Promise((resolve, reject) => {
})
.catch(error => {
    console.error('there is an arrererero');
    console.error(error.message);
})