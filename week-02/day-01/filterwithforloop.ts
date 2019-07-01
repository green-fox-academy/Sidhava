'use strict';

let names: string[] = ['Captain Marvel', 'Winter Soldier', 'Black Panther', 'Daniel'];

function filterNamesLongerThanFive(names: string[]) :string[] {
    let filteredNames: string[] = [];
    for(let index: number = 0; index < names.length; index++) {
        if (names[index].length > 7) {
            filteredNames.push(names[index]);
        }
    }
    return filteredNames;
}

console.log(filterNamesLongerThanFive(names));
