'use strict';

import Plant from "./plant";
import Flower from "./flower";
import Tree from "./tree";

class Garden {
    plants: Plant[];

    constructor() {
        this.plants = [];
    }

    addPlant(plant: Plant): void {
        this.plants.push(plant);
    }

    plantsNeedWater(): number {
        let numOfPlantsNeedWater = 0;
        for (let i = 0; i < this.plants.length; i++) {
            if (this.plants[i] instanceof Flower) {
                if (this.plants[i].waterLevel < 5) {
                    //console.log(`${this.plants[i]} needs water.`)
                    numOfPlantsNeedWater += 1;
                } else {
                    //console.log(`${this.plants[i]} doesn't need water.`)
                }
            } else if (this.plants[i] instanceof Tree) {
                if (this.plants[i].waterLevel < 10) {
                    //console.log(`${this.plants[i]} needs water.`)
                    numOfPlantsNeedWater += 1;
                } else {
                    //console.log(`${this.plants[i]} doesn't need water.`)
                }
            }
        }
        return numOfPlantsNeedWater;
    }

    waterAmountForPlants(amountOfWater: number): number {
        let waterForEachPlant: number = amountOfWater / this.plantsNeedWater();
        return waterForEachPlant;
    }

    waterThePlants(water: number): void {
        for (let i = 0; i < this.plants.length; i++) {
            if (this.plants[i].waterLevel < 5 && this.plants[i] instanceof Flower) {
                this.plants[i].waterLevel += this.waterAmountForPlants(water) * 0.75;
                } else if (this.plants[i].waterLevel < 10 && this.plants[i] instanceof Tree){
                    this.plants[i].waterLevel += this.waterAmountForPlants(water) * 0.4;
                } else{
                    
                }
              }
        }
   




}

let theGarden: Garden = new Garden();

theGarden.addPlant(new Flower('yellow', 0));
theGarden.addPlant(new Flower('blue', 0));
theGarden.addPlant(new Tree('purple', 0));
theGarden.addPlant(new Tree('orange', 0));

console.log(theGarden);
console.log('...............................');
console.log(theGarden.waterThePlants(40));
console.log(theGarden);
console.log('...............................');
console.log(theGarden.waterThePlants(70));
console.log(theGarden);




export default Garden;

