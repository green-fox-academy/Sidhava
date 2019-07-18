'use-strict';
 
import {anagram} from './anagramm'
import test from 'tape';

test(t => {
    t.equals(anagram('zsemle', 'blueprint'), false);
    t.equals(anagram('dani', 'adni'), true);
    t.end();
})