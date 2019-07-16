'use strict';

import Garden from "./garden";

class Tree extends Garden {
    color: string;
    waterLevel: number;

    constructor(color: string) {
        super();
        this.color = color;
        this.waterLevel = 0;
    }


}

export default Tree;