'use strict';

import Plant from "./plant";

class Flower extends Plant {

    constructor(color: string, waterLevel?: number) {
        super(color, waterLevel);
    }
}

export default Flower;