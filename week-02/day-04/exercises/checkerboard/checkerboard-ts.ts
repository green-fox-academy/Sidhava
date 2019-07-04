'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Fill the canvas with a checkerboard pattern.

function cubeBlack(x: number, y: number, z: number) {
    ctx.fillRect(x, y, z, z);
    
    
}

for (let i = 0; i < 8; i++) {
    for ( let j = 0; j < 8; j++) {
        console.log(i,j);
        if ( (i + j) % 2 === 0) {
        cubeBlack(i * 20, j * 20, 20);
        }
    }
}