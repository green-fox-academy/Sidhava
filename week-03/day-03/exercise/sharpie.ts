'use strict';

class Sharpie {
    color: string;
    width: number;
    inkAmount: number = 100;

    constructor(color: string, width: number) {
        this.color = color;
        this.width = width;
    }

    use(): number {
       return this.inkAmount --;
    }
}

let blackSharpie: Sharpie = new Sharpie('Black', 1.2);
blackSharpie.use();
console.log(blackSharpie);