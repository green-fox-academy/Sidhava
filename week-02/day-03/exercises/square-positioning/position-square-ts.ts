'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that draws one square and takes 2 parameters:
// The x and y coordinates of the square's top left corner
// and draws a 50x50 square from that point.
// Draw 3 squares with that function.
// Avoid code duplication.



function rectangles(x: number, y: number) {
    ctx.fillRect(x, y, 50, 50);
    ctx.beginPath();
    ctx.moveTo(x, y);
}
    for (let i = 2; i <  5; i+= 1) {
        rectangles(50 * i, 50 * i);
    }