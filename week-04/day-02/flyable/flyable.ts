'use strict';

/* Create a Flyable interface
it should have land, fly and takeOff methods (TakeOff in C#)
Create an abstract Vehicle class
it should have at least 3 fields
Extend Helicopter class from Vehicle
implement your Flyable interface
Extend Bird from your abstract Animal class (zoo exercise)
implement yourˇFlyable interface */

interface Flyable {
    land();
    fly();
}

abstract class Vehicle {
    fueltype: string;
    color: string;
    weight: number;

    constructor(fueltype: string, color: string, weight: number) {
        this.fueltype = fueltype;
        this.color = color;
        this.weight = weight;
    }
}

class Helicopter extends Vehicle implements Flyable {

    constructor(fueltype: string, color: string, weight: number) {
        super(fueltype, color, weight);
    }

    land() {
        return this.land();
    }

    fly() {
        return this.fly();
    }
}

export {Flyable};