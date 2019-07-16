'use strict';

abstract class Animal {
    name: string;



    constructor(name: string) {
        this.name = name;
    }

    abstract getName():string;
    abstract breed(): string;
}

class Bird extends Animal {



    constructor(name: string) {
        super(name);
    }

    getName(): string {
        return this.name;
    }

    breed(): string {
        return 'laying eggs';
    }
}

class Mammal extends Animal {


    constructor(name: string) {
        super(name);
    }

    getName(): string {
        return this.name;
    }

    breed(): string {
        return 'pushing miniature versions out';
    }
}

class Reptile extends Animal {



    constructor(name: string) {
        super(name);
    }

    getName(): string {
        return this.name;
    }

    breed(): string {
        return 'laying eggs';
    }
}

export {Reptile, Mammal, Bird};