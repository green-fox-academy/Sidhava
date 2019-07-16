'use strict';

import Tree from "./trees";
import Flower from "./flowers";


class Garden {
    trees: Tree[];
    flowers: Flower[];

    constructor() {
        this.trees = [];
        this.flowers = [];
    }

    addTree(tree: Tree): void {
        this.trees.push(tree);
    }

    addFlower(flower: Flower): void {
        this.flowers.push(flower);
    }

    wateringAmountForPlants(amountOfWater: number): number {
        let numOfTreesAndFlowers: number = this.flowers.length + this.trees.length;
        let waterForEachPlant: number = amountOfWater / numOfTreesAndFlowers;
        return waterForEachPlant;
    }

    wateringFlowers(water: number): void {
        for (let i = 0; i < this.flowers.length; i++) {
          if (this.flowers[i].waterLevel < 5) {
            this.flowers[i].waterLevel += this.wateringAmountForPlants(water) * 0.75;
            if (this.flowers[i].waterLevel < 5) {
                console.log(`${this.flowers[i]} needs water`);
            } else {
                console.log(`${this.flowers[i]} doesn't needs water`);
            }
          }
        }
      }

      wateringTrees(water: number): void {
        for (let i = 0; i < this.trees.length; i++) {
            if (this.trees[i].waterLevel < 10) {
                this.trees[i].waterLevel += this.wateringAmountForPlants(water) * 0.4;
                if (this.trees[i].waterLevel < 10) {
                    console.log(`${this.trees[i]} needs water`);
                } else {
                    console.log(`${this.trees[i]} doesn't needs water`);
                }
              }
        }
    }
}


export default Garden;