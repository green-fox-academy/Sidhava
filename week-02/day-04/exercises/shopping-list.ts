'use strict';

let shoppingList: string[] = ['Eggs', 'milk', 'fish', 'apples', 'bread', 'chicken'];

//Do we have milk on the list?

shoppingList.forEach(function(item) {
    if (item == 'milk') {
        console.log('there is');
    }
})

//Do we have banana on the list?

shoppingList.forEach(function(item) {
    if (item !== 'banana') {
        console.log('no banana');
    }
    
})