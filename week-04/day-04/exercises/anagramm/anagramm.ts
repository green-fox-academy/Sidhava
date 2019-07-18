'use-strict';

let word1: string = 'aplie';
let word2: string = 'pie';

function anagram(word1: string, word2: string) {
    let what1: string =  word1.split('').sort().join(',');
    let what2: string =  word2.split('').sort().join(',');
    if (what1 === what2) {
        return true;
    } else {
        return false;
    }
}

export {anagram};