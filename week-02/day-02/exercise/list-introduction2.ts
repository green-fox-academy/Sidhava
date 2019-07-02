let listA: string[] = ["Apple", "Avocado", "Blueberries", "Durian", "Lychee"];

let listB: string[] = [...listA];

console.log(listB);

/* for (let i = 0; i < listA.length; i++) {
    if (listA[i] == "Durian") {
        console.log("Yeeeeep it's here");
    }
    
}
 */

/* listA.find(function(item) {
    if (item == 'Durian') {
        console.log('yep it is here');
    } 
})  */
function x() {
if (listA.includes('Durian')) {
    console.log("yuuhuu");
} else {
    console.log('nyehe');
}
}

x();
listB.splice(3, 1);
console.log(listB);

listA.splice(4, 0, 'Kiwifruit');

console.log(listA);

function compare() {
    if (listA.length == listB.length) {
        console.log('The size is the same');
    } else if (listA.length > listB.length) {
        console.log('ListA is bigger');
    } else {
        console.log('ListB is bigger');
    }
}

compare();

console.log(listA.indexOf('Avocado'));

console.log(listB.indexOf('Durian'));

listB.push('Passion Fruit', 'Pomelo');
console.log(listB);

console.log(listA[2]);