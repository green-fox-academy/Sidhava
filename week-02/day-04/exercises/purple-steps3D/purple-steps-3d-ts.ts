'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/assets/r4.png]

function drawSquare(x: number) {
    ctx.fillStyle = 'purple';
    ctx.fillRect(x, x, x, x);
}
    for (let i = 5; i < 100; i++) {
       drawSquare(i);
       i += i;
    }
