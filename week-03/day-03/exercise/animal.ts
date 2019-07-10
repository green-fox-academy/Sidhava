'use strict';
class Animal {
    hunger: number = 50;
    thirst: number = 50;

    constructor(hunger: number, thirst: number) {
        this.hunger = hunger;
        this.thirst = thirst;
    }

    eat():number {
       return this.hunger -= 1;
    }

    drink(): number {
        return this.thirst -= 1;
    }

    play(): number {
       return this.thirst ++ && this.hunger ++;
    }
}

let dog: Animal = new Animal(50, 50);
dog.eat();
dog.eat();
dog.drink();
dog.play();

console.log(dog);

