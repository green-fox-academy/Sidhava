'use strict';

export = {};

let person = {
    name: 'John',
    age: 21,
    friends: [],
    greeting: function() {
        console.log('Hi, my name is John ;)');
    },
    plsDontHateMe: {
        name: 'Mark'
    }
};

console.log(person.name);

person.greeting();

console.log(person.plsDontHateMe.name);

console.log(Object.keys(person));

console.log(person.hasOwnProperty("name"));
console.log(person.hasOwnProperty("namez"));

let personCopyWithReference = person;

console.log(person);
console.log(personCopyWithReference);
person.name = 'new Name';
console.log("new name of the personCopy", personCopyWithReference.name);

