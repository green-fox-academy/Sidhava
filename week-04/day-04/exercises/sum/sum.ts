'use strict';

class Numbahs {
    numbahOf: number[] = [1, 2, 3 ,46 ,67];

    getSum(list: number[]): number {
        let sum: number = 0;
        for (let i = 0; i < list.length; i++) {
            sum += list[i];
        }
        return sum;
    }
}

export {Numbahs};