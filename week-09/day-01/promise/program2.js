"use strict";

const promise = new Promise(function(fulfill, reject) {
  setTimeout(() => fulfill('FULFILLED!'), 300);
})
.then(fulfill2 => {
  console.log(fulfill2);
})

// Your solution here
