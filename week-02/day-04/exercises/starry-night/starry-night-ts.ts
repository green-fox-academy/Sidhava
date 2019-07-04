'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw the night sky:
//  - The background should be black
//  - The stars should be small squares
//  - The stars should have random positions on the canvas
//  - The stars should have random color (some shade of grey)

ctx.fillRect(0, 0, canvas.width, canvas.height);

function randomSquares() {
    let x: number = Math.floor((Math.random() * canvas.width) + 1);
    let y: number = Math.floor((Math.random() * canvas.height) + 1);
    let rgb: number = Math.floor((Math.random() * 256));
    let size: number = Math.floor((Math.random() * 15));
    ctx.fillStyle = 'rgb(' + rgb + ',' + rgb + ', ' + rgb + ')';
    ctx.fillRect(x, y, size, size);
}

for (let i = 0; i < 200; i++) {
    randomSquares()
}