'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that draws one square and takes 1 parameters:
// The square size
// and draws a square of that size to the center of the canvas.
// Draw 3 squares with that function.
// Avoid code duplication.

function drawSquare(sizeofSquare: number) {
let middleWidth: number = canvas.width / 2;
let middleHeight: number = canvas.height / 2;
ctx.strokeRect(middleWidth - (sizeofSquare / 2), middleHeight - (sizeofSquare / 2), sizeofSquare, sizeofSquare);
}


for (let i = 1; i < 4; i++) {
    drawSquare(50 * i);
}