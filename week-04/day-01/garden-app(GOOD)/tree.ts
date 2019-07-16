'use strict';

import Plant from "./plant";

class Tree extends Plant {
    constructor(color: string, waterLevel?: number) {
        super(color, waterLevel);
    }
}

export default Tree;