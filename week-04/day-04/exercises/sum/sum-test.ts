'use strict';

import test from 'tape';
import {Numbahs} from './sum'

test(t => {
    let instance: Numbahs = new Numbahs();
    let numbers: number[] = [1, 2 ,3, 4, 5, 6];
    let numbers1: number[] = [];
    let numbers2: number[] = [1];
    t.equals(instance.getSum(numbers), 21);
    t.equals(instance.getSum(numbers1), 0);
    t.equals(instance.getSum(numbers2), 1);
    t.end();
})