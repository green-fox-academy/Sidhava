'use strict';

let phonebook = new Map();

phonebook.set("LWilliam A. Lathan", "405-709-1865");
phonebook.set("John K. Miller", "402-247-8568");
phonebook.set("Hortensia E. Foster", "606-481-6467");
phonebook.set("Amanda D. Newland", "319-243-5613");
phonebook.set("Brooke P. Askew", "307-687-2982");

/* phonebook.forEach(function(key, value) {
    if (key == 'John K. Miller') {
        console.log(value);
    }
}); */

console.log(phonebook.get('John K. Miller'));

phonebook.forEach(function(value, key) {
    if ( value == '307-687-2982') {
        console.log(key);
    }
});

console.log(phonebook.has("Chris E. Myers"));

