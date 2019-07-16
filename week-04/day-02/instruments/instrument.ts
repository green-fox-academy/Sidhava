'use strict';

abstract class Instrument {
    name: string;
    abstract play(): void;

    constructor(name:string) {
        this.name = name;
    }
}

abstract class StringedInstrument extends Instrument {
    numberOfStrings: number;
    abstract sound(): string;

    constructor(numberOfStrings: number, name: string) {
        super(name);
        this.numberOfStrings = numberOfStrings;
    }
}

class ElectricGuitar extends StringedInstrument {


    constructor(numberOfStrings: number = 6) {
        super(numberOfStrings, 'Eguitar');
    }

    sound(): string {
        return 'Twang';
    }

    play(): void {
        console.log(`${this.name}, a ${this.numberOfStrings}-stringed instrument that goes ${this.sound()}`);
        //Electric Guitar, a 6-stringed instrument that goes Twang
    }
}

class BassGuitar extends StringedInstrument {

    constructor(numberOfStrings: number = 4) {
        super(numberOfStrings, 'Bguitar');

    }

    sound(): string {
        return 'Duum-duum-duum';
    }

    play(): void {
        console.log(`${this.name}, a ${this.numberOfStrings}-stringed instrument that goes ${this.sound()}`);
    }
}

class Violin extends StringedInstrument {

    constructor(numberOfStrings: number = 4) {
        super(numberOfStrings, 'Violin');
    }

    sound(): string {
        return 'Screech';
    }

    play(): void {
        console.log(`${this.name}, a ${this.numberOfStrings}-stringed instrument that goes ${this.sound()}`);
    }
}

export { Instrument, StringedInstrument, ElectricGuitar, BassGuitar, Violin };