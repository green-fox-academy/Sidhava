'use strict';

import Garden from './garden'
import Tree from './trees'
import Flower from './flowers'

let theGarden: Garden = new Garden();

let flower1: Flower = new Flower('Yellow');
let flower2: Flower = new Flower('Blue');

let tree1: Tree = new Tree('Purple');
let tree2: Tree = new Tree('Orange');

theGarden.addFlower(flower1);
theGarden.addFlower(flower2);

theGarden.addTree(tree1);
theGarden.addTree(tree2);

console.log(theGarden);

theGarden.wateringFlowers(40);
theGarden.wateringTrees(40);

console.log(theGarden);

theGarden.wateringFlowers(70);
theGarden.wateringTrees(70);


console.log(theGarden);


