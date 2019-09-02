'use strict';

let firstPromise = first();

let secondPromise = firstPromise.then(function (val) {
  return second(val);
});

secondPromise.then(console.log);
