'use strict';

let promise = new Promise((resolve, reject) => {
    resolve('I FIRED');
    reject(new Error('I DID NOT FIRE'));
})
.then(console.log, onRejected);

function onRejected(error) {
    console.log(error.message);
}